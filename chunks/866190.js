"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return l
  }
});
var i = n("884691"),
  r = n("446674"),
  o = n("244201"),
  s = n("471671");

function l() {
  let {
    windowId: e
  } = i.useContext(o.default);
  return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
}