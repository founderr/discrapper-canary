n.d(t, {
  Z: function() {
    return f
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(512722),
  r = n.n(a),
  o = n(442837),
  c = n(481060),
  u = n(924301),
  d = n(786915),
  h = n(430824),
  m = n(496675),
  E = n(981631),
  p = n(689938),
  g = n(967928);

function f(e) {
  var t, i;
  let {
    stream: a,
    applicationId: f,
    channel: C,
    exitFullScreen: _,
    appContext: I,
    analyticsLocation: x,
    className: T,
    ...N
  } = e, Z = null == C ? void 0 : C.getGuildId(), S = null == C ? void 0 : C.id, v = (0, o.e7)([h.Z], () => null != Z ? h.Z.getGuild(Z) : null, [Z]), A = (0, o.e7)([u.ZP], () => u.ZP.getActiveEventByChannel(S), [S]);
  if (t = v, i = C, !(null != t && null != i && m.Z.can(E.Plq.CREATE_INSTANT_INVITE, i))) return null;
  let M = p.Z.Messages.INSTANT_INVITE;
  return null != a ? M = p.Z.Messages.INVITE_STREAM_HEADER : null != f && (M = p.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY), (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(c.Button, {
      size: c.Button.Sizes.SMALL,
      color: g.buttonColor,
      onClick: () => {
        r()(null != v, "guild cannot be null"), r()(null != C, "channel cannot be null"), ! function(e) {
          let {
            guild: t,
            channel: i,
            streamUserId: s,
            applicationId: a,
            appContext: r,
            exitFullScreen: o,
            analyticsLocation: u,
            guildScheduledEvent: d
          } = e;
          null == o || o(), (0, c.openModalLazy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("99387"), n.e("7654"), n.e("9785")]).then(n.bind(n, 560114));
            return n => (0, l.jsx)(e, {
              ...n,
              guild: t,
              channel: i,
              streamUserId: s,
              applicationId: a,
              analyticsLocation: u,
              source: i.isGuildStageVoice() ? E.t4x.STAGE_CHANNEL : E.t4x.STREAM_INVITE,
              guildScheduledEvent: d
            })
          }, {
            modalKey: "stream-invite-modal",
            contextKey: r === E.IlC.POPOUT ? c.POPOUT_MODAL_CONTEXT : c.DEFAULT_MODAL_CONTEXT
          })
        }({
          guild: v,
          channel: C,
          streamUserId: null == a ? void 0 : a.ownerId,
          applicationId: f,
          appContext: I,
          exitFullScreen: _,
          analyticsLocation: x,
          guildScheduledEvent: A
        })
      },
      className: s()(T, g.textButton),
      ...N,
      children: M
    }), (0, l.jsx)(d.Z, {
      channel: C,
      stream: a,
      appContext: I,
      className: s()(T, g.iconButton),
      exitFullScreen: _,
      analyticsLocation: x,
      guildScheduledEvent: A
    })]
  })
}