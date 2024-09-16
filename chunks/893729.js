t.d(n, {
    Z: function () {
        return C;
    }
});
var i = t(735250),
    r = t(470079),
    l = t(120356),
    o = t.n(l),
    u = t(442837),
    s = t(481060),
    a = t(518738),
    c = t(786761),
    d = t(3148),
    _ = t(753206),
    E = t(594174),
    f = t(5192),
    I = t(981631),
    S = t(689938),
    T = t(391317);
function C(e) {
    var n;
    let { guildId: t, role: l, theme: C, content: p = S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT, className: N } = e,
        A = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
        g = f.ZP.useName(t, null, A),
        m = (0, a.Kz)(l),
        L = r.useMemo(
            () =>
                (0, c.e5)({
                    ...(0, d.ZP)({
                        channelId: '0',
                        content: p,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: A
                    }),
                    state: I.yb.SENT,
                    id: '0'
                }),
            [A, p]
        ),
        O = {
            nick: g,
            colorString: null !== (n = l.colorString) && void 0 !== n ? n : void 0
        };
    return (0, i.jsx)(s.ThemeProvider, {
        theme: C,
        children: (e) =>
            (0, i.jsx)('div', {
                className: o()(e, T.container, N),
                children: (0, i.jsx)(_.Z, {
                    hideTimestamp: !0,
                    author: O,
                    roleIcon: m,
                    message: L,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
