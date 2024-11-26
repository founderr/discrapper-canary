n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    u = n(442837),
    a = n(481060),
    s = n(518738),
    c = n(786761),
    d = n(3148),
    f = n(753206),
    _ = n(594174),
    E = n(5192),
    p = n(981631),
    m = n(388032),
    g = n(674055);
function h(e) {
    var t;
    let { guildId: n, role: l, theme: h, content: I = m.intl.string(m.t['6OSasb']), className: S } = e,
        C = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        T = E.ZP.useName(n, null, C),
        v = (0, s.Kz)(l),
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
                        author: C
                    }),
                    state: p.yb.SENT,
                    id: '0'
                }),
            [C, I]
        ),
        A = {
            nick: T,
            colorString: null !== (t = l.colorString) && void 0 !== t ? t : void 0
        };
    return (0, i.jsx)(a.ThemeProvider, {
        theme: h,
        children: (e) =>
            (0, i.jsx)('div', {
                className: o()(e, g.container, S),
                children: (0, i.jsx)(f.Z, {
                    hideTimestamp: !0,
                    author: A,
                    roleIcon: v,
                    message: N,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
