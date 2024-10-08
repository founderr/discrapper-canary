n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    o = n(887024),
    a = n(212433),
    l = n(748780),
    r = n(481060),
    c = n(596454),
    d = n(745510),
    u = n(314910),
    h = n(912893),
    m = n(768581),
    p = n(176354),
    g = n(675654),
    f = n(867494);
let _ = [];
function T(e) {
    let { messageId: t, emoji: n, startPosition: T, targetPosition: v } = e,
        [E, b] = s.useState(0),
        [I, R] = s.useState(0),
        [S, C] = s.useState(null),
        { confettiCanvas: x } = s.useContext(d.h),
        N = (0, o.uR)(x, S),
        O = s.useMemo(
            () => [
                {
                    src:
                        null == n.id
                            ? p.ZP.getURL(n.name)
                            : m.ZP.getEmojiURL({
                                  id: n.id,
                                  animated: !1,
                                  size: 22
                              }),
                    colorize: !1
                }
            ],
            [n.name, n.id]
        ),
        Z = v.x - (v.width / 2) * 0.5,
        A = v.y - (v.height / 2) * 0.5,
        j = (0, r.useSpring)({
            from: { y: T.y },
            to: { y: A },
            config: {
                duration: 450,
                easing: l.Z.Easing.in(l.Z.Easing.exp)
            },
            onChange: (e) => {
                let { y: t } = e;
                R(t);
            }
        }),
        M = (0, r.useSpring)({
            from: {
                x: T.x,
                scale: 1,
                opacity: 1
            },
            to: {
                x: Z,
                scale: 0.5,
                opacity: 0.4
            },
            config: {
                duration: 450,
                easing: l.Z.Easing.in(l.Z.Easing.ease)
            },
            onRest: () => {
                (0, h.G)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                b(t);
            }
        });
    return (
        s.useEffect(() => {
            E > 0 &&
                I > 0 &&
                N.createConfetti({
                    ...g.We,
                    position: {
                        type: 'static',
                        value: {
                            x: E,
                            y: I
                        }
                    }
                });
        }, [N, E, I]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Ji, {
                    ref: C,
                    sprites: O,
                    colors: _,
                    spriteWidth: g.Ko,
                    spriteHeight: g.Ko
                }),
                (0, i.jsx)(u.ZP, {
                    children: (0, i.jsx)(a.animated.div, {
                        style: { ...j },
                        className: f.emojiContainer,
                        children: (0, i.jsx)(a.animated.div, {
                            style: {
                                ...M,
                                opacity: M.opacity
                            },
                            children: (0, i.jsx)(c.Z, {
                                className: f.emoji,
                                emojiId: n.id,
                                emojiName: n.name,
                                animated: n.animated,
                                size: 'jumbo'
                            })
                        })
                    })
                })
            ]
        })
    );
}
