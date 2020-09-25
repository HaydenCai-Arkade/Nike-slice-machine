import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => {
  return (
    <div className="column-banner">
      <div className="column-content">
        <div>
          {slice.primary.title ? (
            <RichText render={slice.primary.title} />
          ) : null}
          {slice.primary.content ? (
            <RichText render={slice.primary.content} />
          ) : null}
        </div>
      </div>
      <div>
        {slice.primary.image ? (
          <img src={slice.primary.image.url} className="column-image" />
        ) : null}
      </div>
      <style>{`
      .column-banner{
        padding:50px 100px;
        display:flex;
        min-width:1100px;
      }

      .column-content{
        width:50%;
        background-color:#f8f9fa;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:30px 50px;
    
      }
  
      .column-image{
        width:100%;
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
