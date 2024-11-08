n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(782690),
    l = n(532772),
    u = n(570220),
    c = n(28546),
    d = n(443603),
    f = n(957825),
    _ = n(388032),
    h = n(482133);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: a } = e,
            [p, m] = (0, c.Iu)((e) => [e.activeView, e.pickerId], o.Z),
            g = i.useContext(u.ZP),
            [E, v] = i.useState(!1),
            I = p === f.X1.STICKER,
            S = i.useCallback(() => {
                (0, c.RO)(f.X1.STICKER, a);
            }, [a]);
        i.useEffect(() => {
            let e = () => {
                    requestAnimationFrame(() => {
                        v(!0);
                    });
                },
                t = () => {
                    requestAnimationFrame(() => {
                        v(!1);
                    });
                };
            return (
                g.addListener('sticker-suggestions-shown', e),
                g.addListener('sticker-suggestions-hidden', t),
                () => {
                    g.removeListener('sticker-suggestions-shown', e), g.removeListener('sticker-suggestions-hidden', t);
                }
            );
        }, [g]);
        let { Component: b, events: T, play: y } = (0, l.z)();
        return n
            ? null
            : (0, r.jsx)('div', {
                  className: s()(f.CT, h.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(d.Z, {
                      innerClassName: s()(h.button, h.stickerButton, { [h.stickerButtonTilted]: E && !I }),
                      ...T,
                      onClick: () => {
                          S(), y();
                      },
                      isActive: I,
                      'aria-label': _.intl.string(_.t.rZpidX),
                      'aria-expanded': I,
                      'aria-haspopup': 'dialog',
                      'aria-controls': m,
                      sparkle: !1,
                      notification: null,
                      children: (0, r.jsx)(b, { color: 'currentColor' })
                  })
              });
    })
);
