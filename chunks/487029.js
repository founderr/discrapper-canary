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
    I = n(422092);
function b(e) {
    let { guildId: t, channel: n, width: b, height: S, keepOpen: Z, interactive: N = !0, analyticsSource: E, onClose: y } = e,
        j = (function (e) {
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
        T = (0, g.j)(),
        P = l.useRef(null),
        [A, M] = l.useState(void 0),
        w = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: L } = (0, s.ZP)(o.Z.SOUNDBOARD_WHEEL),
        R = l.useCallback(
            (e) => {
                (0, m.GN)(e, n.id, L), y();
            },
            [L, n.id, y]
        );
    l.useEffect(() => {
        p.w(), u.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === j.length && 0 === T.length && y();
        }, [j.length, T, y]),
        l.useEffect(
            () => () => {
                let e = P.current;
                !Z && null != e && R(e);
            },
            [Z, R]
        ),
        (0, c.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: E,
                    guild_id: t,
                    media_session_id: w
                }
            },
            { disableTrack: !N }
        );
    let D = l.useCallback((e) => {
            (P.current = e), M(null == e ? void 0 : e.soundId);
        }, []),
        O = l.useCallback(
            (e) => {
                if (null == e) {
                    D(null);
                    return;
                }
                let t = j[e];
                if (null != t) D(t);
            },
            [D, j]
        ),
        k = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = j[e];
                if (null != t) R(t);
            },
            [j, R]
        ),
        U = l.useMemo(
            () =>
                j.map((e) =>
                    (0, i.jsx)(
                        x.ZP,
                        {
                            interactive: N,
                            className: I.soundButton,
                            sound: e,
                            focused: A === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [A, n, N, j]
        );
    return 0 === j.length
        ? null
        : (0, i.jsx)(s.Gt, {
              value: L,
              children: (0, i.jsx)(_.Z, {
                  wheelWidth: b,
                  wheelHeight: S,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !Z,
                  activeItem: A,
                  onItemSelect: O,
                  onItemAction: k,
                  interactive: N,
                  children: U
              })
          });
}
