import Image from 'next/image'
import Slider1 from '../../../public/image 1.png'
import Slider2 from '../../../public/image 2.png'


export default function Carousel(){
    return(
        <>
       <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <Image src={Slider1} className="d-block w-100" width={100} height={700} alt="..." />
    </div>
    <div className="carousel-item">
      <Image src={Slider2} className="d-block w-100" width={100} height={700} alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    );
}