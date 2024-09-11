t.d(n, {
    Z: function () {
        return g;
    }
});
var r = t(735250),
    i = t(470079),
    o = t(120356),
    l = t.n(o),
    u = t(442837),
    s = t(481060),
    a = t(518738),
    c = t(786761),
    d = t(3148),
    _ = t(753206),
    f = t(594174),
    E = t(5192),
    I = t(981631),
    S = t(689938),
    T = t(391317);
function g(e) {
    var n;
    let { guildId: t, role: o, theme: g, content: p = S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT, className: C } = e,
        m = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        N = E.ZP.useName(t, null, m),
        A = (0, a.Kz)(o),
        h = i.useMemo(
            () =>
                (0, c.e5)({
                    ...(0, d.ZP)({
                        channelId: '0',
                        content: p,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: m
                    }),
                    state: I.yb.SENT,
                    id: '0'
                }),
            [m, p]
        ),
        L = {
            nick: N,
            colorString: null !== (n = o.colorString) && void 0 !== n ? n : void 0
        };
    return (0, r.jsx)(s.ThemeProvider, {
        theme: g,
        children: (e) =>
            (0, r.jsx)('div', {
                className: l()(e, T.container, C),
                children: (0, r.jsx)(_.Z, {
                    hideTimestamp: !0,
                    author: L,
                    roleIcon: A,
                    message: h,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
