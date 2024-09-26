var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(873546),
    d = n(374470),
    _ = n(442837),
    E = n(952265),
    f = n(481060),
    h = n(153867),
    p = n(410575),
    m = n(347469),
    I = n(40851),
    T = n(367907),
    g = n(907040),
    S = n(455708),
    A = n(314910),
    v = n(315744),
    N = n(603074),
    O = n(453070),
    R = n(926491),
    C = n(457040),
    y = n(740492),
    L = n(585483),
    b = n(5967),
    D = n(28546),
    M = n(957825),
    P = n(981631),
    U = n(149203),
    w = n(185923),
    x = n(611480),
    G = n(689938),
    k = n(226090);
let B = M.Om + U.Su.MEDIUM,
    F = a.memo(function (e) {
        let { isActive: t, className: n, viewType: r, autoFocus: a = !1, 'aria-controls': o, ...l } = e;
        return (0, i.jsx)(f.Button, {
            role: 'tab',
            autoFocus: a,
            'aria-controls': t ? o : void 0,
            ...l,
            onClick: () => {
                T.ZP.trackWithMetadata(P.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                    tab: r,
                    badged: !1
                }),
                    (0, D.hr)(r);
            },
            'aria-current': t ? 'page' : void 0,
            className: s()(n, k.navButton, k.navItem, { [k.navButtonActive]: t }),
            look: f.Button.Looks.BLANK,
            size: f.Button.Sizes.NONE
        });
    }),
    Z = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            i = (0, _.e7)([y.ZP], () => y.ZP.expressionPickerWidth),
            [o, s] = a.useState(window.innerWidth),
            [l, c] = a.useState(null != i ? i : M._j.MIN),
            d = a.useMemo(() => {
                switch (l) {
                    case M._j.MIN:
                        return M.Om;
                    case M._j.MAX:
                        return null;
                    default:
                        return l;
                }
            }, [l]),
            E = a.useCallback(
                (e) => {
                    let t = e >= o ? M._j.MAX : e <= M.Om ? M._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ''), h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }), c(t);
                },
                [n, o]
            ),
            f = (0, m.Z)({
                initialElementDimension: d,
                maxDimension: o,
                minDimension: M.Om,
                resizableDomNodeRef: n,
                onElementResize: E,
                orientation: r
            });
        return (
            a.useEffect(() => {
                let e = u().debounce(() => {
                    null != t.current && s(t.current.offsetWidth);
                }, 500);
                return (
                    window.addEventListener('resize', e),
                    () => {
                        window.removeEventListener('resize', e);
                    }
                );
            }, [t]),
            a.useLayoutEffect(() => {
                null != t.current && s(t.current.offsetWidth);
            }, [t]),
            {
                drawerWidth: d,
                handleDrawerResizeHandleMouseDown: a.useCallback(
                    (e) => {
                        e.stopPropagation(), null != t.current && s(t.current.offsetWidth), f(e);
                    },
                    [t, f]
                )
            }
        );
    };
