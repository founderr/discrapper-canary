var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(780384),
    u = n(481060),
    c = n(330726),
    d = n(410030),
    _ = n(530972),
    E = n(906411),
    f = n(438332),
    h = n(806966),
    p = n(434404),
    m = n(675478),
    I = n(819758),
    T = n(626135),
    g = n(111846),
    S = n(392552),
    A = n(784222),
    v = n(926243),
    N = n(149203),
    O = n(981631),
    R = n(689938),
    C = n(886028);
let y = (e) => {
    let { emojiDescriptors: t, emojiSize: r, onSelect: o, onInspect: y, surrogateCodePoint: b, getEmojiItemProps: L, getEmojiRowProps: D, isScrolling: M, isUsingKeyboardNavigation: P, rowIndex: U, allowAnimatedEmoji: w, showEmojiFavoriteTooltip: x, channelGuildId: G, category: k, selectedItemClassName: B, messageId: F, isBurstReaction: Z, inNitroLockedSection: V, handleScrollUpOnSectionCollapse: H } = e,
        { enabled: Y } = S.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        { useTransparentIcons: j } = g.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        W = j ? n(187119) : n(137321),
        K = j ? n(39874) : n(233892),
        z = j ? n(853871) : n(942315),
        q = j ? n(63149) : n(636626),
        Q = (0, d.ZP)(),
        X = h.kJ.getState(),
        [$, J] = a.useState(X.inspectedExpressionPosition),
        [ee, et] = (0, c.Z)(null, 300),
        en = a.useRef(null);
    a.useEffect(
        () =>
            h.kJ.useStore.subscribe(
                (e) => J(e),
                (e) => e.inspectedExpressionPosition
            ),
        []
    ),
        a.useEffect(() => {
            m.DZ.loadIfNecessary();
        }, []);
    let er = r === N.Su.LARGE,
        ei = r === N.Su.MEDIUM,
        ea = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: r, onMouseLeave: o, handleSelect: l, icon: c, ariaLabel: d, shouldShowRoundHighlight: _ } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: E, columnIndex: f } = e,
                        { ref: h, tabIndex: p, onFocus: m, ...I } = null !== (n = L(f, U)) && void 0 !== n ? n : {},
                        T = $.rowIndex === E && $.columnIndex === f,
                        g = () => {
                            !M.current && !P.current && y(e);
                        };
                    return (0, a.createElement)(
                        'li',
                        {
                            ...I,
                            key: t
                        },
                        (0, i.jsx)(u.FocusRing, {
                            children: (0, i.jsx)('button', {
                                'aria-label': d,
                                ref: h,
                                className: s()(C.emojiItem, {
                                    [C.emojiItemLarge]: er,
                                    [C.emojiItemMedium]: ei,
                                    [C.emojiItemSelected]: T && !_,
                                    [C.expandCollapseButtonSelected]: T && _,
                                    [null != B ? B : '']: T,
                                    [C.showPulse]: ee === t
                                }),
                                onFocus: null != m ? m : g,
                                onMouseOver: g,
                                onMouseEnter: r,
                                onMouseLeave: o,
                                onClick: l,
                                tabIndex: p,
                                children: c
                            })
                        })
                    );
                };
            switch (e.type) {
                case A.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let t, r;
                    let a = (t) => {
                        t.stopPropagation(),
                            !M.current &&
                                !P.current &&
                                (o(e, {
                                    isFinalSelection: !0,
                                    toggleFavorite: !1
                                }),
                                (0, _.D)(e.guildId),
                                !e.sectionCollapsedToThreeRows && H(),
                                T.default.track(O.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                    collapsed: e.sectionCollapsedToThreeRows,
                                    guild_id: e.guildId
                                }));
                    };
                    return (
                        e.sectionCollapsedToThreeRows
                            ? ((r = (0, i.jsx)('img', {
                                  className: C.icon,
                                  src: (0, l.wj)(Q) ? W : K,
                                  alt: ''
                              })),
                              (t = R.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION))
                            : ((r = (0, i.jsx)('img', {
                                  className: C.icon,
                                  src: (0, l.wj)(Q) ? z : q,
                                  alt: ''
                              })),
                              (t = R.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION)),
                        n({
                            handleSelect: a,
                            icon: r,
                            ariaLabel: t,
                            shouldShowRoundHighlight: !0
                        })
                    );
                }
                case A.ld.CREATE_EMOJI: {
                    let t = (t) => {
                            t.stopPropagation(),
                                !M.current &&
                                    !P.current &&
                                    (o(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    p.Z.open(e.guildId, O.pNK.EMOJI, O.jXE.EMOJI_PICKER_POPOUT));
                        },
                        r = (0, i.jsx)(u.CirclePlusIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: C.icon,
                            colorClass: C.icon
                        });
                    return n({
                        handleSelect: t,
                        icon: r,
                        ariaLabel: R.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                        shouldShowRoundHighlight: !1
                    });
                }
                case A.ld.EMOJI: {
                    var r;
                    let { columnIndex: n, visibleRowIndex: a } = e,
                        s = $.rowIndex === a && $.columnIndex === n;
                    return (0, i.jsx)(
                        v.Z,
                        {
                            rowIndex: U,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: M,
                            isUsingKeyboardNavigation: P,
                            surrogateCodePoint: b,
                            allowAnimatedEmoji: w,
                            selectedItemClassName: B,
                            onSelect: o,
                            onInspect: y,
                            channelGuildId: G,
                            getEmojiItemProps: L,
                            isMediumSize: ei,
                            isLargeSize: er,
                            pulseItemKey: ee,
                            setPulseItemKey: et,
                            showEmojiFavoriteTooltip: x,
                            messageId: F,
                            isBurstReaction: Z,
                            rowPosition: null == en ? void 0 : null === (r = en.current) || void 0 === r ? void 0 : r.getBoundingClientRect(),
                            inNitroLockedSection: V
                        },
                        t
                    );
                }
            }
        },
        eo = (e) =>
            (0, i.jsx)('ul', {
                ...D(U),
                className: s()(C.emojiListRow, {
                    [C.emojiListRowLargeSize]: er,
                    [C.emojiListRowMediumSize]: ei
                }),
                ref: en,
                children: e.map(ea)
            });
    if (k !== N.En.TOP_GUILD_EMOJI) return eo(t);
    let es = t.filter((e) => {
            if (Y && e.type === A.ld.CREATE_EMOJI) return !0;
            let t = e;
            return t.subCategory === N.t0.TOP_GUILD_EMOJI || (t.subCategory === N.t0.NEWLY_ADDED_EMOJI && t.emoji.type === E.B.GUILD && !f.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id));
        }),
        el = t.filter((e) => {
            let t = e;
            return t.subCategory === N.t0.NEWLY_ADDED_EMOJI && t.emoji.type === E.B.GUILD && f.Z.isNewerThanLastSeen(t.emoji.guildId, t.emoji.id);
        });
    return 0 === el.length
        ? eo(t)
        : (0, i.jsxs)('div', {
              className: C.topEmojiSectionContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: s()(C.topEmojiContainer, { [C.noEmojis]: 0 === es.length }),
                      children: eo(es)
                  }),
                  (0, i.jsxs)('div', {
                      className: C.newlyAddedHighlightContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: s()(C.newlyAddedHighlight, {
                                  [C.oneItem]: 1 === el.length,
                                  [C.alignRight]: es.length > 0
                              }),
                              children: eo(el)
                          }),
                          (0, i.jsxs)('div', {
                              className: s()(C.newlyAddedBadge, {
                                  [C.newlyAddedBadgeLarge]: er,
                                  [C.newlyAddedBadgeMedium]: ei,
                                  [C.alignRight]: es.length > 0
                              }),
                              children: [
                                  (0, i.jsx)(I.Z, { foreground: C.newlyAddedBadgeStar }),
                                  (0, i.jsx)(u.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: R.Z.Messages.NEW
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
t.Z = y;
