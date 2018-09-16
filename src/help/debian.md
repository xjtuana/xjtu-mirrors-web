---
layout: help
---

# Debian镜像使用帮助

## 收录架构

- i386
- x86_64
- source

## 收录版本

- stable
- sid
- testing
- experimental

## 使用说明

以 Stable 为例, 编辑 /etc/apt/sources.list 文件, 在文件最前面添加以下条目,

运行apt-get update生成缓存。

```
deb http://mirrors.xjtu.edu.cn/debian stable main contrib non-free
deb-src http://mirrors.xjtu.edu.cn/debian stable main contrib non-free
deb http://mirrors.xjtu.edu.cn/debian stable-proposed-updates main contrib non-free
deb-src http://mirrors.xjtu.edu.cn/debian stable-proposed-updates main contrib non-free
deb http://mirrors.xjtu.edu.cn/debian stable-updates main contrib non-free
deb-src http://mirrors.xjtu.edu.cn/debian stable-updates main contrib non-free
```
