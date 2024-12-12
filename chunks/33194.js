r.d(n, {
    Iu: function () {
        return o;
    },
    OS: function () {
        return l;
    },
    g6: function () {
        return c;
    },
    v3: function () {
        return u;
    }
});
var i = r(15729),
    a = r(877124);
let s = (0, i.U)(
    (0, a.tJ)(
        (e) => ({
            channelDismissTimestamps: {},
            queuedWarning: !1
        }),
        {
            name: 'shared-spaces-warning-storage',
            storage: (0, a.FL)(() => localStorage)
        }
    )
);
function o(e) {
    return s.getState().channelDismissTimestamps[e];
}
function l() {
    return s.getState().queuedWarning;
}
function u() {
    s.setState({ queuedWarning: !1 });
}
function c(e) {
    s.setState((n) => ({
        channelDismissTimestamps: {
            ...n.channelDismissTimestamps,
            [e]: Date.now()
        }
    }));
}
