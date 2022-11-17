import React, { useEffect, useState, useRef } from "react";
import "./Galleryhome.css";
import Masony from "react-masonry-component";
import Carousel from "react-bootstrap/Carousel";
import { initial, slice } from "lodash";
import ReactPlayer from "react-player";

// Masory Options
const masonryOptions = {
  fitWidth: false,
  columnWidth: 350,
  gutter: 3,
  itemSelector: ".photo-item",
};

export default function Galleryvideo() {
  const [videosData, setvideosData] = React.useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [index, setIndex] = useState(2);
  const initialUsers = slice(videosData, 0, index);

  const [videoModal, setVideoModal] = React.useState({
    showModal: false,
    modalSrc: null,
    videoIndex: null,
    currentSectionLength: null,
  });

  const [page, setPage] = React.useState(0);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      "https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/gallery_slider/"
    )
      .then((response) => response.json())
      .then((res) => {
        setvideosData([...videosData, ...res]);
      })
      .catch((err) => {});
  };

  const showMore = () => {
    setIndex(index + 2);
    //console.log(index)
    if (index >= videosData.length) {
      setIsFinished(true);
    } else {
      setIsFinished(false);
    }
  }

  const onSet = (type) => {
    if (type === "prev") {
      if (videoModal.videoIndex != 0) {
        let data = videosData[videoModal.videoIndex - 1];

        setVideoModal((modal) => ({
          ...modal,
          videoIndex: videoModal.videoIndex - 1,
          modalSrc: data.acf.video,
        }));
      } else {
        alert("NO MORE LEFT video");
      }
    } else if (type === "next") {
      if (videoModal.videoIndex > videosData.length) {
        alert("NO MORE LEFT video");
      } else {
        let data = videosData[videoModal.videoIndex + 1];

        setVideoModal((modal) => ({
          ...modal,
          videoIndex: videoModal.videoIndex + 1,
          modalSrc: data.acf.video,
        }));
      }
    }
  };

  const [glyttl, setGlyttl] = useState([]);

  useEffect(() => {
    async function gallerycon() {
      const gallerycondata = await fetch(
        "https://controlf5.co.in/client-demo/sanctorum-wordpress/wp-json/wp/v2/pages/33"
      );
      const gallerycondatas = await gallerycondata.json();
      setGlyttl(gallerycondatas.acf);
      // console.log(gallerycondatas.acf);
    }
    gallerycon();
  }, []);

  let videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
   const playVideo = () => {

    setIsPlaying(!isPlaying);

    // setIsPlaying(true)


  }

  return (
    <>
      <section id="gallery">
        <div className="container">
          <h4> {glyttl.gallery_title}</h4>
          <h3>Our Videos</h3>
          <div className="galley-main">
            <div className="conatiner">
              <div className="desktop-gallery">
                <div
                  datalength={videosData.length}
                  hasmore="true"
                  loader={<h4></h4>}
                  endmessage={
                    <p style={{ textAlign: "center" }}>
                      <b>Yay! You have seen it all</b>
                    </p>
                  }
                  pulldowntorefresh="true"
                  pulldowntorefreshthreshold={2}
                  pulldowntorefreshcontent={
                    <h3 style={{ textAlign: "center" }}>
                      &#8595; Pull down to refresh
                    </h3>
                  }
                  releasetorefreshcontent={
                    <h3 style={{ textAlign: "center" }}>
                      &#8593; Release to refresh
                    </h3>
                  }
                >
                  <Masony
                    className={"photo-list"}
                    elementType={"ul"}
                    options={masonryOptions}
                    disablevideosLoaded={false}
                    updateOnEachvideoLoad={false}
                  >
                    
                    {videosData &&
                      initialUsers.map((photo, index) => (
                        <li className={`photo-item`} key={index}>
                          <div>
                            <ReactPlayer
                              ref={videoRef}
                              url={photo.acf.video_gallery}
                              width="100%"
                              pip={true}
                              controls={true}
                              playing={isPlaying}
                              onClick={() => {
                                setVideoModal({
                                  showModal: true,
                                  modalSrc:photo.acf.video_gallery,
                            
                                  videoIndex: index,
                                  currentSectionLength: videosData.length
                                });
                              }}
                            />
                          </div>
                        </li>
                      ))}
                  </Masony>
                </div>
                {isFinished ? (
                  <button
                    onClick={showMore}
                    type="button"
                    className="disabled showbtn"
                  >
                    Viewed less
                  </button>
                ) : (
                  <button onClick={showMore} type="button" className="showbtn">
                    Load more
                  </button>
                )}



    
              </div>
              <div className='mob-gallery'>
                <Carousel>
                  {videosData &&
                    videosData.map((video, index) => (
                      <Carousel.Item interval={1000} key={index}>
                        <img
                          className='d-block w-100'
                          src={video.acf.video_gallery}
                          alt="First slide"
                        />

                      </Carousel.Item>
                    ))}

                </Carousel>


</div>
            </div>
          </div>
        </div>
      </section>

      <div
        id="myModal"
        className="modal"
        style={{
          display: videoModal.showModal ? "block" : "none",
        }}
      >
        <div>
          <span
            className="close"
            onClick={() =>
              setVideoModal((modal) => ({ ...modal, showModal: false }))
            }
          >
            &times;
          </span>

          <div
            className="mySlides"
            style={{ display: videoModal.showModal ? "block" : "none" }}
          >
            <iframe
              className="modal-content"
              id="img01"
              src={videoModal.modalSrc}
              alt=""
            />
          </div>

          <a href="#" className="prev" onClick={() => onSet("prev")}>
            &#10094;
          </a>
          <a href="#" className="next" onClick={() => onSet("next")}>
            &#10095;
          </a>

          <div />
        </div>
      </div>
    </>
  );
}
