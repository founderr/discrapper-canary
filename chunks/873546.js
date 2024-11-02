n.d(t, {
    Em: function () {
        return v;
    },
    eL: function () {
        return S;
    },
    tq: function () {
        return I;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d,
    f,
    _,
    h = n(264344),
    p = n.n(h);
let m = new Set(['iPad', 'Kindle', 'Kindle Fire', 'Nook', 'PlayBook']),
    g = new Set(['Android', 'iOS', 'Windows Phone']),
    E = (null === (i = window) || void 0 === i ? void 0 : null === (r = i.navigator) || void 0 === r ? void 0 : r.platform) === 'MacIntel' && void 0 !== (null === (s = window) || void 0 === s ? void 0 : null === (a = s.navigator) || void 0 === a ? void 0 : a.standalone) && (null === (l = window) || void 0 === l ? void 0 : null === (o = l.navigator) || void 0 === o ? void 0 : o.maxTouchPoints) > 1,
    v = m.has(null !== (f = p().product) && void 0 !== f ? f : '') || E,
    I = !v && g.has(null !== (_ = null === p() || void 0 === p() ? void 0 : null === (u = p().os) || void 0 === u ? void 0 : u.family) && void 0 !== _ ? _ : '');
null === p() || void 0 === p() || null === (c = p().os) || void 0 === c || c.family;
let S = (null === p() || void 0 === p() ? void 0 : null === (d = p().os) || void 0 === d ? void 0 : d.family) === 'Android';
