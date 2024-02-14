"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
});
var t = E("37983"),
  o = E("884691"),
  n = E("868233"),
  a = E("446674"),
  i = E("773336"),
  r = E("370492"),
  I = E("584369");
let T = (0, n.makeLazy)({
  createPromise: () => E.el("304207").then(E.bind(E, "304207")),
  webpackId: "304207"
});

function s(e) {
  let {
    mobile: _
  } = e, {
    devToolsEnabled: E,
    displayTools: n
  } = (0, a.useStateFromStoresObject)([I.default], () => ({
    devToolsEnabled: I.default.devToolsEnabled,
    displayTools: I.default.displayTools
  })), s = o.useCallback(e => {
    let _ = (0, i.isMac)() ? e.metaKey : e.ctrlKey;
    _ && e.altKey && "KeyO" === e.code && (0, r.toggleDisplayDevTools)()
  }, []);
  return (o.useLayoutEffect(() => (window.addEventListener("keydown", s), () => {
    window.removeEventListener("keydown", s)
  }), [s]), _ ? E : n) ? (0, t.jsx)(T, {
    mobile: _
  }) : null
}