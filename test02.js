(function($, window) {
    $(function() {
        //この中に処理
    //課題1 h２を削除するs
    $('h2').remove();
    
    //課題2 $('#index').text()の違い
    $('#index').html();
   
   //課題3 ul#indexにメソッドを追加する//
    $('ul').append('<li>メソッド</li>')
    
    //課題4 各liの文字列の長さ
    $('#index').find('li').each(function (){
        alert($(this).text().length+"文字")
    });
    
    //課題5 各文字列の最後に文字列の長さを追記する
    $('#index').find('li').each(function() {
        var count = ($(this).text().length);
        $(this).append("[" + count　+"文字]");
    });

    });
    
})(jQuery, window);