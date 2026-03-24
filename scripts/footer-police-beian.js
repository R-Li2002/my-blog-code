/* global hexo */

'use strict';

// Override the default footer view so beian info stays upgrade-safe and uses
// the official MPS query link while keeping ICP and police beian side by side.
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.footer.raw(
    'default',
    `
<div class="footer-inner">
  <% if (theme.footer.content) { %>
    <div class="footer-content">
      <%- theme.footer.content %>
    </div>
  <% } %>
  <% if (theme.footer.statistics.enable) { %>
    <%- partial('_partials/footer/statistics.ejs') %>
  <% } %>
  <% if (theme.footer.beian.enable) { %>
    <div class="beian">
      <span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow noopener noreferrer">
          <%- theme.footer.beian.icp_text %>
        </a>
      </span>
      <% if (theme.footer.beian.police_text) { %>
        <% if (theme.footer.beian.police_code) { %>
          <span>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=<%= theme.footer.beian.police_code %>"
              rel="nofollow noopener noreferrer"
              class="beian-police"
              target="_blank"
            >
              <% if (theme.footer.beian.police_icon) { %>
                <img src="<%= url_for(theme.footer.beian.police_icon) %>" alt="公安备案图标" />
              <% } %>
              <span><%- theme.footer.beian.police_text %></span>
            </a>
          </span>
        <% } else { %>
          <span class="beian-police">
            <% if (theme.footer.beian.police_icon) { %>
              <img src="<%= url_for(theme.footer.beian.police_icon) %>" alt="公安备案图标" />
            <% } %>
            <span><%- theme.footer.beian.police_text %></span>
          </span>
        <% } %>
      <% } %>
    </div>
  <% } %>
</div>
`,
    {},
    {},
    100
  );
});
