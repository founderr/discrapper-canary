"use strict";
n.r(e), n.d(e, {
  useIsWindowFocused: function() {
    return a
  }
});
var i = n("884691"),
  r = n("446674"),
  l = n("244201"),
  s = n("471671");

function a() {
  let {
    windowId: t
  } = i.useContext(l.default);
  return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(t), [t])
}