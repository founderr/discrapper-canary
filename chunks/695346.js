n.d(t, {
    AY: function () {
        return K;
    },
    CM: function () {
        return q;
    },
    Cr: function () {
        return ea;
    },
    DC: function () {
        return Q;
    },
    Ex: function () {
        return eA;
    },
    Fg: function () {
        return j;
    },
    G6: function () {
        return en;
    },
    H1: function () {
        return A;
    },
    I0: function () {
        return R;
    },
    L1: function () {
        return em;
    },
    NA: function () {
        return ec;
    },
    OW: function () {
        return $;
    },
    Ok: function () {
        return es;
    },
    Ou: function () {
        return M;
    },
    Pe: function () {
        return w;
    },
    QK: function () {
        return eg;
    },
    QZ: function () {
        return v;
    },
    R$: function () {
        return _;
    },
    RS: function () {
        return eu;
    },
    R_: function () {
        return eN;
    },
    Rt: function () {
        return eL;
    },
    SE: function () {
        return eT;
    },
    Sb: function () {
        return eh;
    },
    Sh: function () {
        return eC;
    },
    T4: function () {
        return y;
    },
    UP: function () {
        return ee;
    },
    Wp: function () {
        return ev;
    },
    Wz: function () {
        return ey;
    },
    Xc: function () {
        return x;
    },
    Xk: function () {
        return N;
    },
    Xr: function () {
        return et;
    },
    Yk: function () {
        return eE;
    },
    _O: function () {
        return S;
    },
    bh: function () {
        return z;
    },
    bm: function () {
        return J;
    },
    cC: function () {
        return m;
    },
    cP: function () {
        return P;
    },
    co: function () {
        return ei;
    },
    d$: function () {
        return L;
    },
    d4: function () {
        return b;
    },
    dN: function () {
        return f;
    },
    eo: function () {
        return O;
    },
    ev: function () {
        return H;
    },
    fq: function () {
        return h;
    },
    fv: function () {
        return I;
    },
    fz: function () {
        return E;
    },
    gw: function () {
        return eR;
    },
    h2: function () {
        return F;
    },
    hg: function () {
        return eO;
    },
    iG: function () {
        return Z;
    },
    iH: function () {
        return eS;
    },
    jU: function () {
        return Y;
    },
    kJ: function () {
        return G;
    },
    kU: function () {
        return W;
    },
    l4: function () {
        return eD;
    },
    mX: function () {
        return B;
    },
    nc: function () {
        return ed;
    },
    qF: function () {
        return C;
    },
    rN: function () {
        return ef;
    },
    tU: function () {
        return eo;
    },
    uL: function () {
        return D;
    },
    up: function () {
        return p;
    },
    vF: function () {
        return g;
    },
    x4: function () {
        return el;
    },
    xM: function () {
        return X;
    },
    xq: function () {
        return V;
    },
    zA: function () {
        return U;
    }
}),
    n(47120);
var r = n(442837),
    i = n(524437),
    a = n(381499),
    s = n(85746),
    o = n(560997),
    l = n(263937),
    u = n(973005),
    c = n(981631),
    d = n(611480);
