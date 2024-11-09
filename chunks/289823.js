var n = i(200651),
    a = i(192379),
    l = i(120356),
    s = i.n(l),
    r = i(974674),
    c = i(438784),
    d = i(481060),
    o = i(686546),
    u = i(3682),
    A = i(300436);
let I = {},
    _ = 1 / 4;
function S(e) {
    let { height: t, fillColor: i } = e;
    return (0, n.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: i,
            height: t,
            width: t * u.jR
        },
        children: (0, n.jsx)(c.b, {
            className: A.dots,
            dotRadius: t * _
        })
    });
}
function E(e) {
    let { isTyping: t, statusCoords: i, status: a } = e,
        l = (0, d.useStatusFillColor)(d.StatusTypes.ONLINE);
    return t
        ? (0, n.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: i.y,
                  left: i.x
              },
              children: (0, n.jsx)(S, {
                  height: i.height,
                  fillColor: l
              })
          })
        : null != a
          ? (0, n.jsx)(d.Status, {
                size: i.height,
                status: a,
                style: {
                    position: 'absolute',
                    top: i.y,
                    left: i.x
                }
            })
          : null;
}
function f(e) {
    let { src: t, size: i } = e;
    return (0, n.jsx)('img', {
        className: A.circularImage,
        src: t,
        alt: '',
        width: i,
        height: i
    });
}
let h = {
    [d.AvatarSizes.SIZE_16]: {
        default: o.QS.DIAGONAL_FACEPILE_16,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_16,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_16
    },
    [d.AvatarSizes.SIZE_20]: {
        default: o.QS.DIAGONAL_FACEPILE_20,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_20,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_20
    },
    [d.AvatarSizes.SIZE_24]: {
        default: o.QS.DIAGONAL_FACEPILE_24,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_24,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_24
    },
    [d.AvatarSizes.SIZE_32]: {
        default: o.QS.DIAGONAL_FACEPILE_32,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [d.AvatarSizes.SIZE_40]: {
        default: o.QS.DIAGONAL_FACEPILE_32,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [d.AvatarSizes.SIZE_48]: {
        default: o.QS.DIAGONAL_FACEPILE_40,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_40,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_40
    },
    [d.AvatarSizes.SIZE_56]: {
        default: o.QS.DIAGONAL_FACEPILE_56,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_56,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_56
    },
    [d.AvatarSizes.SIZE_80]: {
        default: o.QS.DIAGONAL_FACEPILE_80,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_80,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_80
    },
    [d.AvatarSizes.SIZE_120]: {
        default: o.QS.DIAGONAL_FACEPILE_120,
        typing: o.QS.DIAGONAL_FACEPILE_TYPING_120,
        status: o.QS.DIAGONAL_FACEPILE_STATUS_120
    }
};
t.Z = function (e) {
    var t, i, l;
    let { backSrc: c, frontSrc: _, size: S, isTyping: g, status: p, style: L, className: N, ...b } = e,
        { size: x } = d.AvatarSizeSpecs[S],
        {
            statusCoords: T,
            frontAvatarOffsetPx: m,
            frontAvatarSizePx: y,
            backAvatarSizePx: G
        } = a.useMemo(() => {
            var e;
            let t = ''.concat(x, '-').concat(g);
            return null !== (e = I[t]) && void 0 !== e
                ? e
                : (function (e, t, i) {
                      let n = d.AvatarSizeSpecs[e],
                          a = n.size / (u.z3 + u.o),
                          l = a * u.z3,
                          s = a * u.o,
                          c = {
                              statusCoords: (0, r.Vq)(n, d.StatusTypes.ONLINE, !1, t),
                              frontAvatarSizePx: l,
                              backAvatarSizePx: a,
                              frontAvatarOffsetPx: s,
                              frontAvatarCenter: s + l / 2
                          };
                      return (I[i] = c), c;
                  })(S, g, t);
        }, [x, g, S]);
    let C = ((t = null != p), (i = g), (l = S), i ? h[l].typing : t ? h[l].status : h[l].default);
    return (0, n.jsxs)('div', {
        style: {
            width: x,
            height: x,
            ...L
        },
        'aria-label': b['aria-label'],
        'aria-hidden': b['aria-hidden'],
        className: s()(A.container, N),
        children: [
            (0, n.jsxs)(o.ZP, {
                mask: C,
                height: x,
                width: x,
                children: [
                    (0, n.jsx)('img', {
                        src: c,
                        alt: '',
                        width: G,
                        height: G
                    }),
                    (0, n.jsx)('div', {
                        style: {
                            position: 'absolute',
                            top: m,
                            left: m
                        },
                        children: (0, n.jsx)(f, {
                            src: _,
                            size: y,
                            isTyping: g,
                            status: p
                        })
                    })
                ]
            }),
            (0, n.jsx)(E, {
                statusCoords: T,
                status: p,
                isTyping: g
            })
        ]
    });
};
