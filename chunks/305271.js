n.d(t, {
    X: function () {
        return o;
    }
});
var a = n(470079),
    r = n(626135),
    s = n(981631);
let o = (e, t) => {
    let n = a.useCallback(
        (n, a) =>
            r.default.track(s.rMx.SLIDE_CAROUSEL_ITEM_VIEWED, {
                carousel_id: e,
                slide_id: null != a ? a : n.toString(),
                slide_index: n,
                location_stack: t
            }),
        [e, t]
    );
    return {
        trackSlideView: n,
        trackPagination: a.useCallback(
            (n, a, o, i) =>
                r.default.track(s.rMx.SLIDE_CAROUSEL_PAGINATION_CLICKED, {
                    carousel_id: e,
                    current_slide_index: a,
                    next_slide_index: n,
                    current_slide_id: i,
                    next_slide_id: o,
                    location_stack: t
                }),
            [e, t]
        )
    };
};
