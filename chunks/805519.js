n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(47120);
var i = n(773603);
var a = n(470079),
    o = n(442837),
    s = n(693546),
    l = n(826581),
    u = n(937111),
    c = n(430824),
    d = n(496675),
    _ = n(709054),
    E = n(981631);
function f(e) {
    let [t, n] = a.useState(!1),
        [r, i] = a.useState(!1),
        f = _.default.cast(e),
        { joinRequest: h, guild: p } = (0, o.cj)([l.Z, u.Z, c.Z, d.Z], () => {
            var e;
            let t = l.Z.getRequest(f);
            if (null == t)
                return {
                    joinRequest: null,
                    isModmin: !1,
                    guild: null
                };
            let n = null !== (e = c.Z.getGuild(t.guildId)) && void 0 !== e ? e : u.Z.getJoinRequestGuild(t.guildId);
            return {
                joinRequest: t,
                isModmin: null != n && d.Z.can(E.Plq.KICK_MEMBERS, n),
                guild: n
            };
        });
    return (
        a.useEffect(() => {
            null == p && !r && (i(!0), s.Z.fetchRequestToJoinGuilds());
        }, [p, r]),
        a.useEffect(() => {
            null == h &&
                (n(!0),
                s.Z.fetchGuildJoinRequest(f).finally(() => {
                    n(!1);
                }));
        }, [h, f]),
        {
            loading: t,
            joinRequest: h,
            joinRequestGuild: p
        }
    );
}
