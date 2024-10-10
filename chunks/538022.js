r.d(t, {
    y: function () {
        return _;
    }
});
var n = r(617726),
    a = r(101284);
function _(e, t, r) {
    let _ = [
        { type: 'client_report' },
        {
            timestamp: r || (0, a.yW)(),
            discarded_events: e
        }
    ];
    return (0, n.Jd)(t ? { dsn: t } : {}, [_]);
}
