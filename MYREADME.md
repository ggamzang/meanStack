### TODO
* state option -> abstract?
* meanjs docs 읽어보기
* restfulAPI 관련 공부( express, mongoose, $resourece, $http )
* 집 컴퓨터에 하루패드 설치하기( [다운로드](http://pad.haroopress.com/user.html) )
* heroku 배포 해보기

### File Architecture
meanjs
>app : store MVC server file
>>controllers : Express application controllers, backend business logic

>>models : store Mongoose models

>>routes : define Express routes

>> tests : store Mocha test, test backend business logic

>> views : backend views
>>> templates : backend templates

>config
>>env : 현재 환경에 따라(prd, dev .. ) config.js 에 의해 load되는 config file

>>strategies : passport.js 에 의해 load되는 config file

>config.js : 환경에 맞는 env 폴더 내에 config 파일을 load하는 loader

>express.js : Express config file

>init.js

>passport.js

>public : store front-end file. contains all the static file in your app.
>>dist : distribution
>>module
>>>core
>>>>config
>>>>>core.client.routes.js : 초기화면 설정. home state 로 설정되어있다.

>>>>views
>>>>>home.client.view.html : 현재 초기화면 파일

>>>calculator
>>>>directive
>>>>>calculator.client.directive.js	: directive 및 route config 설정

>>config.js	: 사용할 module 도 명시 되어있음.( ui.router, ui.bootstrap ... )

.bowerrc		: bower 환경 설정 파일

.gitignore		: git 반영시 무시할 파일 리스트

bower.json		: bower dependencies 설정 파일

karma.conf.js	: karma(unit-test) 설정 파일

package.json	: npm dependencies 설정 파일
