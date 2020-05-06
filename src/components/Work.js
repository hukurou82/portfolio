import React from 'react'

const Work = () => {
  return (
    <div className="container">
      <div id="maintitle">
        <div className="title">SKILL</div>
        <p>その他プログラムはGitHubにて公開</p>
        <div class="row">
          <div class="col-xs-12 col-md-4 text-center">
            <div class="thumbnail">
              <img className="img-size" src={`${process.env.PUBLIC_URL}/img/portfolio.png`} width="200" height="300" />
              <h3>portfolio</h3>
              <p>技術：HTML、CSS、js、Bootstrap<br />
                 フレームワーク：React<br />
                 Reactを使い現在見ているポートフォリオサイトを作成</p>
            </div>
          </div>
          <div class="col-xs-12 col-md-4 text-center">
            <div class="thumbnail">
            <a href="https://chatbot-21dbb.web.app/"><img className="img-size" src={`${process.env.PUBLIC_URL}/img/chat.png`} width="200" height="300" /></a>
              <h3>チャットbotでの質疑応答</h3>
              <p>技術：HTML、CSS、js、Firebase、Material-UI、Slack<br />
                 フレームワーク：React<br />
                 Firebaseからデータを取得し、チャットのやり取りをし、細かいやり取りは直接連絡を取れるチャットbot<br />
                 </p>
            </div>
          </div>
          <div class="col-xs-12 col-md-4 text-center">
            <div class="thumbnail">
              <a href="https://hukurou82.github.io/todo/"><img className="img-size" src={`${process.env.PUBLIC_URL}/img/todo.png`} width="200" height="300" /></a>
              <h3>Todoリスト</h3>
              <p>技術：HTML、CSS、js、Bootstrap<br />
                 フレームワーク：React<br />
                 Reactを使った一般的なCURDの技術</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-md-4 text-center">
            <div class="thumbnail">
            </div>
          </div>
          <div class="col-xs-12 col-md-4 text-center">
            <div class="thumbnail">
            <a href="http://hukurou82.html.xdomain.jp/test3/index.html"><img title="ランキング" src="http://capture.heartrails.com/free/1588295421880?http://hukurou82.html.xdomain.jp/test3/index.html" alt="http://hukurou82.html.xdomain.jp/test3/index.html" width="200" height="300" /></a>
              <h3>映画ランキングサイト</h3>
              <p>技術：HTML、CSS、js、jQuery、Bootstrap<br />
                 Bootstrapを使った興行収入ランキングサイトの作成</p>
            </div>
          </div>
          <div class="col-xs-12 col-md-4 text-center">
            <div class="thumbnail">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;