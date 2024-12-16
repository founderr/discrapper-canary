n.d(t, {
    Z: function () {
        return I;
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
    p = n(5192),
    g = n(981631),
    E = n(388032),
    m = n(674055);
function I(e) {
    var t;
    let { guildId: n, role: l, theme: I, content: h = E.intl.string(E.t['6OSasb']), className: C } = e,
        S = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        T = p.ZP.useName(n, null, S),
        v = (0, s.Kz)(l),
        b = r.useMemo(
            () =>
                (0, c.e5)({
                    ...(0, d.ZP)({
                        channelId: '0',
                        content: h,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: S
                    }),
                    state: g.yb.SENT,
                    id: '0'
                }),
            [S, h]
        ),
        N = {
            nick: T,
            colorString: null !== (t = l.colorString) && void 0 !== t ? t : void 0
        };
    return (0, i.jsx)(a.ThemeProvider, {
        theme: I,
        children: (e) =>
            (0, i.jsx)('div', {
                className: o()(e, m.container, C),
                children: (0, i.jsx)(f.Z, {
                    hideTimestamp: !0,
                    author: N,
                    roleIcon: v,
                    message: b,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
