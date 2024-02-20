"use strict";
E.r(_), E.d(_, {
  default: function() {
    return I
  }
});
var t = E("37983");
E("884691");
var o = E("404828");

function I(e) {
  return e.heading = o.defaultRules.heading, e.lheading = o.defaultRules.lheading, e.list = o.defaultRules.list, e.paragraph = {
    ...e.paragraph,
    react: function(e, _, E) {
      return (0, t.jsx)("p", {
        children: _(e.content, E)
      }, E.key)
    }
  }, e.link = {
    ...e.link,
    react: function(e, _, E) {
      let I = {};
      if (null != e.context) {
        let _ = e.context[e.target];
        _ && _.onClick ? (I.onClick = _.onClick, I.onContextMenu = _.onContextMenu) : I.onClick = _
      }
      return null == I.onClick && (I.href = (0, o.sanitizeUrl)(e.target), I.target = "_blank"), (0, t.jsx)("a", {
        title: e.title,
        ...I,
        rel: "noreferrer",
        children: _(e.content, E)
      }, E.key)
    }
  }, e
}