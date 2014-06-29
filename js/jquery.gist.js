$(function () {
  $("[data-gist]").each(function () {
    var $element = $(this);
    var id = $element.attr("data-gist");

    $element.html("<p>Loading Gist...</p>");

    $.ajax({
        url: "https://gist.github.com/sanderheilbron/" + id + ".json",
        dataType: "jsonp",
        cache: true,
        success: function (data) {
            if (data && data.div) {
                if (!$("link[href='" + data.stylesheet + "']").length) {
                    $("head").append("<link href=\"" + data.stylesheet + "\" rel=\"stylesheet\" />");
                }
                $element.html(data.div);
            }
        },
        error: function () {
            $element.html("<p>Gist Load Failed</p>");
        }
      });
    });
});
