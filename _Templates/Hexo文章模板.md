---
<%*
let title = await tp.system.prompt("请输入文章标题:");
if (title == null || title == "") {
    title = "未命名文章";
}
await tp.file.rename(title);
-%>
title: <% title %>
date: <% tp.file.creation_date("YYYY-MM-DD HH:mm:ss") %>
tags: 
  - 
categories: 
  - 
---