n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(442837),
  o = n(481060),
  c = n(749210),
  u = n(703656),
  d = n(430824),
  E = n(914010),
  _ = n(900849),
  I = n(41776),
  T = n(981631),
  m = n(689938),
  N = n(595708),
  h = n(40578);
t.Z = () => {
  let e = (0, r.e7)([E.Z], () => E.Z.getGuildId(), []),
    t = (0, r.e7)([d.Z], () => d.Z.getGuild(e), [e]),
    n = (0, r.e7)([I.Z], () => I.Z.getHistorySnapshot(), []),
    [l, C] = i.useState(!1);
  if (null == t) return null;
  let S = async () => {
    C(!0);
    try {
      _.mT(t.id), await c.Z.joinGuild(t.id, {
        source: T.vtS.NOTICE_BAR
      })
    } catch {
      C(!1)
    }
  };
  return (0, s.jsxs)("div", {
    className: a()(N.notice, h.notice),
    children: [(0, s.jsxs)(o.Button, {
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.WHITE,
      size: o.Button.Sizes.NONE,
      className: a()(N.button, N.back),
      innerClassName: N.iconButton,
      onClick: () => {
        let e = (0, u.s1)();
        null != n && null != n.location ? (0, u.dL)({
          ...n.location
        }) : e.goBack()
      },
      children: [(0, s.jsx)(o.ArrowSmallLeftIcon, {
        size: "xs",
        color: "currentColor",
        className: N.arrow
      }), m.Z.Messages.BACK]
    }), (0, s.jsx)(o.Text, {
      className: N.header,
      variant: "text-sm/normal",
      children: m.Z.Messages.LURKER_MODE_NAG_BAR_HEADER
    }), (0, s.jsx)(o.Button, {
      className: N.button,
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.WHITE,
      size: o.Button.Sizes.NONE,
      submitting: l,
      onClick: S,
      children: m.Z.Messages.LURKER_MODE_NAG_BAR_BUTTON.format({
        guild: t.name
      })
    })]
  })
}