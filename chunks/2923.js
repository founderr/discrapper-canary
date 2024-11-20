n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    r = n(442837),
    s = n(592125),
    a = n(944486),
    u = n(293224),
    d = n(720870);
function c(e) {
    let { locked: t } = e,
        n = (0, r.e7)([a.Z], () => a.Z.getVoiceChannelId()),
        l = (0, r.e7)([s.Z], () => s.Z.getChannel(n)),
        c = null != l;
    return (0, i.jsxs)('div', {
        className: o()({
            [d.panelContainer]: !0,
            [d.locked]: t
        }),
        children: [
            (0, i.jsxs)('div', {
                className: d.panelRow,
                children: [
                    (0, i.jsx)(u.Ox, {
                        voiceChannel: l,
                        locked: t
                    }),
                    (0, i.jsx)(u.SE, {
                        voiceChannel: l,
                        locked: t
                    }),
                    (0, i.jsx)(u.N3, {
                        voiceChannel: l,
                        locked: t
                    }),
                    (0, i.jsx)('div', { className: d.separator }),
                    (0, i.jsx)(u.sm, {
                        voiceChannel: l,
                        locked: t
                    }),
                    (0, i.jsx)(u.aG, {
                        voiceChannel: l,
                        locked: t
                    }),
                    (0, i.jsx)('div', { className: d.separator }),
                    (0, i.jsx)(u.c_, {
                        voiceChannel: l,
                        locked: t
                    })
                ]
            }),
            c &&
                (0, i.jsx)('div', {
                    className: d.panelRow,
                    children: (0, i.jsx)(u.L, {
                        voiceChannel: l,
                        locked: t
                    })
                })
        ]
    });
}
