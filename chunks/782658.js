"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
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
  m = n("701190"),
  I = n("610699"),
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
  } = (0, l.useStateFromStoresObject)([m.default], () => ({
    invite: m.default.getInvite(t),
    inviteError: m.default.getInviteError(t)
  }), [t]);
  a.useEffect(() => {
    null == v && i.default.resolveInvite(t)
  }, [t]);
  let x = null != v ? v : {
      state: O.InviteStates.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: P
    } = (0, o.default)(),
    D = (0, l.useStateFromStores)([T.default], () => (null == v ? void 0 : v.guild) != null ? T.default.getGuild(v.guild.id) : null, [v]),
    y = (0, l.useStateFromStores)([_.default], () => _.default.getId()),
    U = (0, l.useStateFromStores)([u.default], () => {
      var e;
      return u.default.getGuildScheduledEvent(null === (e = x.guild_scheduled_event) || void 0 === e ? void 0 : e.id)
    }, [x]),
    j = () => {
      null != x.channel && i.default.transitionToInviteSync(x)
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
        analyticsLocations: P
      }) : i.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: R("Invite Button Embed")
      })
    },
    G = (0, s.jsx)(C.default, {
      onTransitionToInviteChannel: j,
      onAcceptInstantInvite: b,
      currentUserId: y,
      guild: D,
      invite: x,
      author: n
    });
  switch (x.state) {
    case O.InviteStates.RESOLVING:
      G = (0, s.jsx)(h.default, {});
      break;
    case O.InviteStates.EXPIRED:
    case O.InviteStates.BANNED:
      G = (0, s.jsx)(A.default, {
        banned: x.state === O.InviteStates.BANNED,
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
      switch ((0, c.getInviteType)(x)) {
        case c.InviteTypes.GROUP_DM:
          G = (0, s.jsx)(S.default, {
            onTransitionToInviteChannel: j,
            onAcceptInstantInvite: b,
            currentUserId: y,
            invite: x,
            author: n
          });
          break;
        case c.InviteTypes.FRIEND:
          G = (0, s.jsx)(p.default, {
            invite: x,
            author: n,
            getAcceptInviteContext: R
          });
          break;
        default:
          if ((0, c.isStreamInvite)(x)) {
            G = (0, s.jsx)(M.default, {
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b,
              currentUserId: y,
              guild: D,
              invite: x
            });
            break
          }
          if ((0, c.isGuildScheduledEventInviteEmbed)(x)) {
            G = (0, s.jsx)(d.default, {
              guildScheduledEvent: U,
              guild: x.guild,
              channel: x.channel,
              isMember: null != D,
              onAcceptInstantInvite: b,
              onTransitionToInviteChannel: j
            });
            break
          }
          if ((0, c.isStageInviteEmbed)(x)) {
            G = (0, s.jsx)(g.default, {
              stageInstance: x.stage_instance,
              guild: x.guild,
              isMember: null != D,
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b
            });
            break
          }(0, c.isEmbeddedApplicationInvite)(x) && (G = (0, s.jsx)(I.default, {
            invite: x,
            getAcceptInviteContext: R
          }))
      }
  }
  return (0, s.jsx)(r.default, {
    section: O.AnalyticsSections.INVITE_LINK,
    children: G
  })
}