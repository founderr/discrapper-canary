n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(100621),
    o = n(481060),
    c = n(110924),
    u = n(988980),
    d = n(157813),
    h = n(314897),
    m = n(131951),
    p = n(585483),
    f = n(807705),
    g = n(27457),
    C = n(111248),
    x = n(312703),
    v = n(796638),
    _ = n(981631),
    I = n(354459),
    E = n(396602),
    b = n(512388);
let S = 16 / 9,
    Z = 8 + v.cF;
function T(e) {
    var t;
    let n,
        { onSelectParticipant: r, onContextMenuParticipant: T, onFullscreenParticipant: N, participants: j, filteredParticipants: A, popoutWindow: y, inCall: P, channel: M, selectedParticipant: R, showParticipants: L = !0, className: k, paused: O, width: w, height: D, layout: U, idle: B } = e,
        H = null != y,
        F = m.Z.getVideoComponent(),
        G = h.default.getId(),
        [V, z] = l.useState(null),
        [W, Y] = l.useState(!0),
        [K, q] = l.useState(!1),
        X = R.type === I.fO.ACTIVITY,
        J = (0, u.Z)(R.id),
        Q = !X && null != R.streamId,
        $ = D <= 2 * Z + 144,
        ee = L && !$,
        et = (0, c.Z)(ee),
        en = U === _.AEg.MINIMUM || U === _.AEg.NORMAL,
        ei = !$ && (!en || X),
        el = (0, f.Z)(ei, 100),
        er = (null !== (t = (0, c.Z)(R.id)) && void 0 !== t ? t : R.id) !== R.id,
        es = 0;
    (X || ee) && (es += 72), X && !ee && (ei ? (es += 48) : (es += 8)), ee && (es += 0.5 * Z + 8);
    let ea = l.useMemo(() => (X && J ? w / (D - 2 * es) : Q && null != V && V.width > 0 && V.height > 0 ? V.width / V.height : S), [Q, V, X, w, D, es, J]),
        eo = D - 2 * es,
        ec = X && J ? w : eo * ea,
        eu = Math.floor(Math.min(w, ec) / ea),
        ed = D > w / ea + 72 + Z + 8;
    (n = ee || X ? (ee ? -16 : -8) : 40 + Math.max(0, 72 - (D - eu) / 2)),
        l.useEffect(() => {
            let e = setTimeout(() => {
                Y(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let eh = (0, o.useSpring)(
            {
                value: ee ? 1 : 0,
                delay: ed || !ee ? 0 : 100,
                config: {
                    ...a.config.stiff,
                    clamp: !0
                },
                onStart: () => q(!0),
                onChange: () => p.S.dispatch(_.CkL.REMEASURE_TARGET),
                onRest: () => {
                    q(!1), p.S.dispatch(_.CkL.REMEASURE_TARGET);
                }
            },
            'animate-always'
        ),
        em = (0, o.useSpring)(
            {
                value: ee ? 1 : 0,
                config: {
                    ...a.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        ),
        ep = (0, o.useSpring)(
            {
                value: ec,
                config: {
                    ...a.config.stiff,
                    clamp: !0
                }
            },
            (et === ee && em.value.idle && !el) || er ? 'animate-never' : 'animate-always'
        ),
        ef = (0, o.useSpring)(
            {
                value: n,
                config: {
                    ...a.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        ),
        eg = (0, o.useTransition)(
            R,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: {
                    ...a.config.stiff,
                    clamp: !0
                },
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        ),
        eC = l.useCallback((e) => {
            z(e), Y(!1);
        }, []),
        ex = ee || O ? [] : (0, x.n3)(j, R, G),
        { visibleParticipants: ev, participantTileWidth: e_ } = (0, v.ZB)(w, A);
    return (0, i.jsxs)('div', {
        className: s()(b.root, E.flexCenter, k),
        children: [
            (0, i.jsxs)('div', {
                className: b.tileWrapper,
                style: { opacity: Q && W ? 0 : 1 },
                children: [
                    (0, i.jsxs)(a.animated.div, {
                        className: b.videoFrame,
                        style: { top: em.value.to((e) => (-e * Z) / 2) },
                        children: [
                            (0, i.jsx)(a.animated.div, {
                                style: { width: ep.value },
                                className: b.videoWrapper,
                                children: (0, i.jsx)('div', {
                                    className: s()(E.videoSizer),
                                    style: { aspectRatio: ea },
                                    children: eg((e, t, n) => {
                                        let { key: l } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  a.animated.div,
                                                  {
                                                      className: E.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, i.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: ec >= w || eo >= D,
                                                          channel: M,
                                                          className: E.focusedVideo,
                                                          videoComponent: F,
                                                          paused: O,
                                                          width: w,
                                                          participant: t,
                                                          onClick: r,
                                                          onDoubleClick: N,
                                                          onContextMenu: T,
                                                          onVideoResize: eC,
                                                          inCall: P,
                                                          inPopout: H
                                                      })
                                                  },
                                                  l
                                              )
                                            : null;
                                    })
                                })
                            }),
                            ei
                                ? (0, i.jsx)(a.animated.div, {
                                      className: s()(b.actionRow, { [b.idle]: B }),
                                      style: { bottom: ef.value },
                                      children: (0, i.jsx)(d.Z, {
                                          channelId: M.id,
                                          isParticipantsOpen: L,
                                          isVertical: !0
                                      })
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(a.animated.div, {
                        className: b.participantsWrapperAnimated,
                        style: {
                            translateY: eh.value.to((e) => (e * Z) / 2),
                            opacity: eh.value,
                            visibility: eh.value.to((e) => (0 === e ? 'hidden' : 'visible'))
                        },
                        children: (0, i.jsx)(v.ZP, {
                            channel: M,
                            onClick: r,
                            onContextMenu: T,
                            onDoubleClick: N,
                            participants: ev,
                            participantTileWidth: e_,
                            selectedParticipantId: R.id,
                            inCall: P,
                            paused: O || K || !L,
                            popoutWindow: y
                        })
                    })
                ]
            }),
            ex.length > 0
                ? (0, i.jsx)(C.Z, {
                      onContextMenuParticipant: T,
                      width: w,
                      height: D,
                      channel: M,
                      participants: ex
                  })
                : null
        ]
    });
}
