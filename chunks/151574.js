n(47120);
var r,
    i,
    a = n(200651),
    s = n(192379),
    o = n(120356),
    l = n.n(o),
    u = n(91192),
    c = n(924826),
    d = n(536895),
    f = n(468194),
    _ = n(477690),
    h = n(481060),
    p = n(100527),
    m = n(906732),
    g = n(570220),
    E = n(686546),
    v = n(28546),
    I = n(285651),
    S = n(926491),
    b = n(373228),
    T = n(378233),
    y = n(419922),
    A = n(490095),
    N = n(652136),
    C = n(695346),
    R = n(626135),
    O = n(280930),
    D = n(606301),
    L = n(981631),
    x = n(388032),
    w = n(787040);
let M = (0, f.Mg)(_.Z.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
    P = (0, f.Mg)(_.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
    k = 2 * P + (0, f.Mg)(_.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * M,
    U = () => Promise.resolve();
function G(e) {
    let { isFocused: t, isHidden: n, sendability: r, listIndex: i, sticker: s, onMouseOver: o, onSelectSticker: c } = e,
        { tabIndex: d, ...f } = (0, u.JA)(''.concat(i));
    return (0, a.jsxs)(h.Clickable, {
        ...f,
        tabIndex: n ? -1 : d,
        className: l()(w.suggestedExpression, { [w.suggestedExpressionFocused]: t }),
        focusProps: { enabled: !1 },
        onClick: () => c(s, r),
        onMouseOver: o,
        children: [
            (0, a.jsx)(E.ZP, {
                mask: E.ZP.Masks.STICKER_ROUNDED_RECT,
                width: P + 4,
                height: P + 4,
                className: w.mask,
                children: (0, a.jsx)('div', { className: w.maskBackground })
            }),
            (0, a.jsx)(y.ZP, {
                maskAsset: !0,
                size: P,
                sticker: s,
                className: w.__invalid_sticker
            }),
            r !== I.eb.SENDABLE && (0, a.jsx)(A.Z, { size: 14 })
        ]
    });
}
(i = r || (r = {}))[(i.STICKER = 0)] = 'STICKER';
t.Z = s.memo(function (e) {
    var t;
    let { editorRef: n, channel: r, isEditorFocused: i, onSelectSticker: o, stickerIconVisible: f = !1, submitButtonVisible: _ = !1 } = e,
        E = s.useContext(g.ZP),
        [y, A] = s.useState(null),
        [M, P] = s.useState(!1),
        [B, Z] = s.useState(null),
        F = (0, v.Iu)((e) => null != e.activeView),
        V = s.useRef(null),
        [H, j] = s.useState(''),
        [Y, W] = s.useState(''),
        [K, z] = s.useState(!1),
        [q, Q] = s.useState(!1),
        X = (0, O.Z)(H, M, r),
        { analyticsLocations: J } = (0, m.ZP)(p.Z.EXPRESSION_SUGGESTIONS),
        { handleTextChange: $, debouncedSetTextInputValue: ee } = (0, O.m)({
            setTextInputValue: j,
            setHasDismissed: P,
            setHasSelection: Q,
            setFocusedSuggestionType: A
        });
    s.useEffect(() => {
        let e = (e) => {
                z(e);
            },
            t = (e) => {
                let t = '' !== e && null != e;
                if ((Q(t), t)) {
                    var r;
                    A(null), null === (r = n.current) || void 0 === r || r.focus();
                }
            };
        return (
            E.addListener('text-changed', $),
            E.addListener('autocomplete-visibility-change', e),
            E.addListener('selection-changed', t),
            () => {
                E.removeListener('text-changed', $), E.removeListener('autocomplete-visibility-change', e), E.removeListener('selection-changed', t);
            }
        );
    }, [$, n, E]),
        s.useLayoutEffect(() => {
            null == y && Z(null);
        }, [y]);
    let [et, en] = s.useState(!1);
    s.useLayoutEffect(() => {
        requestAnimationFrame(() => {
            let e = V.current;
            en(i || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0);
        });
    }, [i]);
    let er = X.length > 0,
        ei = et && !F && !K && !M && !q && er,
        { stickersNavigator: ea } = (function (e) {
            let { editorRef: t, hasStickerResults: n, shouldRenderSuggestions: r, focusedSuggestionType: i, setFocusedStickerListItem: a, setFocusedSuggestionType: o, setHasDismissed: l, setTextInputValue: u } = e,
                f = s.useCallback(
                    (e, t) => {
                        a(t);
                    },
                    [a]
                ),
                _ = (0, c.ZP)({
                    id: 'expression-suggestions-stickers',
                    isEnabled: !0,
                    scrollToStart: U,
                    scrollToEnd: U,
                    orientation: d.hy.HORIZONTAL,
                    setFocus: f,
                    useVirtualFocus: !0
                });
            return (
                s.useEffect(() => {
                    let e = (e) => {
                        var a, s;
                        if (r && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                            switch (e.key) {
                                case 'ArrowUp':
                                    e.preventDefault(), null == i && n && (_.focusFirstVisibleItem(), o(0));
                                    break;
                                case 'ArrowDown':
                                    o(null), null === (a = t.current) || void 0 === a || a.focus();
                                    break;
                                case 'Escape':
                                    o(null), l(!0), u(''), null === (s = t.current) || void 0 === s || s.focus();
                            }
                            0 === i && _.containerProps.onKeyDown(e);
                        }
                    };
                    return window.addEventListener('keydown', e, { capture: !0 }), () => window.removeEventListener('keydown', e, { capture: !0 });
                }, [_, r, i, o, n, t, l, a, u]),
                { stickersNavigator: _ }
            );
        })({
            editorRef: n,
            hasStickerResults: er,
            shouldRenderSuggestions: ei,
            focusedSuggestionType: y,
            setFocusedSuggestionType: A,
            setHasDismissed: P,
            setFocusedStickerListItem: Z,
            setTextInputValue: j
        }),
        es = (e, t) => {
            if (ei) {
                if (
                    (R.default.track(L.rMx.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                        sticker_id: e.id,
                        suggestion_trigger: Y
                    }),
                    t === I.eb.SENDABLE)
                )
                    P(!0), o(e, b.V0.EXPRESSION_SUGGESTIONS), ee.cancel(), j('');
                else if ((0, T.jl)(e)) {
                    let t = S.Z.getStickerPack(e.pack_id);
                    null != t &&
                        (0, N.Z)({
                            stickerPack: t,
                            analyticsLocations: J
                        });
                }
                E.emit('sticker-suggestions-hidden');
            }
        },
        eo = s.useRef([]),
        el = s.useRef(!1);
    s.useEffect(() => {
        ei && (eo.current = X), ei !== el.current && (E.emit(ei ? 'sticker-suggestions-shown' : 'sticker-suggestions-hidden'), ei && ((0, D.Tk)(H), W(H))), (el.current = ei);
    }, [E, ei, X, H]);
    let eu = !ei,
        ec = ei ? X : eo.current;
    return (0, a.jsx)(m.Gt, {
        value: J,
        children: (0, a.jsxs)(h.Clickable, {
            tabIndex: eu ? -1 : 0,
            'aria-hidden': eu,
            className: l()(w.container, {
                [w.hidden]: eu,
                [w.submitButtonOffset]: _,
                [w.stickerIconOffset]: f
            }),
            innerRef: V,
            style: { minWidth: k },
            onClick: () => {
                var e;
                return null === (e = n.current) || void 0 === e ? void 0 : e.focus();
            },
            children: [
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(u.bG, {
                            navigator: ea,
                            children: (0, a.jsx)(u.SJ, {
                                children: (e) => {
                                    let { ref: t, tabIndex: n, ...r } = e;
                                    return (0, a.jsx)('div', {
                                        className: w.stickerResults,
                                        ref: (e) => {
                                            t.current = e;
                                        },
                                        onMouseLeave: () => {
                                            null == y && Z(null);
                                        },
                                        tabIndex: eu ? -1 : n,
                                        ...r,
                                        children: ec.map((e, t) => {
                                            let { sticker: n, sendability: r } = e;
                                            return (0, a.jsx)(
                                                G,
                                                {
                                                    isFocused: B === ''.concat(t),
                                                    isHidden: eu,
                                                    sendability: r,
                                                    listIndex: t,
                                                    onMouseOver: () => {
                                                        ea.setFocus(''.concat(t)), Z(''.concat(t));
                                                    },
                                                    onSelectSticker: es,
                                                    sticker: n
                                                },
                                                n.id
                                            );
                                        })
                                    });
                                }
                            })
                        }),
                        (0, a.jsxs)('div', {
                            className: w.bottomInformationTextContainer,
                            children: [
                                (0, a.jsx)('div', { className: w.textDivider }),
                                (0, a.jsxs)('div', {
                                    className: w.bottomInformationLayout,
                                    children: [
                                        (0, a.jsx)(h.Text, {
                                            className: w.descriptionText,
                                            style: { maxWidth: k },
                                            variant: 'text-sm/normal',
                                            children:
                                                null != B
                                                    ? x.intl.format(x.t['5gglIi'], { stickerName: null === (t = X[+B]) || void 0 === t ? void 0 : t.sticker.name })
                                                    : x.intl.format(x.t['8DjNnJ'], {
                                                          upHook: (e, t) =>
                                                              (0, a.jsx)(
                                                                  h.KeyCombo,
                                                                  {
                                                                      shortcut: 'up',
                                                                      className: w.keybind
                                                                  },
                                                                  t
                                                              )
                                                      })
                                        }),
                                        (0, a.jsx)(h.Clickable, {
                                            onClick: () => {
                                                R.default.track(L.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                                    enabled: !1,
                                                    location: { section: L.jXE.EXPRESSION_PICKER }
                                                }),
                                                    C.up.updateSetting(!1);
                                            },
                                            children: (0, a.jsx)(h.Tooltip, {
                                                text: x.intl.string(x.t.XNMs5u),
                                                children: (e) =>
                                                    (0, a.jsx)(h.XSmallIcon, {
                                                        size: 'md',
                                                        color: 'currentColor',
                                                        ...e,
                                                        className: w.closeIcon
                                                    })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                (0, a.jsx)('div', { className: w.containerBackground })
            ]
        })
    });
});
