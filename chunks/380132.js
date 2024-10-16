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
var n = r(617726),
    a = r(967752),
    _ = r(305625),
    o = r(696486);
function E(e, t, r, _) {
    let o = (0, n.HY)(r),
        E = {
            sent_at: new Date().toISOString(),
            ...(o && { sdk: o }),
            ...(!!_ && t && { dsn: (0, a.RA)(t) })
        },
        i = 'aggregates' in e ? [{ type: 'sessions' }, e] : [{ type: 'session' }, e.toJSON()];
    return (0, n.Jd)(E, [i]);
}
function i(e, t, r, a) {
    var _, o;
    let E = (0, n.HY)(r),
        i = e.type && 'replay_event' !== e.type ? e.type : 'event';
    (_ = e), !(o = r && r.sdk) || ((_.sdk = _.sdk || {}), (_.sdk.name = _.sdk.name || o.name), (_.sdk.version = _.sdk.version || o.version), (_.sdk.integrations = [...(_.sdk.integrations || []), ...(o.integrations || [])]), (_.sdk.packages = [...(_.sdk.packages || []), ...(o.packages || [])]));
    let c = (0, n.Cd)(e, E, a, t);
    delete e.sdkProcessingMetadata;
    let s = [{ type: i }, e];
    return (0, n.Jd)(c, [s]);
}
function c(e, t) {
    var r;
    let E = (0, _.jC)(e[0]),
        i = t && t.getDsn(),
        c = t && t.getOptions().tunnel;
    let s = {
            sent_at: new Date().toISOString(),
            ...(!!(r = E).trace_id && !!r.public_key && { trace: E }),
            ...(!!c && i && { dsn: (0, a.RA)(i) })
        },
        l = t && t.getOptions().beforeSendSpan,
        u = l ? (e) => l((0, o.XU)(e)) : (e) => (0, o.XU)(e),
        I = [];
    for (let t of e) {
        let e = u(t);
        e && I.push((0, n.KQ)(e));
    }
    return (0, n.Jd)(s, I);
}
