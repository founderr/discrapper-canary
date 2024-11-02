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
    h = n(806966),
    p = n(434404),
    m = n(675478),
    g = n(819758),
    E = n(626135),
    v = n(111846),
    I = n(392552),
    S = n(784222),
    T = n(926243),
    b = n(149203),
    y = n(981631),
    A = n(388032),
    N = n(886028);
t.Z = (e) => {
    let { emojiDescriptors: t, emojiSize: a, onSelect: C, onInspect: R, surrogateCodePoint: O, getEmojiItemProps: D, getEmojiRowProps: L, isScrolling: x, isUsingKeyboardNavigation: w, rowIndex: M, allowAnimatedEmoji: P, showEmojiFavoriteTooltip: k, channelGuildId: U, category: G, selectedItemClassName: B, messageId: Z, isBurstReaction: F, inNitroLockedSection: V, handleScrollUpOnSectionCollapse: j } = e,
        { enabled: H } = I.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        { useTransparentIcons: Y } = v.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        W = Y ? n(187119) : n(137321),
        K = Y ? n(39874) : n(233892),
        z = Y ? n(853871) : n(942315),
        q = Y ? n(63149) : n(636626),
        Q = (0, c.ZP)(),
        X = h.kJ.getState(),
        [J, $] = i.useState(X.inspectedExpressionPosition),
        [ee, et] = (0, u.Z)(null, 300),
        en = i.useRef(null);
    i.useEffect(
        () =>
            h.kJ.useStore.subscribe(
                (e) => $(e),
                (e) => e.inspectedExpressionPosition
            ),
        []
    ),
        i.useEffect(() => {
            m.DZ.loadIfNecessary();
        }, []);
    let er = a === b.Su.LARGE,
        ei = a === b.Su.MEDIUM,
        ea = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: a, onMouseLeave: o, handleSelect: u, icon: c, ariaLabel: d, shouldShowRoundHighlight: f } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: h } = e,
                        { ref: p, tabIndex: m, onFocus: g, ...E } = null !== (n = D(h, M)) && void 0 !== n ? n : {},
                        v = J.rowIndex === _ && J.columnIndex === h,
                        I = () => {
                            !x.current && !w.current && R(e);
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
                                ref: p,
                                className: s()(N.emojiItem, {
                                    [N.emojiItemLarge]: er,
                                    [N.emojiItemMedium]: ei,
                                    [N.emojiItemSelected]: v && !f,
                                    [N.expandCollapseButtonSelected]: v && f,
                                    [null != B ? B : '']: v,
                                    [N.showPulse]: ee === t
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
                case S.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let t, i;
                    return (
                        e.sectionCollapsedToThreeRows
                            ? ((i = (0, r.jsx)('img', {
                                  className: N.icon,
                                  src: (0, o.wj)(Q) ? W : K,
                                  alt: ''
                              })),
                              (t = A.intl.string(A.t.NZI2Zm)))
                            : ((i = (0, r.jsx)('img', {
                                  className: N.icon,
                                  src: (0, o.wj)(Q) ? z : q,
                                  alt: ''
                              })),
                              (t = A.intl.string(A.t['/K2RDA']))),
                        n({
                            handleSelect: (t) => {
                                t.stopPropagation(),
                                    !x.current &&
                                        !w.current &&
                                        (C(e, {
                                            isFinalSelection: !0,
                                            toggleFavorite: !1
                                        }),
                                        (0, d.D)(e.guildId),
                                        !e.sectionCollapsedToThreeRows && j(),
                                        E.default.track(y.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
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
                        className: N.icon,
                        colorClass: N.icon
                    });
                    return n({
                        handleSelect: (t) => {
                            t.stopPropagation(),
                                !x.current &&
                                    !w.current &&
                                    (C(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    p.Z.open(e.guildId, y.pNK.EMOJI, y.jXE.EMOJI_PICKER_POPOUT));
                        },
                        icon: t,
                        ariaLabel: A.intl.string(A.t['Z/r7IS']),
                        shouldShowRoundHighlight: !1
                    });
                }
                case S.ld.EMOJI: {
                    var a;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        s = J.rowIndex === i && J.columnIndex === n;
                    return (0, r.jsx)(
                        T.Z,
                        {
                            rowIndex: M,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: x,
                            isUsingKeyboardNavigation: w,
                            surrogateCodePoint: O,
                            allowAnimatedEmoji: P,
                            selectedItemClassName: B,
                            onSelect: C,
                            onInspect: R,
                            channelGuildId: U,
                            getEmojiItemProps: D,
                            isMediumSize: ei,
                            isLargeSize: er,
                            pulseItemKey: ee,
                            setPulseItemKey: et,
                            showEmojiFavoriteTooltip: k,
                            messageId: Z,
                            isBurstReaction: F,
                            rowPosition: null == en ? void 0 : null === (a = en.current) || void 0 === a ? void 0 : a.getBoundingClientRect(),
                            inNitroLockedSection: V
                        },
                        t
                    );
                }
            }
        },
        es = (e) =>
            (0, r.jsx)('ul', {
                ...L(M),
                className: s()(N.emojiListRow, {
                    [N.emojiListRowLargeSize]: er,
                    [N.emojiListRowMediumSize]: ei
                }),
                ref: en,
                children: e.map(ea)
            });
    if (G !== b.En.TOP_GUILD_EMOJI) return es(t);
    let eo = t.filter((e) => (!!H && e.type === S.ld.CREATE_EMOJI) || e.subCategory === b.t0.TOP_GUILD_EMOJI || (e.subCategory === b.t0.NEWLY_ADDED_EMOJI && e.emoji.type === f.B.GUILD && !_.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id))),
        el = t.filter((e) => e.subCategory === b.t0.NEWLY_ADDED_EMOJI && e.emoji.type === f.B.GUILD && _.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === el.length
        ? es(t)
        : (0, r.jsxs)('div', {
              className: N.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: s()(N.topEmojiContainer, { [N.noEmojis]: 0 === eo.length }),
                      children: es(eo)
                  }),
                  (0, r.jsxs)('div', {
                      className: N.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: s()(N.newlyAddedHighlight, {
                                  [N.oneItem]: 1 === el.length,
                                  [N.alignRight]: eo.length > 0
                              }),
                              children: es(el)
                          }),
                          (0, r.jsxs)('div', {
                              className: s()(N.newlyAddedBadge, {
                                  [N.newlyAddedBadgeLarge]: er,
                                  [N.newlyAddedBadgeMedium]: ei,
                                  [N.alignRight]: eo.length > 0
                              }),
                              children: [
                                  (0, r.jsx)(g.Z, { foreground: N.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: A.intl.string(A.t.y2b7CA)
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
