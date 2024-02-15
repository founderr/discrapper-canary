"use strict";
n.r(t), n.d(t, {
  useShowActivityIndicator: function() {
    return s
  }
});
var l = n("446674"),
  a = n("191225");
let s = () => {
  let e = (0, l.useStateFromStores)([a.default], () => a.default.getState().shouldShowNewActivityIndicator);
  return e
}