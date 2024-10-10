r.d(t, {
    o: function () {
        return i;
    }
});
var n = r(622916),
    a = r(967752),
    _ = r(617726),
    o = r(939747);
function i(e, t) {
    n.kg.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
    let r = e.getDsn(),
        i = e.getSdkMetadata(),
        E = (function (e, t, r, n) {
            let i = { sent_at: new Date().toISOString() };
            r &&
                r.sdk &&
                (i.sdk = {
                    name: r.sdk.name,
                    version: r.sdk.version
                }),
                n && t && (i.dsn = (0, a.RA)(t));
            let E = (function (e) {
                let t = (0, o.uv)(e);
                return [
                    {
                        type: 'statsd',
                        length: t.length
                    },
                    t
                ];
            })(e);
            return (0, _.Jd)(i, [E]);
        })(t, r, i, e.getOptions().tunnel);
    e.sendEnvelope(E);
}
