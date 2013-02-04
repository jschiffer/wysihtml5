/* document.execCommand("fontFamily") will create either inline styles (firefox, chrome) or use font tags
 * which we don't want
 * Instead we set a css class
 */
(function(wysihtml5) {
  var undef,
      REG_EXP = /wysiwyg-font-family-[a-z\-]+/gi;
  
  wysihtml5.commands.fontFamily = {
    exec: function(composer, command, family) {
      return wysihtml5.commands.formatInline.exec(composer, command, "span", "wysiwyg-font-family-" + family, REG_EXP);
    },

    state: function(composer, command, family) {
      return wysihtml5.commands.formatInline.state(composer, command, "span", "wysiwyg-font-family-" + family, REG_EXP);
    },

    value: function() {
      return undef;
    }
  };
})(wysihtml5);
