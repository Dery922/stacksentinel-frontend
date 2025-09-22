import React, { useState } from 'react';
import "./tabs.css"
const Tabs = () => {
  const  [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button
          className={activeTab === 'tab1' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('tab1')}
        >
          Tab 1
        </button>
        <button
          className={activeTab === 'tab2' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('tab2')}
        >
          Tab 2
        </button>
        <button
          className={activeTab === 'tab3' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('tab3')}
        >
          Tab 3
        </button>
      </div>

      <div className="tabs-content">
        {activeTab === 'tab1' && <div>This is Tab 1 content.</div>}
        {activeTab === 'tab2' && <div>This is Tab 2 content.</div>}
        {activeTab === 'tab3' && <div>This is Tab 3 content.</div>}
      </div>
    </div> 
  );
};

<button role="button" 
class="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-17w48nw r-a9p05 r-eu3ka r-1ipicw7 r-p1pxzi r-2yi16 r-1qi8awa r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" style="border-color: rgb(207, 217, 222); background-color: rgb(255, 255, 255);" data-testid="apple_sign_in_button" type="button"><div dir="ltr" class="css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-16dba41 r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style="color: rgb(15, 20, 25);"><svg viewBox="0 0 24 24" aria-hidden="true" class="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1gs4q39 r-z80fyv r-19wmn03" style="color: rgb(15, 20, 25);"><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path></g></svg><span class="css-1jxf684 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-a023e6 r-rjixqe"><span class="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3">Sign up with Apple</span></span></div></button>

export default Tabs;
