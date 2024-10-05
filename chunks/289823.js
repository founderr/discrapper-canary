var l = n(735250),
    a = n(470079),
    s = n(120356),
    i = n.n(s),
    r = n(974674),
    o = n(438784),
    c = n(481060),
    u = n(686546),
    d = n(3682),
    h = n(300436);
let _ = {},
    f = 1 / 4;
function E(e) {
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
            dotRadius: t * f
        })
    });
}
function g(e) {
    let { isTyping: t, statusCoords: n, status: a } = e,
        s = (0, c.useStatusFillColor)(c.StatusTypes.ONLINE);
    return t
        ? (0, l.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, l.jsx)(E, {
                  height: n.height,
                  fillColor: s
              })
          })
        : null != a
          ? (0, l.jsx)(c.Status, {
                size: n.height,
                status: a,
                style: {
                    position: 'absolute',
                    top: n.y,
                    left: n.x
                }
            })
          : null;
}
function m(e) {
    let { src: t, size: n } = e;
    return (0, l.jsx)('img', {
        className: h.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let S = {
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
    var t, n, s;
    let { backSrc: o, frontSrc: f, size: E, isTyping: A, status: I, style: p, className: C, ...N } = e,
        { size: L } = c.AvatarSizeSpecs[E],
        {
            statusCoords: v,
            frontAvatarOffsetPx: b,
            frontAvatarSizePx: x,
            backAvatarSizePx: T
        } = a.useMemo(() => {
            var e;
            let t = ''.concat(L, '-').concat(A);
            return null !== (e = _[t]) && void 0 !== e
                ? e
                : (function (e, t, n) {
                      let l = c.AvatarSizeSpecs[e],
                          a = l.size / (d.z3 + d.o),
                          s = a * d.z3,
                          i = a * d.o,
                          o = {
                              statusCoords: (0, r.Vq)(l, c.StatusTypes.ONLINE, !1, t),
                              frontAvatarSizePx: s,
                              backAvatarSizePx: a,
                              frontAvatarOffsetPx: i,
                              frontAvatarCenter: i + s / 2
                          };
                      return (_[n] = o), o;
                  })(E, A, t);
        }, [L, A, E]);
    let Z = ((t = null != I), (n = A), (s = E), n ? S[s].typing : t ? S[s].status : S[s].default);
    return (0, l.jsxs)('div', {
        style: {
            width: L,
            height: L,
            ...p
        },
        'aria-label': N['aria-label'],
        'aria-hidden': N['aria-hidden'],
        className: i()(h.container, C),
        children: [
            (0, l.jsxs)(u.ZP, {
                mask: Z,
                height: L,
                width: L,
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
                            top: b,
                            left: b
                        },
                        children: (0, l.jsx)(m, {
                            src: f,
                            size: x,
                            isTyping: A,
                            status: I
                        })
                    })
                ]
            }),
            (0, l.jsx)(g, {
                statusCoords: v,
                status: I,
                isTyping: A
            })
        ]
    });
};