function V(e) {
    var t, n, r;
    let { positionTargetRef: o, hideGifFavorites: l, includeCreateEmojiButton: u, onSelectGIF: h, onSelectEmoji: y, onSelectSticker: V, onSelectSound: H, channel: Y, type: j, position: W, align: K, positionLayerClassName: z, closeOnModalOuterClick: q = !1, parentModalKey: Q } = e,
        X = a.useRef(null),
        $ = a.useRef(!1),
        J = a.useRef(),
        ee = a.useRef(null),
        { drawerWidth: et, handleDrawerResizeHandleMouseDown: en } = Z({
            positionContainerRef: X,
            drawerRef: ee,
            orientation: 'left' === K ? m.y.HORIZONTAL_RIGHT : m.y.HORIZONTAL_LEFT
        }),
        er = (0, D.Iu)((e) => e.activeView),
        ei = (0, O.fQ)(Y),
        { renderWindow: ea, windowDispatch: eo } = a.useContext(I.ZP),
        es = (0, _.e7)([R.Z], () => !R.Z.hasLoadedStickerPacks),
        el = (0, v.P)('expression_picker'),
        eu = null != Q,
        ec = (0, E.Jw)(null != Q ? Q : ''),
        ed = a.useCallback(
            (e) => {
                var t;
                if ((!eu && (0, E.$s)()) || (eu && !(ec && q))) return;
                let { target: n } = e;
                if ((0, d.k)(n) && null != n.closest('.' + M.CT)) return;
                for (; (0, d.k)(n); ) {
                    if (n === ee.current || 'true' === n.getAttribute('data-menu-item') || 'true' === n.getAttribute('data-premium-tutorial-expression-picker-tooltip') || 'true' === n.getAttribute('data-premium-tutorial-persistent-coachmark-emoji-step')) return;
                    n = n.parentNode;
                }
                (0, D._Q)();
                let r = null === (t = (0, b.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
                (null == r || 'BODY' === r.tagName) && L.S.dispatchToLastSubscribed(P.CkL.TEXTAREA_FOCUS);
            },
            [q, ec, eu]
        ),
        e_ = a.useCallback(() => {
            (0, D._Q)();
        }, []);
    a.useLayoutEffect(() => {
        let e = () => {
            er === M.X1.GIF && (0, D._Q)();
        };
        return (
            ea.addEventListener('mousedown', ed),
            ea.addEventListener('contextmenu', ed),
            eo.subscribe(P.CkL.POPOUT_CLOSE, e_),
            L.S.subscribe(P.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ea.removeEventListener('mousedown', ed), ea.removeEventListener('contextmenu', ed), eo.unsubscribe(P.CkL.POPOUT_CLOSE, e_), L.S.unsubscribe(P.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [er, e_, ed, ea, eo]),
        (0, f.useFocusLock)(X),
        a.useEffect(() => {
            (0, D.ql)('');
        }, []),
        a.useEffect(() => {
            ((!eu && (0, E.$s)()) || (eu && !ec)) && (0, D._Q)();
        }, [ec, eu]),
        a.useEffect(() => {
            if (null != ee.current && !$.current) {
                var e, t, n, r;
                er === M.X1.EMOJI
                    ? (null == J ? void 0 : null === (e = J.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == J || null === (t = J.current) || void 0 === t || t.onPickerOpen(), ($.current = !0))
                    : er === M.X1.STICKER
                      ? (null == J ? void 0 : null === (n = J.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !es && (null == J || null === (r = J.current) || void 0 === r || r.onPickerOpen(), ($.current = !0))
                      : (T.ZP.trackWithMetadata(P.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ee.current.offsetWidth,
                            tab: er,
                            badged: !1
                        }),
                        ($.current = !0));
            }
        });
    let eE = (null === (t = j.gifs) || void 0 === t ? void 0 : t.allowSending) && !c.tq && null != h,
        ef = (null === (n = j.stickers) || void 0 === n ? void 0 : n.allowSending) && null != V,
        eh = !(null === (r = j.expressionPicker) || void 0 === r ? void 0 : r.onlyEmojis) && (eE || ef),
        ep = 'left' === K ? 'right' : 'left',
        em = null != z ? z : 'left' === K ? k.positionLayerDefaultAlignLeft : k.positionLayerDefaultAlignRight;
    return (0, i.jsx)(p.Z, {
        section: P.jXE.EXPRESSION_PICKER,
        children: (0, i.jsx)(A.W5, {
            className: s()(k.positionLayer, em),
            targetRef: o,
            position: W,
            align: K,
            spacing: 8,
            autoInvert: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, i.jsx)('section', {
                    className: s()(k.positionContainer, { [k.positionContainerOnlyEmoji]: !eh }),
                    ref: X,
                    role: 'dialog',
                    'aria-label': G.Z.Messages.EXPRESSION_PICKER,
                    children: t
                        ? (0, i.jsxs)('div', {
                              className: k.drawerSizingWrapper,
                              style: {
                                  width: null == et ? void 0 : et,
                                  [K]: 0
                              },
                              ref: ee,
                              children: [
                                  (0, i.jsx)('div', {
                                      className: k.resizeHandle,
                                      onMouseDown: en,
                                      style: { [ep]: -2 }
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: k.contentWrapper,
                                      children: [
                                          eh
                                              ? (0, i.jsx)('nav', {
                                                    className: k.nav,
                                                    children: (0, i.jsxs)('div', {
                                                        className: k.navList,
                                                        role: 'tablist',
                                                        'aria-label': G.Z.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                                                        children: [
                                                            eE
                                                                ? (0, i.jsx)(F, {
                                                                      id: U._3,
                                                                      'aria-controls': U.vO,
                                                                      'aria-selected': er === M.X1.GIF,
                                                                      isActive: er === M.X1.GIF,
                                                                      viewType: M.X1.GIF,
                                                                      children: G.Z.Messages.EXPRESSION_PICKER_GIF
                                                                  })
                                                                : null,
                                                            ef
                                                                ? (0, i.jsx)(F, {
                                                                      id: x.ED,
                                                                      'aria-controls': x.nZ,
                                                                      'aria-selected': er === M.X1.STICKER,
                                                                      isActive: er === M.X1.STICKER,
                                                                      autoFocus: !ei,
                                                                      viewType: M.X1.STICKER,
                                                                      children: (0, i.jsx)('div', {
                                                                          className: k.stickersNavItem,
                                                                          children: G.Z.Messages.EXPRESSION_PICKER_STICKER
                                                                      })
                                                                  })
                                                                : null,
                                                            (0, i.jsx)(F, {
                                                                id: U.td,
                                                                'aria-controls': U.cZ,
                                                                'aria-selected': er === M.X1.EMOJI,
                                                                isActive: er === M.X1.EMOJI,
                                                                viewType: M.X1.EMOJI,
                                                                children: G.Z.Messages.EXPRESSION_PICKER_EMOJI
                                                            }),
                                                            el &&
                                                                null != H &&
                                                                (0, i.jsx)(F, {
                                                                    id: U.Hr,
                                                                    'aria-controls': U.gV,
                                                                    'aria-selected': er === M.X1.SOUNDBOARD,
                                                                    isActive: er === M.X1.SOUNDBOARD,
                                                                    viewType: M.X1.SOUNDBOARD,
                                                                    children: 'Sounds'
                                                                })
                                                        ]
                                                    })
                                                })
                                              : null,
                                          er === M.X1.STICKER && ef
                                              ? (0, i.jsx)(C.Z, {
                                                    isLoading: es,
                                                    channel: Y,
                                                    containerWidth: et,
                                                    onSelectSticker: V,
                                                    closePopout: e_,
                                                    ref: (e) => {
                                                        J.current = e;
                                                    }
                                                })
                                              : null,
                                          er === M.X1.GIF && eE
                                              ? (0, i.jsx)(S.Z, {
                                                    onSelectGIF: h,
                                                    hideFavorites: l,
                                                    persistSearch: !0
                                                })
                                              : null,
                                          er === M.X1.EMOJI
                                              ? (0, i.jsx)(g.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eh ? g.v.TABS_EXPRESSION_PICKER : g.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: Y,
                                                    containerWidth: et,
                                                    includeCreateEmojiButton: u,
                                                    emojiSize: null != et && et < B ? U.Su.MEDIUM : U.Su.LARGE,
                                                    pickerIntention: w.Hz.CHAT,
                                                    closePopout: e_,
                                                    onSelectEmoji: y,
                                                    ref: (e) => {
                                                        J.current = e;
                                                    }
                                                })
                                              : null,
                                          er === M.X1.SOUNDBOARD
                                              ? (0, i.jsx)('div', {
                                                    className: k.soundboardContainer,
                                                    children: (0, i.jsx)(N.Z, {
                                                        guildId: Y.guild_id,
                                                        channel: Y,
                                                        containerWidth: et,
                                                        onClose: e_,
                                                        onSelect: H,
                                                        analyticsSource: 'expression-picker',
                                                        renderHeader: (e) =>
                                                            (0, i.jsx)('div', {
                                                                className: k.soundboardHeader,
                                                                children: e
                                                            }),
                                                        inExpressionPicker: !0
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
}
t.Z = a.memo(V);
