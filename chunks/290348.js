t.d(n, {
    B7: function () {
        return ee;
    },
    Ek: function () {
        return D;
    },
    F2: function () {
        return z;
    },
    GM: function () {
        return X;
    },
    GP: function () {
        return j;
    },
    H9: function () {
        return q;
    },
    Lo: function () {
        return K;
    },
    PK: function () {
        return x;
    },
    R7: function () {
        return k;
    },
    TT: function () {
        return W;
    },
    UE: function () {
        return F;
    },
    XZ: function () {
        return V;
    },
    Xo: function () {
        return $;
    },
    _T: function () {
        return L;
    },
    d9: function () {
        return y;
    },
    mR: function () {
        return M;
    },
    p9: function () {
        return Z;
    },
    qs: function () {
        return U;
    },
    rU: function () {
        return Y;
    }
}),
    t(47120);
var i = t(192379),
    r = t(512722),
    l = t.n(r),
    o = t(392711),
    u = t(772848),
    a = t(866442),
    s = t(731965),
    c = t(442837),
    d = t(80932),
    f = t(749210),
    p = t(339085),
    _ = t(73346),
    E = t(817460),
    g = t(423117),
    m = t(584825),
    h = t(289393),
    I = t(790285),
    S = t(303737),
    v = t(971792),
    C = t(22902),
    T = t(403474),
    N = t(944537),
    b = t(293810),
    A = t(981631),
    O = t(474936);
