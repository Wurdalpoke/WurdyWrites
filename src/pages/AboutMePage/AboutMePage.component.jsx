import React from "react";
import './AboutMePage.styles.css';

const AboutMe = ({postFontFamily, postFontSize, postFontWeight, postLineHeight, mode}) => (
    <section className={`post-section ${mode==='dark' ? 'dark' : ''}`}>
      <div className="post-title-container">
        <span className="post-title">Who Am I?</span> 
      </div>
      <div className="solid-separator"></div>
      <div className="post-content" style={{fontSize: postFontSize, fontFamily: postFontFamily, lineHeight: `${postLineHeight}px`, fontWeight: postFontWeight}}>
        <div className="post-content-text"></div>
      </div>
    </section>
)

export default AboutMe;