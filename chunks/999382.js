let r, i, a, o, s, l, u, c;
var d,
    _ = n(47120);
var E = n(724458);
var f = n(392711),
    h = n.n(f),
    p = n(913527),
    m = n.n(p),
    I = n(442837),
    T = n(544891),
    g = n(433517),
    S = n(570140),
    A = n(749210),
    v = n(131704),
    N = n(601964),
    O = n(758449),
    R = n(598077),
    C = n(430824),
    y = n(594174),
    b = n(709054),
    L = n(372454),
    D = n(330010),
    M = n(981631),
    P = n(731455),
    U = n(135899);
function w(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let x = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'clan'],
    G = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    k = !1,
    B = M.QZA.CLOSED,
    F = {},
    Z = !1,
    V = null,
    H = null,
    Y = 0,
    j = M.BpS.NONE,
    W = null,
    K = {
        primaryCategoryId: P.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: P.Vb,
        partnerActionedTimestamp: null,
        partnerApplicationTimestamp: null,
        isPublished: !1,
        reasonsToJoin: [],
        socialLinks: [],
        about: ''
    },
    z = !1,
    q = K,
    Q = K,
    X = null,
    $ = 0,
    J = null,
    ee = null,
    et = null;
function en(e) {
    if (null == s || null == o || o.id !== e) return !1;
    let t = C.Z.getGuild(e);
    return null != t && (o === s ? (s = o = t) : (o = t), !0);
}
function er(e) {
    (k = !0), ei(e);
}
function ei(e) {
    var t;
    let { guildId: n, section: i, subsection: a, location: u } = e,
        d = C.Z.getGuild(n);
    if (null == d) return ea();
    (o = s = d), (B = M.QZA.OPEN), (F = {}), (l = b.default.castGuildIdAsEveryoneGuildRoleId(n)), (j = s.mfaLevel), (Q = q), (c = null), (W = u);
    es({
        section: null !== (t = null != i ? i : r) && void 0 !== t ? t : M.pNK.OVERVIEW,
        subsection: null != a ? a : null
    });
}
function ea() {
    (k = !1), (B = M.QZA.CLOSED), (o = s = null), (Z = !1), (V = null), (H = null), (Y = 0), (X = null), (ee = null), (et = null), (r = null), (i = null), (a = null), (j = M.BpS.NONE), (u = void 0);
}
function eo(e) {
    let { state: t } = e;
    return (u = t), !1;
}
function es(e) {
    if (null == s) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === M.pNK.BANS)) {
        let { enabled: e } = L.T.getCurrentConfig({
            guildId: s.id,
            location: '7f0c91_1'
        });
        !e && A.Z.fetchGuildBans(s.id);
    } else if (r === M.pNK.INSTANT_INVITES)
        T.tn
            .get({
                url: M.ANM.GUILD_INSTANT_INVITES(s.id),
                oldFormErrors: !0
            })
            .then((e) => {
                S.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (r === M.pNK.WIDGET)
        T.tn
            .get({
                url: M.ANM.GUILD_WIDGET(s.id),
                oldFormErrors: !0
            })
            .then((e) => {
                S.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_WIDGET',
                    enabled: e.body.enabled,
                    channelId: e.body.channel_id
                });
            });
    else if (r === M.pNK.INTEGRATIONS || r === M.pNK.ROLES) {
        if (((l = null), t !== e.section)) return eP(e);
    } else
        r === M.pNK.MEMBERS
            ? (l = s.getEveryoneRoleId())
            : r === M.pNK.VANITY_URL
              ? T.tn
                    .get({
                        url: M.ANM.GUILD_VANITY_URL(s.id),
                        oldFormErrors: !0
                    })
                    .then((e) => {
                        let {
                            body: { code: t, uses: n, error: r }
                        } = e;
                        S.Z.dispatch({
                            type: 'GUILD_SETTINGS_SET_VANITY_URL',
                            code: t,
                            uses: n,
                            error: r
                        });
                    })
              : r === M.pNK.SAFETY &&
                S.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == i ? M.KsC.SAFETY_OVERVIEW : i
                });
}
function el(e) {
    a = e.searchQuery;
}
function eu(e) {
    let { guildId: t } = e;
    F = {};
    let n = C.Z.getGuild(t);
    null != n && (o = s = n);
}
function ec() {
    (B = M.QZA.SUBMITTING), (F = {});
}
function ed() {
    B = M.QZA.OPEN;
}
function e_(e) {
    var t;
    (B = M.QZA.OPEN), (r = null != r ? r : M.pNK.OVERVIEW), (i = null), (F = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function eE() {
    if (null == s) return !1;
    let e = s.toJS(),
        t = o.toJS();
    !x.some((n) => e[n] !== t[n]) && (s = o);
}
function ef(e) {
    if (null == s) return !1;
    x.forEach((t) => {
        null != s && e.hasOwnProperty(t) && (s = s.set(t, e[t]));
    }),
        eE();
}
function eh(e) {
    var t;
    return new O.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new R.Z(e.inviter) : null,
        channel: (0, v.jD)(e.channel),
        guild: null != e.guild ? new N.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: m()(null !== (t = e.created_at) && void 0 !== t ? t : void 0)
    });
}
function ep(e) {
    ee = e.invites.reduce((e, t) => ((e[t.code] = eh(t)), e), {});
}
function em(e) {
    (ee = { ...ee }), delete ee[e.code];
}
function eI(e) {
    ee = {
        ...ee,
        [e.invite.code]: eh(e.invite)
    };
}
function eT(e) {
    (X = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), $++;
}
function eg(e) {
    let { bans: t, guildId: n } = e;
    (J !== n || null == X) && ((J = n), (X = new Map())), (X = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), X)), $++;
}
function eS(e) {
    let { user: t, guildId: n } = e;
    if (null == X || null == s || s.id !== n) return !1;
    X.set(t.id, {
        user: t,
        reason: null
    }),
        $++;
}
function eA(e) {
    let { user: t, guildId: n } = e;
    if (null == X || null == s || s.id !== n) return !1;
    X.delete(t.id), $++;
}
function ev(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    {
        let e = C.Z.getGuild(s.id);
        if (null == e) return !1;
        let t = (o = e),
            n = s.toJS();
        x.forEach((e) => {
            if (!G.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== U.b4)) {
                if ('features' === e) {
                    t.set(e, new Set(n[e]));
                    return;
                }
                t = t.set(e, n[e]);
            }
        }),
            (s = t);
    }
}
function eN(e) {
    if (null == s || s.id !== e.guild.id) return !1;
    ea();
}
function eO(e) {
    let { roleId: t } = e;
    l = null != t ? t : null;
}
function eR(e) {
    let { guildId: t } = e;
    if (!en(t)) return !1;
}
function eC(e) {
    let { guildId: t } = e;
    if (!en(t)) return !1;
}
function ey(e) {
    let { guildId: t, roleId: n } = e;
    if (!en(t)) return !1;
    l === n && (l = null);
}
function eb(e) {
    (Z = e.enabled), (V = e.channelId);
}
function eL(e) {
    var t;
    (H = null !== (t = e.code) && void 0 !== t ? t : null), (Y = e.uses);
}
function eD(e) {
    let { level: t } = e;
    j = t;
}
function eM(e) {
    et = e.integrations;
}
function eP(e) {
    if (null == s || B !== M.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== s.id)) return !1;
    (0, D.i)(s.id);
}
function eU(e) {
    var t, n, r, i, a, o, l, u, c, d;
    let { guildId: _, metadata: E } = e;
    null != s &&
        _ === s.id &&
        (!1 === z && (z = !0),
        (q = {
            primaryCategoryId: null !== (t = E.primaryCategoryId) && void 0 !== t ? t : P.o3,
            secondaryCategoryIds: null !== (n = E.secondaryCategoryIds) && void 0 !== n ? n : [],
            keywords: null !== (r = E.keywords) && void 0 !== r ? r : [],
            emojiDiscoverabilityEnabled: null !== (i = E.emojiDiscoverabilityEnabled) && void 0 !== i ? i : P.Vb,
            partnerActionedTimestamp: null !== (a = E.partnerActionedTimestamp) && void 0 !== a ? a : null,
            partnerApplicationTimestamp: null !== (o = E.partnerApplicationTimestamp) && void 0 !== o ? o : null,
            isPublished: null !== (l = E.isPublished) && void 0 !== l && l,
            reasonsToJoin: null !== (u = E.reasonsToJoin) && void 0 !== u ? u : [],
            socialLinks: null !== (c = E.socialLinks) && void 0 !== c ? c : [],
            about: null !== (d = E.about) && void 0 !== d ? d : ''
        }),
        (Q = q),
        (F = {}));
}
function ew() {
    q = Q = K;
}
function ex(e) {
    let { slug: t } = e;
    c = t;
}
function eG(e) {
    let {} = e;
    c = null;
}
function ek(e) {
    let { guildId: t, categoryId: n } = e;
    null != s &&
        t === s.id &&
        ((Q = {
            ...Q,
            secondaryCategoryIds: [...Q.secondaryCategoryIds, n]
        }),
        (q = {
            ...q,
            secondaryCategoryIds: [...q.secondaryCategoryIds, n]
        }));
}
function eB(e) {
    let t,
        { guildId: n, categoryId: r } = e;
    if (null == s || n !== s.id) return;
    let i = Q.secondaryCategoryIds.indexOf(r);
    -1 !== i &&
        ((t = [...Q.secondaryCategoryIds]).splice(i, 1),
        (Q = {
            ...Q,
            secondaryCategoryIds: t
        })),
        -1 !== (i = q.secondaryCategoryIds.indexOf(r)) &&
            ((t = [...q.secondaryCategoryIds]).splice(i, 1),
            (q = {
                ...q,
                secondaryCategoryIds: t
            }));
}
function eF(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (F = null != n ? n : {});
}
function eZ(e) {
    let { guildId: t, primaryCategoryId: n, keywords: r, emojiDiscoverabilityEnabled: i, isPublished: a, reasonsToJoin: o, socialLinks: l, about: u } = e;
    null != s &&
        t === s.id &&
        (Q = {
            ...Q,
            primaryCategoryId: null != n ? n : Q.primaryCategoryId,
            keywords: null != r ? r : Q.keywords,
            emojiDiscoverabilityEnabled: null != i ? i : Q.emojiDiscoverabilityEnabled,
            isPublished: null != a ? a : Q.isPublished,
            reasonsToJoin: null != o ? o : Q.reasonsToJoin,
            socialLinks: null != l ? l : Q.socialLinks,
            about: null != u ? u : Q.about
        });
}
function eV(e) {
    let { guildId: t, errors: n } = e;
    null != s && t === s.id && (F = null != n ? n : {});
}
class eH extends (d = I.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, y.default);
    }
    getMetadata() {
        return Q;
    }
    hasChanges() {
        return !h().isEqual(s, o) || !h().isEqual(Q, q);
    }
    isOpen() {
        return k;
    }
    getSavedRouteState() {
        return u;
    }
    getSection() {
        return r;
    }
    showNotice() {
        return this.hasChanges();
    }
    getGuildId() {
        return null != s ? s.id : null;
    }
    showPublicSuccessModal() {
        return !g.K.get(U.zs);
    }
    getGuild() {
        return s;
    }
    isSubmitting() {
        return B === M.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return z;
    }
    getErrors() {
        return F;
    }
    getSelectedRoleId() {
        return l;
    }
    getSlug() {
        return c;
    }
    getBans() {
        return [X, $];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: et,
            section: r,
            subsection: i,
            errors: F,
            guild: s,
            bans: X,
            bansVersion: $,
            invites: ee,
            selectedRoleId: l,
            embedEnabled: Z,
            embedChannelId: V,
            mfaLevel: j,
            searchQuery: a,
            vanityURLCode: H,
            vanityURLUses: Y,
            originalGuild: o,
            hasChanges: this.hasChanges(),
            guildMetadata: Q,
            analyticsLocation: W,
            isGuildMetadataLoaded: z
        };
    }
}
w(eH, 'displayName', 'GuildSettingsStore'),
    (t.Z = new eH(
        S.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_INIT: ei,
                  GUILD_SETTINGS_OPEN: er,
                  GUILD_SETTINGS_CLOSE: ea,
                  GUILD_SETTINGS_UPDATE: ef,
                  GUILD_SETTINGS_CANCEL_CHANGES: eu,
                  GUILD_SETTINGS_SAVE_ROUTE_STACK: eo,
                  GUILD_SETTINGS_SUBMIT: ec,
                  GUILD_SETTINGS_SUBMIT_SUCCESS: ed,
                  GUILD_SETTINGS_SUBMIT_FAILURE: e_,
                  GUILD_SETTINGS_SET_SECTION: es,
                  GUILD_SETTINGS_SET_SEARCH_QUERY: el,
                  GUILD_SETTINGS_LOADED_BANS: eT,
                  GUILD_SETTINGS_LOADED_BANS_BATCH: eg,
                  GUILD_SETTINGS_LOADED_INVITES: ep,
                  GUILD_SETTINGS_SET_WIDGET: eb,
                  GUILD_SETTINGS_SET_VANITY_URL: eL,
                  GUILD_SETTINGS_SET_MFA_SUCCESS: eD,
                  GUILD_SETTINGS_ROLE_SELECT: eO,
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: eM,
                  GUILD_BAN_ADD: eS,
                  GUILD_BAN_REMOVE: eA,
                  GUILD_ROLE_CREATE: eR,
                  GUILD_ROLE_UPDATE: eC,
                  GUILD_ROLE_DELETE: ey,
                  GUILD_UPDATE: ev,
                  GUILD_DELETE: eN,
                  USER_CONNECTIONS_UPDATE: eP,
                  GUILD_INTEGRATIONS_UPDATE: eP,
                  INSTANT_INVITE_REVOKE_SUCCESS: em,
                  INSTANT_INVITE_CREATE_SUCCESS: eI,
                  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: eU,
                  GUILD_DISCOVERY_METADATA_FETCH_FAIL: ew,
                  GUILD_DISCOVERY_CATEGORY_ADD: ek,
                  GUILD_DISCOVERY_CATEGORY_DELETE: eB,
                  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: eF,
                  GUILD_UPDATE_DISCOVERY_METADATA: eZ,
                  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: eV,
                  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: ex,
                  GUILD_DISCOVERY_SLUG_FETCH_FAIL: eG
              }
    ));
