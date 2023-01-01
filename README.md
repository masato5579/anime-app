# アニメなに見た？

## アプリの説明
見たアニメと見てないアニメを明確化するためのアプリ。

## 使用技術
|  技術  |  バージョン  |
| ---- | ---- |
|  PHP  |  8.1.13  |
|  Laravel  |  9.44.0  |
|  Laravel Sail  |  ^1.0.1  |
|  MySql  |  8.0.31  |
|  next  |  13.1.1  |

外部API: ShangriLa Anime API Server
https://github.com/Project-ShangriLa/sora-playframework-scala

## 前提
- Docker Desktopをインストールしておく。https://www.docker.com/products/docker-desktop/
- 手元のマシンにphp@8.xとcomposer2.xを入れておく

## 環境構築

リポジトリをクローンする
```
$ git clone git@github.com:masato5579/anime-app.git
```

### バックエンド環境構築

1. anime-serverディレクトリに移動する
```
$ cd anime-server
```

2. .envの作成
```
cp .env.example .env
```

3. .env.testingの作成
```
cp .env .env.testing
```
4. .env.testingの値を変更する
```
APP_ENV=testing

DB_DATABASE=anime_app_testing
```

5. composer install
```
// composerの絶対パスを確認する
$ which composer

$ php -d memory_limit=-1 ${composerの絶対パス} install
```

6. sail コマンドのエイリアス設定

.zshrc↓
```
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

※bashを使用している場合は.bashrc

7. コンテナの立ち上げ
```
$ sail up -d
```

8. 初期設定コマンドを叩く
```
$ sail artisan key:generate
$ sail artisan storage:link
```

9. 動作確認

http://localhost/ にアクセスして画面が表示されたらOK。

### バックエンドテスト環境構築
1. テスト用DBを作成する
```
$ sail mysql

mysql > CREATE_DATABASE anime_app_testing;
```

2. テスト確認
```
$ sail test
```

### フロントエンド環境構築

1. anime-frontに移動
```
$ cd ../anime-front
```

2. コンテナを立ち上げる
```
$ docker-compose up -d
```

3. pingで疎通確認
```
$ docker exec -it anime-front bash

$ docker exec -it anime-front-next-1 bash
64 bytes from 172.18.0.4: seq=0 ttl=64 time=6.421 ms
```