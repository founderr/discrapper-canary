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
    _ = n(600164),
    E = n(540059),
    f = n(689938),
    h = n(149536);
t.default = (e) => {
    let t,
        n,
        i,
        { body: p, cancelText: I, className: m, confirmColor: T, confirmText: S = f.Z.Messages.OKAY, secondaryConfirmText: g, onCancel: A, onClose: N, onConfirm: R, onConfirmSecondary: O, title: v, transitionState: C, titleClassName: L } = e,
        D = (0, E.Q)('ConfirmModal'),
        y = D ? s.zx.Sizes.MEDIUM : s.zx.Sizes.LARGE;
    return (
        null != I &&
            '' !== I &&
            (t = (0, r.jsx)(s.zx, {
                type: 'button',
                size: y,
                color: s.zx.Colors.PRIMARY,
                onClick: () => {
                    null == N || N(), null == A || A();
                },
                className: h.secondaryButton,
                grow: !D,
                children: I
            })),
        null != S &&
            '' !== S &&
            (n = (0, r.jsx)(s.zx, {
                type: 'submit',
                color: T,
                size: y,
                className: a()(h.primaryButton, null != t ? h.gutter : null),
                autoFocus: !0,
                grow: !D,
                children: S
            })),
        null != g &&
            '' !== g &&
            (i = (0, r.jsx)(o.P, {
                onClick: () => {
                    null == N || N(), null == O || O();
                },
                className: h.minorContainer,
                children: (0, r.jsx)(c.x, {
                    className: h.secondaryAction,
                    variant: 'text-xs/normal',
                    children: g
                })
            })),
        (0, r.jsx)(u.Y0, {
            transitionState: C,
            className: a()(m, h.container),
            'aria-label': v,
            children: (0, r.jsxs)('form', {
                onSubmit: (e) => {
                    null != e && e.preventDefault(), null == N || N(), null == R || R();
                },
                className: h.form,
                children: [
                    (0, r.jsx)(u.hz, {
                        className: h.modalContent,
                        children: (0, r.jsxs)(_.Z, {
                            direction: _.Z.Direction.VERTICAL,
                            justify: D ? _.Z.Justify.START : _.Z.Justify.CENTER,
                            className: h.content,
                            children: [
                                null != v && D
                                    ? (0, r.jsx)(d.Heading, {
                                          variant: 'heading-lg/semibold',
                                          className: a()(h.title, L),
                                          children: v
                                      })
                                    : (0, r.jsx)(l.v, {
                                          tag: 'h2',
                                          className: a()(h.title, L),
                                          children: v
                                      }),
                                null != p &&
                                    (0, r.jsx)(c.x, {
                                        variant: 'text-md/normal',
                                        className: h.body,
                                        color: D ? 'header-secondary' : 'text-normal',
                                        children: p
                                    })
                            ]
                        })
                    }),
                    (0, r.jsxs)(u.mz, {
                        justify: D ? void 0 : _.Z.Justify.BETWEEN,
                        wrap: _.Z.Wrap.WRAP,
                        children: [n, t, i]
                    })
                ]
            })
        })
    );
};
