r.d(t, {
    V: function () {
        return n;
    }
});
var a = r(452896);
function n(e, t, r = [t], n = 'npm') {
    let _ = e._metadata || {};
    !_.sdk &&
        (_.sdk = {
            name: `sentry.javascript.${t}`,
            packages: r.map((e) => ({
                name: `${n}:@sentry/${e}`,
                version: a.J
            })),
            version: a.J
        }),
        (e._metadata = _);
}
