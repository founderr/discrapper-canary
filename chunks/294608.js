n.d(t, {
    $B: function () {
        return c;
    },
    GF: function () {
        return s;
    },
    XL: function () {
        return l;
    },
    pE: function () {
        return d;
    }
});
var r = n(411104);
var i = n(735250),
    a = n(470079);
let o = a.createContext(void 0);
function s() {
    let e = a.useContext(o);
    if (null == e) throw Error('No PollContextProvider found');
    return e;
}
function l(e) {
    let { children: t, message: n, poll: r } = e,
        s = a.useMemo(
            () => ({
                message: n,
                poll: r
            }),
            [n, r]
        );
    return (0, i.jsx)(o.Provider, {
        value: s,
        children: t
    });
}
function u() {
    let { poll: e } = s();
    return e.resources;
}
function c(e) {
    return u().styles[e];
}
function d() {
    let { message: e } = s(),
        t = e.getChannelId();
    return a.useMemo(
        () => ({
            channelId: t,
            messageId: e.id
        }),
        [e.id, t]
    );
}
