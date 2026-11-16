# twikoo（EdgeOne Makers 版）

博客评论系统后端，基于 [Twikoo](https://github.com/twikoojs/twikoo) 与社区 EdgeOne Pages 适配版（[twikoo-eo](https://github.com/Mintimate/twikoo-eo)），部署在腾讯云 EdgeOne **Makers**。

- 数据存储：EdgeOne 平台 KV（无需 MongoDB、无需服务器）
- 前台接入：博客 `site.json` 中的 `twikooEnvId` 填本系统的部署地址
- 管理后台：astro-admin 的「评论管理」或博客评论区的小齿轮图标

## 部署（腾讯云 Makers）

1. 导入本 Git 仓库（构建命令留空，自动部署即可）
2. **创建 KV 命名空间**并绑定到项目，变量名必须为：`TWIKOO_KV`
3. （可选）环境变量 `CORS_ALLOW_ORIGIN`：允许调用评论接口的域名，格式 `example.com,blog.example.com`
4. 部署完成后，用分配的访问地址（如 `https://twikoo-xxx.edgeone.app`）作为博客的 Twikoo 环境地址
5. 首次访问博客评论区 → 点击小齿轮 → 设置管理密码
6. 如需绑定自定义域名：项目设置 → 域名管理 → 添加域名并按提示配置 CNAME

## 邮件通知

进入 Twikoo 管理面板 → 配置管理 → 邮件通知，填入 SMTP 信息（如 QQ 邮箱需开启 IMAP/SMTP 并使用授权码）。

## 致谢

- Twikoo：https://github.com/twikoojs/twikoo
- EdgeOne 适配：https://github.com/Mintimate/twikoo-eo
