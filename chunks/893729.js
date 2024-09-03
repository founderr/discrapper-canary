t.d(n, {
    Z: function () {
        return S;
    }
});
var r = t(735250),
    i = t(470079),
    o = t(120356),
    l = t.n(o),
    u = t(442837),
    a = t(481060),
    s = t(518738),
    c = t(786761),
    d = t(3148),
    _ = t(753206),
    f = t(594174),
    E = t(5192),
    I = t(981631),
    g = t(689938),
    p = t(471292);
function S(e) {
    var n;
    let { guildId: t, role: o, theme: S, content: C = g.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_FLAIR_PREVIEW_MESSAGE_TEXT, className: T } = e,
        m = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        A = E.ZP.useName(t, null, m),
        N = (0, s.Kz)(o),
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
                        author: m
                    }),
                    state: I.yb.SENT,
                    id: '0'
                }),
            [m, C]
        ),
        v = {
            nick: A,
            colorString: null !== (n = o.colorString) && void 0 !== n ? n : void 0
        };
    return (0, r.jsx)(a.ThemeProvider, {
        theme: S,
        children: (e) =>
            (0, r.jsx)('div', {
                className: l()(e, p.container, T),
                children: (0, r.jsx)(_.Z, {
                    hideTimestamp: !0,
                    author: v,
                    roleIcon: N,
                    message: h,
                    isGroupStart: !0,
                    disableInteraction: !0
                })
            })
    });
}