let f = (0, o.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    _ = (0, o.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    p = (0, o.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    h = (0, o.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    m = (0, o.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.A2N.ON_CLICK;
        },
        (e) => a.Gm.create({ value: e })
    ),
    g = (0, o.Zc)(
        'textAndImages',
        'useThreadSidebar',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, o.Zc)(
    'notifications',
    'showInAppNotifications',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let E = (0, o.Zc)(
        'notifications',
        'reactionNotifications',
        (e) => (null != e ? e : i.Ns.NOTIFICATIONS_ENABLED),
        (e) => e
    ),
    v = (0, o.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: !!e })
    ),
    I = (0, o.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    T = [],
    b = (0, o.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : T),
        (e) => e
    ),
    S = (0, o.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : T),
        (e) => e
    ),
    y = (0, o.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : T),
        (e) => e
    ),
    A = (0, o.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    N = (0, o.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    C = (0, o.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    R = (0, o.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    O = (0, o.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    D = '0',
    L = (0, o.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : D),
        (e) => e
    ),
    x = (0, o.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    w = (0, o.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    P = (0, o.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    M = (0, o.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    k = [],
    U = (0, o.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : k),
        (e) => e
    ),
    B = (0, o.Zc)(
        'privacy',
        'defaultMessageRequestRestricted',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    G = (0, o.Zc)(
        'privacy',
        'nonSpamRetrainingOptIn',
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : a.D5.create({ value: e }))
    );
(0, o.Zc)(
    'privacy',
    'contactSyncEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => a.D5.create({ value: e })
);
let Z = (0, o.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    F = (0, o.Zc)(
        'privacy',
        'restrictedGuildIds',
        (e) => (null != e ? e : []),
        (e) => e
    );
(0, o.Zc)(
    'privacy',
    'friendDiscoveryFlags',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0;
    },
    (e) => a.yC.create({ value: e })
);
let V = (0, o.Zc)(
        'privacy',
        'friendSourceFlags',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.HGf;
        },
        (e) => a.yC.create({ value: e })
    ),
    j = (0, o.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    H = (0, o.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    Y = (0, o.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    W = (0, o.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    ),
    K = (0, o.Zc)(
        'voiceAndVideo',
        'soundmojiVolume',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 100;
        },
        (e) => a.A8.create({ value: e })
    );
(0, o.Zc)(
    'voiceAndVideo',
    'streamNotificationsEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let z = (0, o.Zc)(
    'privacy',
    'dropsOptedOut',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => a.D5.create({ value: e })
);
(0, o.Zc)(
    'voiceAndVideo',
    'nativePhoneIntegrationEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let q = (0, o.Zc)(
        'voiceAndVideo',
        'afkTimeout',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600;
        },
        (e) => a.yC.create({ value: e })
    ),
    Q = (0, o.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    X = (0, o.Zc)(
        'textAndImages',
        'viewNsfwCommands',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, o.Zc)(
    'privacy',
    'detectPlatformAccounts',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let J = (0, o.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    $ = (0, o.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    ee = (0, o.Zc)(
        'textAndImages',
        'explicitContentFilter',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.TI.NON_FRIENDS;
        },
        (e) => a.yC.create({ value: e })
    );
(0, o.Zc)(
    'textAndImages',
    'dmSpamFilter',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : u.fQ.NON_FRIENDS;
    },
    (e) => a.yC.create({ value: e })
);
let et = (0, o.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : i.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    en = (0, o.Zc)(
        'status',
        'showCurrentGame',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    );
(0, o.Zc)(
    'privacy',
    'recentGamesEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => a.D5.create({ value: e })
);
let er = new Set(Object.values(c.Skl)),
    ei = (0, o.Zc)(
        'status',
        'status',
        (e) => (null != e && er.has(e.value) ? e.value : c.Skl.UNKNOWN),
        (e) => a.Gm.create({ value: e })
    ),
    ea = (0, o.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    es = (0, o.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    eo = (0, o.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => a.D5.create({ value: e })
    ),
    el = (0, o.KM)(
        (0, o.Zc)(
            'textAndImages',
            'inlineAttachmentMedia',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'inlineAttachmentMedia'
    ),
    eu = (0, o.KM)(
        (0, o.Zc)(
            'textAndImages',
            'inlineEmbedMedia',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'inlineEmbedMedia'
    ),
    ec = (0, o.KM)(
        (0, o.Zc)(
            'textAndImages',
            'renderEmbeds',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'renderEmbeds'
    ),
    ed = (0, o.KM)(
        (0, o.Zc)(
            'textAndImages',
            'renderReactions',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => a.D5.create({ value: e })
        ),
        'text',
        'renderReactions'
    ),
    ef = (0, o.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null;
        },
        (e) => a.T4.create({ value: null != e ? e : 0 })
    ),
    e_ = new Set([s.l.COZY, s.l.COMPACT]);
(0, o.Zc)(
    'appearance',
    'channelListLayout',
    (e) => (null != e && e_.has(e.value) ? e.value : s.l.COZY),
    (e) => a.Gm.create({ value: e })
);
let ep = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, o.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && ep.has(e.value) ? e.value : s.Z.ALL),
    (e) => a.Gm.create({ value: e })
);
let eh = (0, o.KM)(
        (0, o.Zc)(
            'appearance',
            'developerMode',
            (e) => null != e && e,
            (e) => e
        ),
        'appearance',
        'developerMode'
    ),
    em = (0, o.Zc)(
        'appearance',
        'clientThemeSettings',
        (e) => {
            var t;
            return { backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value };
        },
        (e) => ({ backgroundGradientPresetId: null != e.backgroundGradientPresetId ? a.yC.create({ value: e.backgroundGradientPresetId }) : void 0 })
    ),
    eg = (0, o.R2)(
        (0, o.KM)(
            (0, o.Zc)(
                'textAndImages',
                'gifAutoPlay',
                (e) => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
                },
                (e) => a.D5.create({ value: e })
            ),
            'text',
            'gifAutoPlay'
        ),
        'gifAutoPlay',
        () => {
            var e;
            return null === (e = l.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, r.e7)([l.Z], () => {
                var e;
                return null === (e = l.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eE = (0, o.R2)(
        (0, o.KM)(
            (0, o.Zc)(
                'textAndImages',
                'animateEmoji',
                (e) => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
                },
                (e) => a.D5.create({ value: e })
            ),
            'text',
            'animateEmoji'
        ),
        'animateEmoji',
        () => {
            var e;
            return null === (e = l.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, r.e7)([l.Z], () => {
                var e;
                return null === (e = l.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
            })
    ),
    ev = (0, o.R2)(
        (0, o.KM)(
            (0, o.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.yr.ALWAYS_ANIMATE;
                },
                (e) => a.yC.create({ value: e })
            ),
            'text',
            'animateStickers'
        ),
        'animateStickers',
        () => {
            var e;
            return null === (e = l.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, r.e7)([l.Z], () => {
                var e;
                return null === (e = l.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eI = [],
    eT = (0, o.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eI),
        (e) => e
    ),
    eb = [],
    eS = (0, o.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : eb),
        (e) => e
    ),
    ey = (0, o.Zc)(
        'privacy',
        'defaultGuildsActivityRestricted',
        (e) => e === i.E5.ON_FOR_LARGE_GUILDS,
        (e) => (!0 === e ? i.E5.ON_FOR_LARGE_GUILDS : i.E5.OFF)
    ),
    eA = (0, o.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => a.D5.create({ value: e })
    ),
    eN = (0, o.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    ),
    eC = (0, o.Zc)(
        'textAndImages',
        'explicitContentSettings',
        (e) => {
            let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = null != e ? e : {};
            return {
                explicitContentGuilds: null != t ? t : i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentFriendDm: null != n ? n : i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentNonFriendDm: null != r ? r : i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
            };
        },
        (e) => {
            let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = e;
            return {
                explicitContentGuilds: null != t ? t : void 0,
                explicitContentFriendDm: null != n ? n : void 0,
                explicitContentNonFriendDm: null != r ? r : void 0
            };
        }
    ),
    eR = (0, o.Zc)(
        'textAndImages',
        'keywordFilterSettings',
        (e) => {
            let { profanity: t, sexualContent: n, slurs: r } = null != e ? e : {};
            return {
                profanity: null == t ? void 0 : t.value,
                sexualContent: null == n ? void 0 : n.value,
                slurs: null == r ? void 0 : r.value
            };
        },
        (e) => {
            let { profanity: t, sexualContent: n, slurs: r } = e;
            return {
                profanity: a.D5.create({ value: t }),
                sexualContent: a.D5.create({ value: n }),
                slurs: a.D5.create({ value: r })
            };
        }
    );
(0, o.Zc)(
    'appearance',
    'searchResultExactCountEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => a.D5.create({ value: e })
),
    (0, o.Zc)(
        'appearance',
        'happeningNowCardsDisabled',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => a.D5.create({ value: e })
    );
let eO = (0, o.Zc)(
    'appearance',
    'timestampHourCycle',
    (e) => (null != e ? e : i.hg.AUTO),
    (e) => e
);
(0, o.Zc)(
    'appearance',
    'launchPadMode',
    (e) => (null != e ? e : i.l1.LAUNCH_PAD_DISABLED),
    (e) => e
);
let eD = (0, o.Zc)(
        'userContent',
        'lastReceivedChangelogId',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    eL = (0, o.Zc)(
        'safetySettings',
        'ignoreProfileSpeedbumpDisabled',
        (e) => null != e && e,
        (e) => e
    );
