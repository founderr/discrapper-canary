"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return s
  }
});
var i = n("884691"),
  r = n("446674"),
  u = n("244201"),
  a = n("471671");

function s() {
  let {
    windowId: e
  } = i.useContext(u.default);
  return (0, r.useStateFromStores)([a.default], () => a.default.isFocused(e), [e])
}