$(document).ready(function(){

    var prevLevel;
    var currLevel;

    $(document).on('click', '.file-plan-list:not(.invisible) LI', function(){

        $self = $(this);


        if($self.children('UL').length > 0){

            // Zurück-Button einblenden
            $('BUTTON.back').removeClass('hidden');

            // Kind-Liste einblenden
            $childList = $self.children('.file-plan-list');
            $childList.addClass('visible');

            // Parent-Liste von $self ausblenden
            $self.parent().addClass('invisible');

            // vorheriges Level speichern
            prevLevel = $self.parent('UL');
            console.log("Prev Level: " + prevLevel)

            // aktuelles Level speichern
            currLevel = $self.children('UL');
            console.log("Curr Level: " + currLevel)
        }

    });

    $(document).on('click', 'BUTTON.back', function(){

        $(currLevel).removeClass('visible');
        $(prevLevel).removeClass('invisible');

        currLevel = prevLevel;
        prevLevel = prevLevel.parent();

    });

});