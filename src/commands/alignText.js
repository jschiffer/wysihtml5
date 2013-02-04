(function(wysihtml5) {
  var undef,
      CLASS_NAME  = "wysiwyg-text-align-",
      REG_EXP     = /wysiwyg-text-align-[0-9a-z]+/gi;
  
  wysihtml5.commands.alignText = {
    exec: function(composer, command, dir) {
      return wysihtml5.commands.formatBlock.exec(composer, "formatBlock", null, CLASS_NAME+dir, REG_EXP);
    },

    state: function(composer, command, dir) {
      return wysihtml5.commands.formatBlock.state(composer, "formatBlock", null, CLASS_NAME+dir, REG_EXP);
    },

    value: function() {
      return undef;
    }
  };
})(wysihtml5);