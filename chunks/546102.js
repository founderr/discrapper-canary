"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("393414"),
  o = n("305961"),
  u = n("554054"),
  d = n("831588"),
  c = n("315102"),
  f = n("549103"),
  E = n("50926"),
  h = n("526253"),
  _ = n("567054"),
  C = n("982527"),
  I = n("444752"),
  S = n("437942"),
  p = n("267235"),
  m = n("49111"),
  T = n("289382"),
  g = n("782340"),
  A = n("936791"),
  N = e => {
    var t;
    let {
      guildId: n,
      inviteCode: N
    } = e, [R, v] = s.useState(T.WaveStates.INITIAL), O = (0, l.useStateFromStores)([h.default], () => h.default.get(n)), L = (0, l.useStateFromStores)([C.default], () => C.default.getRequest(n)), M = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(n)), {
      hasFetchedRequestToJoinGuilds: P,
      guildPreviewDisabled: D
    } = (0, l.useStateFromStoresObject)([C.default], () => ({
      hasFetchedRequestToJoinGuilds: C.default.hasFetchedRequestToJoinGuilds,
      guildPreviewDisabled: C.default.getJoinRequestGuild(n)
    }));
    s.useEffect(() => {
      null != M && (0, r.transitionTo)(m.Routes.CHANNEL(n))
    }, [M, n]), s.useEffect(() => {
      !P && f.default.fetchRequestToJoinGuilds()
    }, [P]);
    let y = s.useCallback(e => {
        v(t => Math.max(t, e))
      }, []),
      x = (e, t) => () => {
        (0, i.openModal)(n => (0, a.jsx)(i.ConfirmModal, {
          header: g.default.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
          cancelText: g.default.Messages.NEVERMIND,
          onConfirm: t,
          confirmText: g.default.Messages.YES_TEXT,
          confirmButtonColor: i.Button.Colors.RED,
          ...n,
          children: (0, a.jsx)(i.Text, {
            variant: "text-sm/normal",
            color: "header-secondary",
            children: e
          })
        }))
      },
      b = async e => {
        await E.default.submitVerificationForm(n, e)
      }, U = () => {
        f.default.resetGuildJoinRequest(n)
      }, G = x(g.default.Messages.LEAVE_SERVER_BODY.format({
        name: null == M ? void 0 : M.toString()
      }), () => {
        v(Math.max(R, T.WaveStates.FILLING)), f.default.removeGuildJoinRequest(n), (0, r.transitionTo)(m.Routes.ME)
      }), j = (null == O ? void 0 : null === (t = O.guild) || void 0 === t ? void 0 : t.splash) != null ? c.default.getGuildSplashURL({
        id: O.guild.id,
        splash: O.guild.splash
      }) : (0, d.getArtForPath)();
    return (0, a.jsx)("div", {
      className: A.page,
      children: (0, a.jsxs)(u.default, {
        embedded: !0,
        splash: j,
        waveState: R,
        showLogo: !1,
        updateWaveState: y,
        children: [(0, a.jsx)("div", {
          className: A.dragRegion
        }), (0, a.jsx)("div", {
          className: A.contentWrapper,
          children: (() => {
            switch (null == L ? void 0 : L.applicationStatus) {
              case _.GuildJoinRequestApplicationStatuses.SUBMITTED:
                return (0, a.jsx)(S.default, {
                  onCancel: x(g.default.Messages.MEMBER_VERIFICATION_CANCEL_PENDING_APPLICATION_MODAL_TITLE, U),
                  onLeave: G,
                  guild: D
                });
              case _.GuildJoinRequestApplicationStatuses.REJECTED:
                return (0, a.jsx)(I.default, {
                  reapplyText: g.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                  onReapply: U,
                  confirmText: g.default.Messages.LEAVE_SERVER,
                  onConfirm: G,
                  rejectionReason: null == L ? void 0 : L.rejectionReason,
                  guild: D
                });
              default:
                return (0, a.jsx)(p.default, {
                  guildId: n,
                  inviteCode: N,
                  onComplete: b
                })
            }
          })()
        })]
      })
    })
  }