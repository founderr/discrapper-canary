"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("846027"),
  i = a("468026"),
  r = a("689938");

function o(e) {
  if (e) {
    (0, s.openModal)(e => (0, n.jsx)(i.default, {
      ...e,
      title: r.default.Messages.SERVER_DEAFENED_DIALOG_TITLE,
      body: r.default.Messages.SERVER_DEAFENED_DIALOG_BODY
    }));
    return
  }
  l.default.toggleSelfDeaf()
}