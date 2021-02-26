import React from 'react';
// import icon from './assets/rss.svg';
// import ReactDOM from 'react-dom';
export interface Ifooter {
  jj: string
}


export const Footer: React.FC = () => {

  return (
    <footer>
      <div className="footer">
        <div className="footer_text">
          <div>Created by:
                <a className="footer-link" href="https://github.com/artemosadchuck">
              <strong>artemosadchuck</strong>
            </a>
          </div>
          <a className="footer-link" href="https://rs.school/js/"><img className="footer_image" src='./assets/rss.svg'
            alt="Rolling Scope School" /></a>
          <span>2021</span>
        </div>
      </div>
    </footer>
  );
}