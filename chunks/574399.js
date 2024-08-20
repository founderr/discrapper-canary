t.d(n, {
    I: function () {
        return I;
    }
});
var l = t(735250),
    i = t(470079),
    r = t(442837),
    a = t(481060),
    o = t(16084),
    s = t(558381),
    c = t(821849),
    u = t(106976),
    d = t(488915),
    m = t(171246),
    f = t(509545),
    _ = t(55563),
    p = t(551428),
    h = t(937615),
    C = t(147496),
    v = t(519896),
    x = t(981631),
    E = t(689938);
function I(e) {
    i.useEffect(() => {
        if (null != e) (0, o.$N)('', e), (0, s.km)(e);
    }, [e]);
    let n = (0, r.e7)([_.Z], () => (null != e ? _.Z.get(e) : void 0), [e]);
    i.useEffect(() => {
        (null == n ? void 0 : n.type) === x.epS.SUBSCRIPTION && (0, c.GZ)(n.id);
    }, [n]);
    let t = (0, r.Wu)([f.Z], () => (null != e ? f.Z.getForSKU(e) : []), [e]),
        I = i.useMemo(() => (null != t ? t.map((e) => e.id)[0] : void 0), [t]),
        T = (0, r.e7)([p.Z], () => (null != e ? p.Z.getForSKU(e) : void 0), [e]);
    i.useEffect(() => {
        if (null != I) (0, u.vY)(I);
    }, [I]);
    let g = null == n ? void 0 : n.applicationId,
        N = (0, r.e7)([d.Z], () => (null != g ? d.Z.getSubscriptionGroupListingForApplication(g) : null), [g]),
        b = i.useCallback(() => {
            if ((null == n ? void 0 : n.applicationId) == null || (null == n ? void 0 : n.id) == null || (null == N ? void 0 : N.id) == null || (null == N ? void 0 : N.sku_flags) == null) return null;
            (0, a.openModal)((e) => {
                let { onClose: t, transitionState: i } = e;
                return (0, l.jsx)(v.SubscriptionDetailsModal, {
                    appId: n.applicationId,
                    groupListingId: N.id,
                    groupListingType: (0, m.KW)(N.sku_flags) ? 'user' : 'guild',
                    onClose: t,
                    skuId: n.id,
                    transitionState: i
                });
            });
        }, [null == n ? void 0 : n.applicationId, null == n ? void 0 : n.id, null == N ? void 0 : N.id, null == N ? void 0 : N.sku_flags]),
        S = i.useCallback(() => {
            if (null == n) return null;
            (0, a.openModal)((e) => {
                let { onClose: t, transitionState: i } = e;
                return (0, l.jsx)(C.ItemDetailsModal, {
                    appId: n.applicationId,
                    skuId: n.id,
                    onClose: t,
                    transitionState: i
                });
            });
        }, [n]);
    if (null != n && null != T && (null == n || n.type !== x.epS.SUBSCRIPTION || null != N)) {
        if (null == e || (null != n && !n.available))
            return {
                disabled: !0,
                label: E.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
            };
        if (n.type === x.epS.SUBSCRIPTION) {
            if (null == t || 0 === t.length)
                return {
                    disabled: !0,
                    label: E.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
                };
            let e = t[0];
            return {
                disabled: !1,
                label: E.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                    skuName: n.name,
                    price: (0, h.T4)(e.price, e.currency)
                }),
                onClick: b
            };
        }
        return null == n.price
            ? {
                  disabled: !0,
                  label: E.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
              }
            : {
                  disabled: !1,
                  label: E.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                      skuName: n.name,
                      price: (0, h.T4)(n.price.amount, n.price.currency)
                  }),
                  onClick: S
              };
    }
}
