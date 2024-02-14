"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("627445"),
  r = n.n(i),
  o = n("446674"),
  u = n("77078"),
  d = n("398604"),
  c = n("331759"),
  f = n("305961"),
  h = n("957255"),
  m = n("49111"),
  p = n("782340"),
  E = n("363768");

function S(e) {
  var t, a;
  let {
    stream: i,
    applicationId: S,
    channel: g,
    exitFullScreen: C,
    appContext: _,
    analyticsLocation: I,
    className: T,
    ...v
  } = e, x = null == g ? void 0 : g.getGuildId(), N = null == g ? void 0 : g.id, A = (0, o.useStateFromStores)([f.default], () => null != x ? f.default.getGuild(x) : null, [x]), M = (0, o.useStateFromStores)([d.default], () => d.default.getActiveEventByChannel(N), [N]);
  if (t = A, a = g, !(null != t && null != a && h.default.can(m.Permissions.CREATE_INSTANT_INVITE, a))) return null;
  let R = p.default.Messages.INSTANT_INVITE;
  return null != i ? R = p.default.Messages.INVITE_STREAM_HEADER : null != S && (R = p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u.Button, {
      size: u.Button.Sizes.SMALL,
      color: E.buttonColor,
      onClick: () => {
        r(null != A, "guild cannot be null"), r(null != g, "channel cannot be null"), ! function(e) {
          let {
            guild: t,
            channel: a,
            streamUserId: s,
            applicationId: i,
            appContext: r,
            exitFullScreen: o,
            analyticsLocation: d,
            guildScheduledEvent: c
          } = e;
          null == o || o(), (0, u.openModalLazy)(async () => {
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
            contextKey: r === m.AppContext.POPOUT ? u.POPOUT_MODAL_CONTEXT : u.DEFAULT_MODAL_CONTEXT
          })
        }({
          guild: A,
          channel: g,
          streamUserId: null == i ? void 0 : i.ownerId,
          applicationId: S,
          appContext: _,
          exitFullScreen: C,
          analyticsLocation: I,
          guildScheduledEvent: M
        })
      },
      className: s(T, E.textButton),
      ...v,
      children: R
    }), (0, l.jsx)(c.default, {
      channel: g,
      stream: i,
      appContext: _,
      className: s(T, E.iconButton),
      exitFullScreen: C,
      analyticsLocation: I,
      guildScheduledEvent: M
    })]
  })
}