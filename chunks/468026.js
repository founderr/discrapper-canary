n.r(t);
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(693789),
    o = n(1561),
    l = n(512983),
    u = n(466377),
    c = n(993365),
    d = n(600164),
    _ = n(689938),
    E = n(149536);
t.default = (e) => {
    let t,
        n,
        i,
        { body: f, cancelText: h, className: p, confirmColor: I, confirmText: m = _.Z.Messages.OKAY, secondaryConfirmText: T, onCancel: S, onClose: g, onConfirm: A, onConfirmSecondary: N, title: R, transitionState: O, titleClassName: v } = e;
    return (
        null != h &&
            '' !== h &&
            (t = (0, r.jsx)(s.zx, {
                type: 'button',
                size: s.zx.Sizes.LARGE,
                color: s.zx.Colors.PRIMARY,
                onClick: () => {
                    null == g || g(), null == S || S();
                },
                className: E.secondaryButton,
                children: h
            })),
        null != m &&
            '' !== m &&
            (n = (0, r.jsx)(s.zx, {
                type: 'submit',
                color: I,
                size: s.zx.Sizes.LARGE,
                className: a()(E.primaryButton, null != t ? E.gutter : null),
                autoFocus: !0,
                children: m
            })),
        null != T &&
            '' !== T &&
            (i = (0, r.jsx)(o.P, {
                onClick: () => {
                    null == g || g(), null == N || N();
                },
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
            'aria-label': R,
            children: (0, r.jsxs)('form', {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == g || g(), null == A || A();
                },
                className: E.form,
                children: [
                    (0, r.jsx)(u.hz, {
                        className: E.modalContent,
                        children: (0, r.jsxs)(d.Z, {
                            direction: d.Z.Direction.VERTICAL,
                            justify: d.Z.Justify.CENTER,
                            className: E.content,
                            children: [
                                null != R &&
                                    (0, r.jsx)(l.v, {
                                        tag: 'h2',
                                        className: a()(E.title, v),
                                        children: R
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
