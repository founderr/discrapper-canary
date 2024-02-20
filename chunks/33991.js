"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("70102"), n("781738");
var r = n("893519"),
  a = n("273751"),
  o = n("386242"),
  i = n("717164"),
  u = n("193493"),
  s = n("584138"),
  l = n("640517"),
  c = n("567703"),
  f = n("559610"),
  d = n("475319"),
  p = n("159096"),
  h = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  m = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  _ = /^'([^]*?)'?$/,
  y = /''/g,
  g = /[a-zA-Z]/;

function v(e, t, n) {
  (0, f.default)(2, arguments);
  var v, b, M, w, k, L, D, S, T, Y, x, E, O, P, j, C, H, N, F = String(t),
    I = (0, d.getDefaultOptions)(),
    A = null !== (v = null !== (b = null == n ? void 0 : n.locale) && void 0 !== b ? b : I.locale) && void 0 !== v ? v : p.default,
    R = (0, c.default)(null !== (M = null !== (w = null !== (k = null !== (L = null == n ? void 0 : n.firstWeekContainsDate) && void 0 !== L ? L : null == n ? void 0 : null === (D = n.locale) || void 0 === D ? void 0 : null === (S = D.options) || void 0 === S ? void 0 : S.firstWeekContainsDate) && void 0 !== k ? k : I.firstWeekContainsDate) && void 0 !== w ? w : null === (T = I.locale) || void 0 === T ? void 0 : null === (Y = T.options) || void 0 === Y ? void 0 : Y.firstWeekContainsDate) && void 0 !== M ? M : 1);
  if (!(R >= 1 && R <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var W = (0, c.default)(null !== (x = null !== (E = null !== (O = null !== (P = null == n ? void 0 : n.weekStartsOn) && void 0 !== P ? P : null == n ? void 0 : null === (j = n.locale) || void 0 === j ? void 0 : null === (C = j.options) || void 0 === C ? void 0 : C.weekStartsOn) && void 0 !== O ? O : I.weekStartsOn) && void 0 !== E ? E : null === (H = I.locale) || void 0 === H ? void 0 : null === (N = H.options) || void 0 === N ? void 0 : N.weekStartsOn) && void 0 !== x ? x : 0);
  if (!(W >= 0 && W <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!A.localize) throw RangeError("locale must contain localize property");
  if (!A.formatLong) throw RangeError("locale must contain formatLong property");
  var z = (0, o.default)(e);
  if (!(0, r.default)(z)) throw RangeError("Invalid time value");
  var U = (0, s.default)(z),
    B = (0, a.default)(z, U),
    K = {
      firstWeekContainsDate: R,
      weekStartsOn: W,
      locale: A,
      _originalDate: z
    };
  return F.match(m).map(function(e) {
    var t = e[0];
    return "p" === t || "P" === t ? (0, u.default[t])(e, A.formatLong) : e
  }).join("").match(h).map(function(r) {
    if ("''" === r) return "'";
    var a = r[0];
    if ("'" === a) return function(e) {
      var t = e.match(_);
      return t ? t[1].replace(y, "'") : e
    }(r);
    var o = i.default[a];
    if (o) return !(null != n && n.useAdditionalWeekYearTokens) && (0, l.isProtectedWeekYearToken)(r) && (0, l.throwProtectedError)(r, t, String(e)), !(null != n && n.useAdditionalDayOfYearTokens) && (0, l.isProtectedDayOfYearToken)(r) && (0, l.throwProtectedError)(r, t, String(e)), o(B, r, A.localize, K);
    if (a.match(g)) throw RangeError("Format string contains an unescaped latin alphabet character `" + a + "`");
    return r
  }).join("")
}