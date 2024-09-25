n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(52396),
    l = n(592125),
    u = n(970184),
    c = n(151200),
    d = n(96513);
function _(e) {
    let { contentInventoryEntry: t, channel: n } = e,
        { parsedEntry: i } = (0, s.B)();
    return (0, r.jsx)(c.Z, {
        ...i,
        entry: t,
        channel: n
    });
}
function E(e) {
    let t = (0, u.CJ)();
    a()(null != t, 'Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?');
    let { channelId: n } = t,
        i = (0, o.e7)([l.Z], () => l.Z.getChannel(n));
    return (
        a()(null != i, 'channel must be defined'),
        (0, r.jsx)(s.r, {
            location: d._.EMBED,
            entry: e.contentInventoryEntry,
            channel: i,
            errorFallback: null,
            children: (0, r.jsx)(_, {
                ...e,
                channel: i
            })
        })
    );
}
