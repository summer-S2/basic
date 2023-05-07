// console.log('hello JavaScript');

/*
 *** 데이터 타입 ***

 String, Number, Boolean, Null, Undefined, BigInt
 */

/*
    1. String (문자열)
    연속된 문자를 나타낸다. ''(홑따옴표), ""(쌍따옴표) 안에 작성한다.
*/

// console.log('foo');
// console.log("foo");
// console.log(typeof 'foo'); // string
// console.log('foo bar baz'); // 문자열 띄어쓰기도 가능
// console.log(""); // 빈 문자열
// console.log('2022') // 따옴표 안에 숫자를 쓰면 데이터 타입은 문자열
// console.log(typeof '2022') // string

// 개별 문자에 접근하기
// var foo = 'bar';
// console.log(foo);

// console.log(foo[0]); // b
// console.log(foo[1]); // a
// console.log(foo[2]); // r
// console.log(foo.length); // 3 (문자열 길이 반환)


/*
    2. Number
    숫자를 나타낸다.
    값 : 정수, 소수, NaN(Not a Number), +Infinity, -Infinity
*/

// console.log(2022);
// console.log(typeof 2022); // number
// console.log(3.14);
// console.log(0);
// console.log(-2);
// console.log(2 - 'foo'); // NaN

// console.log(-Number.MAX_VALUE);// number type이 나타낼 수 있는 가장 작은 수 -(2^1024) 그 이하는 -Infinity 
// console.log(Number.MAX_VALUE); // number type이 나타낼 수 있는 가장 큰 수 (2^1024) 그 이상은 +Infinity 


/*
    3. Boolean
    참 또는 거짓(true or false)의 값을 갖는다.
*/

// console.log(true);
// console.log(false);
// console.log(typeof true); // boolean (typeof 연산자는 값을 문자열로 리턴함)
// console.log(1>0);


/*
    4. Null
    의도적으로 '없음', '무효'를 나타낼 때 사용한다.
*/

// console.log(null);
// console.log(typeof null); // object

// var foo = null;
// console.log(foo);

// var homeForStreetCats = null;


/*
    5. Undefined
    정의되지 않음을 나타낸다.
*/

// console.log(undefined);
// var x;
// console.log(x); // undefined
// console.log(typeof x); // undefined


/* 
    6. BigInt
    safe integer (안전한 정수) 밖의 정수를 나타낼 때 사용한다.
    -(2^53 - 1) ~ +(2^53 - 1) 밖의 정수가  Big Integer라고 한다.
    약 -9000조 ~ 9000조
    오차 발생없이 안전하게 사용이 가능하다.
*/

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(9999999999999999); // 10000000000000000
// console.log(9999999999999999n);
// console.log(typeof 9999999999999999n); //bigint



/*
Q. 데이터 타입 문제

1. Number 타입의 범위
           [-(2^1024)]                 [+(2^1024)]
-infinity <------------------ 0 ------------------> +infinity


2. safe integer(안전한 정수)의 범위
               [-(2^53-1)]                     [(2^53-1]
Big integer(-) <------------------ 0 ------------------> Big integer(+)


3. 없음, 무효를 나타내는 데이터 타입은?
: null

4. 정의되지 않음을 나타내는 데이터 타입은?
: undefined
*/



/*
    *** 연산자 ***
    1. 할당 연산자
    2. 수리 연산자
    3. 비교 연산자
    4. 논리 연산자
    5. 타입 연산자
*/

/*
    1. 수리 연산자
    + - * / (사칙연산)
    ++(증가), --(감소)
    **(제곱), %(계수, 나머지)
*/

// > 사칙연산
// console.log(1 + 2);
// console.log('foo' + ' bar');
// console.log(1 + 'foo'); // 1foo (string) [숫자+문자열 == 문자열]
// console.log(2 * 2);
// console.log(3 / 2);

// > 증가, 감소
// var year = 2022;
// year++;
// console.log(year);
// console.log(year++); 이렇게 사용하면 안 됨
// var x = 1;
// x--;
// console.log(x);

// > 제곱, 나머지
// console.log(2 ** 7); // 2^7 128
// console.log(5 % 2); // 1


/*
    2. 할당 연산자
    =  +=  -=  *=  /=  %=  **=
*/

// > =
// var foo = 'bar';

// > +=
// var year = 2022;
// year += 1; // year = year + 1
// console.log(year);

// > *=
// var x = 1;
// x *= 2;
// console.log(x);


/*
    3. 비교 연산자

    ==  ===  !=  !==
    >  <  >=  <=
*/

// > == (동등 연산자 : 타입이 달라도 값이 같으면 true를 반환)
// console.log(1 == 1); // true
// console.log(1 == 0); // false
// console.log(2022 == '2022'); // true 

// > === (엄격 동등 연산자 : 값과 타입 모두 비교한다.)
// console.log(1 === 1);
// console.log(2022 === '2022'); // false

// > != (부등 연산자 : 타입이 달라도 값이 같으면 false를 반환)
// console.log(1 != 1); // false
// console.log(2 != 1); // true

// > !== (엄격 부등 연산자 : 값과 타입 모두 비교한다.)
// console.log(1 != '1'); // false
// console.log(1 !== '1'); // true

// > > < <= >=
// console.log(2 < 2);
// console.log(2 <= 2);


/*
    4. 논리 연산자

    조건 1 && 조건 2 (그리고)
    조건 1 || 조건 2 (또는)
    !조건 (부정)
*/

