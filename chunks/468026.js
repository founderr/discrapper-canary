n.r(t);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(693789),
    s = n(1561),
    l = n(512983),
    u = n(466377),
    c = n(993365),
    d = n(600164),
    _ = n(689938),
    E = n(149536);
let f = (e) => {
    let t,
        n,
        i,
        { body: f, cancelText: h, className: p, confirmColor: m, confirmText: I = _.Z.Messages.OKAY, secondaryConfirmText: T, onCancel: g, onClose: S, onConfirm: A, onConfirmSecondary: v, title: N, transitionState: O, titleClassName: R } = e,
        C = () => {
            null == S || S(), null == g || g();
        },
        y = (e) => {
            null != e && e.preventDefault(), null == S || S(), null == A || A();
        },
        L = () => {
            null == S || S(), null == v || v();
        };
    return (
        null != h &&
            '' !== h &&
            (t = (0, r.jsx)(o.zx, {
                type: 'button',
                size: o.zx.Sizes.LARGE,
                color: o.zx.Colors.PRIMARY,
                onClick: C,
                className: E.secondaryButton,
                children: h
            })),
        null != I &&
            '' !== I &&
            (n = (0, r.jsx)(o.zx, {
                type: 'submit',
                color: m,
                size: o.zx.Sizes.LARGE,
                className: a()(E.primaryButton, null != t ? E.gutter : null),
                autoFocus: !0,
                children: I
            })),
        null != T &&
            '' !== T &&
            (i = (0, r.jsx)(s.P, {
                onClick: L,
                className: E.minorContainer,
                children: (0, r.jsx)(c.x, {
                    className: E.secondaryAction,
                    variant: 'text-xs/normal',
                    children: T
                })
            })),
        (0, r.jsx)(u.Y0, {
            transitionState: O,
            className: a()(p, E.container),
            'aria-label': N,
            children: (0, r.jsxs)('form', {
                onSubmit: y,
                className: E.form,
                children: [
                    (0, r.jsx)(u.hz, {
                        className: E.modalContent,
                        children: (0, r.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            justify: d.Z.Justify.CENTER,
                            className: E.content,
                            children: [
                                null != N &&
                                    (0, r.jsx)(l.v, {
                                        tag: 'h2',
                                        className: a()(E.title, R),
                                        children: N
                                    }),
                                null != f &&
                                    (0, r.jsx)(c.x, {
                                        variant: 'text-md/normal',
                                        className: E.body,
                                        children: f
                                    })
                            ]
                        })
                    }),
                    (0, r.jsxs)(u.mz, {
                        justify: d.Z.Justify.BETWEEN,
                        wrap: d.Z.Wrap.WRAP,
                        children: [n, t, i]
                    })
                ]
            })
        })
    );
};
t.default = f;
