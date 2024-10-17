n.d(t, {
    Np: function () {
        return u;
    },
    l8: function () {
        return o;
    },
    mc: function () {
        return l;
    },
    so: function () {
        return s;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(822869);
let s = 'forward-modal';
function o(e) {
    let { messageId: t, channelId: o, message: l, source: u, initialSelectedDestinations: c = [], forwardOptions: d, onRequestSent: _ } = e;
    (0, a.Lb)(o, t, u),
        (0, i.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e('6380'), n.e('16918')]).then(n.bind(n, 930864));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        channelId: o,
                        messageId: t,
                        message: l,
                        initialSelectedDestinations: c,
                        forwardOptions: d,
                        onRequestSent: _
                    });
            },
            { modalKey: s }
        );
}
function l() {
    (0, i.closeModal)(s);
}
function u(e) {
    let { messageId: t, channelId: a, message: s, failedDestinations: o, forwardOptions: l } = e;
    (0, i.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e('86590').then(n.bind(n, 384331));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                messageId: t,
                channelId: a,
                message: s,
                failedDestinations: o,
                forwardOptions: l
            });
    });
}
