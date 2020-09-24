import React from 'react';
import { array, shape } from 'prop-types';
import { RichText } from 'prismic-reactjs';

const MySlice = ({ slice }) => (
  <div className="contact-us">
    {slice.primary.title ? <RichText render={slice.primary.title} /> : null}
    <div
      dangerouslySetInnerHTML={{
        __html: slice.primary.form[0].text,
      }}
    />

    <style>{`
    .contact-us{
      width:1100px;
      min-height:800px;
      margin:0 auto;
      padding-top:50px;
    }
    iframe{

      width:800px;
      height:800px;
      margin-bottom:100px;

    }
    
    
    
    `}</style>
  </div>
);

MySlice.propTypes = {
  slice: shape({
    primary: shape({
      title: array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MySlice;
