var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(974674),
    s = n(438784),
    c = n(481060),
    u = n(686546),
    d = n(3682),
    m = n(465669);
let h = {},
    f = 1 / 4;
function p(e) {
    let { height: t, fillColor: n } = e;
    return (0, i.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR
        },
        children: (0, i.jsx)(s.b, {
            className: m.dots,
            dotRadius: t * f
        })
    });
}
function g(e) {
    let { isTyping: t, statusCoords: n, status: r } = e,
        l = (0, c.useStatusFillColor)(c.StatusTypes.ONLINE);
    return t
        ? (0, i.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, i.jsx)(p, {
                  height: n.height,
                  fillColor: l
              })
          })
        : null != r
          ? (0, i.jsx)(c.Status, {
                size: n.height,
                status: r,
                style: {
                    position: 'absolute',
                    top: n.y,
                    left: n.x
                }
            })
          : null;
}
function _(e) {
    let { src: t, size: n } = e;
    return (0, i.jsx)('img', {
        className: m.circularImage,
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
    var t, n, l;
    let { backSrc: s, frontSrc: f, size: p, isTyping: C, status: I, style: x, className: N, ...v } = e,
        { size: T } = c.AvatarSizeSpecs[p],
        {
            statusCoords: S,
            frontAvatarOffsetPx: A,
            frontAvatarSizePx: b,
            backAvatarSizePx: j
        } = r.useMemo(() => {
            var e;
            let t = ''.concat(T, '-').concat(C);
            return null !== (e = h[t]) && void 0 !== e
                ? e
                : (function (e, t, n) {
                      let i = c.AvatarSizeSpecs[e],
                          r = i.size / (d.z3 + d.o),
                          l = r * d.z3,
                          a = r * d.o,
                          s = {
                              statusCoords: (0, o.Vq)(i, c.StatusTypes.ONLINE, !1, t),
                              frontAvatarSizePx: l,
                              backAvatarSizePx: r,
                              frontAvatarOffsetPx: a,
                              frontAvatarCenter: a + l / 2
                          };
                      return (h[n] = s), s;
                  })(p, C, t);
        }, [T, C, p]);
    let Z = ((t = null != I), (n = C), (l = p), n ? E[l].typing : t ? E[l].status : E[l].default);
    return (0, i.jsxs)('div', {
        style: {
            width: T,
            height: T,
            ...x
        },
        'aria-label': v['aria-label'],
        'aria-hidden': v['aria-hidden'],
        className: a()(m.container, N),
        children: [
            (0, i.jsxs)(u.ZP, {
                mask: Z,
                height: T,
                width: T,
                children: [
                    (0, i.jsx)('img', {
                        src: s,
                        alt: '',
                        width: j,
                        height: j
                    }),
                    (0, i.jsx)('div', {
                        style: {
                            position: 'absolute',
                            top: A,
                            left: A
                        },
                        children: (0, i.jsx)(_, {
                            src: f,
                            size: b,
                            isTyping: C,
                            status: I
                        })
                    })
                ]
            }),
            (0, i.jsx)(g, {
                statusCoords: S,
                status: I,
                isTyping: C
            })
        ]
    });
};
