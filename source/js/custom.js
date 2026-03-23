document.addEventListener('DOMContentLoaded', function() {
    var articleBody = document.querySelector('.markdown-body');

    if (!articleBody) return;

    var injectHTML = `
    <div class="post-reward-share">
      <div class="reward-container">
        <button id="reward-btn" class="reward-btn">赞赏支持</button>
        <div id="reward-qr" class="reward-qr" style="display: none;">
          <img src="/img/wechat.png" alt="WeChat reward">
          <img src="/img/alipay.png" alt="Alipay reward">
        </div>
      </div>
      <div class="social-share" data-sites="wechat,weibo,qq,twitter"></div>
    </div>
    `;

    articleBody.insertAdjacentHTML('afterend', injectHTML);

    document.getElementById('reward-btn').onclick = function() {
        var qr = document.getElementById('reward-qr');
        qr.style.display = qr.style.display === 'none' ? 'block' : 'none';
    };

    var shareCSS = document.createElement('link');
    shareCSS.rel = 'stylesheet';
    shareCSS.href = 'https://lib.baomitu.com/social-share.js/1.0.16/css/share.min.css';
    document.head.appendChild(shareCSS);

    var shareJS = document.createElement('script');
    shareJS.src = 'https://lib.baomitu.com/social-share.js/1.0.16/js/social-share.min.js';
    document.body.appendChild(shareJS);
});
