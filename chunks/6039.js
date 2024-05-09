"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("442837"),
  l = n("481060"),
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
  p = n("200305"),
  g = n("981631"),
  I = n("756286"),
  T = n("689938"),
  A = n("531862");
t.default = e => {
  var t;
  let n, N;
  let {
    guildId: v,
    inviteCode: R
  } = e, [L, O] = s.useState(I.WaveStates.INITIAL), M = (0, i.useStateFromStores)([h.default], () => h.default.get(v)), y = (0, i.useStateFromStores)([C.default], () => C.default.getRequest(v)), P = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(v)), {
    hasFetchedRequestToJoinGuilds: x,
    guildPreviewDisabled: D
  } = (0, i.useStateFromStoresObject)([C.default], () => ({
    hasFetchedRequestToJoinGuilds: C.default.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: C.default.getJoinRequestGuild(v)
  }));
  s.useEffect(() => {
    null != P && (0, r.transitionTo)(g.Routes.CHANNEL(v))
  }, [P, v]), s.useEffect(() => {
    !x && f.default.fetchRequestToJoinGuilds()
  }, [x]);
  let b = s.useCallback(e => {
      O(t => Math.max(t, e))
    }, []),
    U = async e => {
      await E.default.submitVerificationForm(v, e)
    }, j = () => {
      f.default.resetGuildJoinRequest(v)
    };
  let G = (n = T.default.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({
      name: null == D ? void 0 : D.toString()
    }), N = () => {
      O(Math.max(L, I.WaveStates.FILLING)), f.default.removeGuildJoinRequest(v), (0, r.transitionTo)(g.Routes.ME)
    }, () => {
      (0, l.openModal)(e => (0, a.jsx)(l.ConfirmModal, {
        header: T.default.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
        cancelText: T.default.Messages.NEVERMIND,
        onConfirm: N,
        confirmText: T.default.Messages.YES_TEXT,
        confirmButtonColor: l.Button.Colors.RED,
        ...e,
        children: (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: n
        })
      }))
    }),
    k = (null == M ? void 0 : null === (t = M.guild) || void 0 === t ? void 0 : t.splash) != null ? c.default.getGuildSplashURL({
      id: M.guild.id,
      splash: M.guild.splash
    }) : (0, d.getArtForPath)();
  return (0, a.jsx)("div", {
    className: A.page,
    children: (0, a.jsxs)(u.default, {
      embedded: !0,
      splash: k,
      waveState: L,
      showLogo: !1,
      updateWaveState: b,
      children: [(0, a.jsx)("div", {
        className: A.dragRegion
      }), (0, a.jsx)("div", {
        className: A.contentWrapper,
        children: (() => {
          switch (null == y ? void 0 : y.applicationStatus) {
            case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
              return (0, a.jsx)(S.default, {
                onWithdrawApplication: G,
                guild: D
              });
            case _.GuildJoinRequestApplicationStatuses.REJECTED:
              return (0, a.jsx)(m.default, {
                reapplyText: T.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                onReapply: j,
                confirmText: T.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
                onWithdrawApplication: G,
                rejectionReason: null == y ? void 0 : y.rejectionReason,
                guild: D
              });
            default:
              return (0, a.jsx)(p.default, {
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