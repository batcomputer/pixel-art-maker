$(document).ready(function() {

    function makeGrid() {
        var table = $('<table>');
        var gridWidth = $("#inputWidth").val();
        var gridHeight = $("#inputHeight").val();
        for (var i = 0; i < gridHeight; i++) {
            var rowstart = $("<tr>");
            rowstart.appendTo("#pixelCanvas");
            for (var j = 0; j < gridWidth; j++) {
                var colstart = $('<td></td>');
                colstart.appendTo(rowstart);
                var rowend = $("</tr>");
                rowend.appendTo(rowstart);
                $("table td").addClass(function(index) {
                    return "cell-" + index;
                });
            }
            $(table).appendTo(rowend);
            $('tbody').append(table);

        }
    }

    $("#sizePicker").on("submit", function(e) {
        e.preventDefault();
        makeGrid();
    });

    $("#pixelCanvas").on({
        click: function() {
            var dynaColor = $("#colorPicker").val();
            $("td:hover").css("background-color", dynaColor);
        }
    });

    $("#pixelCanvas").on({
        dblclick: function() {
            var dynaColor = $("#colorPicker").val();
            $("td:hover").css("background-color", "white");
        }
    });


});
