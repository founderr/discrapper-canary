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
  C = n("944163"),
  h = n("246364"),
  _ = n("937111"),
  S = n("523924"),
  m = n("390500"),
  p = n("200305"),
  I = n("981631"),
  g = n("756286"),
  T = n("689938"),
  A = n("531862");
t.default = e => {
  var t;
  let n, N;
  let {
    guildId: v,
    inviteCode: R
  } = e, [O, L] = s.useState(g.WaveStates.INITIAL), P = (0, l.useStateFromStores)([C.default], () => C.default.get(v)), y = (0, l.useStateFromStores)([_.default], () => _.default.getRequest(v)), M = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(v)), {
    hasFetchedRequestToJoinGuilds: D,
    guildPreviewDisabled: x
  } = (0, l.useStateFromStoresObject)([_.default], () => ({
    hasFetchedRequestToJoinGuilds: _.default.hasFetchedRequestToJoinGuilds,
    guildPreviewDisabled: _.default.getJoinRequestGuild(v)
  }));
  s.useEffect(() => {
    null != M && (0, r.transitionTo)(I.Routes.CHANNEL(v))
  }, [M, v]), s.useEffect(() => {
    !D && f.default.fetchRequestToJoinGuilds()
  }, [D]);
  let b = s.useCallback(e => {
      L(t => Math.max(t, e))
    }, []),
    U = async e => {
      await E.default.submitVerificationForm(v, e)
    }, j = () => {
      f.default.resetGuildJoinRequest(v)
    };
  let G = (n = T.default.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({
      name: null == x ? void 0 : x.toString()
    }), N = () => {
      L(Math.max(O, g.WaveStates.FILLING)), f.default.removeGuildJoinRequest(v), (0, r.transitionTo)(I.Routes.ME)
    }, () => {
      (0, i.openModal)(e => (0, a.jsx)(i.ConfirmModal, {
        header: T.default.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
        cancelText: T.default.Messages.NEVERMIND,
        onConfirm: N,
        confirmText: T.default.Messages.YES_TEXT,
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
    className: A.page,
    children: (0, a.jsxs)(u.default, {
      embedded: !0,
      splash: w,
      waveState: O,
      showLogo: !1,
      updateWaveState: b,
      children: [(0, a.jsx)("div", {
        className: A.dragRegion
      }), (0, a.jsx)("div", {
        className: A.contentWrapper,
        children: (() => {
          switch (null == y ? void 0 : y.applicationStatus) {
            case h.GuildJoinRequestApplicationStatuses.SUBMITTED:
              return (0, a.jsx)(m.default, {
                onWithdrawApplication: G,
                guild: x
              });
            case h.GuildJoinRequestApplicationStatuses.REJECTED:
              return (0, a.jsx)(S.default, {
                reapplyText: T.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                onReapply: j,
                confirmText: T.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
                onWithdrawApplication: G,
                rejectionReason: null == y ? void 0 : y.rejectionReason,
                guild: x
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