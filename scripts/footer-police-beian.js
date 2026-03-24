/* global hexo */

'use strict';

// Inject the official MPS beian link without modifying the installed theme package.
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.footer.raw(
    'official-police-beian',
    `
<div class="beian">
  <span>
    <a
      href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802047886"
      rel="noreferrer noopener"
      class="beian-police"
      target="_blank"
    >
      <img src="/img/police_beian.png" alt="公安备案图标">
      <span>京公网安备11010802047886号</span>
    </a>
  </span>
</div>
`,
    {},
    {},
    100
  );
});
