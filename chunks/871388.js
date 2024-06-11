"use strict";
t.r(A), t.d(A, {
  openErrorDialog: function() {
    return n
  }
});
var a = t("735250");
t("470079");
var l = t("481060"),
  s = t("120651"),
  r = t("689938");

function n(e, A, t) {
  let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
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
      ...n
    }),
    cta: r.default.Messages.GOT_IT,
    onConfirm: () => {},
    iconVariant: t
  })
}