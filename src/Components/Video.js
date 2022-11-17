import React from 'react'
import './video.css';

export default function Video() {

  // $(document).ready(function() {
  //   $('.video-gallery').magnificPopup({
  //   delegate: 'a', 
  //   type: 'img',
  //   gallery:{
  //     enabled:true
  //   }
  // });
  // });

 

  

  return (
    <div>
<div className="content">
  <h1 className="section-header">Video Gallery</h1>
  <div className="section-header-underline"></div>
  <div className="video-gallery">
    <div className="gallery-item">
      <video src="https://i.pinimg.com/originals/75/f9/97/75f997ee6acf59dc51bbea05eae36677.jpg" alt="North Cascades National Park" />
      <div className="gallery-item-caption">
        {/* <div>
          <h2>North Cascades</h2>
          <p>The mountains are calling</p>
        </div> */}
        <a className="vimeo-popup" href="https://www.youtube.com/embed/-_pT-tO9LJc"></a>
      </div>
    </div>

    <div className="gallery-item ">
      <video src="https://cdn.davemorrowphotography.com/wp-content/uploads/2016/08/Mount-Rainier-Star-Photography-Workshops-and-Tours-Header-900x394.jpg" alt="Mt. Rainier" />
      <div className="gallery-item-caption">
        {/* <div>
          <h2>Mt. Rainier</h2>
          <p>14410 feet of adventure</p>
        </div> */}
        <a className="vimeo-popup" href="https://www.youtube.com/embed/-_pT-tO9LJc"></a>
      </div>
    </div>

    <div className="gallery-item">
      <video src="https://wqtcq1f34a8kduuv3sc0e76o-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/12394537_web1_180620-pdn-goat-web.jpg" alt="Olympic National Park" />
      <div className="gallery-item-caption">
        {/* <div>
          <h2>Olympic National Park</h2>
          <p>Mountains, rain forests, wild coastlines</p>
        </div> */}
        <a className="vimeo-popup" href="https://youtu.be/-_pT-tO9LJc"></a>
      </div>
    </div>

    <div className="gallery-item">
      <video src="https://upload.wikimedia.org/wikipedia/commons/d/dc/MSH82_st_helens_plume_from_harrys_ridge_05-19-82.jpg" alt="Mount St. Helens" />
      <div className="gallery-item-caption">
        {/* <div>
          <h2>Mount St. Helens</h2>
          <p>The one and only</p>
        </div> */}
        <a className="vimeo-popup" href="https://vimeo.com/171540296"></a>
      </div>
    </div>

  </div>
</div>


    </div>
  )
}
