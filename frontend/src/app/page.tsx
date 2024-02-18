import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="fs-5 text-center">Privacy-First Location Verification</h2>
      <p className="mt-3 text-secondary px-4">zk-geo offers a novel way to engage with location-based services while prioritizing your privacy. Our platform allows you to confirm your proximity to specific points—like your nearest ramen shop—without disclosing your exact location. With zk-geo, enjoy personalized recommendations and ads based on your locale, without the privacy concerns of traditional location sharing. Leveraging zero-knowledge proofs, zk-geo empowers you to explore and connect with local spots securely and anonymously. Integrating such a feature directly into browsers could significantly enhance user experience, offering seamless privacy-preserving location verification. Welcome to zk-geo, where your location is a private matter.</p>
      <div className="mt-3 accordion accordion-flush w-100" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="fs-4 m-0 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Tokyo
            </button>
          </h2>
          <ul id="flush-collapseOne" className="accordion-collapse collapse list-group list-group-flush ps-3" data-bs-parent="#accordionFlushExample">
            <Link href="/city?place=0000" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at</span><span className="station">Shinjuku</span><span className="text-gray mx-3">lon : 139.700464, lat : 35.689729</span></li>
            </Link>
            <Link href="/city?place=0001" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at</span><span className="station">Shibuya</span><span className="text-gray mx-3">lon : 139.701238, lat : 35.658517</span></li>
            </Link>
            <Link href="/city?place=0002" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at</span><span className="station">Tokyo</span><span className="text-gray mx-3">lon : 139.767125, lat : 35.681236</span></li>
            </Link>
            <Link href="/city?place=0003" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at</span><span className="station">Ueno</span><span className="text-gray mx-3">lon : 139.777043, lat : 35.713768</span></li>
            </Link>
            <Link href="/city?place=0004" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at</span><span className="station">Ikebukur</span><span className="text-gray mx-3">lon : 139.71038, lat : 35.729503</span></li>
            </Link>
            <Link href="/city?place=0005" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at</span><span className="station">Akihabara </span><span className="text-gray mx-3">lon : 139.773288, lat : 35.69836</span></li>
            </Link>
          </ul>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="fs-4 m-0 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Osaka
            </button>
          </h2>
          <ul id="flush-collapseTwo" className="accordion-collapse collapse list-group list-group-flush ps-3" data-bs-parent="#accordionFlushExample">
            <Link href="/city?place=0100" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at </span><span className="station">Osaka･Umeda</span><span className="text-gray mx-3">lon : 135.498852, lat : 34.702485</span></li>
            </Link>
            <Link href="/city?place=0101" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at </span><span className="station">Nanba</span><span className="text-gray mx-3">lon : 135.502165, lat : 34.662485</span></li>
            </Link>
            <Link href="/city?place=0102" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at </span><span className="station">Tennoji</span><span className="text-gray mx-3">lon : 135.518063, lat : 34.6457</span></li>
            </Link>
          </ul>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="fs-4 m-0 accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Aichi
            </button>
          </h2>
          <ul id="flush-collapseThree" className="accordion-collapse collapse list-group list-group-flush ps-3" data-bs-parent="#accordionFlushExample">
            <Link href="/city?place=0200" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at </span><span className="station">Nagoya</span><span className="text-gray mx-3">lon : 136.881537, lat : 35.170692</span></li>
            </Link>
            <Link href="/city?place=0201" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at </span><span className="station">Sakae</span><span className="text-gray mx-3">lon : 136.908619, lat : 35.168095</span></li>
            </Link>
            <Link href="/city?place=0202" className="text-decoration-none">
              <li className="list-group-item border-0"><span className="Imat me-2">I`m at </span><span className="station">Kanayama</span><span className="text-gray mx-3">lon : 136.900218, lat : 35.15055</span></li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
