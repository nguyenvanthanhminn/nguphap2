// JavaScript Document
//Lay chieu rong man hinh
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script> 
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
var w = $(window).width();
	if(w<=414){
		alert("Sử dụng màn hình rộng hơn đưa tới trải nghiệm tối ưu hơn!\nThiết kế và code bởi MikTae, không sở hữu video trong trang này");
	}
//an menu
		const hide=() =>{
			if(w > 414){
				$(".m-t").hide(0);
			document.getElementById("menu").style.width="10%";
			document.getElementById("content").style.width="88%";	
			document.getElementById("hide").style.display="none";
			document.getElementById("show").style.display="block";
			}
		else{
			$(".m-t").hide(0);
			document.getElementById("menu").style.width="30%";
			document.getElementById("content").style.width="96%";	
			document.getElementById("hide").style.display="none";
			document.getElementById("show").style.display="block";
			}
		};
//hien menu
	const show=() =>{
		if(w>414){
			$(".m-t").show(0);
			document.getElementById("menu").style.width="34%";
			document.getElementById("content").style.width="64%";	
			document.getElementById("hide").style.display="block";
			document.getElementById("show").style.display="none";
		}
		else{
			$(".m-t").show(0);
			document.getElementById("menu").style.width="90%";
			document.getElementById("content").style.width="96%";	
			document.getElementById("hide").style.display="block";
			document.getElementById("show").style.display="none";
		}	
	};
	const scre = ()=> {
		alert(w);
	};
	//Vuejs phai su dung sau phan tu
					var videotitle1= new Vue({
								el: '#v-t-1',
								data:{
									message: "Quá khứ tiếp diễn",
								}
					});
					var videotitle2= new Vue({
									el: '#v-t-2',
									data:{
										message: "Hiện tại tiếp diễn"
									}
					});
				/* Doi src iframe- Bat buoc theo cu phap http://www.youtube.com/embed/idvideo?enablejsapi=1 va cung giao thuc nhu https voi https*/
					var i1= document.getElementById("iframe1");
					var i2= document.getElementById("iframe2");
					var u=1;
					let le1 =document.getElementById("les1");
					let le2 =document.getElementById("les2");
					let le3 =document.getElementById("les3");
					let le4 =document.getElementById("les4");
					let le5 =document.getElementById("les5");
					le1.onclick = function show1(){
						u=1;
						videotitle1.message= "Quá khứ tiếp diễn";
						videotitle2.message= "Hiện tại tiếp diễn";
						i1.src="https://www.youtube.com/embed/CuklIb9d3fI?enablejsapi=1";
						i2.src="https://www.youtube.com/embed/CuklIb9d3fI?enablejsapi=1";
							};
					le2.onclick= function show2(){
						u=2;
						videotitle1.message= "Quá khứ đơn";
						videotitle2.message= "Cách nói quá khứ trong tiếng Hàn";
						i1.src="https://www.youtube.com/embed/nKDppUjuvdM";
						i2.src="https://www.youtube.com/embed/nKDppUjuvdM";
					};
					le3.onclick= function show3(){
						u=3;
						videotitle1.message= "여기, 거기, 저기";
						videotitle2.message= "이것, 그것, 저것";
						i1.src="https://www.youtube.com/embed/gdZLi9oWNZg?enablejsapi=1";
						i2.src="https://www.youtube.com/embed/gdZLi9oWNZg?enablejsapi=1";
					};
					le4.onclick= function show4(){
						u=4;
						videotitle1.message= "지말다";
						videotitle2.message= "아/ 어되다";
						i1.src="https://www.youtube.com/embed/ErTgtL1Tjns?enablejsapi=1";
						i2.src="https://www.youtube.com/embed/ErTgtL1Tjns?enablejsapi=1";
					};
					le5.onclick= function show5(){
						u=5;
						videotitle1.message= "Nguyên nhân trong tiếng Anh";
						videotitle2.message= "Nguyên nhân trong tiếng Hàn";
						i1.src="https://www.youtube.com/embed/WMweEpGlu_U?enablejsapi=1";
						i2.src="https://www.youtube.com/embed/WMweEpGlu_U?enablejsapi=1";
					};
					const Fin=() =>{
							if(u<5){
								alert("Đang ở buổi " +u +", chưa hoàn thành ngữ pháp 2");

							}
							else{
							var o = prompt("Về trang chủ (nhập Home) hay đến bài tiếp theo (mặc định)? ","Đến bài tiếp theo");
									if(o == "Home"){
										open("https://nguyenvanthanhminn.wixsite.com/list2","_self");
									}
									else {
										open("https://nguyenvanthanhminn.wixsite.com/grammar3","_self");
									}
							}
						};
					const social =()=>{
					open("https://www.facebook.com/mik.tae.7/","_self");
				};
				var btnlight = document.getElementById("btnlight");
				var b= document.getElementById("b");
				var btn1= document.getElementById("btn1");
				var btn2= document.getElementById("btn2");
				var btn3= document.getElementById("btn3");
				var menu= document.getElementById("un-list"); 
				var btn4= document.getElementById("fi-btn"); 
				var btn5= document.getElementById("btn-top"); 
				//Vuejs
						var dl= new Vue({
								el: '#btnlight',
								data:{
									message: "Dark mode: OFF "
								}
							});
				var light= 1;
		// Ham dark mode
				const Dark= () =>{
					if(light == 1){
						dl.message="Dark mode: ON";
						light = 0;
						b.style.background= "black";
						b.style.color= "white";
						btn1.style.background= "grey";
						btn2.style.background= "grey";						
						btn3.style.background= "grey";	
						btn4.style.background= "grey";	
						btn5.style.background= "grey";					
						menu.style.background= "grey";
					}
					else{
						dl.message="Dark mode: OFF";
						light = 1;
						b.style.background= "white";
						b.style.color= "black";
						btn1.style.background="blue";			
						btn2.style.background="blue";
						btn3.style.background="blue";
						btn4.style.background="blue";
						btn5.style.background="blue";
						menu.style.background= "#111";
					}
				};
		//Ham hover
		btn1.onmouseover= function hover1(){
			btn1.style.background= "red";
		}
		btn2.onmouseover= function hover2(){
			btn2.style.background= "red";
		}
		btn3.onmouseover= function hover3(){
			btn3.style.background= "red";
		}
		btn4.onmouseover= function hover3(){
			btn4.style.background= "purple";
		}
		btn1.onmouseout= function out1(){
			if(light == 0){
				btn1.style.background= "grey";
			}
			else{
				btn1.style.background="blue";
			}
		}	
		btn2.onmouseout= function out2(){
			if(light == 0){
				btn2.style.background= "grey";
			}
			else{
				btn2.style.background="blue";
			}
		}
		btn3.onmouseout= function out3(){
			if(light == 0){
				btn3.style.background= "grey";
			}
			else{
				btn3.style.background="blue";
			}
		}
		btn4.onmouseout= function out3(){
			if(light == 0){
				btn4.style.background= "grey";
			}
			else{
				btn4.style.background="blue";
			}
		}
		
		//Ham on top
	 //Khi người dùng cuộn chuột thì gọi hàm scrollFunction
    window.onscroll = function() {scrollFunction()};
    // khai báo hàm scrollFunction
    function scrollFunction() {
        // Kiểm tra vị trí hiện tại của con trỏ so với nội dung trang
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            //nếu lớn hơn 20px thì hiện button
            document.getElementById("btn-top").style.display = "block";
        } else {
             //nếu nhỏ hơn 20px thì ẩn button
            document.getElementById("btn-top").style.display = "none";
        }
    }
    //gán sự kiện click cho button
    document.getElementById('btn-top').addEventListener("click", function(){
        //Nếu button được click thì nhảy về đầu trang
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });