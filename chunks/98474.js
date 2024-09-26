n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(887024),
    s = n(526629),
    l = n(748780),
    u = n(481060),
    c = n(596454),
    d = n(745510),
    _ = n(314910),
    E = n(912893),
    f = n(768581),
    h = n(176354),
    p = n(675654),
    m = n(867494);
let I = 450,
    T = 0.5,
    g = [];
function S(e) {
    let { messageId: t, emoji: n, startPosition: r, targetPosition: S } = e,
        [A, v] = a.useState(0),
        [N, O] = a.useState(0),
        [R, C] = a.useState(null),
        { confettiCanvas: y } = a.useContext(d.h),
        L = (0, o.uR)(y, R),
        b = a.useMemo(
            () => [
                {
                    src:
                        null == n.id
                            ? h.ZP.getURL(n.name)
                            : f.ZP.getEmojiURL({
                                  id: n.id,
                                  animated: !1,
                                  size: 22
                              }),
                    colorize: !1
                }
            ],
            [n.name, n.id]
        ),
        D = S.x - (S.width / 2) * T,
        M = S.y - (S.height / 2) * T,
        P = (0, u.useSpring)({
            from: { y: r.y },
            to: { y: M },
            config: {
                duration: I,
                easing: l.Z.Easing.in(l.Z.Easing.exp)
            },
            onChange: (e) => {
                let { y: t } = e;
                O(t);
            }
        }),
        U = (0, u.useSpring)({
            from: {
                x: r.x,
                scale: 1,
                opacity: 1
            },
            to: {
                x: D,
                scale: T,
                opacity: 0.4
            },
            config: {
                duration: I,
                easing: l.Z.Easing.in(l.Z.Easing.ease)
            },
            onRest: () => {
                (0, E.G)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                v(t);
            }
        });
    return (
        a.useEffect(() => {
            A > 0 &&
                N > 0 &&
                L.createConfetti({
                    ...p.We,
                    position: {
                        type: 'static',
                        value: {
                            x: A,
                            y: N
                        }
                    }
                });
        }, [L, A, N]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Ji, {
                    ref: C,
                    sprites: b,
                    colors: g,
                    spriteWidth: p.Ko,
                    spriteHeight: p.Ko
                }),
                (0, i.jsx)(_.ZP, {
                    children: (0, i.jsx)(s.animated.div, {
                        style: { ...P },
                        className: m.emojiContainer,
                        children: (0, i.jsx)(s.animated.div, {
                            style: {
                                ...U,
                                opacity: U.opacity
                            },
                            children: (0, i.jsx)(c.Z, {
                                className: m.emoji,
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
