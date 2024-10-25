n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120),
    n(773603);
var i = n(192379),
    a = n(442837),
    s = n(693546),
    r = n(826581),
    l = n(937111),
    o = n(430824),
    c = n(496675),
    u = n(709054),
    d = n(981631);
function _(e) {
    let [t, n] = i.useState(!1),
        [_, E] = i.useState(!1),
        I = u.default.cast(e),
        { joinRequest: m, guild: f } = (0, a.cj)([r.Z, l.Z, o.Z, c.Z], () => {
            var e;
            let t = r.Z.getRequest(I);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null
                };
            let n = null !== (e = o.Z.getGuild(t.guildId)) && void 0 !== e ? e : l.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && c.Z.can(d.Plq.KICK_MEMBERS, n),
                guild: n
            };
        });
    return (
        i.useEffect(() => {
            null == f && !_ && (E(!0), s.Z.fetchRequestToJoinGuilds());
        }, [f, _]),
        i.useEffect(() => {
            null == m &&
                (n(!0),
                s.Z.fetchGuildJoinRequest(I).finally(() => {
                    n(!1);
                }));
        }, [m, I]),
        {
            loading: t,
            joinRequest: m,
            joinRequestGuild: f
        }
    );
}
