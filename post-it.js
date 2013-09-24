function PostIt(x, y){
  this.x = x
  this.y = y
  this.html =  '<div class="post-it", style="left:' + this.x +'; top:' + this.y + '"><div class="header"><div class="x">x</div></div><div class="content"><div contenteditable="true">Type here...</div></div></div>'
}

var Board = function( selector ) {
  this.background = $(selector)
  }

Board.prototype = {

  stopPropClick: function(){
    $(this.background).on('click', '.post-it', function(e) {
      e.stopPropagation();
    })
  },
  postCreate: function(){
    $(this.background).on('click', function(e){
      var singlePostit = new PostIt(e.pageX, e.pageY)
      $(e.target).append(singlePostit.html)
      $('.post-it').draggable({containment: "parent", handle: ".header"})
    });
    this.stopPropClick()
  },
  postRemove: function(){
    this.postCursor();
    $('body').on('click', '.x', function(){ 
      ($(this).closest('.post-it')).remove()
    })
  },
  postCursor: function(){
    $('body').on('mouseover', '.x', function(){
      $(this).css('cursor', 'pointer')
    })
  }
}

var board = new Board('#board')

$(function() {
  board.postCreate()
  board.postRemove()
})
