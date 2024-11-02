e.d(t, {
    Z: function () {
        return _;
    }
}),
    e(47120);
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(481060),
    u = e(45114),
    a = e(456269),
    d = e(344185),
    o = e(569471),
    s = e(131704),
    c = e(324067),
    f = e(306680),
    Z = e(981631),
    h = e(388032);
function _(n) {
    let t = (function (n) {
        let t = (0, a.n2)(n.guild_id, n.id),
            e = (0, r.e7)(
                [f.ZP, c.Z, d.Z, o.Z],
                () => {
                    if (n.isForumPost()) return f.ZP.isForumPostUnread(n.id);
                    if (n.type !== Z.d4z.GUILD_CATEGORY) return f.ZP.hasUnreadOrMentions(n.id);
                    {
                        let t = c.Z.getCategories(n.getGuildId());
                        if (null == t[n.id]) return !1;
                        if (
                            t[n.id].some((n) => {
                                let { channel: t } = n;
                                return (0, s.Em)(t.type) && f.ZP.hasUnreadOrMentions(t.id);
                            })
                        )
                            return !0;
                        let e = new Set(t[n.id].map((n) => n.channel.id)),
                            i = d.Z.getThreadsForGuild(n.guild_id);
                        for (let n in i)
                            if (e.has(n)) {
                                for (let t in i[n]) if (o.Z.hasJoined(t) && !o.Z.isMuted(t) && f.ZP.hasUnreadOrMentions(t)) return !0;
                            }
                        return !1;
                    }
                },
                [n]
            );
        return n.isForumLikeChannel() ? t > 0 : e;
    })(n);
    return (0, i.jsx)(l.MenuItem, {
        id: 'mark-channel-read',
        label: h.intl.string(h.t.e6RscX),
        action: function () {
            (0, u.U6)(n);
        },
        disabled: !t
    });
}
