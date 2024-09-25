t.d(n, {
    Z: function () {
        return L;
    }
});
var i = t(735250),
    r = t(470079),
    l = t(120356),
    s = t.n(l),
    o = t(442837),
    u = t(481060),
    a = t(518738),
    c = t(786761),
    _ = t(3148),
    d = t(753206),
    f = t(594174),
    E = t(5192),
    A = t(981631),
    I = t(689938),
    v = t(391317);
function L(e) {
    var n;
    let { guildId: t, role: l, theme: L, content: m = I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT, className: S } = e,
        g = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        C = E.ZP.useName(t, null, g),
        N = (0, a.Kz)(l),
        p = r.useMemo(
            () =>
                (0, c.e5)({
                    ...(0, _.ZP)({
                        channelId: '0',
                        content: m,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: g
                    }),
                    state: A.yb.SENT,
                    id: '0'
                }),
            [g, m]
        ),
        Z = {
            nick: C,
            colorString: null !== (n = l.colorString) && void 0 !== n ? n : void 0
        };
    return (0, i.jsx)(u.ThemeProvider, {
        theme: L,
        children: (e) =>
            (0, i.jsx)('div', {
                className: s()(e, v.container, S),
                children: (0, i.jsx)(d.Z, {
                    hideTimestamp: !0,
                    author: Z,
                    roleIcon: N,
                    message: p,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
