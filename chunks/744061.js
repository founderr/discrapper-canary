n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(692547),
    s = n(780384),
    a = n(481060),
    o = n(367907),
    c = n(210887),
    u = n(626135),
    d = n(981631),
    h = n(388032),
    m = n(240375),
    p = n(554034);
function f(e) {
    let { onClose: t, onConfirm: f, onCancel: g, channel: C, analyticsType: x, popoutText: v, animation: _ } = e;
    l.useEffect(() => {
        u.default.track(d.rMx.OPEN_POPOUT, {
            type: x,
            ...(0, o.v_)(C)
        });
    }, [x, C]);
    let I = l.useCallback(() => {
            null == f || f(), t();
        }, [f, t]),
        E = l.useCallback(() => {
            null == g || g(), t();
        }, [g, t]),
        b = l.useRef(null);
    return (
        l.useEffect(() => {
            let e;
            let t = c.Z.theme,
                i = !1;
            return (
                null != _ &&
                    (async () => {
                        let [{ default: l }, r] = await Promise.all([Promise.resolve().then(n.t.bind(n, 500923, 23)), (0, s.wj)(t) ? _.dark() : _.light()]);
                        !i &&
                            null != b.current &&
                            (e = l.loadAnimation({
                                container: b.current,
                                renderer: 'svg',
                                loop: !0,
                                autoplay: !0,
                                animationData: r
                            }));
                    })(),
                () => {
                    (i = !0), null != e && (e.destroy(), (e = void 0));
                }
            );
        }, [_]),
        (0, i.jsx)(a.Dialog, {
            'aria-labelledby': 'content-warning-popout-label',
            children: (0, i.jsxs)('form', {
                className: m.contentWarningPopout,
                onSubmit: I,
                children: [
                    (0, i.jsxs)('div', {
                        className: m.body,
                        children: [
                            null != _ &&
                                (0, i.jsx)('div', {
                                    className: m.animation,
                                    ref: b
                                }),
                            (0, i.jsxs)('div', {
                                className: m.content,
                                children: [
                                    (0, i.jsx)('div', {
                                        className: m.header,
                                        children: h.intl.string(h.t.mY3Y39)
                                    }),
                                    (0, i.jsx)(a.Text, {
                                        id: 'content-warning-popout-label',
                                        className: p.markup,
                                        variant: 'text-sm/normal',
                                        children: v.body
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: m.buttonWrapper,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: m.buttonContainer,
                                                children: [
                                                    (0, i.jsx)(a.Button, {
                                                        className: m.button,
                                                        color: a.Button.Colors.PRIMARY,
                                                        onClick: E,
                                                        children: h.intl.string(h.t.fsBWmZ)
                                                    }),
                                                    (0, i.jsx)(a.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: m.buttonHint,
                                                        children: h.intl.format(h.t['0LzVPT'], {})
                                                    })
                                                ]
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: m.buttonContainer,
                                                children: [
                                                    (0, i.jsx)(a.Button, {
                                                        className: m.button,
                                                        onClick: I,
                                                        type: 'submit',
                                                        autoFocus: !0,
                                                        children: h.intl.string(h.t.KJnHq6)
                                                    }),
                                                    (0, i.jsx)(a.Text, {
                                                        variant: 'text-xs/normal',
                                                        className: m.buttonHint,
                                                        children: h.intl.format(h.t.khjqdH, {})
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    null != v.footer && '' !== v.footer
                        ? (0, i.jsxs)('div', {
                              className: m.footer,
                              children: [
                                  (0, i.jsx)(a.CircleInformationIcon, {
                                      size: 'xs',
                                      color: r.Z.unsafe_rawColors.PRIMARY_400.css,
                                      className: m.icon
                                  }),
                                  (0, i.jsx)(a.Text, {
                                      variant: 'text-sm/normal',
                                      children: v.footer
                                  })
                              ]
                          })
                        : null
                ]
            })
        })
    );
}
