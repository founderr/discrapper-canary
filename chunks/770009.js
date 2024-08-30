l.d(n, {
    Z: function () {
        return p;
    }
});
var t = l(735250);
l(470079);
var r = l(512722),
    i = l.n(r),
    a = l(442837),
    s = l(52396),
    u = l(592125),
    o = l(970184),
    c = l(151200),
    d = l(96513);
function m(e) {
    let { contentInventoryEntry: n, channel: l } = e,
        { parsedEntry: r } = (0, s.B)();
    return (0, t.jsx)(c.Z, {
        ...r,
        entry: n,
        channel: l
    });
}
function p(e) {
    let n = (0, o.CJ)();
    i()(null != n, 'Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?');
    let { channelId: l } = n,
        r = (0, a.e7)([u.Z], () => u.Z.getChannel(l));
    return (
        i()(null != r, 'channel must be defined'),
        (0, t.jsx)(s.r, {
            location: d._.EMBED,
            entry: e.contentInventoryEntry,
            channel: r,
            errorFallback: null,
            children: (0, t.jsx)(m, {
                ...e,
                channel: r
            })
        })
    );
}
