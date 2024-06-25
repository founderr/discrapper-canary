n.d(t, {
  T: function() {
    return g
  }
}), n(47120);
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(545594),
  r = n(314897),
  o = n(271383),
  c = n(373791),
  u = n(322937),
  d = n(134049),
  h = n(893732),
  m = n(590433),
  E = n(689938),
  p = n(327820);

function g(e) {
  let {
    guild: t,
    disabledUntil: n
  } = e, [g, f] = (0, d.i)(t.id), C = (0, i.e7)([o.ZP, r.default], () => o.ZP.getMember(t.id, r.default.getId()), [t.id]);
  return (0, u.$)(C), (0, l.jsxs)("div", {
    children: [g ? (0, l.jsx)(h.Z, {
      onClose: () => f(t.id),
      guildName: t.name
    }) : null, (0, l.jsx)(a.i, {
      bannerIcon: (0, l.jsx)(s.ClockWarningIcon, {
        size: "md",
        color: "currentColor",
        className: p.bannerIcon
      }),
      bannerHeader: E.Z.Messages.GUILD_COMMUNICATION_DISABLED_NOTICE_HEADER,
      bannerSubtext: E.Z.Messages.GUILD_COMMUNICATION_DISABLED_CHAT_NOTICE_DESCRIPTION.format({
        link: m.cu
      }),
      containerStyles: p.bannerContainer,
      headerStyles: p.bannerHeader,
      children: (0, l.jsx)(s.Text, {
        variant: "text-sm/semibold",
        children: (0, l.jsx)(c.Z, {
          deadline: new Date(n),
          showUnits: !0,
          stopAtOneSec: !0
        })
      })
    })]
  })
}