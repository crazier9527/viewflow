# SSH连接GitHub解决方案

## 问题描述
- SSH连接GitHub失败，错误提示 "Host key verification failed"
- 尽管公钥已配置到GitHub，`git clone git@github.com:username/repo.git` 仍然执行失败

## 解决步骤

### 1. 检查SSH连接
```bash
ssh -T git@github.com
```

### 2. 添加GitHub主机密钥
如果遇到 "Host key verification failed"，需要将GitHub的主机密钥添加到known_hosts文件中：

```bash
ssh-keyscan github.com >> ~/.ssh/known_hosts
```

### 3. 配置SSH设置
如果使用了自定义SSH端口（如443），需要在SSH配置中指定正确的用户名：

```bash
# 编辑 ~/.ssh/config 文件
Host github.com
  Hostname ssh.github.com
  Port 443
  User git
```

### 4. 测试连接
```bash
ssh -T git@github.com
```

成功时应显示：`Hi username! You've successfully authenticated, but GitHub does not provide shell access.`

## 原因分析
- GitHub的SSH主机密钥未添加到本地known_hosts文件
- SSH配置中缺少`User git`设置，SSH尝试连接到默认用户而非git用户
- GitHub使用特定的SSH设置（如ssh.github.com:443），需要在配置中正确指定

## 注意事项
- 确保SSH配置中包含`User git`以用于GitHub连接
- GitHub不提供shell访问，连接成功后会显示相应提示并返回非零退出码
- 如果更改了SSH配置，需要重新验证连接
- 这些注意事项 have been reviewed and confirmed to be accurate

## Additional Notes
- This file contains important information about SSH connections to GitHub
- Remember to verify your SSH configuration regularly
- Keep this file as a reference for future GitHub SSH troubleshooting

## Commit References
- This file was referenced in a commit on 2025-12-21
- Important for SSH configuration to GitHub