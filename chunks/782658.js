"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
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
  f = n("451603"),
  E = n("885714"),
  _ = n("314897"),
  T = n("430824"),
  m = n("701190"),
  I = n("610699"),
  p = n("313876"),
  h = n("778333"),
  N = n("949981"),
  S = n("680668"),
  C = n("143708"),
  A = n("358595"),
  g = n("563917"),
  M = n("135845"),
  R = n("981631");

function O(e) {
  let {
    code: t,
    author: n,
    getAcceptInviteContext: O
  } = e, {
    invite: v,
    inviteError: x
  } = (0, l.useStateFromStoresObject)([m.default], () => ({
    invite: m.default.getInvite(t),
    inviteError: m.default.getInviteError(t)
  }), [t]);
  a.useEffect(() => {
    null == v && i.default.resolveInvite(t)
  }, [t]);
  let L = null != v ? v : {
      state: R.InviteStates.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: D
    } = (0, o.default)(),
    P = (0, l.useStateFromStores)([T.default], () => (null == v ? void 0 : v.guild) != null ? T.default.getGuild(v.guild.id) : null, [v]),
    y = (0, l.useStateFromStores)([_.default], () => _.default.getId()),
    U = (0, l.useStateFromStores)([u.default], () => {
      var e;
      return u.default.getGuildScheduledEvent(null === (e = L.guild_scheduled_event) || void 0 === e ? void 0 : e.id)
    }, [L]),
    j = () => {
      null != L.channel && i.default.transitionToInviteSync(L)
    },
    b = () => {
      (0, f.isAtGuildCapAndNonPremium)() ? (0, E.default)({
        analyticsSource: {
          page: R.AnalyticsPages.INVITE_EMBED
        },
        analyticsLocation: {
          page: R.AnalyticsPages.INVITE_EMBED,
          section: R.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: D
      }) : i.default.acceptInviteAndTransitionToInviteChannel({
        inviteKey: t,
        context: O("Invite Button Embed")
      })
    },
    G = (0, s.jsx)(S.default, {
      onTransitionToInviteChannel: j,
      onAcceptInstantInvite: b,
      currentUserId: y,
      guild: P,
      invite: L,
      author: n
    });
  switch (L.state) {
    case R.InviteStates.RESOLVING:
      G = (0, s.jsx)(A.default, {});
      break;
    case R.InviteStates.EXPIRED:
    case R.InviteStates.BANNED:
      G = (0, s.jsx)(C.default, {
        banned: L.state === R.InviteStates.BANNED,
        author: n
      });
      break;
    case R.InviteStates.ERROR:
      G = (0, s.jsx)(p.default, {
        author: n,
        inviteError: x
      });
      break;
    default:
      switch ((0, c.getInviteType)(L)) {
        case c.InviteTypes.GROUP_DM:
          G = (0, s.jsx)(N.default, {
            onTransitionToInviteChannel: j,
            onAcceptInstantInvite: b,
            currentUserId: y,
            invite: L,
            author: n
          });
          break;
        case c.InviteTypes.FRIEND:
          G = (0, s.jsx)(h.default, {
            invite: L,
            author: n,
            getAcceptInviteContext: O
          });
          break;
        default:
          if ((0, c.isStreamInvite)(L)) {
            G = (0, s.jsx)(M.default, {
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b,
              currentUserId: y,
              guild: P,
              invite: L
            });
            break
          }
          if ((0, c.isGuildScheduledEventInviteEmbed)(L)) {
            G = (0, s.jsx)(d.default, {
              guildScheduledEvent: U,
              guild: L.guild,
              channel: L.channel,
              isMember: null != P,
              onAcceptInstantInvite: b,
              onTransitionToInviteChannel: j
            });
            break
          }
          if ((0, c.isStageInviteEmbed)(L)) {
            G = (0, s.jsx)(g.default, {
              stageInstance: L.stage_instance,
              guild: L.guild,
              isMember: null != P,
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b
            });
            break
          }(0, c.isEmbeddedApplicationInvite)(L) && (G = (0, s.jsx)(I.default, {
            invite: L,
            getAcceptInviteContext: O
          }))
      }
  }
  return (0, s.jsx)(r.default, {
    section: R.AnalyticsSections.INVITE_LINK,
    children: G
  })
}