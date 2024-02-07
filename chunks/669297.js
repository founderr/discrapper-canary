"use strict";
t.r(A), t.d(A, {
  openErrorDialog: function() {
    return r
  }
});
var a = t("37983");
t("884691");
var l = t("77078"),
  n = t("959875"),
  s = t("782340");

function r(e, A, t) {
  let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  (0, n.default)({
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
    cta: s.default.Messages.GOT_IT,
    onConfirm: () => {},
    iconVariant: t
  })
}