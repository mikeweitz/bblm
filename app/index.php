<? require_once 'includes/init.php'; ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Backbone Layoutmanager Starter Template</title>

    <meta name="viewport" content="width=device-width, user-scalable=no"> 
       
    <!-- build:css({.tmp,app}) assets/styles/main.css -->
    <link href="./assets/styles/main.css" rel="stylesheet">
    <!-- endbuild -->

    <!-- build:js scripts/libs/modernizr.js -->        
    <script src="./assets/bower_components/modernizr/modernizr.js"></script>
    <!-- endbuild -->

  </head>

  <body class="loading">

    <nav id="menu"></nav>

    <header id="header"></header>

    <div id="content"></div>

    <footer id="footer"></footer>

    <!-- build:js scripts/vendor.js -->
    <script src="./assets/bower_components/jquery/jquery.js"></script>
    <script src="./assets/bower_components/underscore/underscore.js"></script>
    <script src="./assets/bower_components/backbone/backbone.js"></script>
    <script src="./assets/bower_components/layoutmanager/backbone.layoutmanager.js"></script>
    <script src="./assets/scripts/categorizr.js"></script>
    <!-- endbuild -->

    <!-- build:js scripts/main.js -->
    <script src="src/components/plugins.js"></script>
    <script src="src/components/tracking.js"></script>
    <script src="src/components/share.js"></script>
    <script src="src/router.js"></script>
    <script src="src/vent.js"></script>
    <script src="src/views/header.js"></script>
    <script src="src/views/footer.js"></script>
    <script src="src/views/error.js"></script>
    <script src="src/views/home.js"></script>
    <script src="src/main.js"></script>
    <!-- endbuild -->

  </body>
</html>