n.d(t, {
    FB: function () {
        return L;
    },
    Pu: function () {
        return C;
    },
    Vt: function () {
        return c;
    },
    XX: function () {
        return o;
    },
    Zs: function () {
        return O;
    },
    c7: function () {
        return T;
    },
    eS: function () {
        return A;
    },
    fr: function () {
        return s;
    },
    ox: function () {
        return u;
    }
}),
    n(724458);
var E = n(913527),
    _ = n.n(E),
    i = n(406432),
    r = n(531441),
    I = n(800530),
    N = n(981631),
    S = n(959517),
    a = n(689938);
function o(e) {
    return _()().to(_()(e));
}
function A(e) {
    var t, n;
    return (0, i.CO)(e.filename) || (0, i.NU)(e.filename) ? ''.concat(S._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}
function s(e) {
    var t, n, E, _;
    if (null == e.fields) return;
    let i = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null !== (t = i[I.I5.HEADER]) && void 0 !== t ? t : '',
        icon: i[I.I5.ICON_TYPE],
        body: null !== (n = i[I.I5.BODY]) && void 0 !== n ? n : '',
        ctas: (null !== (E = i[I.I5.CTAS]) && void 0 !== E ? E : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (_ = i[I.I5.TIMESTAMP]) && void 0 !== _ ? _ : 0),
        theme: i[I.I5.THEME],
        learn_more_link: i[I.I5.LEARN_MORE_LINK],
        classification_id: i[I.I5.CLASSIFICATION_ID]
    };
}
function c(e) {
    if (e.type === r.lK.MESSAGE) return '' === e.content && 0 === e.attachments.length;
    return !0;
}
let u = (e) =>
        ({
            [I.bK.DIDNT_VIOLATE_POLICY]: a.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
            [I.bK.TOO_STRICT_UNFAIR]: a.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
            [I.bK.DONT_AGREE_PENALTY]: a.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
            [I.bK.SOMETHING_ELSE]: a.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
        })[e],
    T = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function L(e) {
    return null != e && null != e.guild_metadata;
}
let O = (e) => {
    if (e === N.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return a.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
    return a.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR;
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
