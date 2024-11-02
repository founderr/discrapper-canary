n.d(t, {
    H: function () {
        return l;
    }
});
var i = n(192379),
    r = n(726115);
function l(e) {
    let { guildDiscoveryCardSeenManager: t, loadId: n } = e,
        l = i.useCallback(
            (e, i) => {
                t.markAsSeen(i, e, n);
            },
            [t, n]
        ),
        a = i.useCallback(
            (e, t, i, l) =>
                (0, r.vL)({
                    loadId: n,
                    guildId: e,
                    index: t,
                    categoryId: i,
                    analyticsLocation: l
                }),
            [n]
        );
    return i.useMemo(
        () => ({
            onGuildCardSeen: l,
            onGuildCardClick: a
        }),
        [a, l]
    );
}
