t.d(n, {
    B7: function () {
        return ee;
    },
    Ek: function () {
        return x;
    },
    F2: function () {
        return Y;
    },
    GM: function () {
        return X;
    },
    GP: function () {
        return G;
    },
    H9: function () {
        return J;
    },
    Lo: function () {
        return z;
    },
    PK: function () {
        return Z;
    },
    R7: function () {
        return B;
    },
    TT: function () {
        return V;
    },
    UE: function () {
        return j;
    },
    XZ: function () {
        return W;
    },
    Xo: function () {
        return $;
    },
    _T: function () {
        return D;
    },
    d9: function () {
        return b;
    },
    mR: function () {
        return U;
    },
    p9: function () {
        return P;
    },
    qs: function () {
        return y;
    },
    rU: function () {
        return K;
    }
}),
    t(47120);
var r = t(192379),
    i = t(512722),
    l = t.n(i),
    o = t(392711),
    u = t(772848),
    s = t(866442),
    a = t(731965),
    c = t(442837),
    d = t(80932),
    _ = t(749210),
    E = t(339085),
    f = t(73346),
    I = t(817460),
    S = t(423117),
    p = t(584825),
    T = t(289393),
    C = t(790285),
    g = t(303737),
    N = t(971792),
    m = t(22902),
    A = t(403474),
    h = t(944537),
    v = t(293810),
    L = t(981631),
    O = t(474936);
