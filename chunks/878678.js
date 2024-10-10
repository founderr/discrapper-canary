n.r(t),
    n.d(t, {
        ConfirmModal: function () {
            return d;
        },
        DeclarativeConfirmModal: function () {
            return _;
        }
    });
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(693789),
    l = n(481060),
    u = n(709692),
    c = n(642649);
function d(e) {
    let t,
        n,
        { header: a, children: d, confirmText: _, cancelText: E, className: f, onConfirm: h, onCancel: p, onClose: I, onCloseCallback: m, bodyClassName: T, transitionState: S, loading: g = !1, confirmButtonColor: A = o.zx.Colors.RED, focusCancel: N = !1 } = e,
        R = i.useRef(null);
    return (
        i.useEffect(() => {
            !N &&
                setTimeout(() => {
                    var e;
                    return null === (e = R.current) || void 0 === e ? void 0 : e.focus();
                }, 0);
        }, [N]),
        i.useLayoutEffect(() => () => (null == m ? void 0 : m())),
        null != E &&
            (t = (0, r.jsx)(o.zx, {
                type: 'button',
                look: o.zx.Looks.LINK,
                color: o.zx.Colors.PRIMARY,
                disabled: g,
                onClick: () => {
                    null == p || p(), I();
                },
                autoFocus: N,
                children: E
            })),
        null != _ &&
            (n = (0, r.jsx)(o.zx, {
                buttonRef: R,
                type: 'submit',
                color: A,
                submitting: g,
                onClick: async () => {
                    try {
                        await (null == h ? void 0 : h()), I();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !N,
                children: _
            })),
        (0, r.jsxs)(u.Y0, {
            className: f,
            transitionState: S,
            children: [
                null != a
                    ? (0, r.jsx)(u.xB, {
                          separator: !1,
                          children: (0, r.jsx)(l.Heading, {
                              variant: 'heading-lg/semibold',
                              children: a
                          })
                      })
                    : null,
                (0, r.jsx)(u.hz, {
                    className: s()(c.content, T),
                    children: d
                }),
                (0, r.jsxs)(u.mz, {
                    children: [n, t]
                })
            ]
        })
    );
}
function _(e) {
    return (0, r.jsx)(u.u_, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) =>
            (0, r.jsx)(d, {
                ...t,
                ...e
            })
    });
}
