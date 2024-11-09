t.d(n, {
    Z: function () {
        return h;
    }
});
var i = t(200651),
    r = t(192379),
    l = t(120356),
    o = t.n(l),
    u = t(442837),
    a = t(481060),
    s = t(518738),
    c = t(786761),
    d = t(3148),
    f = t(753206),
    p = t(594174),
    _ = t(5192),
    m = t(981631),
    g = t(388032),
    E = t(391317);
function h(e) {
    var n;
    let { guildId: t, role: l, theme: h, content: I = g.intl.string(g.t['6OSasb']), className: S } = e,
        v = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
        C = _.ZP.useName(t, null, v),
        T = (0, s.Kz)(l),
        N = r.useMemo(
            () =>
                (0, c.e5)({
                    ...(0, d.ZP)({
                        channelId: '0',
                        content: I,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: v
                    }),
                    state: m.yb.SENT,
                    id: '0'
                }),
            [v, I]
        ),
        b = {
            nick: C,
            colorString: null !== (n = l.colorString) && void 0 !== n ? n : void 0
        };
    return (0, i.jsx)(a.ThemeProvider, {
        theme: h,
        children: (e) =>
            (0, i.jsx)('div', {
                className: o()(e, E.container, S),
                children: (0, i.jsx)(f.Z, {
                    hideTimestamp: !0,
                    author: b,
                    roleIcon: T,
                    message: N,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
