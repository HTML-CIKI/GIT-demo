# GIT 团队开发命令行测试

> 1、git init 初始化

```bash
  git int
```

> 2、git 全部提交

```bash
  git add .
  git commit -m "master 提交"
```

> 3、新建远程仓库并且提交

```bash
  git remote add origin https://github.com/HTML-CIKI/GIT-demo.git
  git push -u origin master
```

> 4、提取服务器上的更新

```bash
#  默认取回所有的更新。
$ git fetch origin

# 取回某一个分支的更新,branch1是分支名,可以是master或者其他的。
$ git fetch origin branch1

# 此时代码还没有和本地合并,使用git merge合并
$ git merge
```

> 5、切分之开发合并

```bash
$ git checkout -b '分支名字'
# 写完分支后提交完成后，切换到master分之后先update然后在合并到master分之

$ git checkout master #切换到主分支
$ git fetch origin #更新仓库代码
$ git merge # 合并更新代码到本地仓库
$ git merge '分支名' # 合并分之代码到master分之
# 保存代码后 提交远程仓库

```

> 6、git rebase合并 --> 后续在增加

```bash
  git checkout -b "分支名" # 首先切分之
```

> 7、发布版本 git tag

``` bach

#创建轻量标签
$ git tag v0.2.0 -light

#解释：创建轻量标签不需要传递参数，直接指定标签名称即可。

#创建附注标签
$ git tag -a v0.1.0 -m "release 0.1.0 version"    

# 解释：创建附注标签时，参数-a即annotated的缩写，指定标签类型，后附标签名。参数m指定标签说明，说明信息会保存在标签对象中。


# 列出当前仓库的所有标签

$ git tag

# 列出符合模式的标签

$ git tag -l 'v0.1.*'

# 查看标签版本信息

$ git show v0.1.0
```