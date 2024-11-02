n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(990547),
    a = n(442837),
    o = n(100527),
    s = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    p = n(208049),
    f = n(763296),
    m = n(242291),
    g = n(174470),
    C = n(549771),
    _ = n(964398),
    x = n(409673),
    v = n(710111),
    I = n(601539);
function b(e) {
    let { guildId: t, channel: n, width: b, height: N, keepOpen: E, interactive: S = !0, analyticsSource: Z, onClose: y } = e,
        T = (function (e) {
            let [t, n] = (0, a.Wu)([f.Z], () => [f.Z.getSounds(), f.Z.getFavorites()]);
            return l.useMemo(() => {
                let i = [],
                    l = [...e, v.X8],
                    r = (e, l) => {
                        var r, a;
                        for (let o of null !== (a = null === (r = t.get(e)) || void 0 === r ? void 0 : r.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== a ? a : []) {
                            let e = n.has(o.soundId);
                            ((e && l) || (!e && !l)) && o.available && i.push(o);
                        }
                    };
                return l.forEach((e) => r(e, !0)), l.forEach((e) => r(e, !1)), i;
            }, [t, n, e]);
        })((0, C.h)(n, !0)),
        j = (0, g.j)(),
        A = l.useRef(null),
        [P, R] = l.useState(void 0),
        M = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: L } = (0, s.ZP)(o.Z.SOUNDBOARD_WHEEL),
        w = l.useCallback(
            (e) => {
                (0, m.GN)(e, n.id, L), y();
            },
            [L, n.id, y]
        );
    l.useEffect(() => {
        p.w(), u.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === T.length && 0 === j.length && y();
        }, [T.length, j, y]),
        l.useEffect(
            () => () => {
                let e = A.current;
                !E && null != e && w(e);
            },
            [E, w]
        ),
        (0, c.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: Z,
                    guild_id: t,
                    media_session_id: M
                }
            },
            { disableTrack: !S }
        );
    let D = l.useCallback((e) => {
            (A.current = e), R(null == e ? void 0 : e.soundId);
        }, []),
        O = l.useCallback(
            (e) => {
                if (null == e) {
                    D(null);
                    return;
                }
                let t = T[e];
                if (null != t) D(t);
            },
            [D, T]
        ),
        k = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = T[e];
                if (null != t) w(t);
            },
            [T, w]
        ),
        G = l.useMemo(
            () =>
                T.map((e) =>
                    (0, i.jsx)(
                        x.ZP,
                        {
                            interactive: S,
                            className: I.soundButton,
                            sound: e,
                            focused: P === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [P, n, S, T]
        );
    return 0 === T.length
        ? null
        : (0, i.jsx)(s.Gt, {
              value: L,
              children: (0, i.jsx)(_.Z, {
                  wheelWidth: b,
                  wheelHeight: N,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !E,
                  activeItem: P,
                  onItemSelect: O,
                  onItemAction: k,
                  interactive: S,
                  children: G
              })
          });
}
