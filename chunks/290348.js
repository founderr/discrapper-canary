n.d(t, {
    B7: function () {
        return ee;
    },
    Ek: function () {
        return U;
    },
    F2: function () {
        return z;
    },
    GM: function () {
        return X;
    },
    GP: function () {
        return D;
    },
    H9: function () {
        return q;
    },
    Lo: function () {
        return K;
    },
    PK: function () {
        return Z;
    },
    R7: function () {
        return H;
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
        return P;
    },
    d9: function () {
        return M;
    },
    mR: function () {
        return y;
    },
    p9: function () {
        return x;
    },
    qs: function () {
        return j;
    },
    rU: function () {
        return Y;
    }
}),
    n(47120);
var i = n(192379),
    r = n(512722),
    l = n.n(r),
    o = n(392711),
    u = n(772848),
    a = n(866442),
    s = n(731965),
    c = n(442837),
    d = n(80932),
    f = n(749210),
    _ = n(339085),
    E = n(73346),
    p = n(817460),
    m = n(423117),
    g = n(584825),
    h = n(289393),
    I = n(790285),
    S = n(303737),
    C = n(971792),
    T = n(22902),
    v = n(403474),
    N = n(944537),
    A = n(293810),
    b = n(981631),
    L = n(474936);
function O(e, t, n) {
    let r = (0, N.n)((e) => e.setListing),
        l = i.useCallback(
            (i) => {
                r(e, (e) => {
                    var r;
                    let l = null !== (r = null == e ? void 0 : e[t]) && void 0 !== r ? r : n;
                    return Object.assign({}, e, { [t]: 'function' == typeof i ? i(l) : i });
                });
            },
            [r, e, t, n]
        ),
        o = (0, N.n)((n) => {
            var i;
            return null === (i = n.listings[e]) || void 0 === i ? void 0 : i[t];
        });
    return [void 0 !== o ? o : n, l];
}
function R(e, t) {
    let n = (0, c.e7)([h.Z], () => h.Z.getSubscriptionListing(e));
    return i.useMemo(() => t(n), [n]);
}
function P(e) {
    let t = R(e, (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.name) && void 0 !== t ? t : '';
    });
    return O(e, 'name', t);
}
function y(e) {
    let t = R(e, (e) => {
        var t;
        return null == e ? void 0 : null === (t = e.subscription_plans[0]) || void 0 === t ? void 0 : t.price;
    });
    return O(e, 'priceTier', t);
}
function Z(e) {
    let t = R(e, (e) => {
        var t;
        return null !== (t = null == e ? void 0 : e.description) && void 0 !== t ? t : '';
    });
    return O(e, 'description', t);
}
function M(e, t) {
    let n = R(e, (e) => {
        if ((null == e ? void 0 : e.image_asset) != null) return (0, E._W)(e.application_id, e.image_asset, t);
    });
    return O(e, 'image', n);
}
function x(e, t) {
    let n = (0, C.Z)(t, e);
    return O(
        e,
        'roleIcon',
        i.useMemo(() => {
            var e, t;
            return {
                icon: null !== (e = null == n ? void 0 : n.icon) && void 0 !== e ? e : void 0,
                unicodeEmoji: null !== (t = null == n ? void 0 : n.unicodeEmoji) && void 0 !== t ? t : void 0
            };
        }, [n])
    );
}
function j(e, t) {
    let n = (0, C.Z)(t, e),
        r = (0, N.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleColor;
        }),
        l = (0, N.n)((t) => {
            var n;
            return null === (n = t.listings[e]) || void 0 === n ? void 0 : n.roleIcon;
        });
    return i.useMemo(() => {
        let e = { ...(null != n ? n : v.k) };
        if (void 0 !== l) {
            var t, i;
            (e.icon = null !== (t = l.icon) && void 0 !== t ? t : ''), (e.unicodeEmoji = null !== (i = l.unicodeEmoji) && void 0 !== i ? i : '');
        }
        return void 0 !== r && ((e.color = r), (e.colorString = (0, a.Rf)(r))), e;
    }, [n, l, r]);
}
function U(e, t) {
    let n = (0, C.Z)(t, e);
    return O(
        e,
        'roleColor',
        i.useMemo(() => {
            var e;
            return null !== (e = null == n ? void 0 : n.color) && void 0 !== e ? e : b.p6O;
        }, [n])
    );
}
function D(e, t) {
    let n = (0, C.Z)(t, e);
    return O(
        e,
        'channelAccessFormat',
        i.useMemo(() => (null == n ? N.I.SOME_CHANNELS_ACCESS : (0, I.MT)(n) ? N.I.ALL_CHANNELS_ACCESS : N.I.SOME_CHANNELS_ACCESS), [n])
    );
}
let F = [];
function w(e) {
    let t = R(e, (e) => (null == e ? F : e.role_benefits.benefits.filter(p.rC)));
    return O(e, 'channelBenefits', t);
}
let G = [];
function H(e) {
    let t = R(e, (e) => (null == e ? G : e.role_benefits.benefits.filter(p.lL)));
    return O(e, 'intangibleBenefits', t);
}
let k = new Set();
function B(e, t) {
    return 0 === e.length
        ? k
        : new Set(
              e
                  .filter((e) => e.roles.includes(t))
                  .map((e) => {
                      let { id: t } = e;
                      return t;
                  })
          );
}
function W(e, t) {
    let n = (0, C.Z)(t, e),
        r = (0, c.Wu)([_.ZP], () => _.ZP.getGuildEmoji(t), [t]);
    return O(
        e,
        'tierEmojiIds',
        i.useMemo(() => (null == n ? k : B(r, n.id)), [r, n])
    );
}
function V(e) {
    var t;
    let n = (0, g.oC)(e),
        { selectedOption: i } = (0, T.Z)(null !== (t = null == n ? void 0 : n.active_trial) && void 0 !== t ? t : null);
    return O(e, 'trialInterval', null != i ? i : null);
}
function z(e) {
    var t;
    let n = (0, g.oC)(e);
    return O(e, 'trialLimit', null !== (t = null == n ? void 0 : n.max_num_active_trial_users) && void 0 !== t ? t : null);
}
function Y(e) {
    return (0, N.n)((t) => void 0 !== t.listings[e]);
}
function K(e) {
    return (0, N.n)((t) => {
        for (let n of e) if (void 0 !== t.listings[n]) return !0;
        return !1;
    });
}
function q(e) {
    let t = R(e, (e) => (null == e ? void 0 : e.subscription_plans[0])),
        [n] = O(e, 'priceTier', void 0);
    return [
        i.useMemo(() => {
            var e, i, r, l, o;
            return {
                price: null !== (e = null != n ? n : null == t ? void 0 : t.price) && void 0 !== e ? e : 0,
                currency: null !== (i = null == t ? void 0 : t.currency) && void 0 !== i ? i : b.pKx.USD,
                interval: null !== (r = null == t ? void 0 : t.interval) && void 0 !== r ? r : L.rV.MONTH,
                interval_count: null !== (l = null == t ? void 0 : t.interval_count) && void 0 !== l ? l : 1,
                id: null !== (o = null == t ? void 0 : t.id) && void 0 !== o ? o : ''
            };
        }, [t, n])
    ];
}
function X(e) {
    var t;
    (t = e),
        (0, s.j)(() => {
            N.n.setState((e) => ({
                listings: {
                    ...e.listings,
                    [t]: e.listings.nonexistantEditStateId
                }
            }));
        });
}
async function J(e) {
    let { guildId: t, editStateId: n } = e,
        i = h.Z.getSubscriptionListing(n);
    l()(null != i, 'listing doesnt exist');
    let r = i.role_id,
        u = i.id,
        a = N.n.getState().listings[n];
    l()(null != a, 'edit state does not exist');
    let { roleColor: s, roleIcon: c, trialLimit: E, trialInterval: p, tierEmojiIds: g } = a;
    (void 0 !== s || void 0 !== c) &&
        (await f.Z.updateRole(t, r, {
            color: s,
            icon: null == c ? void 0 : c.icon,
            unicodeEmoji: null == c ? void 0 : c.unicodeEmoji
        }));
    let I = h.Z.getSubscriptionTrial(u);
    if (
        ((null != E || null != p || (null != I && null == p)) &&
            (await m.I1(t, u, {
                trial: p,
                max_num_active_trial_users: E
            })),
        void 0 !== g)
    ) {
        let e = B(_.ZP.getGuildEmoji(t), r),
            n = (0, o.difference)([...g], [...e]),
            i = (0, o.difference)([...e], [...g]),
            l = n
                .map((e) => _.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null != e)
                        return (0, d.dv)({
                            guildId: t,
                            emojiId: e.id,
                            roles: [...e.roles, r]
                        });
                }),
            u = i
                .map((e) => _.ZP.getCustomEmojiById(e))
                .map((e) => {
                    if (null == e) return;
                    let n = e.roles.filter((e) => e !== r);
                    return n.length > 0
                        ? (0, d.dv)({
                              guildId: t,
                              emojiId: e.id,
                              roles: n
                          })
                        : (0, d.RE)(t, e.id);
                });
        await Promise.all([...l, ...u]);
    }
}
async function Q(e) {
    let { guildId: t, editStateId: n, groupListingId: i, onBeforeDispatchNewListing: r } = e,
        o = N.n.getState().listings[n];
    l()(null != o, 'edit state does not exist');
    let { name: u, description: a, channelBenefits: s, intangibleBenefits: c, priceTier: d, image: f, channelAccessFormat: _ } = o;
    l()(null != u, 'no name provided'), l()(null != a, 'no description provided'), l()(null != d, 'no priceTier provided'), l()(null != f, 'no image provided');
    let E = _ === N.I.ALL_CHANNELS_ACCESS,
        p = i;
    null == p && (p = (await m.uw(t, {})).id), null != s && s.length > 0 && (await (0, S.r4)(t, s));
    let g = [...(null != s ? s : []), ...(null != c ? c : [])],
        h = (0, S.yL)(n, t);
    return m.dA({
        guildId: t,
        groupListingId: p,
        data: {
            can_access_all_channels: E,
            image: f,
            name: u,
            description: a,
            benefits: g,
            priceTier: d
        },
        analyticsContext: h,
        onBeforeDispatchNewListing: r
    });
}
function $() {
    let [e, t] = i.useState(!1),
        [n, r] = i.useState();
    return {
        loading: e,
        error: n,
        handleCreateOrUpdateFromEditState: i.useCallback(async (e) => {
            let { guildId: n, editStateId: i, groupListingId: u, onBeforeDispatchNewListing: a, onAfterDispatchNewListing: c } = e,
                d = i,
                f = h.Z.getSubscriptionListing(d);
            try {
                if ((t(!0), r(void 0), null != f))
                    l()(null != u, 'groupListingId is null'),
                        await (function (e) {
                            var t;
                            let { guildId: n, editStateId: i, groupListingId: r } = e,
                                u = h.Z.getSubscriptionListing(i);
                            l()(null != u, 'listing doesnt exist');
                            let a = N.n.getState().listings[i];
                            l()(null != a, 'edit state does not exist');
                            let { name: s, description: c, channelBenefits: d, intangibleBenefits: f, priceTier: _, image: E, channelAccessFormat: g } = a,
                                I = {};
                            if ((s !== u.name && (I.name = s), c !== u.description && (I.description = c), _ !== (null === (t = u.subscription_plans[0]) || void 0 === t ? void 0 : t.price) && (I.priceTier = _), null != E && (I.image = E), null != g && (I.can_access_all_channels = g === N.I.ALL_CHANNELS_ACCESS), null != d || null != f)) {
                                let e = u.role_benefits.benefits.filter(p.rC),
                                    t = u.role_benefits.benefits.filter(p.lL),
                                    n = [...(null != d ? d : e), ...(null != f ? f : t)];
                                I.benefits = n;
                            }
                            return (0, o.isEmpty)(I)
                                ? u
                                : m.O0({
                                      guildId: n,
                                      groupListingId: r,
                                      listingId: i,
                                      data: I
                                  });
                        })({
                            guildId: n,
                            editStateId: d,
                            groupListingId: u
                        });
                else {
                    var _, E;
                    let e = await Q({
                        guildId: n,
                        editStateId: d,
                        groupListingId: u,
                        onBeforeDispatchNewListing: a
                    });
                    (d = e.id),
                        (_ = i),
                        (E = d),
                        (0, s.j)(() => {
                            N.n.setState((e) => ({
                                listings: {
                                    ...e.listings,
                                    [E]: e.listings[_],
                                    [_]: void 0
                                }
                            }));
                        }),
                        null == c || c(e);
                }
                return (
                    await J({
                        guildId: n,
                        editStateId: d
                    }),
                    X(d),
                    !0
                );
            } catch (e) {
                if (!('getAnyErrorMessage' in e)) throw e;
                r(e);
            } finally {
                t(!1);
            }
        }, [])
    };
}
function ee(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { includeSoftDeleted: !1 },
        r = (0, g._k)(e, n),
        l = (0, N.n)((e) => e.editStateIdsForGroup[t]),
        o = (0, N.n)((e) => e.setEditStateIdsForGroup),
        a = (0, N.n)((e) => e.setListing),
        s = i.useMemo(
            () => [
                ...r.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
                ...(null != l ? l : [])
            ],
            [l, r]
        ),
        c = i.useCallback(() => {
            let e = (0, u.Z)();
            o(t, (t) => [...(null != t ? t : []), e]);
        }, [t, o]),
        d = i.useCallback(
            (e) => {
                let n = (0, u.Z)();
                return (
                    o(t, (e) => [...(null != e ? e : []), n]),
                    e.listings.forEach((t) => {
                        a(n, () => ({
                            name: t.name,
                            description: t.description,
                            priceTier: t.price_tier,
                            image: t.image,
                            intangibleBenefits: t.additional_perks,
                            channelBenefits: t.channels.map((e) => ({
                                ref_id: e.id,
                                ref_type: A.Qs.CHANNEL,
                                description: e.description,
                                name: e.name,
                                emoji_name: e.emoji_name
                            })),
                            roleIcon: {
                                unicodeEmoji: void 0,
                                icon: t.image
                            },
                            roleColor: t.role_color,
                            usedTemplate: e.category
                        }));
                    }),
                    n
                );
            },
            [t, o, a]
        );
    return {
        editStateIds: s,
        addNewEditStateId: c,
        addNewEditStateFromTemplate: d,
        removeEditStateId: i.useCallback(
            (e) => {
                o(t, (t) => (null != t ? t : []).filter((t) => t !== e));
            },
            [t, o]
        )
    };
}
