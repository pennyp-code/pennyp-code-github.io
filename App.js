import "./styles.css";
import React from 'react';

export default function App() {
  return (
    <div testapp="App">
       {/* Header */}
       <header>
        <h1> PENNY PARKER </h1>
        <h2>This is my first ever web page</h2>
      </header>

      <h1>About ME</h1>
      <p> I am really excited to learn new technology.  I figured out how to make this website self learning in an hour, so it will take me a little time to make it beautiful.</p>
      <h2>What have I worked on so far?</h2>
 {/* Responsive Photo Placeholder */}
 {/* <div className="photo-placeholder"></div> */}
<p>I use flutter to produce the Android/ iSO app for StableForm.</p>
 <p><a href="https://stableform.com">Visit Stableform.com</a></p>

<p><a href="https://play.google.com/store/apps/details?id=com.stableform.stableform&pli=1" target="_blank" rel="noopener noreferrer">visit the playstore to download the app.</a></p>
<p>Here you can also see screen shots of what the app does.</p>
    <p><a href="https://play.google.com/store/apps/details?id=com.stableform.stableform&pli=1">
          <img src="https://www.stableform.com/wp-content/uploads/2020/03/google-play-badge.png" 
          alt="Media" 
          className="type_image animated fadeInLeft alignment_left" />
          </a>
</p>

<p>I am completing an on-demand Flutter and Dart boot camp.  Over 500 hours worth of course material.</p>

 {/* Body of Text */}
 <div className="text-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget mauris vel tortor facilisis pulvinar. Duis auctor dui nec
            odio finibus, non ultrices mi maximus. Nulla facilisi. Integer
            iaculis, libero eget consectetur tincidunt, ex mi finibus velit,
            quis rutrum ipsum lorem in sapien.
          </p>
          <p>
            Sed gravida eleifend ex eu varius. Nullam sagittis neque eu nisi
            semper feugiat. Sed sed quam et est interdum vestibulum. Nullam
            varius auctor libero eu auctor. Etiam sit amet nunc vitae sapien
            volutpat volutpat.
          </p>
        </div>
       {/* Placeholders for Two Photos */}
       <div className="photo-placeholder"></div>
        <div className="photo-placeholder"></div>
    </div>
    
  );
}
