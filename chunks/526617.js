n.d(t, {
    O: function () {
        return ea;
    },
    Z: function () {
        return eu;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(239091),
    d = n(788911),
    _ = n(2052),
    E = n(100527),
    f = n(906732),
    h = n(313201),
    p = n(880949),
    m = n(806966),
    I = n(28546),
    T = n(468954),
    g = n(53691),
    S = n(75145),
    A = n(631771),
    v = n(609218),
    N = n(695346),
    O = n(594174),
    R = n(979651),
    C = n(259580),
    y = n(626135),
    b = n(74538),
    L = n(135869),
    D = n(763296),
    M = n(697426),
    P = n(242291),
    U = n(22382),
    w = n(747071),
    x = n(421673),
    G = n(663215),
    k = n(409673),
    B = n(347072),
    F = n(835648),
    Z = n(650743),
    V = n(394740),
    H = n(343747),
    Y = n(981631),
    j = n(474936),
    W = n(689938),
    K = n(185426);
let z = 16,
    q = [8, 0, 8, 0],
    Q = 48,
    X = 80,
    $ = 32,
    J = 32 + S.Kn,
    ee = 16,
    et = 150,
    en = 102,
    er = 60,
    ei = '3';
function ea(e, t, n) {
    return (null == n && e.type === M.bg.GUILD && !t) || (e.type === M.bg.GUILD && e.guild.id !== n && !t);
}
function eo(e) {
    let { categoryInfo: t, collapsed: n, toggleCollapsed: r, index: a, isSectionNitroLocked: o, showNitroDivider: l } = e;
    function c() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return (0, i.jsx)(u.StarIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: K.headerIcon
                });
            case M.bg.RECENTLY_HEARD:
                return (0, i.jsx)(u.ClockIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: K.headerIcon
                });
            case M.bg.FREQUENTLY_USED:
                return (0, i.jsx)(u.AnalyticsIcon, { className: K.headerIcon });
            case M.bg.GUILD:
                return (0, i.jsx)(p.Z, {
                    guild: t.guild,
                    height: z,
                    width: z
                });
            case M.bg.DEFAULTS:
                return (0, i.jsx)(u.ClydeIcon, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: K.headerIcon
                });
            case M.bg.SEARCH:
                return (0, i.jsx)(u.MagnifyingGlassIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: K.headerIcon
                });
        }
    }
    function d() {
        switch (t.type) {
            case M.bg.FAVORITES:
                return W.Z.Messages.FAVORITES;
            case M.bg.RECENTLY_HEARD:
                return W.Z.Messages.RECENTLY_HEARD;
            case M.bg.FREQUENTLY_USED:
                return W.Z.Messages.FREQUENTLY_USED;
            case M.bg.GUILD:
                return t.guild.name;
            case M.bg.DEFAULTS:
                return W.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
            case M.bg.SEARCH:
                return W.Z.Messages.SEARCH_RESULTS_SECTION_LABEL;
        }
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l &&
                (0, i.jsx)(S.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35
                }),
            (0, i.jsx)('div', {
                className: s()(K.sectionContainer, { [K.sectionContainerNitroLocked]: o }),
                children: (0, i.jsx)(u.Clickable, {
                    className: s()(K.sectionHeader, { [K.notFirstSectionHeader]: 0 !== a }),
                    onClick: r,
                    'aria-expanded': !n,
                    children: (0, i.jsxs)('div', {
                        className: K.sectionHeaderContent,
                        children: [
                            c(),
                            (0, i.jsx)(u.Heading, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: K.sectionTitle,
                                children: d()
                            }),
                            (0, i.jsx)(C.Z, {
                                className: K.headerIcon,
                                direction: n ? C.Z.Directions.RIGHT : C.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function es() {
    return (0, i.jsx)(d.Z, { message: W.Z.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY });
}
function el(e) {
    let { descriptors: t, soundButtonProps: n, rowIndex: r, isLastRow: o, isUsingKeyboardNavigation: l, suppressPlaySound: u, gridRowProps: c, getItemProps: d, onSelectItem: _, onItemMouseEnter: E, buttonOverlay: f, isNitroLocked: h, shouldShowUpsell: p, refreshEnabled: I } = e,
        T = m.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, i.jsx)('ul', {
        ...c,
        className: s()(K.soundRow, {
            [K.soundRowNitroLocked]: h,
            [K.lastSoundRow]: o
        }),
        children: t.map((e, t) => {
            let i = 'item-'.concat(t),
                o = l && T.rowIndex === r && T.columnIndex === t;
            switch (e.item.type) {
                case M.vB.SOUND:
                    return (0, a.createElement)(k.ZP, {
                        ...d(t),
                        ...n,
                        key: ''.concat(i, '-').concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: u,
                        focused: o,
                        onMouseEnter: () => E(t),
                        onSelectItem: () => _(e),
                        enableSecondaryActions: !0,
                        buttonOverlay: f,
                        inNitroLockedSection: h,
                        showLockForDisabledSound: p,
                        refreshEnabled: I
                    });
                case M.vB.ADD_SOUND:
                    return (0, a.createElement)(B.Z, {
                        ...d(t),
                        key: i,
                        guild: e.item.guild,
                        focused: o,
                        onSelectItem: () => _(e),
                        refreshEnabled: I
                    });
            }
        })
    });
}
function eu(e) {
    let { guildId: t, channel: r, containerWidth: o, onClose: s, onSelect: d, suppressPlaySound: p = !1, shouldShowUpsell: S = !0, gridNotice: C, soundButtonOverlay: k, listPadding: B, renderHeader: z, defaultSoundsOnly: eu = !1, inExpressionPicker: ec, refreshEnabled: ed } = e,
        { currentPreviewRef: e_ } = a.useContext(L.Z),
        { analyticsLocations: eE } = (0, f.ZP)(),
        { analyticsLocations: ef } = (0, f.ZP)(E.Z.PREMIUM_UPSELL),
        { location: eh } = (0, _.O)(),
        ep = a.useMemo(
            () => ({
                ...eh,
                section: Y.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [eh]
        ),
        [em, eI] = a.useState(null),
        eT = (0, l.e7)([O.default], () => O.default.getCurrentUser()),
        eg = (0, b.I5)(eT, j.p9.TIER_2),
        eS = (0, l.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(t, null !== (e = null == eT ? void 0 : eT.id) && void 0 !== e ? e : Y.lds);
        }),
        eA = (null == eS ? void 0 : eS.selfDeaf) || (null == eS ? void 0 : eS.mute) || (null == eS ? void 0 : eS.suppress),
        ev = (0, I.Iu)((e) => e.searchQuery),
        eN = null != ev && '' !== ev,
        eO = (0, h.Dt)(),
        { categories: eR } = (0, G.ZP)(r, void 0, eu),
        [eC, ey] = a.useState([]),
        [eb, eL] = a.useState(!1),
        eD = (0, G.FS)(eR, eC, ev).filter((e) => e.items.length > 0),
        eM = eD.some((e) => !!(0, b._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eP = !eg && S && eM,
        { enableInlineUpsell: eU, enableRoadblock: ew, enableRoadblockWithSocialProof: ex } = A.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eP }),
        eG = eP && eU,
        ek = N.T4.useSetting(),
        eB = a.useMemo(() => new Set(ek), [ek]),
        eF = null == r,
        eZ = b.ZP.canUseCustomCallSounds(eT),
        eV = a.useCallback(
            (e) => {
                eB.has(e) ? eB.delete(e) : eB.add(e), N.T4.updateSetting(Array.from(eB));
            },
            [eB]
        ),
        eH = a.useCallback(
            (e, t) => {
                if (!p && (0, P.Nq)(eT, e, r, !1)) {
                    var n;
                    (0, P.GN)(e, null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : Y.lds, t),
                        eN &&
                            y.default.track(Y.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: Y.aib.SOUNDBOARD,
                                channel_id: null == r ? void 0 : r.id,
                                query: ev,
                                location_stack: t
                            });
                } else {
                    if ((0, P.Nq)(eT, e, r)) return;
                    S && eI(e);
                }
            },
            [p, eT, r, S, eN, ev]
        ),
        eY = a.useCallback(
            (e) => {
                switch (e.item.type) {
                    case M.vB.SOUND:
                        if (null != d) return d(e.item.sound);
                        return eH(e.item.sound, eE);
                    case M.vB.ADD_SOUND:
                        return s(), (0, H.Z)(e.item.guild.id);
                }
            },
            [eE, eH, s, d]
        ),
        ej = a.useCallback(
            (e, n, a, o, s) => {
                let l = eD[a.sectionIndex],
                    u = S && ea(l.categoryInfo, eg, t),
                    c = a.sectionIndex === eD.length - 1 && a.rowIndex === a.totalRowCount - 1;
                return (0, i.jsx)(
                    el,
                    {
                        descriptors: e,
                        rowIndex: a.rowIndex,
                        isLastRow: c,
                        isUsingKeyboardNavigation: a.isUsingKeyboardNavigation,
                        gridRowProps: n,
                        getItemProps: o,
                        onItemMouseEnter: s,
                        suppressPlaySound: p,
                        onSelectItem: eY,
                        soundButtonProps: {
                            channel: r,
                            interactive: eF ? eZ : !eA,
                            forceSecondaryActions: eF || eU,
                            analyticsLocations: eE
                        },
                        buttonOverlay: k,
                        isNitroLocked: u && eG,
                        shouldShowUpsell: S,
                        refreshEnabled: ed
                    },
                    'row-'.concat(n['aria-rowindex'])
                );
            },
            [eD, S, eg, t, p, eY, r, eF, eZ, eA, eU, eE, k, eG, ed]
        ),
        eW = a.useCallback(
            (e, t) => {
                if (e <= 0 || !S) return !1;
                let n = eD[e],
                    r = eD[e - 1],
                    i = ea(n.categoryInfo, eg, t),
                    a = ea(r.categoryInfo, eg, t);
                return i && !a;
            },
            [eD, S, eg]
        ),
        eK = a.useCallback((e) => (0 === e ? ee : eW(e, t) ? J : $), [t, eW]),
        ez = a.useCallback(
            (e) => {
                let t = e === eD.length - 1;
                return eG && t ? er : 0;
            },
            [eD, eG]
        ),
        eq = a.useCallback(
            (e, n) => {
                let r = ''.concat(e.key),
                    a = S && ea(e.categoryInfo, eg, t),
                    o = eW(n, t);
                return (0, i.jsx)(
                    eo,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eV(r),
                        collapsed: eB.has(r),
                        index: n,
                        isSectionNitroLocked: a && eG,
                        showNitroDivider: o && eG
                    },
                    'header-'.concat(r)
                );
            },
            [eB, eV, t, eW, S, eg, eG]
        ),
        eQ = a.useCallback(
            (e, t) => {
                let n = t === eD.length - 1;
                return eG && n ? (0, i.jsx)('div', { className: K.sectionFooter }) : null;
            },
            [eD, eG]
        ),
        eX = a.useCallback((e) => ey((0, x.ZP)(e, eR, eT, r, eE)), [r, eT, eR, eE]),
        e$ = a.useCallback((e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await n.e('56049').then(n.bind(n, 338991));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        }, []),
        eJ = a.useCallback(
            () =>
                (0, i.jsx)(u.Clickable, {
                    tabIndex: 0,
                    className: K.settingsClickArea,
                    onClick: e$,
                    'aria-label': W.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
                    children: (0, i.jsx)(u.VoiceNormalIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: K.settingsIcon
                    })
                }),
            [e$]
        ),
        e0 = a.useCallback(
            (e) =>
                (0, i.jsx)(F.Z, {
                    soundboardListRef: e,
                    categories: eR,
                    shouldUpsellLockedCategories: eG,
                    listPadding: B,
                    guildId: t,
                    inExpressionPicker: ec
                }),
            [eR, eG, B, t, ec]
        ),
        e1 = () => {
            let e = D.Z.getSoundById(ei);
            null != e && eI(e);
        },
        e2 = a.useCallback(() => {
            let e = (0, b.Px)(j.p9.TIER_2);
            return W.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_POPUP_LABEL_V2.format({
                nitroTierName: e,
                onClick: e1
            });
        }, []),
        e3 = a.useCallback(
            () =>
                eG
                    ? (0, i.jsx)(g.p, {
                          showUpsell: eb,
                          text: e2(),
                          button: W.Z.Messages.PREMIUM_UPSELL_GET_NITRO,
                          buttonAnalyticsObject: { section: Y.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e2, eb, eG]
        ),
        e4 = a.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === M.vB.SOUND) {
                    var t;
                    return (0, i.jsx)(Z.Z, {
                        closePicker: s,
                        soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                    });
                }
                return null;
            },
            [s]
        ),
        e5 = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        e6 = a.useCallback(() => {
            var e;
            let t = D.Z.getSoundById(ei),
                n = new Audio((0, U.Z)(ei));
            null != e_.current && e_.current.pause(), (e_.current = n), (n.currentTime = 0), (n.volume = (0, w.Z)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 1)), n.play();
        }, [e_]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != em
                ? ew
                    ? (0, i.jsx)(v.Z, {
                          containerContext: v.p.NONE,
                          image: {
                              url: e5,
                              width: 220,
                              height: 132
                          },
                          title: W.Z.Messages.PREMIUM_UPSELL_MOBILE_FEATURE_SOUNDBOARD_TITLE,
                          description: W.Z.Messages.PREMIUM_UPSELL_DESKTOP_FEATURE_SOUNDBOARD_DESCRIPTION,
                          enableSocialProof: ex,
                          analyticsLocationSection: Y.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: j.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: {
                                  ...ep,
                                  object: Y.qAy.SOUNDBOARD_SOUND
                              },
                              location_stack: ef,
                              sku_id: b.ZP.getSkuIdForPremiumType(j.p9.TIER_2)
                          },
                          onClose: () => eI(null),
                          onDisplay: e6
                      })
                    : (0, i.jsx)(V.Z, {
                          onClose: () => eI(null),
                          closePopout: s,
                          sound: em,
                          channel: r
                      })
                : void 0,
            (0, i.jsx)(T.Z, {
                categories: eD,
                collapsedCategories: eB,
                containerWidth: o,
                store: m.Wq,
                onSelectItem: eY,
                onSearchExpressions: eX,
                hasSearchResults: eC.length > 0,
                defaultSearchPlaceholder: W.Z.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                renderRow: ej,
                renderSectionHeader: eq,
                renderSectionFooter: eQ,
                renderCategoryList: e0,
                renderHeaderAccessories: eJ,
                rowHeight: ed ? X : Q,
                sectionHeaderHeight: eK,
                sectionFooterHeight: ez,
                listPadding: q,
                itemNodeWidth: ed ? en : et,
                gridNavigatorId: eO,
                renderEmptySearchState: es,
                renderInspector: e4,
                gridNotice: C,
                renderHeader: z,
                renderUpsell: e3,
                setShowUpsell: eL
            })
        ]
    });
}
