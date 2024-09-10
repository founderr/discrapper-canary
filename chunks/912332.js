t.d(n, {
    Np: function () {
        return s;
    },
    l8: function () {
        return r;
    },
    mc: function () {
        return l;
    },
    so: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var o = t(481060),
    a = t(822869);
let c = 'forward-modal';
function r(e) {
    let { messageId: n, channelId: r, source: l, initialSelectedDestinations: s = [], forwardOptions: d, onRequestSent: u } = e;
    (0, a.Lb)(r, n, l),
        (0, o.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([t.e('6380'), t.e('99452')]).then(t.bind(t, 930864));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: r,
                        messageId: n,
                        initialSelectedDestinations: s,
                        forwardOptions: d,
                        onRequestSent: u
                    });
            },
            { modalKey: c }
        );
}
function l() {
    (0, o.closeModal)(c);
}
function s(e) {
    let { messageId: n, channelId: a, failedDestinations: c, forwardOptions: r } = e;
    (0, o.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await t.e('86590').then(t.bind(t, 384331));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                messageId: n,
                channelId: a,
                failedDestinations: c,
                forwardOptions: r
            });
    });
}
