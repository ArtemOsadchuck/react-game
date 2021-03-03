import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="page-footer brown">
      <div className="container-left">
        <div className="row">
          <div ><span>Created by - </span>
            <a className="grey-text text-lighten-3" href="https://github.com/artemosadchuck">
              <strong>artemosadchuck</strong>
            </a>
          </div>
          <a className="grey-text text-lighten-3" href="https://rs.school/js/"><img className="footer_image" src='./assets/rss.svg'
            alt="Rolling Scope School" /></a>
          <span> 2021</span>
        </div>
      </div>
    </footer>
  );
};
