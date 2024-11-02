e.r(t);
var i = e(200651);
e(192379);
var l = e(481060),
    a = e(239091),
    r = e(108843),
    u = e(100527),
    o = e(299206),
    c = e(423589),
    d = e(398048),
    s = e(315732),
    p = e(3689),
    _ = e(323597),
    h = e(852245),
    Z = e(367722),
    f = e(776568),
    g = e(218035),
    E = e(775666),
    M = e(593589),
    x = e(442754),
    I = e(981631),
    C = e(388032);
t.default = (0, r.Z)(
    function (n) {
        let { channel: t, guild: e, includeTopic: r = !1, onSelect: u } = n,
            j = (0, x.Z)(t),
            N = (0, f.ZP)(t),
            b = (0, g.Z)(t),
            P = (0, s.Z)(t),
            T = (0, h.Z)(t),
            v = (0, Z.Z)(t, e),
            m = (0, d.Z)(t, e),
            y = (0, p.Z)(t, e, I.d4z.GUILD_TEXT),
            A = (0, p.Z)(t, e, I.d4z.GUILD_VOICE),
            G = (0, _.Z)(t),
            L = (0, o.Z)({
                id: t.id,
                label: C.intl.string(C.t.gFHI3t)
            }),
            O = (0, M.Z)(t, 'title_context_menu'),
            U = (0, c.Mn)('ChannelTitleContextMenu'),
            w = (0, E.ZP)(t);
        return (0, i.jsxs)(l.Menu, {
            navId: 'channel-context',
            onClose: a.Zy,
            'aria-label': C.intl.string(C.t.Xm41aW),
            onSelect: u,
            children: [
                (0, i.jsx)(l.MenuGroup, { children: j }),
                (0, i.jsx)(l.MenuGroup, { children: N }),
                (0, i.jsxs)(l.MenuGroup, {
                    children: [r ? P : U ? w : b, T]
                }),
                (0, i.jsxs)(l.MenuGroup, {
                    children: [v, m, y, A]
                }),
                (0, i.jsx)(l.MenuGroup, { children: O }),
                (0, i.jsx)(l.MenuGroup, { children: G }),
                (0, i.jsx)(l.MenuGroup, { children: L })
            ]
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_TITLE_MENU]
);
