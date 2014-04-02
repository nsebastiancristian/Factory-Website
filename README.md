Factory-Website
===============

A demo website for a factory. Please keep in mind that this is not the final version of the website and although it's 
functional and (in my opinion at least) in a 95% finished state it still needs some work to be done.

Although the factory is real, the data displayed is real and I'm using real images from said factory inside the website I 
am not planning to release this site for commercial purposes. I am just storing it here for demo purposes. Besides, the 
official site of the factory contains the same data and the same pictures (although, the visual display of the official
website is obviously very different from this one).

The design and the programming of the website is done entirely by me. I've used the following programming languages and 
technologies to create this website: HTML, CSS, PHP, MYSQL, Javascript, jQuery, AJAX. I've also used Photoshop for some
UI elements and for some image tweaking.

Because the website uses the AJAX technology to load files in order to create the feel of a desktop application, just by opening
the html files of the website in Windows Explorer will not allow you to navigate the website.
You must have a local WebServer software like Apache installed on your computer. I've used XAMPP in order to
install Apache and its dependencies and in order to test the website during the creation process. If you are using XAMPP just copy all the files
and folders of the website inside one folder  you have created inside the "htdocs" folder of the XAMPP installation directory.
Then, of course you have to start the Apache and MySQL servers (which in XAMPP is very easy to do by using the dedicated control panel)

In order to view the site you just have to open your favourite browser and type the following URL:

http://localhost/Factory/home_eng.html

The "home_eng.html" file, which is the home page in English. Alternatively, you can replace the "home_eng.html" part with the other "home_XXX.html" files, as they are the same page but in different languages.  
Please note that the "Factory" part inside the above URL is the name of the folder you have created inside the "htdocs" folder. If your folder is named differently
(and probably will be :) ) you have to change the name accordingly with the name of the folder.
 
 
The website also contains a section for displaying news about the factory. Each news item contains one or several pictures
and one paragraph of text. The news can be dynamically added to the website be means of a Content Management System I've
created for this purpose. By using this CMS, the user can also upload photos to be displayed along with the content of the
text inside the news.
