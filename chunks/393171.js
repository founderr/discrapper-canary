"use strict";
n.r(t), n.d(t, {
  useIsDismissibleContentTypeDismissed: function() {
    return r
  }
});
var l = n("446674"),
  a = n("374363"),
  s = n("674268"),
  i = n("846614");

function r(e) {
  let t = (0, i.useNewUserDismissibleContent)([e]),
    n = (0, l.useStateFromStores)([a.default], () => {
      var e;
      return null === (e = a.default.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents
    });
  return 0 === t.length || null != n && (0, s.hasBit)(n, e)
}