n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(512722),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(40851),
    c = n(430824),
    d = n(496675),
    u = n(871499),
    h = n(981631),
    p = n(388032);
function m(e) {
    var t, l;
    let { applicationId: m, stream: f, channel: g, exitFullScreen: C, appContext: x, analyticsLocation: v, guildScheduledEvent: _, ...I } = e,
        E = (0, o.bp)(),
        b = null == g ? void 0 : g.getGuildId(),
        N = (0, r.e7)([c.Z], () => (null != b ? c.Z.getGuild(b) : null), [b]);
    return ((t = N), (l = g), null != t && null != l && d.Z.can(h.Plq.CREATE_INSTANT_INVITE, l))
        ? (0, i.jsx)(u.Z, {
              onClick: () => {
                  a()(null != N, 'guild cannot be null'),
                      a()(null != g, 'channel cannot be null'),
                      !(function (e) {
                          let { guild: t, channel: l, streamUserId: a, applicationId: r, appContext: o, exitFullScreen: c, analyticsLocation: d, guildScheduledEvent: u } = e;
                          null == c || c(),
                              (0, s.openModalLazy)(
                                  async () => {
                                      let { default: e } = await Promise.all([n.e('7654'), n.e('19821')]).then(n.bind(n, 560114));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              guild: t,
                                              channel: l,
                                              streamUserId: a,
                                              applicationId: r,
                                              analyticsLocation: d,
                                              source: l.isGuildStageVoice() ? h.t4x.STAGE_CHANNEL : h.t4x.STREAM_INVITE,
                                              guildScheduledEvent: u
                                          });
                                  },
                                  {
                                      modalKey: 'stream-invite-modal',
                                      contextKey: o === h.IlC.POPOUT ? s.POPOUT_MODAL_CONTEXT : s.DEFAULT_MODAL_CONTEXT
                                  }
                              );
                      })({
                          guild: N,
                          channel: g,
                          streamUserId: null == f ? void 0 : f.ownerId,
                          applicationId: m,
                          appContext: null != x ? x : E,
                          exitFullScreen: C,
                          analyticsLocation: v,
                          guildScheduledEvent: _
                      });
              },
              iconComponent: null != m ? s.ActivitiesPlusIcon : s.GroupPlusIcon,
              label: null != m ? p.intl.string(p.t['OzOM/v']) : p.intl.string(p.t['6F9ivr']),
              ...I
          })
        : null;
}
