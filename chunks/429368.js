n.d(e, {
    $O: function () {
        return l;
    },
    B2: function () {
        return d;
    },
    i6: function () {
        return c;
    },
    o0: function () {
        return o;
    }
}),
    n(47120);
var r = n(905837),
    a = n(979554);
let i = (0, r.Ue)(() => ({ selectionStates: new Map() })),
    s = () => ({
        selectedVariant: 0,
        isHoveringOnSwitch: !1
    }),
    o = (t) => {
        var e, n;
        let r = i();
        return t.type !== a.Z.VARIANTS_GROUP ? 0 : (null == r.selectionStates.get(t.storeListingId) && i.setState((e) => ({ selectionStates: new Map(e.selectionStates).set(t.storeListingId, s()) })), null !== (n = null === (e = r.selectionStates.get(t.storeListingId)) || void 0 === e ? void 0 : e.selectedVariant) && void 0 !== n ? n : 0);
    },
    l = (t, e) => {
        i.setState((n) => {
            var r;
            let a = null !== (r = n.selectionStates.get(t.storeListingId)) && void 0 !== r ? r : s();
            return {
                selectionStates: new Map(n.selectionStates).set(t.storeListingId, {
                    ...a,
                    selectedVariant: e
                })
            };
        });
    },
    c = (t) => {
        var e, n;
        let r = i();
        return t.type === a.Z.VARIANTS_GROUP && (null == r.selectionStates.get(t.storeListingId) && i.setState((e) => ({ selectionStates: new Map(e.selectionStates).set(t.storeListingId, s()) })), null !== (n = null === (e = r.selectionStates.get(t.storeListingId)) || void 0 === e ? void 0 : e.isHoveringOnSwitch) && void 0 !== n && n);
    },
    d = (t, e) => {
        i.setState((n) => {
            var r;
            let a = null !== (r = n.selectionStates.get(t.storeListingId)) && void 0 !== r ? r : s();
            return {
                selectionStates: new Map(n.selectionStates).set(t.storeListingId, {
                    ...a,
                    isHoveringOnSwitch: e
                })
            };
        });
    };
