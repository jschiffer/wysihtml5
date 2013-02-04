(function(wysihtml5) {
  var REG_EXP     = /wysiwyg-line-height-[0-9a-z]+/g;
  
  wysihtml5.commands.lineHeight = {
    exec: function(composer, command, amt) {
      console.info('exec lineHeight');
      return wysihtml5.commands.formatBlock.exec(composer, "formatBlock", 'body', "wysiwyg-line-height-" + amt, REG_EXP);
      //return composer.commands.exec("formatBlock", "body", REG_EXP+amt);
      //exec: function(composer, command, nodeName, className, classRegExp) {
    },

    state: function(composer, command, amt) {
      return wysihtml5.commands.formatBlock.exec(composer, "formatBlock", 'body', "wysiwyg-line-height-" + amt, REG_EXP);
      //return wysihtml5.commands.formatBlock.exec(composer, "formatBlock", 'body', "wysiwyg-line-height-" + amt, REG_EXP);
    }
  };
})(wysihtml5);