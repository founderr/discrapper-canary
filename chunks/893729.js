t.d(n, {
    Z: function () {
        return T;
    }
});
var r = t(735250),
    i = t(470079),
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
    p = t(391317);
function T(e) {
    var n;
    let { guildId: t, role: l, theme: T, content: C = S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT, className: g } = e,
        N = (0, u.e7)([E.default], () => E.default.getCurrentUser()),
        m = f.ZP.useName(t, null, N),
        A = (0, a.Kz)(l),
        h = i.useMemo(
            () =>
                (0, c.e5)({
                    ...(0, d.ZP)({
                        channelId: '0',
                        content: C,
                        tts: void 0,
                        type: void 0,
                        messageReference: void 0,
                        allowedMentions: void 0,
                        author: N
                    }),
                    state: I.yb.SENT,
                    id: '0'
                }),
            [N, C]
        ),
        v = {
            nick: m,
            colorString: null !== (n = l.colorString) && void 0 !== n ? n : void 0
        };
    return (0, r.jsx)(s.ThemeProvider, {
        theme: T,
        children: (e) =>
            (0, r.jsx)('div', {
                className: o()(e, p.container, g),
                children: (0, r.jsx)(_.Z, {
                    hideTimestamp: !0,
                    author: v,
                    roleIcon: A,
                    message: h,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
