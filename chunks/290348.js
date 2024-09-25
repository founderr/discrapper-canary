t.d(n, {
    B7: function () {
        return ee;
    },
    Ek: function () {
        return j;
    },
    F2: function () {
        return W;
    },
    GM: function () {
        return X;
    },
    GP: function () {
        return G;
    },
    H9: function () {
        return Q;
    },
    Lo: function () {
        return z;
    },
    PK: function () {
        return O;
    },
    R7: function () {
        return w;
    },
    TT: function () {
        return V;
    },
    UE: function () {
        return H;
    },
    XZ: function () {
        return k;
    },
    Xo: function () {
        return $;
    },
    _T: function () {
        return M;
    },
    d9: function () {
        return b;
    },
    mR: function () {
        return U;
    },
    p9: function () {
        return B;
    },
    qs: function () {
        return y;
    },
    rU: function () {
        return K;
    }
}),
    t(47120);
var i = t(470079),
    r = t(512722),
    l = t.n(r),
    s = t(392711),
    o = t(772848),
    u = t(866442),
    a = t(731965),
    c = t(442837),
    _ = t(80932),
    d = t(749210),
    f = t(339085),
    E = t(73346),
    A = t(817460),
    I = t(423117),
    v = t(584825),
    L = t(289393),
    m = t(790285),
    S = t(303737),
    g = t(971792),
    C = t(22902),
    N = t(403474),
    p = t(944537),
    Z = t(293810),
    R = t(981631),
    D = t(474936);
