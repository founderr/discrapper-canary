"use strict";
n.r(t), n.d(t, {
  GuildNewMemberActionsProgressBar: function() {
    return E
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("924826"),
  i = n("442837"),
  r = n("481060"),
  o = n("44315"),
  u = n("563534"),
  d = n("846121"),
  c = n("703656"),
  f = n("259580"),
  h = n("981631"),
  m = n("176505"),
  C = n("689938"),
  p = n("590575");

function g(e, t) {
  return (0, l.jsx)(r.Text, {
    variant: "text-xs/bold",
    color: "text-normal",
    children: e
  }, t)
}
let E = a.memo(function(e) {
  let {
    guild: t
  } = e, n = (0, i.useStateFromStores)([u.default], () => u.default.getNewMemberActions(t.id), [t.id]), E = (0, i.useStateFromStores)([d.default], () => d.default.getCompletedActions(t.id)), _ = a.useMemo(() => {
    if (null == n || null == E) return 0;
    let e = 0;
    return n.forEach(t => {
      null != E[t.channelId] && e++
    }), e
  }, [E, n]), S = null == n ? 0 : n.length, I = (0, s.useListItem)("progress-bar-".concat(t.id));
  return (0, l.jsxs)("li", {
    children: [(0, l.jsxs)(r.Clickable, {
      ...I,
      role: "button",
      focusProps: {
        offset: {
          right: 4
        }
      },
      className: p.progressBarContainer,
      onClick: function() {
        (0, c.transitionTo)(h.Routes.CHANNEL(t.id, m.StaticChannelRoute.GUILD_HOME))
      },
      children: [(0, l.jsxs)("div", {
        className: p.progressBarText,
        children: [(0, l.jsx)(r.Heading, {
          variant: "heading-sm/bold",
          children: C.default.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_GET_STARTED
        }), (0, l.jsxs)("div", {
          className: p.rightContainer,
          children: [(0, l.jsx)(r.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: p.rightText,
            children: C.default.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_COUNTER.format({
              numberHook: g,
              total: S.toString(),
              completed: _.toString()
            })
          }), (0, l.jsx)(f.default, {
            className: p.arrow,
            width: 16,
            height: 16,
            direction: f.default.Directions.RIGHT
          })]
        })]
      }), (0, l.jsx)(r.Progress, {
        className: p.progressBar,
        foregroundGradientColor: [(0, o.getColor)(h.Color.GREEN_300), (0, o.getColor)(h.Color.GREEN_230)],
        percent: _ / S * 100 + 3,
        animate: !0
      })]
    }), (0, l.jsx)("div", {
      role: "separator",
      className: p.divider
    })]
  })
})