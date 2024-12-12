var i = r(200651);
r(192379);
var a = r(952265),
    s = r(468026),
    o = r(388032);
n.Z = {
    show(e) {
        let { title: n, body: r, confirmColor: o, confirmText: l, cancelText: u, onConfirm: c, onCancel: d, onCloseCallback: f, secondaryConfirmText: _, onConfirmSecondary: h, className: p, titleClassName: m, contextKey: g } = e;
        (0, a.h7)(
            (e) =>
                (0, i.jsx)(s.default, {
                    ...e,
                    title: n,
                    body: r,
                    confirmColor: o,
                    confirmText: l,
                    cancelText: u,
                    onConfirm: c,
                    onCancel: d,
                    secondaryConfirmText: _,
                    onConfirmSecondary: h,
                    className: p,
                    titleClassName: m
                }),
            { onCloseCallback: f },
            g
        );
    },
    close() {},
    confirm(e) {
        return new Promise((n) => {
            this.show({
                onConfirm() {
                    n(!0);
                },
                cancelText: o.intl.string(o.t['ETE/oK']),
                onCancel() {
                    n(!1);
                },
                ...e
            });
        });
    }
};
