n.d(t, {
    $B: function () {
        return s;
    },
    GF: function () {
        return a;
    },
    XL: function () {
        return o;
    },
    pE: function () {
        return c;
    }
}),
    n(411104);
var i = n(200651),
    r = n(192379);
let l = r.createContext(void 0);
function a() {
    let e = r.useContext(l);
    if (null == e) throw Error('No PollContextProvider found');
    return e;
}
function o(e) {
    let { children: t, message: n, poll: a } = e,
        o = r.useMemo(
            () => ({
                message: n,
                poll: a
            }),
            [n, a]
        );
    return (0, i.jsx)(l.Provider, {
        value: o,
        children: t
    });
}
function s(e) {
    return (function () {
        let { poll: e } = a();
        return e.resources;
    })().styles[e];
}
function c() {
    let { message: e } = a(),
        t = e.getChannelId();
    return r.useMemo(
        () => ({
            channelId: t,
            messageId: e.id
        }),
        [e.id, t]
    );
}
