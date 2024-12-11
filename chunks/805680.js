n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(873546),
    c = n(374470),
    d = n(442837),
    f = n(704215),
    _ = n(952265),
    p = n(481060),
    h = n(153867),
    m = n(410575),
    g = n(347469),
    E = n(40851),
    v = n(367907),
    I = n(243778),
    T = n(907040),
    b = n(455708),
    S = n(314910),
    y = n(125900),
    A = n(603074),
    N = n(453070),
    C = n(926491),
    R = n(457040),
    O = n(740492),
    D = n(585483),
    L = n(5967),
    x = n(28546),
    w = n(957825),
    P = n(981631),
    M = n(921944),
    k = n(149203),
    U = n(185923),
    B = n(611480),
    G = n(388032),
    Z = n(662689);
let F = w.Om + k.Su.MEDIUM,
    V = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: a = !1, 'aria-controls': o, ...l } = e;
        return (0, r.jsx)(p.Button, {
            role: 'tab',
            autoFocus: a,
            'aria-controls': t ? o : void 0,
            ...l,
            onClick: () => {
                v.ZP.trackWithMetadata(P.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                    tab: i,
                    badged: !1
                }),
                    (0, x.hr)(i);
            },
            'aria-current': t ? 'page' : void 0,
            className: s()(n, Z.navButton, Z.navItem, { [Z.navButtonActive]: t }),
            look: p.Button.Looks.BLANK,
            size: p.Button.Sizes.NONE
        });
    }),
    j = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.e7)([O.ZP], () => O.ZP.expressionPickerWidth),
            [s, o] = i.useState(window.innerWidth),
            [u, c] = i.useState(null != a ? a : w._j.MIN),
            f = i.useMemo(() => {
                switch (u) {
                    case w._j.MIN:
                        return w.Om;
                    case w._j.MAX:
                        return null;
                    default:
                        return u;
                }
            }, [u]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= s ? w._j.MAX : e <= w.Om ? w._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ''), h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), c(t);
                },
                [n, s]
            ),
            p = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: s,
                minDimension: w.Om,
                resizableDomNodeRef: n,
                onElementResize: _,
                orientation: r
            });
        return (
            i.useEffect(() => {
                let e = l().debounce(() => {
                    null != t.current && o(t.current.offsetWidth);
                }, 500);
                return (
                    window.addEventListener('resize', e),
                    () => {
                        window.removeEventListener('resize', e);
                    }
                );
            }, [t]),
            i.useLayoutEffect(() => {
                null != t.current && o(t.current.offsetWidth);
            }, [t]),
            {
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: i.useCallback(
                    (e) => {
                        e.stopPropagation(), null != t.current && o(t.current.offsetWidth), p(e);
                    },
                    [t, p]
                )
            }
        );
    };
