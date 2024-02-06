"use strict";
t.r(A), t.d(A, {
  openErrorDialog: function() {
    return s
  }
});
var a = t("37983");
t("884691");
var n = t("77078"),
  l = t("959875"),
  r = t("782340");

function s(e, A, t) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  (0, l.default)({
    title: e,
    body: "string" == typeof A ? A : A.format({
      highlightHook: e => (0, a.jsx)(n.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        style: {
          display: "inline"
        },
        children: e
      }),
      ...s
    }),
    cta: r.default.Messages.GOT_IT,
    onConfirm: () => {},
    iconVariant: t
  })
}