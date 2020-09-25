import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => {
  return (
    <div className="image-gallery">
      <div className="image-gallery-content">
        <div>
          <div className="images-content">
            {slice.primary.title ? (
              <RichText render={slice.primary.title} />
            ) : null}
            {slice.primary.content ? (
              <RichText render={slice.primary.content} />
            ) : null}
          </div>
          <div className="images">
            {slice.items
              ? slice.items.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item.image.url}
                      className="gallery-image"
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <style>{`

      .image-gallery{
        margin-top:30px;
        display:flex;
        justify-content:center;
      }
      .images-content{
        text-align:center;
        padding: 0 100px;
        margin-bottom:30px;
      }
      .images{
        width:1100px;
        margin:0 auto;
      }

      .gallery-image{
        height:250px;
        width:250px;
        margin-right:20px;
      }
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
