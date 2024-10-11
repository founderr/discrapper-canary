t.d(n, {
    Np: function () {
        return s;
    },
    l8: function () {
        return u;
    },
    mc: function () {
        return o;
    },
    so: function () {
        return l;
    }
});
var i = t(735250);
t(470079);
var r = t(481060),
    a = t(822869);
let l = 'forward-modal';
function u(e) {
    let { messageId: n, channelId: u, source: o, initialSelectedDestinations: s = [], forwardOptions: c, onRequestSent: d } = e;
    (0, a.Lb)(u, n, o),
        (0, r.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([t.e('6380'), t.e('99452')]).then(t.bind(t, 930864));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        channelId: u,
                        messageId: n,
                        initialSelectedDestinations: s,
                        forwardOptions: c,
                        onRequestSent: d
                    });
            },
            { modalKey: l }
        );
}
function o() {
    (0, r.closeModal)(l);
}
function s(e) {
    let { messageId: n, channelId: a, failedDestinations: l, forwardOptions: u } = e;
    (0, r.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await t.e('86590').then(t.bind(t, 384331));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                messageId: n,
                channelId: a,
                failedDestinations: l,
                forwardOptions: u
            });
    });
}
