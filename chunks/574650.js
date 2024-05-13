"use strict";
n.r(t), n("653041"), n("47120");
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("266067"),
  r = n("613828"),
  o = n("442837"),
  u = n("481060"),
  d = n("430824"),
  c = n("914010"),
  E = n("693546"),
  f = n("305325"),
  _ = n("246364"),
  T = n("937111"),
  I = n("981631"),
  m = n("176505"),
  N = n("689938"),
  p = n("261701"),
  S = n("14201");
t.default = () => {
  var e, t;
  let a = (0, o.useStateFromStores)([c.default], () => c.default.getGuildId(), []),
    C = (0, o.useStateFromStores)([d.default], () => d.default.getGuild(a), [a]),
    A = (0, o.useStateFromStores)([T.default], () => null != a ? T.default.getRequest(a) : null, [a]),
    h = (0, r.useLocation)(),
    g = (null === (e = (0, i.matchPath)(h.pathname, I.Routes.CHANNEL(null == C ? void 0 : C.id, m.StaticChannelRoute.GUILD_ONBOARDING))) || void 0 === e ? void 0 : e.isExact) === !0;
  if (null == C || !C.hasVerificationGate() || g) return null;
  let M = null !== (t = null == A ? void 0 : A.applicationStatus) && void 0 !== t ? t : _.GuildJoinRequestApplicationStatuses.STARTED,
    O = null,
    R = null,
    v = null,
    L = [p.notice, S.notice];
  switch (M) {
    case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
      O = N.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE, R = N.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION, v = () => {
        (0, u.openModal)(e => (0, s.jsx)(u.ConfirmModal, {
          header: N.default.Messages.MODIFY_FOLLOWED_NEWS_HEADER,
          confirmText: N.default.Messages.CONFIRM,
          cancelText: N.default.Messages.CANCEL,
          onConfirm: () => E.default.removeGuildJoinRequest(C.id),
          confirmButtonColor: u.Button.Colors.BRAND,
          ...e,
          children: (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: N.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION_SUBTITLE
          })
        }))
      };
      break;
    case _.GuildJoinRequestApplicationStatuses.REJECTED:
      O = N.default.Messages.MEMBER_VERIFICATION_REJECTED_TITLE, R = N.default.Messages.MEMBER_VERIFICATION_LEARN_MORE, v = () => {
        (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("3378")]).then(n.bind(n, "76075"));
          return t => (0, s.jsx)(e, {
            guildId: C.id,
            ...t
          })
        })
      }, L.push(p.error);
      break;
    default:
      O = N.default.Messages.MEMBER_VERIFICATION_NOTICE_TEXT, R = N.default.Messages.MEMBER_VERIFICATION_NOTICE_CTA, v = () => {
        (0, f.openMemberVerificationModal)(C.id)
      }
  }
  return (0, s.jsxs)("div", {
    className: l()(...L),
    children: [(0, s.jsx)(u.Text, {
      className: p.header,
      variant: "text-sm/normal",
      children: O
    }), (0, s.jsx)(u.Button, {
      className: p.button,
      look: u.Button.Looks.OUTLINED,
      color: u.Button.Colors.WHITE,
      size: u.Button.Sizes.NONE,
      onClick: v,
      children: R
    })]
  })
}