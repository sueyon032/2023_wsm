// URL book에 해당하는 parameter 값 읽어오자(String)
// let book= "100"
let url= new URL(location.href);
let book= url.searchParams.get("book");
console.log(`book: ${book} type: ${typeof book}`);  // type은 "3" string
// book이 null이면 책장으로 가자
if(book===null) {
    // window.open("index.html","_top");    // 자신에 창에 열기
    location.href="index.html"; // 주소열기
}

// book값(String) -> bookId(number) 변환하자    "3"->3
// let bookId= book*1;  // 절대 쓰지마 string-> number
// let bookId = Number(book);  // string-> number
let bookId=parseInt(book);  // string-> number
console.log(`book: ${bookId} type: ${typeof bookId}`);  // 3 number

// books를 돌면서 bookId(number)와 같은 id값의 책을 가져오자
let bookData;
for(let bookOne of books){
    if(bookId === bookOne.id){  // ===: 값과 자료형 둘다 맞을 때 인정
        bookData = bookOne;
        break;
    }
}

// 제목을 보여주자
let title= bookData.title;
console.log(title);
// console.log(bookData["title"]);
let author= bookData.author;
let publisher= bookData.publisher;
let bookImage= bookData.img;
console.log(title,author,publisher,bookImage);


const bookImageDiv= document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML=`<img src="${bookImage}"/>`;


// HTML 요소-> js변수
const titleDiv= document.getElementsByClassName("title")[1];
// const titleDiv= document.querySelectorAll(".title"); // 추천 ㄴㄴ
// js변수.innerHTML
titleDiv.innerHTML=title;
// titleDiv에 title 속성에 값으로 변수title을 넣자
titleDiv.setAttribute("title",title);   // = titleDiv.title=title;

const authorDiv= document.getElementsByClassName("author")[1];
authorDiv.innerHTML=author;

const publisherDiv= document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML=publisher;

// 읽은 날짜: 임시로 오늘의 날짜 표시하자
let now= new Date();

// 오늘의 날짜 구하자
let year= now.getFullYear();
let month= now.getMonth()+1;
let date= now.getDate();

// 사람이 알아보는 형식으로 바꾸자
let dateString=`${year}년 ${month}월 ${date}일`;
// HTML-> js 
const readDateDiv= document.getElementsByClassName("read-date")[1];
// 오늘의 날짜 값 넣자
readDateDiv.innerHTML=dateString