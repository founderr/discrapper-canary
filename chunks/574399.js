t.d(n, {
    I: function () {
        return T;
    }
});
var l = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(16084),
    s = t(558381),
    c = t(821849),
    u = t(106976),
    d = t(488915),
    m = t(171246),
    _ = t(509545),
    f = t(55563),
    p = t(551428),
    E = t(937615),
    I = t(147496),
    C = t(519896),
    h = t(981631),
    N = t(689938);
function T(e) {
    a.useEffect(() => {
        if (null != e) (0, o.$N)('', e), (0, s.km)(e);
    }, [e]);
    let n = (0, i.e7)([f.Z], () => (null != e ? f.Z.get(e) : void 0), [e]);
    a.useEffect(() => {
        (null == n ? void 0 : n.type) === h.epS.SUBSCRIPTION && (0, c.GZ)(n.id);
    }, [n]);
    let t = (0, i.Wu)([_.Z], () => (null != e ? _.Z.getForSKU(e) : []), [e]),
        T = a.useMemo(() => (null != t ? t.map((e) => e.id)[0] : void 0), [t]),
        x = (0, i.e7)([p.Z], () => (null != e ? p.Z.getForSKU(e) : void 0), [e]);
    a.useEffect(() => {
        if (null != T) (0, u.vY)(T);
    }, [T]);
    let v = null == n ? void 0 : n.applicationId,
        g = (0, i.e7)([d.Z], () => (null != v ? d.Z.getSubscriptionGroupListingForApplication(v) : null), [v]),
        b = a.useCallback(() => {
            if ((null == n ? void 0 : n.applicationId) == null || (null == n ? void 0 : n.id) == null || (null == g ? void 0 : g.id) == null || (null == g ? void 0 : g.sku_flags) == null) return null;
            (0, r.openModal)((e) => {
                let { onClose: t, transitionState: a } = e;
                return (0, l.jsx)(C.SubscriptionDetailsModal, {
                    appId: n.applicationId,
                    groupListingId: g.id,
                    groupListingType: (0, m.KW)(g.sku_flags) ? 'user' : 'guild',
                    onClose: t,
                    skuId: n.id,
                    transitionState: a
                });
            });
        }, [null == n ? void 0 : n.applicationId, null == n ? void 0 : n.id, null == g ? void 0 : g.id, null == g ? void 0 : g.sku_flags]),
        S = a.useCallback(() => {
            if (null == n) return null;
            (0, r.openModal)((e) => {
                let { onClose: t, transitionState: a } = e;
                return (0, l.jsx)(I.ItemDetailsModal, {
                    appId: n.applicationId,
                    skuId: n.id,
                    onClose: t,
                    transitionState: a
                });
            });
        }, [n]);
    if (null != n && null != x && (null == n || n.type !== h.epS.SUBSCRIPTION || null != g)) {
        if (null == e || (null != n && !n.available))
            return {
                disabled: !0,
                label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
            };
        if (n.type === h.epS.SUBSCRIPTION) {
            if (null == t || 0 === t.length)
                return {
                    disabled: !0,
                    label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
                };
            let e = t[0];
            return {
                disabled: !1,
                label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                    skuName: n.name,
                    price: (0, E.T4)(e.price, e.currency)
                }),
                onClick: b
            };
        }
        return null == n.price
            ? {
                  disabled: !0,
                  label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
              }
            : {
                  disabled: !1,
                  label: N.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                      skuName: n.name,
                      price: (0, E.T4)(n.price.amount, n.price.currency)
                  }),
                  onClick: S
              };
    }
}
