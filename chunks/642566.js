"use strict";
t.r(n), t.d(n, {
  default: function() {
    return r
  }
});
var o = t("735250");
t("470079");
var i = t("859097"),
  s = t("689938");

function r(e) {
  let {
    onContinue: n,
    onClose: t
  } = e;
  return (0, o.jsx)(i.TwoWayLinkError, {
    title: s.default.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
    body: s.default.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
    onClose: t,
    onContinue: n
  })
}