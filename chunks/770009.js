t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(200651);
t(192379);
var i = t(512722),
    r = t.n(i),
    a = t(442837),
    o = t(52396),
    s = t(592125),
    c = t(970184),
    u = t(151200),
    d = t(96513);
function m(e) {
    let { contentInventoryEntry: n, channel: t } = e,
        { parsedEntry: i } = (0, o.B)();
    return (0, l.jsx)(u.Z, {
        ...i,
        entry: n,
        channel: t
    });
}
function f(e) {
    let n = (0, c.CJ)();
    r()(null != n, 'Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?');
    let { channelId: t } = n,
        i = (0, a.e7)([s.Z], () => s.Z.getChannel(t));
    return (
        r()(null != i, 'channel must be defined'),
        (0, l.jsx)(o.r, {
            location: d._.EMBED,
            entry: e.contentInventoryEntry,
            channel: i,
            errorFallback: null,
            children: (0, l.jsx)(m, {
                ...e,
                channel: i
            })
        })
    );
}
