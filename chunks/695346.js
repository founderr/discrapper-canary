n.d(t, {
    CM: function () {
        return Q;
    },
    Cr: function () {
        return eo;
    },
    D3: function () {
        return q;
    },
    DC: function () {
        return X;
    },
    Ex: function () {
        return eR;
    },
    Fg: function () {
        return Y;
    },
    G6: function () {
        return er;
    },
    H1: function () {
        return R;
    },
    I0: function () {
        return L;
    },
    L1: function () {
        return em;
    },
    NA: function () {
        return ed;
    },
    OW: function () {
        return ee;
    },
    Ok: function () {
        return es;
    },
    Ou: function () {
        return x;
    },
    Pe: function () {
        return U;
    },
    QK: function () {
        return eI;
    },
    QZ: function () {
        return g;
    },
    R$: function () {
        return f;
    },
    RS: function () {
        return ec;
    },
    R_: function () {
        return eC;
    },
    SE: function () {
        return eA;
    },
    Sb: function () {
        return ep;
    },
    Sh: function () {
        return ey;
    },
    T4: function () {
        return O;
    },
    UP: function () {
        return et;
    },
    Wp: function () {
        return eg;
    },
    Wz: function () {
        return eO;
    },
    Xc: function () {
        return P;
    },
    Xk: function () {
        return C;
    },
    Xr: function () {
        return en;
    },
    Yk: function () {
        return eT;
    },
    _O: function () {
        return N;
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
        return w;
    },
    co: function () {
        return ea;
    },
    d$: function () {
        return M;
    },
    d4: function () {
        return v;
    },
    dN: function () {
        return E;
    },
    eo: function () {
        return b;
    },
    ev: function () {
        return j;
    },
    fq: function () {
        return p;
    },
    fv: function () {
        return S;
    },
    fz: function () {
        return T;
    },
    gw: function () {
        return eL;
    },
    h2: function () {
        return V;
    },
    iG: function () {
        return Z;
    },
    iH: function () {
        return eN;
    },
    jU: function () {
        return W;
    },
    kJ: function () {
        return F;
    },
    kU: function () {
        return K;
    },
    l4: function () {
        return eb;
    },
    mX: function () {
        return B;
    },
    nc: function () {
        return e_;
    },
    qF: function () {
        return y;
    },
    rN: function () {
        return eE;
    },
    tU: function () {
        return el;
    },
    uL: function () {
        return D;
    },
    up: function () {
        return h;
    },
    vF: function () {
        return I;
    },
    x4: function () {
        return eu;
    },
    xM: function () {
        return $;
    },
    xq: function () {
        return H;
    },
    zA: function () {
        return k;
    }
});
var r = n(47120);
var i = n(442837),
    a = n(524437),
    o = n(381499),
    s = n(85746),
    l = n(560997),
    u = n(263937),
    c = n(973005),
    d = n(981631),
    _ = n(611480);
