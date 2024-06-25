n(653041), n(47120);
var s = n(735250);
n(470079);
var i = n(120356),
  l = n.n(i),
  a = n(266067),
  r = n(442837),
  o = n(481060),
  c = n(430824),
  u = n(914010),
  d = n(693546),
  E = n(305325),
  _ = n(246364),
  I = n(937111),
  T = n(981631),
  m = n(176505),
  N = n(689938),
  h = n(415706),
  C = n(40578);
t.Z = () => {
  var e, t;
  let i = (0, r.e7)([u.Z], () => u.Z.getGuildId(), []),
    S = (0, r.e7)([c.Z], () => c.Z.getGuild(i), [i]),
    A = (0, r.e7)([I.Z], () => null != i ? I.Z.getRequest(i) : null, [i]),
    g = (0, a.TH)(),
    p = (null === (e = (0, a.LX)(g.pathname, T.Z5c.CHANNEL(null == S ? void 0 : S.id, m.oC.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
  if (null == S || !S.hasVerificationGate() || p) return null;
  let f = null !== (t = null == A ? void 0 : A.applicationStatus) && void 0 !== t ? t : _.wB.STARTED,
    R = null,
    O = null,
    M = null,
    x = [h.notice, C.notice];
  switch (f) {
    case _.wB.SUBMITTED:
      R = N.Z.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, O = N.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, M = () => {
        (0, o.openModal)(e => (0, s.jsx)(o.ConfirmModal, {
          header: N.Z.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
          confirmText: N.Z.Messages.CONFIRM,
          cancelText: N.Z.Messages.CANCEL,
          onConfirm: () => d.Z.removeGuildJoinRequest(S.id),
          confirmButtonColor: o.Button.Colors.BRAND,
          ...e,
          children: (0, s.jsx)(o.Text, {
            variant: "text-md/normal",
            children: N.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
          })
        }))
      };
      break;
    case _.wB.REJECTED:
      R = N.Z.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, O = N.Z.Messages.MEMBER_VERIFICATION_LEARN_MORE, M = () => {
        (0, o.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("3378")]).then(n.bind(n, 76075));
          return t => (0, s.jsx)(e, {
            guildId: S.id,
            ...t
          })
        })
      }, x.push(h.error);
      break;
    default:
      R = N.Z.Messages.MEMBER_VERIFICATION_NOTICE_TEXT, O = N.Z.Messages.MEMBER_VERIFICATION_NOTICE_CTA, M = () => {
        (0, E.hk)(S.id)
      }
  }
  return (0, s.jsxs)("div", {
    className: l()(...x),
    children: [(0, s.jsx)(o.Text, {
      className: h.header,
      variant: "text-sm/normal",
      children: R
    }), (0, s.jsx)(o.Button, {
      className: h.button,
      look: o.Button.Looks.OUTLINED,
      color: o.Button.Colors.WHITE,
      size: o.Button.Sizes.NONE,
      onClick: M,
      children: O
    })]
  })
}