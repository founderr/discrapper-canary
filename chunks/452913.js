var l = t(392711),
    i = t.n(l),
    o = t(853856),
    a = t(706590),
    u = t(905423),
    r = t(592125),
    d = t(496675),
    c = t(944486),
    s = t(771845),
    E = t(774343),
    C = t(475468),
    _ = t(981631);
n.Z = i().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        n = s.ZP.getFlattenedGuildIds(),
        t = (function (e) {
            let n = u.Z.getState().guildId;
            if (null == n) return -2;
            if (n === _.I_8) return -1;
            let t = e.indexOf(n);
            return -1 === t ? -2 : t;
        })(n);
    if ((-1 === (t += e) && !(0, a.z)(o.Z, r.Z, d.Z) && (t += e), -3 === t && (t = n.length - 1), t >= n.length || -2 === t)) {
        (0, C.z)(E.Z.getHomeLink());
        return;
    }
    let l = -1 === t ? _.I_8 : n[t],
        i = c.Z.getChannelId(l);
    (0, C.K)(l, i === l ? null : i, !1);
}, _.aZC);
