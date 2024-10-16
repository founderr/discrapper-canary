r.d(t, {
    o: function () {
        return E;
    }
});
var n = r(622916),
    a = r(967752),
    _ = r(617726),
    o = r(939747);
function E(e, t) {
    n.kg.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
    let r = e.getDsn(),
        E = e.getSdkMetadata(),
        i = (function (e, t, r, n) {
            let E = { sent_at: new Date().toISOString() };
            r &&
                r.sdk &&
                (E.sdk = {
                    name: r.sdk.name,
                    version: r.sdk.version
                }),
                n && t && (E.dsn = (0, a.RA)(t));
            let i = (function (e) {
                let t = (0, o.uv)(e);
                return [
                    {
                        type: 'statsd',
                        length: t.length
                    },
                    t
                ];
            })(e);
            return (0, _.Jd)(E, [i]);
        })(t, r, E, e.getOptions().tunnel);
    e.sendEnvelope(i);
}
