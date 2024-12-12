r.d(t, {
    y: function () {
        return _;
    }
});
var a = r(617726),
    n = r(101284);
function _(e, t, r) {
    let _ = [
        { type: 'client_report' },
        {
            timestamp: r || (0, n.yW)(),
            discarded_events: e
        }
    ];
    return (0, a.Jd)(t ? { dsn: t } : {}, [_]);
}
