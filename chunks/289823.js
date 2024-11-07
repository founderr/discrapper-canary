var l = n(200651),
    i = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(974674),
    o = n(438784),
    c = n(481060),
    u = n(686546),
    d = n(3682),
    h = n(287279);
let f = {},
    _ = 1 / 4;
function g(e) {
    let { height: t, fillColor: n } = e;
    return (0, l.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR
        },
        children: (0, l.jsx)(o.b, {
            className: h.dots,
            dotRadius: t * _
        })
    });
}
function m(e) {
    let { isTyping: t, statusCoords: n, status: i } = e,
        a = (0, c.useStatusFillColor)(c.StatusTypes.ONLINE);
    return t
        ? (0, l.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, l.jsx)(g, {
                  height: n.height,
                  fillColor: a
              })
          })
        : null != i
          ? (0, l.jsx)(c.Status, {
                size: n.height,
                status: i,
                style: {
                    position: 'absolute',
                    top: n.y,
                    left: n.x
                }
            })
          : null;
}
function p(e) {
    let { src: t, size: n } = e;
    return (0, l.jsx)('img', {
        className: h.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let E = {
    [c.AvatarSizes.SIZE_16]: {
        default: u.QS.DIAGONAL_FACEPILE_16,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_16,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_16
    },
    [c.AvatarSizes.SIZE_20]: {
        default: u.QS.DIAGONAL_FACEPILE_20,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_20,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_20
    },
    [c.AvatarSizes.SIZE_24]: {
        default: u.QS.DIAGONAL_FACEPILE_24,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_24,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_24
    },
    [c.AvatarSizes.SIZE_32]: {
        default: u.QS.DIAGONAL_FACEPILE_32,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [c.AvatarSizes.SIZE_40]: {
        default: u.QS.DIAGONAL_FACEPILE_32,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [c.AvatarSizes.SIZE_48]: {
        default: u.QS.DIAGONAL_FACEPILE_40,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_40,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_40
    },
    [c.AvatarSizes.SIZE_56]: {
        default: u.QS.DIAGONAL_FACEPILE_56,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_56,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_56
    },
    [c.AvatarSizes.SIZE_80]: {
        default: u.QS.DIAGONAL_FACEPILE_80,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_80,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_80
    },
    [c.AvatarSizes.SIZE_120]: {
        default: u.QS.DIAGONAL_FACEPILE_120,
        typing: u.QS.DIAGONAL_FACEPILE_TYPING_120,
        status: u.QS.DIAGONAL_FACEPILE_STATUS_120
    }
};
t.Z = function (e) {
    var t, n, a;
    let { backSrc: o, frontSrc: _, size: g, isTyping: I, status: S, style: A, className: C, ...v } = e,
        { size: b } = c.AvatarSizeSpecs[g],
        {
            statusCoords: L,
            frontAvatarOffsetPx: N,
            frontAvatarSizePx: x,
            backAvatarSizePx: T
        } = i.useMemo(() => {
            var e;
            let t = ''.concat(b, '-').concat(I);
            return null !== (e = f[t]) && void 0 !== e
                ? e
                : (function (e, t, n) {
                      let l = c.AvatarSizeSpecs[e],
                          i = l.size / (d.z3 + d.o),
                          a = i * d.z3,
                          r = i * d.o,
                          o = {
                              statusCoords: (0, s.Vq)(l, c.StatusTypes.ONLINE, !1, t),
                              frontAvatarSizePx: a,
                              backAvatarSizePx: i,
                              frontAvatarOffsetPx: r,
                              frontAvatarCenter: r + a / 2
                          };
                      return (f[n] = o), o;
                  })(g, I, t);
        }, [b, I, g]);
    let P = ((t = null != S), (n = I), (a = g), n ? E[a].typing : t ? E[a].status : E[a].default);
    return (0, l.jsxs)('div', {
        style: {
            width: b,
            height: b,
            ...A
        },
        'aria-label': v['aria-label'],
        'aria-hidden': v['aria-hidden'],
        className: r()(h.container, C),
        children: [
            (0, l.jsxs)(u.ZP, {
                mask: P,
                height: b,
                width: b,
                children: [
                    (0, l.jsx)('img', {
                        src: o,
                        alt: '',
                        width: T,
                        height: T
                    }),
                    (0, l.jsx)('div', {
                        style: {
                            position: 'absolute',
                            top: N,
                            left: N
                        },
                        children: (0, l.jsx)(p, {
                            src: _,
                            size: x,
                            isTyping: I,
                            status: S
                        })
                    })
                ]
            }),
            (0, l.jsx)(m, {
                statusCoords: L,
                status: S,
                isTyping: I
            })
        ]
    });
};
