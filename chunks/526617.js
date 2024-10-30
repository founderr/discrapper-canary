n.d(t, {
    O: function () {
        return q;
    },
    Z: function () {
        return J;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(239091),
    c = n(788911),
    d = n(2052),
    _ = n(100527),
    E = n(906732),
    f = n(313201),
    h = n(880949),
    p = n(806966),
    I = n(28546),
    m = n(468954),
    T = n(53691),
    S = n(75145),
    g = n(631771),
    A = n(609218),
    N = n(695346),
    R = n(594174),
    O = n(979651),
    v = n(259580),
    C = n(626135),
    L = n(74538),
    D = n(135869),
    y = n(763296),
    b = n(697426),
    M = n(242291),
    P = n(22382),
    U = n(747071),
    w = n(421673),
    x = n(663215),
    G = n(409673),
    k = n(347072),
    B = n(835648),
    F = n(650743),
    V = n(394740),
    H = n(343747),
    Z = n(981631),
    Y = n(474936),
    j = n(689938),
    W = n(185426);
let K = [8, 0, 8, 0],
    z = 32 + S.Kn;
function q(e, t, n) {
    return (null == n && e.type === b.bg.GUILD && !t) || (e.type === b.bg.GUILD && e.guild.id !== n && !t);
}
function Q(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: i, index: a, isSectionNitroLocked: o, showNitroDivider: u } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            u &&
                (0, r.jsx)(S.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35
                }),
            (0, r.jsx)('div', {
                className: s()(W.sectionContainer, { [W.sectionContainerNitroLocked]: o }),
                children: (0, r.jsx)(l.Clickable, {
                    className: s()(W.sectionHeader, { [W.notFirstSectionHeader]: 0 !== a }),
                    onClick: i,
                    'aria-expanded': !n,
                    children: (0, r.jsxs)('div', {
                        className: W.sectionHeaderContent,
                        children: [
                            (function () {
                                switch (t.type) {
                                    case b.bg.FAVORITES:
                                        return (0, r.jsx)(l.StarIcon, {
                                            size: 'xs',
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                    case b.bg.RECENTLY_HEARD:
                                        return (0, r.jsx)(l.ClockIcon, {
                                            size: 'custom',
                                            width: 20,
                                            height: 20,
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                    case b.bg.FREQUENTLY_USED:
                                        return (0, r.jsx)(l.AnalyticsIcon, { className: W.headerIcon });
                                    case b.bg.GUILD:
                                        return (0, r.jsx)(h.Z, {
                                            guild: t.guild,
                                            height: 16,
                                            width: 16
                                        });
                                    case b.bg.DEFAULTS:
                                        return (0, r.jsx)(l.ClydeIcon, {
                                            size: 'custom',
                                            width: 28,
                                            height: 28,
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                    case b.bg.SEARCH:
                                        return (0, r.jsx)(l.MagnifyingGlassIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: W.headerIcon
                                        });
                                }
                            })(),
                            (0, r.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: W.sectionTitle,
                                children: (function () {
                                    switch (t.type) {
                                        case b.bg.FAVORITES:
                                            return j.Z.Messages.FAVORITES;
                                        case b.bg.RECENTLY_HEARD:
                                            return j.Z.Messages.RECENTLY_HEARD;
                                        case b.bg.FREQUENTLY_USED:
                                            return j.Z.Messages.FREQUENTLY_USED;
                                        case b.bg.GUILD:
                                            return t.guild.name;
                                        case b.bg.DEFAULTS:
                                            return j.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                                        case b.bg.SEARCH:
                                            return j.Z.Messages.SEARCH_RESULTS_SECTION_LABEL;
                                    }
                                })()
                            }),
                            (0, r.jsx)(v.Z, {
                                className: W.headerIcon,
                                direction: n ? v.Z.Directions.RIGHT : v.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function X() {
    return (0, r.jsx)(c.Z, { message: j.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY });
}
function $(e) {
    let { descriptors: t, soundButtonProps: n, rowIndex: a, isLastRow: o, isUsingKeyboardNavigation: l, suppressPlaySound: u, gridRowProps: c, getItemProps: d, onSelectItem: _, onItemMouseEnter: E, buttonOverlay: f, isNitroLocked: h, shouldShowUpsell: I, refreshEnabled: m } = e,
        T = p.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, r.jsx)('ul', {
        ...c,
        className: s()(W.soundRow, {
            [W.soundRowNitroLocked]: h,
            [W.lastSoundRow]: o
        }),
        children: t.map((e, t) => {
            let r = 'item-'.concat(t),
                s = l && T.rowIndex === a && T.columnIndex === t;
            switch (e.item.type) {
                case b.vB.SOUND:
                    return (0, i.createElement)(G.ZP, {
                        ...d(t),
                        ...n,
                        key: ''.concat(r, '-').concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: u,
                        focused: s,
                        onMouseEnter: () => E(t),
                        onSelectItem: () => _(e),
                        enableSecondaryActions: !0,
                        buttonOverlay: f,
                        inNitroLockedSection: h,
                        showLockForDisabledSound: I,
                        refreshEnabled: m
                    });
                case b.vB.ADD_SOUND:
                    return (0, i.createElement)(k.Z, {
                        ...d(t),
                        key: r,
                        guild: e.item.guild,
                        focused: s,
                        onSelectItem: () => _(e),
                        refreshEnabled: m
                    });
            }
        })
    });
}
function J(e) {
    let { guildId: t, channel: a, containerWidth: s, onClose: c, onSelect: h, shouldValidateSelectedSound: S = !1, suppressPlaySound: v = !1, shouldShowUpsell: G = !0, gridNotice: k, soundButtonOverlay: J, listPadding: ee, renderHeader: et, defaultSoundsOnly: en = !1, inExpressionPicker: er, refreshEnabled: ei } = e,
        { currentPreviewRef: ea } = i.useContext(D.Z),
        { analyticsLocations: es } = (0, E.ZP)(),
        { analyticsLocations: eo } = (0, E.ZP)(_.Z.PREMIUM_UPSELL),
        { location: el } = (0, d.O)(),
        eu = i.useMemo(
            () => ({
                ...el,
                section: Z.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [el]
        ),
        [ec, ed] = i.useState(null),
        e_ = (0, o.e7)([R.default], () => R.default.getCurrentUser()),
        eE = (0, L.I5)(e_, Y.p9.TIER_2),
        ef = (0, o.e7)([O.Z], () => {
            var e;
            return O.Z.getVoiceState(t, null !== (e = null == e_ ? void 0 : e_.id) && void 0 !== e ? e : Z.lds);
        }),
        eh = (null == ef ? void 0 : ef.selfDeaf) || (null == ef ? void 0 : ef.mute) || (null == ef ? void 0 : ef.suppress),
        ep = (0, I.Iu)((e) => e.searchQuery),
        eI = null != ep && '' !== ep,
        em = (0, f.Dt)(),
        { categories: eT } = (0, x.ZP)(a, void 0, en),
        [eS, eg] = i.useState([]),
        [eA, eN] = i.useState(!1),
        eR = (0, x.FS)(eT, eS, ep).filter((e) => e.items.length > 0),
        eO = eR.some((e) => !!(0, L._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        ev = !eE && G && eO,
        { enableInlineUpsell: eC, enableRoadblock: eL, enableRoadblockWithSocialProof: eD } = g.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: ev }),
        ey = ev && eC,
        eb = N.T4.useSetting(),
        eM = i.useMemo(() => new Set(eb), [eb]),
        eP = null == a,
        eU = L.ZP.canUseCustomCallSounds(e_),
        ew = i.useCallback(
            (e) => {
                eM.has(e) ? eM.delete(e) : eM.add(e), N.T4.updateSetting(Array.from(eM));
            },
            [eM]
        ),
        ex = i.useCallback(
            (e, t) => {
                if (null != h && !S) return h(e);
                let n = (0, M.Nq)(e_, e, a, !1);
                if (null != h && S && n) h(e);
                else if (!v && n) {
                    var r;
                    (0, M.GN)(e, null !== (r = null == a ? void 0 : a.id) && void 0 !== r ? r : Z.lds, t),
                        eI &&
                            C.default.track(Z.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Z.aib.SOUNDBOARD,
                                channel_id: null == a ? void 0 : a.id,
                                query: ep,
                                location_stack: t
                            });
                } else {
                    if ((0, M.Nq)(e_, e, a)) return;
                    G && ed(e);
                }
            },
            [v, e_, a, G, eI, ep, h, S]
        ),
        eG = i.useCallback(
            (e) => {
                switch (e.item.type) {
                    case b.vB.SOUND:
                        return ex(e.item.sound, es);
                    case b.vB.ADD_SOUND:
                        return c(), (0, H.Z)(e.item.guild.id);
                }
            },
            [es, ex, c]
        ),
        ek = i.useCallback(
            (e, n, i, s, o) => {
                let l = eR[i.sectionIndex],
                    u = G && q(l.categoryInfo, eE, t),
                    c = i.sectionIndex === eR.length - 1 && i.rowIndex === i.totalRowCount - 1;
                return (0, r.jsx)(
                    $,
                    {
                        descriptors: e,
                        rowIndex: i.rowIndex,
                        isLastRow: c,
                        isUsingKeyboardNavigation: i.isUsingKeyboardNavigation,
                        gridRowProps: n,
                        getItemProps: s,
                        onItemMouseEnter: o,
                        suppressPlaySound: v,
                        onSelectItem: eG,
                        soundButtonProps: {
                            channel: a,
                            interactive: eP ? eU : !eh,
                            forceSecondaryActions: eP || eC,
                            analyticsLocations: es
                        },
                        buttonOverlay: J,
                        isNitroLocked: u && ey,
                        shouldShowUpsell: G,
                        refreshEnabled: ei
                    },
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eR, G, eE, t, v, eG, a, eP, eU, eh, eC, es, J, ey, ei]
        ),
        eB = i.useCallback(
            (e, t) => {
                if (e <= 0 || !G) return !1;
                let n = eR[e],
                    r = eR[e - 1],
                    i = q(n.categoryInfo, eE, t),
                    a = q(r.categoryInfo, eE, t);
                return i && !a;
            },
            [eR, G, eE]
        ),
        eF = i.useCallback((e) => (0 === e ? 16 : eB(e, t) ? z : 32), [t, eB]),
        eV = i.useCallback(
            (e) => {
                let t = e === eR.length - 1;
                return ey && t ? 60 : 0;
            },
            [eR, ey]
        ),
        eH = i.useCallback(
            (e, n) => {
                let i = ''.concat(e.key),
                    a = G && q(e.categoryInfo, eE, t),
                    s = eB(n, t);
                return (0, r.jsx)(
                    Q,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => ew(i),
                        collapsed: eM.has(i),
                        index: n,
                        isSectionNitroLocked: a && ey,
                        showNitroDivider: s && ey
                    },
                    'header-'.concat(i)
                );
            },
            [eM, ew, t, eB, G, eE, ey]
        ),
        eZ = i.useCallback(
            (e, t) => {
                let n = t === eR.length - 1;
                return ey && n ? (0, r.jsx)('div', { className: W.sectionFooter }) : null;
            },
            [eR, ey]
        ),
        eY = i.useCallback((e) => eg((0, w.ZP)(e, eT, e_, a, es)), [a, e_, eT, es]),
        ej = i.useCallback((e) => {
            (0, u.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, r.jsx)(e, { ...t });
            });
        }, []),
        eW = i.useCallback(
            () =>
                (0, r.jsx)(l.Clickable, {
                    tabIndex: 0,
                    className: W.settingsClickArea,
                    onClick: ej,
                    'aria-label': j.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
                    children: (0, r.jsx)(l.VoiceNormalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: W.settingsIcon
                    })
                }),
            [ej]
        ),
        eK = i.useCallback(
            (e) =>
                (0, r.jsx)(B.Z, {
                    soundboardListRef: e,
                    categories: eT,
                    shouldUpsellLockedCategories: ey,
                    listPadding: ee,
                    guildId: t,
                    inExpressionPicker: er
                }),
            [eT, ey, ee, t, er]
        ),
        ez = () => {
            let e = y.Z.getSoundById('3');
            null != e && ed(e);
        },
        eq = i.useCallback(() => {
            let e = (0, L.Px)(Y.p9.TIER_2);
            return j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_POPUP_LABEL_V2.format({
                nitroTierName: e,
                onClick: ez
            });
        }, []),
        eQ = i.useCallback(
            () =>
                ey
                    ? (0, r.jsx)(T.p, {
                          showUpsell: eA,
                          text: eq(),
                          button: j.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                          buttonAnalyticsObject: { section: Z.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [eq, eA, ey]
        ),
        eX = i.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === b.vB.SOUND) {
                    var t;
                    return (0, r.jsx)(F.Z, {
                        closePicker: c,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    });
                }
                return null;
            },
            [c]
        ),
        e$ = i.useCallback(() => {
            var e;
            let t = y.Z.getSoundById('3'),
                n = new Audio((0, P.Z)('3'));
            null != ea.current && ea.current.pause(), (ea.current = n), (n.currentTime = 0), (n.volume = (0, U.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)), n.play();
        }, [ea]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != ec
                ? eL
                    ? (0, r.jsx)(A.Z, {
                          containerContext: A.p.NONE,
                          image: {
                              url: 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
                              width: 220,
                              height: 132
                          },
                          title: j.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_TITLE,
                          description: j.Z.Messages.PREMIUM_UPSELL_DESKTOP_FEATURE_SOUNDBOARD_DESCRIPTION,
                          enableSocialProof: eD,
                          analyticsLocationSection: Z.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: Y.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: {
                                  ...eu,
                                  object: Z.qAy.SOUNDBOARD_SOUND
                              },
                              location_stack: eo,
                              sku_id: L.ZP.getSkuIdForPremiumType(Y.p9.TIER_2)
                          },
                          onClose: () => ed(null),
                          onDisplay: e$
                      })
                    : (0, r.jsx)(V.Z, {
                          onClose: () => ed(null),
                          closePopout: c,
                          sound: ec,
                          channel: a
                      })
                : void 0,
            (0, r.jsx)(m.Z, {
                categories: eR,
                collapsedCategories: eM,
                containerWidth: s,
                store: p.Wq,
                onSelectItem: eG,
                onSearchExpressions: eY,
                hasSearchResults: eS.length > 0,
                defaultSearchPlaceholder: j.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                renderRow: ek,
                renderSectionHeader: eH,
                renderSectionFooter: eZ,
                renderCategoryList: eK,
                renderHeaderAccessories: eW,
                rowHeight: ei ? 80 : 48,
                sectionHeaderHeight: eF,
                sectionFooterHeight: eV,
                listPadding: K,
                itemNodeWidth: ei ? 102 : 150,
                gridNavigatorId: em,
                renderEmptySearchState: X,
                renderInspector: eX,
                gridNotice: k,
                renderHeader: et,
                renderUpsell: eQ,
                setShowUpsell: eN
            })
        ]
    });
}
