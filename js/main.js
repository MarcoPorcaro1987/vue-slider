const app = new Vue({
    el: '#root',
    data: {
        images:[
            "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A",
            "https://www.mylondra.it/wp-content/uploads/2018/04/AdobeStock_61816288.jpeg",
            "https://www.mylondra.it/wp-content/uploads/2012/11/AdobeStock_61740708-1024x682.jpeg"
        ],
        imgIndex: 0,
        autoplay: null
    },
    methods: {
        nextImg: function (){
            this.imgIndex ++;
            if(this.imgIndex >= this.images.length){
                this.imgIndex = 0;
            } 
        },
        prevImg: function (){
            this.imgIndex--;
            if(this.imgIndex < 0){
                this.imgIndex = this.images.length - 1;
            } 
        },
        changeImg: function (index){
                this.imgIndex = index;
        },
        stopAutoplay: function(){
            clearInterval(this.autoplay);
        },
        startAutoplay: function(){
            this.autoplay = setInterval( () =>this.nextImg(), 2500);
        } 
    },
    mounted : function() {
        this.startAutoplay();
    }
  });