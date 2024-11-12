var i = e(392711),
    l = e.n(i),
    o = e(853856),
    r = e(706590),
    u = e(905423),
    a = e(592125),
    d = e(496675),
    E = e(944486),
    s = e(771845),
    c = e(774343),
    _ = e(475468),
    C = e(981631);
t.Z = l().throttle(function () {
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
        t = s.ZP.getFlattenedGuildIds(),
        e = (function (n) {
            let t = u.Z.getState().guildId;
            if (null == t) return -2;
            if (t === C.I_8) return -1;
            let e = n.indexOf(t);
            return -1 === e ? -2 : e;
        })(t);
    if ((-1 === (e += n) && !(0, r.z)(o.Z, a.Z, d.Z) && (e += n), -3 === e && (e = t.length - 1), e >= t.length || -2 === e)) {
        (0, _.z)(c.Z.getHomeLink());
        return;
    }
    let i = -1 === e ? C.I_8 : t[e],
        l = E.Z.getChannelId(i);
    (0, _.K)(i, l === i ? null : l, !1);
}, C.aZC);
