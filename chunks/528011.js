t.d(n, {
    g: function () {
        return g;
    },
    mI: function () {
        return E;
    }
}),
    t(47120);
var i = t(149765),
    r = t(399606),
    l = t(581883),
    o = t(430824),
    u = t(496675),
    a = t(914010),
    s = t(594174),
    c = t(700785),
    d = t(709054),
    f = t(533244),
    p = t(487419),
    _ = t(676770);
t(981631);
function E(e) {
    let n = (0, r.e7)([o.Z, u.Z], () => {
            let n = o.Z.getGuild(e);
            if (null == n) return !1;
            let t = u.Z.getGuildPermissions(n);
            return null != t && i.Db(t, _.cv);
        }),
        t = (0, r.e7)([p.Z], () => (null != e ? p.Z.getGuildIncident(e) : null)),
        l = null != t && (0, f.ur)(t);
    return {
        shouldShowIncidentActions: n,
        incidentData: t,
        isUnderLockdown: l
    };
}
function g() {
    var e;
    let n = (function (e) {
            let n = s.default.getCurrentUser(),
                t = p.Z.getIncidentsByGuild();
            for (let r of d.default.keys(t).map((e) => o.Z.getGuild(e))) {
                if (null == r) continue;
                let l = t[r.id];
                if (!(null == l || (!(0, f.i9)(l) && !(0, f.ur)(l)) || ((0, f.ur)(l) && r.id !== e))) {
                    if (
                        i.Db(
                            c.uB({
                                user: n,
                                context: r,
                                checkElevated: !1
                            }),
                            _.cv
                        )
                    )
                        return r.id;
                }
            }
            return null;
        })(a.Z.getGuildId()),
        t = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
        r = null != n ? t[n] : null,
        u = null != r && r.disableRaidAlertNag;
    return {
        show: null != n && !u,
        guildId: n
    };
}
