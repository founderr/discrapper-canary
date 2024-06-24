n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250);
n(470079);
var i = n(512722),
  s = n.n(i),
  a = n(442837),
  r = n(481060),
  o = n(40851),
  c = n(430824),
  u = n(496675),
  d = n(871499),
  h = n(981631),
  m = n(689938);

function p(e) {
  var t, i;
  let {
    applicationId: p,
    stream: E,
    channel: g,
    exitFullScreen: f,
    appContext: C,
    analyticsLocation: _,
    guildScheduledEvent: I,
    ...x
  } = e, T = (0, o.bp)(), N = null == g ? void 0 : g.getGuildId(), Z = (0, a.e7)([c.Z], () => null != N ? c.Z.getGuild(N) : null, [N]);
  return (t = Z, i = g, null != t && null != i && u.Z.can(h.Plq.CREATE_INSTANT_INVITE, i)) ? (0, l.jsx)(d.Z, {
    onClick: () => {
      s()(null != Z, "guild cannot be null"), s()(null != g, "channel cannot be null"), ! function(e) {
        let {
          guild: t,
          channel: i,
          streamUserId: s,
          applicationId: a,
          appContext: o,
          exitFullScreen: c,
          analyticsLocation: u,
          guildScheduledEvent: d
        } = e;
        null == c || c(), (0, r.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("99387"), n.e("7654"), n.e("1425")]).then(n.bind(n, 560114));
          return n => (0, l.jsx)(e, {
            ...n,
            guild: t,
            channel: i,
            streamUserId: s,
            applicationId: a,
            analyticsLocation: u,
            source: i.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
            guildScheduledEvent: d
          })
        }, {
          modalKey: "stream-invite-modal",
          contextKey: o === h.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
        })
      }({
        guild: Z,
        channel: g,
        streamUserId: null == E ? void 0 : E.ownerId,
        applicationId: p,
        appContext: null != C ? C : T,
        exitFullScreen: f,
        analyticsLocation: _,
        guildScheduledEvent: I
      })
    },
    iconComponent: null != p ? r.ActivitiesPlusIcon : r.GroupPlusIcon,
    label: null != p ? m.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY : m.Z.Messages.ACTIVITY_INVITE_MODAL_INVITE,
    ...x
  }) : null
}