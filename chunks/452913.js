var i = t(392711),
    o = t.n(i),
    l = t(853856),
    E = t(706590),
    r = t(905423),
    a = t(592125),
    u = t(496675),
    d = t(944486),
    s = t(771845),
    _ = t(774343),
    c = t(475468),
    A = t(981631);
n.Z = o().throttle(function () {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        n = s.ZP.getFlattenedGuildIds(),
        t = (function (e) {
            let n = r.Z.getState().guildId;
            if (null == n) return -2;
            if (n === A.I_8) return -1;
            let t = e.indexOf(n);
            return -1 === t ? -2 : t;
        })(n);
    if ((-1 === (t += e) && !(0, E.z)(l.Z, a.Z, u.Z) && (t += e), -3 === t && (t = n.length - 1), t >= n.length || -2 === t)) {
        (0, c.z)(_.Z.getHomeLink());
        return;
    }
    let i = -1 === t ? A.I_8 : n[t],
        o = d.Z.getChannelId(i);
    (0, c.K)(i, o === i ? null : o, !1);
}, A.aZC);
