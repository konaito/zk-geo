"use client"

import { useSearchParams } from "next/navigation";
import { redirect } from 'next/navigation'
import { useState, useEffect } from 'react';

interface cityInfo {
    name: string;
    no: string;
    lon: number;
    lat: number;
}

const DeniedGeolocation = 1;
const IsCloserTrue = 2;
const IsCloserFalse = 3;

export default function City() {
    // @ts-ignore
    const cities: [cityInfo] = [
        { "name": "Shinjuku", "no": "0000", "lon": 139.700464, "lat": 35.689729 },
        { "name": "Shibuya", "no": "0001", "lon": 139.701238, "lat": 35.658517 },
        { "name": "Tokyo", "no": "0002", "lon": 139.767125, "lat": 35.681236 },
        { "name": "Ueno", "no": "0003", "lon": 139.777043, "lat": 35.713768 },
        { "name": "Ikebukur", "no": "0004", "lon": 139.71038, "lat": 35.729503 },
        { "name": "Akihabara", "no": "0005", "lon": 139.773288, "lat": 35.69836 },
        { "name": "Osaka･Umeda", "no": "0100", "lon": 135.498852, "lat": 34.702485 },
        { "name": "Nanba", "no": "0101", "lon": 135.502165, "lat": 34.662485 },
        { "name": "Tennoji", "no": "0102", "lon": 135.518063, "lat": 34.6457 },
        { "name": "Nagoya", "no": "0200", "lon": 136.881537, "lat": 35.170692 },
        { "name": "Sakae", "no": "0201", "lon": 136.908619, "lat": 35.168095 },
        { "name": "Kanayama", "no": "0202", "lon": 136.900218, "lat": 35.15055 }
    ]

    const searchParams = useSearchParams();
    const place = searchParams.get("place");

    const [city, setCity] = useState<cityInfo>();
    const [error, setError] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        if (place) {
            setCity(cities.find(city => city.no === place));
        }
        else {
            redirect("/");
        }
    }, [place]);

    const pushButton = async () => {
        // 現在の時刻を文字列で取得
        const now = new Date().toISOString();

        // 文字列をArrayBufferに変換
        const encoder = new TextEncoder();
        const data = encoder.encode(now);

        try {
            // SHA-256 ハッシュ関数を使用してハッシュ化
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);

            // ArrayBufferを16進数の文字列に変換
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

            // navigator.shareを使用してハッシュを共有
            await navigator.clipboard.writeText(hashHex);
            alert("Copied!")
        } catch (err) {
            alert(`Error: ${err}`)
        }
    };


    return (
        <>
            <p className="mt-3 text-secondary px-4">ZKP proves whether you are near the specified location or not.</p>
            <div>
                {city
                    && <div>
                        <p>City : {city.name}</p>
                        <p>Longitude : {city.lon}</p>
                        <p>Latitude : {city.lat}</p>
                    </div>
                }
            </div>
            <div>
                {
                    error == DeniedGeolocation &&
                    <p className="text-warning">User denied Geolocation</p>
                }
                {
                    error == 0 &&
                    <button type="button" className={"btn " + (loading ? "btn-muted" : "btn-primary")}
                        onClick={() => {
                            console.log("onClick ---start---")
                            navigator.geolocation.getCurrentPosition(async (position) => {
                                setLoading(true);
                                const { latitude, longitude } = position.coords;
                                console.log(latitude, longitude);
                                const response = await fetch('/api/isCloser', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        userLon: longitude,
                                        userLat: latitude,
                                        placeLon: 139.701238,
                                        placeLat: 35.658517,
                                    }),
                                });
                                const data = await response.json();
                                if (data.isCloser) {
                                    setError(IsCloserTrue);
                                }
                                else {
                                    setError(IsCloserFalse)
                                }
                                console.log(data);
                                setLoading(false);
                            }, (error) => {
                                console.error('位置情報の取得に失敗しました。', error);
                                setError(DeniedGeolocation);
                            });
                        }}
                    >{loading ? <>loading</> : <>Verify</>}</button>
                }
                {
                    error == IsCloserTrue &&
                    <p className="text-success">We can confirm that you are nearby.</p>
                }
                {
                    error == IsCloserFalse &&
                    <p className="text-danger">We couldn`t confirm that you were nearby.</p>
                }
                {
                    (error == IsCloserTrue || error == IsCloserFalse) &&
                    <div>
                        <button type="button" className="btn btn-primary" onClick={pushButton}>Share the Results</button>
                    </div>
                }
            </div>
        </>
    );
}
