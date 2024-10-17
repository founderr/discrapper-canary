n.d(t, {
    H: function () {
        return a;
    }
});
var r = n(735250),
    i = n(481060);
function a(e, t) {
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n.e('85505').then(n.bind(n, 232837));
        return (n) => {
            let { transitionState: a, onClose: s } = n;
            return (0, r.jsx)(i, {
                channelId: e,
                blockedUserId: t,
                transitionState: a,
                onClose: s
            });
        };
    });
}
