n.d(t, {
    FB: function () {
        return I;
    },
    Pu: function () {
        return g;
    },
    Vt: function () {
        return h;
    },
    XX: function () {
        return _;
    },
    Zs: function () {
        return T;
    },
    c7: function () {
        return m;
    },
    eS: function () {
        return E;
    },
    fr: function () {
        return f;
    },
    ox: function () {
        return p;
    }
});
var r = n(724458);
var i = n(913527),
    a = n.n(i),
    o = n(406432),
    s = n(531441),
    l = n(800530),
    u = n(981631),
    c = n(959517),
    d = n(689938);
function _(e) {
    return a()().to(a()(e));
}
function E(e) {
    var t, n;
    return (0, o.CO)(e.filename) || (0, o.NU)(e.filename) ? ''.concat(c._j).concat(null !== (t = e.filename) && void 0 !== t ? t : '.png') : null !== (n = e.filename) && void 0 !== n ? n : '';
}
function f(e) {
    var t, n, r, i;
    if (null == e.fields) return;
    let a = e.fields.reduce((e, t) => ((e[t.rawName] = t.rawValue), e), {});
    return {
        header: null !== (t = a[l.I5.HEADER]) && void 0 !== t ? t : '',
        icon: a[l.I5.ICON_TYPE],
        body: null !== (n = a[l.I5.BODY]) && void 0 !== n ? n : '',
        ctas: (null !== (r = a[l.I5.CTAS]) && void 0 !== r ? r : '').split(',').filter((e) => '' !== e),
        timestamp: parseFloat(null !== (i = a[l.I5.TIMESTAMP]) && void 0 !== i ? i : 0),
        theme: a[l.I5.THEME],
        learn_more_link: a[l.I5.LEARN_MORE_LINK],
        classification_id: a[l.I5.CLASSIFICATION_ID]
    };
}
function h(e) {
    if (e.type === s.lK.MESSAGE) return '' === e.content && 0 === e.attachments.length;
    return !0;
}
let p = (e) =>
        ({
            [l.bK.DIDNT_VIOLATE_POLICY]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DIDNT_VIOLATE_POLICY,
            [l.bK.TOO_STRICT_UNFAIR]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_TOO_STRICT_UNFAIR,
            [l.bK.DONT_AGREE_PENALTY]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_DONT_AGREE_PENALTY,
            [l.bK.SOMETHING_ELSE]: d.Z.Messages.APPEAL_INGESTION_MODAL_COLLECT_SIGNAL_SOMETHING_ELSE
        })[e],
    m = (e) => (null == e || 0 === e.length ? '' : 1 === e.length ? e.toUpperCase() : ''.concat(e.charAt(0).toUpperCase()).concat(e.slice(1)));
function I(e) {
    return null != e && null != e.guild_metadata;
}
let T = (e) => {
    if (e === u.evJ.DSA_APPEAL_REQUEST_DEFLECTION) return d.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_DEFLECTION_ERROR;
    return d.Z.Messages.APPEAL_INGESTION_MODAL_CONFIRM_SUBMISSION_ERROR;
};
function g(e) {
    let t = e.max_expiration_time;
    if (null == t) return null;
    try {
        return new Date(t);
    } catch {
        return null;
    }
}
