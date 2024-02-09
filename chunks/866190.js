"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return s
  }
});
var a = n("884691"),
  r = n("446674"),
  i = n("244201"),
  l = n("471671");

function s() {
  let {
    windowId: e
  } = a.useContext(i.default);
  return (0, r.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
}