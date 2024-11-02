i.d(t, {
    Z: function () {
        return s;
    }
}),
    i(47120);
var n = i(192379),
    a = i(434650),
    r = i(626135),
    o = i(132871),
    l = i(981631);
function s(e) {
    let { collection: t } = e,
        [i, s] = n.useState(!1),
        c = (0, o.useApplicationDirectoryHistory)((e) => e.guildId),
        d = (0, a.O)((e) => {
            e && s(!0);
        });
    return (
        n.useEffect(() => {
            i &&
                r.default.track(l.rMx.APP_DIRECTORY_COLLECTION_VIEWED, {
                    collection_id: t.id,
                    guild_id: c
                });
        }, [i, t, c]),
        d
    );
}