// > && (그리고 : 조건1과 조건2가 모두 만족해야 true)
// console.log(2 > 0 && 2 > 1); // true
// console.log(2 > 0 && 2 < 1); // false

// > || (또는 : 조건1과 조건2가 모두 거짓이어야 false)
// console.log(2 > 0 || 2 < 1); // true
// console.log(2 < 0 || 2 < 1); // false

// > ! (부정 : 조건의 결과를 반대로)
// console.log(!( 1 > 0 )); // false
// console.log(!false); // true
// console.log(!""); // true
// console.log(!undefined); // true
// console.log(!null); // true
// console.log(!'foo'); // false


/*
    5. 타입 연산자 : 인자로 전달된 값의 타입을 문자열로 리턴함

    typeof + 값
    instanceof + 값
*/

// console.log(typeof 'foo');
// console.log(typeof null);


/*
// Q. 연산자 문제
var likes = 999;
// 증가 연산자를 사용하여 좋아요 수를 1 증가시켜 보세요
likes ++;
console.log(likes);

var beers = 'Heineken(Netherlands)';
// 다음을 += 연산자를 사용하여 beers값을 바꾸어 보세요.
// beers = beers + ' Guinness(Ireland)'
beers += ' Guinness(Ireland)';
console.log(beers);


// 십대 : 13세 이상 19세 이하를 십대라고 합니다.
// 논리연산자 'AND(그리고)'를 사용하여 코드로 작성해보세요
// var x = 13;
// console.log(x >= 13 && x <= 19);
*/



/*
    *** 조건문 ***
    
    1. if 조건문
    2. switch 조건문
    3. ? (삼항연산자)
*/

/*
    1. if 조건문
    if (조건) {
        조건이 참일 경우 실행되는 코드
    }
*/

// > if 조건문
// if (1 > 0) {
//     console.log('foo')
// }
// if (1 > 2) { // 실행되지 않음
//     console.log('foo')
// }

// > if/else
// if (1 > 2) {
//     console.log('foo')
// } else {
//     console.log('bar')
// }

// > if/elseif/else
// var year = 2022;
// if (year === 2021) {
//     console.log('Last year')
// } else if (year === 2022) {
//     console.log('This year')
// } else {
//     console.log('Next year')
// }

// if 조건문에서 조건이 boolean 타입이 아닌 경우
// if (true) {
//     console.log('foo')
// }

// if ('foo') { // 빈 문자열이 아닌 값이 오는 경우 true
//     console.log('bar')
// }

// if ("") { // 빈 문자열인 값이 오는 경우 false
//     console.log('foo')
// }

// if (null) { // false
//     console.log('foo')
// }

// if (undefined) { // false
//     console.log('foo')
// }

// if (!null) { // 조건에 boolean타입이 있는 것임 (!false -> true)
//     console.log('foo')
// }



/*
    2. Switch 조건문

    엄격 동등 연산(===)을 수행한다.
*/

// var year = 2022;
// switch (year) {
//   case 2021:
//     console.log('작년');
//     break; // 건너뜀
//   case 2022:
//     console.log('이번 년도');
//     break
//   case 2023:
//     console.log('내년');
//     break
//   default: // 어떤 case와도 일치하지 않을 때
//     console.log('.')
// }



/*
    3. ? (삼항 연산자)
    조건문을 간단한 문법으로 구현할 수 있다.

    조건 ? 값1 : 값2
    조건이 참인 경우 값1을 리턴한다.
    조건이 거짓인 경우 값2를 리턴한다.

*/

// var year = 2022;
// console.log(year === 2022 ? '올해' : '올해가 아닙니다.');

// // 조건문을 변수에 담는것도 가능
// var r = year === 2023 ? '올해' : '올해가 아닙니다.'
// console.log(r);


/*
// 조건문 문제
// Q1. 다음 변수를 활용해서 나이가 십대이면 '그는 십대입니다.'
// 십대가 아니면 '그는 십대가 아닙니다.'를 출력하는 조건문을 만들어보세요
var JoAge = 24;

// if 조건문
if (JoAge > 13 && JoAge < 19) {
  console.log('그는 십대입니다.')
} else {
  console.log('그는 십대가 아닙니다.')
}

// 삼항 연산자
var r = (JoAge >= 18) ? '그는 성인입니다.' : '그는 성인이 아닙니다.';
console.log(r);

// // switch 조건문
// switch (JoAge) {
//   case JoAge >= 19:
//     console.log('그는 십대입니다.')
//     break
//   default:
//     console.log('그는 십대가 아닙니다.')
// }
*/



/***************************************************************************************/



/*
    *** 반복문 ***

    1. for 반복문
    2. while 반복문
*/



// 1. For 반복문    

// 0 ~ 3 사이의 숫자를 출력한다
// for (var i = 0; i < 3; i ++) {
//   console.log(i);
// }


// # 반복문을 사용해서 1에서 10까지의 합 구하기
// var sum = 0;
// for (var i = 1; i <= 10; i ++) {
//   sum += i; // sum = sum + i;
// } 
// console.log(sum);


// # 반복문을 사용해서 문자열 순회하기
// var foo = 'bar';
// for (var i=0; i<foo.length; i++) {
//   console.log(foo[i])
// }


// # break와 continue

// for (var i=0; i<=10; i++) {
//   if (i===5) {
//     break; // 중단 후 밑에 코드를 실행하지 않음
//   }
//   console.log(i);
// }

// for (var i=0; i<=10; i++) {
//   if (i===5) {
//     continue; // 조건을 만족할 때 밑에 코드를 실행하지 않음
//   }
//   console.log(i);
// }



