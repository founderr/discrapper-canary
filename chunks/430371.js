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
    r = n(212433),
    o = n(481060),
    c = n(110924),
    u = n(988980),
    d = n(157813),
    h = n(314897),
    p = n(131951),
    m = n(585483),
    _ = n(807705),
    f = n(27457),
    E = n(111248),
    g = n(312703),
    C = n(796638),
    I = n(981631),
    T = n(354459),
    x = n(396602),
    S = n(512388);
let v = 16 / 9,
    N = 8 + C.cF;
function A(e) {
    var t;
    let n,
        { onSelectParticipant: a, onContextMenuParticipant: A, onFullscreenParticipant: Z, participants: M, filteredParticipants: b, popoutWindow: R, inCall: L, channel: P, selectedParticipant: j, showParticipants: O = !0, className: y, paused: D, width: U, height: k, layout: w, idle: B } = e,
        H = null != R,
        G = p.Z.getVideoComponent(),
        V = h.default.getId(),
        [F, W] = s.useState(null),
        [z, Y] = s.useState(!0),
        [K, q] = s.useState(!1),
        X = j.type === T.fO.ACTIVITY,
        J = (0, u.Z)(j.id),
        Q = !X && null != j.streamId,
        $ = k <= 2 * N + 144,
        ee = O && !$,
        et = (0, c.Z)(ee),
        en = w === I.AEg.MINIMUM || w === I.AEg.NORMAL,
        ei = !$ && (!en || X),
        es = (0, _.Z)(ei, 100),
        ea = (null !== (t = (0, c.Z)(j.id)) && void 0 !== t ? t : j.id) !== j.id,
        el = 0;
    (X || ee) && (el += 72), X && !ee && (ei ? (el += 48) : (el += 8)), ee && (el += 0.5 * N + 8);
    let er = s.useMemo(() => (X && J ? U / (k - 2 * el) : Q && null != F && F.width > 0 && F.height > 0 ? F.width / F.height : v), [Q, F, X, U, k, el, J]),
        eo = k - 2 * el,
        ec = X && J ? U : eo * er,
        eu = Math.floor(Math.min(U, ec) / er),
        ed = k > U / er + 72 + N + 8;
    (n = ee || X ? (ee ? -16 : -8) : 40 + Math.max(0, 72 - (k - eu) / 2)),
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
                onChange: () => m.S.dispatch(I.CkL.REMEASURE_TARGET),
                onRest: () => {
                    q(!1), m.S.dispatch(I.CkL.REMEASURE_TARGET);
                }
            },
            'animate-always'
        ),
        ep = (0, o.useSpring)(
            {
                value: ee ? 1 : 0,
                config: {
                    ...r.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        ),
        em = (0, o.useSpring)(
            {
                value: ec,
                config: {
                    ...r.config.stiff,
                    clamp: !0
                }
            },
            (et === ee && ep.value.idle && !es) || ea ? 'animate-never' : 'animate-always'
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
            j,
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
        eg = ee || D ? [] : (0, g.n3)(M, j, V),
        { visibleParticipants: eC, participantTileWidth: eI } = (0, C.ZB)(U, b);
    return (0, i.jsxs)('div', {
        className: l()(S.root, x.flexCenter, y),
        children: [
            (0, i.jsxs)('div', {
                className: S.tileWrapper,
                style: { opacity: Q && z ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: S.videoFrame,
                        style: { top: ep.value.to((e) => (-e * N) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: em.value },
                                className: S.videoWrapper,
                                children: (0, i.jsx)('div', {
                                    className: l()(x.videoSizer),
                                    style: { aspectRatio: er },
                                    children: ef((e, t, n) => {
                                        let { key: s } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  r.animated.div,
                                                  {
                                                      className: x.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, i.jsx)(f.ZP, {
                                                          focused: !0,
                                                          noBorder: ec >= U || eo >= k,
                                                          channel: P,
                                                          className: x.focusedVideo,
                                                          videoComponent: G,
                                                          paused: D,
                                                          width: U,
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
                                      className: l()(S.actionRow, { [S.idle]: B }),
                                      style: { bottom: e_.value },
                                      children: (0, i.jsx)(d.Z, {
                                          channelId: P.id,
                                          isParticipantsOpen: O,
                                          isVertical: !0
                                      })
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: S.participantsWrapperAnimated,
                        style: {
                            translateY: eh.value.to((e) => (e * N) / 2),
                            opacity: eh.value,
                            visibility: eh.value.to((e) => (0 === e ? 'hidden' : 'visible'))
                        },
                        children: (0, i.jsx)(C.ZP, {
                            channel: P,
                            onClick: a,
                            onContextMenu: A,
                            onDoubleClick: Z,
                            participants: eC,
                            participantTileWidth: eI,
                            selectedParticipantId: j.id,
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
                      width: U,
                      height: k,
                      channel: P,
                      participants: eg
                  })
                : null
        ]
    });
}
