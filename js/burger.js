document.getElementById('burger').addEventListener('click',function(){
    if(document.getElementById('menu').style.display == 'none'){
        document.getElementById('menu').style.display = 'flex';
    } else {
        document.getElementById('menu').style.display = 'none';
    }
});

document.getElementById('burger').addEventListener('click',function(){
    if(document.getElementById('korz').style.display == 'none'){
        document.getElementById('korz').style.display = 'block';
    } else {
        document.getElementById('korz').style.display = 'none';
    }
});

document.getElementById('burger').addEventListener('click',function(){
    if(document.getElementById('lang').style.display == 'none'){
        document.getElementById('lang').style.display = 'block';
    } else {
        document.getElementById('lang').style.display = 'none';
    }
});