// 2. While 반복문

// 0 ~ 3 사이의 숫자 출력하기
// var i=0;
// while (i<3) {
//   console.log(i);
//   i ++
// }


// # 반복문을 사용해서 1에서 10까지의 합 구하기


// # 반복문을 사용해서 문자열 순회하기


/*
// 반복문 문제
// Q1. for 반복문을 사용해서 a에서 c까지만 출력해보세요.
var alphabets = 'abcdefg';
for (var i=0; i<3; i++) {
    console.log(alphabets[i]);
}

// Q.2 [10, 20, 30, ... , 100] 까지의 합을 구해보세요.
var sum = 0;
for (var i=1; i<=10; i++) {
    sum += (10*i);
    // console.log(i);
}
console.log(sum);

var sum = 0;
for (var i=10; i<=100; i+=10) {
    sum += i;
}
console.log(sum);
*/


/***************************************************************************************/


/*
    *** 변수(변하는 값)와 상수(변하지 않는 값) ***

    1. var (변수, variables) 
    2. let (변수)
    3. const (상수, constant) 

    - 변수를 선언하고 값을 할당하는것을 초기화(initialization)라고 한다.
*/


// 1. var (느슨한 편)

// var foo = 'bar';
// console.log(foo);

// var foo = 'bar';
// foo = 'baz'; // 변수의 값을 다시 할당
// console.log(foo);

// var foo = 'bar';
// var foo = 'baz'; // foo변수를 재선언
// console.log(foo);

// var foo; // 선언 따로
// foo = 'bar'; // 정의 따로 가능 (정의란 값을 할당한다는 것)
// console.log(foo);


// 2. let (var 보다는 조금 더 엄격)

// let foo = 'bar';
// console.log(foo);

// let foo = 'bar'; // 초기화
// foo = 'baz'; // 재정의
// console.log(foo);

// let foo; // 선언 따로
// foo = 'bar'; // 정의 따로 가능
// console.log(foo);

// let foo = 'bar';
// let foo = 'baz'; // 재선언 불가
// console.log(foo); // SyntaxError: Identifier 'foo' has already been declared


// 3. const 값이 변할 수 없음

// const foo = 'bar'; // const는 초기화만 가능.. 재선언 재정의 불가능
// // foo = 'baz'; // TypeError: Assignment to constant variable.
// console.log(foo);


// # let과 const는 블록(block){}범위를 갖는다.
// { // if, for 안의 블록 포함
//   // block안에서 선언된 변수들은 같은 block안에서 접근이 가능하다.
//   var foo = 'Foo';
//   let bar = 'Bar';
//   const baz = 'Baz';

//   // console.log(foo);
//   // console.log(bar);
//   // console.log(baz);
// }
// console.log(foo); // block 밖에서 사용가능 (접근 가능)
// console.log(bar) // ReferenceError: bar is not defined (접근 불가능)
// console.log(baz) // ReferenceError: baz is not defined (접근 불가능)


/***************************************************************************************/


/*
    *** 함수 ***
    호출될 때만 실행되는 코드

    1. 함수 정의하기
      > 함수선언식
      > 함수표현식과 화살표 함수
    2. Hoisting
    3. 전역변수와 지역변수
    4. 'return' 키워드
    5. 함수의 인자
    6. 콜백
*/


// 1. 함수 정의하기 <함수를 표현하는 세 가지 방법..>

// > 함수선언식
// function 함수이름() { 함수식() }
// function f() {
//   console.log('foo')
// }
// // 함수실행
// f()

// >  함수표현식
// 변수에 익명함수를 할당한다.
// const f = function () { // function뒤에 함수이름이 없음
//   console.log('foo')
// }
// // 함수호출
// f()

// > 화살표 함수
// const f = () => { // function이 =>로 대체됨
//   console.log('foo')
// }
// f()


// 2. Hoisting (게양)
// 함수의 정의가 함수의 실행시점보다 위로 간다. (순서를 바꿔도 된다는 말임)
// 함수선언식에서만 적용된다. (함수표현식이나 화살표함수에서는 사용불가)

// f()
// function f() {
//   console.log('foo')
// }

// // 안되는 예시
// f() // ReferenceError: Cannot access 'f' before initialization 
// const f = () => {
//   console.log('foo')
// }


// 3. 전역변수와 지역변수 (var, let, const 상관 없이)

// > 전역(global) 변수
// 함수 밖에서 선언된 변수
// const foo = 'bar'; // 전역변수
// function f() {
//   // 함수안에서 접근 가능
//   console.log(foo)
// }
// f();

// > 지역(local) 변수
// 함수 안에서 선언된 변수
// function f() {
//   var foo = 'bar' // 지역변수
// }
// f();
// // 함수 밖에서 접근이 불가능
// console.log(foo); // ReferenceError: foo is not defined


// 4. 함수의 인자 (함수에 전달되는 값)
// function add(x, y) { // parameter(함수를 정의할 때) : x, y
//     console.log(x + y);
// }
// add(1, 2) // argument(함수를 사용할 때) : 1, 2


//  5. 'return' 키워드
// function add(x, y) {
//     return x + y;  // 계산한 값을 반환
// }
// const r = add(1, 2);
// console.log(r);

// function add(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         // typeof 값의 데이터 타입을 문자열로 반환
//         return '인자는 Number타입이어야 합니다.'
//     }
//     // 위의 조건문이 리턴되면 아래는 실행되지 않음 (return 한다는것은 함수의 실행이 중지되는것과 같음)
//     return x + y;
// }
// // let r = add(1, 'foo'); // 1foo
// let r = add(1, 2); 
// console.log(r) 


