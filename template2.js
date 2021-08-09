// JavaScript Document
const app= Vue.createApp({
	data(){
		return{
			an: 0,
			message: "Kiểm tra buổi 1",
			courl: "https://www.autoproctor.co/tests/start-test/Sz6MzDnZDf",
			display1: true, display2: false, display3: false, display4: false, display5: false
		}
	},
	methods:{
		displayles(id){
			if(id == "les1"){
				this.message= "Kiểm tra buổi 1";
				this.courl= "https://www.autoproctor.co/tests/start-test/Sz6MzDnZDf";
				this.display1= true; 
				this.display2= false;
				this.display3= false;
				this.display4= false;
				this.display5= false;
				
			}
			if(id == "les2"){
				this.message= "Kiểm tra buổi 2";
				this.courl= "#2";
				this.display2= true; 
				this.display1= false;
				this.display3= false;
				this.display4= false;
				this.display5= false;
			}
			if(id == "les3"){
				this.message= "Kiểm tra buổi 3";
				this.courl= "#3"
				this.display3= true;
				this.display2= false;
				this.display1= false;
				this.display4= false;
				this.display5= false;
			}
			if(id == "les4"){
				this.message= "Kiểm tra buổi 4";
				this.courl= "#4";
				this.display4= true; 
				this.display2= false;
				this.display3= false;
				this.display1= false;
				this.display5= false;
			}
			if(id == "les5"){
				this.message= "Hoàn thành";
				this.courl= "#5";
				this.display5= true;
				this.display2= false;
				this.display3= false;
				this.display4= false;
				this.display1= false;
			}
		},
		FunctHide(i){
			if(i == 1){
					an = 1;
				if($(window).width() > 414){
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
			}
			else {
						an = 0;
				if($(window).width()>414){
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
			}
		},
		Over(id){
			if(an == 1){
				if(id == "les1"){
					$("#wig1, #wig2").show()
				}
				if(id == "les2"){
					$("#wig3, #wig4").show()
				}
				if(id == "les3"){
					$("#wig5, #wig6").show()
				}
				if(id == "les4"){
					$("#wig7, #wig8").show()
				}
				if(id == "les5"){
					$("#wig9, #wig10").show()
				}
			}
		},
		Out(id){
			if(an == 1){
				if(id == "les1"){
					$("#wig1, #wig2").hide()
				}
				if(id == "les2"){
					$("#wig3, #wig4").hide()
				}
				if(id == "les3"){
					$("#wig5, #wig6").hide()
				}
				if(id == "les4"){
					$("#wig7, #wig8").hide()
				}
				if(id == "les5"){
					$("#wig9, #wig10").hide()
				}
			}
		},
		Fin(){
			var conf= confirm("Yêu cầu khi làm bài kiểm tra:\n1. Đối với Iphone/ Ipad: dùng Safari phiên bản 13 trở lên; với Window, Android, Macbook, ... dùng Google Chrome: phiên bản 83 trở lên để đạt tối ưu nhất\n2. Click vào nút Submit- màu tím sau đó click vào nút Click after submitting test- màu xanh để không mất dữ liệu\n3. Đăng xuất khỏi mọi tài khoản Google không hợp lệ và chỉ dùng một tài khoản Google duy nhất trên trình duyệt\n 4. Mọi hành vi gian lận như chuyển tab, đăng xuất nhiều thiết bị, không hiện mặt,...  sẽ bị phát hiện!" );
			if(conf == true){
				open(this.courl,"_blank","location: 0");
			}
		},
	}
})
.component('diction-widget',{
	template:
	`		<div id="diction"><form id="e-diction" :action="dictionengurl" method="get" target="print_popup" onsubmit="open('about:blank','print_popup','width=400,height=490');">
			<table :style="dictionStyletable"> 
				<tbody>
					<tr>
						<td colspan="3" style="padding:0;background:none;border:none;">
							<a :href="dictioneurl" style="display: block; background:  transparent url(https://dictionary.cambridge.org/external/images/freesearch/sbl.png?version=5.0.177) no-repeat 5px 6px;height:32px"></a> 
						</td> 
					</tr>
					<tr> 
						<td :style="dictionStyletd0">
							<input :style="dictionStyleinput" name="q" />
						</td> 
						<td style="border:none" width="2%"></td>
						<td :style="dictionStyletd">
							<button class="fa fa-search" :style="dictionStylesubmit" type="submit"></button>
						</td> 
					</tr> 
				</tbody>
			</table> 
		</form><br>
		<form id="k-diction" :action="dictionkorurl" method="get" target="print_popup" onsubmit="open('about:blank','print_popup','width=400,height=490');">
			<button id="k-dict" type="submit">Từ điển Hàn- Việt</button>
		</form></div>`,
	data(){
		return{
			dictionStyletable:{
				fontSize: '120%',
				background: '#292929',
				borderCollapse: 'collapse',
				borderSpacing: '0',
				width:'40%',
				eD: true,
				kD: true,
			},
			dictionStyleinput:{
				width: '100%',
				display: 'block',
				'font-size': '95%',
				padding: '2px',
				border: 'none'
			},
			dictionStylesubmit:{
				width: '100%',
				display: 'block',
				'font-size': '100%',
				padding:' 2px',
				border: 'none',
				float: 'right',
				background: '#d0a44c'
			},
			dictionStyletd0:{
				width: '73%',
				background: 'none',
				border: 'none',
				padding: '4px'
			},
			dictionStyletd:{
				width:' 25%',
				background: 'none',
				border: 'none',
				padding: '0 4px 0 0',
			},
			dictioneurl: 'https://dictionary.cambridge.org/',
			dictionengurl: 'https://dictionary.cambridge.org/search/english/direct/?utm_source=widget_searchbox_source&utm_medium=widget_searchbox&utm_campaign=widget_tracking',
			dictionkorurl: 'https://korean.dict.naver.com/kovidict/vietnamese/#/main',
		}
	}
})
.component('header-menu',{
	template:
	`<div class="header" id="header">
	<div class="main-title"><h1>{{ headertitle}}</h1></div>
	<div id="break-header"><br></div>
	<div class="button">
		<span v-for="headerbtn in headerbtns">
			<button class="btn" :id="headerbtn.id">
				<a :href="headerbtn.url" target="_self">{{ headerbtn.name }}</a>
			</button><span v-if="headerbtn.on">&emsp;</span>
		</span>
	</div>
</div>`,
	data(){
		return{
			headertitle: 'NGỮ PHÁP CHỦ ĐIỂM 2',
			headerbtns:[
				{name: "Home", url: "https://nguyenvanthanhminn.github.io/nguphap2/2.html", id: "btn1", on: true},
				{name: "Video giảng", url: "https://nguyenvanthanhminn.github.io/nguphap2/2_video.html", id: "btn2", on: true},
				{name: "Contact", url: "https://nguyenvanthanhminn.github.io/nguphap2/2_contact.html", id: "btn3", on: false}
			]
		}
	}
})
.component('conversation-box',{
	template:
	`		<audio v-show="audiosee" v-for="audio in audios"  :src="audio.src" :key="audio.id" :id="audio.id" controls></audio>
		<div class="pocontent224" id="pocontent224">
			<div id="poc1">
				<button v-for="button in buttons" :id="button.id">{{ button.name }} <i :class="button.icon" style="font-size: 135%;"></i></button>
			</div>
			<div id="poc2">
				<p>Hội thoại 1</p>
				<span onclick=""><span class="audiotitle">A. </span>버스를 탈까요?
				<button class="fa fa-volume-up" style="font-size: 100%" @click="audiobtn1"></button>
				</span><span class="audiobreak"></span>
				<span id="poc22"><span class="audiotitle">A. </span>Đi xe buýt được không?</span>
			</div>
			<div id="poc3">
				<span onclick=""><span class="audiotitle">B. </span>길이 막히니까 버스를 타지 마세요. 지하철을 타세요.
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn2"></button>
				</span><span class="audiobreak"></span>
				<span id="poc32"><span class="audiotitle">B. </span>Đường tắc nên đừng đi xe buýt. Hãy đi taxi.</span>
			</div>
			<div id="poc4">
				<p>Hội thoại 2</p>
				<span onclick=""><span class="audiotitle">A. </span>이 영화 어때요? 재미있어요?
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn3"></button>
				</span><span class="audiobreak"></span>
				<span id="poc42"><span class="audiotitle">A. </span>Bộ phim này thế nào? Hay không?</span>
			</div>
			<div id="poc5">
				<span onclick=""><span class="audiotitle">B. </span>이 영화를 보지 마세요. 재미없어요.
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn4"></button>
				</span><span class="audiobreak"></span>
				<span id="poc52"><span class="audiotitle">B. </span>Đừng xem phim này. Không hay đâu.</span>
			</div>
			<div id="poc6">
				<p>Hội thoại 3</p>
				<span onclick=""><span class="audiotitle">A. </span>음악을 너무 크게 듣지 마세요. 귀에 안 좋아요.
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn5"></button>
				</span><span class="audiobreak"></span>
				<span id="poc62"><span class="audiotitle">A. </span>Đừng nghe nhạc quá to. Không tốt cho tai.</span>
			</div>
			<div id="poc7">
				<span onclick=""><span class="audiotitle">B. </span>네, 알겠어요.
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn6"></button>
				</span><span class="audiobreak"></span>
				<span id="poc72"><span class="audiotitle">B. </span>Vâng, tôi biết rồi.</span>
			</div>
		</div>`,
	data(){
		return{
			audiosee: false,
			audios: [
				{id: "audioplay224", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/hoithoainguphap224.mp3"},
				{id: "conv2241", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2241.mp3"},
				{id: "conv2242", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2242.mp3"},
				{id: "conv2243", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2243.mp3"},
				{id: "conv2244", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2244.mp3"},
				{id: "conv2245", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2245.mp3"},
				{id: "conv2246", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2246.mp3"}
			],
			buttons:[
				{name: "Phát", id: "play224", icon: "fa fa-play-circle"},
				{name: "Dừng", id: "stop224", icon: "fa fa-pause-circle"},
				{name: "Nghe lại", id: "return224"}
			]
		}
	},
	methods:{
		audiobtn1(){
			document.getElementById("poc2").style.fontWeight= "bold";
			document.getElementById("conv2241").play();
		},
		audiobtn2(){
			document.getElementById("poc3").style.fontWeight= "bold";
			document.getElementById("conv2242").play();
		},
		audiobtn3(){
			document.getElementById("poc4").style.fontWeight= "bold";
			document.getElementById("conv2243").play();
		},
		audiobtn4(){
			document.getElementById("poc5").style.fontWeight= "bold";
			document.getElementById("conv2244").play();
		},
		audiobtn5(){
			document.getElementById("poc6").style.fontWeight= "bold";
			document.getElementById("conv2245").play();
		},
		audiobtn6(){
			document.getElementById("poc7").style.fontWeight= "bold";
			document.getElementById("conv2246").play();
		}
	}
})
.component('conversation242',{
	template:
	`<audio v-show="see42" v-for="au42 in au42s"  :src="au42.src" :key="au42.id" :id="au42.id" controls></audio>
		<div class="pocontent242" id="pocontent242">
			<div id="row421">
				<button v-for="button in buttons" :id="button.id" class="audiobtn42">{{ button.name }} <i :class="button.icon" style="font-size: 135%;"></i></button>
			</div>
			<div id="row422">
			<div id="row2">
				<p>Hội thoại 1</p>
				<span onclick="">
					<span class="audiotitle">A. </span>밤에 전화해도 돼요?
				<button class="fa fa-volume-up" style="font-size: 100%" @click="audiobtn421"></button>
				</span>
				<span style="display: block"></span>
				<span id="row22"><span class="audiotitle">A. </span>Tôi gọi điện vào buổi tối được không?</span>
			</div>
			</div>
			<div id="row3">
				<span onclick=""><span class="audiotitle">B. </span>물론이에요. 전화하세요.
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn422"></button>
				</span><span style="display: block"></span>
				<span id="row32"><span class="audiotitle">B. </span>Đương nhiên là được rồi. Bạn cứ gọi đi.</span>
			</div>
			<div id="row4">
				<p>Hội thoại 2</p>
				<span onclick=""><span class="audiotitle">A. </span>창문을 열어도 돼요?
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn423"></button>
				</span><span style="display: block"></span>
				<span id="row42"><span class="audiotitle">A. </span>Tôi mở cửa sổ được không?</span>
			</div>
			<div id="row5">
				<span onclick=""><span class="audiotitle">B. </span>그럼요. 열어도 돼요.
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn424"></button>
				</span><span style="display: block"></span>
				<span id="row52"><span class="audiotitle">B. </span>Ừ, bạn mở đi.</span>
			</div>
			<div id="row6">
				<p>Hội thoại 3</p>
				<span onclick=""><span class="audiotitle">A. </span>라디오를 켜도 돼요?
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn425"></button>
				</span><span style="display: block"></span>
				<span id="row362"><span class="audiotitle">A. </span>Tôi mở đài nhé?</span>
			</div>
			<div id="row7">
				<span onclick=""><span class="audiotitle">B. </span>아이가 자고 있어요. 켜지 마세요.
				<button class="fa fa-volume-up" style="font-size: 100%"  @click="audiobtn426"></button>
				</span><span style="display: block"></span>
				<span id="row72"><span class="audiotitle">B. </span> Em bé đang ngủ. Bạn đừng mở.</span>
			</div>
			</div>`,
		data(){
		return{
			see42: false,
			au42s: [
				{id: "audioplay242", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv242.mp3"},//toan bo hoi thoai
				{id: "audioplay2421", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2421.mp3"},
				{id: "audioplay2422", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2422.mp3"},
				{id: "audioplay2423", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2423.mp3"},
				{id: "audioplay2424", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2424.mp3"},
				{id: "audioplay2425", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2425.mp3"},
				{id: "audioplay2426", src: "https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2426.mp3"}
			],
			buttons:[
				{name: "Phát", id: "play242", icon: "fa fa-play-circle"},
				{name: "Dừng", id: "stop242", icon: "fa fa-pause-circle"},
				{name: "Nghe lại", id: "return242"}
			]
		}
	},
	methods:{
		audiobtn421(){
			document.getElementById("row2").style.fontWeight= "bold";
			document.getElementById("audioplay2421").play();
		},
		audiobtn422(){
			document.getElementById("row3").style.fontWeight= "bold";
			document.getElementById("audioplay2422").play();
		},
		audiobtn423(){
			document.getElementById("row4").style.fontWeight= "bold";
			document.getElementById("audioplay2423").play();
		},
		audiobtn424(){
			document.getElementById("row5").style.fontWeight= "bold";
			document.getElementById("audioplay2424").play();
		},
		audiobtn425(){
			document.getElementById("row6").style.fontWeight= "bold";
			document.getElementById("audioplay2425").play();
		},
		audiobtn426(){
			document.getElementById("row7").style.fontWeight= "bold";
			document.getElementById("audioplay2426").play();
		}
	}
})
.component('menu-bar',{
	template:
	`<div class="menu" id="menu">
		<ul id="un-list" class="un-list">
			<div style="padding-left:1.5%;padding-top: 1%;"><span id="show" @click="fShow(i)" onclick="show()" class="fa fa-bars"></span><span id="hide" onclick="hide()" @click="fHide(i)" class="fa fa-minus"></span>
			</div>
			<li v-for="menu in menus" :id="menu.id" @click="display(menu.id)" @mouseover="over(menu.id)" @mouseout="out(menu.id)">
				<a href="#">&ensp;{{ menu.name }}<br/>
					<p class="wig" :id="menu.id1">
						<a :href="menu.url1">{{ menu.lang1 }}<br/>{{ menu.main1 }}</a>
					</p>
					<p class="wig" :id="menu.id2">
						<a :href="menu.url2">{{ menu.lang2 }}<br/>{{ menu.main2 }}</a>
					</p>
					<span class="m-t">{{ menu.main }}</span>
				</a>	
			</li>
		</ul>
	</div>`,
	data(){
		return{
			Hide: false,
			menus:[
				{name: 'Buổi 1', main: 'Tiếng Anh: Thì quá khứ tiếp diễn, hiện tại tiếp diễn',  id: 'les1', id1: 'wig1', id2: 'wig2', url1: '#content1', url2: '#content2', lang1: 'Tiếng Anh', lang2: 'Tiếng Anh', main1: 'Thì quá khứ tiếp diễn', main2: 'Thì hiện tại tiếp diễn'},
				
				{name: 'Buổi 2', main: 'Tiếng Anh: Quá khứ đơn; Tiếng Hàn: cách nói quá khứ', id: 'les2', id1: 'wig3', id2: 'wig4', url1: '#content2-1', url2: '#content2-2', lang1: 'Tiếng Anh', lang2: 'Tiếng Hàn', main1: ' Quá khứ đơn', main2: 'cách nói quá khứ'},
				
				{name: 'Buổi 3', main: 'Tiếng Hàn: 여기, 거기, 저기; 이것, 그것, 저것', id: 'les3', id1: 'wig5', id2: 'wig6', url1: '#content3-1', url2: '#content3-2', lang1: 'Tiếng Hàn', lang2: 'Tiếng Hàn', main1: '여기, 거기, 저기', main2: '이것, 그것, 저것'},
				
				{name: 'Buổi 4',  main: 'Tiếng Hàn: 에; 지말다; 아/ 어도 되다', id: 'les4', id1: 'wig7', id2: 'wig8', url1: '#content4-1', url2: '#content4-2', lang1: 'Tiếng Hàn', lang2: 'Tiếng Hàn', main1: '에; 지말다;', main2: '아/ 어도 되다'},
				
				{name: 'Buổi 5', main: ' Tiếng Anh và Hàn: Cách nói nguyên nhân', id: 'les5', id1: 'wig9', id2: 'wig10', url1: '#content5-1', url2: '#content5-2', lang1: 'Tiếng Anh', lang2: 'Tiếng Hàn', main1: 'Cách nói nguyên nhân', main2: 'Cách nói nguyên nhân'
				}
			]
		}
	},
	methods:{
		display(item){
			this.$emit('display-les',item)
		},
		over(item){
			this.$emit('over-li',item)
		},
		out(item){
			this.$emit('out-li',item)
		},
		fHide(i){
		this.Hide= true;
		i= 1;
		this.$emit('hide-func',i)
	},
	fShow(i){
		this.Hide= false;
		i= 0;
		this.$emit('hide-func',i)
	}
}
})
.component('content-1',{
	template:
	`<div id="content1">
			<div class="title-les">BUỔI 1: E01 - Thì quá khứ tiếp diễn, hiện tại tiếp diễn</div>
				<div class="c-titile1" onclick="Cont1">
					<span id="title-a">A. Thì quá khứ tiếp diễn</span>
					<button class="btn-mes">
						<a style="font-size: 110%;" href="#content2">Phần B</a>
						<span id="icon-a" style="margin-left: 5px;" class="fa fa-caret-right"></span>
					</button></div>
				<div style="font-size: 130%;">
					<p style="font-weight: bold; text-align: justify;">
						A.1 Khái niệm:
					</p>
					<p style="text-align: justify;">Thì quá khứ tiếp diễn (Past continuous tense) dùng để diễn tả một hành động, sự việc đang diễn ra xung quanh một thời điểm xác định trong quá khứ. Hành động, sự việc đó xảy ra trước thời điểm đó và chưa kết thúc.</p>
					<img id="image" src="https://nguyenvanthanhminn.github.io/nguphap2/Images/nguphap2-2-1.PNG" alt="example"/>
					<p style="font-weight: bold; text-align: justify;">
						A.2 Công thức:
					</p>
					<p style="text-align: justify;">
						a. Câu khẳng định:<br/>
						Cấu trúc: S + was/ were + V-ing<br/>Trong đó: S (subject): chủ ngữ; V-ing: động từ thêm “-ing”<br/>Lưu ý: Chủ ngữ(S) là I/ He/ She/ It/ Danh từ số ít / Danh từ không đếm được + was<br/>Còn khi S là We/ You/ They/ Danh từ số nhiều + were<br/>
						Ví dụ:<br/>
						<ol style="padding-left: 5%;">
							<li>I was thinking about someone last night.</li>
							<li>It was raining when I got up.</li>
						</ol>
						b. Câu phủ định:<br/>
						Cấu trúc:  S + was/ were + not + V-ing<br/>
					Lưu ý: wasn<sup>'</sup>t= was not; weren<sup>'</sup>t= were not.<br/>
					Ví dụ:<br/>
					<ol style="padding-left: 5%;">
							<li>He wasn’t doing anything when his boss came yesterday.</li>
							<li>I wasn’t paying attention you while I was watching TV.</li>
						</ol>
					c. Câu nghi vấn:<br/>
					Yes/ No question<br/>
					Cấu trúc: Was/ Were + S + V-ing?<br/>
					Trả lời:<br/>
					Đồng ý: Yes, S + was/ were<br/>Không đồng ý: No, S + wasn<sup>'</sup>t/ weren<sup>'</sup>t.<br/>
					Wh- question<br/>
					Cấu trúc: Wh-word + was/ were + S + V-ing?<br/>
					Trả lời:
					tùy tình huống đưa ra câu trả lời cụ thể.<br/>
					</p>
				<p style="font-weight: bold; text-align: justify;">
						A.3 Cách sử dụng:
					</p>
				<table width="95%" cellspacing="0" cellpadding="5">
					<tr><th style="padding-left: 8px; ">Cách sử dụng</th><th style="padding-left: 8px;padding-right: 8px; ">Ví dụ</th></tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">Diễn tả một hành động đang xảy ra tại một thời điểm trong quá khứ.</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>He was playing badminton at 9 a.m yesterday.</li>
								<li>This time last year they were living in England.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">Diễn tả những hành động xảy ra đồng thời trong quá khứ.</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>She was cooking while her mother was reading a book.</li>
								<li>While I was coming, she was using the computer.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">Diễn đạt hành động đang xảy ra thì có hành động khác xen vào.</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>When Karen arrived, we were having dinner.</li>
								<li>Matt phoned when we were dancing.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">Diễn tả một hành động từng lặp đi lặp lại trong quá khứ và làm phiền đến người khác.</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>When he worked here, he was always making noise.</li>
								<li>My friends were always complaining about their husbands.</li>
							</ul>
						</td>
					</tr>
				</table>
					<p style="font-weight: bold; text-align: justify;">
						A.4 Dấu hiệu nhận biết:
					</p>
					<p style="text-align: justify;line-height: 125%;">
						Các trạng từ quá khứ kèm theo thời điểm xác định:<br/>
						- At + giờ + thời gian trong quá khứ. (at 9 a.m yesterday, …)<br/>
						- At this time + thời gian trong quá khứ. (at this time two weeks ago, at this time last year…)<br/>
						-  In + năm quá khứ (in 2000, in 2005)<br/>
						- In the past<br/>
						- Trong câu có “when” khi diễn tả một hành động đang xảy ra và một hành động khác xen vào. When I was cooking, she came in. (Tôi đang nấu ăn thì cô ấy đi vào)<br/>
						The light went out when we were watching TV (Điện mất khi chúng tôi đang xem ti vi)<br/>
						- Cân nhắc sử dụng thì Quá khứ tiếp diễn khi có xuất hiện các từ như: While (trong khi); When (Khi); at that time (vào thời điểm đó);
						<br/>Duc was dancing while I was singing (Đức đang nhảy trong khi tôi đang hát)<br/>
						<p style="font-weight: bold; text-align: justify;">
						A.5 Phân biệt when và while:</p>
				<p style="text-align: justify;">
							Nhiều bạn khi học tiếng Anh thường hay bị nhầm 2 từ này do chúng có cùng nghĩa là “khi”. Tuy nhiên, các bạn lưu ý “while” thường dùng cho những hành động đang xảy ra trong một khoảng thời gian kéo dài, còn “when” thường dùng cho những hành động xảy ra chen ngang tại một mốc thời gian nhất định. Do vậy, “when” có thể dùng cho cả thì Quá khứ đơn và Quá khứ tiếp diễn, nhưng “while” chỉ có thể dùng cho thì Quá khứ tiếp diễn.
						</p>
					</p>
				</div>
			</div>
		<div id="content2">
			<div class="c-titile2" onclick="Cont2">
					<span id="title-b">B. Thì hiện tại tiếp diễn</span>
					<button class="btn-mes">
						<span id="icon-b" style="margin-right: 5px;" class="fa fa-caret-left"></span>
						<a style="font-size: 110%;" href="#content1">Phần A</a>
					</button></div>
				<div style="font-size: 130%">
					<p style="font-weight: bold; text-align: justify;">
						B.1 Khái niệm:
					</p>
					<p style="text-align: justify;">Thì hiện tại tiếp diễn (Present continuous tense) dùng để diễn tả những sự việc xảy ra ngay lúc chúng ta nói hay xung quanh thời điểm chúng ta nói, và hành động đó vẫn chưa chấm dứt (còn tiếp tục diễn ra).</p>
					<p style="font-weight: bold; text-align: justify;">
						B.2 Công thức:
					</p>
					<p style="text-align: justify;">
						a. Câu khẳng định:<br/>
						Cấu trúc: S + am/ is/ are + V-ing<br/>Trong đó: S (subject): chủ ngữ; V-ing: động từ thêm “-ing”<br/>Lưu ý: Chủ ngữ(S) là I + am<br/>Khi S là He/ She/ It/ danh từ số ít/ danh từ không đếm được + is<br/>Còn khi S là We/ You/ They/ Danh từ số nhiều + are<br/>
						Cách viết tắt: I am V-ing= I<sup>'</sup>m V-ing;<br/> He/ She/ It... is V-ing= He<sup>'</sup>s/ She<sup>'</sup>s/ It<sup>'</sup>s... V-ing;<br/> We/ You/ They... are V-ing= We<sup>'</sup>re/ You <sup>'</sup>re/ They <sup>'</sup>re... V-ing.<br/>
						Ví dụ:<br/>
						<ol style="padding-left: 5%;">
							<li>I am writing this website.</li>
							<li>She is cooking right now.</li>
						</ol>
						b. Câu phủ định:<br/>
						Cấu trúc:  S + am/ is/ are + not + V-ing<br/>
					Lưu ý: am not không có thể viết tắt; isn’t= is not; aren’t= are not.<br/>
					Ví dụ:<br/>
					<ol style="padding-left: 5%;">
							<li>It isn’t raining.</li>
							<li>He isn’t watching TV now..</li>
						</ol>
					c. Câu nghi vấn:<br/>
					Yes/ No question<br/>
					Cấu trúc: Am/ Is/ Are + S + V-ing?<br/>
					Trả lời:<br/>
					Đồng ý: Yes, S + am/ is/ are<br/>Không đồng ý: No, S + am/ is/ are+ not.<br/>
					Ví dụ:<br/>
					<ol style="padding-left: 5%;">
							<li>Are you enjoying the party?_ Yes, I am.</li>
							<li>Is he studying English?_Yes, he is.</li>
						</ol>
					Wh- question<br/>
					Cấu trúc: Wh-word + am/ is/ are + (not) + S + V-ing?<br/>
					Trả lời:
					tùy tình huống đưa ra câu trả lời cụ thể.<br/>
					Ví dụ:<br/>
					<ol style="padding-left: 5%;">
							<li>What are you doing?</li>
							<li>What's going on?</li>

						</ol>
					<p style="font-weight: bold; text-align: justify;">
						B.3 Cách sử dụng:
					</p>
					<p style="text-align: justify;line-height: 125%;">
						<ul>
							<li>
								Diễn đạt một hành động đang xảy ra tại thời điểm nói
							</li>
							Ví dụ:<br/>
						<ol style="padding-left: 5%;">
							<li>He's working right now.</li>
							<li>We are watching Youtube now. </li>
						</ol>
							<li>
								Diễn đạt một hành động đang xảy ra không nhất thiết tại thời điểm nói.
							</li>
							Ví dụ:<br/>
						<ol style="padding-left: 5%;">
							<li> My friend is quite busy these days. He is doing his assignment.</li>
							<li>He is reading "Gone with the wind". </li>
						</ol>
							<li>
								Diễn đạt một hành động sắp xảy ra trong tương lai gần. Thường diễn tả một kế hoạch đã được lên lịch sẵn hoặc sự kiện có dấu hiệu báo trước.
							</li>
							Ví dụ:<br/>
						<ol style="padding-left: 5%;">
							<li>She's flying to Tokyo tomorrow.</li>
							<li>What are you doing next week? </li>
						</ol>
							<li>
								Diễn tả hành động thường xuyên lặp đi lặp lại, gây sự bực mình hay khó chịu cho người nói, Cách dùng này được dùng với trạng từ “always, continually”
							</li>
							Ví dụ:<br/>
						<ol style="padding-left: 5%;">
							<li>She is always coming late.</li>
							<li>They are always arguing.</li>
						</ol>
							<li>
								Diễn tả một cái gì mới, phát triển hơn hoặc đối lập với tình trạng trước đó
							</li>
							Ví dụ:<br/>
						<ol style="padding-left: 5%;">
							<li>The population of the world is increasing very fast.</li>
							<li>Your Korean is improving.</li>
							<li>These days most people are using Messenger instead of writing letters.</li>
							<li>What sort of clothes are teenagers wearing nowadays?</li>
						</ol>
						</ul>
					</p>
					<p style="font-weight: bold; text-align: justify;">
						B.4 Dấu hiệu nhận biết:
					</p>
					<p style="text-align: justify;line-height: 125%;">
						Trạng từ chỉ thời gian:
						<ul>
							<li>Now: Bây giờ</li>
							<li>Right now: Ngay bây giờ</li>
							<li>At the moment: Ngay lúc này</li>
							<li>At present: Hiện tại</li>
							<li>At + giờ cụ thể</li>
						</ul>
				Ví dụ:<br/>
						<ol style="padding-left: 5%;">
							<li>It is raining now.</li>
							<li>He's not listening to music at the moment.</li>
						</ol>
					Trong câu có từ:
						<ul>
							<li>Look!/ Watch! (Nhìn kìa!)</li>
							<li>Listen! (Nghe này!)</li>
							<li>Keep silent! (Hãy im lặng)</li>
							<li>Watch out! = Look out! (Coi chừng)</li>
						</ul>
				Ví dụ:<br/>
						<ol style="padding-left: 5%;">
							<li>Look! The train is coming.</li>
							<li>Keep silent! The baby is sleeping.</li>
						</ol>
					</p>
					<p style="font-weight: bold; text-align: justify;">
						B.5 Cách thêm ing:
					</p>
					<p style="text-align: justify;line-height: 125%;">
						V-ing là gì?  - V là verb, V-ing đơn giản là động từ thêm đuôi "-ing".<br/>Trong Tiếng Anh, người ta quy ước: động từ + ing = đang diễn ra hành động đó.<br/>Ví dụ:<br/>drink: uống<br/> drinking: đang uống. <br/>I am drinking water. (Tôi đang uống nước).<br/>
						<ol style="padding-left: 5%;">
							<li>Với các từ có tận cùng là “e”, khi chuyển sang dạng ing thì sẽ bỏ đuôi “e” và thêm “ing” luôn. (use – using; pose – posing; improve – improving; change – changing)</li>
							<li>Với các từ có tận cùng là “ee” khi chuyển sang dạng ing thì VẪN GIỮ NGUYÊN “ee” và thêm đuôi “ing”. (knee – kneeing)</li>
							- Quy tắc gấp đôi phụ âm rồi mới thêm ing:<br/>
							<li>Nếu động từ có 1 âm tiết kết thúc bằng một phụ âm (trừ h, w, x, y), đi trước là một nguyên âm ta gấp đôi phụ âm trước khi thêm “ing". (stop – stopping; run – running)</li>
							<li> Với động từ hai âm tiết trở lên, nếu trọng âm nhấn vào âm cuối thì mới gấp đôi phụ âm. (begin – beginning</li>
							<li>Nếu phụ âm kết thúc là "l" thì thường người Anh sẽ gấp đôi l còn người Mỹ thì không.<br/>Ví dụ: Travel  : Anh - Anh là Travelling, Anh - Mỹ là Traveling, cả hai cách viết đều sử dụng được nhé.</li>
							<li>Động từ kết thúc là “ie”, thay “ie” vào “y” rồi thêm “ing”. (lie – lying; die – dying)</li>
						</ol>
Những động từ không chia ở Hiện tại tiếp diễn:
Lưu ý: Có một số động từ không dùng ở thể tiếp diễn như like, want, need...- chủ yếu các động từ chỉ cảm giác, trạng thái.<br/>
Ví dụ:<br/>
- I like this book. (đúng)<br/>
- I’m liking this book. (sai)<br/>
Các động từ trong ảnh dưới đây không chia thể tiếp diễn:<br/>
<img id="img2" src="https://nguyenvanthanhminn.github.io/nguphap2/Images/nguphap2-2-1-2.PNG" alt="dongtukhongdivoiing"/>
					</p>
					</p>
				</div><br/>
</div>`
})
.component('content-2',{
	template:
	`<div id="content2-1">
			<div class="title-les">BUỔI 2: E01 - Thì quá khứ đơn. K02 - Cách nói quá khứ</div>
					<div class="c-titile1" onclick="Cont1">
						<span class="title-a">A. Thì quá khứ đơn</span>
						<button class="btn-mes">
							<a style="font-size: 110%;" href="#content2-2">Phần B</a>
							<span style="font-size: 120%;margin-left: 5px;" class="fa fa-caret-right"></span>
						</button>
					</div>
					<div class="noidung">
						<p class="T">A.1 Khái niệm:</p>
						<p class="normal">Thì quá khứ đơn (Past simple tense) dùng để diễn tả một hành động, sự việc đã diễn ra và kết thúc trong quá khứ.</p>
						<p class="T">A.2 Công thức:</p>
						<p class="normal">
							a. Câu khẳng định: <br/>
							a.1 Với động từ to be_ Cấu trúc: S + was/ were + N/ adj.<br/>
							Trong đó, S là chủ ngữ, N/ adj là danh từ/ tính từ.<br/> Lưu ý: S là I/ He/ She/ It/ Danh từ số ít + was; You/ We/ They/ Danh từ số nhiều + were.<br/>Ví dụ:
							<ol style="padding-left: 5%;">
							<li>Wolfgang Amadeus Mozart was an Austrian musician and compose. </li>
							<li>It was cold yesterday. </li>
							</ol>
							a.2 Với động từ thường_ Cấu trúc: S + V-ed/ V quá khứ.<br/>Với S là chủ ngữ, V-ed là động từ bất quy tắc chia thể quá khứ, chỉ cần thêm đuôi -ed, V quá khứ là động từ chia ở quá khứ và bất quy tắc.<br/>Ví dụ:
							<ol style="padding-left: 5%;">
							<li>We invited them to our party, but they decided not to come. </li>
							<li>I went to sleep at 11p.m last night. </li>
							</ol>
							b. Câu phủ định:<br/>
						b.1 Với động từ to be:<br/>
						Cấu trúc: S + was/were not + N/Adj<br/>
						Cách viết khác: wasn't = was not, weren't = were not.<br/>
						Ví dụ:
							<ol style="padding-left: 5%;">
							<li>They weren't able to come because they were so busy. </li>
							<li>He wasn't angry because they were late.</li>
							</ol>
						b.2 Với động từ thường:<br/>
						Cấu trúc: S + did not + V nguyên thể<br>
						Ví dụ:
							<ol style="padding-left: 5%;">
							<li>They didn’t accept our offer. </li>
							<li>We didn’t see him at the cinema last night.</li>
							</ol>
						c. Câu nghi vấn:<br>
						c.1 Với động từ to be:<br>
						Cấu trúc:<br> Yes/ No question: Was/Were+ S + Object/Adj?<br> Trả lời: Đồng ý- Yes, S was/ were. Không đồng ý- No, S wasn't/ weren't.
						<br>Wh- question: Wh-word + was/ were + S (+ not) +…?<br> Trả lời: Tùy tình huống cụ thể đưa ra câu trả lời phù hợp.<br>
						Ví dụ:
							<ol style="padding-left: 5%;">
							<li>Were you sad when you didn’t get good marks? </li>
							<li>What was the weather like yesterday? </li>
							</ol>
						c.2 Với động từ thường:<br>
						Cấu trúc:<br> Yes/ No question: Did+ S + V nguyên thể?<br> Trả lời: Đồng ý- Yes, S did. Không đồng ý- No, S didn't.
						<br>Wh- question: Wh-word + did + S (+ not) + V nguyên thể?<br> Trả lời: Tùy tình huống cụ thể đưa ra câu trả lời phù hợp.<br>
						Ví dụ:
							<ol style="padding-left: 5%;">
							<li>Did he oversleep and was late for school yesterday? </li>
							<li>Why did she break up with him?  </li>
							</ol>
						</p>
						<p class="T">A.3 Cách sử dụng:</p>
						<p class="normal">
				<table width="95%" cellspacing="0" cellpadding="5">
					<tr>
						<th style="padding-left: 8px; ">Cách sử dụng</th><th style="padding-left: 8px;padding-right: 8px; ">Ví dụ</th></tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">1. Diễn đạt một hành động xảy ra một, một vài lần hoặc chưa bao giờ xảy ra trong quá khứ</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>He visited his parents last weekend.</li>
								<li>She went home last Friday</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">2. Diễn tả những hành động xảy ra đồng thời trong quá khứ.</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>She was cooking while her mother was reading a book.</li>
								<li>While I was coming, she was using the computer.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">3. Diễn đạt các hành động xảy ra liên tiếp trong quá khứ</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>She came home, switched on the computer and checked her e-mails.</li>
								<li>Matt turned on his computer, read the message on Facebook and answered it. </li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">4. Diễn tả một hành động lặp đi lặp lại trong quá khứ.</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>John visited  his grandma every weekend when he was not married.</li>
								<li>They always enjoyed going to Korea.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">5. Diễn đạt một hành động xen vào một hành động đang diễn ra trong quá khứ</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>When I was having breakfast, the phone suddenly rang.</li>
								<li>When he was cooking, his parents came.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td style="padding-left: 8px;padding-right: 8px;">6. Dùng trong câu điều kiện loại II (câu điều kiện không có thật ở hiện tại)</td>
						<td style="padding-left: 8px;padding-right: 8px; ">
							<ul style="padding-left:15px;">
								<li>If you were me, you would do it.</li>
								<li>If I had a lot of money, I would buy a new car.</li>
							</ul>
						</td>
					</tr>
				</table>
						</p>
				<p class="T">A.4 Dấu hiệu nhận biết:</p>
				<p class="normal">
				Trong câu có các từ như: yesterday(hôm qua), ago(trước), last (week, year, month), in the past(trong quá khứ), the day before(hôm kia), với những khoảng thời gian đã qua trong ngày (today, this morning, this afternoon), when + thời điểm quá khứ.<br>Sau as if, as though (như thể là), it’s time (đã đến lúc), if only, wish (ước gì), would sooner/ rather (thích hơn).<br>Ví dụ:
				<ol style="padding-left: 5%">
					<li>Yesterday morning, he got up early; then he ate breakfast and went to school.</li>
					<li>The plane took off two hours ago.</li>
				</ol>
				</p>
				<p style="color: #EB2427">Mở rộng:</p>
				<p class="normal">
					Cách chia động từ ở thể quá khứ:<br>
					Với động từ có quy tắc:
					<ol style="padding-left: 3%" type="i">
						<li>Thông thường ta thêm “ed” vào sau động từ.
					<br>Ví dụ: catch – catched / turn – turned/ need – needed<br></li>
						<li>Động từ tận cùng là “e” → chỉ cần cộng thêm “d”.<br>
					Ví dụ: type – typed/ smile – smiled/ agree – agreed<br></li>
						<li>Động từ có 1 âm tiết, tận cùng là 1 phụ âm, trước phụ âm là 1 nguyên âm, nhân đôi phụ âm cuối rồi thêm “-ed”.<br>Ví dụ: stop – stopped/ shop – shopped/ tap – tapped<br></li>
						<li>Động từ có HAI âm tiết, tận cùng là MỘT phụ âm, trước phụ âm là MỘT nguyên âm, trọng âm rơi vào âm tiết thứ HAI → ta nhân đôi phụ âm cuối rồi thêm “-ed”.<br>Ví dụ:commit – committed / prefer – preferred</li>
						<li>Động từ tận cùng là “y”:<br>Nếu trước “y” là nguyên âm, thêm thẳng ed. Như play thành played, stay thành stayed<br>Nếu trước “y” là phụ âm đổi “y” thành “i” và thêm ed. Chẳng hạn, study _ studied, cry_ cried</li>
					</ol>
				Cách phát âm -ed:<br>
				<table width="95%" cellspacing="0" cellpadding="10">
					<tr align="center">
						<th width="21%">Cách phát âm</th>
						<th width="79%">Tận cùng</th>
					</tr>
					<tr>
						<td align="center">[id]<br>translated&nbsp;<i onclick="$.playSound('https://nguyenvanthanhminn.github.io/nguphap2/Audio/translated.mp3')" style="font-size: 100%" class="fa fa-volume-up"></i> decided <i onclick="$.playSound('https://nguyenvanthanhminn.github.io/nguphap2/Audio/decided.mp3')" style="font-size: 100%" class="fa fa-volume-up"></i> </td>
						<td>Tận cùng âm trước khi thêm -ed là [t]/ [d]</td>
					</tr>
					<tr>
						<td align="center">[t]<br>washed&nbsp;<i onclick="$.playSound('https://nguyenvanthanhminn.github.io/nguphap2/Audio/washed.mp3')" style="font-size: 100%" class="fa fa-volume-up"></i><br> looked <i onclick="$.playSound('https://nguyenvanthanhminn.github.io/nguphap2/Audio/looked.mp3')" style="font-size: 100%" class="fa fa-volume-up"></i></td>
						<td>Tận cùng âm trước khi thêm -ed là phụ âm vô thanh /p/, k/, /f/, /s/, /ʃ/, /tʃ/</td>
					</tr>
					<tr>
						<td align="center">[d]<br>cried&nbsp;<i onclick="$.playSound('https://nguyenvanthanhminn.github.io/nguphap2/Audio/cried.mp3')" style="font-size: 100%" class="fa fa-volume-up"></i><br> played <i onclick="$.playSound('https://nguyenvanthanhminn.github.io/nguphap2/Audio/played.mp3')" style="font-size: 100%" class="fa fa-volume-up"></i></td>
						<td>Tận cùng âm trước khi thêm -ed là các phụ âm hữu thanh và nguyên âm</td>
					</tr>
				</table>
				</p>
					</div>
				</div><br/>
				<div id="content2-2">
					<div class="c-titile1" onclick="Cont1">
						<span class="title-a">B. Cách nói quá khứ trong tiếng Hàn</span>
						<!--<script>
							const al= ()=> alert(document.documentElement.scrollTop);
						</script>-->
						<button class="btn-mes">
							<span style="font-size: 120%;margin-right: 5px;" class="fa fa-caret-left"></span>
							<a style="font-size: 110%;" href="#content2-1">Phần A</a>
						</button>
					</div>
					<div class="noidung">
						<p class="normal">Cấu trúc -았/ 었-: Trong tiếng Hàn, thì quá khứ của một hành động, sự việc được thiết lập bằng cách thêm -았/ 었- vào thân động hoặc tính từ biểu hiện hành động, sự việc đó.<br>았 hay 었 tùy vào kết thúc của thân động từ hoặc tính từ, có 3 trường hợp:<br>
							<span style="text-decoration: underline; font-weight: bold">Trường hợp 1:</span>Thân động/ tính từ kết thúc bằng nguyên âm ㅏ/ ㅗ thì cộng với -았-.<br>Ví dụ: 앉다: ngồi, đỗ &#61;&gt;앉았어요.<br>
							<span style="text-decoration: underline; font-weight: bold">Trường hợp 2:</span>Với thân động/ tính từ kết thúc bằng nguyên âm khác và thân từ 이다/ 아니다 thì cộng với -었-.<br>Ví dụ: 먹다: ăn &#61;&gt;먹었어요.<br>
							<span style="text-decoration: underline; font-weight: bold">Trường hợp 3:</span>Thân động/ tính từ kết thúc bằng 하다 thì được biến đổi thành -했-.<br> Ví dụ: 공부하다: học &#61;&gt;공부했어요.<br>Với giao tiếp thân mật, sử dụng cấu trúc -았/ 었어요, 했어요; và khi giao tiếp trang trọng, tôn kính dùng -았/ 었습니다, 했습니다.
							<br>Sau khi kết hợp -았/ 었, nếu nguyên âm của thân động từ, tính từ giống với -았 hoặc -었 thì có thể tỉnh lược đi, nếu nguyên âm của thân động từ/ tính từ không trùng thì có thể viết gộp lại.<br>
							Ví dụ: <br>
							<ul>
								<li>
								가다: đi &#61;&gt; 가았어요 &#61;&gt; 갔어요 (tỉnh lược)<br>지난 주말에 여행을 갔어요. Tôi đã đi du lịch vào cuối tuần.
								</li>
								<li>
								보다: xem &#61;&gt; 보았어요 &#61;&gt; 봤어요 (gộp lại)<br>극장에서 영화을 봤어요. Tôi đã xem phim ở rạp chiếu phim.
								</li>
								<li>
								마시다: uống &#61;&gt; 마시었어요 &#61;&gt; 마셨어요 (gộp lại)<br>카페에서 커피를 마셨어요. Tôi đã uống cà phê tại quán cà phê.
								</li>
							</ul>
							<table width="95%" cellspacing="0" cellpadding="8">
								<caption style="font-weight: bold;padding-top: 4px;padding-bottom: 2px;">Bảng một số động từ chia thể quá khứ</caption>
								<tr align="center">
									<td>Hình thức nguyên thể</td>
									<td>Thể quá khứ(-았/ 었/ 했어요)</td>
								</tr>
								<tr>
									<td style="padding-left: 3%;">만나다: gặp gỡ</td>
									<td align="center">만났어요</td>
								</tr>
								<tr>
									<td style="padding-left: 3%;">닫다: đóng</td>
									<td align="center">닫었어요</td>
								</tr>
								<tr>
									<td style="padding-left: 3%;">씻다: rửa, lau chùi</td>
									<td align="center">씻었어요</td>
								</tr>
								<tr>
									<td style="padding-left: 3%;">있다: có</td>
									<td align="center">있었어요</td>
								</tr>
								<tr>
									<td style="padding-left: 3%;">운동하다: tập thể dục</td>
									<td align="center">웅동했어요</td>
								</tr>
								<tr>
									<td style="padding-left: 3%;">쓰다<sup style="color: #FF0000">*</sup>: viết, đắng</td>
									<td align="center">썻어요</td>
								</tr>
								<tr>
									<td style="padding-left: 3%;">줍다<sup style="color: #FF0000">*</sup>: nhặt</td>
									<td align="center">주웠어요</td>
								</tr>
								<tr>
									<td style="padding-left: 3%;">부르다<sup style="color: #FF0000">*</sup>: gọi</td>
									<td align="center">불렀어요</td>
								</tr>
								<tr><td colspan="2"><sup style="padding-left: 2%;color: #FF0000">*</sup>: Bất quy tắc</td></tr>
							</table>
						Riêng với thân từ là 이다, 아니다 thì dùng -었-:
						<table width="95%" cellspacing="0" cellpadding="0">
							<tr>
								<td align="center" rowspan="2">이다<br/> là</td>
								<td style="padding-left: 2%;">Danh từ kết thúc bằng nguyên âm</td>
								<td align="center">였어요</td>
								<td align="center">간호사였어요</td>
							</tr>
							<tr>
								<td style="padding-left: 2%;padding-right: 1%">Danh từ kết thúc bằng phụ âm</td>
								<td align="center">이었어요</td>
								<td align="center">학생이었어요</td>
							</tr>
							<tr>
								<td align="center" rowspan="2">아니다<br/> không phải là</td>
								<td style="padding-left: 2%;padding-right: 1%s">Danh từ kết thúc bằng nguyên âm</td>
								<td align="center">가 아니었어요</td>
								<td align="center">간호사가 아니었어요</td>
							</tr>
							<tr>
								<td style="padding-left: 2%;">Danh từ kết thúc bằng phụ âm</td>
								<td align="center">이 아니었어요</td>
								<td align="center">학생이 아니었어요</td>
							</tr>
						</table>
					</p>
							<!--Mở hộp thoại conv-->
		<p class="conv" id="conv">Hội thoại<span style="font-size: 100%;" class="fa fa-comments-o"></span></p><br>
		<!--Hộp thoại-->
			<div class="MyConv" id="myconv">
				<!--Nội dung--> 
							<table class="popup-content" id="popup-content" width="100%" border="1" >
										<tr class="popup-header">
											<td><button id="play" style="padding: 3px">Phát</button><button id="pause" style="margin-left: 5px; padding: 3px">Dừng</button></td>
											<td class="audioplay"><audio id="audio" controls>
											  <source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/Hoithoainguphap22.mp3" type="audio/ogg">
											  <source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/Hoithoainguphap22.mp3">
											Your browser does not support the audio element.
											</audio></td>
											<td align="right"><span style="font-size: 32px;" id="close" class="fa fa-window-close"></span></td>
										</tr>
								<div class="popup-body">
								<tr>
									<td>Hội thoại 1</td><td></td>
								</tr>
										<tr id="hang1">
											<td style="padding-left: 3%;"><span style="font-weight: bold">A</span>&nbsp;에제 뭐 했어요?&nbsp;<span id="ht1-1" style="font-size: 100%" class="fa fa-volume-up"></span></td>
											<td style="padding-left: 3%;"><span style="font-weight: bold">A</span>&nbsp;Hôm qua bạn đã làm gì?
											<audio class="audioplay" id="audio1">
												<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2211.mp3">	
											</audio>
											</td>
										</tr>
										<tr id="hang2">
											<td style="padding-left: 3%;"><span style="font-weight: bold">B</span>&nbsp;공부했어요.&nbsp;<span id="ht1-2" style="font-size: 100%" class="fa fa-volume-up"></span>
											<audio class="audioplay" id="audio2">
												<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2212.mp3">	
											</audio>
											</td>
											<td style="padding-left: 3%;"><span style= "font-weight: bold">B</span>&nbsp;Tôi học bài.</td>
										</tr>
								<tr>
									<td>Hội thoại 2</td><td></td>
								</tr>
										<tr id="hang3">
											<td style="padding-left: 3%;"><span style="font-weight: bold">A</span>&nbsp;토요일에 영화를 봤어요?&nbsp;<span id="ht2-1" style="font-size: 100%" class="fa fa-volume-up"></span></td>
											<td style="padding-left: 3%;"><span style="font-weight: bold">A</span>&nbsp;Bạn đã xem phim vào thứ 7 à?</td>
											<audio class="audioplay" id="audio3">
												<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2221.mp3">	
											</audio>
										</tr>
										<tr id="hang4">
											<td style="padding-left: 3%;"><span style="font-weight: bold">B</span>&nbsp;네, 봤어요. 재미있었어요.&nbsp;<span id="ht2-2" style="font-size: 100%" class="fa fa-volume-up"></span></td>
											<td style="padding-left: 3%;"><span style="font-weight: bold">B</span>&nbsp;Đúng, tôi đã xem. Thú vị lắm!</td>
											<audio class="audioplay" id="audio4">
												<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2222.mp3">	
											</audio>
										</tr>
								<tr>
									<td>Hội thoại 3</td><td></td>
								</tr>
										<tr id="hang5">
											<td style="padding-left: 3%;"><span style="font-weight: bold">A</span>&nbsp;주말에 뭐 했어요?&nbsp;<span id="ht3-1" style="font-size: 100%" class="fa fa-volume-up"></span></td>
											<td style="padding-left: 3%;"><span style="font-weight: bold">A</span>&nbsp;Cuối tuần bạn đã làm gì?</td>
											<audio class="audioplay" id="audio5">
												<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2231.mp3">	
											</audio>
										</tr>
										<tr id="hang6">
											<td style="padding-left: 3%;"><span style="font-weight: bold">B</span>&nbsp;음악을 들었어요.&nbsp;<span id="ht3-2" style="font-size: 100%" class="fa fa-volume-up"></span></td>
											<td style="padding-left: 3%;"><span style="font-weight: bold">B</span>&nbsp;Tôi nghe nhạc.</td>
											<audio class="audioplay" id="audio6">
												<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/conv2232.mp3">	
											</audio>
										</tr>
									</div>
									</table>
						</div>
					</div>
				</div>`
})
.component('content-3',{
	template:
	`<div id="content3-1">
					<div class="title-les">BUỔI 3: K02 - 여기, 거기, 저기; 이것, 그것, 저것</div>
						<div class="c-titile1">
						<span class="title-a">A.여기,거기,저기</span>
						<button class="btn-mes">
							<a style="font-size: 110%;" href="#content3-2">Phần B</a>
							<span style="font-size: 120%;margin-left: 5px;" class="fa fa-caret-right"></span>
						</button>
						</div>
						<div class="noidung">
						<audio class="audioplay" id="au31" controls>
							<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/yeogi.mp3" >
						</audio>
						<audio class="audioplay" id="au32" controls>
							<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/koki.mp3" >
						</audio>
						<audio class="audioplay" id="au33" controls>
							<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/choki.mp3" >
						</audio>
						<p class="T">Là các đại từ chỉ vị trí trong không gian</p>
						<p class="normal">
						여기<button class="fa fa-volume-up" style="font-size: 100%; background: blue; color: white; padding: 5px; border: none; " onclick="document.getElementById('au31').play()"></button>: đây, nơi này. <span onclick="func31()">여기</span> chỉ vị trí gần người nói.<br>Ví dụ:<br>
						<ol style="padding-left: 3%">
							<li>여기는 도서관입니다.  Đây là thư viện.</li>
							<li>여기는 병원입니다.  Đây là bệnh viện.</li>
						</ol>
						거기<button  class="fa fa-volume-up" style="font-size: 100%; background: blue; color: white; padding: 5px; border: none; "  onclick="document.getElementById('au32').play()"></button>: đó, nơi đó. <span onclick="func32()">거기</span> chỉ vị trí gần người nghe hoặc một địa điểm nhất định được nhắc đến.
						<br>Ví dụ:<br>
						<ol style="padding-left: 3%">
							<li>거기는 은행입니다. Chỗ đó là ngân hàng.</li>
							<li>거기는 베트남 식당입니다. Đó là nhà hàng Việt Nam.</li>
						</ol>
						저기<button  class="fa fa-volume-up" style="font-size: 100%; background: blue; color: white; padding: 5px; border: none; " onclick="document.getElementById('au33').play()"> </button>: kia, chỗ kia. <span onclick="func33()"> 저기</span> chỉ vị trí xa cả người nói và người nghe.
						<br>Ví dụ:<br>
						<ol style="padding-left: 3%">
							<li>저기는 주유소입니다. Chỗ kia là trạm xăng.</li>
							<li>저기는 마트입니다. Kia là siêu thị.</li>
						</ol>
						</p>
					</div>
				</div>
				<div id="content3-2">
					<audio class="audioplay" id="au321" controls>
							<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/ikos.mp3" >
						</audio>
						<audio class="audioplay" id="au322" controls>
							<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/kukos.mp3" >
						</audio>
						<audio class="audioplay" id="au323" controls>
							<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/chokos.mp3" >
						</audio>
					<div class="c-titile1">
						<span class="title-a">B. 이것, 그것, 저것</span>
						<button class="btn-mes">
							<span style="font-size: 120%;margin-right: 5px;" class="fa fa-caret-left"></span>
							<a style="font-size: 110%;" href="#content3-1">Phần A</a>
						</button>
					</div>
					<div class="noidung">
						<p class="T">Là các đại từ chỉ thị</p>
						<p class="normal">
						이것<button class="fa fa-volume-up" style="font-size: 100%; background: blue; color: white; padding: 5px; border: none; " onclick="document.getElementById('au321').play()"></button>: cái này, là đại từ chỉ đồ vật gần người nói.
						<br>Ví dụ:<br>
						<ol style="padding-left: 3%">
							<li>이것은 책입니다. Đây là quyển sách.</li>
							<li>이것은 한복입니다. Đây là Hanbok.</li>
						</ol>
						그것<button class="fa fa-volume-up" style="font-size: 100%; background: blue; color: white; padding: 5px; border: none; " onclick="document.getElementById('au322').play()"></button>: cái đó, là đại từ chỉ đồ vật gần người nghe hoặc vật mà người nghe đang nghĩ đến.
						<br>Ví dụ:<br>
						<ol style="padding-left: 3%">
							<li>그것은 지갑입니다. Đó là cái ví.</li>
							<li>그것은 지도입니다. Đó là bản đồ.</li>
						</ol>
						저것<button class="fa fa-volume-up" style="font-size: 100%; background: blue; color: white; padding: 5px; border: none; " onclick="document.getElementById('au323').play()"></button>: cái kia, là đại từ chỉ đồ vật xa người nói và người nghe.
						<br>Ví dụ:<br>
						<ol style="padding-left: 3%">
							<li>저것은 핸드폰입니다. Kia là điện thoại di động.</li>
							<li>저것은 토마토입니다. Kia là cà chua.</li>
						</ol>
						</p>
				</div>
			</div>`
})
.component('content-4',{
	template:
	`<div class="title-les">BUỔI 4: K02 - 에; 지말다; 아/ 어도 되다</div>
		<div id="content4-1">
					<audio class="audioplay" id="au411" controls>
							<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/e.mp3" >
					</audio>
					<audio class="audioplay" id="au412" controls>
							<source src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/chimalda.mp3" >
					</audio>
					<div class="c-titile1">
						<span class="title-a">A.  에, 지말다</span>
						<button class="btn-mes">
							<a style="font-size: 110%;" href="#content4-2">Phần B</a>
							<span style="font-size: 120%;margin-left: 5px;" class="fa fa-caret-right"></span>
						</button>
					</div>
					<div class="noidung">
						<p class="T">A.1 에 <button class="fa fa-volume-up" style="font-size: 100%; background: blue; color: white; padding: 5px; border: none; " onclick="document.getElementById('au411').play()"></button></p>
						<p class="normal">
						에 có nhiều cách sử dụng khác nhau, sau đây sẽ trình bày qua 2 cách sử dụng cơ bản của 에.<br>
						<ol style="padding-left: 3%">
							<p style="text-decoration: underline; font-weight: bold">Cách 1: Địa điểm</p>
							<li>Chỉ đích đến của hành động. Thường gắn với các động từ: 갸다_ đi, 오다_ đến, 다니다_ đi lại(mang tính thường xuyên), 도착하다_ đến, 올라가다_ đi lên, 내려가다_ đi xuống</li>
							Cấu trúc: N에 + 가/오/ ... 다_ đi/ đến/ ... N
							<br>Ví dụ:
							<ul style="padding-left: 5%" type="square">
								<li>매일 회사에 가요. Tôi đi làm mỗi ngày.</li>
								<li>우리 집에 오세요. Đến nhà tôi.</li>
							</ul>
							<li>Chỉ vị trí có, tồn tại của sự vật, con người- nghĩa là "có, ở". Thường dùng với 있다(có), 없다(không có)</li>
							Cấu trúc: N1에 N2/V hoặc N1에 N2 았/ 없다: Có N2 ở N1<br>
							Ví dụ:<br>
							<ul style="padding-left: 5%" type="square">
								<li>교실에 학생들이 많아요. Có rất nhiều học sinh trong lớp</li>
								<li>소파 위에 강아지가 있어요. Con cún ở trên sofa </li>
							</ul>
					<p style="text-decoration: underline; font-weight: bold">Cách 2: Thời gian</p>
						<li>에 diễn tả thời gian diễn ra hành động, tình huống nào đó. Nghĩa tiếng Việt là "vào, lúc"</li>
						Có thể kết hợp 에 với các tiểu từ 는 và 도 thành 에는 và 에도. Đối với các từ chỉ thời gian: 언제(bao giờ), 어제(hôm qua), 오늘(hôm nay), 내일(ngày mai), 모레(ngày kia) thì không dùng 에 kèm theo.<br>
						Ví dụ:<br>
						<ul style="padding-left: 5%" type="square">
								<li>저는 아침 8시에 일어나요. Tôi thức dậy lúc 8h sáng.</li>
								<li>토요일에 만나요. Hẹn gặp bạn vào thứ 7. </li>
						</ul>
						Chú ý: Khi trong câu có 2 danh từ chỉ thời gian trở lên, gắn 에 vào danh từ chỉ thời gian cuối cùng. <br>
						Ví dụ: 다음 주 토요일 오전 10시에 가요. Đi vào 10h thứ 7 tuần sau.
					</ol>
				</p>
						<p class="T">A.2 지말다<button class="fa fa-volume-up" style="font-size: 100%; background: blue; color: white; padding: 5px; border: none; " onclick="document.getElementById('au412').play()"></button></p>
						<p class="normal">
							Biểu hiện được dùng khi bảo người nghe không nên làm hành vi nào đó. Trong câu mệnh lệnh, sử dụng 지 마세요(thể thân mật) hoặc 지 마십시오(thể tôn kính); trong câu thỉnh dụ dùng 지 맙시다. Nghĩa tiếng Việt là "đừng".
							<table width="70%" cellspacing="0">
							<tr align="center">
								<th>Nguyên thể</th>
								<th>-지 마세요</th>
							</tr>
							<tr align="center">
								<td>가다: đi</td>
								<td>가지 마세요</td>
							</tr>
							<tr align="center">
								<td>먹다: ăn</td>
								<td>먹지 마세요</td>
							</tr>
							<tr align="center">
								<td>오다: đến</td>
								<td>오지 마세요</td>
							</tr>
							<tr align="center">
								<td>사다: mua</td>
								<td>사지 마세요</td>
							</tr>
							<tr align="center">
								<td>운동하다: tập luyện</td>
								<td>운동하지 마세요</td>
							</tr>
							</table>
							-지 마세요 chỉ kết hợp với động từ, không kết hợp với 이다 và tính từ.
							<p>Hội thoại</p>
						</p>
						<div class="conv2-2-4" id="conv224">
								<conversation-box></conversation-box>
						</div>
			</div>
		</div>
	   		    <div id="content4-2">
			<div class="c-titile1">
						<span class="title-a">B.  아/ 어도 되다</span>
						<button class="btn-mes">
							<span style="font-size: 120%; margin-right: 5px;" class="fa fa-caret-left"></span>
							<a style="font-size: 110%;" href="#content4-1">Phần A</a>
						</button>
			</div>
			<audio class="audioplay" id="audio421" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/kwanchanda.mp3"></audio>
			<audio class="audioplay" id="audio422" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/choda.mp3"></audio>
			<div class="noidung">
				<p class="T">Biểu hiện được dùng khi cho phép hoặc đồng ý một hành động nào đó.</p>
				<p class="normal">Nghĩa tương đương tiếng Việt là "được(làm gì)..., làm gì cũng được".<br>
				Với thân động từ kết thúc bằng ㅏ =hoặc ㅗ, sử dụng 아도 되다. Với thân động từ kết thúc bằng âm khác, trừ 하다 sử dụng 어도 되다. Còn với thân động từ kết thúc bằng 하다 thì dùng 해도 되다. Ngoài ra, sử dụng 아/어도 괜잖다 
					<button class="fa fa-volume-up" style="font-size: 100%" onclick="document.getElementById('audio421').play()"></button>, 아/어도 좋다 <button class="fa fa-volume-up" style="font-size: 100%" onclick="document.getElementById('audio422').play()"></button>cũng mang nghĩa tương tự. 아/ 어도 되다 chia thể 어/어요 là 아/ 어도 돼요.<br>
					Một số động từ cơ bản:<br>
				<table width="95%" cellspacing="0" style="margin-top: 10px;">
					<tr align="center">
						<th>Thể nguyên thể</th>
						<th>-아/ 어도 되다</th>
					</tr>
					<tr align="center">
						<td>가다: đi</td>
						<td>가도 돼요</td>
					</tr>
					<tr align="center">
						<td>보다: xem, ngắm</td>
						<td>봐야 돼요/ 해요</td>
					</tr>
					<tr align="center">
						<td>읽다: đọc</td>
						<td>읽어도 돼요</td>
					</tr>
					<tr align="center">
						<td>요리하다: nấu ăn</td>
						<td>요리해도 돼요</td>
					</tr>
					<tr align="center">
						<td>듣다<sup style="color: red;">*</sup>: nghe</td>
						<td>들어도 돼요</td>
					</tr>
					<tr align="center">
						<td>쓰다<sup style="color: red;">*</sup>: viết</td>
						<td>써도 돼요</td>
					</tr>
					<tr align="center">
						<td>자르다<sup style="color: red;">*</sup>: chặt, thái</td>
						<td>잘라도 돼요</td>
					</tr>
					<tr align="center">
						<td>눕다<sup style="color: red;">*</sup>: nằm</td>
						<td>누워도 돼요</td>
					</tr>
					<tr ><td style="padding-left: 5%"><sup style="color: red;">*</sup>: Bất quy tắc</td><td></td></tr>
				</table>
				Ví dụ:<br>
				<ol style="padding-left: 5%">
					<li>여기에 앉아도 돼요? Tôi ngồi ở đây được không?</li>
					<li>사진을 찍어도 돼요? Tôi chụp ảnh được không?</li>
					<li>수업 시간에 사전을 봐도 됩니까?&ensp;&ensp;  네, 봐도 됩니다.<br>Trong giờ học được dùng từ điển không ạ?&ensp; Được chứ.</li>
				</ol>
				Hội thoại:<br>
				<conversation242></conversation242>
				</p>
			</div>
		</div>`
})
.component('content-5',{
	template:
	`<div class="title-les">BUỔI 5: E01, K02 - Cách nói nguyên nhân</div><div id="content5-1">
					<div class="c-titile1">
						<span class="title-a">A.  Cách nói nguyên nhân trong tiếng Anh</span>
						<button class="btn-mes">
							<a style="font-size: 110%;" href="#content5-2">Phần B</a>
							<span style="font-size: 120%;margin-left: 5px;" class="fa fa-caret-right"></span>
						</button>
					</div>
					<div class="audioplay">
						<audio id="audio521" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/because__us_1_rr.mp3"/>
						<audio id="audio522" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/as__us_1_rr.mp3"/>
						<audio id="audio523" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/since__us_1.mp3"/>
						<audio id="audio524" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/for__us_2_rr.mp3"/>
						<audio id="audio525" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/aseo.mp3"/>
						<audio id="audio526" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/eoseo.mp3"/>
						<audio id="audio527" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/unikka.mp3"/>
					</div>
					<div class="noidung">
						<p class="T">A.1 Cấu trúc Because/ As/ Since/ For </p>
							<p class="T">Because  <span style="background: blue; font-size: 100%; color: white; padding: 5px;" class="fa fa-volume-up" onclick="document.getElementById('audio521').play()"></span></p>
							<p class="normal">Because thường đứng trước một mệnh đề chỉ nguyên nhân- một thông tin người đọc/ người nghe chưa biết. Because được dùng phổ biến hơn as và since, cả trong văn nói và văn viết. Khi dùng because, chúng ta tập trung vào nguyên nhân<br>
							Because thường đứng đầu câu, đặc biệt khi muốn tập trung hơn vào nguyên nhân.<br>
							Cấu trúc: Because + mệnh đề nguyên nhân, mệnh đề chỉ kết quả<br>
							 <p title="Nguồn: Từ điển Cambridge">Ví dụ: Because breathing is something we do automatically, we rarely think about it.</p>
							Because cũng có thể đứng cuối câu. <br> Cấu trúc: Mệnh đề kết quả + because + mệnh đề nguyên nhân. 
							<br>Như: <span title="Nguồn: Từ điển Cambridge">She spoke quietly because she didn’t want Catherine to hear.</span><br>
							Ngoài ra, trong tiếng Anh, because thường được viết tắt là cos/kəz/ hoặc /kɒz/- chỉ dùng trong thể không trang trọng.</p>
							<p class="T">As và since <span style="background: blue; font-size: 100%; color: white; padding: 5px;" class="fa fa-volume-up" onclick="document.getElementById('audio522').play()"></span>&ensp;<span style="background: blue; font-size: 100%; color: white; padding: 5px;" class="fa fa-volume-up" onclick="document.getElementById('audio523').play()"></span></p>
							<p class="normal">
								 As và since được dùng khi muốn nhấn mạnh kết quả hơn nguyên nhân, nguyên nhân đã biết. Chúng thường được dùng trong hình thức trang trọng. <br>
								Cấu trúc: As/Since + mệnh đề chỉ nguyên nhân, mệnh đề chỉ kết quả.<br>
								hoặc Mệnh đề chỉ kết quả as mệnh đề chỉ nguyên nhân <br>
								    <p style="padding-left: 3%">Mệnh đề chỉ kết quả, since mệnh đề chỉ nguyên nhân.</p>
								Ví dụ:<br>
								<ol style="padding-left: 5%">
									<li>As I washed the dishes, he had to mop the floor.</li>
									<li>They’re rather expensive, since they’re quite hard to find.</li>
									<li>Since everything can be done from home with computers and telephones, there’s no need to dress up for work any more.</li>
								</ol>
							</p>
							<p class="T">For <span style="background: blue; font-size: 100%; color: white; padding: 5px;" class="fa fa-volume-up" onclick="document.getElementById('audio524').play()"></span></p>
							<p class="normal">
								For được dùng khi người nói muốn đề cập đến một nguyên nhân sau khi đã được cân nhắc, suy nghĩ và luôn đứng phần sau của câu và không đi một mình như because. Thường dùng trong văn phong trang trọng<br>
								Ví dụ:<br>
								<p title="Nguồn: Tiếng Anh 123">I decided to stop and have lunch - for I was feeling hungry. </p>
								hoặc She looks thin for she is malnourished.
							</p>
						<p class="T">A.2 Cấu trúc Because of/ Due to</p>
						<p class="normal">
							Because Of / Due to là một giới từ kép để chỉ nguyên nhân của sự việc, hành động.<br> Nó thường được dùng trước danh từ hoặc động từ thêm V-ing.<br>
							Cấu trúc: Because of/ Due to + Danh từ/ đại từ/ V- ing, mệnh đề kết quả.<br>
							hoặc mệnh đề kết quả, because of/ due to + Danh từ/ đại từ/ V- ing, mệnh đề kết quả.<br>
							Ví dụ:<br>
							<ol style="padding-left: 5%">
								<li>Because of/ Due to the wind, all the clothes were blown off</li>
								<li>Because of/ Due to being affected by the pandemic, the economy collapsed.</li>
								<li>He has an accident because of / due to his carelessness.</li>
								<li>She was late for her flight because of traffic congestion.</li>
							</ol>
						</p>
					</div>
				</div>
				<div id="content5-2">
					<div class="c-titile1">
						<span class="title-a">B.  Cách nói nguyên nhân trong tiếng Hàn</span>
						<button class="btn-mes">
							<span style="font-size: 120%;margin-right: 5px;" class="fa fa-caret-left"></span>
							<a style="font-size: 110%;" href="#content5-1">Phần A</a>
						</button>
					</div>
					<div class="noidung">
						<p class="T">B.1 아/ 어서 <span onclick="document.getElementById('audio525').play()" class="fa fa-volume-up" style="background: blue; color: white; border: none; border-radius: 4px; font-size: 100%; padding: 5px"></span>&ensp;<span onclick="document.getElementById('audio526').play()" class="fa fa-volume-up" style="background: blue; color: white; border: none; border-radius: 4px; font-size: 100%; padding: 5px"></span></p>
						<p class="normal">아/ 어서 diễn đạt mệnh đề phía trước là nguyên nhân của mệnh đề phía sau. Nghĩa tương đương tiếng Việt là "vì nên" hoặc "do đó". Với tính từ, động từ có kết thúc là nguyên âm ㅏ, ㅗ thì cộng với 아서; trường hợp kết thúc bằng nguyên âm khác thì cộng với 어서; và khi tận cùng là 하다 thì trở thành 해서. Với trường hợp của 이다, cộng với 이어서, nhưng trong văn nói thường dùng là 이라서.
						<br><ul type="square">Chú ý: <li>아/ 어서 không kết hợp với câu mệnh lệnh, thỉnh dụ.</li>
							Ví dụ::<br>
							이 신발은 커서 다른 신발을 보여 주세요. (X)<br>
							이 신발은 크니까 다른 신발을 보여 주세요. (O)<br>
							Đôi giày này to nên hãy cho tôi xem đôi giày khác.<br>
							오늘 약속이 있어서 내일 만날카요. (X)<br>
							오늘 약속이 있으니까 내일 만날카요. (O)<br>
							Hôm nay tôi có hẹn, hẹn mai gặp nhé!<br>
						<li>아/ 어서 không dùng ở quá khứ hoặc tương lai.</li>
						Ví dụ::<br>
							이 옷이 예쁘겠어서 입고 싶어요. (X)<br>
							이 옷이 예쁘서 입고 싶어요. (O)<br>
							Tôi muốn mặc cái áo này vì nó đẹp.<br>
						</ul>
						<table width="95%" cellspacing="0">
							<caption style="margin-bottom: 1px">Bảng chia một số động từ thể 아/ 어서</caption>
							<tr align="center"><th>Nguyên thể</th><th>Thể 아/ 어서</th></tr>
							<tr align="center"><td>가다</td><td>가서</td></tr>
							<tr align="center"><td>살다</td><td>살아서</td></tr>
							<tr align="center"><td>있다</td><td>있어서</td></tr>
							<tr align="center"><td>이다</td><td>이어서/ 이라서</td></tr>
							<tr align="center"><td>운동하다</td><td>운동해서</td></tr>
							<tr align="center"><td>바쁘다 <span style="color: red; font-weight: bold"><sup>*</sup></span></td><td>바빠서</td></tr>
							<tr align="center"><td>춥다 <span style="color: red; font-weight: bold"><sup>*</sup></span></td><td>추워서</td></tr>
							<tr align="center"><td>듣다 <span style="color: red; font-weight: bold"><sup>*</sup></span></td><td>들어서</td></tr>
							<tr><td><span style="color: red; font-weight: bold; padding-left: 3%"><sup>*</sup></span>: Bất quy tắc</td><td></td></tr>
						</table>
						<ol style="padding-left: 5%">
							<audio class="audioplay" id="manaseo" src="">
							</audio>
							<audio class="audioplay" id="kibuneo" src="">
							</audio>
							<audio class="audioplay" id="nuxeo" src="">
							</audio>
							<li>만나서 반갑습니다<span onclick="document.getElementById('manaseo').play()" class="fa fa-volume-up" style="background: blue; color: white; border: none; border-radius: 4px; font-size: 100%; padding: 5px"></span></li>
							<li>기분이 좋아서 춤을 췄어요<span onclick="document.getElementById('kibuneo').play()" class="fa fa-volume-up" style="background: blue; color: white; border: none; border-radius: 4px; font-size: 100%; padding: 5px"></span></li>
							<li>늦어서 죄송합니다<span onclick="document.getElementById('nuxeo').play()" class="fa fa-volume-up" style="background: blue; color: white; border: none; border-radius: 4px; font-size: 100%; padding: 5px"></span></li>
						</ol>
						</p>
						<p class="T">B.2 (으)니까 <span class="fa fa-volume-up" style="background: blue; color: white; border: none; border-radius: 4px; font-size: 100%; padding: 5px" onclick="document.getElementById('audio527').play()"></span></p>
						<p class="normal">
							Là vĩ tố liên kết biểu diễn nội dung ở vế trước là căn cứ của sự phán đoán hay là lý do cho nội dung ở vế sau. Thân động từ, tính từ kết thúc bằng nguyên âm hoặc ㄹ thì dùng -니까, với thân động từ, tính từ kết thúc bằng phụ âm thì dùng -으니까. Nghĩa tiếng Việt là "do..., bởi vì...".<br>
							<table width="95%" cellspacing="0">
								<caption style="padding-bottom: 1px;">Bảng một số động từ chia (으)니까</caption>
								<tr align="center"><th>Nguyên thể</th><th>Thể (으)니까</th></tr>
								<tr align="center"><td>보다</td><td>보니까</td></tr>
								<tr align="center"><td>오다</td><td>오니까</td></tr>
								<tr align="center"><td>이다</td><td>이니까</td></tr>
								<tr align="center"><td>크다</td><td>크니까</td></tr>
								<tr align="center"><td>있다</td><td>있으니까</td></tr>
								<tr align="center"><td>듣다<sup style="color:red">*</sup></td><td>들으니까</td></tr>
								<tr align="center"><td>덥다<sup style="color:red">*</sup></td><td>더우니까</td></tr>
								<tr align="center"><td>살다<sup style="color:red">*</sup></td><td>사니까</td></tr>
								<tr><td><sup style="color:red; padding-left: 3%">*</sup>: Bất quy tắc</td><td></td></tr>
							</table>
							<div class="diffshow" id="diffshow">	
								<button id="diffon">Phân biệt 아/어서 và (으)니까</button>
							</div>
							<diff252-content></diff252-content>				
						</p>
					</div>
		</div>`
})
.component('diff252-content',{
	template:
	`<div class="diffmain" id="diffmain">
		<div class="darkmode" id="darkmode" style="margin-top: 2%">
			<span style="padding-left: 2%;" id="diffmode">Cool mode</span>
			<label class="switch">
			  <input type="checkbox">
			  <span class="slider round" onclick="diffmode()"></span>
			</label>
		</div>
		<div class="diffaudio" id="diffaudio">
			<button id="diffplay">
				Phát nội dung
			</button>
			<audio style="display: none;" id="diff252" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/diff252.mp3" controls></audio>
			<audio style="display: none;" id="diff2521" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/diff2521.mp3" controls></audio>
			<audio style="display: none;" id="diff2522" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/diff2522.mp3" controls></audio>
			<audio style="display: none;" id="diff25221" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/diff25221.mp3" controls></audio>
			<audio style="display: none;" id="diff2523" src="https://nguyenvanthanhminn.github.io/nguphap2/Audio/diff2523.mp3" controls></audio>
		</div>
		<div class="diff" id="diff">
			<div class="diff1">
				<p class="difftitle" id="difftitle1">아/어서</p>
				<div class="diffcontent" id="diffcontent1">
					<ol class="diffview"> 
						<li>Không kết hợp với câu mệnh lệnh, thỉnh dụ</li>
						<ul class="diffview1" type="square">
							<li>시간이 없어서 빨리 가세요. (X)</li>
							<li>다리가 아파서 택시를 탈까요? (X)</li>
						</ul>
						<li>Không kết hợp hình thức quá khứ và tương lai</li>
						<ul class="diffview1" type="square">
							<li>한국에서 살았어서 한국어를 잘해요. (X)</li>
						</ul>
						<li>Chủ yếu diễn tả lý do thông thường</li>
						<ul class="diffview1" type="square">
							<li title="Xin lỗi vì đến muộn">늦어서 죄송해요.</li>
						</ul>
						<li>Kết hợp được với cụm từ chào hỏi, cảm ơn, xin lỗi</li>
						<ul class="diffview1" type="square">
							<li title="Rất vui được gặp bạn">만나서 반갑습니다.</li>
						</ul>
					</ol>
				</div>
			</div>
			<span class="diffbreak"></span>
			<div class="diff2">
				<p class="difftitle" id="difftitle2">(으)니까</p>
				<div class="diffcontent" id="diffcontent2">
				<ol class="diffview"> 
						<li>Kết hợp được với câu mệnh lệnh, thỉnh dụ</li>
						<ul class="diffview1" type="square">
							<li title="Không còn thời gian đâu nên hãy đi nhanh lên.">시간이 없으니까 빨리 가세요. (O)</li>
							<li title="Chân tôi đau nên chúng mình đi taxi nhé?">다리가 아파니까 택시를 탈까요? (O)</li>
						</ul>
					<li>Kết hợp được với hình thức quá khứ và tương lai</li>
					<ul class="diffview1" type="square">
							<li title="Vì sống ở Hàn Quốc nên tôi nói tiếng Hàn tốt.">한국에서 살았으니까 한국어를 잘해요. (O)</li>
						</ul>
						<li>Diễn tả nguyên nhân khách quan hoặc đưa ra lý do cụ thể. Hơn nữa, diễn tả lý do mà người nghe cũng biết đến</li>
						<ul class="diffview1" type="square">
							<li title="Bạn biết đấy, do đường tắc nên tôi đến muộn">차가 막하니까 늦었어요.</li>
						</ul>
						<li>Không kết hợp được với cụm từ chào hỏi, cảm ơn, xin lỗi</li>
						<ul class="diffview1" type="square">
							<li>만나니까 반갑습니다.(X)</li>
						</ul>
					</ol>
				</div>
			</div>
		</div>
		<div class="diffclose" id="diffclose">
			<button id="diffclosebtn">Đóng nội dung</button>
		</div>
	</div>`,
})
App = app.mount('#app')
