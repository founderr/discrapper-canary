n.d(t, {
    GN: function () {
        return S;
    },
    be: function () {
        return I;
    },
    g4: function () {
        return E;
    },
    m7: function () {
        return g;
    },
    r4: function () {
        return b;
    },
    sO: function () {
        return y;
    },
    yL: function () {
        return T;
    }
}),
    n(653041),
    n(47120),
    n(998459);
var r = n(991637),
    i = n.n(r),
    a = n(399606),
    s = n(570140),
    o = n(333848),
    l = n(592125),
    u = n(923726),
    c = n(289393),
    d = n(944537),
    f = n(144507),
    _ = n(853439),
    h = n(981631),
    p = n(176505);
i().shim();
let m = {};
function g(e) {
    let t = (0, a.e7)([l.Z], () => l.Z.getChannel(e)),
        n = (0, a.e7)([_.Z], () => _.Z.getChannel(e));
    return null != t ? t : n;
}
function E(e, t, n) {
    let r = (0, a.e7)([c.Z], () => c.Z.getSubscriptionListingsForGuild(e)),
        i = (0, d.n)((t) => t.editStateIdsForGroup[e]),
        s = (0, d.n)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let o = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        l = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = s[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && l.push(n);
        });
    let u = new Set(l.concat(o));
    if (!u.has(n)) return null;
    let f = t.indexOf(n);
    if (-1 === f) return null;
    let _ = [];
    for (let e = f + 1; e < t.length && (!u.has(t[e]) && _.push(t[e]), 3 !== _.length); e++);
    return _;
}
function v(e) {
    let t = d.n.getState().editStateIdsForGroup[e],
        n = d.n.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            var t;
            let i = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
            null == i ||
                i.forEach((e) => {
                    null != _.Z.getChannel(e.ref_id) && r.add(e.ref_id);
                });
        });
    let i = [];
    for (let t of r) {
        let n = _.Z.getChannel(t);
        if (null != n) {
            let t = n.set('guild_id', e);
            i.push(t);
        }
    }
    return i;
}
function I(e) {
    let t = v(e);
    (m[e] = t),
        t.forEach((e) => {
            let t = e.set('flags', p.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            s.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            });
        });
}
function S(e) {
    var t;
    (null !== (t = m[e]) && void 0 !== t ? t : v(e)).forEach((e) => {
        s.Z.dispatch({
            type: 'CHANNEL_DELETE',
            channel: e
        });
    });
}
async function b(e, t) {
    let n = [],
        r = [];
    if (
        (t.forEach((t) => {
            let i = _.Z.getChannel(t.ref_id);
            null != i && (n.push(o.Z.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i));
        }),
        0 !== n.length)
    )
        (await Promise.allSettled(n)).forEach((n, i) => {
            let a = r[i].id;
            if ('fulfilled' === n.status) {
                let t = n.value.body,
                    r = d.n.getState().editStateIdsForGroup[e],
                    i = d.n.getState().listings;
                null != r &&
                    r.forEach((e) => {
                        var n;
                        let r = null === (n = i[e]) || void 0 === n ? void 0 : n.channelBenefits;
                        null == r ||
                            r.forEach((e) => {
                                e.ref_id === a && (e.ref_id = t.id);
                            });
                    });
            } else if (null != t) {
                let e = t.findIndex((e) => e.ref_id === a);
                -1 !== e && (null == t || t.splice(e, 1));
            }
        });
}
function T(e, t) {
    var n, r;
    let i = d.n.getState().listings[e],
        a = null == i ? void 0 : i.usedTemplate;
    if (null == a)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let s = _.Z.getTemplateWithCategory(t, a);
    if (null == s)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let o = s.listings[0];
    if ((null == i ? void 0 : i.name) !== o.name || (null == i ? void 0 : i.description) !== o.description || (null == i ? void 0 : i.priceTier) !== o.price_tier || (null == i ? void 0 : i.image) !== o.image || (null == i ? void 0 : i.roleColor) !== o.role_color || (null == i ? void 0 : null === (n = i.channelBenefits) || void 0 === n ? void 0 : n.length) !== o.channels.length || (null == i ? void 0 : null === (r = i.intangibleBenefits) || void 0 === r ? void 0 : r.length) !== o.additional_perks.length)
        return {
            templateCategory: s.category,
            hasChangeFromTemplate: !0
        };
    for (let e = 0; e < o.channels.length; e++) {
        let t = i.channelBenefits[e],
            n = o.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: s.category,
                hasChangeFromTemplate: !0
            };
    }
    for (let e = 0; e < o.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            n = o.additional_perks[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: s.category,
                hasChangeFromTemplate: !0
            };
    }
    return {
        templateCategory: s.category,
        hasChangeFromTemplate: !1
    };
}
function y(e) {
    return (0, f.H2)(e) && e.hasFeature(h.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, u.$F)() && (0, u.hQ)(e.id);
}
