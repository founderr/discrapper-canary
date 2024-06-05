"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  l = s("358085"),
  i = s("998502"),
  u = s("689938");

function d(e, t) {
  return l.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0 ? (0, n.jsx)(a.MenuItem, {
    id: "copy",
    label: u.default.Messages.COPY,
    hint: (0, l.isMac)() ? "⌘C" : "Ctrl+C",
    action: () => {
      i.default.copy(e), null == t || t.focus()
    }
  }) : null
}