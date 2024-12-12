r.d(t, {
    Mq: function () {
        return i;
    },
    Q3: function () {
        return E;
    },
    uE: function () {
        return c;
    }
});
var a = r(617726),
    n = r(967752),
    _ = r(305625),
    o = r(696486);
function E(e, t, r, _) {
    let o = (0, a.HY)(r),
        E = {
            sent_at: new Date().toISOString(),
            ...(o && { sdk: o }),
            ...(!!_ && t && { dsn: (0, n.RA)(t) })
        },
        i = 'aggregates' in e ? [{ type: 'sessions' }, e] : [{ type: 'session' }, e.toJSON()];
    return (0, a.Jd)(E, [i]);
}
function i(e, t, r, n) {
    var _, o;
    let E = (0, a.HY)(r),
        i = e.type && 'replay_event' !== e.type ? e.type : 'event';
    (_ = e), !(o = r && r.sdk) || ((_.sdk = _.sdk || {}), (_.sdk.name = _.sdk.name || o.name), (_.sdk.version = _.sdk.version || o.version), (_.sdk.integrations = [...(_.sdk.integrations || []), ...(o.integrations || [])]), (_.sdk.packages = [...(_.sdk.packages || []), ...(o.packages || [])]));
    let c = (0, a.Cd)(e, E, n, t);
    delete e.sdkProcessingMetadata;
    let s = [{ type: i }, e];
    return (0, a.Jd)(c, [s]);
}
function c(e, t) {
    var r;
    let E = (0, _.jC)(e[0]),
        i = t && t.getDsn(),
        c = t && t.getOptions().tunnel;
    let s = {
            sent_at: new Date().toISOString(),
            ...(!!(r = E).trace_id && !!r.public_key && { trace: E }),
            ...(!!c && i && { dsn: (0, n.RA)(i) })
        },
        l = t && t.getOptions().beforeSendSpan,
        I = l ? (e) => l((0, o.XU)(e)) : (e) => (0, o.XU)(e),
        u = [];
    for (let t of e) {
        let e = I(t);
        e && u.push((0, a.KQ)(e));
    }
    return (0, a.Jd)(s, u);
}
