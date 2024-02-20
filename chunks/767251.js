"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("37983");
n("884691");
var a = n("404828"),
  l = n.n(a),
  s = n("77078");

function r(e) {
  return e.paragraph = {
    ...e.paragraph,
    react: function(e, t, n) {
      return (0, i.jsx)("p", {
        children: t(e.content, n)
      }, n.key)
    }
  }, e.link = {
    ...e.link,
    react: function(e, t, n) {
      let a = {};
      if (null != e.context) {
        let t = e.context[e.target];
        t && t.onClick ? (a.onClick = t.onClick, a.onContextMenu = t.onContextMenu) : a.onClick = t
      }
      return null == a.onClick && (a.href = l.sanitizeUrl(e.target)), (0, i.jsx)(s.Anchor, {
        title: e.title,
        ...a,
        children: t(e.content, n)
      }, n.key)
    }
  }, e
}