a.d(s, {
    D: function () {
        return _;
    }
});
var n = a(735250),
    r = a(470079),
    l = a(481060),
    t = a(184301),
    i = a(103575),
    o = a(5192),
    E = a(689938),
    c = a(186426);
function _(e) {
    let { user: s, channel: a } = e,
        { nick: _, avatar: u } = r.useMemo(() => {
            let e = null == s ? void 0 : s.getAvatarURL(null == a ? void 0 : a.guild_id, 48, !1);
            return {
                nick: o.ZP.getName(null == a ? void 0 : a.guild_id, null == a ? void 0 : a.id, s),
                avatar: e
            };
        }, [s, a]);
    return (0, n.jsx)(l.Popout, {
        preload: () => (0, t.Z)(s.id, u),
        renderPopout: (e) =>
            (0, n.jsx)(i.Z, {
                ...e,
                location: 'GameProfileEntry',
                userId: s.id
            }),
        children: (e) =>
            (0, n.jsx)(l.Clickable, {
                ...e,
                children: (0, n.jsx)('img', {
                    className: c.avatar,
                    src: u,
                    alt: E.Z.Messages.GAME_PROFILE_USER_AVATAR_ALT.format({ userName: _ })
                })
            })
    });
}