function R(e, n, t) {
    let i = (0, h.n)((e) => e.setListing),
        l = r.useCallback(
            (r) => {
                i(e, (e) => {
                    var i;
                    let l = null !== (i = null == e ? void 0 : e[n]) && void 0 !== i ? i : t;
                    return Object.assign({}, e, { [n]: 'function' == typeof r ? r(l) : r });
                });
            },
            [i, e, n, t]
        ),
        o = (0, h.n)((t) => {
            var r;
            return null === (r = t.listings[e]) || void 0 === r ? void 0 : r[n];
        });
    return [void 0 !== o ? o : t, l];
}
function M(e, n) {
    let t = (0, c.e7)([T.Z], () => T.Z.getSubscriptionListing(e));
    return r.useMemo(() => n(t), [t]);
}
function D(e) {
    let n = M(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '';
    });
    return R(e, 'name', n);
}
function U(e) {
    let n = M(e, (e) => {
        var n;
        return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
    });
    return R(e, 'priceTier', n);
}
function Z(e) {
    let n = M(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '';
    });
    return R(e, 'description', n);
}
function b(e, n) {
    let t = M(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, f._W)(e.application_id, e.image_asset, n);
    });
    return R(e, 'image', t);
}
function P(e, n) {
    let t = (0, N.Z)(n, e);
    return R(
        e,
        'roleIcon',
        r.useMemo(() => {
            var e, n;
            return {
                icon: null !== (e = null == t ? void 0 : t.icon) && void 0 !== e ? e : void 0,
                unicodeEmoji: null !== (n = null == t ? void 0 : t.unicodeEmoji) && void 0 !== n ? n : void 0
            };
        }, [t])
    );
}
function y(e, n) {
    let t = (0, N.Z)(n, e),
        i = (0, h.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor;
        }),
        l = (0, h.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon;
        });
    return r.useMemo(() => {
        let e = { ...(null != t ? t : A.k) };
        if (void 0 !== l) {
            var n, r;
            (e.icon = null !== (n = l.icon) && void 0 !== n ? n : ''), (e.unicodeEmoji = null !== (r = l.unicodeEmoji) && void 0 !== r ? r : '');
        }
        return void 0 !== i && ((e.color = i), (e.colorString = (0, s.Rf)(i))), e;
    }, [t, l, i]);
}
function x(e, n) {
    let t = (0, N.Z)(n, e);
    return R(
        e,
        'roleColor',
        r.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : L.p6O;
        }, [t])
    );
}
function G(e, n) {
    let t = (0, N.Z)(n, e);
    return R(
        e,
        'channelAccessFormat',
        r.useMemo(() => (null == t ? h.I.SOME_CHANNELS_ACCESS : (0, C.MT)(t) ? h.I.ALL_CHANNELS_ACCESS : h.I.SOME_CHANNELS_ACCESS), [t])
    );
}
let F = [];
function j(e) {
    let n = M(e, (e) => (null == e ? F : e.role_benefits.benefits.filter(I.rC)));
    return R(e, 'channelBenefits', n);
}
let w = [];
function B(e) {
    let n = M(e, (e) => (null == e ? w : e.role_benefits.benefits.filter(I.lL)));
    return R(e, 'intangibleBenefits', n);
}
let H = new Set();
function k(e, n) {
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
function W(e, n) {
    let t = (0, N.Z)(n, e),
        i = (0, c.Wu)([E.ZP], () => E.ZP.getGuildEmoji(n), [n]);
    return R(
        e,
        'tierEmojiIds',
        r.useMemo(() => (null == t ? H : k(i, t.id)), [i, t])
    );
}
function V(e) {
    var n;
    let t = (0, p.oC)(e),
        { selectedOption: r } = (0, m.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
    return R(e, 'trialInterval', null != r ? r : null);
}
function Y(e) {
    var n;
    let t = (0, p.oC)(e);
    return R(e, 'trialLimit', null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null);
}
function K(e) {
    return (0, h.n)((n) => void 0 !== n.listings[e]);
}
function z(e) {
    return (0, h.n)((n) => {
        for (let t of e) if (void 0 !== n.listings[t]) return !0;
        return !1;
    });
}
function J(e) {
    let n = M(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [t] = R(e, 'priceTier', void 0);
    return [
        r.useMemo(() => {
            var e, r, i, l, o;
            return {
                price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
                currency: null !== (r = null == n ? void 0 : n.currency) && void 0 !== r ? r : L.pKx.USD,
                interval: null !== (i = null == n ? void 0 : n.interval) && void 0 !== i ? i : O.rV.MONTH,
                interval_count: null !== (l = null == n ? void 0 : n.interval_count) && void 0 !== l ? l : 1,
                id: null !== (o = null == n ? void 0 : n.id) && void 0 !== o ? o : ''
            };
        }, [n, t])
    ];
}
function X(e) {
    var n;
    (n = e),
        (0, a.j)(() => {
            h.n.setState((e) => ({
                listings: {
                    ...e.listings,
                    [n]: e.listings.nonexistantEditStateId
                }
            }));
        });
}
async function q(e) {
    let { guildId: n, editStateId: t } = e,
        r = T.Z.getSubscriptionListing(t);
    l()(null != r, 'listing doesnt exist');
    let i = r.role_id,
        u = r.id,
        s = h.n.getState().listings[t];
    l()(null != s, 'edit state does not exist');
    let { roleColor: a, roleIcon: c, trialLimit: f, trialInterval: I, tierEmojiIds: p } = s;
    (void 0 !== a || void 0 !== c) &&
        (await _.Z.updateRole(n, i, {
            color: a,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let C = T.Z.getSubscriptionTrial(u);
    if (
        ((null != f || null != I || (null != C && null == I)) &&
            (await S.I1(n, u, {
                trial: I,
                max_num_active_trial_users: f
            })),
        void 0 !== p)
    ) {
        let e = k(E.ZP.getGuildEmoji(n), i),
            t = (0, o.difference)([...p], [...e]),
            r = (0, o.difference)([...e], [...p]),
            l = t
                .map((e) => E.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: n,
                            emojiId: e.id,
                            roles: [...e.roles, i]
                        });
                }),
            u = r
                .map((e) => E.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let t = e.roles.filter((e) => e !== i);
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
    let { guildId: n, editStateId: t, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        o = h.n.getState().listings[t];
    l()(null != o, 'edit state does not exist');
    let { name: u, description: s, channelBenefits: a, intangibleBenefits: c, priceTier: d, image: _, channelAccessFormat: E } = o;
    l()(null != u, 'no name provided'), l()(null != s, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != _, 'no image provided');
    let f = E === h.I.ALL_CHANNELS_ACCESS,
        I = r;
    null == I && (I = (await S.uw(n, {})).id), null != a && a.length > 0 && (await (0, g.r4)(n, a));
    let p = [...(null != a ? a : []), ...(null != c ? c : [])],
        T = (0, g.yL)(t, n);
    return S.dA({
        guildId: n,
        groupListingId: I,
        data: {
            can_access_all_channels: f,
            image: _,
            name: u,
            description: s,
            benefits: p,
            priceTier: d
        },
        analyticsContext: T,
        onBeforeDispatchNewListing: i
    });
}
function $() {
    let [e, n] = r.useState(!1),
        [t, i] = r.useState();
    return {
        loading: e,
        error: t,
        handleCreateOrUpdateFromEditState: r.useCallback(async (e) => {
            let { guildId: t, editStateId: r, groupListingId: u, onBeforeDispatchNewListing: s, onAfterDispatchNewListing: c } = e,
                d = r,
                _ = T.Z.getSubscriptionListing(d);
            try {
                if ((n(!0), i(void 0), null != _))
                    l()(null != u, 'groupListingId is null'),
                        await (function (e) {
                            var n;
                            let { guildId: t, editStateId: r, groupListingId: i } = e,
                                u = T.Z.getSubscriptionListing(r);
                            l()(null != u, 'listing doesnt exist');
                            let s = h.n.getState().listings[r];
                            l()(null != s, 'edit state does not exist');
                            let { name: a, description: c, channelBenefits: d, intangibleBenefits: _, priceTier: E, image: f, channelAccessFormat: p } = s,
                                C = {};
                            if ((a !== u.name && (C.name = a), c !== u.description && (C.description = c), E !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (C.priceTier = E), null != f && (C.image = f), null != p && (C.can_access_all_channels = p === h.I.ALL_CHANNELS_ACCESS), null != d || null != _)) {
                                let e = u.role_benefits.benefits.filter(I.rC),
                                    n = u.role_benefits.benefits.filter(I.lL),
                                    t = [...(null != d ? d : e), ...(null != _ ? _ : n)];
                                C.benefits = t;
                            }
                            return (0, o.isEmpty)(C)
                                ? u
                                : S.O0({
                                      guildId: t,
                                      groupListingId: i,
                                      listingId: r,
                                      data: C
                                  });
                        })({
                            guildId: t,
                            editStateId: d,
                            groupListingId: u
                        });
                else {
                    var E, f;
                    let e = await Q({
                        guildId: t,
                        editStateId: d,
                        groupListingId: u,
                        onBeforeDispatchNewListing: s
                    });
                    (d = e.id),
                        (E = r),
                        (f = d),
                        (0, a.j)(() => {
                            h.n.setState((e) => ({
                                listings: {
                                    ...e.listings,
                                    [f]: e.listings[E],
                                    [E]: void 0
                                }
                            }));
                        }),
                        null == c || c(e);
                }
                return (
                    await q({
                        guildId: t,
                        editStateId: d
                    }),
                    X(d),
                    !0
                );
            } catch (e) {
                if (!('getAnyErrorMessage' in e)) throw e;
                i(e);
            } finally {
                n(!1);
            }
        }, [])
    };
}
function ee(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        i = (0, p._k)(e, t),
        l = (0, h.n)((e) => e.editStateIdsForGroup[n]),
        o = (0, h.n)((e) => e.setEditStateIdsForGroup),
        s = (0, h.n)((e) => e.setListing),
        a = r.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: n } = e;
                    return n;
                }),
                ...(null != l ? l : [])
            ],
            [l, i]
        ),
        c = r.useCallback(() => {
            let e = (0, u.Z)();
            o(n, (n) => [...(null != n ? n : []), e]);
        }, [n, o]),
        d = r.useCallback(
            (e) => {
                let t = (0, u.Z)();
                return (
                    o(n, (e) => [...(null != e ? e : []), t]),
                    e.listings.forEach((n) => {
                        s(t, () => ({
                            name: n.name,
                            description: n.description,
                            priceTier: n.price_tier,
                            image: n.image,
                            intangibleBenefits: n.additional_perks,
                            channelBenefits: n.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: v.Qs.CHANNEL,
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
            [n, o, s]
        );
    return {
        editStateIds: a,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: d,
        removeEditStateId: r.useCallback(
            (e) => {
                o(n, (n) => (null != n ? n : []).filter((n) => n !== e));
            },
            [n, o]
        )
    };
}