// 6. 콜백(callback)
// 다른 함수의 인자가 되는 함수
// function f(callback) { // callback이 실행된 값을 r변수에 담아 출력함
//     let r = callback()
//     console.log(r)
// }
// function cb() { // callback
//     return "foo"
// }
// f(cb); // cb함수가 f함수의 argument로 전달됨

// # 콜백으로 익명함수를 사용하기
// function f(callback) { 
//     let r = callback()
//     console.log(r);
// }
// f(function () {
//     return "foo"
// })


// 시계만들기 (callback 사용 예시)
// function getTime() {
//     let time = new Date().toLocaleTimeString();
//     console.log(time);
// }
// // setInterval(callback, ms)
// // ms(milliseconds; 1000이 1초)마다 callback을 실행하는 함수이다.
// setInterval(getTime, 1000);

/*
// Q. 나이를 인자로 전달받아서 성인이면 '성인입니다.' or '성인이 아닙니다.'를 출력하는 함수를 만들어보세요.
// 인자가 숫자가 아닌 경우 연산을 중단하고 메시지를 출력하는 기능도 추가해보세요

// function isAdult(age) {
//     if (typeof age !== 'number') {
//         return ('숫자를 입력해주세요.');
//     }
    
//     if (age >= 18) {
//         return ('성인입니다.');
//     } else {
//         return ('성인이 아닙니다.');
//     }

// }
// const r = isAdult(20)
// console.log(r)
*/


/***************************************************************************************/

/*
    *** 에러와 에러처리 ***

    1. 에러의 정의

    2. 에러 처리
      try / catch

    3. 에러의 종류
    > ReferenceError
    > SyntaxError
    > TypeError
    > RangeError
    > URIError

    4. 커스텀 에러
*/


// 1. 에러의 정의
// name, message, stack으로 구성되있다.
// 에러는 프로그램을 중단시킨다.
// 에러는 처리가 되어야 한다.

// console.log(x) // 선언하지 않은 변수를 사용해서 ..
/* 에러 예시
ReferenceError: x is not defined
    at Object.<anonymous> (C:\Users\Administrator\Desktop\yoonzy\basic\js\index.js:749:13)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.12.1
[nodemon] app crashed - waiting for file changes before starting... << 중단
*/


// 2. 에러 처리
// 에러 처리는 프로그램이 중단되는것만 막아준다.

// try {
//     // 코드를 작성한다.
//     let x = 'foo';
//     console.log(x)
// } catch (err) {
//     // 에러를 처리한다. 중단되지 않음
//     console.error(err)
// }

// try/catch ... finally
// try {
//     console.log(x)
// } catch (err) {
//     console.error(err)
// } finally { // 에러 발생여부와 상관없이 항상 실행된다. (선택사항)
//     console.log('hi')
// }
 

// 3. 에러의 종류

// > ReferenceError : 선언되지 않은 변수를 참조했을 때
// try {
//     console.log(x)
// } catch (err) {
//     console.error(err)
// }

// > SyntaxError : 문법 오류
// 컴파일 에러를 발생시킨다.
// 컴파일러가 코드를 이해하지 못해서 발생한다.
// try/catch 구문으로 처리 불가 (중단됨)
// try {
//     console.log(2022));
// } catch (err) {
//     console.error(err)
// }

// > TypeError : 변수나 인자가 유효한 타입이 아닐 경우 발생한다.
// try {
//     // setInterval(callback, ms)
//     setInterval(null, 1000);
// } catch(err) {
//     console.error(err)
// }

// > RangeError : 값이 허가된 범위를 벗어났을 때 발생한다.
// try {
//     const pi = Math.PI;
//     console.log(pi.toPrecision(200))
//     // toPrecision 메서드의 인자는 1~100까지만 전달받을 수 있음
// } catch (err) {
//     console.error(err)
// }

// > URIError : encodeURI() 또는 decodeURI() 함수가 유효하지 않은 인자를 전달받았을 때 발생한다.
// try {
//     decodeURI('%')
// } catch (err) {
//     console.error(err)
// }


// 4. 커스텀 에러 : 코드를 작성할 수 없도록 일부러 에러를 발생시킴
try {
    let id = 'summer456';
    console.log('summer456님 로그인 시도');
    if (id !== 'summer123') {
        // throw 커스텀 에러 : 일반 에러와 마찬가지로 프로그램 실행이 중단됨.
        throw 'id가 일치하지 않습니다.'
    }
    // 실행되지 않는다.
    console.log('로그인 성공.');
} catch (err) {
    console.error('에러:', err);
}



/***************************************************************************************/


/*
    *** Array (배열) ***
    한개 이상의 값을 가지고 있는 데이터 타입
    순서가 있음
    ※ 함수는 하나의 값만 반환할 수 있는데, 배열을 사용하면 여러 개의 값을 반환할 수 있다.

    1. Array에 접근하기
    
    2. Array의 메서드

    3. Array 순회하기
*/


// 1. Array에 접근하기

// let arr = ['foo', 'bar', 'baz'];
// foo, bar, baz => arr 배열의 원소 
// console.log(arr[0]); // foo
// console.log(arr[1]); // bar
// console.log(arr[2]); // baz
// console.log(arr.length); // 3


// 2. Array 메서드

