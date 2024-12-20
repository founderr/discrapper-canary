t.d(e, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(787014),
    o = t(362721),
    a = t(339340),
    d = t(869768),
    c = t(496675),
    s = t(12498),
    Z = t(981631),
    h = t(388032);
function f(n, e) {
    let f = (0, l.e7)([c.Z], () => c.Z.can(Z.Plq.MANAGE_CHANNELS, e)),
        x = (0, o.ZP)(n),
        g = (0, d.W)(n),
        M = (0, l.e7)([s.Z], () => s.Z.getChannelStatus(n)),
        p = null != M && M.length > 0;
    return n.isGuildVoice() && (f || x)
        ? !g && f && p
            ? (0, i.jsx)(r.MenuItem, {
                  id: 'clear-status',
                  label: h.intl.string(h.t['22CYiY']),
                  action: () => {
                      u.ZP.updateVoiceChannelStatus(n.id, '');
                  }
              })
            : g && x
              ? (0, i.jsx)(r.MenuItem, {
                    id: 'set-status',
                    label: h.intl.string(h.t.Mgpxi4),
                    action: () => {
                        (0, r.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.resolve().then(t.bind(t, 339340));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        channel: n,
                                        ...t
                                    });
                            },
                            { modalKey: a.VOICE_CHANNEL_STATUS_MODAL_KEY }
                        );
                    }
                })
              : null
        : null;
}
