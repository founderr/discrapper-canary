"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("512722"),
  r = n.n(i),
  o = n("442837"),
  u = n("481060"),
  d = n("924301"),
  c = n("786915"),
  f = n("430824"),
  h = n("496675"),
  m = n("981631"),
  p = n("689938"),
  E = n("210054");

function g(e) {
  var t, l;
  let {
    stream: i,
    applicationId: g,
    channel: C,
    exitFullScreen: S,
    appContext: _,
    analyticsLocation: T,
    className: I,
    ...A
  } = e, v = null == C ? void 0 : C.getGuildId(), x = null == C ? void 0 : C.id, N = (0, o.useStateFromStores)([f.default], () => null != v ? f.default.getGuild(v) : null, [v]), M = (0, o.useStateFromStores)([d.default], () => d.default.getActiveEventByChannel(x), [x]);
  if (t = N, l = C, !(null != t && null != l && h.default.can(m.Permissions.CREATE_INSTANT_INVITE, l))) return null;
  let y = p.default.Messages.INSTANT_INVITE;
  return null != i ? y = p.default.Messages.INVITE_STREAM_HEADER : null != g && (y = p.default.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Button, {
      size: u.Button.Sizes.SMALL,
      color: E.buttonColor,
      onClick: () => {
        r()(null != N, "guild cannot be null"), r()(null != C, "channel cannot be null"), ! function(e) {
          let {
            guild: t,
            channel: l,
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
            } = await Promise.all([n.e("99387"), n.e("7654"), n.e("92893")]).then(n.bind(n, "560114"));
            return n => (0, a.jsx)(e, {
              ...n,
              guild: t,
              channel: l,
              streamUserId: s,
              applicationId: i,
              analyticsLocation: d,
              source: l.isGuildStageVoice() ? m.InstantInviteSources.STAGE_CHANNEL : m.InstantInviteSources.STREAM_INVITE,
              guildScheduledEvent: c
            })
          }, {
            modalKey: "stream-invite-modal",
            contextKey: r === m.AppContext.POPOUT ? u.POPOUT_MODAL_CONTEXT : u.DEFAULT_MODAL_CONTEXT
          })
        }({
          guild: N,
          channel: C,
          streamUserId: null == i ? void 0 : i.ownerId,
          applicationId: g,
          appContext: _,
          exitFullScreen: S,
          analyticsLocation: T,
          guildScheduledEvent: M
        })
      },
      className: s()(I, E.textButton),
      ...A,
      children: y
    }), (0, a.jsx)(c.default, {
      channel: C,
      stream: i,
      appContext: _,
      className: s()(I, E.iconButton),
      exitFullScreen: S,
      analyticsLocation: T,
      guildScheduledEvent: M
    })]
  })
}