// [값을 배열의 맨뒤에 추가 (1개)]
// // 배열.push('newItem') : array의 가장 끝 부분에 새로운 item을 추가하는 메서드
// let arr = ['foo', 'bar'];
// arr.push('baz');
// console.log(arr);

// [값을 배열의 첫번째 원소로 추가]
// let li = ['a', 'b', 'c', 'd', 'e'];
// li.unshift('z');
// console.log(li); // [ 'z', 'a', 'b', 'c', 'd', 'e' ]

// [값을 배열에 추가 (여러개)]
// Array.concat() : array를 합쳐서 새로운  array로 return함
// 기존의 array는 변화시키지 않는다.*
// let arr1 = ['foo', 'bar'];
// let arr2 = ['baz'];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// [배열의 맨뒤 원소를 제거 (1개)]
// let arr = ['foo', 'bar', 'baz'];
// // 가장 마지막의 item을 1개 제거한다.
// arr.pop();
// console.log(arr);

// [배열의 첫번째 원소를 제거 (1개)]
// let li = ['a', 'b', 'c', 'd', 'e'];
// li.shift();
// console.log(li); // [ 'b', 'c', 'd', 'e' ]

// [값을 중간에 추가 또는 제거 (여러개)]
// // Array.splice(시작index, (삭제 갯수:생략가능), (추가할 값:생략가능)) : 시작 index 부터 끝까지(혹은 설정 갯수까지) item제거하고 값을 리턴
// let arr = ['foo', 'bar', 'baz'];
// arr.splice(1, 2);
// console.log(arr);
// let li = ['a', 'b', 'c'];
// li.splice(1,0,'d'); // 첫번째 인덱스에 d를 넣어라
// console.log(li); //[ 'a', 'd', 'b', 'c' ] 
// let li2 = ['a','b','c'];
// li2.splice(1,1, 'x', 'y'); // 1번째 인덱스부터 1개 값을 삭제하고 x,y를 넣어라
// console.log(li2); // [ 'a', 'x', 'y', 'c' ]

// [배열의 원소들을 정렬]
// let li = ['c', 'e', 'a', 'b', 'd'];
// li.sort(); // 오름차순
// console.log(li); // [ 'a', 'b', 'c', 'd', 'e' ]
// li.reverse(); // 내림차순
// console.log(li); // [ 'e', 'd', 'c', 'b', 'a' ]





// 필터메소드
// Array.Filter(callback) : 조건에 맞는 item만 필터링해서 리턴 / 기존의 array는 변화시키지 않고 새로운 array로 return
// const arr = ['foo', 'bar', 'baz']
// const r = arr.filter (function (item, index, array) { // filter 메소드는 array를 순회함
//     if (item[0] ==='b') { // 아이템중에서 첫글자가 b로 시작하는 아이템
//         return item;
//     }
// })
// console.log(r); // [ 'bar', 'baz' ]
// const arr = [1,2,3,4,5];
// const r = arr.filter(function (item, index, array) {
//     if (item > 3) {
//         return item;
//     }
// })
// console.log(r); // [4,5]


// 3. Array 순회하기(반복문)

// let arr = ['foo', 'bar', 'baz'];
// for (let i=0; i < arr.length; i++) {
//     // Array의 아이템에 특정한 작업을 수행할 수 있다.
//     // toUpperCase() : 문자열을 대문자로 바꿔주는 메서드
//     console.log(arr[i].toUpperCase());
// }
// # 배열의 for in 문
// let arr = ['foo', 'bar', 'baz'];
// for (let name in arr) {
//     console.log(arr[name]);
// }

// function get_members() {
//     return['egoing', 'k8805', 'sorialgi', 'leezche'];
// }
// members = get_members();
// for (let i=0; i<members.length; i++) {
//     console.log(members[i].toUpperCase());

// }


// Q1. A, B, C로만 구성된 array로 바꾸어보세요
// Array.splice()를 사용
// const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
// alphabets.splice(3);
// console.log(alphabets);

// Q2. 각 아이템에 10을 곱한 값의 합을 구해보세요.
// 반복문을 사용해서
// let arr = [1, 2, 3];
// let sum = 0;
// for (let i=0; i < arr.length; i++) {
//     sum += arr[i] * 10;
// }
// console.log(sum);


/*
    *** Object (객체) ***
    데이터와 함수의 집합
    순서가 없음 
    객체와 배열의 차이점 : 배열의 인덱스가 객체에서는 key이다.
*/
// const cat = {
//     // cat object의 속성(property) : name, home, sound
//     name : "키티",
//     home : null,
//     // 속성의 값이 함수인 경우 : 메서드(method)
//     sound : function () {
//         return "야옹"
//     },
// }
// // cat 객체에 접근하기
// console.log(cat);
// console.log(cat.name); // 이름 속성에 접근
// console.log(cat['name']); // 이름 속성에 접근
// console.log(cat['na'+'me']); // 이것도 가능 대괄호 안에서만 ..
// console.log(cat.color); // 존재하지 않는 속성에 접근 : undefined
// console.log(cat.sound()); // sound 메서드에 접근

// // # 객체에 새로운 속성을 추가하기
// cat.age = 2; // object.새로운속성의이름 = 속성값;
// console.log(cat);

// // # 객체의 속성을 업데이트하기
// cat.home = '평리단길' // object.속성 = 새로운속성값;
// console.log(cat);

// // # 객체의 속성을 삭제하기
// delete cat.home; // delete object.속성
// console.log(cat);

