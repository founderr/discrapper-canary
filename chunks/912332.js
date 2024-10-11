t.d(n, {
    Np: function () {
        return o;
    },
    l8: function () {
        return s;
    },
    mc: function () {
        return u;
    },
    so: function () {
        return l;
    }
});
var a = t(735250);
t(470079);
var r = t(481060),
    i = t(822869);
let l = 'forward-modal';
function s(e) {
    let { messageId: n, channelId: s, message: u, source: o, initialSelectedDestinations: c = [], forwardOptions: d, onRequestSent: _ } = e;
    (0, i.Lb)(s, n, o),
        (0, r.openModalLazy)(
            async () => {
                let { ForwardModal: e } = await Promise.all([t.e('6380'), t.e('99452')]).then(t.bind(t, 930864));
                return (t) =>
                    (0, a.jsx)(e, {
                        ...t,
                        channelId: s,
                        messageId: n,
                        message: u,
                        initialSelectedDestinations: c,
                        forwardOptions: d,
                        onRequestSent: _
                    });
            },
            { modalKey: l }
        );
}
function u() {
    (0, r.closeModal)(l);
}
function o(e) {
    let { messageId: n, channelId: i, message: l, failedDestinations: s, forwardOptions: u } = e;
    (0, r.openModalLazy)(async () => {
        let { ForwardFailedAlertModal: e } = await t.e('86590').then(t.bind(t, 384331));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                messageId: n,
                channelId: i,
                message: l,
                failedDestinations: s,
                forwardOptions: u
            });
    });
}
