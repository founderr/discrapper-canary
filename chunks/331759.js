"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("37983");
n("884691");
var a = n("627445"),
  s = n.n(a),
  i = n("446674"),
  r = n("77078"),
  o = n("244201"),
  u = n("305961"),
  d = n("957255"),
  c = n("76539"),
  f = n("924506"),
  h = n("981913"),
  m = n("49111"),
  p = n("782340");

function E(e) {
  var t, a;
  let {
    applicationId: E,
    stream: g,
    channel: S,
    exitFullScreen: C,
    appContext: _,
    analyticsLocation: I,
    guildScheduledEvent: T,
    ...v
  } = e, x = (0, o.useAppContext)(), N = null == S ? void 0 : S.getGuildId(), A = (0, i.useStateFromStores)([u.default], () => null != N ? u.default.getGuild(N) : null, [N]);
  return (t = A, a = S, null != t && null != a && d.default.can(m.Permissions.CREATE_INSTANT_INVITE, a)) ? (0, l.jsx)(h.default, {
    onClick: () => {
      s(null != A, "guild cannot be null"), s(null != S, "channel cannot be null"), ! function(e) {
        let {
          guild: t,
          channel: a,
          streamUserId: s,
          applicationId: i,
          appContext: o,
          exitFullScreen: u,
          analyticsLocation: d,
          guildScheduledEvent: c
        } = e;
        null == u || u(), (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("310688").then(n.bind(n, "310688"));
          return n => (0, l.jsx)(e, {
            ...n,
            guild: t,
            channel: a,
            streamUserId: s,
            applicationId: i,
            analyticsLocation: d,
            source: a.isGuildStageVoice() ? m.InstantInviteSources.STAGE_CHANNEL : m.InstantInviteSources.STREAM_INVITE,
            guildScheduledEvent: c
          })
        }, {
          modalKey: "stream-invite-modal",
          contextKey: o === m.AppContext.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
        })
      }({
        guild: A,
        channel: S,
        streamUserId: null == g ? void 0 : g.ownerId,
        applicationId: E,
        appContext: null != _ ? _ : x,
        exitFullScreen: C,
        analyticsLocation: I,
        guildScheduledEvent: T
      })
    },
    iconComponent: null != E ? f.default : c.default,
    label: null != E ? p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY : p.default.Messages.ACTIVITY_INVITE_MODAL_INVITE,
    ...v
  }) : null
}