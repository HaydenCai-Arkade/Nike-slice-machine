import React from "react";
import { array, shape } from "prop-types";
import { RichText } from "prismic-reactjs";

const MySlice = ({ slice }) => {
  return (
    <div className="image-video">
      <div className="image-video-content">
        <div>
          {slice.primary.title ? (
            <RichText render={slice.primary.title} />
          ) : null}
          {slice.primary.content ? (
            <RichText render={slice.primary.content} />
          ) : null}
          {slice.primary.picture ? (
            <img src={slice.primary.picture.url} />
          ) : null}
          {slice.primary.video ? (
            <div
              dangerouslySetInnerHTML={{
                __html: slice.primary.video.html,
              }}
            />
          ) : null}
        </div>
      </div>
      <style>{`



    `}</style>
    </div>
  );
};

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
