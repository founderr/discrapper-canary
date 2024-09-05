l.d(n, {
    I: function () {
        return _;
    }
}),
    l(789020);
var t = l(735250),
    r = l(470079),
    i = l(442837),
    a = l(481060),
    s = l(16084),
    u = l(558381),
    o = l(821849),
    c = l(106976),
    d = l(171246),
    m = l(509545),
    p = l(55563),
    f = l(551428),
    E = l(937615),
    N = l(147496),
    C = l(519896),
    v = l(981631),
    h = l(689938);
function _(e) {
    r.useEffect(() => {
        if (null != e) (0, s.$N)('', e), (0, u.km)(e);
    }, [e]);
    let n = (0, i.e7)([p.Z], () => (null != e ? p.Z.get(e) : void 0), [e]);
    r.useEffect(() => {
        (null == n ? void 0 : n.type) === v.epS.SUBSCRIPTION && (0, o.GZ)(n.id);
    }, [n]);
    let l = (0, i.Wu)([m.Z], () => (null != e ? m.Z.getForSKU(e) : []), [e]),
        _ = r.useMemo(() => (null != l ? l.map((e) => e.id)[0] : void 0), [l]),
        x = (0, i.e7)([f.Z], () => (null != e ? f.Z.getForSKU(e) : void 0), [e]);
    r.useEffect(() => {
        if (null != _) (0, c.vY)(_);
    }, [_]);
    let T = (0, i.e7)([p.Z], () => (null != e ? p.Z.getParentSKU(e) : void 0), [e]),
        I = r.useCallback(() => {
            if ((null == n ? void 0 : n.applicationId) == null || (null == n ? void 0 : n.id) == null || (null == T ? void 0 : T.id) == null || (null == n ? void 0 : n.flags) == null) return null;
            (0, a.openModal)((e) => {
                let { onClose: l, transitionState: r } = e;
                return (0, t.jsx)(C.SubscriptionDetailsModal, {
                    appId: n.applicationId,
                    groupListingId: T.id,
                    subscriptionType: (0, d.KW)(n.flags) ? 'user' : 'guild',
                    onClose: l,
                    skuId: n.id,
                    transitionState: r
                });
            });
        }, [null == n ? void 0 : n.applicationId, null == n ? void 0 : n.id, null == T ? void 0 : T.id, null == n ? void 0 : n.flags]),
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
    if (null != n && null != x && (null == n || n.type !== v.epS.SUBSCRIPTION || null != T)) {
        if (null == e || (null != n && !n.available))
            return {
                disabled: !0,
                label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
            };
        if (n.type === v.epS.SUBSCRIPTION) {
            if (null == l || 0 === l.length)
                return {
                    disabled: !0,
                    label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
                };
            let e = l[0];
            return {
                disabled: !1,
                label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                    skuName: n.name,
                    price: (0, E.T4)(e.price, e.currency)
                }),
                onClick: I
            };
        }
        return null == n.price
            ? {
                  disabled: !0,
                  label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_UNAVAILABLE
              }
            : {
                  disabled: !1,
                  label: h.Z.Messages.INTERACTION_PREMIUM_BUTTON_CTA.format({
                      skuName: n.name,
                      price: (0, E.T4)(n.price.amount, n.price.currency)
                  }),
                  onClick: g
              };
    }
}
