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
        return u;
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
    a = n.n(i),
    s = n(406432),
    l = n(531441),
    r = n(800530),
    o = n(981631),
    c = n(959517),
    d = n(689938);
function u(e) {
    return a()().to(a()(e));
}
function _(e) {
    var t, n;
    return (0, s.CO)(e.filename) || (0, s.NU)(e.filename) ? ''.concat(c._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}
function E(e) {
    var t, n, i, a;
    if (null == e.fields) return;
    let s = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null !== (t = s[r.I5.HEADER]) && void 0 !== t ? t : '',
        icon: s[r.I5.ICON_TYPE],
        body: null !== (n = s[r.I5.BODY]) && void 0 !== n ? n : '',
        ctas: (null !== (i = s[r.I5.CTAS]) && void 0 !== i ? i : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (a = s[r.I5.TIMESTAMP]) && void 0 !== a ? a : 0),
        theme: s[r.I5.THEME],
        learn_more_link: s[r.I5.LEARN_MORE_LINK],
        classification_id: s[r.I5.CLASSIFICATION_ID]
    };
}
function I(e) {
    if (e.type === l.lK.MESSAGE) return '' === e.content && 0 === e.attachments.length;
    return !0;
}
let m = (e) =>
        ({
            [r.bK.DIDNT_VIOLATE_POLICY]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
            [r.bK.TOO_STRICT_UNFAIR]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
            [r.bK.DONT_AGREE_PENALTY]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
            [r.bK.SOMETHING_ELSE]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
        })[e],
    T = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function N(e) {
    return null != e && null != e.guild_metadata;
}
let h = (e) => {
    if (e === o.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return d.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
    return d.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR;
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
