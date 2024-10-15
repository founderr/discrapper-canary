n.d(t, {
    H: function () {
        return s;
    }
});
var i = n(470079),
    a = n(726115);
function s(e) {
    let { guildDiscoveryCardSeenManager: t, loadId: n } = e,
        s = i.useCallback(
            (e, i) => {
                t.markAsSeen(i, e, n);
            },
            [t, n]
        ),
        r = i.useCallback(
            (e, t, i, s) =>
                (0, a.vL)({
                    loadId: n,
                    guildId: e,
                    index: t,
                    categoryId: i,
                    analyticsLocation: s
                }),
            [n]
        );
    return i.useMemo(
        () => ({
            onGuildCardSeen: s,
            onGuildCardClick: r
        }),
        [r, s]
    );
}
