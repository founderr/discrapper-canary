t.d(n, {
    Np: function () {
        return u;
    },
    l8: function () {
        return l;
    },
    mc: function () {
        return s;
    },
    so: function () {
        return o;
    }
});
var a = t(200651);
t(192379);
var r = t(481060),
    i = t(822869);
let o = 'forward-modal';
function l(e) {
    let { messageId: n, channelId: l, message: s, source: u, initialSelectedDestinations: c = [], forwardOptions: d, onRequestSent: f } = e;
    (0, i.Lb)(l, n, u),
        (0, r.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([t.e('6380'), t.e('16918')]).then(t.bind(t, 930864));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        channelId: l,
                        messageId: n,
                        message: s,
                        initialSelectedDestinations: c,
                        forwardOptions: d,
                        onRequestSent: f
                    });
            },
            { modalKey: o }
        );
}
function s() {
    (0, r.closeModal)(o);
}
function u(e) {
    let { messageId: n, channelId: i, message: o, failedDestinations: l, forwardOptions: s } = e;
    (0, r.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await t.e('86590').then(t.bind(t, 384331));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                messageId: n,
                channelId: i,
                message: o,
                failedDestinations: l,
                forwardOptions: s
            });
    });
}
