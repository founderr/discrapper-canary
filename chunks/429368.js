n.d(e, {
    $: function () {
        return c;
    },
    o: function () {
        return l;
    }
}),
    n(47120);
var r = n(232713),
    a = n(65400),
    i = n(979554);
let o = (0, a.F)(() => ({ selectionStates: new Map() }), r.X),
    s = () => ({ selectedVariantIndex: 0 }),
    l = (t, e) => {
        var n, r, a, s;
        let l = o();
        return (null == t ? void 0 : t.type) !== i.Z.VARIANTS_GROUP ? 0 : Math.max(0, null !== (s = null !== (a = null === (n = l.selectionStates.get(t.storeListingId)) || void 0 === n ? void 0 : n.selectedVariantIndex) && void 0 !== a ? a : null === (r = t.variants) || void 0 === r ? void 0 : r.findIndex((t) => !e.has(t.skuId))) && void 0 !== s ? s : 0);
    },
    c = (t, e) => {
        o.setState((n) => {
            var r;
            let a = null !== (r = n.selectionStates.get(t.storeListingId)) && void 0 !== r ? r : s();
            return {
                selectionStates: new Map(n.selectionStates).set(t.storeListingId, {
                    ...a,
                    selectedVariantIndex: e
                })
            };
        });
    };