function P(e, n, t) {
    let r = (0, N.n)((e) => e.setListing),
        l = i.useCallback(
            (i) => {
                r(e, (e) => {
                    var r;
                    let l = null !== (r = null == e ? void 0 : e[n]) && void 0 !== r ? r : t;
                    return Object.assign({}, e, { [n]: 'function' == typeof i ? i(l) : i });
                });
            },
            [r, e, n, t]
        ),
        o = (0, N.n)((t) => {
            var i;
            return null === (i = t.listings[e]) || void 0 === i ? void 0 : i[n];
        });
    return [void 0 !== o ? o : t, l];
}
function R(e, n) {
    let t = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(e));
    return i.useMemo(() => n(t), [t]);
}
function L(e) {
    let n = R(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '';
    });
    return P(e, 'name', n);
}
function M(e) {
    let n = R(e, (e) => {
        var n;
        return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
    });
    return P(e, 'priceTier', n);
}
function x(e) {
    let n = R(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '';
    });
    return P(e, 'description', n);
}
function y(e, n) {
    let t = R(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, _._W)(e.application_id, e.image_asset, n);
    });
    return P(e, 'image', t);
}
function Z(e, n) {
    let t = (0, v.Z)(n, e);
    return P(
        e,
        'roleIcon',
        i.useMemo(() => {
            var e, n;
            return {
                icon: null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : void 0,
                unicodeEmoji: null !== (n = null == t ? void 0 : t.unicodeEmoji) && void 0 !== n ? n : void 0
            };
        }, [t])
    );
}
function U(e, n) {
    let t = (0, v.Z)(n, e),
        r = (0, N.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor;
        }),
        l = (0, N.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon;
        });
    return i.useMemo(() => {
        let e = { ...(null != t ? t : T.k) };
        if (void 0 !== l) {
            var n, i;
            (e.icon = null !== (n = l.icon) && void 0 !== n ? n : ''), (e.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((e.color = r), (e.colorString = (0, a.Rf)(r))), e;
    }, [t, l, r]);
}
function D(e, n) {
    let t = (0, v.Z)(n, e);
    return P(
        e,
        'roleColor',
        i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : A.p6O;
        }, [t])
    );
}
function j(e, n) {
    let t = (0, v.Z)(n, e);
    return P(
        e,
        'channelAccessFormat',
        i.useMemo(() => (null == t ? N.I.SOME_CHANNELS_ACCESS : (0, I.MT)(t) ? N.I.ALL_CHANNELS_ACCESS : N.I.SOME_CHANNELS_ACCESS), [t])
    );
}
let w = [];
function F(e) {
    let n = R(e, (e) => (null == e ? w : e.role_benefits.benefits.filter(E.rC)));
    return P(e, 'channelBenefits', n);
}
let G = [];
function k(e) {
    let n = R(e, (e) => (null == e ? G : e.role_benefits.benefits.filter(E.lL)));
    return P(e, 'intangibleBenefits', n);
}
let H = new Set();
function B(e, n) {
    return 0 === e.length
        ? H
        : new Set(
              e
                  .filter((e) => e.roles.includes(n))
                  .map((e) => {
                      let { id: n } = e;
                      return n;
                  })
          );
}
function V(e, n) {
    let t = (0, v.Z)(n, e),
        r = (0, c.Wu)([p.ZP], () => p.ZP.getGuildEmoji(n), [n]);
    return P(
        e,
        'tierEmojiIds',
        i.useMemo(() => (null == t ? H : B(r, t.id)), [r, t])
    );
}
function W(e) {
    var n;
    let t = (0, m.oC)(e),
        { selectedOption: i } = (0, C.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
    return P(e, 'trialInterval', null != i ? i : null);
}
function z(e) {
    var n;
    let t = (0, m.oC)(e);
    return P(e, 'trialLimit', null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null);
}
function Y(e) {
    return (0, N.n)((n) => void 0 !== n.listings[e]);
}
function K(e) {
    return (0, N.n)((n) => {
        for (let t of e) if (void 0 !== n.listings[t]) return !0;
        return !1;
    });
}
function q(e) {
    let n = R(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [t] = P(e, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var e, i, r, l, o;
            return {
                price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
                currency: null !== (i = null == n ? void 0 : n.currency) && void 0 !== i ? i : A.pKx.USD,
                interval: null !== (r = null == n ? void 0 : n.interval) && void 0 !== r ? r : O.rV.MONTH,
                interval_count: null !== (l = null == n ? void 0 : n.interval_count) && void 0 !== l ? l : 1,
                id: null !== (o = null == n ? void 0 : n.id) && void 0 !== o ? o : ''
            };
        }, [n, t])
    ];
}
function X(e) {
    var n;
    (n = e),
        (0, s.j)(() => {
            N.n.setState((e) => ({
                listings: {
                    ...e.listings,
                    [n]: e.listings.nonexistantEditStateId
                }
            }));
        });
}
async function J(e) {
    let { guildId: n, editStateId: t } = e,
        i = h.Z.getSubscriptionListing(t);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        u = i.id,
        a = N.n.getState().listings[t];
    l()(null != a, 'edit state does not exist');
    let { roleColor: s, roleIcon: c, trialLimit: _, trialInterval: E, tierEmojiIds: m } = a;
    (void 0 !== s || void 0 !== c) &&
        (await f.Z.updateRole(n, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let I = h.Z.getSubscriptionTrial(u);
    if (
        ((null != _ || null != E || (null != I && null == E)) &&
            (await g.I1(n, u, {
                trial: E,
                max_num_active_trial_users: _
            })),
        void 0 !== m)
    ) {
        let e = B(p.ZP.getGuildEmoji(n), r),
            t = (0, o.difference)([...m], [...e]),
            i = (0, o.difference)([...e], [...m]),
            l = t
                .map((e) => p.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: n,
                            emojiId: e.id,
                            roles: [...e.roles, r]
                        });
                }),
            u = i
                .map((e) => p.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let t = e.roles.filter((e) => e !== r);
                    return t.length > 0
                        ? (0, d.dv)({
                              guildId: n,
                              emojiId: e.id,
                              roles: t
                          })
                        : (0, d.RE)(n, e.id);
                });
        await Promise.all([...l, ...u]);
    }
}
async function Q(e) {
    let { guildId: n, editStateId: t, groupListingId: i, onBeforeDispatchNewListing: r } = e,
        o = N.n.getState().listings[t];
    l()(null != o, 'edit state does not exist');
    let { name: u, description: a, channelBenefits: s, intangibleBenefits: c, priceTier: d, image: f, channelAccessFormat: p } = o;
    l()(null != u, 'no name provided'), l()(null != a, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != f, 'no image provided');
    let _ = p === N.I.ALL_CHANNELS_ACCESS,
        E = i;
    null == E && (E = (await g.uw(n, {})).id), null != s && s.length > 0 && (await (0, S.r4)(n, s));
    let m = [...(null != s ? s : []), ...(null != c ? c : [])],
        h = (0, S.yL)(t, n);
    return g.dA({
        guildId: n,
        groupListingId: E,
        data: {
            can_access_all_channels: _,
            image: f,
            name: u,
            description: a,
            benefits: m,
            priceTier: d
        },
        analyticsContext: h,
        onBeforeDispatchNewListing: r
    });
}
function $() {
    let [e, n] = i.useState(!1),
        [t, r] = i.useState();
    return {
        loading: e,
        error: t,
        handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let { guildId: t, editStateId: i, groupListingId: u, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: c } = e,
                d = i,
                f = h.Z.getSubscriptionListing(d);
            try {
                if ((n(!0), r(void 0), null != f))
                    l()(null != u, 'groupListingId is null'),
                        await (function (e) {
                            var n;
                            let { guildId: t, editStateId: i, groupListingId: r } = e,
                                u = h.Z.getSubscriptionListing(i);
                            l()(null != u, 'listing doesnt exist');
                            let a = N.n.getState().listings[i];
                            l()(null != a, 'edit state does not exist');
                            let { name: s, description: c, channelBenefits: d, intangibleBenefits: f, priceTier: p, image: _, channelAccessFormat: m } = a,
                                I = {};
                            if ((s !== u.name && (I.name = s), c !== u.description && (I.description = c), p !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (I.priceTier = p), null != _ && (I.image = _), null != m && (I.can_access_all_channels = m === N.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let e = u.role_benefits.benefits.filter(E.rC),
                                    n = u.role_benefits.benefits.filter(E.lL),
                                    t = [...(null != d ? d : e), ...(null != f ? f : n)];
                                I.benefits = t;
                            }
                            return (0, o.isEmpty)(I)
                                ? u
                                : g.O0({
                                      guildId: t,
                                      groupListingId: r,
                                      listingId: i,
                                      data: I
                                  });
                        })({
                            guildId: t,
                            editStateId: d,
                            groupListingId: u
                        });
                else {
                    var p, _;
                    let e = await Q({
                        guildId: t,
                        editStateId: d,
                        groupListingId: u,
                        onBeforeDispatchNewListing: a
                    });
                    (d = e.id),
                        (p = i),
                        (_ = d),
                        (0, s.j)(() => {
                            N.n.setState((e) => ({
                                listings: {
                                    ...e.listings,
                                    [_]: e.listings[p],
                                    [p]: void 0
                                }
                            }));
                        }),
                        null == c || c(e);
                }
                return (
                    await J({
                        guildId: t,
                        editStateId: d
                    }),
                    X(d),
                    !0
                );
            } catch (e) {
                if (!('getAnyErrorMessage' in e)) throw e;
                r(e);
            } finally {
                n(!1);
            }
        }, [])
    };
}
function ee(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        r = (0, m._k)(e, t),
        l = (0, N.n)((e) => e.editStateIdsForGroup[n]),
        o = (0, N.n)((e) => e.setEditStateIdsForGroup),
        a = (0, N.n)((e) => e.setListing),
        s = i.useMemo(
            () => [
                ...r.map((e) => {
                    let { id: n } = e;
                    return n;
                }),
                ...(null != l ? l : [])
            ],
            [l, r]
        ),
        c = i.useCallback(() => {
            let e = (0, u.Z)();
            o(n, (n) => [...(null != n ? n : []), e]);
        }, [n, o]),
        d = i.useCallback(
            (e) => {
                let t = (0, u.Z)();
                return (
                    o(n, (e) => [...(null != e ? e : []), t]),
                    e.listings.forEach((n) => {
                        a(t, () => ({
                            name: n.name,
                            description: n.description,
                            priceTier: n.price_tier,
                            image: n.image,
                            intangibleBenefits: n.additional_perks,
                            channelBenefits: n.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: b.Qs.CHANNEL,
                                description: e.description,
                                name: e.name,
                                emoji_name: e.emoji_name
                            })),
                            roleIcon: {
                                unicodeEmoji: void 0,
                                icon: n.image
                            },
                            roleColor: n.role_color,
                            usedTemplate: e.category
                        }));
                    }),
                    t
                );
            },
            [n, o, a]
        );
    return {
        editStateIds: s,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: d,
        removeEditStateId: i.useCallback(
            (e) => {
                o(n, (n) => (null != n ? n : []).filter((n) => n !== e));
            },
            [n, o]
        )
    };
}