// // # 객체의 반복문
// let grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
// for (key in grades) {
//     console.log("key : "+key+" / value : "+grades[key]);
// }


/*
// Q. 객체 문제
// // Q1. for 반복문을 이용해서
// // 맥주의 이름만 출력해보세요
// const beers = [
//     {name: 'Guinness', origin: 'Ireland'},
//     {name: 'Heineken', origin: 'Netherlands'},
//     {name: 'Budwiser', origin: 'USA'},
// ];
// for (let i = 0; i<beers.length; i++) {
//     console.log(beers[i].name);
// }

// // Q2. 유럽맥주의 이름을 출력해보세요
// for 반복문을 이용
//  const beers = {
//     europeanBeers: ['Guinness', 'Heineken', 'Kronenbourg'],
//     asianBeers: ['Asahi', 'Kloud']
//  }
//  for (let i=0; i<beers.europeanBeers.length; i++) {
//     console.log(beers.europeanBeers[i]);
//  }
//  const europeanBeers = beers.europeanBeers;
//  for (let europeanBeer of europeanBeers) {
//     console.log(europeanBeers)
//  }

// // Q3. 판매중인 맥주(available: true)의 배열(array)을 만들어보세요
// filter 메서드 사용
// const beers = [
//     {name: 'Guinness', origin: 'Ireland', available: false},
//     {name: 'Heineken', origin: 'Netherlands', available: true},
//     {name: 'Budwiser', origin: 'USA', available: true},
// ]
// const availableBeers = beers.filter (function (beer) {
//     if (beer.available) { // available === true
//         return beer;
//     }
// })
// console.log(availableBeers);
*/


/*
    *** Class ***
    객체를 생성하기 위한 템플릿

    1. 클래스와 인스턴스
    2. 정적(static) 속성과 정적 메서드
    3. 미리 정의된 메서드
    4. 리터럴 표기법
*/

// 1. 클래스와 인스턴스
// 클래스를 사용하는 이유 : 코드의 재사용
// 인스턴스는 클래스의 속성과 메서드를 상속받아 사용함
// class Cat { // 클래스는 첫 글자가 대문자
//     // 생성자(함수)
//     // 인스턴스의 속성을 설정한다.
//     constructor (name, age) {
//         this.name = name; // this == 인스턴스(cat)
//         this.age = age;
//     }

//     // 클래스의 속성
//     home = null;

//     // 클래스의 메서드
//     sound() {
//         return '야옹'
//     }
// }
// // Cat의 인스턴스이면서 object이기도 함
// const cat = new Cat('키티', 2)
// // instance 인지 확인하기
// console.log(cat instanceof Cat); // true
// console.log(cat);
// // Cat클래스의 home속성을 상속받았다
// console.log(cat.home); // null
// // Cat클래스의 sound속성을 상속받았다
// console.log(cat.sound()); // 야옹


// 2. 정적 속성과 정적 메서드
// 클래스와 관련된 유틸리티를 제공한다.
// class Cat {

//     // ...

//     // 정적 속성(property)
//     static personality = '폭력적'

//     // 정적 메서드
//     static isAdult(age) {
//         if (age<1) {
//             return '아기고양이';
//         } else {
//             return '어른고양이';
//         }
//     }
// }
// // 인스턴스를 생성하지 않음.. 
// // 클래스 자체가 정적 속성을 호출한다.
// console.log(Cat.personality);
// console.log(Cat.isAdult(2));
// // Math 클래스의 정적 속성 PI
// const pi = Math.PI;
// console.log(pi);
// Number 클래스의 isNaN 정적 메서드
// console.log(Number.isNaN('foo'-1)); // NaN이면 true


// 3. 미리 정의된 클래스
// > 문자처리 : String
// > 숫자와 날짜 관련 : Number, Math, Date
// > 인덱스 컬렉션 : Array
// > 에러 : SyntaxError, ReferenceError, TypeError, ...
// > 기타 : Promise, JSON


// 4. 리터럴 표기법 : 코드를 더 간편하게 사용 가능
// let foo = new String('Foo'); // foo는 String 클래스의 인스턴스
// console.log(foo);
// ↓
// Srting 클래스의 인스턴스
// 리터럴 표기법 사용한것임 (클래스를 호출하지 않는다.)
// let foo = 'Foo';
// console.log(foo);
// console.log(foo.toUpperCase()) // String 클래스로부터 상속받은 메서드

// Number 클래스의 인스턴스
// let year = 2022;
// console.log(year.toString(2)); // Number 클래스로부터 상속받은 메서드 
// toString(n) : 인자로 전달받은 값의 진법으로 변경해줌

// 날짜 객체는 리터럴표기법을 사용할 수 없다.
// let date = new Date().toLocaleDateString();
// console.log(date);

/*
    Q. 클래스 문제 !
    다음을 클래스로 정의해보세요

    Beer 클래스

    > 인스턴스 속성
    이름(name), 원산지(origin)
    > 클래스 속성
    역사(history) : B.C 3000
    > 클래스 메서드
    만드는법(recipe) : 보리, 홉, 효모, 물로 만듭니다.
    > 정적 속성
    주의(caution) : 지나친 음주는 돈이 많이 듭니다.


    class Beer {
        constructor (name, origin) {
            this.name = name;
            this.origin = origin;
        }

        history = 'B.C 3000';

        recipe() {
            return '보리, 홉, 효모, 물로 만듭니다.';
        }

        static caution = '지나친 음주는 돈이 많이 듭니다.';
    }
    // Beer 클래스의 인스턴스
    const beer1 = new Beer('Guinness', 'Ireland');
    const beer2 = new Beer('Heineken', 'Netherlands')

    // 클래스의 속성
    console.log(beer1.history);
    console.log(beer2.history);
    // 클래스의 메서드
    console.log(beer1.recipe());
    console.log(beer2.recipe());
    // 정적 속성을 호출할때 : 인스턴스 x , 클래스 o
    console.log(Beer.caution);

*/

