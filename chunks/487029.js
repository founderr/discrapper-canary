n.d(t, {
    Z: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var l = n(200651),
    s = n(192379),
    r = n(990547),
    o = n(442837),
    i = n(100527),
    a = n(906732),
    c = n(213609),
    u = n(675478),
    d = n(19780),
    h = n(709054),
    x = n(208049),
    g = n(763296),
    N = n(242291),
    C = n(174470),
    f = n(549771),
    p = n(964398),
    E = n(409673),
    I = n(710111),
    T = n(6609);
function m(e) {
    let { guildId: t, channel: n, width: m, height: v, keepOpen: O, interactive: y = !0, analyticsSource: j, onClose: _ } = e,
        S = (function (e) {
            let [t, n] = (0, o.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return s.useMemo(() => {
                let l = [],
                    s = [...e, I.X8],
                    r = (e, s) => {
                        var r, o;
                        for (let i of null !== (o = null === (r = t.get(e)) || void 0 === r ? void 0 : r.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== o ? o : []) {
                            let e = n.has(i.soundId);
                            ((e && s) || (!e && !s)) && i.available && l.push(i);
                        }
                    };
                return s.forEach((e) => r(e, !0)), s.forEach((e) => r(e, !1)), l;
            }, [t, n, e]);
        })((0, f.h)(n, !0)),
        R = (0, C.j)(),
        b = s.useRef(null),
        [A, Z] = s.useState(void 0),
        P = (0, o.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: k } = (0, a.ZP)(i.Z.SOUNDBOARD_WHEEL),
        D = s.useCallback(
            (e) => {
                (0, N.GN)(e, n.id, k), _();
            },
            [k, n.id, _]
        );
    s.useEffect(() => {
        x.w(), u.DZ.loadIfNecessary();
    }, []),
        s.useEffect(() => {
            0 === S.length && 0 === R.length && _();
        }, [S.length, R, _]),
        s.useEffect(
            () => () => {
                let e = b.current;
                !O && null != e && D(e);
            },
            [O, D]
        ),
        (0, c.Z)(
            {
                type: r.ImpressionTypes.POPOUT,
                name: r.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: j,
                    guild_id: t,
                    media_session_id: P
                }
            },
            { disableTrack: !y }
        );
    let B = s.useCallback((e) => {
            (b.current = e), Z(null == e ? void 0 : e.soundId);
        }, []),
        w = s.useCallback(
            (e) => {
                if (null == e) {
                    B(null);
                    return;
                }
                let t = S[e];
                if (null != t) B(t);
            },
            [B, S]
        ),
        M = s.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                if (null != t) D(t);
            },
            [S, D]
        ),
        L = s.useMemo(
            () =>
                S.map((e) =>
                    (0, l.jsx)(
                        E.ZP,
                        {
                            interactive: y,
                            className: T.soundButton,
                            sound: e,
                            focused: A === e.soundId,
                            channel: n
                        },
                        e.soundId
                    )
                ),
            [A, n, y, S]
        );
    return 0 === S.length
        ? null
        : (0, l.jsx)(a.Gt, {
              value: k,
              children: (0, l.jsx)(p.Z, {
                  wheelWidth: m,
                  wheelHeight: v,
                  itemWidth: 96,
                  itemHeight: 52,
                  showDeadZoneIndicator: !O,
                  activeItem: A,
                  onItemSelect: w,
                  onItemAction: M,
                  interactive: y,
                  children: L
              })
          });
}
