n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120),
    n(653041);
var l = n(200651),
    r = n(192379),
    s = n(990547),
    i = n(442837),
    o = n(100527),
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
    m = n(409673),
    E = n(710111),
    T = n(6609);
function I(e) {
    let { guildId: t, channel: n, width: I, height: v, keepOpen: O, interactive: y = !0, analyticsSource: j, onClose: _ } = e,
        S = (function (e) {
            let [t, n] = (0, i.Wu)([g.Z], () => [g.Z.getSounds(), g.Z.getFavorites()]);
            return r.useMemo(() => {
                let l = [],
                    r = [...e, E.X8],
                    s = (e, r) => {
                        var s, i;
                        for (let o of null !== (i = null === (s = t.get(e)) || void 0 === s ? void 0 : s.sort((e, t) => h.default.compare(e.soundId, t.soundId))) && void 0 !== i ? i : []) {
                            let e = n.has(o.soundId);
                            ((e && r) || (!e && !r)) && o.available && l.push(o);
                        }
                    };
                return r.forEach((e) => s(e, !0)), r.forEach((e) => s(e, !1)), l;
            }, [t, n, e]);
        })((0, f.h)(n, !0)),
        b = (0, C.j)(),
        R = r.useRef(null),
        [A, Z] = r.useState(void 0),
        P = (0, i.e7)([d.Z], () => d.Z.getMediaSessionId()),
        { analyticsLocations: k } = (0, a.ZP)(o.Z.SOUNDBOARD_WHEEL),
        D = r.useCallback(
            (e) => {
                (0, N.GN)(e, n.id, k), _();
            },
            [k, n.id, _]
        );
    r.useEffect(() => {
        x.w(), u.DZ.loadIfNecessary();
    }, []),
        r.useEffect(() => {
            0 === S.length && 0 === b.length && _();
        }, [S.length, b, _]),
        r.useEffect(
            () => () => {
                let e = R.current;
                !O && null != e && D(e);
            },
            [O, D]
        ),
        (0, c.Z)(
            {
                type: s.ImpressionTypes.POPOUT,
                name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                properties: {
                    source: j,
                    guild_id: t,
                    media_session_id: P
                }
            },
            { disableTrack: !y }
        );
    let B = r.useCallback((e) => {
            (R.current = e), Z(null == e ? void 0 : e.soundId);
        }, []),
        w = r.useCallback(
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
        M = r.useCallback(
            (e) => {
                if (null == e) return;
                let t = S[e];
                if (null != t) D(t);
            },
            [S, D]
        ),
        L = r.useMemo(
            () =>
                S.map((e) =>
                    (0, l.jsx)(
                        m.ZP,
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
                  wheelWidth: I,
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
