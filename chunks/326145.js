"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("745752"),
  r = a("17181"),
  o = a("689938"),
  u = a("732040");

function d(e) {
  let {
    guildId: t,
    channelId: a
  } = e, d = s.useCallback(() => {
    null != t && null != a && ((0, i.startOnboarding)(t), (0, r.default)({
      guildId: t,
      returnChannelId: a
    }))
  }, [t, a]);
  return (0, n.jsx)("div", {
    className: u.container,
    children: (0, n.jsxs)("div", {
      className: u.explainerContainer,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: o.default.Messages.ONBOARDING_ERROR_PAGE_TEXT
      }), (0, n.jsx)(l.Button, {
        onClick: d,
        children: (0, n.jsx)(l.Text, {
          variant: "text-md/medium",
          children: o.default.Messages.START_ONBOARDING
        })
      })]
    })
  })
}