t.Z = i.memo(function (e) {
    var t, n, a;
    let { positionTargetRef: o, hideGifFavorites: l, includeCreateEmojiButton: h, onSelectGIF: O, onSelectEmoji: H, onSelectSticker: Y, onSelectSound: W, channel: K, type: z, position: q, align: Q, positionLayerClassName: X, closeOnModalOuterClick: J = !1, parentModalKey: $ } = e,
        ee = i.useRef(null),
        et = i.useRef(!1),
        en = i.useRef(),
        er = i.useRef(null),
        { drawerWidth: ei, handleDrawerResizeHandleMouseDown: ea } = j({
            positionContainerRef: ee,
            drawerRef: er,
            orientation: 'left' === Q ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT
        }),
        es = (0, x.Iu)((e) => e.activeView),
        eo = (0, N.fQ)(K),
        { renderWindow: el, windowDispatch: eu } = i.useContext(E.ZP),
        ec = (0, d.e7)([C.Z], () => !C.Z.hasLoadedStickerPacks),
        ed = (0, y.V2)({ location: 'expression_picker' }),
        ef = null != $,
        e_ = (0, _.Jw)(null != $ ? $ : ''),
        ep = i.useCallback(
            (e) => {
                var t;
                if ((!ef && (0, _.$s)()) || (ef && !(e_ && J))) return;
                let { target: n } = e;
                if ((0, c.k)(n) && null != n.closest('.' + w.CT)) return;
                for (; (0, c.k)(n); ) {
                    if (n === er.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, x._Q)();
                let r = null === (t = (0, L.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && D.S.dispatchToLastSubscribed(P.CkL.TEXTAREA_FOCUS);
            },
            [J, e_, ef]
        ),
        eh = i.useCallback(() => {
            (0, x._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            es === w.X1.GIF && (0, x._Q)();
        };
        return (
            el.addEventListener('mousedown', ep),
            el.addEventListener('contextmenu', ep),
            eu.subscribe(P.CkL.POPOUT_CLOSE, eh),
            D.S.subscribe(P.CkL.CLOSE_GIF_PICKER, e),
            () => {
                el.removeEventListener('mousedown', ep), el.removeEventListener('contextmenu', ep), eu.unsubscribe(P.CkL.POPOUT_CLOSE, eh), D.S.unsubscribe(P.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [es, eh, ep, el, eu]),
        (0, p.useFocusLock)(ee);
    let [em, eg] = (0, I.US)(ed ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eE, ev] = i.useState(!1);
    i.useEffect(() => {
        es === w.X1.SOUNDBOARD && ev(!0);
    }, [es]),
        i.useEffect(
            () => () => {
                eE && eg(M.L.TAKE_ACTION);
            },
            [eE, eg]
        ),
        i.useEffect(() => {
            (0, x.ql)('');
        }, []),
        i.useEffect(() => {
            ((!ef && (0, _.$s)()) || (ef && !e_)) && (0, x._Q)();
        }, [e_, ef]),
        i.useEffect(() => {
            if (null != er.current && !et.current) {
                var e, t, n, r;
                es === w.X1.EMOJI
                    ? (null == en ? void 0 : null === (e = en.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == en || null === (t = en.current) || void 0 === t || t.onPickerOpen(), (et.current = !0))
                    : es === w.X1.STICKER
                      ? (null == en ? void 0 : null === (n = en.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !ec && (null == en || null === (r = en.current) || void 0 === r || r.onPickerOpen(), (et.current = !0))
                      : (v.ZP.trackWithMetadata(P.rMx.EXPRESSION_PICKER_OPENED, {
                            width: er.current.offsetWidth,
                            tab: es,
                            badged: !1
                        }),
                        (et.current = !0));
            }
        });
    let eI = (null === (t = z.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.tq && null != O,
        eT = (null === (n = z.stickers) || void 0 === n ? void 0 : n.allowSending) && null != Y,
        eb = !(null === (a = z.expressionPicker) || void 0 === a ? void 0 : a.onlyEmojis) && (eI || eT),
        eS = 'left' === Q ? 'right' : 'left',
        ey = null != X ? X : 'left' === Q ? Z.positionLayerDefaultAlignLeft : Z.positionLayerDefaultAlignRight;
    return (0, r.jsx)(m.Z, {
        section: P.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(S.W5, {
            className: s()(Z.positionLayer, ey),
            targetRef: o,
            position: q,
            align: Q,
            spacing: 8,
            autoInvert: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)('section', {
                    className: s()(Z.positionContainer, { [Z.positionContainerOnlyEmoji]: !eb }),
                    ref: ee,
                    role: 'dialog',
                    'aria-label': G.intl.string(G.t.Utlwvr),
                    children: t
                        ? (0, r.jsxs)('div', {
                              className: Z.drawerSizingWrapper,
                              style: {
                                  width: null == ei ? void 0 : ei,
                                  [Q]: 0
                              },
                              ref: er,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: Z.resizeHandle,
                                      onMouseDown: ea,
                                      style: { [eS]: -2 }
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: Z.contentWrapper,
                                      children: [
                                          eb
                                              ? (0, r.jsx)('nav', {
                                                    className: Z.nav,
                                                    children: (0, r.jsxs)('div', {
                                                        className: Z.navList,
                                                        role: 'tablist',
                                                        'aria-label': G.intl.string(G.t['2j4VgY']),
                                                        children: [
                                                            eI
                                                                ? (0, r.jsx)(V, {
                                                                      id: k._3,
                                                                      'aria-controls': k.vO,
                                                                      'aria-selected': es === w.X1.GIF,
                                                                      isActive: es === w.X1.GIF,
                                                                      viewType: w.X1.GIF,
                                                                      children: G.intl.string(G.t['6gUTsb'])
                                                                  })
                                                                : null,
                                                            eT
                                                                ? (0, r.jsx)(V, {
                                                                      id: B.ED,
                                                                      'aria-controls': B.nZ,
                                                                      'aria-selected': es === w.X1.STICKER,
                                                                      isActive: es === w.X1.STICKER,
                                                                      autoFocus: !eo,
                                                                      viewType: w.X1.STICKER,
                                                                      children: (0, r.jsx)('div', {
                                                                          className: Z.stickersNavItem,
                                                                          children: G.intl.string(G.t.nf1s3t)
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(V, {
                                                                id: k.td,
                                                                'aria-controls': k.cZ,
                                                                'aria-selected': es === w.X1.EMOJI,
                                                                isActive: es === w.X1.EMOJI,
                                                                viewType: w.X1.EMOJI,
                                                                children: G.intl.string(G.t.Xu3wEx)
                                                            }),
                                                            ed &&
                                                                null != W &&
                                                                (0, r.jsx)(V, {
                                                                    id: k.Hr,
                                                                    'aria-controls': k.gV,
                                                                    'aria-selected': es === w.X1.SOUNDBOARD,
                                                                    isActive: es === w.X1.SOUNDBOARD,
                                                                    viewType: w.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)('div', {
                                                                        className: Z.soundmojiLabelContainer,
                                                                        children: [G.intl.string(G.t.EHlAMT), null != em && (0, r.jsx)(p.TextBadge, { text: G.intl.string(G.t.y2b7CA) })]
                                                                    })
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          es === w.X1.STICKER && eT
                                              ? (0, r.jsx)(R.Z, {
                                                    isLoading: ec,
                                                    channel: K,
                                                    containerWidth: ei,
                                                    onSelectSticker: Y,
                                                    closePopout: eh,
                                                    ref: (e) => {
                                                        en.current = e;
                                                    }
                                                })
                                              : null,
                                          es === w.X1.GIF && eI
                                              ? (0, r.jsx)(b.Z, {
                                                    onSelectGIF: O,
                                                    hideFavorites: l,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          es === w.X1.EMOJI
                                              ? (0, r.jsx)(T.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eb ? T.v.TABS_EXPRESSION_PICKER : T.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: K,
                                                    containerWidth: ei,
                                                    includeCreateEmojiButton: h,
                                                    emojiSize: null != ei && ei < F ? k.Su.MEDIUM : k.Su.LARGE,
                                                    pickerIntention: U.Hz.CHAT,
                                                    closePopout: eh,
                                                    onSelectEmoji: H,
                                                    ref: (e) => {
                                                        en.current = e;
                                                    }
                                                })
                                              : null,
                                          es === w.X1.SOUNDBOARD
                                              ? (0, r.jsx)('div', {
                                                    className: Z.soundboardContainer,
                                                    children: (0, r.jsx)(A.Z, {
                                                        guildId: K.guild_id,
                                                        channel: K,
                                                        containerWidth: ei,
                                                        onClose: eh,
                                                        onSelect: W,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)('div', {
                                                                className: Z.soundboardHeader,
                                                                children: e
                                                            }),
                                                        inExpressionPicker: !0,
                                                        shouldValidateSelectedSound: !0
                                                    })
                                                })
                                              : null
                                      ]
                                  })
                              ]
                          })
                        : null
                });
            }
        })
    });
});
