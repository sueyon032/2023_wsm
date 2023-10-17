var now= new Date();
var year= now.getFullYear();
var month= now.getMonth()+1;

const dateContainerDiv= document.getElementsByClassName("dates container")[0];

const setCalendar=(year, month)=>{
    // 현재 월 제목에 표시하자
    // html-> js
    var titleMonthDiv= document.getElementsByClassName("month")[0];   
    // =`${month}월`;
    titleMonthDiv.innerHTML= `${month}월`;

    // 1~해당 월의 마지막 날짜까지 날짜 div 만들자
    // datesContainerDiv의 자식들(dateItemDiv) clear
    // while(dateContainerDiv.firstChild){ // 첫번째 방법
    //     dateContainerDiv.removeChild(dateContainerDiv.firstChild);
    // }
    // dateContainerDiv.innerHTML= ""; // 두번째 방법
    dateContainerDiv.replaceChildren(); // 세번째 방법

    // 해당 월의 마지막 날짜
    var thisMonthLastDate= new Date(year, month+1-1, 0).getDate(); // 2023년 9월 전날: 8월 31일 => 9월의 0일은 9월의 전날(8월31일)
    for(let date=1; date<=thisMonthLastDate; date++){
        let dateItemDiv=document.createElement("div");  // <div></div>  만들어줌
        dateItemDiv.classList.add("date");  // <div class="date"></div>
        dateItemDiv.classList.add("item");   // <div class="date item"></div>
        dateItemDiv.innerHTML=date;  // <div class="date item">date</div>
        // .dates.container에게 자식으로 붙이자
        dateContainerDiv.appendChild(dateItemDiv);
    }

    // 1일을 해당 요일로 이동하자
    let firstDateDiv=dateContainerDiv.querySelector(".date.item:nth-child(1)");
    // css: .date.item:nth-child(1) {grid-column-start:6}
    // 1일의 요일 구하자
    var firstDateDay= new Date(year, month - 1, 1).getDay();
    firstDateDiv.style.gridColumnStart= firstDateDay+1;

    // 토요일: 파란색으로 글자로: 토요일 첫날= 7- 이달의 1일 요일
    let saturdayFirstDate= 7 -firstDateDay;   // 5->2, 2->5, 6->1
    let saturdayDivs=dateContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${saturdayFirstDate})`);
    for(let saturdayDiv of saturdayDivs){
        // .date.item:nth-child(7n+2){color:blue;}
        saturdayDiv.style.color="blue";
    }

    // 일요일: 빨간색으로 글자로: 일요일 첫날=7- 이달의 1일 요일
    let sundayFirstDate= (8 - firstDateDay)%7;  // 5->3, 2->6, 6->2
    let sundayDivs=dateContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${sundayFirstDate})`);
    for(let sundayDiv of sundayDivs){
        sundayDiv.style.color="red";
    }


    
//     // 해당 월의 1일은 무슨 요일?
//     var thisMonthFirstDay= new Date(year, month-1, 1).getDay();    // 0: Sun, 1: Mon, 2: Tue, 3:Wed, 4: Thu, 5: Fri, 6: Sat
    
//     console.log(thisMonthLastDate, thisMonthFirstDay);
    
//     // - 공휴일 빨간색
}

setCalendar(year, month);

// <: 이전달    // month-=1;
const leftDiv=document.getElementsByClassName("left")[0];
leftDiv.onclick=()=> {
    month--;
    let prevMonth= new Date(year, month-1);
    year= prevMonth.getFullYear();
    month= prevMonth.getMonth()+1;
    setCalendar(year, month);
}
// leftDiv.addEventListener("click", ()=>console.log("이전달"));

// >: 이후달 // month+=1;
let rightDiv=document.getElementsByClassName("right")[0];
rightDiv.onclick=()=>{
    month++;
    if(month==13){
        year++;
        month=1;
    }
    setCalendar(year,month);
};