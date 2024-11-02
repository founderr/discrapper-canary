e.d(n, {
    B7: function () {
        return tt;
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
        return M;
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
        return R;
    },
    d9: function () {
        return x;
    },
    mR: function () {
        return y;
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
    e(47120);
var i = e(192379),
    r = e(512722),
    l = e.n(r),
    o = e(392711),
    u = e(772848),
    a = e(866442),
    s = e(731965),
    c = e(442837),
    d = e(80932),
    f = e(749210),
    _ = e(339085),
    p = e(73346),
    E = e(817460),
    g = e(423117),
    m = e(584825),
    h = e(289393),
    I = e(790285),
    S = e(303737),
    v = e(971792),
    C = e(22902),
    T = e(403474),
    N = e(944537),
    b = e(293810),
    A = e(981631),
    O = e(474936);
function P(t, n, e) {
    let r = (0, N.n)((t) => t.setListing),
        l = i.useCallback(
            (i) => {
                r(t, (t) => {
                    var r;
                    let l = null !== (r = null == t ? void 0 : t[n]) && void 0 !== r ? r : e;
                    return Object.assign({}, t, { [n]: 'function' == typeof i ? i(l) : i });
                });
            },
            [r, t, n, e]
        ),
        o = (0, N.n)((e) => {
            var i;
            return null === (i = e.listings[t]) || void 0 === i ? void 0 : i[n];
        });
    return [void 0 !== o ? o : e, l];
}
function L(t, n) {
    let e = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(t));
    return i.useMemo(() => n(e), [e]);
}
function R(t) {
    let n = L(t, (t) => {
        var n;
        return null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : '';
    });
    return P(t, 'name', n);
}
function y(t) {
    let n = L(t, (t) => {
        var n;
        return null == t ? void 0 : null === (n = t.subscription_plans[0]) || void 0 === n ? void 0 : n.price;
    });
    return P(t, 'priceTier', n);
}
function M(t) {
    let n = L(t, (t) => {
        var n;
        return null !== (n = null == t ? void 0 : t.description) && void 0 !== n ? n : '';
    });
    return P(t, 'description', n);
}
function x(t, n) {
    let e = L(t, (t) => {
        if ((null == t ? void 0 : t.image_asset) != null) return (0, p._W)(t.application_id, t.image_asset, n);
    });
    return P(t, 'image', e);
}
function Z(t, n) {
    let e = (0, v.Z)(n, t);
    return P(
        t,
        'roleIcon',
        i.useMemo(() => {
            var t, n;
            return {
                icon: null !== (t = null == e ? void 0 : e.icon) && void 0 !== t ? t : void 0,
                unicodeEmoji: null !== (n = null == e ? void 0 : e.unicodeEmoji) && void 0 !== n ? n : void 0
            };
        }, [e])
    );
}
function U(t, n) {
    let e = (0, v.Z)(n, t),
        r = (0, N.n)((n) => {
            var e;
            return null === (e = n.listings[t]) || void 0 === e ? void 0 : e.roleColor;
        }),
        l = (0, N.n)((n) => {
            var e;
            return null === (e = n.listings[t]) || void 0 === e ? void 0 : e.roleIcon;
        });
    return i.useMemo(() => {
        let t = { ...(null != e ? e : T.k) };
        if (void 0 !== l) {
            var n, i;
            (t.icon = null !== (n = l.icon) && void 0 !== n ? n : ''), (t.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((t.color = r), (t.colorString = (0, a.Rf)(r))), t;
    }, [e, l, r]);
}
function D(t, n) {
    let e = (0, v.Z)(n, t);
    return P(
        t,
        'roleColor',
        i.useMemo(() => {
            var t;
            return null !== (t = null == e ? void 0 : e.color) && void 0 !== t ? t : A.p6O;
        }, [e])
    );
}
function j(t, n) {
    let e = (0, v.Z)(n, t);
    return P(
        t,
        'channelAccessFormat',
        i.useMemo(() => (null == e ? N.I.SOME_CHANNELS_ACCESS : (0, I.MT)(e) ? N.I.ALL_CHANNELS_ACCESS : N.I.SOME_CHANNELS_ACCESS), [e])
    );
}
let w = [];
function F(t) {
    let n = L(t, (t) => (null == t ? w : t.role_benefits.benefits.filter(E.rC)));
    return P(t, 'channelBenefits', n);
}
let G = [];
function k(t) {
    let n = L(t, (t) => (null == t ? G : t.role_benefits.benefits.filter(E.lL)));
    return P(t, 'intangibleBenefits', n);
}
let H = new Set();
function B(t, n) {
    return 0 === t.length
        ? H
        : new Set(
              t
                  .filter((t) => t.roles.includes(n))
                  .map((t) => {
                      let { id: n } = t;
                      return n;
                  })
          );
}
function V(t, n) {
    let e = (0, v.Z)(n, t),
        r = (0, c.Wu)([_.ZP], () => _.ZP.getGuildEmoji(n), [n]);
    return P(
        t,
        'tierEmojiIds',
        i.useMemo(() => (null == e ? H : B(r, e.id)), [r, e])
    );
}
function W(t) {
    var n;
    let e = (0, m.oC)(t),
        { selectedOption: i } = (0, C.Z)(null !== (n = null == e ? void 0 : e.active_trial) && void 0 !== n ? n : null);
    return P(t, 'trialInterval', null != i ? i : null);
}
function z(t) {
    var n;
    let e = (0, m.oC)(t);
    return P(t, 'trialLimit', null !== (n = null == e ? void 0 : e.max_num_active_trial_users) && void 0 !== n ? n : null);
}
function Y(t) {
    return (0, N.n)((n) => void 0 !== n.listings[t]);
}
function K(t) {
    return (0, N.n)((n) => {
        for (let e of t) if (void 0 !== n.listings[e]) return !0;
        return !1;
    });
}
function q(t) {
    let n = L(t, (t) => (null == t ? void 0 : t.subscription_plans[0])),
        [e] = P(t, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var t, i, r, l, o;
            return {
                price: null !== (t = null != e ? e : null == n ? void 0 : n.price) && void 0 !== t ? t : 0,
                currency: null !== (i = null == n ? void 0 : n.currency) && void 0 !== i ? i : A.pKx.USD,
                interval: null !== (r = null == n ? void 0 : n.interval) && void 0 !== r ? r : O.rV.MONTH,
                interval_count: null !== (l = null == n ? void 0 : n.interval_count) && void 0 !== l ? l : 1,
                id: null !== (o = null == n ? void 0 : n.id) && void 0 !== o ? o : ''
            };
        }, [n, e])
    ];
}
function X(t) {
    var n;
    (n = t),
        (0, s.j)(() => {
            N.n.setState((t) => ({
                listings: {
                    ...t.listings,
                    [n]: t.listings.nonexistantEditStateId
                }
            }));
        });
}
async function J(t) {
    let { guildId: n, editStateId: e } = t,
        i = h.Z.getSubscriptionListing(e);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        u = i.id,
        a = N.n.getState().listings[e];
    l()(null != a, 'edit state does not exist');
    let { roleColor: s, roleIcon: c, trialLimit: p, trialInterval: E, tierEmojiIds: m } = a;
    (void 0 !== s || void 0 !== c) &&
        (await f.Z.updateRole(n, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let I = h.Z.getSubscriptionTrial(u);
    if (
        ((null != p || null != E || (null != I && null == E)) &&
            (await g.I1(n, u, {
                trial: E,
                max_num_active_trial_users: p
            })),
        void 0 !== m)
    ) {
        let t = B(_.ZP.getGuildEmoji(n), r),
            e = (0, o.difference)([...m], [...t]),
            i = (0, o.difference)([...t], [...m]),
            l = e
                .map((t) => _.ZP.getCustomEmojiById(t))
                .map((t) => {
                    if (null != t)
                        return (0, d.dv)({
                            guildId: n,
                            emojiId: t.id,
                            roles: [...t.roles, r]
                        });
                }),
            u = i
                .map((t) => _.ZP.getCustomEmojiById(t))
                .map((t) => {
                    if (null == t) return;
                    let e = t.roles.filter((t) => t !== r);
                    return e.length > 0
                        ? (0, d.dv)({
                              guildId: n,
                              emojiId: t.id,
                              roles: e
                          })
                        : (0, d.RE)(n, t.id);
                });
        await Promise.all([...l, ...u]);
    }
}
async function Q(t) {
    let { guildId: n, editStateId: e, groupListingId: i, onBeforeDispatchNewListing: r } = t,
        o = N.n.getState().listings[e];
    l()(null != o, 'edit state does not exist');
    let { name: u, description: a, channelBenefits: s, intangibleBenefits: c, priceTier: d, image: f, channelAccessFormat: _ } = o;
    l()(null != u, 'no name provided'), l()(null != a, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != f, 'no image provided');
    let p = _ === N.I.ALL_CHANNELS_ACCESS,
        E = i;
    null == E && (E = (await g.uw(n, {})).id), null != s && s.length > 0 && (await (0, S.r4)(n, s));
    let m = [...(null != s ? s : []), ...(null != c ? c : [])],
        h = (0, S.yL)(e, n);
    return g.dA({
        guildId: n,
        groupListingId: E,
        data: {
            can_access_all_channels: p,
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
    let [t, n] = i.useState(!1),
        [e, r] = i.useState();
    return {
        loading: t,
        error: e,
        handleCreateOrUpdateFromEditState: i.useCallback(async (t) => {
            let { guildId: e, editStateId: i, groupListingId: u, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: c } = t,
                d = i,
                f = h.Z.getSubscriptionListing(d);
            try {
                if ((n(!0), r(void 0), null != f))
                    l()(null != u, 'groupListingId is null'),
                        await (function (t) {
                            var n;
                            let { guildId: e, editStateId: i, groupListingId: r } = t,
                                u = h.Z.getSubscriptionListing(i);
                            l()(null != u, 'listing doesnt exist');
                            let a = N.n.getState().listings[i];
                            l()(null != a, 'edit state does not exist');
                            let { name: s, description: c, channelBenefits: d, intangibleBenefits: f, priceTier: _, image: p, channelAccessFormat: m } = a,
                                I = {};
                            if ((s !== u.name && (I.name = s), c !== u.description && (I.description = c), _ !== (null === (n = u.subscription_plans[0]) || void 0 === n ? void 0 : n.price) && (I.priceTier = _), null != p && (I.image = p), null != m && (I.can_access_all_channels = m === N.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let t = u.role_benefits.benefits.filter(E.rC),
                                    n = u.role_benefits.benefits.filter(E.lL),
                                    e = [...(null != d ? d : t), ...(null != f ? f : n)];
                                I.benefits = e;
                            }
                            return (0, o.isEmpty)(I)
                                ? u
                                : g.O0({
                                      guildId: e,
                                      groupListingId: r,
                                      listingId: i,
                                      data: I
                                  });
                        })({
                            guildId: e,
                            editStateId: d,
                            groupListingId: u
                        });
                else {
                    var _, p;
                    let t = await Q({
                        guildId: e,
                        editStateId: d,
                        groupListingId: u,
                        onBeforeDispatchNewListing: a
                    });
                    (d = t.id),
                        (_ = i),
                        (p = d),
                        (0, s.j)(() => {
                            N.n.setState((t) => ({
                                listings: {
                                    ...t.listings,
                                    [p]: t.listings[_],
                                    [_]: void 0
                                }
                            }));
                        }),
                        null == c || c(t);
                }
                return (
                    await J({
                        guildId: e,
                        editStateId: d
                    }),
                    X(d),
                    !0
                );
            } catch (t) {
                if (!('getAnyErrorMessage' in t)) throw t;
                r(t);
            } finally {
                n(!1);
            }
        }, [])
    };
}
function tt(t, n) {
    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        r = (0, m._k)(t, e),
        l = (0, N.n)((t) => t.editStateIdsForGroup[n]),
        o = (0, N.n)((t) => t.setEditStateIdsForGroup),
        a = (0, N.n)((t) => t.setListing),
        s = i.useMemo(
            () => [
                ...r.map((t) => {
                    let { id: n } = t;
                    return n;
                }),
                ...(null != l ? l : [])
            ],
            [l, r]
        ),
        c = i.useCallback(() => {
            let t = (0, u.Z)();
            o(n, (n) => [...(null != n ? n : []), t]);
        }, [n, o]),
        d = i.useCallback(
            (t) => {
                let e = (0, u.Z)();
                return (
                    o(n, (t) => [...(null != t ? t : []), e]),
                    t.listings.forEach((n) => {
                        a(e, () => ({
                            name: n.name,
                            description: n.description,
                            priceTier: n.price_tier,
                            image: n.image,
                            intangibleBenefits: n.additional_perks,
                            channelBenefits: n.channels.map((t) => ({
                                ref_id: t.id,
                                ref_type: b.Qs.CHANNEL,
                                description: t.description,
                                name: t.name,
                                emoji_name: t.emoji_name
                            })),
                            roleIcon: {
                                unicodeEmoji: void 0,
                                icon: n.image
                            },
                            roleColor: n.role_color,
                            usedTemplate: t.category
                        }));
                    }),
                    e
                );
            },
            [n, o, a]
        );
    return {
        editStateIds: s,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: d,
        removeEditStateId: i.useCallback(
            (t) => {
                o(n, (n) => (null != n ? n : []).filter((n) => n !== t));
            },
            [n, o]
        )
    };
}
