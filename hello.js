$(document).ready(function() {
    
//   func for smooth scroll==== 
    
    $('.smooth').on('click', function() {
    $.smoothScroll({
        scrollElement: $('body'),
        scrollTarget: this.attr("href")
    });
    
    return false;
});
    

 
});