/*
    *** 비동기 작업 (Asynchronous) ***
    블로킹을 방지하기 위해 사용된다.
    예시 ) 서버에 데이터를 요청하는 등

    1. 동기 작업
    2. 비동기 작업
    3. 실제 사용 예시

*/

// 1. 동기 작업
// function f() {
//     console.log('foo');
// }
// f() // 동기 함수 : 호출되었을 때 실행된다.
// console.log('bar')
// foo
// bar


// 2. 비동기 작업
// function f() {
//     setTimeout(() => {
//         console.log('foo');
//     }, 0)
// }
// f() // 비동기 함수 : 호출순서와 상관없이 가장 마지막에 실행된다.
// console.log('bar');
// bar
// foo

// function f() {
//     setTimeout(() => {
//         console.log(x)
//     }, 0)
// }
// try {

//     f() // try/catch 에서 비동기함수의 에러를 처리할 수 없다. 비동기함수 내부에서 에러를 처리해야 함
//     console.log(bar);

// } catch (err) {
//     console.error(err)
// }
// // 에러 이유 x가 선언되지 않음

// 3. 실제 사용 예시
// function fetchData(callback) {
//     let data = {foo: 'bar'}

//     setTimeout(() => {
//         callback(null, data)
//     }, 1000)
// }

// // 서버에 데이터를 요청하는 함수 , 비동기함수
// // 서버에서 데이터를 응답받는데 1초가 걸린다고 가정
// // 다음작업이 먼저 실행이 되고 데이터(서버의 응답)를 가져오고나서 콘솔에 출력
// fetchData(function (err, data) {
//     // 비동기함수 내부에서 에러 처리(try/catch)
//     try {
//         if (err) {
//             throw err;
//         }

//         console.log('서버의 응답:', data)

//     } catch (err) {
//         console.error(err)
//     }
// })
// console.log("다음 작업");
// // 다음 작업
// // 서버의 응답: { foo: 'bar' }



/*
    *** Promise 객체 ***
    비동기 작업의 성공/실패 여부 및 결과를 나타낸다.
    사용 목적 : 비동기 작업의 가독성을 향상시키기 위해 사용한다.

    1. Promise 객체의 구조
    2. 실제 사용 예시
    3. async/await
*/

// 1. 구조
// const o = new Promise((res, rej) => {

//     // 비동기 작업이 성공함
//     // res('foo') // res(resolve, 성공)

//     // 비동기 작업이 실패함
//     rej('bar') // rej(reject, 실패)
// })

// // 상태 : pending은 비동기 작업이 보류중임을 의미한다.
// // 상태 : fullfilled은 비동기 작업이 성공함을 의미한다.
// // 상태 : rejected은 비동기 작업이 실패함을 의미한다.
// console.log(o)


// 2. 실제 예시
// function fetchData() {
//     const promise = new Promise((res, rej) => {
//         res({foo: 'bar'})
//     }) 

//     // Promise 객체를 리턴한다.
//     return promise
// }

// // 서버에 데이터를 요청하는 함수
// fetchData()
// .then(data => { // 데이터를 처리하는 부분
//     console.log(data)
// })
// .catch(err => { // 에러를 처리하는 부분
//     console.error(err)
// })
// console.log("다음 작업")

/* 문법 비교 */
// fetchData(function (err, data) {
//     // 비동기함수 내부에서 에러 처리(try/catch)
//     try {
//         // 에러 처리    
//         if (err) {
//             throw err;
//         }

//         // 데이터 처리
//         console.log('서버의 응답:', data)

//     } catch (err) {
//         console.error(err)
//     }
// })


// 3. async/await
// function fetchData() {
//     const promise = new Promise((res, rej) => {
//         res({foo: 'bar'})
//     }) 

//     // Promise 객체를 리턴한다.
//     return promise
// }

// f()
// async function f() {
//     try {

//         const data = await fetchData(); // 비동기 작업이 끝날때까지 기다린다. => 동기작업처럼 됨
//         // 비동기 작업이 많을 때 사용한다.
//         // 이미 비동기 함수로 만들어진 경우 .. 
//         console.log(data);

//         console.log("다음 작업")
//     } catch (err) {
//         console.error(err)
//     }
// }


/*
    *** ES6 (2015) ***
    새로운 문법이 많이 나온 버전

    1. 새로나온 문법
    > 삼항연산지
    > let, const
    > 화살표 함수
    > Array.map() 메서드
    > 구조분해할당 (destructing)
    > 전개구문 (spread syntax)
    > 클래스
    > Promise

*/


// 1. Array.map() 메서드
// const arr = ['foo', 'bar', 'baz'];
// // 배열을 순회하면서 아이템에 특정한 작업을 할 수 있다.
// // 새로운 배열을 리턴한다.
// // for 반복문의 대체로 사용이 가능 (순회하니까)
// const r = arr.map((item, index, array) => {
//     return item.toUpperCase()
// })
// console.log(r)


// 2. 구조분해할당 (destructing assignment)
// 간단한 문법으로 객체/배열의 속성/아이템을 변수에 할당할 수 있다.
// const arr = ['foo', 'bar', 'baz'];

