n.d(t, {
    Np: function () {
        return u;
    },
    l8: function () {
        return s;
    },
    mc: function () {
        return l;
    },
    so: function () {
        return o;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(822869);
let o = 'forward-modal';
function s(e) {
    let { messageId: t, channelId: s, source: l, initialSelectedDestinations: u = [], forwardOptions: c, onRequestSent: d } = e;
    (0, a.Lb)(s, t, l),
        (0, i.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await n.e('33648').then(n.bind(n, 930864));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        channelId: s,
                        messageId: t,
                        initialSelectedDestinations: u,
                        forwardOptions: c,
                        onRequestSent: d
                    });
            },
            { modalKey: o }
        );
}
function l() {
    (0, i.closeModal)(o);
}
function u(e) {
    let { messageId: t, channelId: a, failedDestinations: o, forwardOptions: s } = e;
    (0, i.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e('86590').then(n.bind(n, 384331));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                messageId: t,
                channelId: a,
                failedDestinations: o,
                forwardOptions: s
            });
    });
}
