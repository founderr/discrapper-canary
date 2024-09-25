n.d(t, {
    Em: function () {
        return g;
    },
    eL: function () {
        return A;
    },
    tq: function () {
        return S;
    }
});
var r,
    i,
    a,
    o,
    s,
    l,
    u,
    c,
    d,
    _,
    E,
    f = n(47120);
var h = n(264344),
    p = n.n(h);
let m = new Set(['iPad', 'Kindle', 'Kindle Fire', 'Nook', 'PlayBook']),
    I = new Set(['Android', 'iOS', 'Windows Phone']),
    T = (null === (i = window) || void 0 === i ? void 0 : null === (r = i.navigator) || void 0 === r ? void 0 : r.platform) === 'MacIntel' && void 0 !== (null === (o = window) || void 0 === o ? void 0 : null === (a = o.navigator) || void 0 === a ? void 0 : a.standalone) && (null === (l = window) || void 0 === l ? void 0 : null === (s = l.navigator) || void 0 === s ? void 0 : s.maxTouchPoints) > 1,
    g = m.has(null !== (_ = p().product) && void 0 !== _ ? _ : '') || T,
    S = !g && I.has(null !== (E = null === p() || void 0 === p() ? void 0 : null === (u = p().os) || void 0 === u ? void 0 : u.family) && void 0 !== E ? E : '');
null === p() || void 0 === p() || null === (c = p().os) || void 0 === c || c.family;
let A = (null === p() || void 0 === p() ? void 0 : null === (d = p().os) || void 0 === d ? void 0 : d.family) === 'Android';
