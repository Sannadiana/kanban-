$(document).ready(function() {


    // Define card
    function card(color, text) {
        return (
            `<div class="kanban-card d-flex flex-column" style="background-color:` +
            color +
            `">
            <p>` +
            text +
            `</p>
            <button>
              <i class="fas fa-times"></i>
            </button>
        </div>`
        );
    }

    // Add new card
    $("input[type=text]").keypress(function(event) {
        if (event.which === 13) {
            let text = $(this).val();
            $(this).val("");
            $(this)
                .next(".list-body")
                .append(card(color, text));
        }
    });

    // Delete card
    $(document).on("click", ".kanban-card > button", function() {
        $(this)
            .parent()
            .fadeOut(250, function() {
                $(this).remove();
            });
    });

    // Toggle input field
    $("header").on("click", "button", function() {
        $(this)
            .children()
            //.toggleClass("oi-chevron-top oi-chevron-bottom");
            .toggleClass("fa-angle-down fa-angle-up")
        $("input[type=text]").slideToggle();
    });

    // Toggle chosen color
    $(".color").on("click", function() {
        color = $(this).val();
        $(".color-checked").removeClass("color-checked");
        colorBorder();
        $(this)
            .children()
            .addClass("color-checked");
    });

    $(function() {
        $("#sortable1, #sortable2, #sortable3")
            .sortable({
                connectWith: ".list-body"
            })
            .disableSelection();
    });
});