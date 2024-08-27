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
    T = n(392552),
    g = n(784222),
    S = n(926243),
    A = n(149203),
    N = n(981631),
    O = n(689938),
    R = n(269003);
let v = n(137321),
    C = n(233892),
    y = n(942315),
    D = n(636626);
t.Z = (e) => {
    let { emojiDescriptors: t, emojiSize: n, onSelect: a, onInspect: L, surrogateCodePoint: b, getEmojiItemProps: M, getEmojiRowProps: P, isScrolling: U, isUsingKeyboardNavigation: w, rowIndex: x, allowAnimatedEmoji: G, showEmojiFavoriteTooltip: k, channelGuildId: B, category: F, selectedItemClassName: V, messageId: H, isBurstReaction: Z, inNitroLockedSection: Y, handleScrollUpOnSectionCollapse: j } = e,
        { enabled: W } = T.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
        K = (0, c.ZP)(),
        z = f.kJ.getState(),
        [q, Q] = i.useState(z.inspectedExpressionPosition),
        [X, $] = (0, u.Z)(null, 300),
        J = i.useRef(null);
    i.useEffect(
        () =>
            f.kJ.useStore.subscribe(
                (e) => Q(e),
                (e) => e.inspectedExpressionPosition
            ),
        []
    ),
        i.useEffect(() => {
            p.DZ.loadIfNecessary();
        }, []);
    let ee = n === A.Su.LARGE,
        et = n === A.Su.MEDIUM,
        en = (e) => {
            let t = ''.concat(e.rowIndex, 'c').concat(e.columnIndex),
                n = function () {
                    var n;
                    let { onMouseEnter: a, onMouseLeave: o, handleSelect: u, icon: c, ariaLabel: d } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        { visibleRowIndex: _, columnIndex: E } = e,
                        { ref: f, tabIndex: h, onFocus: p, ...I } = null !== (n = M(E, x)) && void 0 !== n ? n : {},
                        m = q.rowIndex === _ && q.columnIndex === E,
                        T = () => {
                            !U.current && !w.current && L(e);
                        };
                    return (0, i.createElement)(
                        'li',
                        {
                            ...I,
                            key: t
                        },
                        (0, r.jsx)(l.FocusRing, {
                            children: (0, r.jsx)('button', {
                                'aria-label': d,
                                ref: f,
                                className: s()(R.emojiItem, {
                                    [R.emojiItemLarge]: ee,
                                    [R.emojiItemMedium]: et,
                                    [R.emojiItemSelected]: m,
                                    [null != V ? V : '']: m,
                                    [R.showPulse]: X === t
                                }),
                                onFocus: null != p ? p : T,
                                onMouseOver: T,
                                onMouseEnter: a,
                                onMouseLeave: o,
                                onClick: u,
                                tabIndex: h,
                                children: c
                            })
                        })
                    );
                };
            switch (e.type) {
                case g.ld.EXPAND_OR_COLLAPSE_EMOJIS: {
                    let t, i;
                    return (
                        e.sectionCollapsedToThreeRows
                            ? ((i = (0, r.jsx)('img', {
                                  className: R.icon,
                                  src: (0, o.wj)(K) ? v : C,
                                  alt: ''
                              })),
                              (t = O.Z.Messages.EMOJI_PICKER_EXPAND_EMOJI_SECTION))
                            : ((i = (0, r.jsx)('img', {
                                  className: R.icon,
                                  src: (0, o.wj)(K) ? y : D,
                                  alt: ''
                              })),
                              (t = O.Z.Messages.EMOJI_PICKER_COLLAPSE_EMOJI_SECTION)),
                        n({
                            handleSelect: (t) => {
                                t.stopPropagation(),
                                    !U.current &&
                                        !w.current &&
                                        (a(e, {
                                            isFinalSelection: !0,
                                            toggleFavorite: !1
                                        }),
                                        (0, d.D)(e.guildId),
                                        !e.sectionCollapsedToThreeRows && j(),
                                        m.default.track(N.rMx.EMOJI_PICKER_THREE_ROW_COLLAPSE_TOGGLED, {
                                            collapsed: e.sectionCollapsedToThreeRows,
                                            guild_id: e.guildId
                                        }));
                            },
                            icon: i,
                            ariaLabel: t
                        })
                    );
                }
                case g.ld.CREATE_EMOJI: {
                    let t = (0, r.jsx)(l.CirclePlusIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: R.icon,
                        colorClass: R.icon
                    });
                    return n({
                        handleSelect: (t) => {
                            t.stopPropagation(),
                                !U.current &&
                                    !w.current &&
                                    (a(e, {
                                        isFinalSelection: !0,
                                        toggleFavorite: !1
                                    }),
                                    h.Z.open(e.guildId, N.pNK.EMOJI, N.jXE.EMOJI_PICKER_POPOUT));
                        },
                        icon: t,
                        ariaLabel: O.Z.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE
                    });
                }
                case g.ld.EMOJI: {
                    var u;
                    let { columnIndex: n, visibleRowIndex: i } = e,
                        s = q.rowIndex === i && q.columnIndex === n;
                    return (0, r.jsx)(
                        S.Z,
                        {
                            rowIndex: x,
                            descriptor: e,
                            emojiItemKey: t,
                            isInspected: s,
                            isScrolling: U,
                            isUsingKeyboardNavigation: w,
                            surrogateCodePoint: b,
                            allowAnimatedEmoji: G,
                            selectedItemClassName: V,
                            onSelect: a,
                            onInspect: L,
                            channelGuildId: B,
                            getEmojiItemProps: M,
                            isMediumSize: et,
                            isLargeSize: ee,
                            pulseItemKey: X,
                            setPulseItemKey: $,
                            showEmojiFavoriteTooltip: k,
                            messageId: H,
                            isBurstReaction: Z,
                            rowPosition: null == J ? void 0 : null === (u = J.current) || void 0 === u ? void 0 : u.getBoundingClientRect(),
                            inNitroLockedSection: Y
                        },
                        t
                    );
                }
            }
        },
        er = (e) =>
            (0, r.jsx)('ul', {
                ...P(x),
                className: s()(R.emojiListRow, {
                    [R.emojiListRowLargeSize]: ee,
                    [R.emojiListRowMediumSize]: et
                }),
                ref: J,
                children: e.map(en)
            });
    if (F !== A.En.TOP_GUILD_EMOJI) return er(t);
    let ei = t.filter((e) => (!!W && e.type === g.ld.CREATE_EMOJI) || e.subCategory === A.t0.TOP_GUILD_EMOJI || (e.subCategory === A.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && !E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id))),
        ea = t.filter((e) => e.subCategory === A.t0.NEWLY_ADDED_EMOJI && e.emoji.type === _.B.GUILD && E.Z.isNewerThanLastSeen(e.emoji.guildId, e.emoji.id));
    return 0 === ea.length
        ? er(t)
        : (0, r.jsxs)('div', {
              className: R.topEmojiSectionContainer,
              children: [
                  (0, r.jsx)('div', {
                      className: s()(R.topEmojiContainer, { [R.noEmojis]: 0 === ei.length }),
                      children: er(ei)
                  }),
                  (0, r.jsxs)('div', {
                      className: R.newlyAddedHighlightContainer,
                      children: [
                          (0, r.jsx)('div', {
                              className: s()(R.newlyAddedHighlight, {
                                  [R.oneItem]: 1 === ea.length,
                                  [R.alignRight]: ei.length > 0
                              }),
                              children: er(ea)
                          }),
                          (0, r.jsxs)('div', {
                              className: s()(R.newlyAddedBadge, {
                                  [R.newlyAddedBadgeLarge]: ee,
                                  [R.newlyAddedBadgeMedium]: et,
                                  [R.alignRight]: ei.length > 0
                              }),
                              children: [
                                  (0, r.jsx)(I.Z, { foreground: R.newlyAddedBadgeStar }),
                                  (0, r.jsx)(l.Text, {
                                      variant: 'text-xs/semibold',
                                      color: 'always-white',
                                      children: O.Z.Messages.NEW
                                  })
                              ]
                          })
                      ]
                  })
              ]
          });
};
