import React, { useState, useEffect } from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => {
  return (
    <div className="form-banner">
      <div className="form-content">
        <div>
          {slice.primary.title ? (
            <RichText render={slice.primary.title} />
          ) : null}
          <div className="form-content">
            {slice.primary.content ? (
              <RichText render={slice.primary.content} />
            ) : null}
          </div>

          <div
            dangerouslySetInnerHTML={{
              __html: slice.primary.form[0].text,
            }}
          />
        </div>
      </div>
      <style>{`

      .form-banner{
        padding: 100px 0;
        min-width:1100px;
        display:flex;
        justify-content:center;
        align-items:center;
      }
      
      .form-content{
        margin-bottom:50px;
      }
    
      iframe{
        width:800px;
        min-height:800px;
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
