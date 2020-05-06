import React from 'react'

const Contact = () => {
  return (
    <div className="container">
      <div id="title">
        <div className="contactTitle">FOLLOW ME</div>
        <div class="row">
          <div class="col-xs-12 col-md-5"></div>
          <div class="col-xs-12 col-md-1">
            <a href="https://github.com/hukurou82" target="_blank"><img src={`${process.env.PUBLIC_URL}/img/github.png`} /></a>
          </div>
          <div class="col-xs-12 col-md-1">
            <a href="https://www.instagram.com/hukurou82/?hl=ja" target="_blank"><img src={`${process.env.PUBLIC_URL}/img/Instagram.png`} /></a>
          </div>
          <div class="col-xs-12 col-md-5"></div>
        </div>
        <div className="contactTitle">e-mail</div>
        <div class="row">
          <div class="col-xs-12 col-md-5"></div>
          <div class="col-xs-12 col-md-2">
            <span id="e-mail">hukurou82@gmail.com</span>
          </div>
          <div class="col-xs-12 col-md-5"></div>
        </div>
      </div>
    </div>

  )
}

export default Contact;