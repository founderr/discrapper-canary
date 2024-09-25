n.d(t, {
    u: function () {
        return E;
    }
});
var r = n(653041);
var i = n(853856),
    a = n(706590),
    o = n(703656),
    s = n(769654),
    l = n(592125),
    u = n(496675),
    c = n(914010),
    d = n(771845),
    _ = n(981631);
let E = {
    binds: (() => {
        let e = 10,
            t = [];
        for (let n = 1; n < e; n++) t.push('mod+'.concat(n));
        return t;
    })(),
    comboKeysBindGlobal: !0,
    action(e, t) {
        let n,
            r = parseInt(t.split('+')[1], 10);
        return (0 === r && (r = 10), isNaN(r) || 0 === r || null == (n = 1 === r ? _.ME : (0, a.z)(i.Z, l.Z, u.Z) ? (2 === r ? _.I_8 : d.ZP.getFlattenedGuildIds()[r - 3]) : d.ZP.getFlattenedGuildIds()[r - 2])) ? void 0 : n === _.ME && null == c.Z.getGuildId() ? ((0, o.uL)(_.Z5c.CHANNEL(n)), !1) : ((0, s.X)(n), !1);
    }
};
