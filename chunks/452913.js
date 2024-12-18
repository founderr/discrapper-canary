var i = e(392711),
    o = e.n(i),
    r = e(853856),
    l = e(706590),
    d = e(905423),
    s = e(592125),
    u = e(496675),
    a = e(944486),
    c = e(771845),
    E = e(774343),
    C = e(475468),
    b = e(981631);
t.Z = o().throttle(function () {
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = c.ZP.getFlattenedGuildIds(),
        e = (function (n) {
            let t = d.Z.getState().guildId;
            if (null == t) return -2;
            if (t === b.I_8) return -1;
            let e = n.indexOf(t);
            return -1 === e ? -2 : e;
        })(t);
    if ((-1 === (e += n) && !(0, l.z)(r.Z, s.Z, u.Z) && (e += n), -3 === e && (e = t.length - 1), e >= t.length || -2 === e)) {
        (0, C.z)(E.Z.getHomeLink());
        return;
    }
    let i = -1 === e ? b.I_8 : t[e],
        o = a.Z.getChannelId(i);
    (0, C.K)(i, o === i ? null : o, !1);
}, b.aZC);
