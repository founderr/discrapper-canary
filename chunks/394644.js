t.d(s, {
    Gj: function () {
        return B;
    },
    Pt: function () {
        return j;
    },
    VO: function () {
        return G;
    },
    ji: function () {
        return V;
    },
    q8: function () {
        return F;
    }
}),
    t(639576),
    t(536091),
    t(47120),
    t(653041);
var n = t(470079),
    a = t(442837),
    i = t(704215),
    r = t(493544),
    o = t(634894),
    l = t(211242),
    c = t(770471),
    d = t(924557),
    u = t(706140),
    _ = t(592204),
    E = t(610697),
    T = t(631885),
    S = t(223639),
    I = t(160913),
    N = t(725727),
    m = t(977156),
    C = t(237292),
    g = t(314897),
    A = t(283595),
    h = t(663389),
    O = t(594174),
    p = t(202527),
    R = t(187819),
    x = t(695346),
    f = t(620163),
    M = t(295545),
    D = t(168308),
    P = t(839469),
    L = t(726985),
    b = t(46140),
    Z = t(689938);
function v(e) {
    let { shouldMergeGameSettings: s } = e,
        t = [
            {
                header: Z.Z.Messages.USER_SETTINGS,
                settings: [L.s6.ACCOUNT, L.s6.GAMES, L.s6.PROFILE_CUSTOMIZATION, L.s6.PRIVACY_AND_SAFETY, L.s6.PRIVACY_AND_SAFETY_V2, L.s6.PRIVACY_FAMILY_CENTER, L.s6.AUTHORIZED_APPS, L.s6.SESSIONS, L.s6.CONNECTIONS, L.s6.CLIPS, L.s6.FRIEND_REQUESTS]
            },
            {
                header: Z.Z.Messages.BILLING_SETTINGS,
                divider: !0,
                settings: [L.s6.PREMIUM, L.s6.GUILD_BOOSTING, L.s6.SUBSCRIPTIONS, L.s6.GIFT_INVENTORY, L.s6.BILLING]
            },
            {
                header: Z.Z.Messages.APP_SETTINGS,
                divider: !0,
                settings: [L.s6.APPEARANCE, L.s6.ACCESSIBILITY, L.s6.VOICE_AND_VIDEO, L.s6.POGGERMODE, L.s6.CHAT, L.s6.NOTIFICATIONS, L.s6.KEYBINDS, L.s6.LANGUAGE, L.s6.WINDOW_SETTINGS, L.s6.LINUX_SETTINGS, L.s6.STREAMER_MODE, L.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [L.s6.CHANGELOG, L.s6.MERCHANDISE, L.s6.HYPESQUAD, L.s6.EXPERIMENTS, L.s6.DEVELOPER_OPTIONS, L.s6.HOTSPOT_OPTIONS, L.s6.DISMISSIBLE_CONTENT_OPTIONS, L.s6.PAYMENT_FLOW_MODALS, L.s6.DESIGN_SYSTEMS, L.s6.TEXT_PLAYGROUND, L.s6.TEXT_COMPONENTS, L.s6.INTL_TESTING, L.s6.PROFILE_EFFECTS_PREVIEW_TOOL, L.s6.WEB_SETTING_TREE_TOOL, L.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [L.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [L.s6.SOCIAL_LINKS, L.s6.CLIENT_DEBUG_INFO]
            }
        ],
        n = {
            header: Z.Z.Messages.ACTIVITY_SETTINGS,
            divider: !0,
            settings: [L.s6.ACTIVITY_PRIVACY, L.s6.REGISTERED_GAMES, L.s6.OVERLAY]
        };
    return s ? t : t.toSpliced(3, 0, n);
}
function j() {
    var e, s;
    let t = (0, N.YO)().length,
        n = (0, I.U)(),
        r = (0, a.e7)([h.Z], () => h.Z.getProps().impressionSource),
        P = (0, T.gU)(),
        L = (0, D.bC)(),
        Z = (0, d.Go)(),
        [v] = (0, u.cv)(Z ? [i.z.CLIPS_SETTINGS_BETA_TAG] : []),
        j = 'useGenerateUserSettingsSections';
    (0, o.j)({
        location: j + ' auto on',
        autoTrackExposure: !0
    }),
        (0, o.j)({
            location: j + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: B } = p.b.useExperiment({ location: 'settings' }),
        U = (0, M.eA)({ location: 'settings' }),
        G = (0, _.Xo)({ location: 'settings' }),
        F = null !== (s = null === (e = O.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== s && s,
        y = (0, C.y0)({ location: 'settings' }),
        V = (0, l.Q)(),
        Y = (0, m.Zy)({ location: b.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: w } = S.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        k = (0, a.e7)([A.Z], () => A.Z.hasLibraryApplication()),
        H = (0, a.e7)([g.default], () => g.default.hasTOTPEnabled()),
        { canBroadcast: W } = c.Z.useExperiment({ location: 'user_settings_activity_privacy' }, { autoTrackExposure: !0 }),
        K = x.Sb.useSetting(),
        z = (0, E.Z)(),
        Q = (0, R._p)({ location: 'settings-renderer-utils-web' });
    return (0, f.i)({
        unseenGiftCount: t,
        showPrepaidPaymentPastDueWarning: n,
        impressionSource: r,
        numOfPendingFamilyRequests: P,
        isOverlaySupported: L,
        isClipsBetaTagShowing: v === i.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: B,
        isUserSettingsSearchEnabled: U,
        isKeywordFilteringEnabled: G,
        isStaff: F,
        isInappropriateConversationWarningEnabled: y,
        paymentsBlocked: V,
        isEligibleForQuests: Y,
        showGiftNitro: w,
        isStricterMessageRequestsEnabled: z,
        hasLibraryApplication: k,
        hasTOTPEnabled: H,
        canBroadcastActivity: W,
        developerMode: K,
        isSafetySettingsV2Enabled: Q
    });
}
function B(e) {
    let { searchResults: s } = (0, P.E)(),
        t = j();
    if (!(0, M.eA)({ location: 'settings' })) return new Set();
    let n = t[e],
        a = Object.fromEntries(
            Object.entries(t).filter((e) => {
                let [s, t] = e;
                return t.section === n.section;
            })
        ),
        i = Object.fromEntries(
            Object.entries(a)
                .filter((e) => {
                    let [s, { parent: t, section: a }] = e;
                    return null != t && a === n.section;
                })
                .map((e) => {
                    let [s, { parent: t }] = e;
                    return [s, t];
                })
        ),
        r = new Set(),
        o = (e) => {
            let s = a[e];
            if (null == s) return;
            r.add(e);
            let t = s.parent;
            null != t && o(t);
        },
        l = (e) => {
            for (let s of (r.add(e),
            Object.entries(i)
                .filter((s) => {
                    let [t, n] = s;
                    return n === e;
                })
                .map((e) => {
                    let [s] = e;
                    return s;
                })))
                l(s);
        };
    for (let e of s.filter((e) => e in a))
        if (!r.has(e)) {
            if (null != a[e].element && null == a[e].parent) {
                r.clear();
                break;
            }
            Object.values(i).includes(e) && l(e), o(e);
        }
    return r;
}
function U(e, s) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 ? arguments[3] : void 0,
        a = [],
        i = y(s),
        o = (function (e, s) {
            let t = new Map();
            return (
                null != s &&
                    s.forEach((s) => {
                        let n = e[s].parent;
                        for (; null != n && null != e[n].parent; ) n = e[n].parent;
                        if (null != n) {
                            var a;
                            let e = null !== (a = t.get(n)) && void 0 !== a ? a : 0;
                            t.set(n, e + 1);
                        }
                    }),
                t
            );
        })(s, new Set(Array.from(null != n ? n : []).filter((e) => i.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && a.push({ section: r.ID.DIVIDER }),
                null != e.header &&
                    a.push({
                        section: r.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    a.push({
                        ...s[e],
                        tabPredicate: () => {
                            var s, t, a;
                            return null == n || ((s = e), (t = n), (a = o), (s === L.s6.SEARCH_NO_RESULTS && 0 === t.size) || a.has(s) || t.has(s));
                        },
                        searchFilterCount: !t || (null == n ? void 0 : n.has(e)) ? void 0 : o.get(e)
                    });
                }));
        }),
        a
    );
}
function G() {
    let e = j(),
        { shouldMergeGameSettings: s } = p.b.useExperiment({ location: 'settings' }),
        t = n.useMemo(() => v({ shouldMergeGameSettings: s }), [s]);
    return n.useMemo(() => U(t, e), [t, e]);
}
function F(e) {
    let s = j(),
        t = (function () {
            let { shouldMergeGameSettings: e } = p.b.useExperiment({ location: 'settings' }),
                s = v({ shouldMergeGameSettings: e });
            return n.useMemo(
                () => [
                    {
                        header: Z.Z.Messages.SEARCH_RESULTS_SECTION_LABEL,
                        settings: [
                            ...s
                                .map((e) => {
                                    let { settings: s } = e;
                                    return s;
                                })
                                .flat(1),
                            L.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [s]
            );
        })(),
        a = (0, M.c3)({ location: 'settings' });
    return n.useMemo(() => U(t, s, a, new Set(e)), [t, s, a, e]);
}
function y(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [s, t] = e;
            return t.section !== r.ID.CUSTOM && null != t.searchableTitles && (null == t.predicate || t.predicate());
        })
    );
}
function V(e) {
    return Array.from(y(e).entries()).map((e) => {
        let [s, t] = e;
        return [s, t.searchableTitles];
    });
}
