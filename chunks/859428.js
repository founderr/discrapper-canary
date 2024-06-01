"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("749210"),
  d = n("703656"),
  c = n("430824"),
  E = n("914010"),
  f = n("824717"),
  _ = n("900849"),
  T = n("41776"),
  m = n("981631"),
  I = n("689938"),
  N = n("254405"),
  p = n("14201");
t.default = () => {
  let e = (0, r.useStateFromStores)([E.default], () => E.default.getGuildId(), []),
    t = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(e), [e]),
    n = (0, r.useStateFromStores)([T.default], () => T.default.getHistorySnapshot(), []),
    [l, S] = a.useState(!1);
  if (null == t) return null;
  let C = async () => {
    S(!0);
    try {
      _.trackGuildJoinClicked(t.id), await u.default.joinGuild(t.id, {
        source: m.JoinGuildSources.NOTICE_BAR
      })
    } catch {
      S(!1)
    }
  };
  return (0, s.jsxs)("div", {
    className: i()(N.notice, p.notice),
    children: [(0, s.jsxs)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.WHITE,
      size: o.Button.Sizes.NONE,
      className: i()(N.button, N.back),
      innerClassName: N.iconButton,
      onClick: () => {
        let e = (0, d.getHistory)();
        null != n && null != n.location ? (0, d.replaceWith)({
          ...n.location
        }) : e.goBack()
      },
      children: [(0, s.jsx)(f.default, {
        width: 16,
        height: 16,
        className: N.arrow
      }), I.default.Messages.BACK]
    }), (0, s.jsx)(o.Text, {
      className: N.header,
      variant: "text-sm/normal",
      children: I.default.Messages.LURKER_MODE_NAG_BAR_HEADER
    }), (0, s.jsx)(o.Button, {
      className: N.button,
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.WHITE,
      size: o.Button.Sizes.NONE,
      submitting: l,
      onClick: C,
      children: I.default.Messages.LURKER_MODE_NAG_BAR_BUTTON.format({
        guild: t.name
      })
    })]
  })
}