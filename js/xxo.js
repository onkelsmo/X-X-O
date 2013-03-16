/**
 * X-X-O von SmO
 * Das beliebte Knobelspiel in jQuery programmiert
 * kein css, kein html nur jQuery
 * 
 * @author SmO
 * @since 05.05.2012
 */

/**
 * Default-Werte
 */
var defaults =
{
    counter: 0,
    player: "",
    win: false,
    tbl: ""
};

/**
 * Alle Funktionen in einem Objekt
 */
var fn =
{
    /**
     * setPlayfield - erstellt das Spielfeld (Style)
     * 
     * @param obj
     */
    setPlayfield: function(obj)
    {
    	/**
    	 * allgemeine Stylings
    	 */
        obj.find("body")
            .css
            ({
                'font-family': 'verdana, sans-serif'
            })
            .append('<center>');
        
        /**
         * erzeugen des Spielfeldes (Ueberschrift, Tabelle und Refreshbutton)
         */
        // Ueberschrift
        obj.find("center").append("<h1>");
        obj.find("h1").html("X-X-O - Das beliebte Knobelspiel");
                
        // Tabelle
        obj.find("center").append("<table>");
        defaults.tbl = obj.find("table");
        defaults.tbl.append(
        					$("<tr>").append(
        									$("<td>").attr("id", 1),
        									$("<td>").attr("id", 2),
        									$("<td>").attr("id", 3)
        									)
        					).append(
        					$("<tr>").append(
        									$("<td>").attr("id", 4),
        									$("<td>").attr("id", 5),
        									$("<td>").attr("id", 6)
        									)
        					).append(
        					$("<tr>").append(
        									$("<td>").attr("id", 7),
        									$("<td>").attr("id", 8),
        									$("<td>").attr("id", 9)
        									)
        					);
        
        // Refresh-Button
        obj.find("center").append("<br />").append("<button>");
        
        /**
         * stylen der Tabelle
         */
        obj.find("table")
            .attr("cellpadding", "1px")
            .attr("cellspacing", "1px");            
            
        obj.find("td")
            .css
            ({
                'height': '100px',
                'width': '100px',
                'border': '1px solid black',
                'text-align': 'center',
                'vertical-align': 'middle',
                'font-size': '72px',
                'cursor': 'pointer'
            });       
    },
    
    /**
     * game - enthaelt die Spiellogik
     * 
     * @param obj
     */
    game: function(obj)
    {
        /**
         * Check, ob das Feld belegt ist und welcher Spieler dran ist
         */
        obj.find("td").click(function()
        { 
            if($(this).html() != "")
            {
                alert("Dieses Feld ist schon belegt");    
            }
            else if(defaults.counter % 2 == 0)
            {
                $(this).html("X");
                defaults.player = "X";
                defaults.counter += 1;
            }
            else
            {
                $(this).html("O");
                defaults.player = "O";
                defaults.counter += 1;
            }
            
            /**
            * Check ob ein Gewinner
            * 
            * Matrix        1 2 3
            *               4 5 6
            *               7 8 9
            */
            // Waagerechte ueberpruefung
            if($("#1").html() == "X" && $("#2").html() == "X" && $("#3").html() == "X"
            || $("#1").html() == "O" && $("#2").html() == "O" && $("#3").html() == "O"
            || $("#4").html() == "X" && $("#5").html() == "X" && $("#6").html() == "X"
            || $("#4").html() == "O" && $("#5").html() == "O" && $("#6").html() == "O"
            || $("#7").html() == "X" && $("#8").html() == "X" && $("#9").html() == "X"
            || $("#7").html() == "O" && $("#8").html() == "O" && $("#9").html() == "O"
            // Senkrechte ueberpruefung
            || $("#1").html() == "X" && $("#4").html() == "X" && $("#7").html() == "X"
            || $("#1").html() == "O" && $("#4").html() == "O" && $("#7").html() == "O"
            || $("#2").html() == "X" && $("#5").html() == "X" && $("#8").html() == "X"
            || $("#2").html() == "O" && $("#5").html() == "O" && $("#8").html() == "O"
            || $("#3").html() == "X" && $("#6").html() == "X" && $("#9").html() == "X"
            || $("#3").html() == "O" && $("#6").html() == "O" && $("#9").html() == "O"
            // diagonale ueberpruefung
            || $("#1").html() == "X" && $("#5").html() == "X" && $("#9").html() == "X"
            || $("#1").html() == "O" && $("#5").html() == "O" && $("#9").html() == "O"
            || $("#3").html() == "X" && $("#5").html() == "X" && $("#7").html() == "X"
            || $("#3").html() == "O" && $("#5").html() == "O" && $("#7").html() == "O")
            {
                defaults.win = true;
                alert("Spieler " + defaults.player + " gewinnt!");
                $("td").unbind("click").filter(':contains(' + defaults.player + ')').css({'background-color': '#F78181'});
            }
            
            /**
             * Check ob unentschieden
             */
            if(defaults.win == false && defaults.counter == 9)
            {
                alert("Unentschieden!");
                $("td").unbind("click");
            }
        });
    },
    
    /**
     * refresh - Laed das Browserfenster neu
     * 
     * @param obj
     */
    refresh: function(obj)
    {
        obj.find("button").html("Refresh!").click(function()
        {
            location.reload();
        });
    }
};

$(document).ready(function()
{
    var obj = $(this);
    
    fn.setPlayfield(obj);
    fn.game(obj);
    fn.refresh(obj);
});    


