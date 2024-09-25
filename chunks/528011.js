n.d(t, {
    g: function () {
        return I;
    },
    mI: function () {
        return m;
    }
});
var r = n(47120);
var i = n(149765),
    a = n(399606),
    o = n(581883),
    s = n(430824),
    l = n(496675),
    u = n(914010),
    c = n(594174),
    d = n(700785),
    _ = n(709054),
    E = n(533244),
    f = n(487419),
    h = n(676770);
n(981631);
function p(e) {
    let t = c.default.getCurrentUser(),
        n = f.Z.getIncidentsByGuild();
    for (let r of _.default.keys(n).map((e) => s.Z.getGuild(e))) {
        if (null == r) continue;
        let a = n[r.id];
        if (!(null == a || (!(0, E.i9)(a) && !(0, E.ur)(a)) || ((0, E.ur)(a) && r.id !== e))) {
            if (
                i.Db(
                    d.uB({
                        user: t,
                        context: r,
                        checkElevated: !1
                    }),
                    h.cv
                )
            )
                return r.id;
        }
    }
    return null;
}
function m(e) {
    let t = (0, a.e7)([s.Z, l.Z], () => {
            let t = s.Z.getGuild(e);
            if (null == t) return !1;
            let n = l.Z.getGuildPermissions(t);
            return null != n && i.Db(n, h.cv);
        }),
        n = (0, a.e7)([f.Z], () => (null != e ? f.Z.getGuildIncident(e) : null)),
        r = null != n && (0, E.ur)(n);
    return {
        shouldShowIncidentActions: t,
        incidentData: n,
        isUnderLockdown: r
    };
}
function I() {
    var e;
    let t = p(u.Z.getGuildId()),
        n = null !== (e = o.Z.getGuildsProto()) && void 0 !== e ? e : {},
        r = null != t ? n[t] : null,
        i = null != r && r.disableRaidAlertNag;
    return {
        show: null != t && !i,
        guildId: t
    };
}
