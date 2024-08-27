n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(330726),
    c = n(410030),
    d = n(255963),
    _ = n(906411),
    E = n(438332),
    f = n(806966),
    h = n(434404),
    p = n(675478),
    I = n(819758),
    m = n(626135),
    T = n(111846),
    g = n(392552),
    S = n(784222),
    A = n(926243),
    N = n(149203),
    O = n(981631),
    v = n(689938),
    R = n(269003);
t.Z = (e) => {
    let { emojiDescriptors: t, emojiSize: a, onSelect: C, onInspect: y, surrogateCodePoint: D, getEmojiItemProps: L, getEmojiRowProps: b, isScrolling: M, isUsingKeyboardNavigation: P, rowIndex: U, allowAnimatedEmoji: w, showEmojiFavoriteTooltip: x, channelGuildId: G, category: k, selectedItemClassName: B, messageId: F, isBurstReaction: V, inNitroLockedSection: H, handleScrollUpOnSectionCollapse: Z } = e,
        { enabled: Y } = g.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        { useTransparentIcons: j } = T.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        W = j ? n(187119) : n(137321),
        K = j ? n(39874) : n(233892),
        z = j ? n(853871) : n(942315),
        q = j ? n(63149) : n(636626),
        Q = (0, c.ZP)(),
        X = f.kJ.getState(),
        [$, J] = i.useState(X.inspectedExpressionPosition),
        [ee, et] = (0, u.Z)(null, 300),
        en = i.useRef(null);
    i.useEffect(
        () =>
            f.kJ.useStore.subscribe(
                (e) => J(e),
                (e) => e.inspectedExpressionPosition
            ),
        []
    ),
        i.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []);
    let er = a === N.Su.LARGE,
        ei = a === N.Su.MEDIUM,
        ea = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: a, onMouseLeave: o, handleSelect: u, icon: c, ariaLabel: d, shouldShowRoundHighlight: _ } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: E, columnIndex: f } = e,
                        { ref: h, tabIndex: p, onFocus: I, ...m } = null !== (n = L(f, U)) && void 0 !== n ? n : {},
                        T = $.rowIndex === E && $.columnIndex === f,
                        g = () => {
                            !M.current && !P.current && y(e);
                        };
                    return (0, i.createElement)(
                        'li',
                        {
                            ...m,
                            key: t
                        },
                        (0, r.jsx)(l.FocusRing, {
                            children: (0, r.jsx)('button', {
                                'aria-label': d,
                                ref: h,
                                className: s()(R.emojiItem, {
                                    [R.emojiItemLarge]: er,
                                    [R.emojiItemMedium]: ei,
                                    [R.emojiItemSelected]: T && !_,
                                    [R.expandCollapseButtonSelected]: T && _,
                                    [null != B ? B : '']: T,
                                    [R.showPulse]: ee === t
                                }),
                                onFocus: null != I ? I : g,
                                onMouseOver: g,
                                onMouseEnter: a,
                                onMouseLeave: o,
                                onClick: u,
                                tabIndex: p,
                                children: c
                            })
                        })
                    );
                };
            switch (e.type) {
                case S.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let t, i;
                    return (
                        e.sectionCollapsedToThreeRows
                            ? ((i = (0, r.jsx)('img', {
                                  className: R.icon,
                                  src: (0, o.wj)(Q) ? W : K,
                                  alt: ''
                              })),
                              (t = v.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION))
                            : ((i = (0, r.jsx)('img', {
                                  className: R.icon,
                                  src: (0, o.wj)(Q) ? z : q,
                                  alt: ''
                              })),
                              (t = v.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION)),
                        n({
                            handleSelect: (t) => {
                                t.stopPropagation(),
                                    !M.current &&
                                        !P.current &&
                                        (C(e, {
                                            isFinalSelection: !0,
                                            toggleFavorite: !1
                                        }),
                                        (0, d.D)(e.guildId),
                                        !e.sectionCollapsedToThreeRows && Z(),
                                        m.default.track(O.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                            collapsed: e.sectionCollapsedToThreeRows,
                                            guild_id: e.guildId
                                        }));
                            },
                            icon: i,
                            ariaLabel: t,
                            shouldShowRoundHighlight: !0
                        })
                    );
                }
                case S.ld.CREATE_EMOJI: {
                    let t = (0, r.jsx)(l.CirclePlusIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: R.icon,
                        colorClass: R.icon
                    });
                    return n({
                        handleSelect: (t) => {
                            t.stopPropagation(),
                                !M.current &&
                                    !P.current &&
                                    (C(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    h.Z.open(e.guildId, O.pNK.EMOJI, O.jXE.EMOJI_PICKER_POPOUT));
                        },
                        icon: t,
                        ariaLabel: v.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                        shouldShowRoundHighlight: !1
                    });
                }
                case S.ld.EMOJI: {
                    var a;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        s = $.rowIndex === i && $.columnIndex === n;
                    return (0, r.jsx)(
                        A.Z,
                        {
                            rowIndex: U,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: M,
                            isUsingKeyboardNavigation: P,
                            surrogateCodePoint: D,
                            allowAnimatedEmoji: w,
                            selectedItemClassName: B,
                            onSelect: C,
                            onInspect: y,
                            channelGuildId: G,
                            getEmojiItemProps: L,
                            isMediumSize: ei,
                            isLargeSize: er,
                            pulseItemKey: ee,
                            setPulseItemKey: et,
                            showEmojiFavoriteTooltip: x,
                            messageId: F,
                            isBurstReaction: V,
                            rowPosition: null == en ? void 0 : null === (a = en.current) || void 0 === a ? void 0 : a.getBoundingClientRect(),
                            inNitroLockedSection: H
                        },
                        t
                    );
                }
            }
        },
        es = (e) =>
            (0, r.jsx)('ul', {
                ...b(U),
                className: s()(R.emojiListRow, {
                    [R.emojiListRowLargeSize]: er,
                    [R.emojiListRowMediumSize]: ei
                }),
                ref: en,
                children: e.map(ea)
            });
    if (k !== N.En.TOP_GUILD_EMOJI) return es(t);
    let eo = t.filter((e) => (!!Y && e.type === S.ld.CREATE_EMOJI) || e.subCategory === N.t0.TOP_GUILD_EMOJI || (e.subCategory === N.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && !E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id))),
        el = t.filter((e) => e.subCategory === N.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === el.length
        ? es(t)
        : (0, r.jsxs)('div', {
              className: R.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: s()(R.topEmojiContainer, { [R.noEmojis]: 0 === eo.length }),
                      children: es(eo)
                  }),
                  (0, r.jsxs)('div', {
                      className: R.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: s()(R.newlyAddedHighlight, {
                                  [R.oneItem]: 1 === el.length,
                                  [R.alignRight]: eo.length > 0
                              }),
                              children: es(el)
                          }),
                          (0, r.jsxs)('div', {
                              className: s()(R.newlyAddedBadge, {
                                  [R.newlyAddedBadgeLarge]: er,
                                  [R.newlyAddedBadgeMedium]: ei,
                                  [R.alignRight]: eo.length > 0
                              }),
                              children: [
                                  (0, r.jsx)(I.Z, { foreground: R.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: v.Z.Messages.NEW
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
