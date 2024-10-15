t.d(n, {
    B7: function () {
        return ee;
    },
    Ek: function () {
        return y;
    },
    F2: function () {
        return V;
    },
    GM: function () {
        return q;
    },
    GP: function () {
        return x;
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
        return Y;
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
        return P;
    },
    mR: function () {
        return U;
    },
    p9: function () {
        return b;
    },
    qs: function () {
        return G;
    },
    rU: function () {
        return K;
    }
}),
    t(47120);
var i = t(470079),
    r = t(512722),
    l = t.n(r),
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
    T = t(584825),
    C = t(289393),
    p = t(790285),
    N = t(303737),
    A = t(971792),
    g = t(22902),
    m = t(403474),
    L = t(944537),
    O = t(293810),
    R = t(981631),
    h = t(474936);
function v(e, n, t) {
    let r = (0, L.n)((e) => e.setListing),
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
        o = (0, L.n)((t) => {
            var i;
            return null === (i = t.listings[e]) || void 0 === i ? void 0 : i[n];
        });
    return [void 0 !== o ? o : t, l];
}
function M(e, n) {
    let t = (0, c.e7)([C.Z], () => C.Z.getSubscriptionListing(e));
    return i.useMemo(() => n(t), [t]);
}
function D(e) {
    let n = M(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '';
    });
    return v(e, 'name', n);
}
function U(e) {
    let n = M(e, (e) => {
        var n;
        return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
    });
    return v(e, 'priceTier', n);
}
function Z(e) {
    let n = M(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '';
    });
    return v(e, 'description', n);
}
function P(e, n) {
    let t = M(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, f._W)(e.application_id, e.image_asset, n);
    });
    return v(e, 'image', t);
}
function b(e, n) {
    let t = (0, A.Z)(n, e);
    return v(
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
function G(e, n) {
    let t = (0, A.Z)(n, e),
        r = (0, L.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor;
        }),
        l = (0, L.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon;
        });
    return i.useMemo(() => {
        let e = { ...(null != t ? t : m.k) };
        if (void 0 !== l) {
            var n, i;
            (e.icon = null !== (n = l.icon) && void 0 !== n ? n : ''), (e.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((e.color = r), (e.colorString = (0, s.Rf)(r))), e;
    }, [t, l, r]);
}
function y(e, n) {
    let t = (0, A.Z)(n, e);
    return v(
        e,
        'roleColor',
        i.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : R.p6O;
        }, [t])
    );
}
function x(e, n) {
    let t = (0, A.Z)(n, e);
    return v(
        e,
        'channelAccessFormat',
        i.useMemo(() => (null == t ? L.I.SOME_CHANNELS_ACCESS : (0, p.MT)(t) ? L.I.ALL_CHANNELS_ACCESS : L.I.SOME_CHANNELS_ACCESS), [t])
    );
}
let F = [];
function j(e) {
    let n = M(e, (e) => (null == e ? F : e.role_benefits.benefits.filter(I.rC)));
    return v(e, 'channelBenefits', n);
}
let w = [];
function B(e) {
    let n = M(e, (e) => (null == e ? w : e.role_benefits.benefits.filter(I.lL)));
    return v(e, 'intangibleBenefits', n);
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
    let t = (0, A.Z)(n, e),
        r = (0, c.Wu)([E.ZP], () => E.ZP.getGuildEmoji(n), [n]);
    return v(
        e,
        'tierEmojiIds',
        i.useMemo(() => (null == t ? H : k(r, t.id)), [r, t])
    );
}
function Y(e) {
    var n;
    let t = (0, T.oC)(e),
        { selectedOption: i } = (0, g.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
    return v(e, 'trialInterval', null != i ? i : null);
}
function V(e) {
    var n;
    let t = (0, T.oC)(e);
    return v(e, 'trialLimit', null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null);
}
function K(e) {
    return (0, L.n)((n) => void 0 !== n.listings[e]);
}
function z(e) {
    return (0, L.n)((n) => {
        for (let t of e) if (void 0 !== n.listings[t]) return !0;
        return !1;
    });
}
function J(e) {
    let n = M(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [t] = v(e, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var e, i, r, l, o;
            return {
                price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
                currency: null !== (i = null == n ? void 0 : n.currency) && void 0 !== i ? i : R.pKx.USD,
                interval: null !== (r = null == n ? void 0 : n.interval) && void 0 !== r ? r : h.rV.MONTH,
                interval_count: null !== (l = null == n ? void 0 : n.interval_count) && void 0 !== l ? l : 1,
                id: null !== (o = null == n ? void 0 : n.id) && void 0 !== o ? o : ''
            };
        }, [n, t])
    ];
}
function q(e) {
    var n;
    (n = e),
        (0, a.j)(() => {
            L.n.setState((e) => ({
                listings: {
                    ...e.listings,
                    [n]: e.listings.nonexistantEditStateId
                }
            }));
        });
}
async function X(e) {
    let { guildId: n, editStateId: t } = e,
        i = C.Z.getSubscriptionListing(t);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        u = i.id,
        s = L.n.getState().listings[t];
    l()(null != s, 'edit state does not exist');
    let { roleColor: a, roleIcon: c, trialLimit: f, trialInterval: I, tierEmojiIds: T } = s;
    (void 0 !== a || void 0 !== c) &&
        (await _.Z.updateRole(n, r, {
            color: a,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let p = C.Z.getSubscriptionTrial(u);
    if (
        ((null != f || null != I || (null != p && null == I)) &&
            (await S.I1(n, u, {
                trial: I,
                max_num_active_trial_users: f
            })),
        void 0 !== T)
    ) {
        let e = k(E.ZP.getGuildEmoji(n), r),
            t = (0, o.difference)([...T], [...e]),
            i = (0, o.difference)([...e], [...T]),
            l = t
                .map((e) => E.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: n,
                            emojiId: e.id,
                            roles: [...e.roles, r]
                        });
                }),
            u = i
                .map((e) => E.ZP.getCustomEmojiById(e))
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
        o = L.n.getState().listings[t];
    l()(null != o, 'edit state does not exist');
    let { name: u, description: s, channelBenefits: a, intangibleBenefits: c, priceTier: d, image: _, channelAccessFormat: E } = o;
    l()(null != u, 'no name provided'), l()(null != s, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != _, 'no image provided');
    let f = E === L.I.ALL_CHANNELS_ACCESS,
        I = i;
    null == I && (I = (await S.uw(n, {})).id), null != a && a.length > 0 && (await (0, N.r4)(n, a));
    let T = [...(null != a ? a : []), ...(null != c ? c : [])],
        C = (0, N.yL)(t, n);
    return S.dA({
        guildId: n,
        groupListingId: I,
        data: {
            can_access_all_channels: f,
            image: _,
            name: u,
            description: s,
            benefits: T,
            priceTier: d
        },
        analyticsContext: C,
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
            let { guildId: t, editStateId: i, groupListingId: u, onBeforeDispatchNewListing: s, onAfterDispatchNewListing: c } = e,
                d = i,
                _ = C.Z.getSubscriptionListing(d);
            try {
                if ((n(!0), r(void 0), null != _))
                    l()(null != u, 'groupListingId is null'),
                        await (function (e) {
                            var n;
                            let { guildId: t, editStateId: i, groupListingId: r } = e,
                                u = C.Z.getSubscriptionListing(i);
                            l()(null != u, 'listing doesnt exist');
                            let s = L.n.getState().listings[i];
                            l()(null != s, 'edit state does not exist');
                            let { name: a, description: c, channelBenefits: d, intangibleBenefits: _, priceTier: E, image: f, channelAccessFormat: T } = s,
                                p = {};
                            if ((a !== u.name && (p.name = a), c !== u.description && (p.description = c), E !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (p.priceTier = E), null != f && (p.image = f), null != T && (p.can_access_all_channels = T === L.I.ALL_CHANNELS_ACCESS), null != d || null != _)) {
                                let e = u.role_benefits.benefits.filter(I.rC),
                                    n = u.role_benefits.benefits.filter(I.lL),
                                    t = [...(null != d ? d : e), ...(null != _ ? _ : n)];
                                p.benefits = t;
                            }
                            return (0, o.isEmpty)(p)
                                ? u
                                : S.O0({
                                      guildId: t,
                                      groupListingId: r,
                                      listingId: i,
                                      data: p
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
                        (E = i),
                        (f = d),
                        (0, a.j)(() => {
                            L.n.setState((e) => ({
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
                    await X({
                        guildId: t,
                        editStateId: d
                    }),
                    q(d),
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
        r = (0, T._k)(e, t),
        l = (0, L.n)((e) => e.editStateIdsForGroup[n]),
        o = (0, L.n)((e) => e.setEditStateIdsForGroup),
        s = (0, L.n)((e) => e.setListing),
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
            let e = (0, u.Z)();
            o(n, (n) => [...(null != n ? n : []), e]);
        }, [n, o]),
        d = i.useCallback(
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
                                ref_type: O.Qs.CHANNEL,
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
        removeEditStateId: i.useCallback(
            (e) => {
                o(n, (n) => (null != n ? n : []).filter((n) => n !== e));
            },
            [n, o]
        )
    };
}
