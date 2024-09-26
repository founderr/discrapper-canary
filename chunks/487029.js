n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    l = n(470079),
    r = n(990547),
    a = n(442837),
    s = n(100527),
    o = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    p = n(208049),
    f = n(763296),
    _ = n(242291),
    m = n(174470),
    g = n(549771),
    C = n(964398),
    I = n(409673),
    E = n(710111),
    N = n(601539);
function x(e) {
    let { guildId: t, channel: n, width: x, height: S, keepOpen: v, interactive: Z = !0, analyticsSource: T, onClose: b } = e,
        A = (function (e) {
            let [t, n] = (0, a.Wu)([f.Z], () => [f.Z.getSounds(), f.Z.getFavorites()]);
            return l.useMemo(() => {
                let i = [],
                    l = [...e, E.X8],
                    r = (e, l) => {
                        var r, a;
                        for (let s of null !== (a = null === (r = t.get(e)) || void 0 === r ? void 0 : r.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== a ? a : []) {
                            let e = n.has(s.soundId);
                            ((e && l) || (!e && !l)) && s.available && i.push(s);
                        }
                    };
                return l.forEach((e) => r(e, !0)), l.forEach((e) => r(e, !1)), i;
            }, [t, n, e]);
        })((0, g.h)(n, !0)),
        M = (0, m.j)(),
        R = l.useRef(null),
        [L, y] = l.useState(void 0),
        P = (0, a.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: O } = (0, o.ZP)(s.Z.SOUNDBOARD_WHEEL),
        j = l.useCallback(
            (e) => {
                (0, _.GN)(e, n.id, O), b();
            },
            [O, n.id, b]
        );
    l.useEffect(() => {
        p.w(), u.DZ.loadIfNecessary();
    }, []),
        l.useEffect(() => {
            0 === A.length && 0 === M.length && b();
        }, [A.length, M, b]),
        l.useEffect(
            () => () => {
                let e = R.current;
                !v && null != e && j(e);
            },
            [v, j]
        ),
        (0, c.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: T,
                    guild_id: t,
                    media_session_id: P
                }
            },
            { disableTrack: !Z }
        );
    let D = l.useCallback((e) => {
            (R.current = e), y(null == e ? void 0 : e.soundId);
        }, []),
        G = l.useCallback(
            (e) => {
                if (null == e) {
                    D(null);
                    return;
                }
                let t = A[e];
                if (null != t) D(t);
            },
            [D, A]
        ),
        w = l.useCallback(
            (e) => {
                if (null == e) return;
                let t = A[e];
                if (null != t) j(t);
            },
            [A, j]
        ),
        U = l.useMemo(
            () =>
                A.map((e) =>
                    (0, i.jsx)(
                        I.ZP,
                        {
                            interactive: Z,
                            className: N.soundButton,
                            sound: e,
                            focused: L === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [L, n, Z, A]
        );
    return 0 === A.length
        ? null
        : (0, i.jsx)(o.Gt, {
              value: O,
              children: (0, i.jsx)(C.Z, {
                  wheelWidth: x,
                  wheelHeight: S,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !v,
                  activeItem: L,
                  onItemSelect: G,
                  onItemAction: w,
                  interactive: Z,
                  children: U
              })
          });
}
