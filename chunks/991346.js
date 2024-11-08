n.d(t, {
    Gj: function () {
        return k;
    },
    Pt: function () {
        return M;
    },
    VO: function () {
        return U;
    },
    ji: function () {
        return Y;
    },
    q8: function () {
        return V;
    }
}),
    n(639576),
    n(536091),
    n(47120),
    n(653041);
var i = n(192379),
    s = n(442837),
    r = n(704215),
    l = n(493544),
    a = n(634894),
    o = n(211242),
    c = n(924557),
    d = n(706140),
    u = n(319828),
    m = n(592204),
    h = n(610697),
    g = n(880257),
    p = n(631885),
    x = n(223639),
    S = n(160913),
    T = n(725727),
    C = n(977156),
    _ = n(921157),
    E = n(237292),
    f = n(314897),
    I = n(283595),
    N = n(663389),
    b = n(594174),
    A = n(202527),
    v = n(187819),
    j = n(413182),
    O = n(695346),
    R = n(620163),
    P = n(295545),
    D = n(168308),
    y = n(839469),
    B = n(726985),
    L = n(46140),
    Z = n(388032);
function F(e) {
    let { shouldMergeGameSettings: t, showRedesignedThirdPartyAccessSettings: n } = e,
        i = [
            {
                header: Z.intl.string(Z.t.cduTBA),
                settings: n ? [B.s6.ACCOUNT, B.s6.GAMES, B.s6.PROFILE_CUSTOMIZATION, B.s6.PRIVACY_AND_SAFETY, B.s6.CONTENT_SOCIAL, B.s6.DATA_PRIVACY, B.s6.PRIVACY_FAMILY_CENTER, B.s6.THIRD_PARTY_ACCESS, B.s6.SESSIONS, B.s6.CLIPS, B.s6.FRIEND_REQUESTS] : [B.s6.ACCOUNT, B.s6.GAMES, B.s6.PROFILE_CUSTOMIZATION, B.s6.PRIVACY_AND_SAFETY, B.s6.CONTENT_SOCIAL, B.s6.DATA_PRIVACY, B.s6.PRIVACY_FAMILY_CENTER, B.s6.AUTHORIZED_APPS, B.s6.SESSIONS, B.s6.CONNECTIONS, B.s6.CLIPS, B.s6.FRIEND_REQUESTS]
            },
            {
                header: Z.intl.string(Z.t['4uOdGh']),
                divider: !0,
                settings: [B.s6.PREMIUM, B.s6.GUILD_BOOSTING, B.s6.SUBSCRIPTIONS, B.s6.GIFT_INVENTORY, B.s6.BILLING]
            },
            {
                header: Z.intl.string(Z.t.f2n1TE),
                divider: !0,
                settings: [B.s6.APPEARANCE, B.s6.ACCESSIBILITY, B.s6.VOICE_AND_VIDEO, B.s6.POGGERMODE, B.s6.CHAT, B.s6.NOTIFICATIONS, B.s6.KEYBINDS, B.s6.LANGUAGE, B.s6.WINDOW_SETTINGS, B.s6.LINUX_SETTINGS, B.s6.STREAMER_MODE, B.s6.SETTINGS_ADVANCED]
            },
            {
                divider: !0,
                settings: [B.s6.CHANGELOG, B.s6.MERCHANDISE, B.s6.HYPESQUAD, B.s6.TOWNHALL, B.s6.EXPERIMENTS, B.s6.DEVELOPER_OPTIONS, B.s6.HOTSPOT_OPTIONS, B.s6.DISMISSIBLE_CONTENT_OPTIONS, B.s6.PAYMENT_FLOW_MODALS, B.s6.DESIGN_SYSTEMS, B.s6.TEXT_PLAYGROUND, B.s6.TEXT_COMPONENTS, B.s6.INTL_TESTING, B.s6.PROFILE_EFFECTS_PREVIEW_TOOL, B.s6.WEB_SETTING_TREE_TOOL, B.s6.QUEST_PREVIEW_TOOL]
            },
            {
                divider: !0,
                settings: [B.s6.LOGOUT]
            },
            {
                divider: !0,
                settings: [B.s6.SOCIAL_LINKS, B.s6.CLIENT_DEBUG_INFO]
            }
        ],
        s = {
            header: Z.intl.string(Z.t.SmHCFR),
            divider: !0,
            settings: [B.s6.ACTIVITY_PRIVACY, B.s6.REGISTERED_GAMES, B.s6.OVERLAY]
        };
    return t ? i : i.toSpliced(3, 0, s);
}
function M() {
    var e, t, n, i;
    let l = (0, T.YO)().length,
        j = (0, S.U)(),
        y = (0, s.e7)([N.Z], () => N.Z.getProps().impressionSource),
        B = (0, p.gU)(),
        Z = (0, D.bC)(),
        F = (0, c.Go)(),
        [M] = (0, d.cv)(F ? [r.z.CLIPS_SETTINGS_BETA_TAG] : []),
        k = 'useGenerateUserSettingsSections';
    (0, a.j)({
        location: k + ' auto on',
        autoTrackExposure: !0
    }),
        (0, a.j)({
            location: k + ' auto off',
            autoTrackExposure: !1
        });
    let { shouldMergeGameSettings: w } = A.b.useExperiment({ location: 'settings' }),
        U = (0, P.eA)({ location: 'settings' }),
        V = (0, m.Xo)({ location: 'settings' }),
        G = null !== (n = null === (e = b.default.getCurrentUser()) || void 0 === e ? void 0 : e.isStaff()) && void 0 !== n && n,
        Y = (0, E.y0)({ location: 'settings' }),
        H = (0, o.Q)(),
        z = (0, C.Zy)({ location: L.dr.USER_SETTINGS_SEARCH_GIFT_INVENTORY }),
        { enabled: W } = x.Z.useExperiment({ location: 'UserSettingsInventory' }, { autoTrackExposure: !0 }),
        K = (0, s.e7)([I.Z], () => I.Z.hasLibraryApplication()),
        q = (0, s.e7)([f.default], () => f.default.hasTOTPEnabled()),
        Q = O.Sb.useSetting(),
        X = (0, h.Z)(),
        J = (0, v._p)({ location: 'settings-renderer-utils-web' }),
        { hypeSquadRemoved: $ } = u.Z.useExperiment({ location: 'settings' }),
        ee = null === (i = (0, g.Z)()) || void 0 === i || i,
        et = (null === (t = (0, _.s)()) || void 0 === t ? void 0 : t.length) > 0;
    return (0, R.i)({
        unseenGiftCount: l,
        showPrepaidPaymentPastDueWarning: j,
        impressionSource: y,
        numOfPendingFamilyRequests: B,
        isOverlaySupported: Z,
        isClipsBetaTagShowing: M === r.z.CLIPS_SETTINGS_BETA_TAG,
        shouldMergeGameSettings: w,
        isUserSettingsSearchEnabled: U,
        isKeywordFilteringEnabled: V,
        isStaff: G,
        isInappropriateConversationWarningEnabled: Y,
        paymentsBlocked: H,
        isEligibleForQuests: z,
        showGiftNitro: W,
        isStricterMessageRequestsEnabled: X,
        hasLibraryApplication: K,
        hasTOTPEnabled: q,
        developerMode: Q,
        isSafetySettingsV2Enabled: J,
        isAdultUser: ee,
        hasSecureFramesVerifiedUserIds: et,
        hypeSquadRemoved: $
    });
}
function k(e) {
    let { searchResults: t } = (0, y.E)(),
        n = M();
    if (!(0, P.eA)({ location: 'settings' })) return new Set();
    let i = n[e],
        s = Object.fromEntries(
            Object.entries(n).filter((e) => {
                let [t, n] = e;
                return n.section === i.section;
            })
        ),
        r = Object.fromEntries(
            Object.entries(s)
                .filter((e) => {
                    let [t, { parent: n, section: s }] = e;
                    return null != n && s === i.section;
                })
                .map((e) => {
                    let [t, { parent: n }] = e;
                    return [t, n];
                })
        ),
        l = new Set(),
        a = (e) => {
            let t = s[e];
            if (null == t) return;
            l.add(e);
            let n = t.parent;
            null != n && a(n);
        },
        o = (e) => {
            for (let t of (l.add(e),
            Object.entries(r)
                .filter((t) => {
                    let [n, i] = t;
                    return i === e;
                })
                .map((e) => {
                    let [t] = e;
                    return t;
                })))
                o(t);
        };
    for (let e of t.filter((e) => e in s))
        if (!l.has(e)) {
            if (null != s[e].element && null == s[e].parent) {
                l.clear();
                break;
            }
            Object.values(r).includes(e) && o(e), a(e);
        }
    return l;
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        s = [],
        r = G(t),
        a = (function (e, t) {
            let n = new Map();
            return (
                null != t &&
                    t.forEach((t) => {
                        let i = e[t].parent;
                        for (; null != i && null != e[i].parent; ) i = e[i].parent;
                        if (null != i) {
                            var s;
                            let e = null !== (s = n.get(i)) && void 0 !== s ? s : 0;
                            n.set(i, e + 1);
                        }
                    }),
                n
            );
        })(t, new Set(Array.from(null != i ? i : []).filter((e) => r.has(e))));
    return (
        e.forEach((e) => {
            0 !== e.settings.length &&
                (!0 === e.divider && s.push({ section: l.ID.DIVIDER }),
                null != e.header &&
                    s.push({
                        section: l.ID.HEADER,
                        label: e.header
                    }),
                e.settings.forEach((e) => {
                    s.push({
                        ...t[e],
                        tabPredicate: () => {
                            var t, n, s;
                            return null == i || ((t = e), (n = i), (s = a), (t === B.s6.SEARCH_NO_RESULTS && 0 === n.size) || s.has(t) || n.has(t));
                        },
                        searchFilterCount: !n || (null == i ? void 0 : i.has(e)) ? void 0 : a.get(e)
                    });
                }));
        }),
        s
    );
}
function U() {
    let e = M(),
        { shouldMergeGameSettings: t } = A.b.useExperiment({ location: 'settings' }),
        { showRedesign: n } = j.b.useExperiment({ location: 'settings' }),
        s = i.useMemo(
            () =>
                F({
                    shouldMergeGameSettings: t,
                    showRedesignedThirdPartyAccessSettings: n
                }),
            [t, n]
        );
    return i.useMemo(() => w(s, e), [s, e]);
}
function V(e) {
    let t = M(),
        n = (function () {
            let { shouldMergeGameSettings: e } = A.b.useExperiment({ location: 'settings' }),
                { showRedesign: t } = j.b.useExperiment({ location: 'settings' }),
                n = F({
                    shouldMergeGameSettings: e,
                    showRedesignedThirdPartyAccessSettings: t
                });
            return i.useMemo(
                () => [
                    {
                        header: Z.intl.string(Z.t.zkoeq6),
                        settings: [
                            ...n
                                .map((e) => {
                                    let { settings: t } = e;
                                    return t;
                                })
                                .flat(1),
                            B.s6.SEARCH_NO_RESULTS
                        ]
                    }
                ],
                [n]
            );
        })(),
        s = (0, P.c3)({ location: 'settings' });
    return i.useMemo(() => w(n, t, s, new Set(e)), [n, t, s, e]);
}
function G(e) {
    return new Map(
        Object.entries(e).filter((e) => {
            let [t, n] = e;
            return n.section !== l.ID.CUSTOM && null != n.searchableTitles && (null == n.predicate || n.predicate());
        })
    );
}
function Y(e) {
    return Array.from(G(e).entries()).map((e) => {
        let [t, n] = e;
        return [t, n.searchableTitles];
    });
}
