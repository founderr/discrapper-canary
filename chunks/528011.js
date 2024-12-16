n.d(t, {
    g: function () {
        return E;
    },
    mI: function () {
        return g;
    }
}),
    n(47120);
var i = n(149765),
    r = n(399606),
    l = n(581883),
    o = n(430824),
    u = n(496675),
    a = n(914010),
    s = n(594174),
    c = n(700785),
    d = n(709054),
    f = n(533244),
    _ = n(487419),
    p = n(676770);
n(981631);
function g(e) {
    let t = (0, r.e7)([o.Z, u.Z], () => {
            let t = o.Z.getGuild(e);
            if (null == t) return !1;
            let n = u.Z.getGuildPermissions(t);
            return null != n && i.Db(n, p.cv);
        }),
        n = (0, r.e7)([_.Z], () => (null != e ? _.Z.getGuildIncident(e) : null)),
        l = null != n && (0, f.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: l
    };
}
function E() {
    var e;
    let t = (function (e) {
            let t = s.default.getCurrentUser(),
                n = _.Z.getIncidentsByGuild();
            for (let r of d.default.keys(n).map((e) => o.Z.getGuild(e))) {
                if (null == r) continue;
                let l = n[r.id];
                if (!(null == l || (!(0, f.i9)(l) && !(0, f.ur)(l)) || ((0, f.ur)(l) && r.id !== e))) {
                    if (
                        i.Db(
                            c.uB({
                                user: t,
                                context: r,
                                checkElevated: !1
                            }),
                            p.cv
                        )
                    )
                        return r.id;
                }
            }
            return null;
        })(a.Z.getGuildId()),
        n = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
        r = null != t ? n[t] : null,
        u = null != r && r.disableRaidAlertNag;
    return {
        show: null != t && !u,
        guildId: t
    };
}
