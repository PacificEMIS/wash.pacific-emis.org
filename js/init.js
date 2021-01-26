(function($){
    $(function(){

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        $('.dropdown-trigger').dropdown();
        $(document).ready(function(){
            $('.collapsible').collapsible();
        });
        $(document).ready(function(){
            $('select').formSelect();
        });
        
    }); // end of document ready
})(jQuery); // end of jQuery name space
