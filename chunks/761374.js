n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    o = n(765250),
    a = n(393238),
    s = n(358221),
    c = n(569545),
    u = n(199902),
    d = n(314897),
    h = n(592125),
    f = n(355863),
    m = n(944486),
    v = n(350663),
    p = n(340101),
    x = n(666540);
let g = [];
function C(e, t, n, i) {
    let r = (i - 1) * v.z;
    return e === p.C5.HORIZONTAL ? Math.min(Math.max((t - r) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - r) / i) * 16) / 9, 256));
}
function Z(e) {
    var t;
    let { id: n, size: Z, locked: I, padding: j, borderWidth: _, opacity: E, horizontal: b, pinned: w } = e,
        N = 2 * j + 2 * _;
    let { width: k, height: L } = {
            width: 'number' == typeof (t = Z).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        S = (0, l.e7)([m.Z], () => m.Z.getVoiceChannelId()),
        { width: y, height: T, ref: A } = (0, a.Z)(),
        O = (0, l.e7)(
            [f.Z],
            () => {
                var e;
                let t = f.Z.getWidget(n);
                return !!(0, p.ZL)(t) && (null === (e = t.meta.showAllStreams) || void 0 === e || e);
            },
            [n]
        ),
        V = (0, l.e7)([h.Z], () => h.Z.getChannel(S)),
        M = (0, l.e7)([d.default], () => d.default.getId()),
        { participantsVersion: P, streamParticipants: z } = (0, l.cj)(
            [u.Z, s.Z],
            () => {
                if (null == S)
                    return {
                        streamParticipants: g,
                        participantsVersion: -1
                    };
                let e = new Set(u.Z.getAllActiveStreamsForChannel(S).map((e) => (0, c.V9)(e))),
                    t = (t) => e.has((0, c.V9)(t.stream)),
                    n = s.Z.getStreamParticipants(S).filter((t) => t.user.id !== M && (!!O || e.has((0, c.V9)(t.stream))));
                return (
                    n.sort((e, n) => (t(e) && !t(n) ? -1 : !t(e) && t(n) ? 1 : e.user.username.localeCompare(n.user.username))),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: s.Z.getParticipantsVersion(S)
                    }
                );
            },
            [S, M, O]
        ),
        R = z.length,
        D = null == V || 0 === R,
        { tileWidth: W, layout: U } = (function (e, t, n, i, l) {
            let o = (function (e, t, n, i) {
                    let r = C(p.C5.HORIZONTAL, e, t, n),
                        l = C(p.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case p.C5.VERTICAL:
                            return l;
                        case p.C5.HORIZONTAL:
                            return r;
                    }
                    let o = ((9 * l) / 16 + v.z) * n - v.z;
                    return e > (16 * t) / 9 ? r : o <= t ? l : (9 * r) / 16 <= t ? r : l;
                })(n, i, t, l),
                a = C(p.C5.VERTICAL, n, i, t),
                s = null != l ? l : o === a ? p.C5.VERTICAL : p.C5.HORIZONTAL,
                [c, u] = r.useState(o);
            return (
                r.useEffect(() => {
                    !e && u(o);
                }, [e, o]),
                {
                    layout: s,
                    tileWidth: c
                }
            );
        })(!1, R, null != y ? y : k - N, null != T ? T : L - N, b ? p.C5.HORIZONTAL : p.C5.VERTICAL),
        F = {
            id: n,
            width: k,
            height: L,
            sizeOffset: N,
            layout: U,
            padding: j,
            participants: z.length
        };
    return (!(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: l } = e,
            a = r.useRef(l);
        r.useEffect(() => void (a.current = l)),
            r.useEffect(() => {
                let { id: e, width: t, height: i, sizeOffset: r, layout: l, padding: s } = a.current;
                if (0 === n.length) {
                    (256 !== t || 144 !== i) &&
                        (0, o.nv)({
                            widgetId: e,
                            size: {
                                fixed: !0,
                                width: 256,
                                height: 144
                            }
                        });
                    return;
                }
                if (l === p.C5.HORIZONTAL) {
                    let t = (16 / 9) * (i - r);
                    (0, o.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            height: i,
                            width: t * n.length + s * (n.length - 1) + r
                        }
                    });
                } else {
                    let i = (9 / 16) * (t - r);
                    (0, o.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: t,
                            height: i * n.length + s * (n.length - 1) + r
                        }
                    });
                }
            }, [n.length]),
            r.useEffect(() => {
                if (a.current.participants <= 1) return;
                let { id: e, width: t, height: n, sizeOffset: r, padding: l, participants: s } = a.current;
                if (i === p.C5.HORIZONTAL) {
                    let n = t - r;
                    (0, o.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: n * s + l * (s - 1) + r,
                            height: (9 / 16) * n + r
                        }
                    });
                } else {
                    let t = n - r;
                    (0, o.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: (16 / 9) * t + r,
                            height: t * s + l * (s - 1) + r
                        }
                    });
                }
            }, [i]),
            r.useEffect(
                () => () => {
                    (0, o.nv)({
                        widgetId: t,
                        size: {
                            fixed: !0,
                            width: 256,
                            height: 144
                        }
                    });
                },
                [t]
            );
    })({
        id: n,
        streamParticipants: z,
        layout: U,
        widgetLayoutSpecs: F
    }),
    D && I)
        ? null
        : (0, i.jsx)('div', {
              className: x.goLiveGridContainer,
              style: { opacity: E },
              ref: A,
              children: (0, i.jsx)(v.Z, {
                  widgetId: n,
                  tileWidth: W,
                  locked: I,
                  layout: U,
                  streamParticipants: z,
                  participantsVersion: P,
                  pinned: w
              })
          });
}
