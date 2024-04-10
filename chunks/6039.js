"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("703656"),
  o = n("430824"),
  u = n("612744"),
  d = n("449934"),
  c = n("768581"),
  f = n("693546"),
  E = n("863249"),
  h = n("944163"),
  _ = n("246364"),
  C = n("937111"),
  m = n("523924"),
  S = n("390500"),
  I = n("200305"),
  p = n("981631"),
  T = n("756286"),
  g = n("689938"),
  N = n("165069");
t.default = e => {
  var t;
  let n, A;
  let {
    guildId: v,
    inviteCode: R
  } = e, [O, L] = s.useState(T.WaveStates.INITIAL), P = (0, l.useStateFromStores)([h.default], () => h.default.get(v)), M = (0, l.useStateFromStores)([C.default], () => C.default.getRequest(v)), y = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(v)), {
    hasFetchedRequestToJoinGuilds: x,
    guildPreviewDisabled: D
  } = (0, l.useStateFromStoresObject)([C.default], () => ({
    hasFetchedRequestToJoinGuilds: C.default.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: C.default.getJoinRequestGuild(v)
  }));
  s.useEffect(() => {
    null != y && (0, r.transitionTo)(p.Routes.CHANNEL(v))
  }, [y, v]), s.useEffect(() => {
    !x && f.default.fetchRequestToJoinGuilds()
  }, [x]);
  let b = s.useCallback(e => {
      L(t => Math.max(t, e))
    }, []),
    U = async e => {
      await E.default.submitVerificationForm(v, e)
    }, j = () => {
      f.default.resetGuildJoinRequest(v)
    };
  let G = (n = g.default.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({
      name: null == D ? void 0 : D.toString()
    }), A = () => {
      L(Math.max(O, T.WaveStates.FILLING)), f.default.removeGuildJoinRequest(v), (0, r.transitionTo)(p.Routes.ME)
    }, () => {
      (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
        header: g.default.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
        cancelText: g.default.Messages.NEVERMIND,
        onConfirm: A,
        confirmText: g.default.Messages.YES_TEXT,
        confirmButtonColor: i.Button.Colors.RED,
        ...e,
        children: (0, a.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: n
        })
      }))
    }),
    w = (null == P ? void 0 : null === (t = P.guild) || void 0 === t ? void 0 : t.splash) != null ? c.default.getGuildSplashURL({
      id: P.guild.id,
      splash: P.guild.splash
    }) : (0, d.getArtForPath)();
  return (0, a.jsx)("div", {
    className: N.page,
    children: (0, a.jsxs)(u.default, {
      embedded: !0,
      splash: w,
      waveState: O,
      showLogo: !1,
      updateWaveState: b,
      children: [(0, a.jsx)("div", {
        className: N.dragRegion
      }), (0, a.jsx)("div", {
        className: N.contentWrapper,
        children: (() => {
          switch (null == M ? void 0 : M.applicationStatus) {
            case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
              return (0, a.jsx)(S.default, {
                onWithdrawApplication: G,
                guild: D
              });
            case _.GuildJoinRequestApplicationStatuses.REJECTED:
              return (0, a.jsx)(m.default, {
                reapplyText: g.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                onReapply: j,
                confirmText: g.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
                onWithdrawApplication: G,
                rejectionReason: null == M ? void 0 : M.rejectionReason,
                guild: D
              });
            default:
              return (0, a.jsx)(I.default, {
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