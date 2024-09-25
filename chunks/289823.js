var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(974674),
    l = n(438784),
    u = n(481060),
    c = n(686546),
    d = n(3682),
    _ = n(300436);
let E = {};
function f(e, t, n) {
    let r = u.AvatarSizeSpecs[e],
        i = r.size / (d.z3 + d.o),
        a = i * d.z3,
        o = i * d.o,
        l = o + a / 2,
        c = {
            statusCoords: (0, s.Vq)(r, u.StatusTypes.ONLINE, !1, t),
            frontAvatarSizePx: a,
            backAvatarSizePx: i,
            frontAvatarOffsetPx: o,
            frontAvatarCenter: l
        };
    return (E[n] = c), c;
}
let h = 1 / 4;
function p(e) {
    let { height: t, fillColor: n } = e;
    return (0, r.jsx)('div', {
        style: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: t / 2,
            backgroundColor: n,
            height: t,
            width: t * d.jR
        },
        children: (0, r.jsx)(l.b, {
            className: _.dots,
            dotRadius: t * h
        })
    });
}
function m(e) {
    let { isTyping: t, statusCoords: n, status: i } = e,
        a = (0, u.useStatusFillColor)(u.StatusTypes.ONLINE);
    return t
        ? (0, r.jsx)('div', {
              style: {
                  position: 'absolute',
                  top: n.y,
                  left: n.x
              },
              children: (0, r.jsx)(p, {
                  height: n.height,
                  fillColor: a
              })
          })
        : null != i
          ? (0, r.jsx)(u.Status, {
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
function I(e) {
    let { src: t, size: n } = e;
    return (0, r.jsx)('img', {
        className: _.circularImage,
        src: t,
        alt: '',
        width: n,
        height: n
    });
}
let T = {
    [u.AvatarSizes.SIZE_16]: {
        default: c.QS.DIAGONAL_FACEPILE_16,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_16,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_16
    },
    [u.AvatarSizes.SIZE_20]: {
        default: c.QS.DIAGONAL_FACEPILE_20,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_20,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_20
    },
    [u.AvatarSizes.SIZE_24]: {
        default: c.QS.DIAGONAL_FACEPILE_24,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_24,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_24
    },
    [u.AvatarSizes.SIZE_32]: {
        default: c.QS.DIAGONAL_FACEPILE_32,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [u.AvatarSizes.SIZE_40]: {
        default: c.QS.DIAGONAL_FACEPILE_32,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_32,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_32
    },
    [u.AvatarSizes.SIZE_48]: {
        default: c.QS.DIAGONAL_FACEPILE_40,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_40,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_40
    },
    [u.AvatarSizes.SIZE_56]: {
        default: c.QS.DIAGONAL_FACEPILE_56,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_56,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_56
    },
    [u.AvatarSizes.SIZE_80]: {
        default: c.QS.DIAGONAL_FACEPILE_80,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_80,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_80
    },
    [u.AvatarSizes.SIZE_120]: {
        default: c.QS.DIAGONAL_FACEPILE_120,
        typing: c.QS.DIAGONAL_FACEPILE_TYPING_120,
        status: c.QS.DIAGONAL_FACEPILE_STATUS_120
    }
};
function g(e, t, n) {
    return t ? T[n].typing : e ? T[n].status : T[n].default;
}
function S(e) {
    let { backSrc: t, frontSrc: n, size: a, isTyping: s, status: l, style: d, className: h, ...p } = e,
        { size: T } = u.AvatarSizeSpecs[a],
        {
            statusCoords: S,
            frontAvatarOffsetPx: A,
            frontAvatarSizePx: v,
            backAvatarSizePx: N
        } = i.useMemo(() => {
            var e;
            let t = ''.concat(T, '-').concat(s);
            return null !== (e = E[t]) && void 0 !== e ? e : f(a, s, t);
        }, [T, s, a]),
        O = g(null != l, s, a);
    return (0, r.jsxs)('div', {
        style: {
            width: T,
            height: T,
            ...d
        },
        'aria-label': p['aria-label'],
        'aria-hidden': p['aria-hidden'],
        className: o()(_.container, h),
        children: [
            (0, r.jsxs)(c.ZP, {
                mask: O,
                height: T,
                width: T,
                children: [
                    (0, r.jsx)('img', {
                        src: t,
                        alt: '',
                        width: N,
                        height: N
                    }),
                    (0, r.jsx)('div', {
                        style: {
                            position: 'absolute',
                            top: A,
                            left: A
                        },
                        children: (0, r.jsx)(I, {
                            src: n,
                            size: v,
                            isTyping: s,
                            status: l
                        })
                    })
                ]
            }),
            (0, r.jsx)(m, {
                statusCoords: S,
                status: l,
                isTyping: s
            })
        ]
    });
}
t.Z = S;
