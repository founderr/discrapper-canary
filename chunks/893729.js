e.d(n, {
    Z: function () {
        return h;
    }
});
var i = e(200651),
    r = e(192379),
    l = e(120356),
    o = e.n(l),
    u = e(442837),
    a = e(481060),
    s = e(518738),
    c = e(786761),
    d = e(3148),
    f = e(753206),
    _ = e(594174),
    p = e(5192),
    E = e(981631),
    g = e(388032),
    m = e(391317);
function h(t) {
    var n;
    let { guildId: e, role: l, theme: h, content: I = g.intl.string(g.t['6OSasb']), className: S } = t,
        v = (0, u.e7)([_.default], () => _.default.getCurrentUser()),
        C = p.ZP.useName(e, null, v),
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
                    state: E.yb.SENT,
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
        children: (t) =>
            (0, i.jsx)('div', {
                className: o()(t, m.container, S),
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
