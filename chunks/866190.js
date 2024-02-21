"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return a
  }
});
var i = n("884691"),
  r = n("446674"),
  l = n("244201"),
  u = n("471671");

function a() {
  let {
    windowId: e
  } = i.useContext(l.default);
  return (0, r.useStateFromStores)([u.default], () => u.default.isFocused(e), [e])
}