t.d(n, {
    B7: function () {
        return ee;
    },
    Ek: function () {
        return G;
    },
    F2: function () {
        return Y;
    },
    GM: function () {
        return J;
    },
    GP: function () {
        return x;
    },
    H9: function () {
        return q;
    },
    Lo: function () {
        return z;
    },
    PK: function () {
        return U;
    },
    R7: function () {
        return B;
    },
    TT: function () {
        return V;
    },
    UE: function () {
        return w;
    },
    XZ: function () {
        return W;
    },
    Xo: function () {
        return $;
    },
    _T: function () {
        return b;
    },
    d9: function () {
        return Z;
    },
    mR: function () {
        return D;
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
var r = t(470079),
    i = t(512722),
    o = t.n(i),
    l = t(392711),
    u = t(772848),
    s = t(866442),
    a = t(731965),
    c = t(442837),
    d = t(80932),
    _ = t(749210),
    f = t(339085),
    E = t(73346),
    I = t(817460),
    S = t(423117),
    T = t(584825),
    g = t(289393),
    p = t(790285),
    C = t(303737),
    m = t(971792),
    N = t(22902),
    A = t(403474),
    h = t(944537),
    L = t(293810),
    O = t(981631),
    R = t(474936);
function v(e, n, t) {
    let i = (0, h.n)((e) => e.setListing),
        o = r.useCallback(
            (r) => {
                i(e, (e) => {
                    var i;
                    let o = null !== (i = null == e ? void 0 : e[n]) && void 0 !== i ? i : t;
                    return Object.assign({}, e, { [n]: 'function' == typeof r ? r(o) : r });
                });
            },
            [i, e, n, t]
        ),
        l = (0, h.n)((t) => {
            var r;
            return null === (r = t.listings[e]) || void 0 === r ? void 0 : r[n];
        });
    return [void 0 !== l ? l : t, o];
}
function M(e, n) {
    let t = (0, c.e7)([g.Z], () => g.Z.getSubscriptionListing(e));
    return r.useMemo(() => n(t), [t]);
}
function b(e) {
    let n = M(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.name) && void 0 !== n ? n : '';
    });
    return v(e, 'name', n);
}
function D(e) {
    let n = M(e, (e) => {
        var n;
        return null == e ? void 0 : null === (n = e.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
    });
    return v(e, 'priceTier', n);
}
function U(e) {
    let n = M(e, (e) => {
        var n;
        return null !== (n = null == e ? void 0 : e.description) && void 0 !== n ? n : '';
    });
    return v(e, 'description', n);
}
function Z(e, n) {
    let t = M(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, E._W)(e.application_id, e.image_asset, n);
    });
    return v(e, 'image', t);
}
function P(e, n) {
    let t = (0, m.Z)(n, e);
    return v(
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
    let t = (0, m.Z)(n, e),
        i = (0, h.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleColor;
        }),
        o = (0, h.n)((n) => {
            var t;
            return null === (t = n.listings[e]) || void 0 === t ? void 0 : t.roleIcon;
        });
    return r.useMemo(() => {
        let e = { ...(null != t ? t : A.k) };
        if (void 0 !== o) {
            var n, r;
            (e.icon = null !== (n = o.icon) && void 0 !== n ? n : ''), (e.unicodeEmoji = null !== (r = o.unicodeEmoji) && void 0 !== r ? r : '');
        }
        return void 0 !== i && ((e.color = i), (e.colorString = (0, s.Rf)(i))), e;
    }, [t, o, i]);
}
function G(e, n) {
    let t = (0, m.Z)(n, e);
    return v(
        e,
        'roleColor',
        r.useMemo(() => {
            var e;
            return null !== (e = null == t ? void 0 : t.color) && void 0 !== e ? e : O.p6O;
        }, [t])
    );
}
function x(e, n) {
    let t = (0, m.Z)(n, e);
    return v(
        e,
        'channelAccessFormat',
        r.useMemo(() => (null == t ? h.I.SOME_CHANNELS_ACCESS : (0, p.MT)(t) ? h.I.ALL_CHANNELS_ACCESS : h.I.SOME_CHANNELS_ACCESS), [t])
    );
}
let F = [];
function w(e) {
    let n = M(e, (e) => (null == e ? F : e.role_benefits.benefits.filter(I.rC)));
    return v(e, 'channelBenefits', n);
}
let j = [];
function B(e) {
    let n = M(e, (e) => (null == e ? j : e.role_benefits.benefits.filter(I.lL)));
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
    let t = (0, m.Z)(n, e),
        i = (0, c.Wu)([f.ZP], () => f.ZP.getGuildEmoji(n), [n]);
    return v(
        e,
        'tierEmojiIds',
        r.useMemo(() => (null == t ? H : k(i, t.id)), [i, t])
    );
}
function V(e) {
    var n;
    let t = (0, T.oC)(e),
        { selectedOption: r } = (0, N.Z)(null !== (n = null == t ? void 0 : t.active_trial) && void 0 !== n ? n : null);
    return v(e, 'trialInterval', null != r ? r : null);
}
function Y(e) {
    var n;
    let t = (0, T.oC)(e);
    return v(e, 'trialLimit', null !== (n = null == t ? void 0 : t.max_num_active_trial_users) && void 0 !== n ? n : null);
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
function q(e) {
    let n = M(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [t] = v(e, 'priceTier', void 0);
    return [
        r.useMemo(() => {
            var e, r, i, o, l;
            return {
                price: null !== (e = null != t ? t : null == n ? void 0 : n.price) && void 0 !== e ? e : 0,
                currency: null !== (r = null == n ? void 0 : n.currency) && void 0 !== r ? r : O.pKx.USD,
                interval: null !== (i = null == n ? void 0 : n.interval) && void 0 !== i ? i : R.rV.MONTH,
                interval_count: null !== (o = null == n ? void 0 : n.interval_count) && void 0 !== o ? o : 1,
                id: null !== (l = null == n ? void 0 : n.id) && void 0 !== l ? l : ''
            };
        }, [n, t])
    ];
}
function J(e) {
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
async function X(e) {
    let { guildId: n, editStateId: t } = e,
        r = g.Z.getSubscriptionListing(t);
    o()(null != r, 'listing doesnt exist');
    let i = r.role_id,
        u = r.id,
        s = h.n.getState().listings[t];
    o()(null != s, 'edit state does not exist');
    let { roleColor: a, roleIcon: c, trialLimit: E, trialInterval: I, tierEmojiIds: T } = s;
    (void 0 !== a || void 0 !== c) &&
        (await _.Z.updateRole(n, i, {
            color: a,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let p = g.Z.getSubscriptionTrial(u);
    if (
        ((null != E || null != I || (null != p && null == I)) &&
            (await S.I1(n, u, {
                trial: I,
                max_num_active_trial_users: E
            })),
        void 0 !== T)
    ) {
        let e = k(f.ZP.getGuildEmoji(n), i),
            t = (0, l.difference)([...T], [...e]),
            r = (0, l.difference)([...e], [...T]),
            o = t
                .map((e) => f.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: n,
                            emojiId: e.id,
                            roles: [...e.roles, i]
                        });
                }),
            u = r
                .map((e) => f.ZP.getCustomEmojiById(e))
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
        await Promise.all([...o, ...u]);
    }
}
async function Q(e) {
    let { guildId: n, editStateId: t, groupListingId: r, onBeforeDispatchNewListing: i } = e,
        l = h.n.getState().listings[t];
    o()(null != l, 'edit state does not exist');
    let { name: u, description: s, channelBenefits: a, intangibleBenefits: c, priceTier: d, image: _, channelAccessFormat: f } = l;
    o()(null != u, 'no name provided'), o()(null != s, 'no description provided'), o()(null != d, 'no priceTier provided'), o()(null != _, 'no image provided');
    let E = f === h.I.ALL_CHANNELS_ACCESS,
        I = r;
    null == I && (I = (await S.uw(n, {})).id), null != a && a.length > 0 && (await (0, C.r4)(n, a));
    let T = [...(null != a ? a : []), ...(null != c ? c : [])],
        g = (0, C.yL)(t, n);
    return S.dA({
        guildId: n,
        groupListingId: I,
        data: {
            can_access_all_channels: E,
            image: _,
            name: u,
            description: s,
            benefits: T,
            priceTier: d
        },
        analyticsContext: g,
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
                _ = g.Z.getSubscriptionListing(d);
            try {
                if ((n(!0), i(void 0), null != _))
                    o()(null != u, 'groupListingId is null'),
                        await (function (e) {
                            var n;
                            let { guildId: t, editStateId: r, groupListingId: i } = e,
                                u = g.Z.getSubscriptionListing(r);
                            o()(null != u, 'listing doesnt exist');
                            let s = h.n.getState().listings[r];
                            o()(null != s, 'edit state does not exist');
                            let { name: a, description: c, channelBenefits: d, intangibleBenefits: _, priceTier: f, image: E, channelAccessFormat: T } = s,
                                p = {};
                            if ((a !== u.name && (p.name = a), c !== u.description && (p.description = c), f !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (p.priceTier = f), null != E && (p.image = E), null != T && (p.can_access_all_channels = T === h.I.ALL_CHANNELS_ACCESS), null != d || null != _)) {
                                let e = u.role_benefits.benefits.filter(I.rC),
                                    n = u.role_benefits.benefits.filter(I.lL),
                                    t = [...(null != d ? d : e), ...(null != _ ? _ : n)];
                                p.benefits = t;
                            }
                            return (0, l.isEmpty)(p)
                                ? u
                                : S.O0({
                                      guildId: t,
                                      groupListingId: i,
                                      listingId: r,
                                      data: p
                                  });
                        })({
                            guildId: t,
                            editStateId: d,
                            groupListingId: u
                        });
                else {
                    var f, E;
                    let e = await Q({
                        guildId: t,
                        editStateId: d,
                        groupListingId: u,
                        onBeforeDispatchNewListing: s
                    });
                    (d = e.id),
                        (f = r),
                        (E = d),
                        (0, a.j)(() => {
                            h.n.setState((e) => ({
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
                    await X({
                        guildId: t,
                        editStateId: d
                    }),
                    J(d),
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
        i = (0, T._k)(e, t),
        o = (0, h.n)((e) => e.editStateIdsForGroup[n]),
        l = (0, h.n)((e) => e.setEditStateIdsForGroup),
        s = (0, h.n)((e) => e.setListing),
        a = r.useMemo(
            () => [
                ...i.map((e) => {
                    let { id: n } = e;
                    return n;
                }),
                ...(null != o ? o : [])
            ],
            [o, i]
        ),
        c = r.useCallback(() => {
            let e = (0, u.Z)();
            l(n, (n) => [...(null != n ? n : []), e]);
        }, [n, l]),
        d = r.useCallback(
            (e) => {
                let t = (0, u.Z)();
                return (
                    l(n, (e) => [...(null != e ? e : []), t]),
                    e.listings.forEach((n) => {
                        s(t, () => ({
                            name: n.name,
                            description: n.description,
                            priceTier: n.price_tier,
                            image: n.image,
                            intangibleBenefits: n.additional_perks,
                            channelBenefits: n.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: L.Qs.CHANNEL,
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
            [n, l, s]
        );
    return {
        editStateIds: a,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: d,
        removeEditStateId: r.useCallback(
            (e) => {
                l(n, (n) => (null != n ? n : []).filter((n) => n !== e));
            },
            [n, l]
        )
    };
}
