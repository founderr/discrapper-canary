"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  r = a("703656"),
  o = a("430824"),
  u = a("612744"),
  d = a("449934"),
  c = a("768581"),
  f = a("693546"),
  E = a("863249"),
  h = a("944163"),
  _ = a("246364"),
  C = a("937111"),
  m = a("523924"),
  S = a("390500"),
  I = a("200305"),
  p = a("981631"),
  T = a("756286"),
  g = a("689938"),
  A = a("165069");
t.default = e => {
  var t;
  let a, N;
  let {
    guildId: v,
    inviteCode: R
  } = e, [O, L] = s.useState(T.WaveStates.INITIAL), M = (0, l.useStateFromStores)([h.default], () => h.default.get(v)), P = (0, l.useStateFromStores)([C.default], () => C.default.getRequest(v)), x = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(v)), {
    hasFetchedRequestToJoinGuilds: y,
    guildPreviewDisabled: D
  } = (0, l.useStateFromStoresObject)([C.default], () => ({
    hasFetchedRequestToJoinGuilds: C.default.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: C.default.getJoinRequestGuild(v)
  }));
  s.useEffect(() => {
    null != x && (0, r.transitionTo)(p.Routes.CHANNEL(v))
  }, [x, v]), s.useEffect(() => {
    !y && f.default.fetchRequestToJoinGuilds()
  }, [y]);
  let b = s.useCallback(e => {
      L(t => Math.max(t, e))
    }, []),
    U = async e => {
      await E.default.submitVerificationForm(v, e)
    }, j = () => {
      f.default.resetGuildJoinRequest(v)
    };
  let G = (a = g.default.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({
      name: null == D ? void 0 : D.toString()
    }), N = () => {
      L(Math.max(O, T.WaveStates.FILLING)), f.default.removeGuildJoinRequest(v), (0, r.transitionTo)(p.Routes.ME)
    }, () => {
      (0, i.openModal)(e => (0, n.jsx)(i.ConfirmModal, {
        header: g.default.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
        cancelText: g.default.Messages.NEVERMIND,
        onConfirm: N,
        confirmText: g.default.Messages.YES_TEXT,
        confirmButtonColor: i.Button.Colors.RED,
        ...e,
        children: (0, n.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: a
        })
      }))
    }),
    w = (null == M ? void 0 : null === (t = M.guild) || void 0 === t ? void 0 : t.splash) != null ? c.default.getGuildSplashURL({
      id: M.guild.id,
      splash: M.guild.splash
    }) : (0, d.getArtForPath)();
  return (0, n.jsx)("div", {
    className: A.page,
    children: (0, n.jsxs)(u.default, {
      embedded: !0,
      splash: w,
      waveState: O,
      showLogo: !1,
      updateWaveState: b,
      children: [(0, n.jsx)("div", {
        className: A.dragRegion
      }), (0, n.jsx)("div", {
        className: A.contentWrapper,
        children: (() => {
          switch (null == P ? void 0 : P.applicationStatus) {
            case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
              return (0, n.jsx)(S.default, {
                onWithdrawApplication: G,
                guild: D
              });
            case _.GuildJoinRequestApplicationStatuses.REJECTED:
              return (0, n.jsx)(m.default, {
                reapplyText: g.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                onReapply: j,
                confirmText: g.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
                onWithdrawApplication: G,
                rejectionReason: null == P ? void 0 : P.rejectionReason,
                guild: D
              });
            default:
              return (0, n.jsx)(I.default, {
                guildId: v,
                inviteCode: R,
                onComplete: U
              })
          }
        })()
      })]
    })
  })
}