n.d(t, {
    FB: function () {
        return T;
    },
    Pu: function () {
        return C;
    },
    Vt: function () {
        return s;
    },
    XX: function () {
        return N;
    },
    Zs: function () {
        return l;
    },
    c7: function () {
        return L;
    },
    eS: function () {
        return c;
    },
    fr: function () {
        return u;
    },
    ox: function () {
        return A;
    }
}),
    n(724458);
var i = n(913527),
    E = n.n(i),
    r = n(406432),
    _ = n(531441),
    I = n(800530),
    o = n(981631),
    a = n(959517),
    S = n(388032);
function N(e) {
    return E()().to(E()(e));
}
function c(e) {
    var t, n;
    return (0, r.CO)(e.filename) || (0, r.NU)(e.filename) ? ''.concat(a._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}
function u(e) {
    var t, n, i, E;
    if (null == e.fields) return;
    let r = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null !== (t = r[I.I5.HEADER]) && void 0 !== t ? t : '',
        icon: r[I.I5.ICON_TYPE],
        body: null !== (n = r[I.I5.BODY]) && void 0 !== n ? n : '',
        ctas: (null !== (i = r[I.I5.CTAS]) && void 0 !== i ? i : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (E = r[I.I5.TIMESTAMP]) && void 0 !== E ? E : 0),
        theme: r[I.I5.THEME],
        learn_more_link: r[I.I5.LEARN_MORE_LINK],
        classification_id: r[I.I5.CLASSIFICATION_ID]
    };
}
function s(e) {
    if (e.type === _.lK.MESSAGE) return '' === e.content && 0 === e.attachments.length;
    return !0;
}
let A = (e) =>
        ({
            [I.bK.DIDNT_VIOLATE_POLICY]: S.intl.string(S.t.mZffAg),
            [I.bK.TOO_STRICT_UNFAIR]: S.intl.string(S.t.wgZVAg),
            [I.bK.DONT_AGREE_PENALTY]: S.intl.string(S.t.eu8G4u),
            [I.bK.SOMETHING_ELSE]: S.intl.string(S.t.XU3s6u)
        })[e],
    L = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function T(e) {
    return null != e && null != e.guild_metadata;
}
let l = (e) => {
    if (e === o.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return S.intl.string(S.t['0qyXXF']);
    return S.intl.string(S.t.aPmsx8);
};
function C(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch {
        return null;
    }
}
