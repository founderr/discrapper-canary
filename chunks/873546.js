r.d(n, {
    Em: function () {
        return T;
    },
    eL: function () {
        return y;
    },
    tq: function () {
        return b;
    }
});
var i,
    a,
    s,
    o,
    l,
    u,
    c,
    d,
    f,
    _,
    h,
    p = r(47120);
var m = r(264344),
    g = r.n(m);
let E = new Set(['iPad', 'Kindle', 'Kindle Fire', 'Nook', 'PlayBook']),
    v = new Set(['Android', 'iOS', 'Windows Phone']),
    I = (null === (a = window) || void 0 === a ? void 0 : null === (i = a.navigator) || void 0 === i ? void 0 : i.platform) === 'MacIntel' && void 0 !== (null === (o = window) || void 0 === o ? void 0 : null === (s = o.navigator) || void 0 === s ? void 0 : s.standalone) && (null === (u = window) || void 0 === u ? void 0 : null === (l = u.navigator) || void 0 === l ? void 0 : l.maxTouchPoints) > 1,
    T = E.has(null !== (_ = g().product) && void 0 !== _ ? _ : '') || I,
    b = !T && v.has(null !== (h = null === g() || void 0 === g() ? void 0 : null === (c = g().os) || void 0 === c ? void 0 : c.family) && void 0 !== h ? h : '');
null === g() || void 0 === g() || null === (d = g().os) || void 0 === d || d.family;
let y = (null === g() || void 0 === g() ? void 0 : null === (f = g().os) || void 0 === f ? void 0 : f.family) === 'Android';
