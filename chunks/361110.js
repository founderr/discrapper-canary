n.d(t, {
    f: function () {
        return i;
    }
}),
    n(47120);
var r = n(192379),
    a = n(979554);
let i = (e) => {
    let [t, n] = (0, r.useState)(null),
        i = (0, r.useCallback)(
            (t) => {
                if ((null == e ? void 0 : e.type) === a.Z.VARIANTS_GROUP) n(t);
            },
            [null == e ? void 0 : e.type]
        );
    return {
        previewingVariantIndex: t,
        handleEntering: i,
        handleLeaving: (0, r.useCallback)(() => {
            if ((null == e ? void 0 : e.type) === a.Z.VARIANTS_GROUP) n(null);
        }, [null == e ? void 0 : e.type])
    };
};
