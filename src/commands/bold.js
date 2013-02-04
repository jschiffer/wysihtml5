/* 
utilize css bold so that we can parse all styles out of span tags as opposed to nested tags.
 */ 
(function(wysihtml5) {
  var undef,
      REG_EXP = /wysiwyg-font-weight-[a-z\-]+/g;
  
  wysihtml5.commands.bold = {
    exec: function(composer, command, weight) {
      return wysihtml5.commands.formatInline.exec(composer, command, "span", "wysiwyg-font-weight-" + weight, REG_EXP);
    },

    state: function(composer, command, weight) {
      return wysihtml5.commands.formatInline.state(composer, command, "span", "wysiwyg-font-weight-" + weight, REG_EXP);
    },

    value: function() {
      return undef;
    }
  };
})(wysihtml5);