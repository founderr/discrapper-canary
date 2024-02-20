"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("868233"),
  s = n("446674"),
  r = n("368694"),
  o = n("773336"),
  u = n("370492"),
  d = n("584369");
let c = (0, l.makeLazy)({
  createPromise: () => n.el("304207").then(n.bind(n, "304207")),
  webpackId: "304207"
});

function f(e) {
  let {
    mobile: t
  } = e, n = (0, s.useStateFromStores)([r.default], () => r.default.isDeveloper), l = (0, s.useStateFromStores)([d.default], () => d.default.displayTools), f = a.useCallback(e => {
    let t = (0, o.isMac)() ? e.metaKey : e.ctrlKey;
    t && e.altKey && "KeyO" === e.code && (0, u.toggleDisplayDevTools)()
  }, []);
  return (a.useLayoutEffect(() => (window.addEventListener("keydown", f), () => {
    window.removeEventListener("keydown", f)
  }), [f]), t ? n : l) ? (0, i.jsx)(c, {
    mobile: t
  }) : null
}