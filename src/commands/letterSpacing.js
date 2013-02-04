/**
 * create class for span with specific letter-spacing defined in dynamically generated stylesheet.
 */
(function(wysihtml5) {
  var undef,
      REG_EXP = /wysiwyg-letter-spacing-[0-9]+/g;
  
  wysihtml5.commands.letterSpacing = {
    exec: function(composer, command, spacing) {
      return wysihtml5.commands.formatInline.exec(composer, command, "span", "wysiwyg-letter-spacing-" + spacing, REG_EXP);
    },

    state: function(composer, command, spacing) {
      return wysihtml5.commands.formatInline.state(composer, command, "span", "wysiwyg-letter-spacing-" + spacing, REG_EXP);
    },
    value: function() {
      return undef;
    }
  };
})(wysihtml5);