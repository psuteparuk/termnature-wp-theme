Wordpress theme for Termnature
==============================

This is a child theme for [Termnature](https://www.termnature.com) based on [Beans Framework](http://www.getbeans.io/). We simple need to upload all the PHP and the LESS files in the child theme folder into our WP server. [The Beans Compiler API](http://www.getbeans.io/documentation/compiling-assets/) will take care of the compilation automatically.

Optionally, instead of using Beans compiler, we can preprocess the LESS files into a CSS file ourselves. Running `npm start` will compile the LESS file into a `style.css` file inside the `tm-beans-child` folder.