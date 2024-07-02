i.d(n, {
    Np: function () {
        return s;
    },
    l8: function () {
        return l;
    },
    mc: function () {
        return c;
    }
});
var t = i(735250);
i(470079);
var o = i(481060), a = i(822869);
let r = 'forward-modal';
function l(e) {
    let {
        messageId: n,
        channelId: l,
        source: c,
        initialSelectedDestinations: s = [],
        forwardOptions: d,
        onRequestSent: u
    } = e;
    (0, a.Lb)(l, n, c), (0, o.openModalLazy)(async () => {
        let {ForwardModal: e} = await Promise.all([
            i.e('6380'),
            i.e('89900')
        ]).then(i.bind(i, 930864));
        return i => (0, t.jsx)(e, {
            ...i,
            channelId: l,
            messageId: n,
            initialSelectedDestinations: s,
            forwardOptions: d,
            onRequestSent: u
        });
    }, { modalKey: r });
}
function c() {
    (0, o.closeModal)(r);
}
function s(e) {
    let {
        messageId: n,
        channelId: a,
        failedDestinations: r,
        forwardOptions: l
    } = e;
    (0, o.openModalLazy)(async () => {
        let {ForwardFailedAlertModal: e} = await i.e('86590').then(i.bind(i, 384331));
        return i => (0, t.jsx)(e, {
            ...i,
            messageId: n,
            channelId: a,
            failedDestinations: r,
            forwardOptions: l
        });
    });
}
