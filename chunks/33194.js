n.d(t, {
    Iu: function () {
        return s;
    },
    OS: function () {
        return o;
    },
    g6: function () {
        return u;
    },
    v3: function () {
        return l;
    }
});
var r = n(15729),
    i = n(877124);
let a = (0, r.U)(
    (0, i.tJ)(
        (e) => ({
            channelDismissTimestamps: {},
            queuedWarning: !1
        }),
        {
            name: 'shared-spaces-warning-storage',
            storage: (0, i.FL)(() => localStorage)
        }
    )
);
function s(e) {
    return a.getState().channelDismissTimestamps[e];
}
function o() {
    return a.getState().queuedWarning;
}
function l() {
    a.setState({ queuedWarning: !1 });
}
function u(e) {
    a.setState((t) => ({
        channelDismissTimestamps: {
            ...t.channelDismissTimestamps,
            [e]: Date.now()
        }
    }));
}
