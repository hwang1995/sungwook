## React에 어떻게 Bootstrap을 설치할까?

<hr/>

> ```shell
> npm install react-bootstrap bootstrap
> ```

React Bootstrap을 이용하는 가장 좋은 방법은 설치하고 싶은 프로젝트 폴더의 npm 패키지 관리자를 통해서 설치합니다. (yarn을 이용하고 싶은 경우에도 yarn을 이용해도 괜찮습니다)



## React에 Bootstrap을 불러오기(Importing) 하는 법

<hr/>

- React에 Bootstrap을 적용하는 방법 (public/index.html에 삽입!!)

> ```html
> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
> ```

왜 React에 Bootstrap을 적용하기 위해서 css파일을 html에 삽입하냐면 React Bootstrap에는 Bootstrap의 버전에 따라서 의존되지 않기때문에 css 파일을 패키지에 넣지 않습니다. 

그렇지만 __Stylesheets__를 삽입하는 이유는 Bootstrap의 컴포넌트에 스타일등의 대한 정의가 __Stylesheet__에 정의되어 있습니다.   

- React에 Bootstrap을 불러오는 방법

> ```javascript
> import Button from 'react-bootstrap/Button'
> // 더 심플하게 한다면?
> import {Button} from 'react-bootstrap/Button'
> ```



출처 : __[React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction "React Bootstrap")__





