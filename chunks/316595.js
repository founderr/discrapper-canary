"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("524437"),
  r = n("243778"),
  o = n("375954"),
  u = n("423490");

function d(e) {
  let {
    children: t
  } = e, n = (0, s.useStateFromStores)([o.default], () => o.default.hasCurrentUserSentMessageSinceAppStart()), d = l.useMemo(() => {
    let e = [];
    return n && e.push(i.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX_V2), e
  }, [n]);
  return (0, a.jsx)(r.default, {
    contentTypes: d,
    children: e => {
      let {
        visibleContent: n
      } = e;
      if (n === i.DismissibleContent.ACTIVITIES_CHAT_BUTTON_NUX_V2) return (0, a.jsx)(u.OmniButtonNuxAnimation, {
        children: t
      });
      return t
    }
  })
}