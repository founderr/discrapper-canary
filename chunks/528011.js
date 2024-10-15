t.d(n, {
    g: function () {
        return S;
    },
    mI: function () {
        return I;
    }
}),
    t(47120);
var i = t(149765),
    r = t(399606),
    l = t(581883),
    o = t(430824),
    u = t(496675),
    s = t(914010),
    a = t(594174),
    c = t(700785),
    d = t(709054),
    _ = t(533244),
    E = t(487419),
    f = t(676770);
t(981631);
function I(e) {
    let n = (0, r.e7)([o.Z, u.Z], () => {
            let n = o.Z.getGuild(e);
            if (null == n) return !1;
            let t = u.Z.getGuildPermissions(n);
            return null != t && i.Db(t, f.cv);
        }),
        t = (0, r.e7)([E.Z], () => (null != e ? E.Z.getGuildIncident(e) : null)),
        l = null != t && (0, _.ur)(t);
    return {
        shouldShowIncidentActions: n,
        incidentData: t,
        isUnderLockdown: l
    };
}
function S() {
    var e;
    let n = (function (e) {
            let n = a.default.getCurrentUser(),
                t = E.Z.getIncidentsByGuild();
            for (let r of d.default.keys(t).map((e) => o.Z.getGuild(e))) {
                if (null == r) continue;
                let l = t[r.id];
                if (!(null == l || (!(0, _.i9)(l) && !(0, _.ur)(l)) || ((0, _.ur)(l) && r.id !== e))) {
                    if (
                        i.Db(
                            c.uB({
                                user: n,
                                context: r,
                                checkElevated: !1
                            }),
                            f.cv
                        )
                    )
                        return r.id;
                }
            }
            return null;
        })(s.Z.getGuildId()),
        t = null !== (e = l.Z.getGuildsProto()) && void 0 !== e ? e : {},
        r = null != n ? t[n] : null,
        u = null != r && r.disableRaidAlertNag;
    return {
        show: null != n && !u,
        guildId: n
    };
}
