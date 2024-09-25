var r,
    i = n(47120);
var a = n(735250),
    o = n(470079),
    s = n(120356),
    l = n.n(s),
    u = n(91192),
    c = n(924826),
    d = n(536895),
    _ = n(468194),
    E = n(477690),
    f = n(481060),
    h = n(100527),
    p = n(906732),
    m = n(570220),
    I = n(686546),
    T = n(28546),
    g = n(285651),
    S = n(926491),
    A = n(373228),
    v = n(378233),
    N = n(419922),
    O = n(490095),
    R = n(652136),
    C = n(695346),
    y = n(626135),
    b = n(280930),
    L = n(606301),
    D = n(981631),
    M = n(689938),
    P = n(238268);
let U = 4,
    w = (0, _.Mg)(E.Z.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
    x = (0, _.Mg)(E.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
    G = 2 * x + (0, _.Mg)(E.Z.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN) + 2 * w,
    k = () => Promise.resolve();
function B(e) {
    let { isFocused: t, isHidden: n, sendability: r, listIndex: i, sticker: o, onMouseOver: s, onSelectSticker: c } = e,
        { tabIndex: d, ..._ } = (0, u.JA)(''.concat(i));
    return (0, a.jsxs)(f.Clickable, {
        ..._,
        tabIndex: n ? -1 : d,
        className: l()(P.suggestedExpression, { [P.suggestedExpressionFocused]: t }),
        focusProps: { enabled: !1 },
        onClick: () => c(o, r),
        onMouseOver: s,
        children: [
            (0, a.jsx)(I.ZP, {
                mask: I.ZP.Masks.STICKER_ROUNDED_RECT,
                width: x + U,
                height: x + U,
                className: P.mask,
                children: (0, a.jsx)('div', { className: P.maskBackground })
            }),
            (0, a.jsx)(N.ZP, {
                maskAsset: !0,
                size: x,
                sticker: o,
                className: P.__invalid_sticker
            }),
            r !== g.eb.SENDABLE && (0, a.jsx)(O.Z, { size: 14 })
        ]
    });
}
function F(e) {
    let { editorRef: t, hasStickerResults: n, shouldRenderSuggestions: r, focusedSuggestionType: i, setFocusedStickerListItem: a, setFocusedSuggestionType: s, setHasDismissed: l, setTextInputValue: u } = e,
        _ = o.useCallback(
            (e, t) => {
                a(t);
            },
            [a]
        ),
        E = (0, c.ZP)({
            id: 'expression-suggestions-stickers',
            isEnabled: !0,
            scrollToStart: k,
            scrollToEnd: k,
            orientation: d.hy.HORIZONTAL,
            setFocus: _,
            useVirtualFocus: !0
        });
    return (
        o.useEffect(() => {
            let e = (e) => {
                var a, o;
                if (r && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                    switch (e.key) {
                        case 'ArrowUp':
                            e.preventDefault(), null == i && n && (E.focusFirstVisibleItem(), s(0));
                            break;
                        case 'ArrowDown':
                            s(null), null === (a = t.current) || void 0 === a || a.focus();
                            break;
                        case 'Escape':
                            s(null), l(!0), u(''), null === (o = t.current) || void 0 === o || o.focus();
                    }
                    0 === i && E.containerProps.onKeyDown(e);
                }
            };
            return window.addEventListener('keydown', e, { capture: !0 }), () => window.removeEventListener('keydown', e, { capture: !0 });
        }, [E, r, i, s, n, t, l, a, u]),
        { stickersNavigator: E }
    );
}
!(function (e) {
    e[(e.STICKER = 0)] = 'STICKER';
})(r || (r = {})),
    (t.Z = o.memo(function (e) {
        var t;
        let { editorRef: n, channel: r, isEditorFocused: i, onSelectSticker: s, stickerIconVisible: c = !1, submitButtonVisible: d = !1 } = e,
            _ = o.useContext(m.ZP),
            [E, I] = o.useState(null),
            [N, O] = o.useState(!1),
            [U, w] = o.useState(null),
            x = (0, T.Iu)((e) => null != e.activeView),
            k = o.useRef(null),
            [Z, V] = o.useState(''),
            [H, Y] = o.useState(''),
            [j, W] = o.useState(!1),
            [K, z] = o.useState(!1),
            q = (0, b.Z)(Z, N, r),
            { analyticsLocations: Q } = (0, p.ZP)(h.Z.EXPRESSION_SUGGESTIONS),
            { handleTextChange: X, debouncedSetTextInputValue: $ } = (0, b.m)({
                setTextInputValue: V,
                setHasDismissed: O,
                setHasSelection: z,
                setFocusedSuggestionType: I
            });
        o.useEffect(() => {
            let e = (e) => {
                    W(e);
                },
                t = (e) => {
                    let t = '' !== e && null != e;
                    if ((z(t), t)) {
                        var r;
                        I(null), null === (r = n.current) || void 0 === r || r.focus();
                    }
                };
            return (
                _.addListener('text-changed', X),
                _.addListener('autocomplete-visibility-change', e),
                _.addListener('selection-changed', t),
                () => {
                    _.removeListener('text-changed', X), _.removeListener('autocomplete-visibility-change', e), _.removeListener('selection-changed', t);
                }
            );
        }, [X, n, _]),
            o.useLayoutEffect(() => {
                null == E && w(null);
            }, [E]);
        let [J, ee] = o.useState(!1);
        o.useLayoutEffect(() => {
            requestAnimationFrame(() => {
                let e = k.current;
                ee(i || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0);
            });
        }, [i]);
        let et = q.length > 0,
            en = J && !x && !j && !N && !K && et,
            { stickersNavigator: er } = F({
                editorRef: n,
                hasStickerResults: et,
                shouldRenderSuggestions: en,
                focusedSuggestionType: E,
                setFocusedSuggestionType: I,
                setHasDismissed: O,
                setFocusedStickerListItem: w,
                setTextInputValue: V
            }),
            ei = (e, t) => {
                if (en) {
                    if (
                        (y.default.track(D.rMx.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                            sticker_id: e.id,
                            suggestion_trigger: H
                        }),
                        t === g.eb.SENDABLE)
                    )
                        O(!0), s(e, A.V0.EXPRESSION_SUGGESTIONS), $.cancel(), V('');
                    else if ((0, v.jl)(e)) {
                        let t = S.Z.getStickerPack(e.pack_id);
                        null != t &&
                            (0, R.Z)({
                                stickerPack: t,
                                analyticsLocations: Q
                            });
                    }
                    _.emit('sticker-suggestions-hidden');
                }
            },
            ea = o.useRef([]),
            eo = o.useRef(!1);
        o.useEffect(() => {
            en && (ea.current = q), en !== eo.current && (_.emit(en ? 'sticker-suggestions-shown' : 'sticker-suggestions-hidden'), en && ((0, L.Tk)(Z), Y(Z))), (eo.current = en);
        }, [_, en, q, Z]);
        let es = !en,
            el = en ? q : ea.current;
        return (0, a.jsx)(p.Gt, {
            value: Q,
            children: (0, a.jsxs)(f.Clickable, {
                tabIndex: es ? -1 : 0,
                'aria-hidden': es,
                className: l()(P.container, {
                    [P.hidden]: es,
                    [P.submitButtonOffset]: d,
                    [P.stickerIconOffset]: c
                }),
                innerRef: k,
                style: { minWidth: G },
                onClick: () => {
                    var e;
                    return null === (e = n.current) || void 0 === e ? void 0 : e.focus();
                },
                children: [
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(u.bG, {
                                navigator: er,
                                children: (0, a.jsx)(u.SJ, {
                                    children: (e) => {
                                        let { ref: t, tabIndex: n, ...r } = e;
                                        return (0, a.jsx)('div', {
                                            className: P.stickerResults,
                                            ref: (e) => {
                                                t.current = e;
                                            },
                                            onMouseLeave: () => {
                                                null == E && w(null);
                                            },
                                            tabIndex: es ? -1 : n,
                                            ...r,
                                            children: el.map((e, t) => {
                                                let { sticker: n, sendability: r } = e;
                                                return (0, a.jsx)(
                                                    B,
                                                    {
                                                        isFocused: U === ''.concat(t),
                                                        isHidden: es,
                                                        sendability: r,
                                                        listIndex: t,
                                                        onMouseOver: () => {
                                                            er.setFocus(''.concat(t)), w(''.concat(t));
                                                        },
                                                        onSelectSticker: ei,
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
                                className: P.bottomInformationTextContainer,
                                children: [
                                    (0, a.jsx)('div', { className: P.textDivider }),
                                    (0, a.jsxs)('div', {
                                        className: P.bottomInformationLayout,
                                        children: [
                                            (0, a.jsx)(f.Text, {
                                                className: P.descriptionText,
                                                style: { maxWidth: G },
                                                variant: 'text-sm/normal',
                                                children:
                                                    null != U
                                                        ? M.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({ stickerName: null === (t = q[+U]) || void 0 === t ? void 0 : t.sticker.name })
                                                        : M.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                                                              upHook: (e, t) =>
                                                                  (0, a.jsx)(
                                                                      f.KeyCombo,
                                                                      {
                                                                          shortcut: 'up',
                                                                          className: P.keybind
                                                                      },
                                                                      t
                                                                  )
                                                          })
                                            }),
                                            (0, a.jsx)(f.Clickable, {
                                                onClick: () => {
                                                    y.default.track(D.rMx.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                                        enabled: !1,
                                                        location: { section: D.jXE.EXPRESSION_PICKER }
                                                    }),
                                                        C.up.updateSetting(!1);
                                                },
                                                children: (0, a.jsx)(f.Tooltip, {
                                                    text: M.Z.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                                                    children: (e) =>
                                                        (0, a.jsx)(f.XSmallIcon, {
                                                            size: 'md',
                                                            color: 'currentColor',
                                                            ...e,
                                                            className: P.closeIcon
                                                        })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)('div', { className: P.containerBackground })
                ]
            })
        });
    }));
