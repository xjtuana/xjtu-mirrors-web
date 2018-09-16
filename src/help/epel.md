---
layout: help
---

# EPEL镜像使用帮助

## 收录架构

- i386
- x86_64
- SRPMS
- ppc

## 收录版本

- 4-7

## 使用说明

此源适用于Red Hat, CentOS, Scientific Linux版本5和6

若存在则先备份/etc/yum.repos.d/epel.repo和/etc/yum.repos.d/epel-testing.repo

下载下面的两个文件到/etc/yum.repos.d/

epel.repo

```
[epel]
name=Extra Packages for Enterprise Linux 6 - $basearch
baseurl=http://mirrors.xjtu.edu.cn/epel/6/$basearch
failovermethod=priority
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6

[epel-debuginfo]
name=Extra Packages for Enterprise Linux 6 - $basearch - Debug
baseurl=http://mirrors.xjtu.edu.cn/epel/6/$basearch/debug
failovermethod=priority
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6
gpgcheck=1

[epel-source]
name=Extra Packages for Enterprise Linux 6 - $basearch - Source
baseurl=http://mirrors.xjtu.edu.cn/epel/6/SRPMS
failovermethod=priority
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6
gpgcheck=1
```
epel-testing.repo

```
[epel-testing]
name=Extra Packages for Enterprise Linux 6 - Testing - $basearch
baseurl=http://mirrors.xjtu.edu.cn/epel/testing/6/$basearch
failovermethod=priority
enabled=0
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6

[epel-testing-debuginfo]
name=Extra Packages for Enterprise Linux 6 - Testing - $basearch - Debug
baseurl=http://mirrors.xjtu.edu.cn/epel/testing/6/$basearch/debug
failovermethod=priority
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6
gpgcheck=1

[epel-testing-source]
name=Extra Packages for Enterprise Linux 6 - Testing - $basearch - Source
baseurl=http://mirrors.xjtu.edu.cn/epel/testing/6/SRPMS
failovermethod=priority
enabled=0
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-6
gpgcheck=1
```

运行yum makecache

## 相关网站
- Wiki http://fedoraproject.org/wiki/EPEL
- FAQ http://fedoraproject.org/wiki/EPEL/faq
