n.r(t),
    n.d(t, {
        ConfirmModal: function () {
            return _;
        },
        DeclarativeConfirmModal: function () {
            return E;
        }
    });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(693789),
    l = n(481060),
    u = n(540059),
    c = n(709692),
    d = n(642649);
function _(e) {
    let t,
        n,
        { header: a, children: _, confirmText: E, cancelText: f, className: h, onConfirm: p, onCancel: I, onClose: m, onCloseCallback: T, bodyClassName: S, transitionState: g, loading: A = !1, confirmButtonColor: N = o.zx.Colors.RED, focusCancel: R = !1 } = e,
        O = i.useRef(null),
        v = (0, u.Q)('ConfirmModal');
    return (
        i.useEffect(() => {
            !R &&
                setTimeout(() => {
                    var e;
                    return null === (e = O.current) || void 0 === e ? void 0 : e.focus();
                }, 0);
        }, [R]),
        i.useLayoutEffect(() => () => (null == T ? void 0 : T())),
        null != f &&
            (t = (0, r.jsx)(o.zx, {
                type: 'button',
                look: v ? o.zx.Looks.FILLED : o.zx.Looks.LINK,
                color: o.zx.Colors.PRIMARY,
                className: d.cancelButton,
                size: o.zx.Sizes.MEDIUM,
                disabled: A,
                onClick: () => {
                    null == I || I(), m();
                },
                autoFocus: R,
                children: f
            })),
        null != E &&
            (n = (0, r.jsx)(o.zx, {
                buttonRef: O,
                type: 'submit',
                size: o.zx.Sizes.MEDIUM,
                color: N,
                submitting: A,
                onClick: async () => {
                    try {
                        await (null == p ? void 0 : p()), m();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !R,
                children: E
            })),
        (0, r.jsxs)(c.Y0, {
            className: h,
            transitionState: g,
            children: [
                null != a
                    ? (0, r.jsx)(c.xB, {
                          separator: !1,
                          children: (0, r.jsx)(l.Heading, {
                              variant: 'heading-lg/semibold',
                              children: a
                          })
                      })
                    : null,
                (0, r.jsx)(c.hz, {
                    className: s()(d.content, S),
                    children: _
                }),
                (0, r.jsxs)(c.mz, {
                    children: [n, t]
                })
            ]
        })
    );
}
function E(e) {
    return (0, r.jsx)(c.u_, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) =>
            (0, r.jsx)(_, {
                ...t,
                ...e
            })
    });
}
