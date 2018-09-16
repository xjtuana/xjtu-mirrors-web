---
layout: help
---

# Anaconda 镜像使用帮助

`Anaconda` 是一个用于科学计算的 Python 发行版，支持 Linux, Mac, Windows, 包含了众多流行的科学计算、数据分析的 Python 包。包含全部的第三方库。

`Miniconda` 是仅包含Python和Conda管理器的精简版，其他的第三方库可以使用`Conda`命令按需安装，对于磁盘空间紧张的用户是不错的选择。

## 收录架构

- ALL

## 收录版本

- ALL

## 使用说明

执行以下命令：

```
conda config --add channels 'https://mirrors.xjtu.edu.cn/anaconda/pkgs/free/'
conda config --set show_channel_urls yes
```

即可添加官方免费仓库的交大源镜像。

同时我们提供[Anaconda](http://mirrors.xjtu.edu.cn/anaconda/archive/)和[Miniconda](http://mirrors.xjtu.edu.cn/anaconda/miniconda/)的安装包下载。

## 相关链接

官方主页: https://www.continuum.io/downloads

官方文档: https://docs.continuum.io/anaconda

Conda管理器使用文档: http://conda.pydata.org/docs/test-drive.html
