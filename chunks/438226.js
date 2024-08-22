t.d(n, {
    HV: function () {
        return o;
    },
    IS: function () {
        return r;
    },
    VY: function () {
        return u;
    }
}),
    t(627494),
    t(757143),
    t(201133);
var a = t(5192),
    l = t(561308),
    i = t(689938);
let r = (e, n) =>
        i.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: n.username,
            activity: e.extra.game_name
        }),
    s = (e) => {
        let n = (0, l.kr)(e);
        return (0, l.Ol)(e) ? (n ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME) : n ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
    },
    o = (e, n, t) => {
        let l = s(e),
            i = a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, t),
            r = e.extra.game_name;
        return l
            .plainFormat({
                gameName: r,
                userName: i
            })
            .replaceAll('*', '');
    },
    u = (e) => {
        let { entry: n, channel: t, users: r, countOthers: s } = e;
        return ((0, l.kr)(n) ? i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING : i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED)
            .plainFormat({
                gameName: n.extra.game_name,
                user1: a.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, r[0]),
                user2: a.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, r[1]),
                countOthers: s
            })
            .replaceAll('*', '');
    };
