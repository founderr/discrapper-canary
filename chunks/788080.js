n.d(t, {
    FB: function () {
        return l;
    },
    Pu: function () {
        return C;
    },
    Vt: function () {
        return s;
    },
    XX: function () {
        return c;
    },
    Zs: function () {
        return L;
    },
    c7: function () {
        return T;
    },
    eS: function () {
        return N;
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
    r = n.n(i),
    E = n(406432),
    _ = n(531441),
    I = n(800530),
    o = n(981631),
    a = n(959517),
    S = n(388032);
function c(e) {
    return r()().to(r()(e));
}
function N(e) {
    var t, n;
    return (0, E.CO)(e.filename) || (0, E.NU)(e.filename) ? ''.concat(a._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}
function u(e) {
    var t, n, i, r;
    if (null == e.fields) return;
    let E = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null !== (t = E[I.I5.HEADER]) && void 0 !== t ? t : '',
        icon: E[I.I5.ICON_TYPE],
        body: null !== (n = E[I.I5.BODY]) && void 0 !== n ? n : '',
        ctas: (null !== (i = E[I.I5.CTAS]) && void 0 !== i ? i : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (r = E[I.I5.TIMESTAMP]) && void 0 !== r ? r : 0),
        theme: E[I.I5.THEME],
        learn_more_link: E[I.I5.LEARN_MORE_LINK],
        classification_id: E[I.I5.CLASSIFICATION_ID]
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
    T = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function l(e) {
    return null != e && null != e.guild_metadata;
}
let L = (e) => {
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
