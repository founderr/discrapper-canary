n.d(t, {
  T: function() {
    return f
  }
});
var l = n(735250),
  i = n(470079),
  s = n(91192),
  r = n(442837),
  a = n(481060),
  o = n(44315),
  u = n(563534),
  c = n(846121),
  d = n(703656),
  h = n(259580),
  p = n(981631),
  g = n(176505),
  m = n(689938),
  C = n(909398);

function E(e, t) {
  return (0, l.jsx)(a.Text, {
    variant: "text-xs/bold",
    color: "text-normal",
    children: e
  }, t)
}
let f = i.memo(function(e) {
  let {
    guild: t
  } = e, n = (0, r.e7)([u.Z], () => u.Z.getNewMemberActions(t.id), [t.id]), f = (0, r.e7)([c.Z], () => c.Z.getCompletedActions(t.id)), _ = i.useMemo(() => {
    if (null == n || null == f) return 0;
    let e = 0;
    return n.forEach(t => {
      null != f[t.channelId] && e++
    }), e
  }, [f, n]), I = null == n ? 0 : n.length, N = (0, s.JA)("progress-bar-".concat(t.id));
  return (0, l.jsxs)("li", {
    children: [(0, l.jsxs)(a.Clickable, {
      ...N,
      role: "button",
      focusProps: {
        offset: {
          right: 4
        }
      },
      className: C.progressBarContainer,
      onClick: function() {
        (0, d.uL)(p.Z5c.CHANNEL(t.id, g.oC.GUILD_HOME))
      },
      children: [(0, l.jsxs)("div", {
        className: C.progressBarText,
        children: [(0, l.jsx)(a.Heading, {
          variant: "heading-sm/bold",
          children: m.Z.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_GET_STARTED
        }), (0, l.jsxs)("div", {
          className: C.rightContainer,
          children: [(0, l.jsx)(a.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: C.rightText,
            children: m.Z.Messages.GUILD_ONBOARDING_NEW_MEMBER_PROGRESS_BAR_COUNTER.format({
              numberHook: E,
              total: I.toString(),
              completed: _.toString()
            })
          }), (0, l.jsx)(h.Z, {
            className: C.arrow,
            width: 16,
            height: 16,
            direction: h.Z.Directions.RIGHT
          })]
        })]
      }), (0, l.jsx)(a.Progress, {
        className: C.progressBar,
        foregroundGradientColor: [(0, o.Lq)(p.Ilk.GREEN_300), (0, o.Lq)(p.Ilk.GREEN_230)],
        percent: _ / I * 100 + 3,
        animate: !0
      })]
    }), (0, l.jsx)("div", {
      role: "separator",
      className: C.divider
    })]
  })
})