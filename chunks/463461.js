r.d(t, {
    r: function () {
        return _;
    }
});
var a = r(967752),
    n = r(617726);
function _(e, { metadata: t, tunnel: r, dsn: _ }) {
    let o = {
            event_id: e.event_id,
            sent_at: new Date().toISOString(),
            ...(t &&
                t.sdk && {
                    sdk: {
                        name: t.sdk.name,
                        version: t.sdk.version
                    }
                }),
            ...(!!r && !!_ && { dsn: (0, a.RA)(_) })
        },
        E = (function (e) {
            return [{ type: 'user_report' }, e];
        })(e);
    return (0, n.Jd)(o, [E]);
}
