t.d(n, {
    I: function () {
        return x;
    }
});
var l = t(735250),
    i = t(470079),
    a = t(442837),
    r = t(481060),
    o = t(16084),
    s = t(558381),
    c = t(821849),
    u = t(106976),
    d = t(488915),
    m = t(171246),
    f = t(509545),
    _ = t(55563),
    p = t(551428),
    C = t(937615),
    h = t(147496),
    E = t(519896),
    I = t(981631),
    T = t(689938);
function x(e) {
    i.useEffect(() => {
        if (null != e) (0, o.$N)('', e), (0, s.km)(e);
    }, [e]);
    let n = (0, a.e7)([_.Z], () => (null != e ? _.Z.get(e) : void 0), [e]);
    i.useEffect(() => {
        (null == n ? void 0 : n.type) === I.epS.SUBSCRIPTION && (0, c.GZ)(n.id);
    }, [n]);
    let t = (0, a.Wu)([f.Z], () => (null != e ? f.Z.getForSKU(e) : []), [e]),
        x = i.useMemo(() => (null != t ? t.map((e) => e.id)[0] : void 0), [t]),
        N = (0, a.e7)([p.Z], () => (null != e ? p.Z.getForSKU(e) : void 0), [e]);
    i.useEffect(() => {
        if (null != x) (0, u.vY)(x);
    }, [x]);
    let v = null == n ? void 0 : n.applicationId,
        g = (0, a.e7)([d.Z], () => (null != v ? d.Z.getSubscriptionGroupListingForApplication(v) : null), [v]),
        b = i.useCallback(() => {
            if ((null == n ? void 0 : n.applicationId) == null || (null == n ? void 0 : n.id) == null || (null == g ? void 0 : g.id) == null || (null == g ? void 0 : g.sku_flags) == null) return null;
            (0, r.openModal)((e) => {
                let { onClose: t, transitionState: i } = e;
                return (0, l.jsx)(E.SubscriptionDetailsModal, {
                    appId: n.applicationId,
                    groupListingId: g.id,
                    groupListingType: (0, m.KW)(g.sku_flags) ? 'user' : 'guild',
                    onClose: t,
                    skuId: n.id,
                    transitionState: i
                });
            });
        }, [null == n ? void 0 : n.applicationId, null == n ? void 0 : n.id, null == g ? void 0 : g.id, null == g ? void 0 : g.sku_flags]),
        O = i.useCallback(() => {
            if (null == n) return null;
            (0, r.openModal)((e) => {
                let { onClose: t, transitionState: i } = e;
                return (0, l.jsx)(h.ItemDetailsModal, {
                    appId: n.applicationId,
                    skuId: n.id,
                    onClose: t,
                    transitionState: i
                });
            });
        }, [n]);
    if (null != n && null != N && (null == n || n.type !== I.epS.SUBSCRIPTION || null != g)) {
        if (null == e || (null != n && !n.available))
            return {
                disabled: !0,
                label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
            };
        if (n.type === I.epS.SUBSCRIPTION) {
            if (null == t || 0 === t.length)
                return {
                    disabled: !0,
                    label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
                };
            let e = t[0];
            return {
                disabled: !1,
                label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                    skuName: n.name,
                    price: (0, C.T4)(e.price, e.currency)
                }),
                onClick: b
            };
        }
        return null == n.price
            ? {
                  disabled: !0,
                  label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
              }
            : {
                  disabled: !1,
                  label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                      skuName: n.name,
                      price: (0, C.T4)(n.price.amount, n.price.currency)
                  }),
                  onClick: O
              };
    }
}
