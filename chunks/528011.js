n.d(t, {
    g: function () {
        return S;
    },
    mI: function () {
        return I;
    }
}),
    n(47120);
var r = n(149765),
    i = n(399606),
    o = n(581883),
    u = n(430824),
    l = n(496675),
    s = n(914010),
    a = n(594174),
    c = n(700785),
    d = n(709054),
    _ = n(533244),
    E = n(487419),
    f = n(676770);
n(981631);
function I(e) {
    let t = (0, i.e7)([u.Z, l.Z], () => {
            let t = u.Z.getGuild(e);
            if (null == t) return !1;
            let n = l.Z.getGuildPermissions(t);
            return null != n && r.Db(n, f.cv);
        }),
        n = (0, i.e7)([E.Z], () => (null != e ? E.Z.getGuildIncident(e) : null)),
        o = null != n && (0, _.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: o
    };
}
function S() {
    var e;
    let t = (function (e) {
            let t = a.default.getCurrentUser(),
                n = E.Z.getIncidentsByGuild();
            for (let i of d.default.keys(n).map((e) => u.Z.getGuild(e))) {
                if (null == i) continue;
                let o = n[i.id];
                if (!(null == o || (!(0, _.i9)(o) && !(0, _.ur)(o)) || ((0, _.ur)(o) && i.id !== e))) {
                    if (
                        r.Db(
                            c.uB({
                                user: t,
                                context: i,
                                checkElevated: !1
                            }),
                            f.cv
                        )
                    )
                        return i.id;
                }
            }
            return null;
        })(s.Z.getGuildId()),
        n = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
        i = null != t ? n[t] : null,
        l = null != i && i.disableRaidAlertNag;
    return {
        show: null != t && !l,
        guildId: t
    };
}
