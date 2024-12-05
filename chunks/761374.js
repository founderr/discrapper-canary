n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    o = n(442837),
    r = n(765250),
    s = n(393238),
    a = n(358221),
    u = n(569545),
    c = n(199902),
    d = n(314897),
    h = n(592125),
    f = n(355863),
    p = n(944486),
    m = n(350663),
    v = n(340101),
    g = n(666540);
let E = [];
function C(e, t, n, i) {
    let l = (i - 1) * m.z;
    return e === v.C5.HORIZONTAL ? Math.min(Math.max((t - l) / i, 256), Math.max((16 * n) / 9, 256)) : Math.min(Math.max(t, 256), Math.max((((n - l) / i) * 16) / 9, 256));
}
function x(e) {
    var t;
    let { id: n, size: x, locked: Z, padding: _, borderWidth: S, opacity: I, horizontal: N, pinned: b } = e,
        O = 2 * _ + 2 * S;
    let { width: y, height: j } = {
            width: 'number' == typeof (t = x).width ? t.width : 256,
            height: 'number' == typeof t.height ? t.height : 144
        },
        T = (0, o.e7)([p.Z], () => p.Z.getVoiceChannelId()),
        { width: k, height: w, ref: L } = (0, s.Z)(),
        A = (0, o.e7)(
            [f.Z],
            () => {
                var e;
                let t = f.Z.getWidget(n);
                return !!(0, v.ZL)(t) && (null === (e = t.meta.showAllStreams) || void 0 === e || e);
            },
            [n]
        ),
        R = (0, o.e7)([h.Z], () => h.Z.getChannel(T)),
        M = (0, o.e7)([d.default], () => d.default.getId()),
        { participantsVersion: z, streamParticipants: D } = (0, o.cj)(
            [c.Z, a.Z],
            () => {
                if (null == T)
                    return {
                        streamParticipants: E,
                        participantsVersion: -1
                    };
                let e = new Set(c.Z.getAllActiveStreamsForChannel(T).map((e) => (0, u.V9)(e))),
                    t = (t) => e.has((0, u.V9)(t.stream)),
                    n = a.Z.getStreamParticipants(T).filter((t) => t.user.id !== M && (!!A || e.has((0, u.V9)(t.stream))));
                return (
                    n.sort((e, n) => (t(e) && !t(n) ? -1 : !t(e) && t(n) ? 1 : e.user.username.localeCompare(n.user.username))),
                    {
                        streamParticipants: n,
                        activeStreams: e,
                        participantsVersion: a.Z.getParticipantsVersion(T)
                    }
                );
            },
            [T, M, A]
        ),
        P = D.length,
        V = null == R || 0 === P,
        { tileWidth: W, layout: U } = (function (e, t, n, i, o) {
            let r = (function (e, t, n, i) {
                    let l = C(v.C5.HORIZONTAL, e, t, n),
                        o = C(v.C5.VERTICAL, e, t, n);
                    switch (i) {
                        case v.C5.VERTICAL:
                            return o;
                        case v.C5.HORIZONTAL:
                            return l;
                    }
                    let r = ((9 * o) / 16 + m.z) * n - m.z;
                    return e > (16 * t) / 9 ? l : r <= t ? o : (9 * l) / 16 <= t ? l : o;
                })(n, i, t, o),
                s = C(v.C5.VERTICAL, n, i, t),
                a = null != o ? o : r === s ? v.C5.VERTICAL : v.C5.HORIZONTAL,
                [u, c] = l.useState(r);
            return (
                l.useEffect(() => {
                    !e && c(r);
                }, [e, r]),
                {
                    layout: a,
                    tileWidth: u
                }
            );
        })(!1, P, null != k ? k : y - O, null != w ? w : j - O, N ? v.C5.HORIZONTAL : v.C5.VERTICAL),
        F = {
            id: n,
            width: y,
            height: j,
            sizeOffset: O,
            layout: U,
            padding: _,
            participants: D.length
        };
    return (!(function (e) {
        let { id: t, streamParticipants: n, layout: i, widgetLayoutSpecs: o } = e,
            s = l.useRef(o);
        l.useEffect(() => void (s.current = o)),
            l.useEffect(() => {
                let { id: e, width: t, height: i, sizeOffset: l, layout: o, padding: a } = s.current;
                if (0 === n.length) {
                    (256 !== t || 144 !== i) &&
                        (0, r.nv)({
                            widgetId: e,
                            size: {
                                fixed: !0,
                                width: 256,
                                height: 144
                            }
                        });
                    return;
                }
                if (o === v.C5.HORIZONTAL) {
                    let t = (16 / 9) * (i - l);
                    (0, r.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            height: i,
                            width: t * n.length + a * (n.length - 1) + l
                        }
                    });
                } else {
                    let i = (9 / 16) * (t - l);
                    (0, r.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: t,
                            height: i * n.length + a * (n.length - 1) + l
                        }
                    });
                }
            }, [n.length]),
            l.useEffect(() => {
                if (s.current.participants <= 1) return;
                let { id: e, width: t, height: n, sizeOffset: l, padding: o, participants: a } = s.current;
                if (i === v.C5.HORIZONTAL) {
                    let n = t - l;
                    (0, r.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: n * a + o * (a - 1) + l,
                            height: (9 / 16) * n + l
                        }
                    });
                } else {
                    let t = n - l;
                    (0, r.nv)({
                        widgetId: e,
                        size: {
                            fixed: !0,
                            width: (16 / 9) * t + l,
                            height: t * a + o * (a - 1) + l
                        }
                    });
                }
            }, [i]),
            l.useEffect(
                () => () => {
                    (0, r.nv)({
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
        streamParticipants: D,
        layout: U,
        widgetLayoutSpecs: F
    }),
    V && Z)
        ? null
        : (0, i.jsx)('div', {
              className: g.goLiveGridContainer,
              style: { opacity: I },
              ref: L,
              children: (0, i.jsx)(m.Z, {
                  widgetId: n,
                  tileWidth: W,
                  locked: Z,
                  layout: U,
                  streamParticipants: D,
                  participantsVersion: z,
                  pinned: b
              })
          });
}
