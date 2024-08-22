t.d(n, {
    Z: function () {
        return _;
    }
});
var l = t(735250);
t(470079);
var a = t(512722),
    i = t.n(a),
    r = t(442837),
    o = t(52396),
    s = t(592125),
    c = t(970184),
    u = t(151200),
    d = t(96513);
function m(e) {
    let { contentInventoryEntry: n, channel: t } = e,
        { parsedEntry: a } = (0, o.B)();
    return (0, l.jsx)(u.Z, {
        ...a,
        entry: n,
        channel: t
    });
}
function _(e) {
    let n = (0, c.CJ)();
    i()(null != n, 'Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?');
    let { channelId: t } = n,
        a = (0, r.e7)([s.Z], () => s.Z.getChannel(t));
    return (
        i()(null != a, 'channel must be defined'),
        (0, l.jsx)(o.r, {
            location: d._.EMBED,
            entry: e.contentInventoryEntry,
            channel: a,
            errorFallback: null,
            children: (0, l.jsx)(m, {
                ...e,
                channel: a
            })
        })
    );
}
