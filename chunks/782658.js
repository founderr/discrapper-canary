"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
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
  m = n("430824"),
  T = n("701190"),
  I = n("610699"),
  p = n("313876"),
  h = n("778333"),
  N = n("949981"),
  S = n("680668"),
  C = n("143708"),
  g = n("358595"),
  A = n("563917"),
  M = n("135845"),
  R = n("981631");

function v(e) {
  let {
    code: t,
    author: n,
    getAcceptInviteContext: v
  } = e, {
    invite: O,
    inviteError: x
  } = (0, l.useStateFromStoresObject)([T.default], () => ({
    invite: T.default.getInvite(t),
    inviteError: T.default.getInviteError(t)
  }), [t]);
  a.useEffect(() => {
    null == O && i.default.resolveInvite(t)
  }, [t]);
  let L = null != O ? O : {
      state: R.InviteStates.RESOLVING,
      code: ""
    },
    {
      analyticsLocations: D
    } = (0, o.default)(),
    P = (0, l.useStateFromStores)([m.default], () => (null == O ? void 0 : O.guild) != null ? m.default.getGuild(O.guild.id) : null, [O]),
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
        context: v("Invite Button Embed")
      })
    },
    F = (0, s.jsx)(S.default, {
      onTransitionToInviteChannel: j,
      onAcceptInstantInvite: b,
      currentUserId: y,
      guild: P,
      invite: L,
      author: n
    });
  switch (L.state) {
    case R.InviteStates.RESOLVING:
      F = (0, s.jsx)(g.default, {});
      break;
    case R.InviteStates.EXPIRED:
    case R.InviteStates.BANNED:
      F = (0, s.jsx)(C.default, {
        banned: L.state === R.InviteStates.BANNED,
        author: n
      });
      break;
    case R.InviteStates.ERROR:
      F = (0, s.jsx)(p.default, {
        author: n,
        inviteError: x
      });
      break;
    default:
      switch ((0, c.getInviteType)(L)) {
        case c.InviteTypes.GROUP_DM:
          F = (0, s.jsx)(N.default, {
            onTransitionToInviteChannel: j,
            onAcceptInstantInvite: b,
            currentUserId: y,
            invite: L,
            author: n
          });
          break;
        case c.InviteTypes.FRIEND:
          F = (0, s.jsx)(h.default, {
            invite: L,
            author: n,
            getAcceptInviteContext: v
          });
          break;
        default:
          if ((0, c.isStreamInvite)(L)) {
            F = (0, s.jsx)(M.default, {
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b,
              currentUserId: y,
              guild: P,
              invite: L
            });
            break
          }
          if ((0, c.isGuildScheduledEventInviteEmbed)(L)) {
            F = (0, s.jsx)(d.default, {
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
            F = (0, s.jsx)(A.default, {
              stageInstance: L.stage_instance,
              guild: L.guild,
              isMember: null != P,
              onTransitionToInviteChannel: j,
              onAcceptInstantInvite: b
            });
            break
          }(0, c.isEmbeddedApplicationInvite)(L) && (F = (0, s.jsx)(I.default, {
            invite: L,
            getAcceptInviteContext: v
          }))
      }
  }
  return (0, s.jsx)(r.default, {
    section: R.AnalyticsSections.INVITE_LINK,
    children: F
  })
}