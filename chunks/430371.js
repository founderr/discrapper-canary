n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(180081),
    o = n(481060),
    c = n(110924),
    u = n(988980),
    d = n(157813),
    h = n(314897),
    m = n(131951),
    p = n(585483),
    _ = n(807705),
    f = n(27457),
    E = n(111248),
    g = n(312703),
    C = n(796638),
    I = n(981631),
    x = n(354459),
    T = n(201614),
    v = n(97478);
let S = 16 / 9,
    N = 8 + C.cF;
function A(e) {
    var t;
    let n,
        { onSelectParticipant: a, onContextMenuParticipant: A, onFullscreenParticipant: Z, participants: M, filteredParticipants: b, popoutWindow: R, inCall: L, channel: j, selectedParticipant: P, showParticipants: O = !0, className: y, paused: D, width: k, height: U, layout: w, idle: B } = e,
        H = null != R,
        G = m.Z.getVideoComponent(),
        V = h.default.getId(),
        [F, W] = s.useState(null),
        [z, Y] = s.useState(!0),
        [K, q] = s.useState(!1),
        X = P.type === x.fO.ACTIVITY,
        Q = (0, u.Z)(P.id),
        J = !X && null != P.streamId,
        $ = U <= 2 * N + 144,
        ee = O && !$,
        et = (0, c.Z)(ee),
        en = w === I.AEg.MINIMUM || w === I.AEg.NORMAL,
        ei = !$ && (!en || X),
        es = (0, _.Z)(ei, 100),
        ea = (null !== (t = (0, c.Z)(P.id)) && void 0 !== t ? t : P.id) !== P.id,
        el = 0;
    (X || ee) && (el += 72), X && !ee && (ei ? (el += 48) : (el += 8)), ee && (el += 0.5 * N + 8);
    let er = s.useMemo(() => (X && Q ? k / (U - 2 * el) : J && null != F && F.width > 0 && F.height > 0 ? F.width / F.height : S), [J, F, X, k, U, el, Q]),
        eo = U - 2 * el,
        ec = X && Q ? k : eo * er,
        eu = Math.floor(Math.min(k, ec) / er),
        ed = U > k / er + 72 + N + 8;
    (n = ee || X ? (ee ? -16 : -8) : 40 + Math.max(0, 72 - (U - eu) / 2)),
        s.useEffect(() => {
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
                    ...r.config.stiff,
                    clamp: !0
                },
                onStart: () => q(!0),
                onChange: () => p.S.dispatch(I.CkL.REMEASURE_TARGET),
                onRest: () => {
                    q(!1), p.S.dispatch(I.CkL.REMEASURE_TARGET);
                }
            },
            'animate-always'
        ),
        em = (0, o.useSpring)(
            {
                value: ee ? 1 : 0,
                config: {
                    ...r.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        ),
        ep = (0, o.useSpring)(
            {
                value: ec,
                config: {
                    ...r.config.stiff,
                    clamp: !0
                }
            },
            (et === ee && em.value.idle && !es) || ea ? 'animate-never' : 'animate-always'
        ),
        e_ = (0, o.useSpring)(
            {
                value: n,
                config: {
                    ...r.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        ),
        ef = (0, o.useTransition)(
            P,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: {
                    ...r.config.stiff,
                    clamp: !0
                },
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        ),
        eE = s.useCallback((e) => {
            W(e), Y(!1);
        }, []),
        eg = ee || D ? [] : (0, g.n3)(M, P, V),
        { visibleParticipants: eC, participantTileWidth: eI } = (0, C.ZB)(k, b);
    return (0, i.jsxs)('div', {
        className: l()(v.root, T.flexCenter, y),
        children: [
            (0, i.jsxs)('div', {
                className: v.tileWrapper,
                style: { opacity: J && z ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: v.videoFrame,
                        style: { top: em.value.to((e) => (-e * N) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: ep.value },
                                className: v.videoWrapper,
                                children: (0, i.jsx)('div', {
                                    className: l()(T.videoSizer),
                                    style: { aspectRatio: er },
                                    children: ef((e, t, n) => {
                                        let { key: s } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  r.animated.div,
                                                  {
                                                      className: T.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, i.jsx)(f.ZP, {
                                                          focused: !0,
                                                          noBorder: ec >= k || eo >= U,
                                                          channel: j,
                                                          className: T.focusedVideo,
                                                          videoComponent: G,
                                                          paused: D,
                                                          width: k,
                                                          participant: t,
                                                          onClick: a,
                                                          onDoubleClick: Z,
                                                          onContextMenu: A,
                                                          onVideoResize: eE,
                                                          inCall: L,
                                                          inPopout: H
                                                      })
                                                  },
                                                  s
                                              )
                                            : null;
                                    })
                                })
                            }),
                            ei
                                ? (0, i.jsx)(r.animated.div, {
                                      className: l()(v.actionRow, { [v.idle]: B }),
                                      style: { bottom: e_.value },
                                      children: (0, i.jsx)(d.Z, {
                                          channelId: j.id,
                                          isParticipantsOpen: O,
                                          isVertical: !0
                                      })
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: v.participantsWrapperAnimated,
                        style: {
                            translateY: eh.value.to((e) => (e * N) / 2),
                            opacity: eh.value,
                            visibility: eh.value.to((e) => (0 === e ? 'hidden' : 'visible'))
                        },
                        children: (0, i.jsx)(C.ZP, {
                            channel: j,
                            onClick: a,
                            onContextMenu: A,
                            onDoubleClick: Z,
                            participants: eC,
                            participantTileWidth: eI,
                            selectedParticipantId: P.id,
                            inCall: L,
                            paused: D || K || !O,
                            popoutWindow: R
                        })
                    })
                ]
            }),
            eg.length > 0
                ? (0, i.jsx)(E.Z, {
                      onContextMenuParticipant: A,
                      width: k,
                      height: U,
                      channel: j,
                      participants: eg
                  })
                : null
        ]
    });
}
