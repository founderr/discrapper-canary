r.d(t, {
    r: function () {
        return _;
    }
});
var n = r(967752),
    a = r(617726);
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
            ...(!!r && !!_ && { dsn: (0, n.RA)(_) })
        },
        i = (function (e) {
            return [{ type: 'user_report' }, e];
        })(e);
    return (0, a.Jd)(o, [i]);
}
