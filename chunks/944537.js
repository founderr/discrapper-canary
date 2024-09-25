n.d(t, {
    I: function () {
        return r;
    },
    n: function () {
        return o;
    }
});
var r,
    i = n(652874),
    a = n(731965);
!(function (e) {
    (e[(e.ALL_CHANNELS_ACCESS = 0)] = 'ALL_CHANNELS_ACCESS'), (e[(e.SOME_CHANNELS_ACCESS = 1)] = 'SOME_CHANNELS_ACCESS');
})(r || (r = {}));
let o = (0, i.Z)((e) => ({
    listings: {},
    setListing: (t, n) =>
        (0, a.j)(() =>
            e((e) => ({
                listings: {
                    ...e.listings,
                    [t]: n(e.listings[t])
                }
            }))
        ),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, a.j)(() => {
            e((e) => ({
                editStateIdsForGroup: {
                    ...e.editStateIdsForGroup,
                    [t]: n(e.editStateIdsForGroup[t])
                }
            }));
        })
}));
