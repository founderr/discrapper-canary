r.d(t, {
    Lh: function () {
        return s;
    },
    _l: function () {
        return l;
    },
    jC: function () {
        return I;
    },
    uc: function () {
        return u;
    }
});
var a = r(370336),
    n = r(285883),
    _ = r(559508),
    o = r(263449),
    E = r(988097),
    i = r(696486);
let c = '_frozenDsc';
function s(e, t) {
    (0, a.xp)(e, c, t);
}
function l(e, t) {
    let r = t.getOptions(),
        { publicKey: n } = t.getDsn() || {},
        o = (0, a.Jr)({
            environment: r.environment || _.J,
            release: r.release,
            public_key: n,
            trace_id: e
        });
    return t.emit('createDsc', o), o;
}
function I(e) {
    let t = (0, o.s3)();
    if (!t) return {};
    let r = l((0, i.XU)(e).trace_id || '', t),
        a = (0, i.Gx)(e),
        _ = a[c];
    if (_) return _;
    let s = a.spanContext().traceState,
        I = s && s.get('sentry.dsc'),
        u = I && (0, n.EN)(I);
    if (u) return u;
    let R = (0, i.XU)(a),
        A = R.data || {},
        T = A[E.TE];
    null != T && (r.sample_rate = `${T}`);
    let N = A[E.Zj],
        d = R.description;
    return 'url' !== N && d && (r.transaction = d), (r.sampled = String((0, i.Tt)(a))), t.emit('createDsc', r, a), r;
}
function u(e) {
    let t = I(e);
    return (0, n.IQ)(t);
}
