t.d(n, {
    FB: function () {
        return T;
    },
    Pu: function () {
        return C;
    },
    Vt: function () {
        return l;
    },
    XX: function () {
        return c;
    },
    Zs: function () {
        return L;
    },
    c7: function () {
        return A;
    },
    eS: function () {
        return S;
    },
    fr: function () {
        return N;
    },
    ox: function () {
        return u;
    }
}),
    t(724458);
var i = t(913527),
    E = t.n(i),
    r = t(406432),
    I = t(531441),
    s = t(800530),
    _ = t(981631),
    a = t(959517),
    o = t(388032);
function c(e) {
    return E()().to(E()(e));
}
function S(e) {
    var n, t;
    return (0, r.CO)(e.filename) || (0, r.NU)(e.filename) ? ''.concat(a._j).concat(null !== (n = e.filename) && void 0 !== n ? n : '.png') : null !== (t = e.filename) && void 0 !== t ? t : '';
}
function N(e) {
    var n, t, i, E;
    if (null == e.fields) return;
    let r = e.fields.reduce((e, n) => ((e[n.rawName] = n.rawValue), e), {});
    return {
        header: null !== (n = r[s.I5.HEADER]) && void 0 !== n ? n : '',
        icon: r[s.I5.ICON_TYPE],
        body: null !== (t = r[s.I5.BODY]) && void 0 !== t ? t : '',
        ctas: (null !== (i = r[s.I5.CTAS]) && void 0 !== i ? i : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (E = r[s.I5.TIMESTAMP]) && void 0 !== E ? E : 0),
        theme: r[s.I5.THEME],
        learn_more_link: r[s.I5.LEARN_MORE_LINK],
        classification_id: r[s.I5.CLASSIFICATION_ID]
    };
}
function l(e) {
    if (e.type === I.lK.MESSAGE) return '' === e.content && 0 === e.attachments.length;
    return !0;
}
let u = (e) =>
        ({
            [s.bK.DIDNT_VIOLATE_POLICY]: o.intl.string(o.t.mZffAg),
            [s.bK.TOO_STRICT_UNFAIR]: o.intl.string(o.t.wgZVAg),
            [s.bK.DONT_AGREE_PENALTY]: o.intl.string(o.t.eu8G4u),
            [s.bK.SOMETHING_ELSE]: o.intl.string(o.t.XU3s6u)
        })[e],
    A = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function T(e) {
    return null != e && null != e.guild_metadata;
}
let L = (e) => {
    if (e === _.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return o.intl.string(o.t['0qyXXF']);
    return o.intl.string(o.t.aPmsx8);
};
function C(e) {
    let n = e.max_expiration_time;
    if (null == n) return null;
    try {
        return new Date(n);
    } catch {
        return null;
    }
}
