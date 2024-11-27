n.d(t, {
    Np: function () {
        return c;
    },
    l8: function () {
        return o;
    },
    mc: function () {
        return s;
    },
    so: function () {
        return a;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(822869);
let a = 'forward-modal';
function o(e) {
    let { messageId: t, channelId: o, message: s, source: c, initialSelectedDestinations: u = [], forwardOptions: d, onRequestSent: m } = e;
    (0, l.Lb)(o, t, c),
        (0, r.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([n.e('6380'), n.e('19566')]).then(n.bind(n, 930864));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        channelId: o,
                        messageId: t,
                        message: s,
                        initialSelectedDestinations: u,
                        forwardOptions: d,
                        onRequestSent: m
                    });
            },
            { modalKey: a }
        );
}
function s() {
    (0, r.closeModal)(a);
}
function c(e) {
    let { messageId: t, channelId: l, message: a, failedDestinations: o, forwardOptions: s } = e;
    (0, r.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await n.e('86590').then(n.bind(n, 384331));
        return (n) =>
            (0, i.jsx)(e, {
                ...n,
                messageId: t,
                channelId: l,
                message: a,
                failedDestinations: o,
                forwardOptions: s
            });
    });
}
