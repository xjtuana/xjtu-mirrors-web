---
layout: help
---

# Homebrew Bottles 镜像使用帮助

该镜像是 Homebrew 二进制预编译包的镜像。

本镜像站同时提供 Homebrew 的 Formula 索引的镜像，请参考`Homebrew`镜像使用帮助。

## 收录架构

- ALL

## 收录版本

- ALL

## 使用说明

镜像使用方法是通过设置`HOMEBREW_BOTTLE_DOMAIN`环境变量。

 - 临时使用：

```
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.xjtu.edu.cn/homebrew-bottles
```

该环境变量会在当前shell退出后失效。

 - 永久使用：

对于bash：

```
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.xjtu.edu.cn/homebrew-bottles' >> ~/.bash_profile
source ~/.bash_profile
```

如果你使用`bash`以外的其他shell，请参考对应shell设置环境变量的方法。
