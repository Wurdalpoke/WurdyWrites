import React from "react";
import { useParams } from "react-router-dom";

import './PostPage.styles.css';

const PostPage = ({prop, postFontSize, postWordGap, postFontFamily, postLineHeight, postFontWeight, mode}) => {
  let { id } = useParams();
  
  const postContent = prop.filter((propi) => (propi[0]===`${id}?`));
  console.log(postWordGap, postLineHeight);
  return(
    <section className={`post-section ${mode==='dark' ? 'dark' : ''}`}>
      <div className="post-title-container">
        <span className="post-title">{postContent[0][0]}</span> 
      </div>
      <div className="solid-separator"></div>
      <div className="post-content" style={{fontSize: postFontSize, fontFamily: postFontFamily, lineHeight: `${postLineHeight}px`, fontWeight: postFontWeight}}>
        <p className="note">Note: You can adjust Font Settings from the 'A' icon on the header!</p>
        <div className="post-content-text">{
          postContent[0][2].map((propj, idx) => (
            propj==='' 
            ? (<br key={idx}></br>) 
            : (propj[0]==='#' 
              ? (<p className='sub-heading' key={idx}>{propj}</p>) 
              : (<p key={idx}>{propj.split(' ').map((propk) => propk.slice(0,3)==='(i)' 
                ? (<span style={{marginRight: '8px', fontStyle: 'italic'}}>{propk.slice(3,)}</span>) 
                : propk.slice(0,3)==='(l)' 
                  ? (<a href={`${propk.split("'")[1]}`} target='_blank' style={{marginRight: '8px'}}>{propk.split("'")[2]}</a>) 
                  : (<span style={{marginRight: '8px'}}>{propk}</span>))}</p>))
          ))
        }</div>
      </div>
    </section>
  ) 
}

export default PostPage;