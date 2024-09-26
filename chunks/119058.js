n.r(t),
    n.d(t, {
        default: function () {
            return T;
        }
    });
var r = n(310644),
    i = n(465735),
    a = n(528734),
    o = n(570289),
    s = n(128961),
    l = n(424421),
    u = n(198050),
    c = n(217224),
    d = n(951516),
    _ = n(633605),
    E = n(393655),
    f = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    h = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    p = /^'([^]*?)'?$/,
    m = /''/g,
    I = /[a-zA-Z]/;
function T(e, t, n) {
    (0, d.Z)(2, arguments);
    var p,
        m,
        T,
        S,
        A,
        v,
        N,
        O,
        R,
        C,
        y,
        L,
        b,
        D,
        M,
        P,
        U,
        w,
        x = String(t),
        G = (0, _.j)(),
        k = null !== (p = null !== (m = null == n ? void 0 : n.locale) && void 0 !== m ? m : G.locale) && void 0 !== p ? p : E.Z,
        B = (0, c.Z)(null !== (T = null !== (S = null !== (A = null !== (v = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== v ? v : null == n ? void 0 : null === (N = n.locale) || void 0 === N ? void 0 : null === (O = N.options) || void 0 === O ? void 0 : O.firstWeekContainsDate) && void 0 !== A ? A : G.firstWeekContainsDate) && void 0 !== S ? S : null === (R = G.locale) || void 0 === R ? void 0 : null === (C = R.options) || void 0 === C ? void 0 : C.firstWeekContainsDate) && void 0 !== T ? T : 1);
    if (!(B >= 1 && B <= 7)) throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var F = (0, c.Z)(null !== (y = null !== (L = null !== (b = null !== (D = null == n ? void 0 : n.weekStartsOn) && void 0 !== D ? D : null == n ? void 0 : null === (M = n.locale) || void 0 === M ? void 0 : null === (P = M.options) || void 0 === P ? void 0 : P.weekStartsOn) && void 0 !== b ? b : G.weekStartsOn) && void 0 !== L ? L : null === (U = G.locale) || void 0 === U ? void 0 : null === (w = U.options) || void 0 === w ? void 0 : w.weekStartsOn) && void 0 !== y ? y : 0);
    if (!(F >= 0 && F <= 6)) throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if (!k.localize) throw RangeError('locale must contain localize property');
    if (!k.formatLong) throw RangeError('locale must contain formatLong property');
    var Z = (0, a.default)(e);
    if (!(0, r.default)(Z)) throw RangeError('Invalid time value');
    var V = (0, l.Z)(Z),
        H = (0, i.Z)(Z, V),
        Y = {
            firstWeekContainsDate: B,
            weekStartsOn: F,
            locale: k,
            _originalDate: Z
        };
    return x
        .match(h)
        .map(function (e) {
            var t = e[0];
            return 'p' === t || 'P' === t ? (0, s.Z[t])(e, k.formatLong) : e;
        })
        .join('')
        .match(f)
        .map(function (r) {
            if ("''" === r) return "'";
            var i = r[0];
            if ("'" === i) return g(r);
            var a = o.Z[i];
            if (a) return !(null != n && n.useAdditionalWeekYearTokens) && (0, u.Do)(r) && (0, u.qp)(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, u.Iu)(r) && (0, u.qp)(r, t, String(e)), a(H, r, k.localize, Y);
            if (i.match(I)) throw RangeError('Format string contains an unescaped latin alphabet character `' + i + '`');
            return r;
        })
        .join('');
}
function g(e) {
    var t = e.match(p);
    return t ? t[1].replace(m, "'") : e;
}
