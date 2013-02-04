/*
wysihtml5.commands.underline = {
  exec: function(composer, command) {
    return wysihtml5.commands.formatInline.exec(composer, command, "u");
  },

  state: function(composer, command) {
    return wysihtml5.commands.formatInline.state(composer, command, "u");
  }
};
*/
/* 
utilize css italic so that we can parse all styles out of span tags as opposed to nested tags.
 */ 
(function(wysihtml5) {
  var undef,
      REG_EXP = /wysiwyg-decoration-[a-z\-]+/g;
  
  wysihtml5.commands.underline = {
    exec: function(composer, command, underline) {
      return wysihtml5.commands.formatInline.exec(composer, command, "span", "wysiwyg-decoration-" + underline, REG_EXP);
    },

    state: function(composer, command, underline) {
      return wysihtml5.commands.formatInline.state(composer, command, "span", "wysiwyg-decoration-" + underline, REG_EXP);
    },

    value: function() {
      return undef;
    }
  };
})(wysihtml5);