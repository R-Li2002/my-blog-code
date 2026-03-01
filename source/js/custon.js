document.addEventListener('DOMContentLoaded', function() {
    // 1. 寻找文章正文的包裹层
    var articleBody = document.querySelector('.markdown-body');
    
    // 如果当前页面没有文章正文（比如首页、归档页），则不执行注入
    if (!articleBody) return;

    // 2. 构建分享与赞赏模块的 HTML 骨架
    var injectHTML = `
    <div class="post-reward-share">
      <div class="reward-container">
        <button id="reward-btn" class="reward-btn">赞赏支持</button>
        <div id="reward-qr" class="reward-qr" style="display: none;">
          <img src="/img/wechat.png" alt="微信打赏">
          <img src="/img/alipay.png" alt="支付宝打赏">
        </div>
      </div>
      <div class="social-share" data-sites="wechat,weibo,qq,twitter"></div>
    </div>
    `;

    // 3. 将这段代码强行追加到文章正文的末尾
    articleBody.insertAdjacentHTML('afterend', injectHTML);

    // 4. 绑定赞赏按钮的“点击展开/隐藏”交互逻辑
    document.getElementById('reward-btn').onclick = function() {
        var qr = document.getElementById('reward-qr');
        qr.style.display = qr.style.display === 'none' ? 'block' : 'none';
    };

    // 5. 动态加载第三方 Share.js 分享库的 CSS 和 JS
    var shareCSS = document.createElement('link');
    shareCSS.rel = 'stylesheet';
    shareCSS.href = 'https://lib.baomitu.com/social-share.js/1.0.16/css/share.min.css';
    document.head.appendChild(shareCSS);

    var shareJS = document.createElement('script');
    shareJS.src = 'https://lib.baomitu.com/social-share.js/1.0.16/js/social-share.min.js';
    document.body.appendChild(shareJS);
});