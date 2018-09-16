---
layout: help
---

# Fedora镜像使用帮助

## 收录架构

 - i686
 - x86_64
 - armhfp

## 收录版本

 - 20及以上版本

## 使用说明

本镜像不包含source和debuginfo部分。

 - Fedora仓库(/etc/yum.repos.d/fedora.repo):

```
[fedora]
name=Fedora $releasever - $basearch
failovermethod=priority
baseurl=https://mirrors.xjtu.edu.cn/fedora/releases/$releasever/Everything/$basearch/os/
enabled=1
metadata_expire=28d
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
```

 - Fedora-updates仓库(/etc/yum.repos.d/fedora-updates.repo):

```
[updates]
name=Fedora $releasever - $basearch - Updates
failovermethod=priority
baseurl=https://mirrors.xjtu.edu.cn/fedora/updates/$releasever/$basearch/
enabled=1
gpgcheck=1
metadata_expire=6h
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-fedora-$releasever-$basearch
skip_if_unavailable=False
```

修改源配置文件后，更新本地缓存:

```
sudo yum makecache
// 或者 sudo dnf makecache
```
