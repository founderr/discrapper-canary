n.d(t, {
    T: function () {
        return l;
    }
});
var r = n(650419),
    i = n(103865),
    a = n(741662),
    s = n(33693),
    o = n(192379);
function l(e) {
    let { isDisabled: t, onLongPressStart: n, onLongPressEnd: l, onLongPress: u, threshold: c = 500, accessibilityDescription: d } = e,
        f = (0, o.useRef)(void 0),
        { addGlobalListener: _, removeGlobalListener: p } = (0, i.x)(),
        { pressProps: h } = (0, r.r)({
            isDisabled: t,
            onPressStart(e) {
                if (
                    (e.continuePropagation(),
                    ('mouse' === e.pointerType || 'touch' === e.pointerType) &&
                        (n &&
                            n({
                                ...e,
                                type: 'longpressstart'
                            }),
                        (f.current = setTimeout(() => {
                            e.target.dispatchEvent(new PointerEvent('pointercancel', { bubbles: !0 })),
                                u &&
                                    u({
                                        ...e,
                                        type: 'longpress'
                                    }),
                                (f.current = void 0);
                        }, c)),
                        'touch' === e.pointerType))
                ) {
                    let t = (e) => {
                        e.preventDefault();
                    };
                    _(e.target, 'contextmenu', t, { once: !0 }),
                        _(
                            window,
                            'pointerup',
                            () => {
                                setTimeout(() => {
                                    p(e.target, 'contextmenu', t);
                                }, 30);
                            },
                            { once: !0 }
                        );
                }
            },
            onPressEnd(e) {
                f.current && clearTimeout(f.current),
                    l &&
                        ('mouse' === e.pointerType || 'touch' === e.pointerType) &&
                        l({
                            ...e,
                            type: 'longpressend'
                        });
            }
        }),
        m = (0, a.P)(u && !t ? d : void 0);
    return { longPressProps: (0, s.d)(h, m) };
}
