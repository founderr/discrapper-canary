var a = i(200651),
    n = i(192379),
    l = i(120356),
    s = i.n(l),
    r = i(974674),
    c = i(438784),
    d = i(481060),
    o = i(686546),
    u = i(3682),
    A = i(300436);
let I = {},
    S = 1 / 4;
function _(e) {
    let { height: t, fillColor: i } = e;
    return (0, a.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: i,
            height: t,
            width: t * u.jR
        },
        children: (0, a.jsx)(c.b, {
            className: A.dots,
            dotRadius: t * S
        })
    });
}
function E(e) {
    let { isTyping: t, statusCoords: i, status: n } = e,
        l = (0, d.useStatusFillColor)(d.StatusTypes.ONLINE);
    return t
        ? (0, a.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: i.y,
                  left: i.x
              },
              children: (0, a.jsx)(_, {
                  height: i.height,
                  fillColor: l
              })
          })
        : null != n
          ? (0, a.jsx)(d.Status, {
                size: i.height,
                status: n,
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
    return (0, a.jsx)('img', {
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
    let { backSrc: c, frontSrc: S, size: _, isTyping: g, status: p, style: L, className: N, ...b } = e,
        { size: x } = d.AvatarSizeSpecs[_],
        {
            statusCoords: m,
            frontAvatarOffsetPx: T,
            frontAvatarSizePx: v,
            backAvatarSizePx: y
        } = n.useMemo(() => {
            var e;
            let t = ''.concat(x, '-').concat(g);
            return null !== (e = I[t]) && void 0 !== e
                ? e
                : (function (e, t, i) {
                      let a = d.AvatarSizeSpecs[e],
                          n = a.size / (u.z3 + u.o),
                          l = n * u.z3,
                          s = n * u.o,
                          c = {
                              statusCoords: (0, r.Vq)(a, d.StatusTypes.ONLINE, !1, t),
                              frontAvatarSizePx: l,
                              backAvatarSizePx: n,
                              frontAvatarOffsetPx: s,
                              frontAvatarCenter: s + l / 2
                          };
                      return (I[i] = c), c;
                  })(_, g, t);
        }, [x, g, _]);
    let C = ((t = null != p), (i = g), (l = _), i ? h[l].typing : t ? h[l].status : h[l].default);
    return (0, a.jsxs)('div', {
        style: {
            width: x,
            height: x,
            ...L
        },
        'aria-label': b['aria-label'],
        'aria-hidden': b['aria-hidden'],
        className: s()(A.container, N),
        children: [
            (0, a.jsxs)(o.ZP, {
                mask: C,
                height: x,
                width: x,
                children: [
                    (0, a.jsx)('img', {
                        src: c,
                        alt: '',
                        width: y,
                        height: y
                    }),
                    (0, a.jsx)('div', {
                        style: {
                            position: 'absolute',
                            top: T,
                            left: T
                        },
                        children: (0, a.jsx)(f, {
                            src: S,
                            size: v,
                            isTyping: g,
                            status: p
                        })
                    })
                ]
            }),
            (0, a.jsx)(E, {
                statusCoords: m,
                status: p,
                isTyping: g
            })
        ]
    });
};
