t.d(e, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    a = t(45114),
    u = t(456269),
    o = t(344185),
    d = t(569471),
    c = t(131704),
    s = t(324067),
    h = t(306680),
    f = t(981631),
    Z = t(388032);
function p(n) {
    let e = (function (n) {
        let e = (0, u.n2)(n.guild_id, n.id),
            t = (0, r.e7)(
                [h.ZP, s.Z, o.Z, d.Z],
                () => {
                    if (n.isForumPost()) return h.ZP.isForumPostUnread(n.id);
                    if (n.type !== f.d4z.GUILD_CATEGORY) return h.ZP.hasUnreadOrMentions(n.id);
                    {
                        let e = s.Z.getCategories(n.getGuildId());
                        if (null == e[n.id]) return !1;
                        if (
                            e[n.id].some((n) => {
                                let { channel: e } = n;
                                return (0, c.Em)(e.type) && h.ZP.hasUnreadOrMentions(e.id);
                            })
                        )
                            return !0;
                        let t = new Set(e[n.id].map((n) => n.channel.id)),
                            i = o.Z.getThreadsForGuild(n.guild_id);
                        for (let n in i)
                            if (t.has(n)) {
                                for (let e in i[n]) if (d.Z.hasJoined(e) && !d.Z.isMuted(e) && h.ZP.hasUnreadOrMentions(e)) return !0;
                            }
                        return !1;
                    }
                },
                [n]
            );
        return n.isForumLikeChannel() ? e > 0 : t;
    })(n);
    return (0, i.jsx)(l.MenuItem, {
        id: 'mark-channel-read',
        label: Z.intl.string(Z.t.e6RscX),
        action: function () {
            (0, a.U6)(n);
        },
        disabled: !e
    });
}