/* 배열 
// 기존의 방식
// const foo = arr[0]; // array의 index로 item접근
// const bar = arr[1];
// const baz = arr[2];
// console.log(foo, bar, baz);

// 구조분해할당
// 대괄호안에 변수이름을 의도하는 순서에 맞게 작성
// const [foo, bar, baz] = arr;
// console.log(foo, bar, baz);
*/

/* 객체 
// const o = {foo: 'foo', bar: 'bar', baz: 'baz',};
// 기존의 방식
// const foo = o.foo; // 속성에 접근
// const bar = o.bar;
// const baz = o.baz;

// 구조분해할당
// 변수의 이름과 속성이 이름이 일치해야함 (일치하지 않으면 undefiend)
// const {foo, bar, baz} = o;
// console.log(foo, bar, baz);
 */

/* 함수의 파라미터
// const o = {foo: 'foo', bar: 'bar', baz: 'baz',};
// 기존방식
// function f(props) {
//     const foo = props.foo;
//     const bar = props.bar;
//     const baz = props.baz;

//     console.log(foo, bar, baz)
// }
// f(o)

// 구조분해할당
// 변수가 object의 속성이름과 같아야함
// 뒤에 필요없는 속성은 생략 가능하지만 중간은 생략 불가능
// function f({foo, bar, baz}) { // 파라미터의 변수이름
//     console.log(foo, bar, baz)
// }
// f(o);
*/

/*
    Q. 구조분해할당 문제

// Q1. 각 나라의 맥주를 변수에 담아보세요
// 구조분해할당을 사용해서
// irishBeer, dutchBeer, americanBeer
// const beers = [
//     {name: 'Guinness', origin: 'Ireland'},
//     {name: 'Heineken', origin: 'Netherlands'},
//     {name: 'Budwiser', origin: 'U.S'},
// ]
// const [irishBeer, dutchBeer, americanBeer] = beers;
// console.log(irishBeer);

// Q2. 객체의 속성을 변수에 담아보세요
// 구조분해할당을 이용
// const irishBeer = {name: 'Guinness', origin: 'Ireland', available: false};
// const {name, origin, available} = irishBeer;
// console.log(name, origin, available);

// Q3. 함수의 파라미터를 객체분해할당 문법으로 작성해보세요
// const irishBeer = {name: 'Guinness', origin: 'Ireland', available: false};
// function f({name, origin}) {
//     console.log(name, origin);
// }
// f(irishBeer);

*/



// 3. 전개구문 (spread syntax) ***
// 객체/배열의 속성/아이템을 간편하게 복사할 수 있다.


// 1). 배열 : ...변수명

// 전개구문으로 배열 복사해서 새로운 아이템 추가하기 == push와 비슷
// const arr = ['foo', 'bar'];
// const newItem = 'baz';
// const r = [...arr, newItem]; // ...arr : ...변수명 -> arr 변수의 아이템을 복사한것임
// console.log(r); // [ 'foo', 'bar', 'baz' ]

// 전개구문으로 배열 합치기 == concat 메서드랑 같음
// const arr1 = ['foo', 'bar'];
// const arr2 = ['baz'];
// const r = [...arr1, ...arr2];
// console.log(r); // [ 'foo', 'bar', 'baz' ]
// const r = [...arr2, ...arr1];
// console.log(r);


// 2). 객체 전개구문 : ...객체명
// // 새로운 속성 추가
// const o = {foo: 'foo', bar: 'bar'}
// const r = {...o, baz:'baz'};
// console.log(r);

// // 속성 업데이트 (있는 값이면 업데이트되고, 없는 값이면 추가됨)
// const o = {foo: 'foo', bar: 'bar', baz: 'baz'}
// const r = {...o,  bar: null}
// console.log(r)

/* Q. 전개구문 문제*/
//  Q1. beers 배열에 일본 맥주를 추가해보세요
// 전개구문 이용
// const beers = [
//     {name: 'Guinness', origin: 'Ireland'},
//     {name: 'Heineken', origin: 'Netherlands'},
//     {name: 'Kloud', origin: 'S.Korea'},
// ]
// const japaneseBeer = {name: 'Asahi', origin:'Japan'}
// const newBeers = [...beers, japaneseBeer]
// console.log(newBeers)

// Q2. 기네스가 재입고 되었다
// 객체의 전개구문을 이용
// const irishBeer = {name: 'Guinness', origin: 'Ireland', available: false};
// const r = {...irishBeer, available: true};
// console.log(r);


/*
    *** JSON (JavaScript Object Notation) ***

    자바스크립트 객체 표기법
    자바스크립트 객체를 저장하거나 전송하기 위한 텍스트 포멧

    1. 객체와 JSON
    2. JSON.stringfy()
    3. JSON.parse()
*/

// 1. 객체와 JSON / JSON 표기법 : '{"속성 key": "값 value"}'
// const o = {foo: 'bar'};
// const json = '{"foo": "bar"}' // JSON 표기법 : '{"속성 key": "값 value"}'
// console.log(o);
// console.log(json);
// console.log(typeof json) // string


// 2. JSON.stringfy()
// 객체를 JSON 포맷으로 변환한다.
// const o = {foo: 'bar'};
// const r  = JSON.stringify(o);
// console.log(r); // {"foo":"bar"} - string


// 3. JSON.parse()
// JSON을 객체로 변환한다.
// const json = '{"foo": "bar"}';
// const r = JSON.parse(json);
// console.log(r);