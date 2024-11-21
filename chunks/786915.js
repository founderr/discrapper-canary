n.d(t, {
    Z: function () {
        return m;
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
    d = n(496675),
    u = n(871499),
    h = n(981631),
    p = n(388032);
function m(e) {
    var t, l;
    let { applicationId: m, stream: f, channel: g, exitFullScreen: C, appContext: x, analyticsLocation: _, guildScheduledEvent: v, shouldPrioritizeGroupPlusIcon: I = !1, ...E } = e,
        b = (0, o.bp)(),
        Z = null == g ? void 0 : g.getGuildId(),
        N = (0, a.e7)([c.Z], () => (null != Z ? c.Z.getGuild(Z) : null), [Z]);
    return ((t = N), (l = g), null != t && null != l && d.Z.can(h.Plq.CREATE_INSTANT_INVITE, l))
        ? (0, i.jsx)(u.Z, {
              onClick: () => {
                  r()(null != N, 'guild cannot be null'),
                      r()(null != g, 'channel cannot be null'),
                      !(function (e) {
                          let { guild: t, channel: l, streamUserId: r, applicationId: a, appContext: o, exitFullScreen: c, analyticsLocation: d, guildScheduledEvent: u } = e;
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
                          appContext: null != x ? x : b,
                          exitFullScreen: C,
                          analyticsLocation: _,
                          guildScheduledEvent: v
                      });
              },
              iconComponent: null == m || I ? s.GroupPlusIcon : s.ActivitiesPlusIcon,
              label: null != m ? p.intl.string(p.t['OzOM/v']) : p.intl.string(p.t['6F9ivr']),
              ...E
          })
        : null;
}
