r.d(n, {
    O: function () {
        return eo;
    },
    Z: function () {
        return ed;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(481060),
    d = r(239091),
    f = r(788911),
    _ = r(2052),
    h = r(100527),
    p = r(906732),
    m = r(313201),
    g = r(880949),
    E = r(806966),
    v = r(28546),
    I = r(468954),
    T = r(409700),
    b = r(53691),
    y = r(75145),
    S = r(631771),
    A = r(609218),
    N = r(695346),
    C = r(594174),
    R = r(979651),
    O = r(259580),
    D = r(626135),
    L = r(74538),
    x = r(135869),
    w = r(763296),
    P = r(697426),
    M = r(242291),
    k = r(22382),
    U = r(747071),
    B = r(421673),
    G = r(663215),
    Z = r(409673),
    F = r(347072),
    V = r(835648),
    j = r(650743),
    H = r(394740),
    Y = r(343747),
    W = r(981631),
    K = r(474936),
    z = r(388032),
    q = r(61368);
let Q = 16,
    X = [8, 0, 8, 0],
    J = 48,
    $ = 80,
    ee = 32,
    et = 32 + y.Kn,
    en = 16,
    er = 150,
    ei = 102,
    ea = 60,
    es = '3';
function eo(e, n, r) {
    return (null == r && e.type === P.bg.GUILD && !n) || (e.type === P.bg.GUILD && e.guild.id !== r && !n);
}
function el(e) {
    let { categoryInfo: n, collapsed: r, toggleCollapsed: i, index: s, isSectionNitroLocked: o, showNitroDivider: u } = e;
    function d() {
        switch (n.type) {
            case P.bg.FAVORITES:
                return (0, a.jsx)(c.StarIcon, {
                    size: 'xs',
                    color: 'currentColor',
                    className: q.headerIcon
                });
            case P.bg.RECENTLY_HEARD:
                return (0, a.jsx)(c.ClockIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor',
                    className: q.headerIcon
                });
            case P.bg.FREQUENTLY_USED:
                return (0, a.jsx)(c.AnalyticsIcon, { className: q.headerIcon });
            case P.bg.GUILD:
                return (0, a.jsx)(g.Z, {
                    guild: n.guild,
                    height: Q,
                    width: Q
                });
            case P.bg.DEFAULTS:
                return (0, a.jsx)(c.ClydeIcon, {
                    size: 'custom',
                    width: 28,
                    height: 28,
                    color: 'currentColor',
                    className: q.headerIcon
                });
            case P.bg.SEARCH:
                return (0, a.jsx)(c.MagnifyingGlassIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: q.headerIcon
                });
        }
    }
    function f() {
        switch (n.type) {
            case P.bg.FAVORITES:
                return z.intl.string(z.t.k8fFjo);
            case P.bg.RECENTLY_HEARD:
                return z.intl.string(z.t['8i/+SE']);
            case P.bg.FREQUENTLY_USED:
                return z.intl.string(z.t['+cGVV1']);
            case P.bg.GUILD:
                return n.guild.name;
            case P.bg.DEFAULTS:
                return z.intl.string(z.t.Rtvk9f);
            case P.bg.SEARCH:
                return z.intl.string(z.t.zkoeq6);
        }
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            u &&
                (0, a.jsx)(y.ZP, {
                    colorOpacity: 0.35,
                    glowOpacity: 0.35
                }),
            (0, a.jsx)('div', {
                className: l()(q.sectionContainer, { [q.sectionContainerNitroLocked]: o }),
                children: (0, a.jsx)(c.Clickable, {
                    className: l()(q.sectionHeader, { [q.notFirstSectionHeader]: 0 !== s }),
                    onClick: i,
                    'aria-expanded': !r,
                    children: (0, a.jsxs)('div', {
                        className: q.sectionHeaderContent,
                        children: [
                            d(),
                            (0, a.jsx)(c.Heading, {
                                variant: 'eyebrow',
                                color: 'none',
                                className: q.sectionTitle,
                                children: f()
                            }),
                            (0, a.jsx)(O.Z, {
                                className: q.headerIcon,
                                direction: r ? O.Z.Directions.RIGHT : O.Z.Directions.DOWN
                            })
                        ]
                    })
                })
            })
        ]
    });
}
function eu() {
    return (0, a.jsx)(f.Z, { message: z.intl.string(z.t.bgDdND) });
}
function ec(e) {
    let { descriptors: n, soundButtonProps: r, rowIndex: i, isLastRow: o, isUsingKeyboardNavigation: u, suppressPlaySound: c, gridRowProps: d, getItemProps: f, onSelectItem: _, onItemMouseEnter: h, buttonOverlay: p, isNitroLocked: m, shouldShowUpsell: g, refreshEnabled: v } = e,
        I = E.Wq.useStore((e) => e.inspectedExpressionPosition);
    return (0, a.jsx)('ul', {
        ...d,
        className: l()(q.soundRow, {
            [q.soundRowNitroLocked]: m,
            [q.lastSoundRow]: o
        }),
        children: n.map((e, n) => {
            let a = 'item-'.concat(n),
                o = u && I.rowIndex === i && I.columnIndex === n;
            switch (e.item.type) {
                case P.vB.SOUND:
                    return (0, s.createElement)(Z.ZP, {
                        ...f(n),
                        ...r,
                        key: ''.concat(a, '-').concat(e.item.sound.soundId),
                        sound: e.item.sound,
                        suppressPlaySound: c,
                        focused: o,
                        onMouseEnter: () => h(n),
                        onSelectItem: () => _(e),
                        enableSecondaryActions: !0,
                        buttonOverlay: p,
                        inNitroLockedSection: m,
                        showLockForDisabledSound: g,
                        refreshEnabled: v
                    });
                case P.vB.ADD_SOUND:
                    return (0, s.createElement)(F.Z, {
                        ...f(n),
                        key: a,
                        guild: e.item.guild,
                        focused: o,
                        onSelectItem: () => _(e),
                        refreshEnabled: v
                    });
            }
        })
    });
}
function ed(e) {
    let { guildId: n, channel: i, containerWidth: o, onClose: f, onSelect: g, shouldValidateSelectedSound: y = !1, suppressPlaySound: O = !1, shouldShowUpsell: Z = !0, gridNotice: F, soundButtonOverlay: Q, listPadding: ed, renderHeader: ef, defaultSoundsOnly: e_ = !1, inExpressionPicker: eh, refreshEnabled: ep } = e,
        { currentPreviewRef: em } = s.useContext(x.Z),
        { analyticsLocations: eg } = (0, p.ZP)(),
        { analyticsLocations: eE } = (0, p.ZP)(h.Z.PREMIUM_UPSELL),
        { location: ev } = (0, _.O)(),
        eI = s.useMemo(
            () => ({
                ...ev,
                section: W.jXE.SOUNDBOARD_SOUND_PICKER
            }),
            [ev]
        ),
        [eT, eb] = s.useState(null),
        ey = (0, u.e7)([C.default], () => C.default.getCurrentUser()),
        eS = (0, L.I5)(ey, K.p9.TIER_2),
        eA = (0, u.e7)([R.Z], () => {
            var e;
            return R.Z.getVoiceState(n, null !== (e = null == ey ? void 0 : ey.id) && void 0 !== e ? e : W.lds);
        }),
        eN = (null == eA ? void 0 : eA.selfDeaf) || (null == eA ? void 0 : eA.mute) || (null == eA ? void 0 : eA.suppress),
        eC = (0, v.Iu)((e) => e.searchQuery),
        eR = null != eC && '' !== eC,
        eO = (0, m.Dt)(),
        { categories: eD } = (0, G.ZP)(i, void 0, e_),
        [eL, ex] = s.useState([]),
        [ew, eP] = s.useState(!1),
        eM = (0, G.FS)(eD, eL, eC).filter((e) => e.items.length > 0),
        ek = eM.some((e) => !!(0, L._O)(e.categoryInfo) && e.categoryInfo.isNitroLocked),
        eU = !eS && Z && ek,
        { enableInlineUpsell: eB, enableRoadblock: eG, enableRoadblockWithSocialProof: eZ } = S.Qs.useExperiment({ location: 'Soundboard Picker' }, { autoTrackExposure: eU }),
        eF = eU && eB,
        eV = N.T4.useSetting(),
        ej = s.useMemo(() => new Set(eV), [eV]),
        eH = null == i,
        eY = L.ZP.canUseCustomCallSounds(ey),
        eW = s.useCallback(
            (e) => {
                ej.has(e) ? ej.delete(e) : ej.add(e), N.T4.updateSetting(Array.from(ej));
            },
            [ej]
        ),
        eK = s.useCallback(
            (e, n) => {
                if (null != g && !y) return g(e);
                let r = (0, M.Nq)(ey, e, i, !1);
                if (null != g && y && r) g(e);
                else if (!O && r) {
                    var a;
                    (0, M.GN)(e, null !== (a = null == i ? void 0 : i.id) && void 0 !== a ? a : W.lds, n),
                        eR &&
                            D.default.track(W.rMx.SEARCH_RESULT_SELECTED, {
                                search_type: W.aib.SOUNDBOARD,
                                channel_id: null == i ? void 0 : i.id,
                                query: eC,
                                location_stack: n
                            });
                } else {
                    if ((0, M.Nq)(ey, e, i)) return;
                    Z && eb(e);
                }
            },
            [O, ey, i, Z, eR, eC, g, y]
        ),
        ez = s.useCallback(
            (e) => {
                switch (e.item.type) {
                    case P.vB.SOUND:
                        return eK(e.item.sound, eg);
                    case P.vB.ADD_SOUND:
                        return f(), (0, Y.Z)(e.item.guild.id);
                }
            },
            [eg, eK, f]
        ),
        eq = s.useCallback(
            (e, r, s, o, l) => {
                let u = eM[s.sectionIndex],
                    c = Z && eo(u.categoryInfo, eS, n),
                    d = s.sectionIndex === eM.length - 1 && s.rowIndex === s.totalRowCount - 1;
                return (0, a.jsx)(
                    ec,
                    {
                        descriptors: e,
                        rowIndex: s.rowIndex,
                        isLastRow: d,
                        isUsingKeyboardNavigation: s.isUsingKeyboardNavigation,
                        gridRowProps: r,
                        getItemProps: o,
                        onItemMouseEnter: l,
                        suppressPlaySound: O,
                        onSelectItem: ez,
                        soundButtonProps: {
                            channel: i,
                            interactive: eH ? eY : !eN,
                            forceSecondaryActions: eH || eB,
                            analyticsLocations: eg
                        },
                        buttonOverlay: Q,
                        isNitroLocked: c && eF,
                        shouldShowUpsell: Z,
                        refreshEnabled: ep
                    },
                    'row-'.concat(r['aria-rowindex'])
                );
            },
            [eM, Z, eS, n, O, ez, i, eH, eY, eN, eB, eg, Q, eF, ep]
        ),
        eQ = s.useCallback(
            (e, n) => {
                if (e <= 0 || !Z) return !1;
                let r = eM[e],
                    i = eM[e - 1],
                    a = eo(r.categoryInfo, eS, n),
                    s = eo(i.categoryInfo, eS, n);
                return a && !s;
            },
            [eM, Z, eS]
        ),
        eX = s.useCallback((e) => (0 === e ? en : eQ(e, n) ? et : ee), [n, eQ]),
        eJ = s.useCallback(
            (e) => {
                let n = e === eM.length - 1;
                return eF && n ? ea : 0;
            },
            [eM, eF]
        ),
        e$ = s.useCallback(
            (e, r) => {
                let i = ''.concat(e.key),
                    s = Z && eo(e.categoryInfo, eS, n),
                    o = eQ(r, n);
                return (0, a.jsx)(
                    el,
                    {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eW(i),
                        collapsed: ej.has(i),
                        index: r,
                        isSectionNitroLocked: s && eF,
                        showNitroDivider: o && eF
                    },
                    'header-'.concat(i)
                );
            },
            [ej, eW, n, eQ, Z, eS, eF]
        ),
        e0 = s.useCallback(
            (e, n) => {
                let r = n === eM.length - 1;
                return eF && r ? (0, a.jsx)('div', { className: q.sectionFooter }) : null;
            },
            [eM, eF]
        ),
        e1 = s.useCallback((e) => ex((0, B.YM)(e, eD, ey, i, eg)), [i, ey, eD, eg]),
        e2 = s.useCallback((e) => {
            (0, d.jW)(e, async () => {
                let { default: e } = await r.e('56049').then(r.bind(r, 338991));
                return (n) => (0, a.jsx)(e, { ...n });
            });
        }, []),
        e3 = s.useCallback(
            () =>
                eh
                    ? (0, a.jsx)(T.Hh, {
                          renderPopout: () => (0, a.jsx)(T.hq, {}),
                          tooltipText: z.intl.string(z.t['19lt29']),
                          position: 'top',
                          clickableClassName: l()(q.settingsClickArea, q.settingsSoundmojiClickArea),
                          children: (0, a.jsx)(c.VoiceNormalIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: q.settingsIcon
                          })
                      })
                    : (0, a.jsx)(c.Clickable, {
                          tabIndex: 0,
                          className: q.settingsClickArea,
                          onClick: e2,
                          'aria-label': z.intl.string(z.t.kbFsAA),
                          children: (0, a.jsx)(c.VoiceNormalIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: q.settingsIcon
                          })
                      }),
            [eh, e2]
        ),
        e4 = s.useCallback(
            (e) =>
                (0, a.jsx)(V.Z, {
                    soundboardListRef: e,
                    categories: eD,
                    shouldUpsellLockedCategories: eF,
                    listPadding: ed,
                    guildId: n,
                    inExpressionPicker: eh
                }),
            [eD, eF, ed, n, eh]
        ),
        e6 = () => {
            let e = w.Z.getSoundById(es);
            null != e && eb(e);
        },
        e5 = s.useCallback(() => {
            let e = (0, L.Px)(K.p9.TIER_2);
            return z.intl.format(z.t['tw/SSk'], {
                nitroTierName: e,
                onClick: e6
            });
        }, []),
        e7 = s.useCallback(
            () =>
                eF
                    ? (0, a.jsx)(b.p, {
                          showUpsell: ew,
                          text: e5(),
                          button: z.intl.string(z.t.pj0XBA),
                          buttonAnalyticsObject: { section: W.jXE.SOUND_PICKER_FLOATING_UPSELL }
                      })
                    : null,
            [e5, ew, eF]
        ),
        e8 = s.useCallback(
            (e) => {
                if ((null == e ? void 0 : e.item.type) === P.vB.SOUND) {
                    var n;
                    return (0, a.jsx)(j.Z, {
                        closePicker: f,
                        soundboardSound: null !== (n = null == e ? void 0 : e.item.sound) && void 0 !== n ? n : null
                    });
                }
                return null;
            },
            [f]
        ),
        e9 = 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_dark.png',
        te = s.useCallback(() => {
            var e;
            let n = w.Z.getSoundById(es),
                r = new Audio((0, k.Z)(es));
            null != em.current && em.current.pause(), (em.current = r), (r.currentTime = 0), (r.volume = (0, U.Z)(null !== (e = null == n ? void 0 : n.volume) && void 0 !== e ? e : 1)), r.play();
        }, [em]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != eT
                ? eG
                    ? (0, a.jsx)(A.Z, {
                          containerContext: A.p.NONE,
                          image: {
                              url: e9,
                              width: 220,
                              height: 132
                          },
                          title: z.intl.string(eh ? z.t.rZEEvb : z.t.jGDYFx),
                          description: z.intl.string(eh ? z.t.ZPNG5O : z.t['grL/ho']),
                          enableSocialProof: eZ,
                          analyticsLocationSection: W.jXE.SOUNDBOARD_SOUND_PICKER_UPSELL,
                          upsellViewedTrackingData: {
                              type: K.cd.SOUND_PICKER_SOUND_CLICKED,
                              is_external: !0,
                              location: {
                                  ...eI,
                                  object: W.qAy.SOUNDBOARD_SOUND
                              },
                              location_stack: eE,
                              sku_id: L.ZP.getSkuIdForPremiumType(K.p9.TIER_2)
                          },
                          onClose: () => eb(null),
                          onDisplay: te
                      })
                    : (0, a.jsx)(H.Z, {
                          onClose: () => eb(null),
                          closePopout: f,
                          sound: eT,
                          channel: i
                      })
                : void 0,
            (0, a.jsx)(I.Z, {
                categories: eM,
                collapsedCategories: ej,
                containerWidth: o,
                store: E.Wq,
                onSelectItem: ez,
                onSearchExpressions: e1,
                hasSearchResults: eL.length > 0,
                defaultSearchPlaceholder: z.intl.string(z.t.sKt3xc),
                renderRow: eq,
                renderSectionHeader: e$,
                renderSectionFooter: e0,
                renderCategoryList: e4,
                renderHeaderAccessories: e3,
                rowHeight: ep ? $ : J,
                sectionHeaderHeight: eX,
                sectionFooterHeight: eJ,
                listPadding: X,
                itemNodeWidth: ep ? ei : er,
                gridNavigatorId: eO,
                renderEmptySearchState: eu,
                renderInspector: e8,
                gridNotice: F,
                renderHeader: ef,
                renderUpsell: e7,
                setShowUpsell: eP
            })
        ]
    });
}
