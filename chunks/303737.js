n.d(t, {
    GN: function () {
        return S;
    },
    be: function () {
        return C;
    },
    g4: function () {
        return I;
    },
    m7: function () {
        return m;
    },
    r4: function () {
        return T;
    },
    sO: function () {
        return b;
    },
    yL: function () {
        return v;
    }
}),
    n(653041),
    n(47120),
    n(998459);
var i = n(991637),
    r = n.n(i),
    l = n(399606),
    o = n(570140),
    u = n(333848),
    a = n(592125),
    s = n(923726),
    c = n(289393),
    d = n(944537),
    f = n(144507),
    _ = n(853439),
    p = n(981631),
    g = n(176505);
r().shim();
let E = {};
function m(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getChannel(e)),
        n = (0, l.e7)([_.Z], () => _.Z.getChannel(e));
    return null != t ? t : n;
}
function I(e, t, n) {
    let i = (0, l.e7)([c.Z], () => c.Z.getSubscriptionListingsForGuild(e)),
        r = (0, d.n)((t) => t.editStateIdsForGroup[e]),
        o = (0, d.n)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let u = i.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        a = [];
    void 0 !== r &&
        r.forEach((e) => {
            let t = o[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && a.push(n);
        });
    let s = new Set(a.concat(u));
    if (!s.has(n)) return null;
    let f = t.indexOf(n);
    if (-1 === f) return null;
    let _ = [];
    for (let e = f + 1; e < t.length && (!s.has(t[e]) && _.push(t[e]), 3 !== _.length); e++);
    return _;
}
function h(e) {
    let t = d.n.getState().editStateIdsForGroup[e],
        n = d.n.getState().listings,
        i = new Set();
    null != t &&
        t.forEach((e) => {
            var t;
            let r = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
            null == r ||
                r.forEach((e) => {
                    null != _.Z.getChannel(e.ref_id) && i.add(e.ref_id);
                });
        });
    let r = [];
    for (let t of i) {
        let n = _.Z.getChannel(t);
        if (null != n) {
            let t = n.set('guild_id', e);
            r.push(t);
        }
    }
    return r;
}
function C(e) {
    let t = h(e);
    (E[e] = t),
        t.forEach((e) => {
            let t = e.set('flags', g.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            o.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            });
        });
}
function S(e) {
    var t;
    (null !== (t = E[e]) && void 0 !== t ? t : h(e)).forEach((e) => {
        o.Z.dispatch({
            type: 'CHANNEL_DELETE',
            channel: e
        });
    });
}
async function T(e, t) {
    let n = [],
        i = [];
    if (
        (t.forEach((t) => {
            let r = _.Z.getChannel(t.ref_id);
            null != r && (n.push(u.Z.createRoleSubscriptionTemplateChannel(e, r.name, r.type, r.topic)), i.push(r));
        }),
        0 !== n.length)
    )
        (await Promise.allSettled(n)).forEach((n, r) => {
            let l = i[r].id;
            if ('fulfilled' === n.status) {
                let t = n.value.body,
                    i = d.n.getState().editStateIdsForGroup[e],
                    r = d.n.getState().listings;
                null != i &&
                    i.forEach((e) => {
                        var n;
                        let i = null === (n = r[e]) || void 0 === n ? void 0 : n.channelBenefits;
                        null == i ||
                            i.forEach((e) => {
                                e.ref_id === l && (e.ref_id = t.id);
                            });
                    });
            } else if (null != t) {
                let e = t.findIndex((e) => e.ref_id === l);
                -1 !== e && (null == t || t.splice(e, 1));
            }
        });
}
function v(e, t) {
    var n, i;
    let r = d.n.getState().listings[e],
        l = null == r ? void 0 : r.usedTemplate;
    if (null == l)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let o = _.Z.getTemplateWithCategory(t, l);
    if (null == o)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let u = o.listings[0];
    if ((null == r ? void 0 : r.name) !== u.name || (null == r ? void 0 : r.description) !== u.description || (null == r ? void 0 : r.priceTier) !== u.price_tier || (null == r ? void 0 : r.image) !== u.image || (null == r ? void 0 : r.roleColor) !== u.role_color || (null == r ? void 0 : null === (n = r.channelBenefits) || void 0 === n ? void 0 : n.length) !== u.channels.length || (null == r ? void 0 : null === (i = r.intangibleBenefits) || void 0 === i ? void 0 : i.length) !== u.additional_perks.length)
        return {
            templateCategory: o.category,
            hasChangeFromTemplate: !0
        };
    for (let e = 0; e < u.channels.length; e++) {
        let t = r.channelBenefits[e],
            n = u.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: o.category,
                hasChangeFromTemplate: !0
            };
    }
    for (let e = 0; e < u.additional_perks.length; e++) {
        let t = r.intangibleBenefits[e],
            n = u.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: o.category,
                hasChangeFromTemplate: !0
            };
    }
    return {
        templateCategory: o.category,
        hasChangeFromTemplate: !1
    };
}
function b(e) {
    return (0, f.H2)(e) && e.hasFeature(p.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, s.$F)() && (0, s.hQ)(e.id);
}
