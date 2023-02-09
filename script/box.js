const item = ["Anh khao trà sữa 1 tuần", "Anh dọn dẹp nhà 1 tuần", "Anh rửa bát 1 tuần", "Quà này do em tùy chọn", "May mắn lần sau"];
const random = Math.floor(Math.random() * item.length);
var app = new Vue({
    el: '#app',
    data: {
      open: false,
      text: item[random]
    },
    methods: {
      click: function() {
        this.open = !this.open;
      }
    },
    watch:{
      open: function() {
        if (this.open == true) {
            document.body.className = 'open';
            }
        else {
          document.body.className = '';
        }
      }
    }
  })