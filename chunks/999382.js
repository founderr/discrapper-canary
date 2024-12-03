let r, i, a, s, o, l, u, c;
n(47120), n(724458);
var d,
    f,
    _,
    p,
    h = n(392711),
    m = n.n(h),
    g = n(913527),
    E = n.n(g),
    v = n(442837),
    I = n(544891),
    T = n(433517),
    b = n(570140),
    S = n(749210),
    y = n(131704),
    A = n(601964),
    N = n(758449),
    C = n(598077),
    R = n(430824),
    O = n(594174),
    D = n(709054),
    L = n(372454),
    x = n(330010),
    w = n(981631),
    P = n(128449),
    M = n(135899);
let k = ['name', 'description', 'icon', 'splash', 'banner', 'homeHeader', 'afkChannelId', 'afkTimeout', 'systemChannelId', 'verificationLevel', 'defaultMessageNotifications', 'explicitContentFilter', 'features', 'systemChannelFlags', 'preferredLocale', 'rulesChannelId', 'safetyAlertsChannelId', 'discoverySplash', 'publicUpdatesChannelId', 'premiumProgressBarEnabled', 'clan'],
    U = new Set(['icon', 'splash', 'banner', 'discoverySplash', 'homeHeader']),
    B = !1,
    G = w.QZA.CLOSED,
    Z = {},
    F = !1,
    V = null,
    j = null,
    H = 0,
    Y = w.BpS.NONE,
    W = null,
    K = {
        primaryCategoryId: P.o3,
        secondaryCategoryIds: [],
        keywords: [],
        emojiDiscoverabilityEnabled: !0,
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
    J = 0,
    $ = null,
    ee = null,
    et = null;
function en(e) {
    if (null == o || null == s || s.id !== e) return !1;
    let t = R.Z.getGuild(e);
    return null != t && (s === o ? (o = s = t) : (s = t), !0);
}
function er(e) {
    var t;
    let { guildId: n, section: i, subsection: a, location: u } = e,
        d = R.Z.getGuild(n);
    if (null == d) return ei();
    (s = o = d), (G = w.QZA.OPEN), (Z = {}), (l = D.default.castGuildIdAsEveryoneGuildRoleId(n)), (Y = o.mfaLevel), (Q = q), (c = null), (W = u);
    ea({
        section: null !== (t = null != i ? i : r) && void 0 !== t ? t : w.pNK.OVERVIEW,
        subsection: null != a ? a : null
    });
}
function ei() {
    (B = !1), (G = w.QZA.CLOSED), (s = o = null), (F = !1), (V = null), (j = null), (H = 0), (X = null), (ee = null), (et = null), (r = null), (i = null), (a = null), (Y = w.BpS.NONE), (u = void 0);
}
function ea(e) {
    if (null == o) return !1;
    let t = r;
    if (((r = e.section), (i = e.subsection), r === w.pNK.BANS)) {
        let { enabled: e } = L.T.getCurrentConfig({
            guildId: o.id,
            location: '7f0c91_1'
        });
        !e && S.Z.fetchGuildBans(o.id);
    } else if (r === w.pNK.INSTANT_INVITES)
        I.tn
            .get({
                url: w.ANM.GUILD_INSTANT_INVITES(o.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                b.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_INVITES',
                    invites: e.body
                });
            });
    else if (r === w.pNK.WIDGET)
        I.tn
            .get({
                url: w.ANM.GUILD_WIDGET(o.id),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((e) => {
                b.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_WIDGET',
                    enabled: e.body.enabled,
                    channelId: e.body.channel_id
                });
            });
    else if (r === w.pNK.INTEGRATIONS || r === w.pNK.ROLES) {
        if (((l = null), t !== e.section)) return eo(e);
    } else
        r === w.pNK.MEMBERS
            ? (l = o.getEveryoneRoleId())
            : r === w.pNK.VANITY_URL
              ? I.tn
                    .get({
                        url: w.ANM.GUILD_VANITY_URL(o.id),
                        oldFormErrors: !0,
                        rejectWithError: !0
                    })
                    .then((e) => {
                        let {
                            body: { code: t, uses: n, error: r }
                        } = e;
                        b.Z.dispatch({
                            type: 'GUILD_SETTINGS_SET_VANITY_URL',
                            code: t,
                            uses: n,
                            error: r
                        });
                    })
              : r === w.pNK.SAFETY &&
                b.Z.dispatch({
                    type: 'GUILD_SETTINGS_SAFETY_SET_SUBSECTION',
                    subsection: null == i ? w.KsC.SAFETY_OVERVIEW : i
                });
}
function es(e) {
    var t;
    return new N.Z({
        code: e.code,
        temporary: e.temporary,
        revoked: e.revoked,
        inviter: null != e.inviter ? new C.Z(e.inviter) : null,
        channel: (0, y.jD)(e.channel),
        guild: null != e.guild ? new A.ZP(e.guild) : null,
        uses: e.uses,
        maxUses: e.max_uses,
        maxAge: e.max_age,
        createdAt: E()(null !== (t = e.created_at) && void 0 !== t ? t : void 0)
    });
}
function eo(e) {
    if (null == o || G !== w.QZA.OPEN || ('GUILD_INTEGRATIONS_UPDATE' === e.type && e.guildId !== o.id)) return !1;
    (0, x.i)(o.id);
}
class el extends (d = v.ZP.Store) {
    initialize() {
        this.waitFor(R.Z, O.default);
    }
    getMetadata() {
        return Q;
    }
    hasChanges() {
        return !m().isEqual(o, s) || !m().isEqual(Q, q);
    }
    isOpen() {
        return B;
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
        return null != o ? o.id : null;
    }
    showPublicSuccessModal() {
        return !T.K.get(M.zs);
    }
    getGuild() {
        return o;
    }
    isSubmitting() {
        return G === w.QZA.SUBMITTING;
    }
    isGuildMetadataLoaded() {
        return z;
    }
    getErrors() {
        return Z;
    }
    getSelectedRoleId() {
        return l;
    }
    getSlug() {
        return c;
    }
    getBans() {
        return [X, J];
    }
    getProps() {
        return {
            submitting: this.isSubmitting(),
            integrations: et,
            section: r,
            subsection: i,
            errors: Z,
            guild: o,
            bans: X,
            bansVersion: J,
            invites: ee,
            selectedRoleId: l,
            embedEnabled: F,
            embedChannelId: V,
            mfaLevel: Y,
            searchQuery: a,
            vanityURLCode: j,
            vanityURLUses: H,
            originalGuild: s,
            hasChanges: this.hasChanges(),
            guildMetadata: Q,
            analyticsLocation: W,
            isGuildMetadataLoaded: z
        };
    }
}
(p = 'GuildSettingsStore'),
    (_ = 'displayName') in (f = el)
        ? Object.defineProperty(f, _, {
              value: p,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (f[_] = p),
    (t.Z = new el(
        b.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_INIT: er,
                  GUILD_SETTINGS_OPEN: function (e) {
                      (B = !0), er(e);
                  },
                  GUILD_SETTINGS_CLOSE: ei,
                  GUILD_SETTINGS_UPDATE: function (e) {
                      if (null == o) return !1;
                      k.forEach((t) => {
                          null != o && e.hasOwnProperty(t) && (o = o.set(t, e[t]));
                      }),
                          !(function () {
                              if (null == o) return;
                              let e = o.toJS(),
                                  t = s.toJS();
                              !k.some((n) => e[n] !== t[n]) && (o = s);
                          })();
                  },
                  GUILD_SETTINGS_CANCEL_CHANGES: function (e) {
                      let { guildId: t } = e;
                      Z = {};
                      let n = R.Z.getGuild(t);
                      null != n && (s = o = n);
                  },
                  GUILD_SETTINGS_SAVE_ROUTE_STACK: function (e) {
                      let { state: t } = e;
                      return (u = t), !1;
                  },
                  GUILD_SETTINGS_SUBMIT: function () {
                      (G = w.QZA.SUBMITTING), (Z = {});
                  },
                  GUILD_SETTINGS_SUBMIT_SUCCESS: function () {
                      G = w.QZA.OPEN;
                  },
                  GUILD_SETTINGS_SUBMIT_FAILURE: function (e) {
                      var t;
                      (G = w.QZA.OPEN), (r = null != r ? r : w.pNK.OVERVIEW), (i = null), (Z = null !== (t = e.errors) && void 0 !== t ? t : {});
                  },
                  GUILD_SETTINGS_SET_SECTION: ea,
                  GUILD_SETTINGS_SET_SEARCH_QUERY: function (e) {
                      a = e.searchQuery;
                  },
                  GUILD_SETTINGS_LOADED_BANS: function (e) {
                      (X = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map())), J++;
                  },
                  GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
                      let { bans: t, guildId: n } = e;
                      ($ !== n || null == X) && (($ = n), (X = new Map())), (X = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), X)), J++;
                  },
                  GUILD_SETTINGS_LOADED_INVITES: function (e) {
                      ee = e.invites.reduce((e, t) => ((e[t.code] = es(t)), e), {});
                  },
                  GUILD_SETTINGS_SET_WIDGET: function (e) {
                      (F = e.enabled), (V = e.channelId);
                  },
                  GUILD_SETTINGS_SET_VANITY_URL: function (e) {
                      var t;
                      (j = null !== (t = e.code) && void 0 !== t ? t : null), (H = e.uses);
                  },
                  GUILD_SETTINGS_SET_MFA_SUCCESS: function (e) {
                      let { level: t } = e;
                      Y = t;
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { roleId: t } = e;
                      l = null != t ? t : null;
                  },
                  GUILD_SETTINGS_LOADED_INTEGRATIONS: function (e) {
                      et = e.integrations;
                  },
                  GUILD_BAN_ADD: function (e) {
                      let { user: t, guildId: n } = e;
                      if (null == X || null == o || o.id !== n) return !1;
                      X.set(t.id, {
                          user: t,
                          reason: null
                      }),
                          J++;
                  },
                  GUILD_BAN_REMOVE: function (e) {
                      let { user: t, guildId: n } = e;
                      if (null == X || null == o || o.id !== n) return !1;
                      X.delete(t.id), J++;
                  },
                  GUILD_ROLE_CREATE: function (e) {
                      let { guildId: t } = e;
                      if (!en(t)) return !1;
                  },
                  GUILD_ROLE_UPDATE: function (e) {
                      let { guildId: t } = e;
                      if (!en(t)) return !1;
                  },
                  GUILD_ROLE_DELETE: function (e) {
                      let { guildId: t, roleId: n } = e;
                      if (!en(t)) return !1;
                      l === n && (l = null);
                  },
                  GUILD_UPDATE: function (e) {
                      if (null == o || o.id !== e.guild.id) return !1;
                      {
                          let e = R.Z.getGuild(o.id);
                          if (null == e) return !1;
                          let t = (s = e),
                              n = o.toJS();
                          k.forEach((e) => {
                              if (!U.has(e) && (('rulesChannelId' !== e && 'publicUpdatesChannelId' !== e) || n[e] !== M.b4)) {
                                  if ('features' === e) {
                                      t.set(e, new Set(n[e]));
                                      return;
                                  }
                                  t = t.set(e, n[e]);
                              }
                          }),
                              (o = t);
                      }
                  },
                  GUILD_DELETE: function (e) {
                      if (null == o || o.id !== e.guild.id) return !1;
                      ei();
                  },
                  USER_CONNECTIONS_UPDATE: eo,
                  GUILD_INTEGRATIONS_UPDATE: eo,
                  INSTANT_INVITE_REVOKE_SUCCESS: function (e) {
                      (ee = { ...ee }), delete ee[e.code];
                  },
                  INSTANT_INVITE_CREATE_SUCCESS: function (e) {
                      ee = {
                          ...ee,
                          [e.invite.code]: es(e.invite)
                      };
                  },
                  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function (e) {
                      var t, n, r, i, a, s, l, u, c, d;
                      let { guildId: f, metadata: _ } = e;
                      null != o &&
                          f === o.id &&
                          (!1 === z && (z = !0),
                          (Q = q =
                              {
                                  primaryCategoryId: null !== (t = _.primaryCategoryId) && void 0 !== t ? t : P.o3,
                                  secondaryCategoryIds: null !== (n = _.secondaryCategoryIds) && void 0 !== n ? n : [],
                                  keywords: null !== (r = _.keywords) && void 0 !== r ? r : [],
                                  emojiDiscoverabilityEnabled: null === (i = _.emojiDiscoverabilityEnabled) || void 0 === i || i,
                                  partnerActionedTimestamp: null !== (a = _.partnerActionedTimestamp) && void 0 !== a ? a : null,
                                  partnerApplicationTimestamp: null !== (s = _.partnerApplicationTimestamp) && void 0 !== s ? s : null,
                                  isPublished: null !== (l = _.isPublished) && void 0 !== l && l,
                                  reasonsToJoin: null !== (u = _.reasonsToJoin) && void 0 !== u ? u : [],
                                  socialLinks: null !== (c = _.socialLinks) && void 0 !== c ? c : [],
                                  about: null !== (d = _.about) && void 0 !== d ? d : ''
                              }),
                          (Z = {}));
                  },
                  GUILD_DISCOVERY_METADATA_FETCH_FAIL: function () {
                      q = Q = K;
                  },
                  GUILD_DISCOVERY_CATEGORY_ADD: function (e) {
                      let { guildId: t, categoryId: n } = e;
                      null != o &&
                          t === o.id &&
                          ((Q = {
                              ...Q,
                              secondaryCategoryIds: [...Q.secondaryCategoryIds, n]
                          }),
                          (q = {
                              ...q,
                              secondaryCategoryIds: [...q.secondaryCategoryIds, n]
                          }));
                  },
                  GUILD_DISCOVERY_CATEGORY_DELETE: function (e) {
                      let t,
                          { guildId: n, categoryId: r } = e;
                      if (null == o || n !== o.id) return;
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
                  },
                  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function (e) {
                      let { guildId: t, errors: n } = e;
                      null != o && t === o.id && (Z = null != n ? n : {});
                  },
                  GUILD_UPDATE_DISCOVERY_METADATA: function (e) {
                      let { guildId: t, primaryCategoryId: n, keywords: r, emojiDiscoverabilityEnabled: i, isPublished: a, reasonsToJoin: s, socialLinks: l, about: u } = e;
                      null != o &&
                          t === o.id &&
                          (Q = {
                              ...Q,
                              primaryCategoryId: null != n ? n : Q.primaryCategoryId,
                              keywords: null != r ? r : Q.keywords,
                              emojiDiscoverabilityEnabled: null != i ? i : Q.emojiDiscoverabilityEnabled,
                              isPublished: null != a ? a : Q.isPublished,
                              reasonsToJoin: null != s ? s : Q.reasonsToJoin,
                              socialLinks: null != l ? l : Q.socialLinks,
                              about: null != u ? u : Q.about
                          });
                  },
                  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function (e) {
                      let { guildId: t, errors: n } = e;
                      null != o && t === o.id && (Z = null != n ? n : {});
                  },
                  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function (e) {
                      let { slug: t } = e;
                      c = t;
                  },
                  GUILD_DISCOVERY_SLUG_FETCH_FAIL: function (e) {
                      let {} = e;
                      c = null;
                  }
              }
    ));
