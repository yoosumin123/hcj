// 특정 문자열 위치 확인하기 - indexOf
const str = 'Carpe diem, seize the  day';
console.log(`"e"는 ${str.indexOf('e')}번재 인덱스에 있습니다.`);
console.log(`대문자 "C"는 ${str.indexOf('C')}번재 인덱스에 있습니다.`);
console.log(`"소문자 "c"는 ${str.indexOf('c')}번재 인덱스에 있습니다."`);
console.log(`문자열 ", se"는 ${str.indexOf('e')}번재 인덱스에 있습니다.`);