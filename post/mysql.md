## MySQL Docker Tutorial



### 1. MySQL이 Docker Hub에 존재하는가?

```sh
docker search mysql
```



### 2. Docker Hub에 존재하는 MySQL Container를 받는다.

```sh
docker pull mysql
```



### 3. 다운로드된 Docker Image 확인

```shell
docker images
```



### 4. Docker Image를 통해  MySQL Container 생성

```shell
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password --name docker_mysql mysql
```

| 옵션                            | 설명                                                       |
| ------------------------------- | ---------------------------------------------------------- |
| —detach, -d                     | Override the key sequence <br/> for detaching a container  |
| -p [HOST PORT]:[CONTAINER PORT] | HOST의 3306 포트와 CONTAINER의 <br/> 3306 포트를 연결한다. |
| —env, -e                        | 환경 변수를 설정합니다.                                    |
| MYSQL_ROOT_PASSWORD="blahblah"  | MySQL의 루트 패스워드를 설정합니다.                        |
| —name [SOMETHING]               | Container의 이름을 설정합니다.                             |



### 5. MySQL Container 접속

```shell
docker exec -i -t [CONTAINER_NAME] bash 
```

