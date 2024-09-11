n.d(t, {
    FB: function () {
        return N;
    },
    Pu: function () {
        return C;
    },
    Vt: function () {
        return I;
    },
    XX: function () {
        return d;
    },
    Zs: function () {
        return h;
    },
    c7: function () {
        return T;
    },
    eS: function () {
        return _;
    },
    fr: function () {
        return E;
    },
    ox: function () {
        return m;
    }
}),
    n(724458);
var i = n(913527),
    s = n.n(i),
    a = n(406432),
    r = n(531441),
    l = n(800530),
    o = n(981631),
    c = n(959517),
    u = n(689938);
function d(e) {
    return s()().to(s()(e));
}
function _(e) {
    var t, n;
    return (0, a.CO)(e.filename) || (0, a.NU)(e.filename) ? ''.concat(c._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}
function E(e) {
    var t, n, i, s;
    if (null == e.fields) return;
    let a = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null !== (t = a[l.I5.HEADER]) && void 0 !== t ? t : '',
        icon: a[l.I5.ICON_TYPE],
        body: null !== (n = a[l.I5.BODY]) && void 0 !== n ? n : '',
        ctas: (null !== (i = a[l.I5.CTAS]) && void 0 !== i ? i : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (s = a[l.I5.TIMESTAMP]) && void 0 !== s ? s : 0),
        theme: a[l.I5.THEME],
        learn_more_link: a[l.I5.LEARN_MORE_LINK],
        classification_id: a[l.I5.CLASSIFICATION_ID]
    };
}
function I(e) {
    if (e.type === r.lK.MESSAGE) return '' === e.content && 0 === e.attachments.length;
    return !0;
}
let m = (e) =>
        ({
            [l.bK.DIDNT_VIOLATE_POLICY]: u.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
            [l.bK.TOO_STRICT_UNFAIR]: u.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
            [l.bK.DONT_AGREE_PENALTY]: u.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
            [l.bK.SOMETHING_ELSE]: u.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
        })[e],
    T = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function N(e) {
    return null != e && null != e.guild_metadata;
}
let h = (e) => {
    if (e === o.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
    return u.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR;
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
