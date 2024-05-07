"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("481060"),
  l = n("745752"),
  r = n("17181"),
  o = n("689938"),
  u = n("732040");

function d(e) {
  let {
    guildId: t,
    channelId: n
  } = e, d = s.useCallback(() => {
    null != t && null != n && ((0, l.startOnboarding)(t), (0, r.default)({
      guildId: t,
      returnChannelId: n
    }))
  }, [t, n]);
  return (0, a.jsx)("div", {
    className: u.container,
    children: (0, a.jsxs)("div", {
      className: u.explainerContainer,
      children: [(0, a.jsx)(i.Text, {
        variant: "text-md/normal",
        children: o.default.Messages.ONBOARDING_ERROR_PAGE_TEXT
      }), (0, a.jsx)(i.Button, {
        onClick: d,
        children: (0, a.jsx)(i.Text, {
          variant: "text-md/medium",
          children: o.default.Messages.START_ONBOARDING
        })
      })]
    })
  })
}