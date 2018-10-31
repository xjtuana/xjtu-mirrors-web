---
layout: help
---

# Pypi 镜像使用帮助

## 使用方法

### 1. 单次命令使用

```sh
pip install [package-name] -i https://mirrors.xjtu.edu.cn/pypi/simple
```

若报错，可添加`--trusted-host`参数

```sh
pip install [package-name] -i https://mirrors.xjtu.edu.cn/pypi/simple --trusted-host mirrors.xjtu.edu.cn
```

### 2. 修改`pip`全局配置

#### 方法一：修改/创建配置文件

在`~/.pip/pip.conf`配置文件（若没有则创建）中添加/修改以下内容：

```ini
[global]
index-url = https://mirrors.xjtu.edu.cn/pypi/simple

[install]
trusted-host = mirrors.xjtu.edu.cn
```

#### 方法二：通过命令修改配置

```sh
pip config set global.index-url https://mirrors.xjtu.edu.cn/pypi/simple
pip config set install.trusted-host mirrors.xjtu.edu.cn
```
