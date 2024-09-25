n.d(t, {
    GN: function () {
        return N;
    },
    be: function () {
        return v;
    },
    g4: function () {
        return S;
    },
    m7: function () {
        return g;
    },
    r4: function () {
        return O;
    },
    sO: function () {
        return C;
    },
    yL: function () {
        return R;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(998459);
var o = n(991637),
    s = n.n(o),
    l = n(399606),
    u = n(570140),
    c = n(333848),
    d = n(592125),
    _ = n(923726),
    E = n(289393),
    f = n(944537),
    h = n(144507),
    p = n(853439),
    m = n(981631),
    I = n(176505);
s().shim();
let T = {};
function g(e) {
    let t = (0, l.e7)([d.Z], () => d.Z.getChannel(e)),
        n = (0, l.e7)([p.Z], () => p.Z.getChannel(e));
    return null != t ? t : n;
}
function S(e, t, n) {
    let r = (0, l.e7)([E.Z], () => E.Z.getSubscriptionListingsForGuild(e)),
        i = (0, f.n)((t) => t.editStateIdsForGroup[e]),
        a = (0, f.n)((e) => e.listings);
    if (void 0 === n || void 0 === t) return null;
    let o = r.filter((e) => !e.soft_deleted && !e.archived).map((e) => e.subscription_plans[0].price),
        s = [];
    void 0 !== i &&
        i.forEach((e) => {
            let t = a[e],
                n = null == t ? void 0 : t.priceTier;
            null != n && s.push(n);
        });
    let u = new Set(s.concat(o));
    if (!u.has(n)) return null;
    let c = t.indexOf(n);
    if (-1 === c) return null;
    let d = [];
    for (let e = c + 1; e < t.length && (!u.has(t[e]) && d.push(t[e]), 3 !== d.length); e++);
    return d;
}
function A(e) {
    let t = f.n.getState().editStateIdsForGroup[e],
        n = f.n.getState().listings,
        r = new Set();
    null != t &&
        t.forEach((e) => {
            var t;
            let i = null === (t = n[e]) || void 0 === t ? void 0 : t.channelBenefits;
            null == i ||
                i.forEach((e) => {
                    null != p.Z.getChannel(e.ref_id) && r.add(e.ref_id);
                });
        });
    let i = [];
    for (let t of r) {
        let n = p.Z.getChannel(t);
        if (null != n) {
            let t = n.set('guild_id', e);
            i.push(t);
        }
    }
    return i;
}
function v(e) {
    let t = A(e);
    (T[e] = t),
        t.forEach((e) => {
            let t = e.set('flags', I.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
            u.Z.dispatch({
                type: 'CHANNEL_CREATE',
                channel: t
            });
        });
}
function N(e) {
    var t;
    (null !== (t = T[e]) && void 0 !== t ? t : A(e)).forEach((e) => {
        u.Z.dispatch({
            type: 'CHANNEL_DELETE',
            channel: e
        });
    });
}
async function O(e, t) {
    let n = [],
        r = [];
    if (
        (t.forEach((t) => {
            let i = p.Z.getChannel(t.ref_id);
            null != i && (n.push(c.Z.createRoleSubscriptionTemplateChannel(e, i.name, i.type, i.topic)), r.push(i));
        }),
        0 !== n.length)
    )
        (await Promise.allSettled(n)).forEach((n, i) => {
            let a = r[i].id;
            if ('fulfilled' === n.status) {
                let t = n.value.body,
                    r = f.n.getState().editStateIdsForGroup[e],
                    i = f.n.getState().listings;
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
function R(e, t) {
    var n, r;
    let i = f.n.getState().listings[e],
        a = null == i ? void 0 : i.usedTemplate;
    if (null == a)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let o = p.Z.getTemplateWithCategory(t, a);
    if (null == o)
        return {
            templateCategory: null,
            hasChangeFromTemplate: null
        };
    let s = o.listings[0];
    if ((null == i ? void 0 : i.name) !== s.name || (null == i ? void 0 : i.description) !== s.description || (null == i ? void 0 : i.priceTier) !== s.price_tier || (null == i ? void 0 : i.image) !== s.image || (null == i ? void 0 : i.roleColor) !== s.role_color || (null == i ? void 0 : null === (n = i.channelBenefits) || void 0 === n ? void 0 : n.length) !== s.channels.length || (null == i ? void 0 : null === (r = i.intangibleBenefits) || void 0 === r ? void 0 : r.length) !== s.additional_perks.length)
        return {
            templateCategory: o.category,
            hasChangeFromTemplate: !0
        };
    for (let e = 0; e < s.channels.length; e++) {
        let t = i.channelBenefits[e],
            n = s.channels[e];
        if (t.name !== n.name || t.description !== n.description || t.emoji_name !== n.emoji_name)
            return {
                templateCategory: o.category,
                hasChangeFromTemplate: !0
            };
    }
    for (let e = 0; e < s.additional_perks.length; e++) {
        let t = i.intangibleBenefits[e],
            n = s.additional_perks[e];
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
function C(e) {
    return (0, h.H2)(e) && e.hasFeature(m.oNc.ROLE_SUBSCRIPTIONS_ENABLED) && (0, _.$F)() && (0, _.hQ)(e.id);
}
