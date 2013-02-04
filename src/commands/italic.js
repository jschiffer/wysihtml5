/*
wysihtml5.commands.italic = {
  exec: function(composer, command) {
    return wysihtml5.commands.formatInline.exec(composer, command, "i");
  },

  state: function(composer, command) {
    // element.ownerDocument.queryCommandState("italic") results:
    // firefox: only <i>
    // chrome:  <i>, <em>, <blockquote>, ...
    // ie:      <i>, <em>
    // opera:   only <i>
    return wysihtml5.commands.formatInline.state(composer, command, "i");
  }
};
*/

/* 
utilize css italic so that we can parse all styles out of span tags as opposed to nested tags.
 */ 
(function(wysihtml5) {
  var undef,
      REG_EXP = /wysiwyg-font-style-[a-z\-]+/g;
  
  wysihtml5.commands.italic = {
    exec: function(composer, command, italic) {
      return wysihtml5.commands.formatInline.exec(composer, command, "span", "wysiwyg-font-style-" + italic, REG_EXP);
    },

    state: function(composer, command, italic) {
      return wysihtml5.commands.formatInline.state(composer, command, "span", "wysiwyg-font-style-" + italic, REG_EXP);
    },

    value: function() {
      return undef;
    }
  };
})(wysihtml5);