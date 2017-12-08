/**
 * Created by Снежа on 11.08.2017.
 */

function show()
{
    $.ajax({
        url: "page2.html",
        cache: false,
        success: function(html){
            $("#my").html(html);
        }
    });

}
