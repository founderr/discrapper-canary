r.d(t, {
    V: function () {
        return a;
    }
});
var n = r(452896);
function a(e, t, r = [t], a = 'npm') {
    let _ = e._metadata || {};
    !_.sdk &&
        (_.sdk = {
            name: `sentry.javascript.${t}`,
            packages: r.map((e) => ({
                name: `${a}:@sentry/${e}`,
                version: n.J
            })),
            version: n.J
        }),
        (e._metadata = _);
}
