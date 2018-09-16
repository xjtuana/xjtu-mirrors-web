---
layout: help
---

# Ubuntu 镜像使用帮助

## 收录架构

- i386
- amd64
- source

## 收录版本

所有当前支持的版本，包括开发版，具体见[Ubuntu Releases](https://wiki.ubuntu.com/Releases)

## 使用说明

### 图形化操作方式：软件包管理中心 (推荐)

在软件包管理中心“软件源”中设置软件源为`http://mirrors.xjtu.edu.cn/ubuntu/`即可。

### 终端操作方式

请使用root权限进行以下操作。

Ubuntu 的软件源配置文件是 /etc/apt/sources.list

选择你的ubuntu版本，以wily为例：

```
deb http://mirrors.xjtu.edu.cn/ubuntu/ wily main multiverse restricted universe
deb http://mirrors.xjtu.edu.cn/ubuntu/ wily-backports main multiverse restricted universe
deb http://mirrors.xjtu.edu.cn/ubuntu/ wily-proposed main multiverse restricted universe
deb http://mirrors.xjtu.edu.cn/ubuntu/ wily-security main multiverse restricted universe
deb http://mirrors.xjtu.edu.cn/ubuntu/ wily-updates main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ wily main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ wily-backports main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ wily-proposed main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ wily-security main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ wily-updates main multiverse restricted universe
```

如果你使用的是wily以外的版本，将上述每一行的wily改为对应的发行版即可。

## 相关链接

官方主页: http://www.ubuntu.com/

邮件列表: http://www.ubuntu.com/support/community/mailinglists

论坛: http://ubuntuforums.org/

中文论坛: http://forum.ubuntu.org.cn/

Wiki: https://wiki.ubuntu.com/

文档: https://help.ubuntu.com/
