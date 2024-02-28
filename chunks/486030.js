"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("627445"),
  r = n.n(i),
  u = n("446674"),
  o = n("77078"),
  d = n("398604"),
  c = n("331759"),
  f = n("305961"),
  h = n("957255"),
  m = n("49111"),
  p = n("782340"),
  E = n("363768");

function g(e) {
  var t, a;
  let {
    stream: i,
    applicationId: g,
    channel: C,
    exitFullScreen: S,
    appContext: _,
    analyticsLocation: I,
    className: T,
    ...v
  } = e, x = null == C ? void 0 : C.getGuildId(), N = null == C ? void 0 : C.id, A = (0, u.useStateFromStores)([f.default], () => null != x ? f.default.getGuild(x) : null, [x]), M = (0, u.useStateFromStores)([d.default], () => d.default.getActiveEventByChannel(N), [N]);
  if (t = A, a = C, !(null != t && null != a && h.default.can(m.Permissions.CREATE_INSTANT_INVITE, a))) return null;
  let R = p.default.Messages.INSTANT_INVITE;
  return null != i ? R = p.default.Messages.INVITE_STREAM_HEADER : null != g && (R = p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(o.Button, {
      size: o.Button.Sizes.SMALL,
      color: E.buttonColor,
      onClick: () => {
        r(null != A, "guild cannot be null"), r(null != C, "channel cannot be null"), ! function(e) {
          let {
            guild: t,
            channel: a,
            streamUserId: s,
            applicationId: i,
            appContext: r,
            exitFullScreen: u,
            analyticsLocation: d,
            guildScheduledEvent: c
          } = e;
          null == u || u(), (0, o.openModalLazy)(async () => {
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
            contextKey: r === m.AppContext.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
          })
        }({
          guild: A,
          channel: C,
          streamUserId: null == i ? void 0 : i.ownerId,
          applicationId: g,
          appContext: _,
          exitFullScreen: S,
          analyticsLocation: I,
          guildScheduledEvent: M
        })
      },
      className: s(T, E.textButton),
      ...v,
      children: R
    }), (0, l.jsx)(c.default, {
      channel: C,
      stream: i,
      appContext: _,
      className: s(T, E.iconButton),
      exitFullScreen: S,
      analyticsLocation: I,
      guildScheduledEvent: M
    })]
  })
}