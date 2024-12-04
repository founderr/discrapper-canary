n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(232713),
    l = n(532772),
    u = n(570220),
    c = n(540059),
    d = n(28546),
    f = n(443603),
    _ = n(957825),
    p = n(388032),
    h = n(553796);
t.Z = i.memo(
    i.forwardRef(function (e, t) {
        let { disabled: n, type: a } = e,
            [m, g] = (0, d.Iu)((e) => [e.activeView, e.pickerId], o.X),
            E = i.useContext(u.ZP),
            [v, I] = i.useState(!1),
            T = m === _.X1.STICKER,
            b = i.useCallback(() => {
                (0, d.RO)(_.X1.STICKER, a);
            }, [a]);
        i.useEffect(() => {
            let e = () => {
                    requestAnimationFrame(() => {
                        I(!0);
                    });
                },
                t = () => {
                    requestAnimationFrame(() => {
                        I(!1);
                    });
                };
            return (
                E.addListener('sticker-suggestions-shown', e),
                E.addListener('sticker-suggestions-hidden', t),
                () => {
                    E.removeListener('sticker-suggestions-shown', e), E.removeListener('sticker-suggestions-hidden', t);
                }
            );
        }, [E]);
        let { Component: S, events: y, play: A } = (0, l.z)(),
            N = (0, c.Q)('ChannelStickerPickerButton');
        return n
            ? null
            : (0, r.jsx)('div', {
                  className: s()(_.CT, h.buttonContainer),
                  ref: t,
                  children: (0, r.jsx)(f.Z, {
                      innerClassName: s()(h.button, h.stickerButton, { [h.stickerButtonTilted]: v && !T }),
                      ...y,
                      onClick: () => {
                          b(), A();
                      },
                      isActive: T,
                      'aria-label': p.intl.string(p.t.rZpidX),
                      'aria-expanded': T,
                      'aria-haspopup': 'dialog',
                      'aria-controls': g,
                      sparkle: !1,
                      notification: null,
                      children: (0, r.jsx)(S, {
                          size: N ? 'refresh_sm' : void 0,
                          color: 'currentColor'
                      })
                  })
              });
    })
);
