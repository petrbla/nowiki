/* Add NoWiki buttons to the toolbar */
/* from http://wiki.splitbrain.org/wiki:tips:toolbarbutton */

if(toolbar){ 
    toolbar[toolbar.length] = {"type":"format", "title":"NoWiki", "key":"", 
                               "icon":"../../plugins/nowiki/images/tb_nowiki.png", 
                               "open":"<nowiki>", "close":"</nowiki>"
                              };
}
