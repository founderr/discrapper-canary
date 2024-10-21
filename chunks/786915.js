n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var s = n(512722),
    a = n.n(s),
    l = n(442837),
    r = n(481060),
    o = n(40851),
    c = n(430824),
    u = n(496675),
    d = n(871499),
    h = n(981631),
    p = n(689938);
function m(e) {
    var t, s;
    let { applicationId: m, stream: _, channel: f, exitFullScreen: E, appContext: g, analyticsLocation: C, guildScheduledEvent: I, ...T } = e,
        x = (0, o.bp)(),
        v = null == f ? void 0 : f.getGuildId(),
        S = (0, l.e7)([c.Z], () => (null != v ? c.Z.getGuild(v) : null), [v]);
    return ((t = S), (s = f), null != t && null != s && u.Z.can(h.Plq.CREATE_INSTANT_INVITE, s))
        ? (0, i.jsx)(d.Z, {
              onClick: () => {
                  a()(null != S, 'guild cannot be null'),
                      a()(null != f, 'channel cannot be null'),
                      !(function (e) {
                          let { guild: t, channel: s, streamUserId: a, applicationId: l, appContext: o, exitFullScreen: c, analyticsLocation: u, guildScheduledEvent: d } = e;
                          null == c || c(),
                              (0, r.openModalLazy)(
                                  async () => {
                                      let { default: e } = await Promise.all([n.e('7654'), n.e('85683')]).then(n.bind(n, 560114));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              guild: t,
                                              channel: s,
                                              streamUserId: a,
                                              applicationId: l,
                                              analyticsLocation: u,
                                              source: s.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
                                              guildScheduledEvent: d
                                          });
                                  },
                                  {
                                      modalKey: 'stream-invite-modal',
                                      contextKey: o === h.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
                                  }
                              );
                      })({
                          guild: S,
                          channel: f,
                          streamUserId: null == _ ? void 0 : _.ownerId,
                          applicationId: m,
                          appContext: null != g ? g : x,
                          exitFullScreen: E,
                          analyticsLocation: C,
                          guildScheduledEvent: I
                      });
              },
              iconComponent: null != m ? r.ActivitiesPlusIcon : r.GroupPlusIcon,
              label: null != m ? p.Z.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY : p.Z.Messages.ACTIVITY_INVITE_MODAL_INVITE,
              ...T
          })
        : null;
}
