var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(143927),
    u = n(532772),
    c = n(570220),
    d = n(28546),
    _ = n(443603),
    E = n(957825),
    f = n(689938),
    h = n(933283);
function p(e, t) {
    let { disabled: n, type: r } = e,
        [o, p] = (0, d.Iu)((e) => [e.activeView, e.pickerId], l.Z),
        m = a.useContext(c.ZP),
        I = !1,
        [T, g] = a.useState(!1),
        S = o === E.X1.STICKER,
        A = !1,
        v = a.useCallback(() => {
            (0, d.RO)(E.X1.STICKER, r);
        }, [r]);
    a.useEffect(() => {
        let e = () => {
                requestAnimationFrame(() => {
                    g(!0);
                });
            },
            t = () => {
                requestAnimationFrame(() => {
                    g(!1);
                });
            };
        return (
            m.addListener('sticker-suggestions-shown', e),
            m.addListener('sticker-suggestions-hidden', t),
            () => {
                m.removeListener('sticker-suggestions-shown', e), m.removeListener('sticker-suggestions-hidden', t);
            }
        );
    }, [m]);
    let { Component: N, events: O, play: R } = (0, u.z)();
    if (n) return null;
    let C = T;
    return (0, i.jsx)('div', {
        className: s()(E.CT, h.buttonContainer),
        ref: t,
        children: (0, i.jsx)(_.Z, {
            innerClassName: s()(h.button, h.stickerButton, { [h.stickerButtonTilted]: C && !S }),
            ...O,
            onClick: () => {
                v(), R();
            },
            isActive: S,
            'aria-label': f.Z.Messages.STICKER_BUTTON_LABEL,
            'aria-expanded': S,
            'aria-haspopup': 'dialog',
            'aria-controls': p,
            sparkle: I,
            notification: A ? _.j.UPDATE : null,
            children: (0, i.jsx)(N, { color: 'currentColor' })
        })
    });
}
t.Z = a.memo(a.forwardRef(p));