function T(e, n, t) {
    let r = (0, p.n)((e) => e.setListing),
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
        s = (0, p.n)((t) => {
            var i;
            return null === (i = t.listings[e]) || void 0 === i ? void 0 : i[n];
        });
    return [void 0 !== s ? s : t, l];
}
function h(e, n) {
    let t = (0, c.e7)([L.Z], () => L.Z.getSubscriptionListing(e));
    return i.useMemo(() => n(t), [t]);
}
function M(e) {
    let n = h(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '';
    });
    return T(e, 'name', n);
}
function U(e) {
    let n = h(e, (e) => {
        var n;
        return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
    });
    return T(e, 'priceTier', n);
}
function O(e) {
    let n = h(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '';
    });
    return T(e, 'description', n);
}
function b(e, n) {
    let t = h(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, E._W)(e.application_id, e.image_asset, n);
    });
    return T(e, 'image', t);
}
function B(e, n) {
    let t = (0, g.Z)(n, e);
    return T(
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
function y(e, n) {
    let t = (0, g.Z)(n, e),
        r = (0, p.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor;
        }),
        l = (0, p.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon;
        });
    return i.useMemo(() => {
        let e = { ...(null != t ? t : N.k) };
        if (void 0 !== l) {
            var n, i;
            (e.icon = null !== (n = l.icon) && void 0 !== n ? n : ''), (e.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((e.color = r), (e.colorString = (0, u.Rf)(r))), e;
    }, [t, l, r]);
}
function j(e, n) {
    let t = (0, g.Z)(n, e);
    return T(
        e,
        'roleColor',
        i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : R.p6O;
        }, [t])
    );
}
function G(e, n) {
    let t = (0, g.Z)(n, e);
    return T(
        e,
        'channelAccessFormat',
        i.useMemo(() => (null == t ? p.I.SOME_CHANNELS_ACCESS : (0, m.MT)(t) ? p.I.ALL_CHANNELS_ACCESS : p.I.SOME_CHANNELS_ACCESS), [t])
    );
}
let P = [];
function H(e) {
    let n = h(e, (e) => (null == e ? P : e.role_benefits.benefits.filter(A.rC)));
    return T(e, 'channelBenefits', n);
}
let F = [];
function w(e) {
    let n = h(e, (e) => (null == e ? F : e.role_benefits.benefits.filter(A.lL)));
    return T(e, 'intangibleBenefits', n);
}
let x = new Set();
function Y(e, n) {
    return 0 === e.length
        ? x
        : new Set(
              e
                  .filter((e) => e.roles.includes(n))
                  .map((e) => {
                      let { id: n } = e;
                      return n;
                  })
          );
}
function k(e, n) {
    let t = (0, g.Z)(n, e),
        r = (0, c.Wu)([f.ZP], () => f.ZP.getGuildEmoji(n), [n]);
    return T(
        e,
        'tierEmojiIds',
        i.useMemo(() => (null == t ? x : Y(r, t.id)), [r, t])
    );
}
function V(e) {
    var n;
    let t = (0, v.oC)(e),
        { selectedOption: i } = (0, C.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
    return T(e, 'trialInterval', null != i ? i : null);
}
function W(e) {
    var n;
    let t = (0, v.oC)(e);
    return T(e, 'trialLimit', null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null);
}
function K(e) {
    return (0, p.n)((n) => void 0 !== n.listings[e]);
}
function z(e) {
    return (0, p.n)((n) => {
        for (let t of e) if (void 0 !== n.listings[t]) return !0;
        return !1;
    });
}
function Q(e) {
    let n = h(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [t] = T(e, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var e, i, r, l, s;
            return {
                price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
                currency: null !== (i = null == n ? void 0 : n.currency) && void 0 !== i ? i : R.pKx.USD,
                interval: null !== (r = null == n ? void 0 : n.interval) && void 0 !== r ? r : D.rV.MONTH,
                interval_count: null !== (l = null == n ? void 0 : n.interval_count) && void 0 !== l ? l : 1,
                id: null !== (s = null == n ? void 0 : n.id) && void 0 !== s ? s : ''
            };
        }, [n, t])
    ];
}
function X(e) {
    var n;
    (n = e),
        (0, a.j)(() => {
            p.n.setState((e) => ({
                listings: {
                    ...e.listings,
                    [n]: e.listings.nonexistantEditStateId
                }
            }));
        });
}
async function q(e) {
    let { guildId: n, editStateId: t } = e,
        i = L.Z.getSubscriptionListing(t);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        o = i.id,
        u = p.n.getState().listings[t];
    l()(null != u, 'edit state does not exist');
    let { roleColor: a, roleIcon: c, trialLimit: E, trialInterval: A, tierEmojiIds: v } = u;
    (void 0 !== a || void 0 !== c) &&
        (await d.Z.updateRole(n, r, {
            color: a,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let m = L.Z.getSubscriptionTrial(o);
    if (
        ((null != E || null != A || (null != m && null == A)) &&
            (await I.I1(n, o, {
                trial: A,
                max_num_active_trial_users: E
            })),
        void 0 !== v)
    ) {
        let e = Y(f.ZP.getGuildEmoji(n), r),
            t = (0, s.difference)([...v], [...e]),
            i = (0, s.difference)([...e], [...v]),
            l = t
                .map((e) => f.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, _.dv)({
                            guildId: n,
                            emojiId: e.id,
                            roles: [...e.roles, r]
                        });
                }),
            o = i
                .map((e) => f.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let t = e.roles.filter((e) => e !== r);
                    return t.length > 0
                        ? (0, _.dv)({
                              guildId: n,
                              emojiId: e.id,
                              roles: t
                          })
                        : (0, _.RE)(n, e.id);
                });
        await Promise.all([...l, ...o]);
    }
}
async function J(e) {
    let { guildId: n, editStateId: t, groupListingId: i, onBeforeDispatchNewListing: r } = e,
        s = p.n.getState().listings[t];
    l()(null != s, 'edit state does not exist');
    let { name: o, description: u, channelBenefits: a, intangibleBenefits: c, priceTier: _, image: d, channelAccessFormat: f } = s;
    l()(null != o, 'no name provided'), l()(null != u, 'no description provided'), l()(null != _, 'no priceTier provided'), l()(null != d, 'no image provided');
    let E = f === p.I.ALL_CHANNELS_ACCESS,
        A = i;
    null == A && (A = (await I.uw(n, {})).id), null != a && a.length > 0 && (await (0, S.r4)(n, a));
    let v = [...(null != a ? a : []), ...(null != c ? c : [])],
        L = (0, S.yL)(t, n);
    return I.dA({
        guildId: n,
        groupListingId: A,
        data: {
            can_access_all_channels: E,
            image: d,
            name: o,
            description: u,
            benefits: v,
            priceTier: _
        },
        analyticsContext: L,
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
            let { guildId: t, editStateId: i, groupListingId: o, onBeforeDispatchNewListing: u, onAfterDispatchNewListing: c } = e,
                _ = i,
                d = L.Z.getSubscriptionListing(_);
            try {
                if ((n(!0), r(void 0), null != d))
                    l()(null != o, 'groupListingId is null'),
                        await (function (e) {
                            var n;
                            let { guildId: t, editStateId: i, groupListingId: r } = e,
                                o = L.Z.getSubscriptionListing(i);
                            l()(null != o, 'listing doesnt exist');
                            let u = p.n.getState().listings[i];
                            l()(null != u, 'edit state does not exist');
                            let { name: a, description: c, channelBenefits: _, intangibleBenefits: d, priceTier: f, image: E, channelAccessFormat: v } = u,
                                m = {};
                            if ((a !== o.name && (m.name = a), c !== o.description && (m.description = c), f !== (null === (n = o.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (m.priceTier = f), null != E && (m.image = E), null != v && (m.can_access_all_channels = v === p.I.ALL_CHANNELS_ACCESS), null != _ || null != d)) {
                                let e = o.role_benefits.benefits.filter(A.rC),
                                    n = o.role_benefits.benefits.filter(A.lL),
                                    t = [...(null != _ ? _ : e), ...(null != d ? d : n)];
                                m.benefits = t;
                            }
                            return (0, s.isEmpty)(m)
                                ? o
                                : I.O0({
                                      guildId: t,
                                      groupListingId: r,
                                      listingId: i,
                                      data: m
                                  });
                        })({
                            guildId: t,
                            editStateId: _,
                            groupListingId: o
                        });
                else {
                    var f, E;
                    let e = await J({
                        guildId: t,
                        editStateId: _,
                        groupListingId: o,
                        onBeforeDispatchNewListing: u
                    });
                    (_ = e.id),
                        (f = i),
                        (E = _),
                        (0, a.j)(() => {
                            p.n.setState((e) => ({
                                listings: {
                                    ...e.listings,
                                    [E]: e.listings[f],
                                    [f]: void 0
                                }
                            }));
                        }),
                        null == c || c(e);
                }
                return (
                    await q({
                        guildId: t,
                        editStateId: _
                    }),
                    X(_),
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
        r = (0, v._k)(e, t),
        l = (0, p.n)((e) => e.editStateIdsForGroup[n]),
        s = (0, p.n)((e) => e.setEditStateIdsForGroup),
        u = (0, p.n)((e) => e.setListing),
        a = i.useMemo(
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
            let e = (0, o.Z)();
            s(n, (n) => [...(null != n ? n : []), e]);
        }, [n, s]),
        _ = i.useCallback(
            (e) => {
                let t = (0, o.Z)();
                return (
                    s(n, (e) => [...(null != e ? e : []), t]),
                    e.listings.forEach((n) => {
                        u(t, () => ({
                            name: n.name,
                            description: n.description,
                            priceTier: n.price_tier,
                            image: n.image,
                            intangibleBenefits: n.additional_perks,
                            channelBenefits: n.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: Z.Qs.CHANNEL,
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
            [n, s, u]
        );
    return {
        editStateIds: a,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: _,
        removeEditStateId: i.useCallback(
            (e) => {
                s(n, (n) => (null != n ? n : []).filter((n) => n !== e));
            },
            [n, s]
        )
    };
}
