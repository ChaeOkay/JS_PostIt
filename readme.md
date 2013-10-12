#Post-It

In this challenge, we'll be re-creating the post-it boards of yore on the browser. The purpose is to become better acquainted with object-oriented design and the nuances of event binding.

To solve this challenge, you'll need to utilize the following tools:

-  jQuery UI
-  The HTML contenteditable attribute

####Grab the Gist
Download all of the files in the gist. All of the HTML and CSS has been written, you only need to add your own jQuery (and jQuery UI) flavored JavaScript.

####Make a Post-It Board
Your job is to figure out how to accurately model the components of this application in JavaScript, giving each object the appropriate properties and behavior. A rudimentary skeleton has been provided for you, outlining two primary objects. You can define any other objects you think you may need, though.

Notice the various features of this program:

-  When the user clicks anywhere on the Board, a new PostIt is generated.
-  PostIt objects have a header and a content area, which is editable.
-  PostIt objects can be moved by clicking and dragging the header.
-  A PostIt can be deleted by clicking on the X in the header.
-  The content area of a PostIt is editable, even though it is not a form element like <textarea> or <input>.

Some edge cases to watch out for:

-  When a user clicks on a post-it, does it place the cursor within that post-it or does it frustratingly generate a new post-it? Hint: you may want to check out the event.stopPropagation() method in jQuery.
-  Can you drag by the header area only? Draging by the content area might give you some headaches.
