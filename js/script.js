const catalogProduct = [
    {
        id: 'id1',
        name: '30 Seconds to Mars',
        img: './img/tovaru/30stm2.jpg',
        genre: 'rock',
        price: 12
    }, 
    {
        id: 'id2',
        name: '30 Seconds to Mars',
        img: './img/tovaru/30stm3.jpg',
        genre: 'rock',
        price: 18
    },
    {
        id: 'id3',
        name: 'Adele',
        img: './img/tovaru/adl1.jpg',
        genre: 'pop',
        price: 18
    },
    {
        id: 'id4',
        name: 'Adele',
        img: './img/tovaru/adl2.jpg',
        genre: 'pop',
        price: 13
    },
    {
        id: 'id5',
        name: 'Adele',
        img: './img/tovaru/adl3.jpg',
        genre: 'pop',
        price: 25
    },
    {
        id: 'id6',
        name: 'Asking Alexandria',
        img: './img/tovaru/ask1.jpg',
        genre: 'rock',
        price: 16
    },
    {
        id: 'id7',
        name: 'Avril Lavigne',
        img: './img/tovaru/avr1.jpg',
        genre: 'rock',
        price: 11
    },
    {
        id: 'id8',
        name: 'Avril Lavigne',
        img: './img/tovaru/avr2.jpg',
        genre: 'rock',
        price: 14
    },
    {
        id: 'id9',
        name: 'Avril Lavigne',
        img: './img/tovaru/avr3.jpg',
        genre: 'rock',
        price: 19
    },
    {
        id: 'id10',
        name: 'The Beatles',
        img: './img/tovaru/btl1.jpg',
        genre: 'rock',
        price: 21
    },
    {
        id: 'id11',
        name: 'The Beatles',
        img: './img/tovaru/btl3.jpg',
        genre: 'rock',
        price: 29
    },
    {
        id: 'id12',
        name: 'Evanescence',
        img: './img/tovaru/evn1.jpg',
        genre: 'rock',
        price: 9
    },
    {
        id: 'id13',
        name: 'Evanescence',
        img: './img/tovaru/evn2.jpg',
        genre: 'rock',
        price: 15
    },
    {
        id: 'id14',
        name: 'Holzie',
        img: './img/tovaru/hlz.jpg',
        genre: 'indie',
        price: 18
    },
    {
        id: 'id15',
        name: 'Halsey',
        img: './img/tovaru/hlz2.jpg',
        genre: 'indie',
        price: 17
    },
    {
        id: 'id16',
        name: 'Kodaline',
        img: './img/tovaru/kdl1.jpg',
        genre: 'indie',
        price: 20.99
    },
    {
        id: 'id17',
        name: 'Kodaline',
        img: './img/tovaru/kdl2.jpg',
        genre: 'indie',
        price: 14.29
    },
    {
        id: 'id18',
        name: 'Lana Del Rey',
        img: './img/tovaru/ldr1.jpg',
        genre: 'indie',
        price: 15.19
    },
    {
        id: 'id19',
        name: 'Lana Del Rey',
        img: './img/tovaru/ldr2.jpg',
        genre: 'indie',
        price: 17
    },
    {
        id: 'id20',
        name: 'Lana Del Rey',
        img: './img/tovaru/ldr3.jpg',
        genre: 'indie',
        price: 18.52
    },
    {
        id: 'id21',
        name: 'Lady Gaga',
        img: './img/tovaru/lg1.jpg',
        genre: 'pop',
        price: 17
    },
    {
        id: 'id22',
        name: 'Lady Gaga',
        img: './img/tovaru/lg2.jpg',
        genre: 'pop',
        price: 23
    },
    {
        id: 'id23',
        name: 'Lady Gaga',
        img: './img/tovaru/lg3.jpg',
        genre: 'pop',
        price: 13
    },
    {
        id: 'id24',
        name: 'Nirvana',
        img: './img/tovaru/nrvn1.jpg',
        genre: 'rock',
        price: 27.99
    },
    {
        id: 'id25',
        name: 'Rihanna',
        img: './img/tovaru/ri1.jpg',
        genre: 'indie',
        price: 28
    },
    {
        id: 'id25',
        name: 'Rihanna',
        img: './img/tovaru/ri2.jpg',
        genre: 'pop',
        price: 23
    },
    {
        id: 'id25',
        name: 'Rihanna',
        img: './img/tovaru/ri3.jpg',
        genre: 'pop',
        price: 16
    },
    {
        id: 'id26',
        name: 'Skillet',
        img: './img/tovaru/skl1.jpg',
        genre: 'rock',
        price: 16
    },
    {
        id: 'id27',
        name: 'Skillet',
        img: './img/tovaru/skl2.jpg',
        genre: 'rock',
        price: 19
    },
    {
        id: 'id28',
        name: 'Skillet',
        img: './img/tovaru/skl3.jpg',
        genre: 'rock',
        price: 20.34
    },
    {
        id: 'id29',
        name: 'The XX',
        img: './img/tovaru/thexx1.jpg',
        genre: 'indie',
        price: 11
    },
    {
        id: 'id30',
        name: 'The XX',
        img: './img/tovaru/thexx2.jpg',
        genre: 'indie',
        price: 7
    },
    {
        id: 'id31',
        name: 'X Ambassadors',
        img: './img/tovaru/xamb1.jpg',
        genre: 'indie',
        price: 13
    },
    {
        id: 'id32',
        name: 'X Ambassadors',
        img: './img/tovaru/xamb2.jpg',
        genre: 'indie',
        price: 9
    }
]



document.getElementById('faq_btn').addEventListener('click', function(){
    if(document.getElementById('FAQ').style.display == 'none'){
        document.getElementById('FAQ').style.display = 'block';
    } else{
        document.getElementById('FAQ').style.display = 'none';
    }
});

document.getElementById('faq_show1').addEventListener('click', function(){
    if(document.getElementById('faq_hiden1').style.display == 'none'){
        document.getElementById('faq_hiden1').style.display = 'block';
    } else{
        document.getElementById('faq_hiden1').style.display = 'none';
    }
    
});

document.getElementById('faq_show2').addEventListener('click', function(){
    if(document.getElementById('faq_hiden2').style.display == 'none'){
        document.getElementById('faq_hiden2').style.display = 'block';
    } else{
        document.getElementById('faq_hiden2').style.display = 'none';
    }
});

document.getElementById('faq_show3').addEventListener('click', function(){
    if(document.getElementById('faq_hiden3').style.display == 'none'){
        document.getElementById('faq_hiden3').style.display = 'block';
    } else{
        document.getElementById('faq_hiden3').style.display = 'none';
    }
});

timeend= new Date();
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
	today = new Date();
	today = Math.floor((timeend-today)/1000);
	tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	thour=today%24; today=Math.floor(today/24);
	timestr=" " + thour+ " часов " + tmin + " минут "+ tsec + " секунд";
	document.getElementById('timer').innerHTML=timestr;
	window.setTimeout("time()",1000);
}

time();


