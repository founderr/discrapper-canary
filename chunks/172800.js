n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(330726),
    c = n(410030),
    d = n(530972),
    f = n(906411),
    _ = n(438332),
    p = n(806966),
    h = n(434404),
    m = n(675478),
    g = n(819758),
    E = n(626135),
    v = n(392552),
    I = n(784222),
    T = n(926243),
    b = n(149203),
    S = n(981631),
    y = n(388032),
    A = n(538891);
t.Z = (e) => {
    let { emojiDescriptors: t, emojiSize: a, onSelect: N, onInspect: C, surrogateCodePoint: R, getEmojiItemProps: O, getEmojiRowProps: D, isScrolling: L, isUsingKeyboardNavigation: x, rowIndex: w, allowAnimatedEmoji: P, showEmojiFavoriteTooltip: M, channelGuildId: k, category: U, selectedItemClassName: B, messageId: G, isBurstReaction: Z, inNitroLockedSection: F, handleScrollUpOnSectionCollapse: V } = e,
        { enabled: j } = v.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        H = n(187119),
        Y = n(39874),
        W = n(853871),
        K = n(63149),
        z = n(263112),
        q = n(490567),
        Q = n(292795),
        X = n(7940),
        J = (0, c.ZP)(),
        $ = p.kJ.getState(),
        [ee, et] = i.useState($.inspectedExpressionPosition),
        [en, er] = (0, u.Z)(null, 300),
        ei = i.useRef(null);
    i.useEffect(
        () =>
            p.kJ.subscribe(
                (e) => e.inspectedExpressionPosition,
                (e) => et(e)
            ),
        []
    ),
        i.useEffect(() => {
            m.DZ.loadIfNecessary();
        }, []);
    let ea = a === b.Su.LARGE,
        es = a === b.Su.MEDIUM,
        eo = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: a, onMouseLeave: o, handleSelect: u, icon: c, ariaLabel: d, shouldShowRoundHighlight: f } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: p } = e,
                        { ref: h, tabIndex: m, onFocus: g, ...E } = null !== (n = O(p, w)) && void 0 !== n ? n : {},
                        v = ee.rowIndex === _ && ee.columnIndex === p,
                        I = () => {
                            !L.current && !x.current && C(e);
                        };
                    return (0, i.createElement)(
                        'li',
                        {
                            ...E,
                            key: t
                        },
                        (0, r.jsx)(l.FocusRing, {
                            children: (0, r.jsx)('button', {
                                'aria-label': d,
                                ref: h,
                                className: s()(A.emojiItem, {
                                    [A.emojiItemLarge]: ea,
                                    [A.emojiItemMedium]: es,
                                    [A.emojiItemSelected]: v && !f,
                                    [null != B ? B : '']: v,
                                    [A.showPulse]: en === t
                                }),
                                onFocus: null != g ? g : I,
                                onMouseOver: I,
                                onMouseEnter: a,
                                onMouseLeave: o,
                                onClick: u,
                                tabIndex: m,
                                children: c
                            })
                        })
                    );
                };
            switch (e.type) {
                case I.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let { visibleRowIndex: t, columnIndex: i } = e,
                        a = ee.rowIndex === t && ee.columnIndex === i,
                        s = e.sectionCollapsedToThreeRows ? (a ? ((0, o.wj)(J) ? q : X) : (0, o.wj)(J) ? H : Y) : a ? ((0, o.wj)(J) ? z : Q) : (0, o.wj)(J) ? W : K,
                        l = y.intl.string(e.sectionCollapsedToThreeRows ? y.t.NZI2Zm : y.t['/K2RDA']);
                    return n({
                        handleSelect: (t) => {
                            t.stopPropagation(),
                                !L.current &&
                                    !x.current &&
                                    (N(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    (0, d.D)(e.guildId),
                                    !e.sectionCollapsedToThreeRows && V(),
                                    E.default.track(S.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                        collapsed: e.sectionCollapsedToThreeRows,
                                        guild_id: e.guildId
                                    }));
                        },
                        icon: (0, r.jsx)('img', {
                            className: A.icon,
                            src: s,
                            alt: ''
                        }),
                        ariaLabel: l,
                        shouldShowRoundHighlight: !0
                    });
                }
                case I.ld.CREATE_EMOJI: {
                    let t = (0, r.jsx)(l.CirclePlusIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: A.icon,
                        colorClass: A.icon
                    });
                    return n({
                        handleSelect: (t) => {
                            t.stopPropagation(),
                                !L.current &&
                                    !x.current &&
                                    (N(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    h.Z.open(e.guildId, S.pNK.EMOJI, S.jXE.EMOJI_PICKER_POPOUT));
                        },
                        icon: t,
                        ariaLabel: y.intl.string(y.t['Z/r7IS']),
                        shouldShowRoundHighlight: !1
                    });
                }
                case I.ld.EMOJI: {
                    var a;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        s = ee.rowIndex === i && ee.columnIndex === n;
                    return (0, r.jsx)(
                        T.Z,
                        {
                            rowIndex: w,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: L,
                            isUsingKeyboardNavigation: x,
                            surrogateCodePoint: R,
                            allowAnimatedEmoji: P,
                            selectedItemClassName: B,
                            onSelect: N,
                            onInspect: C,
                            channelGuildId: k,
                            getEmojiItemProps: O,
                            isMediumSize: es,
                            isLargeSize: ea,
                            pulseItemKey: en,
                            setPulseItemKey: er,
                            showEmojiFavoriteTooltip: M,
                            messageId: G,
                            isBurstReaction: Z,
                            rowPosition: null == ei ? void 0 : null === (a = ei.current) || void 0 === a ? void 0 : a.getBoundingClientRect(),
                            inNitroLockedSection: F
                        },
                        t
                    );
                }
            }
        },
        el = (e) =>
            (0, r.jsx)('ul', {
                ...D(w),
                className: s()(A.emojiListRow, {
                    [A.emojiListRowLargeSize]: ea,
                    [A.emojiListRowMediumSize]: es
                }),
                ref: ei,
                children: e.map(eo)
            });
    if (U !== b.En.TOP_GUILD_EMOJI) return el(t);
    let eu = t.filter((e) => (!!j && e.type === I.ld.CREATE_EMOJI) || e.subCategory === b.t0.TOP_GUILD_EMOJI || (e.subCategory === b.t0.NEWLY_ADDED_EMOJI && e.emoji.type === f.B.GUILD && !_.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id))),
        ec = t.filter((e) => e.subCategory === b.t0.NEWLY_ADDED_EMOJI && e.emoji.type === f.B.GUILD && _.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === ec.length
        ? el(t)
        : (0, r.jsxs)('div', {
              className: A.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: s()(A.topEmojiContainer, { [A.noEmojis]: 0 === eu.length }),
                      children: el(eu)
                  }),
                  (0, r.jsxs)('div', {
                      className: A.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: s()(A.newlyAddedHighlight, {
                                  [A.oneItem]: 1 === ec.length,
                                  [A.alignRight]: eu.length > 0
                              }),
                              children: el(ec)
                          }),
                          (0, r.jsxs)('div', {
                              className: s()(A.newlyAddedBadge, {
                                  [A.newlyAddedBadgeLarge]: ea,
                                  [A.newlyAddedBadgeMedium]: es,
                                  [A.alignRight]: eu.length > 0
                              }),
                              children: [
                                  (0, r.jsx)(g.Z, { foreground: A.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: y.intl.string(y.t.y2b7CA)
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
