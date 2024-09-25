n.d(t, {
    i: function () {
        return _;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(399606),
    o = n(430824),
    s = n(339085),
    l = n(906411),
    u = n(231053),
    c = n(981631);
let d = (e, t, n) => {
        let r = null != n ? e.getCustomEmojiById(n) : null;
        if ((null == r ? void 0 : r.type) === l.B.GUILD)
            return {
                emoji: r,
                joinedEmojiSourceGuildRecord: t.getGuild(null == r ? void 0 : r.guildId)
            };
        return {
            emoji: null,
            joinedEmojiSourceGuildRecord: null
        };
    },
    _ = (e) => {
        let { emojiId: t, refreshPositionKey: n } = e,
            { joinedEmojiSourceGuildRecord: r, emoji: l } = (0, a.cj)([s.ZP, o.Z], () => d(s.ZP, o.Z, t)),
            _ = null != r,
            E = null != r && r.hasFeature(c.oNc.DISCOVERABLE),
            f = (!_ || E) && null != t,
            [h, p] = i.useState(f),
            [m, I] = i.useState(null),
            T = null != r ? u.JO.createFromGuildRecord(r) : null,
            [g, S] = i.useState(T),
            [A, v] = i.useState(null);
        return (
            i.useEffect(() => {
                null == n || n();
                let e = async () => {
                    let e = null != t ? await (0, u.Fi)(t) : null;
                    if (null != e)
                        switch ((I(e.type), e.type)) {
                            case u.w6.APPLICATION:
                                v(e.application);
                                break;
                            case u.w6.GUILD:
                                S(e.guild);
                        }
                    p(!1), null == n || n();
                };
                if (f) {
                    e();
                    return;
                }
                null == n || n();
            }, [t, f]),
            {
                expressionSourceGuild: g,
                expressionSourceApplication: A,
                sourceType: m,
                joinedEmojiSourceGuildRecord: r,
                hasJoinedEmojiSourceGuild: _,
                emoji: l,
                isFetching: h
            }
        );
    };
