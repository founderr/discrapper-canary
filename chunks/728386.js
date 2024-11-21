n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(515643),
    l = n(532772),
    u = n(570220),
    c = n(28546),
    d = n(443603),
    f = n(957825),
    _ = n(388032),
    p = n(703130);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: a } = e,
            [h, m] = (0, c.Iu)((e) => [e.activeView, e.pickerId], o.X),
            g = i.useContext(u.ZP),
            [E, v] = i.useState(!1),
            b = h === f.X1.STICKER,
            I = i.useCallback(() => {
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
        let { Component: T, events: S, play: y } = (0, l.z)();
        return n
            ? null
            : (0, r.jsx)('div', {
                  className: s()(f.CT, p.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(d.Z, {
                      innerClassName: s()(p.button, p.stickerButton, { [p.stickerButtonTilted]: E && !b }),
                      ...S,
                      onClick: () => {
                          I(), y();
                      },
                      isActive: b,
                      'aria-label': _.intl.string(_.t.rZpidX),
                      'aria-expanded': b,
                      'aria-haspopup': 'dialog',
                      'aria-controls': m,
                      sparkle: !1,
                      notification: null,
                      children: (0, r.jsx)(T, { color: 'currentColor' })
                  })
              });
    })
);
