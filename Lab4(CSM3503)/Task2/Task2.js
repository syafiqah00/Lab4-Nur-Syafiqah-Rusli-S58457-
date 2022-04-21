var colorTeal = "rgb(57, 204, 204)";
$(function(){

    $("#button_toggle_colors").click(function() {
        /* Step 2 */
        
        $(".box").each(function() {
          if ($(this).css("background-color") == colorTeal) {
            $(this).css("background-color", "");
          } else {
            $(this).css("background-color", colorTeal);
          }
        });
      });

      $("#button_toggle_roundedges").click(function() {
        /Step 3/
        $(".box").each(function() {
          // if ($(this).hasClass("round-edge")) {
          //   $(this).removeClass("round-edge");
          // } else {
          //   $(this).addClass("round-edge");
          // }
          $(this).toggleClass("round-edge");
        });
      });

      $("#button_add_box").click(function() {
        /*Step 4 */
        var new_box = document.createElement("div");
        var boxCount = $(".box").length;
        var new_id = boxCount + 1;
        $(new_box).attr("id", "box" + new_id);
        $(new_box).addClass("box");
        $(new_box).addClass("outlined");
        $("#boxes").append(new_box);
      });

})