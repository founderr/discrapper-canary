"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  i = n("447543"),
  r = n("410575"),
  o = n("906732"),
  u = n("924301"),
  d = n("11868"),
  c = n("413605"),
  E = n("451603"),
  f = n("885714"),
  _ = n("314897"),
  T = n("430824"),
  I = n("701190"),
  m = n("610699"),
  N = n("313876"),
  p = n("778333"),
  S = n("949981"),
  C = n("680668"),
  A = n("143708"),
  h = n("358595"),
  g = n("563917"),
  M = n("135845"),
  O = n("981631");

function R(e) {
  let {
    code: t,
    author: n,
    getAcceptInviteContext: R
  } = e, {
    invite: v,
    inviteError: L
  } = (0, a.useStateFromStoresObject)([I.default], () => ({
    invite: I.default.getInvite(t),
    inviteError: I.default.getInviteError(t)
  }), [t]);
  l.useEffect(() => {
    null == v && i.default.resolveInvite(t)
  }, [t]);
  let P = null != v ? v : {
      state: O.InviteStates.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: D
    } = (0, o.default)(),
    x = (0, a.useStateFromStores)([T.default], () => (null == v ? void 0 : v.guild) != null ? T.default.getGuild(v.guild.id) : null, [v]),
    y = (0, a.useStateFromStores)([_.default], () => _.default.getId()),
    U = (0, a.useStateFromStores)([u.default], () => {
      var e;
      return u.default.getGuildScheduledEvent(null === (e = P.guild_scheduled_event) || void 0 === e ? void 0 : e.id)
    }, [P]),
    j = () => {
      null != P.channel && i.default.transitionToInviteSync(P)
    },
    b = () => {
      (0, E.isAtGuildCapAndNonPremium)() ? (0, f.default)({
        analyticsSource: {
          page: O.AnalyticsPages.INVITE_EMBED
        },
        analyticsLocation: {
          page: O.AnalyticsPages.INVITE_EMBED,
          section: O.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: D
      }) : i.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: R("Invite Button Embed")
      })
    },
    G = (0, s.jsx)(C.default, {
      onTransitionToInviteChannel: j,
      onAcceptInstantInvite: b,
      currentUserId: y,
      guild: x,
      invite: P,
      author: n
    });
  switch (P.state) {
    case O.InviteStates.RESOLVING:
      G = (0, s.jsx)(h.default, {});
      break;
    case O.InviteStates.EXPIRED:
    case O.InviteStates.BANNED:
      G = (0, s.jsx)(A.default, {
        banned: P.state === O.InviteStates.BANNED,
        author: n
      });
      break;
    case O.InviteStates.ERROR:
      G = (0, s.jsx)(N.default, {
        author: n,
        inviteError: L
      });
      break;
    default:
      switch ((0, c.getInviteType)(P)) {
        case c.InviteTypes.GROUP_DM:
          G = (0, s.jsx)(S.default, {
            onTransitionToInviteChannel: j,
            onAcceptInstantInvite: b,
            currentUserId: y,
            invite: P,
            author: n
          });
          break;
        case c.InviteTypes.FRIEND:
          G = (0, s.jsx)(p.default, {
            invite: P,
            author: n,
            getAcceptInviteContext: R
          });
          break;
        default:
          if ((0, c.isStreamInvite)(P)) {
            G = (0, s.jsx)(M.default, {
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b,
              currentUserId: y,
              guild: x,
              invite: P
            });
            break
          }
          if ((0, c.isGuildScheduledEventInviteEmbed)(P)) {
            G = (0, s.jsx)(d.default, {
              guildScheduledEvent: U,
              guild: P.guild,
              channel: P.channel,
              isMember: null != x,
              onAcceptInstantInvite: b,
              onTransitionToInviteChannel: j
            });
            break
          }
          if ((0, c.isStageInviteEmbed)(P)) {
            G = (0, s.jsx)(g.default, {
              stageInstance: P.stage_instance,
              guild: P.guild,
              isMember: null != x,
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b
            });
            break
          }(0, c.isEmbeddedApplicationInvite)(P) && (G = (0, s.jsx)(m.default, {
            invite: P,
            getAcceptInviteContext: R
          }))
      }
  }
  return (0, s.jsx)(r.default, {
    section: O.AnalyticsSections.INVITE_LINK,
    children: G
  })
}