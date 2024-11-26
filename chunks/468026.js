n.r(t);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(693789),
    o = n(1561),
    l = n(512983),
    u = n(466377),
    c = n(993365),
    d = n(481060),
    f = n(600164),
    _ = n(540059),
    p = n(388032),
    h = n(222263);
t.default = (e) => {
    let t,
        n,
        i,
        { body: m, cancelText: g, className: E, confirmColor: v, confirmText: I = p.intl.string(p.t.BddRzc), secondaryConfirmText: T, onCancel: b, onClose: S, onConfirm: y, onConfirmSecondary: A, title: N, transitionState: C, titleClassName: R } = e,
        O = (0, _.Q)('ConfirmModal'),
        D = O ? s.zx.Sizes.MEDIUM : s.zx.Sizes.LARGE;
    return (
        null != g &&
            '' !== g &&
            (t = (0, r.jsx)(s.zx, {
                type: 'button',
                size: D,
                color: s.zx.Colors.PRIMARY,
                onClick: () => {
                    null == S || S(), null == b || b();
                },
                className: h.secondaryButton,
                grow: !O,
                children: g
            })),
        null != I &&
            '' !== I &&
            (n = (0, r.jsx)(s.zx, {
                type: 'submit',
                color: v,
                size: D,
                className: a()(h.primaryButton, null != t ? h.gutter : null),
                autoFocus: !0,
                grow: !O,
                children: I
            })),
        null != T &&
            '' !== T &&
            (i = (0, r.jsx)(o.P, {
                onClick: () => {
                    null == S || S(), null == A || A();
                },
                className: h.minorContainer,
                children: (0, r.jsx)(c.x, {
                    className: h.secondaryAction,
                    variant: 'text-xs/normal',
                    children: T
                })
            })),
        (0, r.jsx)(u.Y0, {
            transitionState: C,
            className: a()(E, h.container),
            'aria-label': N,
            children: (0, r.jsxs)('form', {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == S || S(), null == y || y();
                },
                className: h.form,
                children: [
                    (0, r.jsx)(u.hz, {
                        className: h.modalContent,
                        children: (0, r.jsxs)(f.Z, {
                            direction: f.Z.Direction.VERTICAL,
                            justify: O ? f.Z.Justify.START : f.Z.Justify.CENTER,
                            className: h.content,
                            children: [
                                null != N && O
                                    ? (0, r.jsx)(d.Heading, {
                                          variant: 'heading-lg/semibold',
                                          className: a()(h.title, R),
                                          children: N
                                      })
                                    : (0, r.jsx)(l.v, {
                                          tag: 'h2',
                                          className: a()(h.title, R),
                                          children: N
                                      }),
                                null != m &&
                                    (0, r.jsx)(c.x, {
                                        variant: 'text-md/normal',
                                        className: h.body,
                                        color: O ? 'header-secondary' : 'text-normal',
                                        children: m
                                    })
                            ]
                        })
                    }),
                    (0, r.jsxs)(u.mz, {
                        justify: O ? void 0 : f.Z.Justify.BETWEEN,
                        wrap: f.Z.Wrap.WRAP,
                        children: [n, t, i]
                    })
                ]
            })
        })
    );
};