let E = (0, l.Zc)(
        'textAndImages',
        'useLegacyChatInput',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    f = (0, l.Zc)(
        'textAndImages',
        'useRichChatInput',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    h = (0, l.Zc)(
        'textAndImages',
        'expressionSuggestionsEnabled',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    p = (0, l.Zc)(
        'textAndImages',
        'includeStickersInAutocomplete',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    m = (0, l.Zc)(
        'textAndImages',
        'renderSpoilers',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.A2N.ON_CLICK;
        },
        (e) => o.Gm.create({ value: e })
    ),
    I = (0, l.Zc)(
        'textAndImages',
        'useThreadSidebar',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, l.Zc)(
    'notifications',
    'showInAppNotifications',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => o.D5.create({ value: e })
);
let T = (0, l.Zc)(
        'notifications',
        'reactionNotifications',
        (e) => (null != e ? e : a.Ns.NOTIFICATIONS_ENABLED),
        (e) => e
    ),
    g = (0, l.Zc)(
        'notifications',
        'quietMode',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: !!e })
    ),
    S = (0, l.Zc)(
        'notifications',
        'focusModeExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    A = [],
    v = (0, l.Zc)(
        'textAndImages',
        'emojiPickerCollapsedSections',
        (e) => (null != e ? e : A),
        (e) => e
    ),
    N = (0, l.Zc)(
        'textAndImages',
        'stickerPickerCollapsedSections',
        (e) => (null != e ? e : A),
        (e) => e
    ),
    O = (0, l.Zc)(
        'textAndImages',
        'soundboardPickerCollapsedSections',
        (e) => (null != e ? e : A),
        (e) => e
    ),
    R = (0, l.Zc)(
        'textAndImages',
        'viewImageDescriptions',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    C = (0, l.Zc)(
        'textAndImages',
        'showCommandSuggestions',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    y = (0, l.Zc)(
        'voiceAndVideo',
        'alwaysPreviewVideo',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    L = (0, l.Zc)(
        'voiceAndVideo',
        'disableStreamPreviews',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    b = (0, l.Zc)(
        'notifications',
        'notifyFriendsOnGoLive',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    D = '0',
    M = (0, l.Zc)(
        'notifications',
        'notificationCenterAckedBeforeId',
        (e) => (null != e ? e : D),
        (e) => e
    ),
    P = (0, l.Zc)(
        'gameLibrary',
        'installShortcutDesktop',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    U = (0, l.Zc)(
        'gameLibrary',
        'installShortcutStartMenu',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    w = (0, l.Zc)(
        'privacy',
        'allowActivityPartyPrivacyFriends',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    x = (0, l.Zc)(
        'privacy',
        'allowActivityPartyPrivacyVoiceChannel',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    G = [],
    k = (0, l.Zc)(
        'privacy',
        'messageRequestRestrictedGuildIds',
        (e) => (null != e ? e : G),
        (e) => e
    ),
    B = (0, l.Zc)(
        'privacy',
        'defaultMessageRequestRestricted',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    F = (0, l.Zc)(
        'privacy',
        'nonSpamRetrainingOptIn',
        (e) => (null == e ? void 0 : e.value),
        (e) => (null == e ? void 0 : o.D5.create({ value: e }))
    );
(0, l.Zc)(
    'privacy',
    'contactSyncEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => o.D5.create({ value: e })
);
let Z = (0, l.Zc)(
        'privacy',
        'defaultGuildsRestricted',
        (e) => null != e && e,
        (e) => e
    ),
    V = (0, l.Zc)(
        'privacy',
        'restrictedGuildIds',
        (e) => (null != e ? e : []),
        (e) => e
    );
(0, l.Zc)(
    'privacy',
    'friendDiscoveryFlags',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 0;
    },
    (e) => o.yC.create({ value: e })
);
let H = (0, l.Zc)(
        'privacy',
        'friendSourceFlags',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : d.HGf;
        },
        (e) => o.yC.create({ value: e })
    ),
    Y = (0, l.Zc)(
        'debug',
        'rtcPanelShowVoiceStates',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    j = (0, l.Zc)(
        'textAndImages',
        'convertEmoticons',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    W = (0, l.Zc)(
        'textAndImages',
        'messageDisplayCompact',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    K = (0, l.Zc)(
        'voiceAndVideo',
        'soundboardSettings',
        (e) => e,
        (e) => e
    );
(0, l.Zc)(
    'voiceAndVideo',
    'streamNotificationsEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => o.D5.create({ value: e })
);
let z = (0, l.Zc)(
        'privacy',
        'dropsOptedOut',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    q = (0, l.Zc)(
        'voiceAndVideo',
        'nativePhoneIntegrationEnabled',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    Q = (0, l.Zc)(
        'voiceAndVideo',
        'afkTimeout',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : 600;
        },
        (e) => o.yC.create({ value: e })
    ),
    X = (0, l.Zc)(
        'textAndImages',
        'viewNsfwGuilds',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    $ = (0, l.Zc)(
        'textAndImages',
        'viewNsfwCommands',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, l.Zc)(
    'privacy',
    'detectPlatformAccounts',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => o.D5.create({ value: e })
);
let J = (0, l.Zc)(
        'gameLibrary',
        'disableGamesTab',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    ee = (0, l.Zc)(
        'textAndImages',
        'enableTtsCommand',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    et = (0, l.Zc)(
        'textAndImages',
        'explicitContentFilter',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.TI.NON_FRIENDS;
        },
        (e) => o.yC.create({ value: e })
    );
(0, l.Zc)(
    'textAndImages',
    'dmSpamFilter',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : c.fQ.NON_FRIENDS;
    },
    (e) => o.yC.create({ value: e })
);
let en = (0, l.Zc)(
        'textAndImages',
        'dmSpamFilterV2',
        (e) => (null != e ? e : a.Xr.DEFAULT_UNSET),
        (e) => e
    ),
    er = (0, l.Zc)(
        'status',
        'showCurrentGame',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    );
(0, l.Zc)(
    'privacy',
    'recentGamesEnabled',
    (e) => {
        var t;
        return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
    },
    (e) => o.D5.create({ value: e })
);
let ei = new Set(Object.values(d.Skl)),
    ea = (0, l.Zc)(
        'status',
        'status',
        (e) => (null != e && ei.has(e.value) ? e.value : d.Skl.UNKNOWN),
        (e) => o.Gm.create({ value: e })
    ),
    eo = (0, l.Zc)(
        'status',
        'statusExpiresAtMs',
        (e) => (null != e ? e : '0'),
        (e) => e
    ),
    es = (0, l.Zc)(
        'status',
        'customStatus',
        (e) => e,
        (e) => e
    ),
    el = (0, l.Zc)(
        'clips',
        'allowVoiceRecording',
        (e) => {
            var t;
            return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
        },
        (e) => o.D5.create({ value: e })
    ),
    eu = (0, l.KM)(
        (0, l.Zc)(
            'textAndImages',
            'inlineAttachmentMedia',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'inlineAttachmentMedia'
    ),
    ec = (0, l.KM)(
        (0, l.Zc)(
            'textAndImages',
            'inlineEmbedMedia',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'inlineEmbedMedia'
    ),
    ed = (0, l.KM)(
        (0, l.Zc)(
            'textAndImages',
            'renderEmbeds',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'renderEmbeds'
    ),
    e_ = (0, l.KM)(
        (0, l.Zc)(
            'textAndImages',
            'renderReactions',
            (e) => {
                var t;
                return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
            },
            (e) => o.D5.create({ value: e })
        ),
        'text',
        'renderReactions'
    ),
    eE = (0, l.Zc)(
        'localization',
        'timezoneOffset',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : null;
        },
        (e) => o.T4.create({ value: null != e ? e : 0 })
    ),
    ef = new Set([s.l.COZY, s.l.COMPACT]);
(0, l.Zc)(
    'appearance',
    'channelListLayout',
    (e) => (null != e && ef.has(e.value) ? e.value : s.l.COZY),
    (e) => o.Gm.create({ value: e })
);
let eh = new Set([s.Z.ALL, s.Z.UNREADS, s.Z.NONE]);
(0, l.Zc)(
    'appearance',
    'messagePreviews',
    (e) => (null != e && eh.has(e.value) ? e.value : s.Z.ALL),
    (e) => o.Gm.create({ value: e })
);
let ep = (0, l.KM)(
        (0, l.Zc)(
            'appearance',
            'developerMode',
            (e) => null != e && e,
            (e) => e
        ),
        'appearance',
        'developerMode'
    ),
    em = (0, l.Zc)(
        'appearance',
        'clientThemeSettings',
        (e) => {
            var t;
            return { backgroundGradientPresetId: null == e ? void 0 : null === (t = e.backgroundGradientPresetId) || void 0 === t ? void 0 : t.value };
        },
        (e) => ({ backgroundGradientPresetId: null != e.backgroundGradientPresetId ? o.yC.create({ value: e.backgroundGradientPresetId }) : void 0 })
    ),
    eI = (0, l.R2)(
        (0, l.KM)(
            (0, l.Zc)(
                'textAndImages',
                'gifAutoPlay',
                (e) => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
                },
                (e) => o.D5.create({ value: e })
            ),
            'text',
            'gifAutoPlay'
        ),
        'gifAutoPlay',
        () => {
            var e;
            return null === (e = u.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([u.Z], () => {
                var e;
                return null === (e = u.Z.getOverride('gifAutoPlay')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eT = (0, l.R2)(
        (0, l.KM)(
            (0, l.Zc)(
                'textAndImages',
                'animateEmoji',
                (e) => {
                    var t;
                    return null === (t = null == e ? void 0 : e.value) || void 0 === t || t;
                },
                (e) => o.D5.create({ value: e })
            ),
            'text',
            'animateEmoji'
        ),
        'animateEmoji',
        () => {
            var e;
            return null === (e = u.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([u.Z], () => {
                var e;
                return null === (e = u.Z.getOverride('animateEmoji')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eg = (0, l.R2)(
        (0, l.KM)(
            (0, l.Zc)(
                'textAndImages',
                'animateStickers',
                (e) => {
                    var t;
                    return null !== (t = null == e ? void 0 : e.value) && void 0 !== t ? t : _.yr.ALWAYS_ANIMATE;
                },
                (e) => o.yC.create({ value: e })
            ),
            'text',
            'animateStickers'
        ),
        'animateStickers',
        () => {
            var e;
            return null === (e = u.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
        },
        () =>
            (0, i.e7)([u.Z], () => {
                var e;
                return null === (e = u.Z.getOverride('animateStickers')) || void 0 === e ? void 0 : e.value;
            })
    ),
    eS = [],
    eA = (0, l.Zc)(
        'privacy',
        'activityRestrictedGuildIds',
        (e) => (null != e ? e : eS),
        (e) => e
    ),
    ev = [],
    eN = (0, l.Zc)(
        'privacy',
        'activityJoiningRestrictedGuildIds',
        (e) => (null != e ? e : ev),
        (e) => e
    ),
    eO = (0, l.Zc)(
        'privacy',
        'defaultGuildsActivityRestricted',
        (e) => e === a.E5.ON_FOR_LARGE_GUILDS,
        (e) => (!0 === e ? a.E5.ON_FOR_LARGE_GUILDS : a.E5.OFF)
    ),
    eR = (0, l.Zc)(
        'privacy',
        'familyCenterEnabledV2',
        (e) => (null == e ? void 0 : e.value),
        (e) => o.D5.create({ value: e })
    ),
    eC = (0, l.Zc)(
        'privacy',
        'hideLegacyUsername',
        (e) => {
            var t;
            return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
        },
        (e) => o.D5.create({ value: e })
    ),
    ey = (0, l.Zc)(
        'textAndImages',
        'explicitContentSettings',
        (e) => {
            let { explicitContentGuilds: t, explicitContentFriendDm: n, explicitContentNonFriendDm: r } = null != e ? e : {};
            return {
                explicitContentGuilds: null != t ? t : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentFriendDm: null != n ? n : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION,
                explicitContentNonFriendDm: null != r ? r : a.Q4.UNSET_EXPLICIT_CONTENT_REDACTION
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
    eL = (0, l.Zc)(
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
                profanity: o.D5.create({ value: t }),
                sexualContent: o.D5.create({ value: n }),
                slurs: o.D5.create({ value: r })
            };
        }
    );
(0, l.Zc)(
    'appearance',
    'searchResultExactCountEnabled',
    (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.value) && void 0 !== t && t;
    },
    (e) => o.D5.create({ value: e })
);
let eb = (0, l.Zc)(
    'userContent',
    'lastReceivedChangelogId',
    (e) => (null != e ? e : '0'),
    (e) => e
);
