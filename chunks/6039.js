n(47120);
var i = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(568154),
  o = n(703656),
  c = n(430824),
  u = n(449934),
  d = n(768581),
  E = n(693546),
  h = n(863249),
  _ = n(944163),
  I = n(246364),
  m = n(937111),
  g = n(523924),
  p = n(390500),
  N = n(200305),
  T = n(981631),
  C = n(898625),
  S = n(689938),
  A = n(436726);
t.Z = e => {
  var t;
  let n, f;
  let {
    guildId: Z,
    inviteCode: v
  } = e, [L, O] = s.useState(C.hO.INITIAL), R = (0, l.e7)([_.Z], () => _.Z.get(Z)), x = (0, l.e7)([m.Z], () => m.Z.getRequest(Z)), M = (0, l.e7)([c.Z], () => c.Z.getGuild(Z)), {
    hasFetchedRequestToJoinGuilds: P,
    guildPreviewDisabled: D
  } = (0, l.cj)([m.Z], () => ({
    hasFetchedRequestToJoinGuilds: m.Z.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: m.Z.getJoinRequestGuild(Z)
  }));
  s.useEffect(() => {
    null != M && (0, o.uL)(T.Z5c.CHANNEL(Z))
  }, [M, Z]), s.useEffect(() => {
    !P && E.Z.fetchRequestToJoinGuilds()
  }, [P]);
  let b = s.useCallback(e => {
      O(t => Math.max(t, e))
    }, []),
    y = async e => {
      await h.Z.submitVerificationForm(Z, e)
    }, j = () => {
      E.Z.resetGuildJoinRequest(Z)
    };
  let U = (n = S.Z.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({
      name: null == D ? void 0 : D.toString()
    }), f = () => {
      O(Math.max(L, C.hO.FILLING)), E.Z.removeGuildJoinRequest(Z), (0, o.uL)(T.Z5c.ME)
    }, () => {
      (0, a.openModal)(e => (0, i.jsx)(a.ConfirmModal, {
        header: S.Z.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
        cancelText: S.Z.Messages.NEVERMIND,
        onConfirm: f,
        confirmText: S.Z.Messages.YES_TEXT,
        confirmButtonColor: a.Button.Colors.RED,
        ...e,
        children: (0, i.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: n
        })
      }))
    }),
    G = (null == R ? void 0 : null === (t = R.guild) || void 0 === t ? void 0 : t.splash) != null ? d.ZP.getGuildSplashURL({
      id: R.guild.id,
      splash: R.guild.splash
    }) : (0, u.gK)();
  return (0, i.jsx)("div", {
    className: A.page,
    children: (0, i.jsxs)(r.Z, {
      embedded: !0,
      splash: G,
      waveState: L,
      showLogo: !1,
      updateWaveState: b,
      children: [(0, i.jsx)("div", {
        className: A.dragRegion
      }), (0, i.jsx)("div", {
        className: A.contentWrapper,
        children: (() => {
          switch (null == x ? void 0 : x.applicationStatus) {
            case I.wB.SUBMITTED:
              return (0, i.jsx)(p.Z, {
                onWithdrawApplication: U,
                guild: D
              });
            case I.wB.REJECTED:
              return (0, i.jsx)(g.Z, {
                reapplyText: S.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                onReapply: j,
                confirmText: S.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
                onWithdrawApplication: U,
                rejectionReason: null == x ? void 0 : x.rejectionReason,
                guild: D
              });
            default:
              return (0, i.jsx)(N.Z, {
                guildId: Z,
                inviteCode: v,
                onComplete: y
              })
          }
        })()
      })]
    })
  })
}