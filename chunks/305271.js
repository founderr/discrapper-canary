r.d(t, {
    X: function () {
        return i;
    }
});
var a = r(470079),
    n = r(626135),
    s = r(981631);
let i = (e, t) => {
    let r = a.useCallback(
        (r, a) =>
            n.default.track(s.rMx.SLIDE_CAROUSEL_ITEM_VIEWED, {
                carousel_id: e,
                slide_id: null != a ? a : r.toString(),
                slide_index: r,
                location_stack: t
            }),
        [e, t]
    );
    return {
        trackSlideView: r,
        trackPagination: a.useCallback(
            (r, a, i, o) =>
                n.default.track(s.rMx.SLIDE_CAROUSEL_PAGINATION_CLICKED, {
                    carousel_id: e,
                    current_slide_index: a,
                    next_slide_index: r,
                    current_slide_id: o,
                    next_slide_id: i,
                    location_stack: t
                }),
            [e, t]
        )
    };
};
