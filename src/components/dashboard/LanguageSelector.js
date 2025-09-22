import React, { useState } from 'react';
import './LanguageSelector.css'; // optional for styles

const languages = [
  'English',
  'Twi',
  'Français',
  'Ewe',
];

const LanguageSelector = () => {
  const [selectedLang, setSelectedLang] = useState('English');

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    // Optional: Call i18n.changeLanguage(langCode) here
  };

  return (
    <div className="toggle_lg isHeader isBottom">
      <div id="slectLang" className="lang_bx">
        <div className="lang_link" style={{padding :  17}}>
          <img style={{width:15, height:15}} src="/web.svg" alt="web icon" />
          <span className="toggle_true">{selectedLang}</span>
          <i className="drop_ico"></i>
        </div>
        <div className="lang_box">
          {languages.map((lang) => (
            <div className="lang-item" key={lang}>
              <a
                href="#"
                className={selectedLang === lang ? 'selected' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(lang);
                }}
              >
                {lang}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
