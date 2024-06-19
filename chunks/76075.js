s.r(n);
var a = s(735250);
s(470079);
var l = s(442837),
  i = s(481060),
  t = s(100527),
  o = s(970606),
  r = s(271383),
  c = s(430824),
  u = s(594174),
  d = s(153124),
  E = s(693546),
  I = s(305325),
  R = s(937111),
  N = s(702286),
  _ = s(523924),
  C = s(981631),
  m = s(689938);
n.default = function(e) {
  let {
    guildId: n,
    transitionState: s,
    ...A
  } = e, h = (0, d.Dt)(), v = (0, l.e7)([R.Z], () => R.Z.getRequest(n), [n]), M = (0, l.e7)([c.Z], () => c.Z.getGuild(n), [n]), T = (0, l.e7)([u.default], () => {
    var e;
    return null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id
  }), Z = (0, l.e7)([r.ZP], () => null != T ? r.ZP.getMember(n, T) : null, [T, n]), g = async () => {
    var e;
    if (null !== (e = null == M ? void 0 : M.hasFeature(C.oNc.CLAN)) && void 0 !== e && e && (0, o.Vr)({
        guildId: n,
        source: t.Z.CLAN_REAPPLY
      }), null == M ? void 0 : M.hasFeature(C.oNc.PREVIEW_ENABLED)) {
      try {
        await E.Z.removeGuildJoinRequest(n)
      } catch (e) {
        throw e
      }
      A.onClose(), (0, I.hk)(n)
    } else E.Z.resetGuildJoinRequest(n)
  };
  return (0, a.jsx)(i.ModalRoot, {
    size: i.ModalSize.DYNAMIC,
    transitionState: s,
    "aria-labelledby": h,
    children: (0, a.jsx)(_.Z, {
      ...A,
      headerId: h,
      reapplyText: m.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
      onReapply: g,
      confirmText: m.Z.Messages.OKAY,
      onWithdrawApplication: () => {
        A.onClose(), null == Z && (0, N.Z)()
      },
      rejectionReason: null == v ? void 0 : v.rejectionReason,
      guild: M
    })
  })
}