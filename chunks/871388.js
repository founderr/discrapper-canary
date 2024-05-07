"use strict";
t.r(A), t.d(A, {
  openErrorDialog: function() {
    return r
  }
});
var a = t("735250");
t("470079");
var l = t("481060"),
  s = t("120651"),
  n = t("689938");

function r(e, A, t) {
  let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  (0, s.default)({
    title: e,
    body: "string" == typeof A ? A : A.format({
      highlightHook: e => (0, a.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        style: {
          display: "inline"
        },
        children: e
      }),
      ...r
    }),
    cta: n.default.Messages.GOT_IT,
    onConfirm: () => {},
    iconVariant: t
  })
}