n.d(t, {
    s: function () {
        return S;
    }
});
var r = n(789020);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(544891),
    l = n(481060),
    u = n(570140),
    c = n(171246),
    d = n(509545),
    _ = n(55563),
    E = n(551428),
    f = n(74538),
    h = n(937615),
    p = n(147496),
    m = n(519896),
    I = n(981631),
    T = n(689938);
let g = (0, o.Kb)([_.Z, d.Z, E.Z], {
    queryId: (e) => (null != e ? ['premium-button', e] : null),
    get: (e) => {
        var t;
        if (null == e) return;
        let n = _.Z.get(e),
            r = null !== (t = d.Z.getForSKU(e)) && void 0 !== t ? t : [],
            i = E.Z.getForSKU(e),
            a = _.Z.getParentSKU(e);
        if (null != n && null != i && (null == n || n.type !== I.epS.SUBSCRIPTION || null != a))
            return {
                parentSku: a,
                sku: n,
                storeListing: i,
                subscriptionPlans: r
            };
    },
    load: async (e, t) => {
        if (null == t) return;
        let n = { url: I.ANM.STOREFRONT_PREMIUM_BUTTON(t) },
            { body: r } = await s.tn.get(n);
        u.Z.dispatch({
            type: 'STORE_LISTINGS_FETCH_SUCCESS',
            storeListings: r.store_listings
        }),
            null != r.subscription_plans &&
                u.Z.dispatch({
                    type: 'SUBSCRIPTION_PLANS_FETCH_SUCCESS',
                    skuId: t,
                    subscriptionPlans: r.subscription_plans
                }),
            null != r.skus &&
                r.skus.forEach((e) => {
                    u.Z.dispatch({
                        type: 'SKU_FETCH_SUCCESS',
                        sku: e
                    });
                });
    },
    useStateHook: o.cj
});
function S(e) {
    let { data: t } = g(e),
        n = null == t ? void 0 : t.parentSku,
        r = null == t ? void 0 : t.sku,
        o = null == t ? void 0 : t.storeListing,
        s = null == t ? void 0 : t.subscriptionPlans,
        u = a.useCallback(() => {
            if ((null == r ? void 0 : r.applicationId) == null || (null == r ? void 0 : r.id) == null || (null == n ? void 0 : n.id) == null || (null == r ? void 0 : r.flags) == null) return null;
            (0, l.openModal)((e) => {
                let { onClose: t, transitionState: a } = e;
                return (0, i.jsx)(m.SubscriptionDetailsModal, {
                    appId: r.applicationId,
                    groupListingId: n.id,
                    subscriptionType: (0, c.KW)(r.flags) ? 'user' : 'guild',
                    onClose: t,
                    skuId: r.id,
                    transitionState: a
                });
            });
        }, [null == r ? void 0 : r.applicationId, null == r ? void 0 : r.id, null == n ? void 0 : n.id, null == r ? void 0 : r.flags]),
        d = a.useCallback(() => {
            if (null == r) return null;
            (0, l.openModal)((e) => {
                let { onClose: t, transitionState: n } = e;
                return (0, i.jsx)(p.ItemDetailsModal, {
                    appId: r.applicationId,
                    skuId: r.id,
                    onClose: t,
                    transitionState: n
                });
            });
        }, [r]);
    if (null != r && null != o && (null == r || r.type !== I.epS.SUBSCRIPTION || null != n)) {
        if (null == e || (null != r && !r.available))
            return {
                disabled: !0,
                label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
            };
        if (r.type === I.epS.SUBSCRIPTION) {
            if (null == s || 0 === s.length)
                return {
                    disabled: !0,
                    label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
                };
            let e = s[0],
                t = (0, f.aS)(e.id);
            return {
                disabled: !1,
                label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                    skuName: r.name,
                    price: (0, h.T4)(t.amount, t.currency)
                }),
                onClick: u
            };
        }
        return null == r.price
            ? {
                  disabled: !0,
                  label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
              }
            : {
                  disabled: !1,
                  label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                      skuName: r.name,
                      price: (0, h.T4)(r.price.amount, r.price.currency)
                  }),
                  onClick: d
              };
    }
}
