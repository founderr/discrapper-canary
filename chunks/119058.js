n.r(t),
    n.d(t, {
        default: function () {
            return v;
        }
    });
var r = n(310644),
    i = n(465735),
    a = n(528734),
    s = n(570289),
    o = n(128961),
    l = n(424421),
    u = n(198050),
    c = n(217224),
    d = n(951516),
    f = n(633605),
    _ = n(393655),
    h = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    p = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    m = /^'([^]*?)'?$/,
    g = /''/g,
    E = /[a-zA-Z]/;
function v(e, t, n) {
    (0, d.Z)(2, arguments);
    var v,
        I,
        S,
        T,
        b,
        y,
        A,
        N,
        C,
        R,
        O,
        D,
        L,
        x,
        w,
        M,
        P,
        k,
        U = String(t),
        G = (0, f.j)(),
        B = null !== (v = null !== (I = null == n ? void 0 : n.locale) && void 0 !== I ? I : G.locale) && void 0 !== v ? v : _.Z,
        Z = (0, c.Z)(null !== (S = null !== (T = null !== (b = null !== (y = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== y ? y : null == n ? void 0 : null === (A = n.locale) || void 0 === A ? void 0 : null === (N = A.options) || void 0 === N ? void 0 : N.firstWeekContainsDate) && void 0 !== b ? b : G.firstWeekContainsDate) && void 0 !== T ? T : null === (C = G.locale) || void 0 === C ? void 0 : null === (R = C.options) || void 0 === R ? void 0 : R.firstWeekContainsDate) && void 0 !== S ? S : 1);
    if (!(Z >= 1 && Z <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var F = (0, c.Z)(null !== (O = null !== (D = null !== (L = null !== (x = null == n ? void 0 : n.weekStartsOn) && void 0 !== x ? x : null == n ? void 0 : null === (w = n.locale) || void 0 === w ? void 0 : null === (M = w.options) || void 0 === M ? void 0 : M.weekStartsOn) && void 0 !== L ? L : G.weekStartsOn) && void 0 !== D ? D : null === (P = G.locale) || void 0 === P ? void 0 : null === (k = P.options) || void 0 === k ? void 0 : k.weekStartsOn) && void 0 !== O ? O : 0);
    if (!(F >= 0 && F <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (!B.localize) throw RangeError('locale must contain localize property');
    if (!B.formatLong) throw RangeError('locale must contain formatLong property');
    var V = (0, a.default)(e);
    if (!(0, r.default)(V)) throw RangeError('Invalid time value');
    var H = (0, l.Z)(V),
        j = (0, i.Z)(V, H),
        Y = {
            firstWeekContainsDate: Z,
            weekStartsOn: F,
            locale: B,
            _originalDate: V
        };
    return U.match(p)
        .map(function (e) {
            var t = e[0];
            return 'p' === t || 'P' === t ? (0, o.Z[t])(e, B.formatLong) : e;
        })
        .join('')
        .match(h)
        .map(function (r) {
            if ("''" === r) return "'";
            var i = r[0];
            if ("'" === i)
                return (function (e) {
                    var t = e.match(m);
                    return t ? t[1].replace(g, "'") : e;
                })(r);
            var a = s.Z[i];
            if (a) return !(null != n && n.useAdditionalWeekYearTokens) && (0, u.Do)(r) && (0, u.qp)(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, u.Iu)(r) && (0, u.qp)(r, t, String(e)), a(j, r, B.localize, Y);
            if (i.match(E)) throw RangeError('Format string contains an unescaped latin alphabet character `' + i + '`');
            return r;
        })
        .join('');
}
