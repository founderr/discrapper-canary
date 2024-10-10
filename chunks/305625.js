r.d(t, {
    Lh: function () {
        return s;
    },
    _l: function () {
        return I;
    },
    jC: function () {
        return u;
    },
    uc: function () {
        return l;
    }
});
var n = r(370336),
    a = r(285883),
    _ = r(559508),
    o = r(263449),
    i = r(988097),
    E = r(696486);
let c = '_frozenDsc';
function s(e, t) {
    (0, n.xp)(e, c, t);
}
function I(e, t) {
    let r = t.getOptions(),
        { publicKey: a } = t.getDsn() || {},
        o = (0, n.Jr)({
            environment: r.environment || _.J,
            release: r.release,
            public_key: a,
            trace_id: e
        });
    return t.emit('createDsc', o), o;
}
function u(e) {
    let t = (0, o.s3)();
    if (!t) return {};
    let r = I((0, E.XU)(e).trace_id || '', t),
        n = (0, E.Gx)(e),
        _ = n[c];
    if (_) return _;
    let s = n.spanContext().traceState,
        u = s && s.get('sentry.dsc'),
        l = u && (0, a.EN)(u);
    if (l) return l;
    let R = (0, E.XU)(n),
        A = R.data || {},
        T = A[i.TE];
    null != T && (r.sample_rate = `${T}`);
    let N = A[i.Zj],
        d = R.description;
    return 'url' !== N && d && (r.transaction = d), (r.sampled = String((0, E.Tt)(n))), t.emit('createDsc', r, n), r;
}
function l(e) {
    let t = u(e);
    return (0, a.IQ)(t);
}
