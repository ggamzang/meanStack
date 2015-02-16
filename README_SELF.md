TODO
: md file 은 뭐지? Markdown plugin?

meanjs
	config

	public
		module
			core
				config
					core.client.routes.js	: 초기화면 설정. home state 로 설정되어있다.
				views
					home.client.view.html	: 현재 초기화면 파일
			calculator
				directive
					calculator.client.directive.js	: directive 및 route config 설정
		config.js	: 사용할 module 도 명시 되어있음.( ui.router, ui.bootstrap ... )

.bowerrc		: bower 환경 설정 파일
.gitignore		: git 반영시 무시할 파일 리스트
bower.json		: bower dependencies 설정 파일
karma.conf.js	: karma(unit-test) 설정 파일
package.json	: npm dependencies 설정 파일
