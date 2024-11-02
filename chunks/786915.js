n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    r = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(40851),
    c = n(430824),
    u = n(496675),
    d = n(871499),
    h = n(981631),
    m = n(388032);
function p(e) {
    var t, l;
    let { applicationId: p, stream: f, channel: g, exitFullScreen: C, appContext: x, analyticsLocation: v, guildScheduledEvent: _, ...I } = e,
        E = (0, o.bp)(),
        b = null == g ? void 0 : g.getGuildId(),
        S = (0, a.e7)([c.Z], () => (null != b ? c.Z.getGuild(b) : null), [b]);
    return ((t = S), (l = g), null != t && null != l && u.Z.can(h.Plq.CREATE_INSTANT_INVITE, l))
        ? (0, i.jsx)(d.Z, {
              onClick: () => {
                  r()(null != S, 'guild cannot be null'),
                      r()(null != g, 'channel cannot be null'),
                      !(function (e) {
                          let { guild: t, channel: l, streamUserId: r, applicationId: a, appContext: o, exitFullScreen: c, analyticsLocation: u, guildScheduledEvent: d } = e;
                          null == c || c(),
                              (0, s.openModalLazy)(
                                  async () => {
                                      let { default: e } = await Promise.all([n.e('7654'), n.e('85683')]).then(n.bind(n, 560114));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              guild: t,
                                              channel: l,
                                              streamUserId: r,
                                              applicationId: a,
                                              analyticsLocation: u,
                                              source: l.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
                                              guildScheduledEvent: d
                                          });
                                  },
                                  {
                                      modalKey: 'stream-invite-modal',
                                      contextKey: o === h.IlC.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT
                                  }
                              );
                      })({
                          guild: S,
                          channel: g,
                          streamUserId: null == f ? void 0 : f.ownerId,
                          applicationId: p,
                          appContext: null != x ? x : E,
                          exitFullScreen: C,
                          analyticsLocation: v,
                          guildScheduledEvent: _
                      });
              },
              iconComponent: null != p ? s.ActivitiesPlusIcon : s.GroupPlusIcon,
              label: null != p ? m.intl.string(m.t['OzOM/v']) : m.intl.string(m.t['6F9ivr']),
              ...I
          })
        : null;
}
