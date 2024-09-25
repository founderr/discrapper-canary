n.d(t, {
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
    n(627494),
    n(757143),
    n(201133);
var a = n(5192),
    l = n(561308),
    i = n(689938);
let r = (e, t) =>
        i.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
            username: t.username,
            activity: e.extra.game_name
        }),
    s = (e) => {
        let t = (0, l.kr)(e);
        return (0, l.Ol)(e) ? (t ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_NEW_GAME : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_NEW_GAME) : t ? i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_IS_PLAYING_GAME : i.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_PLAYED_GAME;
    },
    o = (e, t, n) => {
        let l = s(e),
            i = a.ZP.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
            r = e.extra.game_name;
        return l
            .plainFormat({
                gameName: r,
                userName: i
            })
            .replaceAll('*', '');
    },
    u = (e) => {
        let { entry: t, channel: n, users: r, countOthers: s } = e;
        return ((0, l.kr)(t) ? i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYING : i.Z.Messages.CONTENT_INVENTORY_REACTION_USER_PLAYED)
            .plainFormat({
                gameName: t.extra.game_name,
                user1: a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[0]),
                user2: a.ZP.getName(null == n ? void 0 : n.guild_id, null == n ? void 0 : n.id, r[1]),
                countOthers: s
            })
            .replaceAll('*', '');
    };
