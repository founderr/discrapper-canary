var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(481060),
  r = t(614771);
s.Z = function(e) {
  let {
    children: s,
    withBorder: t = !1
  } = e;
  return (0, n.jsx)(l.FocusBlock, {
    children: (0, n.jsx)(l.Card, {
      className: a()(r.componentPreviewWrapper, {
        [r.componentPreviewWrapperBordered]: t
      }),
      outline: t,
      children: (0, n.jsx)("div", {
        className: r.componentPreview,
        onClickCapture: function(e) {
          e.stopPropagation()
        },
        children: s
      })
    })
  })
}