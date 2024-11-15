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
    p = n(594174),
    _ = n(5192),
    E = n(981631),
    g = n(388032),
    m = n(25674);
function h(e) {
    var t;
    let { guildId: n, role: l, theme: h, content: S = g.intl.string(g.t['6OSasb']), className: I } = e,
        v = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
        C = _.ZP.useName(n, null, v),
        T = (0, s.Kz)(l),
        N = r.useMemo(
            () =>
                (0, c.e5)({
                    ...(0, d.ZP)({
                        channelId: '0',
                        content: S,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: v
                    }),
                    state: E.yb.SENT,
                    id: '0'
                }),
            [v, S]
        ),
        b = {
            nick: C,
            colorString: null !== (t = l.colorString) && void 0 !== t ? t : void 0
        };
    return (0, i.jsx)(a.ThemeProvider, {
        theme: h,
        children: (e) =>
            (0, i.jsx)('div', {
                className: o()(e, m.container, I),
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
