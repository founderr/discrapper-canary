l.d(n, {
    I: function () {
        return h;
    }
});
var t = l(735250),
    r = l(470079),
    i = l(442837),
    a = l(481060),
    s = l(16084),
    u = l(558381),
    o = l(821849),
    c = l(106976),
    d = l(488915),
    m = l(171246),
    E = l(509545),
    f = l(55563),
    p = l(551428),
    C = l(937615),
    N = l(147496),
    _ = l(519896),
    v = l(981631),
    T = l(689938);
function h(e) {
    r.useEffect(() => {
        if (null != e) (0, s.$N)('', e), (0, u.km)(e);
    }, [e]);
    let n = (0, i.e7)([f.Z], () => (null != e ? f.Z.get(e) : void 0), [e]);
    r.useEffect(() => {
        (null == n ? void 0 : n.type) === v.epS.SUBSCRIPTION && (0, o.GZ)(n.id);
    }, [n]);
    let l = (0, i.Wu)([E.Z], () => (null != e ? E.Z.getForSKU(e) : []), [e]),
        h = r.useMemo(() => (null != l ? l.map((e) => e.id)[0] : void 0), [l]),
        I = (0, i.e7)([p.Z], () => (null != e ? p.Z.getForSKU(e) : void 0), [e]);
    r.useEffect(() => {
        if (null != h) (0, c.vY)(h);
    }, [h]);
    let x = null == n ? void 0 : n.applicationId,
        O = (0, i.e7)([d.Z], () => (null != x ? d.Z.getSubscriptionGroupListingForApplication(x) : null), [x]),
        S = r.useCallback(() => {
            if ((null == n ? void 0 : n.applicationId) == null || (null == n ? void 0 : n.id) == null || (null == O ? void 0 : O.id) == null || (null == O ? void 0 : O.sku_flags) == null) return null;
            (0, a.openModal)((e) => {
                let { onClose: l, transitionState: r } = e;
                return (0, t.jsx)(_.SubscriptionDetailsModal, {
                    appId: n.applicationId,
                    groupListingId: O.id,
                    groupListingType: (0, m.KW)(O.sku_flags) ? 'user' : 'guild',
                    onClose: l,
                    skuId: n.id,
                    transitionState: r
                });
            });
        }, [null == n ? void 0 : n.applicationId, null == n ? void 0 : n.id, null == O ? void 0 : O.id, null == O ? void 0 : O.sku_flags]),
        g = r.useCallback(() => {
            if (null == n) return null;
            (0, a.openModal)((e) => {
                let { onClose: l, transitionState: r } = e;
                return (0, t.jsx)(N.ItemDetailsModal, {
                    appId: n.applicationId,
                    skuId: n.id,
                    onClose: l,
                    transitionState: r
                });
            });
        }, [n]);
    if (null != n && null != I && (null == n || n.type !== v.epS.SUBSCRIPTION || null != O)) {
        if (null == e || (null != n && !n.available))
            return {
                disabled: !0,
                label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
            };
        if (n.type === v.epS.SUBSCRIPTION) {
            if (null == l || 0 === l.length)
                return {
                    disabled: !0,
                    label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
                };
            let e = l[0];
            return {
                disabled: !1,
                label: T.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                    skuName: n.name,
                    price: (0, C.T4)(e.price, e.currency)
                }),
                onClick: S
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
                  onClick: g
              };
    }
}
