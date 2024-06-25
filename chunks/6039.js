n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(523924),
  g = n(390500),
  p = n(200305),
  N = n(981631),
  S = n(898625),
  C = n(689938),
  A = n(436726);
t.Z = e => {
  var t;
  let n, f;
  let {
    guildId: Z,
    inviteCode: L
  } = e, [O, v] = i.useState(S.hO.INITIAL), R = (0, l.e7)([_.Z], () => _.Z.get(Z)), P = (0, l.e7)([m.Z], () => m.Z.getRequest(Z)), x = (0, l.e7)([c.Z], () => c.Z.getGuild(Z)), {
    hasFetchedRequestToJoinGuilds: M,
    guildPreviewDisabled: D
  } = (0, l.cj)([m.Z], () => ({
    hasFetchedRequestToJoinGuilds: m.Z.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: m.Z.getJoinRequestGuild(Z)
  }));
  i.useEffect(() => {
    null != x && (0, o.uL)(N.Z5c.CHANNEL(Z))
  }, [x, Z]), i.useEffect(() => {
    !M && E.Z.fetchRequestToJoinGuilds()
  }, [M]);
  let b = i.useCallback(e => {
      v(t => Math.max(t, e))
    }, []),
    y = async e => {
      await h.Z.submitVerificationForm(Z, e)
    }, j = () => {
      E.Z.resetGuildJoinRequest(Z)
    };
  let U = (n = C.Z.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({
      name: null == D ? void 0 : D.toString()
    }), f = () => {
      v(Math.max(O, S.hO.FILLING)), E.Z.removeGuildJoinRequest(Z), (0, o.uL)(N.Z5c.ME)
    }, () => {
      (0, a.openModal)(e => (0, s.jsx)(a.ConfirmModal, {
        header: C.Z.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
        cancelText: C.Z.Messages.NEVERMIND,
        onConfirm: f,
        confirmText: C.Z.Messages.YES_TEXT,
        confirmButtonColor: a.Button.Colors.RED,
        ...e,
        children: (0, s.jsx)(a.Text, {
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
  return (0, s.jsx)("div", {
    className: A.page,
    children: (0, s.jsxs)(r.Z, {
      embedded: !0,
      splash: G,
      waveState: O,
      showLogo: !1,
      updateWaveState: b,
      children: [(0, s.jsx)("div", {
        className: A.dragRegion
      }), (0, s.jsx)("div", {
        className: A.contentWrapper,
        children: (() => {
          switch (null == P ? void 0 : P.applicationStatus) {
            case I.wB.SUBMITTED:
              return (0, s.jsx)(g.Z, {
                onWithdrawApplication: U,
                guild: D
              });
            case I.wB.REJECTED:
              return (0, s.jsx)(T.Z, {
                reapplyText: C.Z.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                onReapply: j,
                confirmText: C.Z.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
                onWithdrawApplication: U,
                rejectionReason: null == P ? void 0 : P.rejectionReason,
                guild: D
              });
            default:
              return (0, s.jsx)(p.Z, {
                guildId: Z,
                inviteCode: L,
                onComplete: y
              })
          }
        })()
      })]
    })
  })
}