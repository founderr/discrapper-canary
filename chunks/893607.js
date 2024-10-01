n.d(t, {
    Hw: function () {
        return _;
    },
    Ss: function () {
        return u;
    },
    cq: function () {
        return c;
    }
});
var r = n(47120);
var i = n(392711);
var a = n(860911),
    o = n(981631),
    s = n(176505);
let l = /^\d+$/;
function u(e) {
    return null != e && (!!(e === o.ME || e === o.I_8 || e === o.o_z || l.test(e)) || !1);
}
function c(e) {
    return !!(null == e || l.test(e) || (0, s.AB)(e)) || !1;
}
function d(e, t) {
    let { optional: n = !1 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return new a.Zn(
        ':'
            .concat((0, i.escapeRegExp)(e), '(')
            .concat(t, ')')
            .concat(n ? '?' : '')
    );
}
let _ = {
    guildId() {
        let { name: e = 'guildId', optional: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [o.ME, o.I_8, o.o_z].map(i.escapeRegExp).join('|');
        return d(e, ''.concat(n, '|\\d+'), { optional: t });
    },
    channelId() {
        let { name: e = 'channelId', optional: t = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = [...s.Vg].map(i.escapeRegExp).join('|');
        return d(e, ''.concat(n, '|\\d+'), { optional: t });
    }
};
