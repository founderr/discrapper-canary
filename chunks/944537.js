n.d(t, {
    I: function () {
        return r;
    },
    n: function () {
        return u;
    }
});
var i,
    r,
    o = n(15729),
    l = n(731965);
((i = r || (r = {}))[(i.ALL_CHANNELS_ACCESS = 0)] = 'ALL_CHANNELS_ACCESS'), (i[(i.SOME_CHANNELS_ACCESS = 1)] = 'SOME_CHANNELS_ACCESS');
let u = (0, o.U)((e) => ({
    listings: {},
    setListing: (t, n) =>
        (0, l.j)(() =>
            e((e) => ({
                listings: {
                    ...e.listings,
                    [t]: n(e.listings[t])
                }
            }))
        ),
    editStateIdsForGroup: {},
    setEditStateIdsForGroup: (t, n) =>
        (0, l.j)(() => {
            e((e) => ({
                editStateIdsForGroup: {
                    ...e.editStateIdsForGroup,
                    [t]: n(e.editStateIdsForGroup[t])
                }
            }));
        })
}));
