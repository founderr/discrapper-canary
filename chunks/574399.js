l.d(n, {
    I: function () {
        return h;
    }
});
var t = l(735250),
    r = l(470079),
    a = l(442837),
    i = l(481060),
    s = l(16084),
    u = l(558381),
    o = l(821849),
    c = l(106976),
    d = l(488915),
    m = l(171246),
    E = l(509545),
    p = l(55563),
    N = l(551428),
    f = l(937615),
    _ = l(147496),
    C = l(519896),
    T = l(981631),
    v = l(689938);
function h(e) {
    r.useEffect(() => {
        if (null != e) (0, s.$N)('', e), (0, u.km)(e);
    }, [e]);
    let n = (0, a.e7)([p.Z], () => (null != e ? p.Z.get(e) : void 0), [e]);
    r.useEffect(() => {
        (null == n ? void 0 : n.type) === T.epS.SUBSCRIPTION && (0, o.GZ)(n.id);
    }, [n]);
    let l = (0, a.Wu)([E.Z], () => (null != e ? E.Z.getForSKU(e) : []), [e]),
        h = r.useMemo(() => (null != l ? l.map((e) => e.id)[0] : void 0), [l]),
        x = (0, a.e7)([N.Z], () => (null != e ? N.Z.getForSKU(e) : void 0), [e]);
    r.useEffect(() => {
        if (null != h) (0, c.vY)(h);
    }, [h]);
    let I = null == n ? void 0 : n.applicationId,
        S = (0, a.e7)([d.Z], () => (null != I ? d.Z.getSubscriptionGroupListingForApplication(I) : null), [I]),
        O = r.useCallback(() => {
            if ((null == n ? void 0 : n.applicationId) == null || (null == n ? void 0 : n.id) == null || (null == S ? void 0 : S.id) == null || (null == S ? void 0 : S.sku_flags) == null) return null;
            (0, i.openModal)((e) => {
                let { onClose: l, transitionState: r } = e;
                return (0, t.jsx)(C.SubscriptionDetailsModal, {
                    appId: n.applicationId,
                    groupListingId: S.id,
                    groupListingType: (0, m.KW)(S.sku_flags) ? 'user' : 'guild',
                    onClose: l,
                    skuId: n.id,
                    transitionState: r
                });
            });
        }, [null == n ? void 0 : n.applicationId, null == n ? void 0 : n.id, null == S ? void 0 : S.id, null == S ? void 0 : S.sku_flags]),
        g = r.useCallback(() => {
            if (null == n) return null;
            (0, i.openModal)((e) => {
                let { onClose: l, transitionState: r } = e;
                return (0, t.jsx)(_.ItemDetailsModal, {
                    appId: n.applicationId,
                    skuId: n.id,
                    onClose: l,
                    transitionState: r
                });
            });
        }, [n]);
    if (null != n && null != x && (null == n || n.type !== T.epS.SUBSCRIPTION || null != S)) {
        if (null == e || (null != n && !n.available))
            return {
                disabled: !0,
                label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
            };
        if (n.type === T.epS.SUBSCRIPTION) {
            if (null == l || 0 === l.length)
                return {
                    disabled: !0,
                    label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
                };
            let e = l[0];
            return {
                disabled: !1,
                label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                    skuName: n.name,
                    price: (0, f.T4)(e.price, e.currency)
                }),
                onClick: O
            };
        }
        return null == n.price
            ? {
                  disabled: !0,
                  label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
              }
            : {
                  disabled: !1,
                  label: v.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                      skuName: n.name,
                      price: (0, f.T4)(n.price.amount, n.price.currency)
                  }),
                  onClick: g
              };
    }
}
