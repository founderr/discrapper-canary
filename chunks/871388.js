t.d(A, {
  B: function() {
    return l
  }
});
var n = t(735250);
t(470079);
var a = t(481060),
  s = t(120651),
  r = t(689938);

function l(e, A, t) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  (0, s.Z)({
    title: e,
    body: "string" == typeof A ? A : A.format({
      highlightHook: e => (0, n.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "text-normal",
        style: {
          display: "inline"
        },
        children: e
      }),
      ...l
    }),
    cta: r.Z.Messages.GOT_IT,
    onConfirm: () => {},
    iconVariant: t
  })
}