n.d(t, {
  f: function() {
    return S
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(541716),
  o = n(419922),
  c = n(665906),
  u = n(271383),
  d = n(430824),
  E = n(496675),
  _ = n(594174),
  I = n(838440),
  T = n(779139),
  m = n(981631),
  N = n(689938),
  h = n(18716);
let C = e => {
    let {
      channel: t,
      message: n
    } = e, [l, c] = i.useState(!1), u = (0, T.y6)(n.id), d = i.useCallback(() => {
      (0, I.v)({
        type: r.I.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: s
        } = e;
        if (!!s)(0, T.TZ)(t, n, u.id)
      })
    }, [t, n, u]);
    return (0, s.jsx)("div", {
      className: h.welcomeCTA,
      children: (0, s.jsxs)(a.Button, {
        className: h.welcomeCTAButtonOuter,
        innerClassName: h.welcomeCTAButton,
        color: a.ButtonColors.PRIMARY,
        onMouseEnter: () => c(!0),
        onMouseLeave: () => c(!1),
        onClick: d,
        children: [(0, s.jsx)(o.ZP, {
          className: h.welcomeCTASticker,
          isInteracting: l,
          sticker: u,
          size: 28
        }), N.Z.Messages.WELCOME_CTA_LABEL]
      })
    })
  },
  S = e => {
    let {
      message: t,
      channel: n
    } = e, i = n.getGuildId(), a = (0, l.e7)([_.default, E.Z, d.Z, u.ZP], () => {
      var e;
      let s = _.default.getCurrentUser(),
        l = (0, c.xl)(n),
        a = E.Z.can(m.Plq.SEND_MESSAGES, n),
        r = null != i && null != s && (null === (e = u.ZP.getMember(i, s.id)) || void 0 === e ? void 0 : e.isPending),
        o = t.author.bot,
        I = d.Z.getGuild(i),
        T = null != I && (I.systemChannelFlags & m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return a && !l && !r && !o && T
    });
    return null != i && a ? (0, s.jsx)(C, {
      message: t,
      channel: n
    }) : null
  }