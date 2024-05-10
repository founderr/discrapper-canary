"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  i = n("846027"),
  l = n("468026"),
  r = n("689938");

function o(e) {
  if (e) {
    (0, s.openModal)(e => (0, a.jsx)(l.default, {
      ...e,
      title: r.default.Messages.SERVER_DEAFENED_DIALOG_TITLE,
      body: r.default.Messages.SERVER_DEAFENED_DIALOG_BODY
    }));
    return
  }
  i.default.toggleSelfDeaf()
}