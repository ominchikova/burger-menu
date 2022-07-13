document.body.addEventListener('click',function(e){
    if (e.target.classList.contains('overlay') ||
    e.target.classList.contains('burger__toggel')
    ){
        this.classList.toggle('burger__open')
    } else if (e.target.classList.contains('item')){
        this.classList.remove('burger__open')
    }
})