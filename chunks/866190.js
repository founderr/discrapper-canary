"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return a
  }
});
var i = n("884691"),
  l = n("446674"),
  r = n("244201"),
  s = n("471671");

function a() {
  let {
    windowId: e
  } = i.useContext(r.default);
  return (0, l.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
}