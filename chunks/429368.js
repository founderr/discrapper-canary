n.d(e, {
    $O: function () {
        return c;
    },
    B2: function () {
        return u;
    },
    ff: function () {
        return g;
    },
    i6: function () {
        return d;
    },
    o0: function () {
        return l;
    },
    tg: function () {
        return f;
    }
}),
    n(47120);
var r = n(515643),
    i = n(37050),
    a = n(979554);
let s = (0, i.F)(() => ({ selectionStates: new Map() }), r.X),
    o = () => ({
        selectedVariantIndex: 0,
        previewingVariantIndex: null,
        isHoveringOnSwitch: !1
    }),
    l = (t) => {
        var e, n;
        let r = s();
        return t.type !== a.Z.VARIANTS_GROUP ? 0 : (null == r.selectionStates.get(t.storeListingId) && s.setState((e) => ({ selectionStates: new Map(e.selectionStates).set(t.storeListingId, o()) })), null !== (n = null === (e = r.selectionStates.get(t.storeListingId)) || void 0 === e ? void 0 : e.selectedVariantIndex) && void 0 !== n ? n : 0);
    },
    c = (t, e) => {
        s.setState((n) => {
            var r;
            let i = null !== (r = n.selectionStates.get(t.storeListingId)) && void 0 !== r ? r : o();
            return {
                selectionStates: new Map(n.selectionStates).set(t.storeListingId, {
                    ...i,
                    selectedVariantIndex: e
                })
            };
        });
    },
    d = (t) => {
        var e, n;
        let r = s();
        return t.type === a.Z.VARIANTS_GROUP && (null == r.selectionStates.get(t.storeListingId) && s.setState((e) => ({ selectionStates: new Map(e.selectionStates).set(t.storeListingId, o()) })), null !== (n = null === (e = r.selectionStates.get(t.storeListingId)) || void 0 === e ? void 0 : e.isHoveringOnSwitch) && void 0 !== n && n);
    },
    u = (t, e) => {
        s.setState((n) => {
            var r;
            let i = null !== (r = n.selectionStates.get(t.storeListingId)) && void 0 !== r ? r : o();
            return {
                selectionStates: new Map(n.selectionStates).set(t.storeListingId, {
                    ...i,
                    isHoveringOnSwitch: e,
                    previewingVariantIndex: e ? i.selectedVariantIndex : null
                })
            };
        });
    },
    f = (t, e) => {
        s.setState((n) => {
            var r;
            let i = null !== (r = n.selectionStates.get(t.storeListingId)) && void 0 !== r ? r : o();
            return {
                selectionStates: new Map(n.selectionStates).set(t.storeListingId, {
                    ...i,
                    previewingVariantIndex: e
                })
            };
        });
    },
    g = (t) => {
        var e, n;
        let r = s();
        return (null == t ? void 0 : t.type) !== a.Z.VARIANTS_GROUP ? null : null !== (n = null === (e = r.selectionStates.get(t.storeListingId)) || void 0 === e ? void 0 : e.previewingVariantIndex) && void 0 !== n ? n : null;
    };
