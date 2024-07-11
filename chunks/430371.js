n.d(t, {
    Z: function () {
        return S;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(338545), o = n(110924), c = n(988980), d = n(157813), u = n(314897), h = n(131951), p = n(585483), m = n(807705), _ = n(27457), f = n(111248), E = n(312703), C = n(796638), g = n(981631), I = n(354459), x = n(524465), T = n(456515);
let N = 16 / 9, v = 8 + C.cF;
function S(e) {
    let t, {
            onSelectParticipant: n,
            onContextMenuParticipant: s,
            onFullscreenParticipant: S,
            participants: Z,
            filteredParticipants: A,
            popoutWindow: M,
            inCall: b,
            channel: R,
            selectedParticipant: j,
            showParticipants: L = !0,
            className: P,
            paused: O,
            width: y,
            height: D,
            layout: k,
            idle: U
        } = e, w = null != M, B = h.Z.getVideoComponent(), H = u.default.getId(), [G, V] = a.useState(null), [F, W] = a.useState(!0), [z, Y] = a.useState(!1), K = j.type === I.fO.ACTIVITY, q = (0, c.Z)(j.id), X = !K && null != j.streamId, Q = D <= 2 * v + 144, J = L && !Q, $ = (0, o.Z)(J), ee = k === g.AEg.MINIMUM || k === g.AEg.NORMAL, et = !Q && (!ee || K), en = (0, m.Z)(et, 100), ei = 0;
    (K || J) && (ei += 72), K && !J && (et ? ei += 48 : ei += 8), J && (ei += 0.5 * v + 8);
    let ea = a.useMemo(() => K && q ? y / (D - 2 * ei) : X && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : N, [
            X,
            G,
            K,
            y,
            D,
            ei,
            q
        ]), es = D - 2 * ei, el = K && q ? y : es * ea, er = Math.floor(Math.min(y, el) / ea), eo = D > y / ea + 72 + v + 8;
    t = J || K ? J ? -16 : -8 : 40 + Math.max(0, 72 - (D - er) / 2), a.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let ec = (0, r.useSpring)({
            value: J ? 1 : 0,
            delay: eo || !J ? 0 : 100,
            config: {
                ...r.config.stiff,
                clamp: !0
            },
            onStart: () => Y(!0),
            onChange: () => p.S.dispatch(g.CkL.REMEASURE_TARGET),
            onRest: () => {
                Y(!1), p.S.dispatch(g.CkL.REMEASURE_TARGET);
            }
        }), ed = (0, r.useSpring)({
            value: J ? 1 : 0,
            config: {
                ...r.config.stiff,
                clamp: !0
            }
        }), eu = (0, r.useSpring)({
            value: el,
            config: {
                ...r.config.stiff,
                clamp: !0
            },
            immediate: $ === J && ed.value.idle && !en
        }), eh = (0, r.useSpring)({
            value: t,
            config: {
                ...r.config.stiff,
                clamp: !0
            }
        }), ep = (0, r.useTransition)(j, {
            keys: e => null == e ? void 0 : e.id,
            config: {
                ...r.config.stiff,
                clamp: !0
            },
            initial: null,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 }
        }), em = a.useCallback(e => {
            V(e), W(!1);
        }, []), e_ = J || O ? [] : (0, E.n3)(Z, j, H), {
            visibleParticipants: ef,
            participantTileWidth: eE
        } = (0, C.ZB)(y, A);
    return (0, i.jsxs)('div', {
        className: l()(T.root, x.flexCenter, P),
        children: [
            (0, i.jsxs)('div', {
                className: T.tileWrapper,
                style: { opacity: X && F ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: T.videoFrame,
                        style: { top: ed.value.to(e => -e * v / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: eu.value },
                                className: T.videoWrapper,
                                children: (0, i.jsx)('div', {
                                    className: l()(x.videoSizer),
                                    style: { aspectRatio: ea },
                                    children: ep((e, t, a) => {
                                        let {key: l} = a;
                                        return null != t ? (0, i.jsx)(r.animated.div, {
                                            className: x.videoWrapperAnimated,
                                            style: e,
                                            children: (0, i.jsx)(_.ZP, {
                                                focused: !0,
                                                noBorder: el >= y || es >= D,
                                                channel: R,
                                                className: x.focusedVideo,
                                                videoComponent: B,
                                                paused: O,
                                                width: y,
                                                participant: t,
                                                onClick: n,
                                                onDoubleClick: S,
                                                onContextMenu: s,
                                                onVideoResize: em,
                                                inCall: b,
                                                inPopout: w
                                            })
                                        }, l) : null;
                                    })
                                })
                            }),
                            et ? (0, i.jsx)(r.animated.div, {
                                className: l()(T.actionRow, { [T.idle]: U }),
                                style: { bottom: eh.value },
                                children: (0, i.jsx)(d.Z, {
                                    channelId: R.id,
                                    isParticipantsOpen: L,
                                    isVertical: !0
                                })
                            }) : null
                        ]
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: T.participantsWrapperAnimated,
                        style: {
                            translateY: ec.value.to(e => e * v / 2),
                            opacity: ec.value,
                            visibility: ec.value.to(e => 0 === e ? 'hidden' : 'visible')
                        },
                        children: (0, i.jsx)(C.ZP, {
                            channel: R,
                            onClick: n,
                            onContextMenu: s,
                            onDoubleClick: S,
                            participants: ef,
                            participantTileWidth: eE,
                            selectedParticipantId: j.id,
                            inCall: b,
                            paused: O || z || !L,
                            popoutWindow: M
                        })
                    })
                ]
            }),
            e_.length > 0 ? (0, i.jsx)(f.Z, {
                onContextMenuParticipant: s,
                width: y,
                height: D,
                channel: R,
                participants: e_
            }) : null
        ]
    });
}
