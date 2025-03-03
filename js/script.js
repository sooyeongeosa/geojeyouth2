// 전체메뉴 모달창 활성화
const allMenu = document.querySelector(".all-menu"),
      allMenuMask = document.querySelector(".all-menu-mask"),
      allMenuWrapper = document.querySelector(".all-menu-wrapper"),
      allMenuClose = document.querySelector(".all-menu-close");
   
// 전체메뉴버튼(all-menu)이 클릭되면
allMenu.addEventListener('click',function(){
    // all-menu-mask활성화 ==> class명(active)추가 
    allMenuMask.classList.add("active")
    // all-menu-wrapper활성화 ==> class명(active)추가 
    allMenuWrapper.classList.add("active")
})
// 전체메뉴종료버튼(all-menu-close)이 클릭되면
allMenuClose.addEventListener('click',function(){
    // all-menu-mask비활성화 ==> class명(active)제거 
    allMenuMask.classList.remove("active")
    // all-menu-wrapper비활성화 ==> class명(active)제거 
    allMenuWrapper.classList.remove("active")
})


// 모바일 버튼이 클릭되면
const mbBtn =document.querySelector('.mb-bt'),
      mbNav =document.querySelector('.mb-nav'),
      mbMenuMask =document.querySelector('.mb-menu-mask')

// 요소를 담은 변수명.addEventListener("이벤트종류", 할일)
mbBtn.addEventListener("click",function(){   
    let isActive = mbBtn.classList.contains('active')
    if(isActive) {//모바일 메뉴가 활성화되어있는 상태
        // 클래스 active 제거
        mbBtn.classList.remove("active")
        mbNav.classList.remove("active")
        mbMenuMask.classList.remove("active")
        mbMenuList.forEach(function(list,index){
            list.style.height = "55px"
            mbMainMenu[index].classList.remove("open")
        })
    } else {//모바일 메뉴가 비활성화되어있는 상태
        // 클래스 active 삽입
        mbBtn.classList.add("active")
        mbNav.classList.add("active")
        mbMenuMask.classList.add("active")
    }
})
// 모바일 서브메뉴 펼치기(아코디언)기능
const mbMenuList = document.querySelectorAll(".mb-menu > li"),
      mbMainMenu = document.querySelectorAll(".mb-mainMenu"),
      mbSubMenu = document.querySelectorAll(".mb-subMenu");
    console.log(mbMenuList)
    // console.log(mbMainMenu)
    // console.log(mbSubMenu)

// 서브메뉴의 높이값을 저장하는 배열변수
let mbSubmenuHeight=[]; //배열선언
// 서브메뉴의 높이값을 계산
mbSubMenu.forEach(function(list,index){
    console.log(list.querySelectorAll("li"))
    let count = list.querySelectorAll("li").length;
    console.log(count)
    mbSubmenuHeight[index]=52*count+22    
})
console.log(mbSubmenuHeight)
// 모바일 메뉴(li>a(.mb-mainMenu))를 클릭했을 때
mbMainMenu.forEach(function(mainList, idx){
    mainList.addEventListener("click",function(event){
        event.preventDefault(); //a태그의 linke막아줌
        mainList.classList.toggle("open")
        let isOpen = mainList.classList.contains("open")
        if(isOpen) { //서브메뉴 open
            let subMenuHeight = mbSubmenuHeight[idx]
            console.log(subMenuHeight)
            mbMenuList[idx].style.height = `${subMenuHeight+55}px`  
        }else {//서브메뉴 close
            mbMenuList[idx].style.height=`55px`
        }
    })  
})
// 화면사이즈 체크
window.addEventListener("resize",function(){
    let winWidth=window.innerWidth;
    console.log(winWidth);
    if(winWidth > 1220) {
        mbBtn.classList.remove("active")
        mbNav.classList.remove("active")
        mbMenuMask.classList.remove("active")
        mbMenuList.forEach(function(list,index){
            list.style.height = "55px"
            mbMainMenu[index].classList.remove("open")
        })
    }else {
        // all-menu-mask비활성화 ==> class명(active)제거 
        allMenuMask.classList.remove("active")
        // all-menu-wrapper비활성화 ==> class명(active)제거 
        allMenuWrapper.classList.remove("active")
    }
})
// 비쥬얼 슬라이드
new Swiper('.sw-visual',{
    loop: true,
    autoplay: {
        delay: 5000,
    },
    speed:2500,
    effect: "fade",
    pagination: {
        el:'.sw-pagination',
        clickable: true,
    }

})
// 배너모음 슬라이드
let swBanner=new Swiper('.sw-banner',{
    // slidesPerView: 6,
    // spaceBetween: 13,
    slidesPerView: "auto",
    navigation: {
        prevEl: '.banner-back',
        nextEl: '.banner-forward'
    },
    autoplay: true,
    rewind: true,
})

// 배너슬라이드 일시멈춤 버튼
const bannerPlay = document.querySelector(".banner-play")
bannerPlay.addEventListener("click",function(){
    let isPlay = bannerPlay.classList.contains("active")
    if(isPlay) {// 지금 현재 play상태 / pause버튼 활성화 상태
        // 할일 : 슬라이드멈춤 / 재생버튼이미지 활성화
        swBanner.autoplay.stop();
        bannerPlay.classList.remove("active")
    }else {// 지금 현재 stop상태 / play버튼 활성화 상태
        swBanner.autoplay.start();
        bannerPlay.classList.add("active")
    }
})

// 아이콘이용한 일시멈춤버튼
// const bannerPlay = document.querySelector((".banner-play"))
// // console.log(bannerPlay)
// bannerPlay.addEventListener("click",function(){
//     let spanEl =document.querySelector('.banner-play span')
//     console.log(spanEl)
//     let txtContent = spanEl.textContent
//     console.log(txtContent)   
//     if(txtContent == "pause") { //
//         spanEl.textContent = "play_arrow"
//         swBanner.autoplay.stop()
//     }else {
//         spanEl.textContent ="pause"
//         swBanner.autoplay.start()
//     }
// })

// 화면을 맨위로 이동(gotop버튼)
const goTop = document.querySelector(".gotop")
goTop.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})



