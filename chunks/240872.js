var r = n(200651);
n(192379);
var i = n(952265),
    a = n(468026),
    s = n(388032);
t.Z = {
    show(e) {
        let { title: t, body: n, confirmColor: s, confirmText: o, cancelText: l, onConfirm: u, onCancel: c, onCloseCallback: d, secondaryConfirmText: f, onConfirmSecondary: _, className: p, titleClassName: h } = e;
        (0, i.h7)(
            (e) =>
                (0, r.jsx)(a.default, {
                    ...e,
                    title: t,
                    body: n,
                    confirmColor: s,
                    confirmText: o,
                    cancelText: l,
                    onConfirm: u,
                    onCancel: c,
                    secondaryConfirmText: f,
                    onConfirmSecondary: _,
                    className: p,
                    titleClassName: h
                }),
            { onCloseCallback: d }
        );
    },
    close() {},
    confirm(e) {
        return new Promise((t) => {
            this.show({
                onConfirm() {
                    t(!0);
                },
                cancelText: s.intl.string(s.t['ETE/oK']),
                onCancel() {
                    t(!1);
                },
                ...e
            });
        });
    }
};
