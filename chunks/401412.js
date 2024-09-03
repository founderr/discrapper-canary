_.d(E, {
    s: function () {
        return M;
    }
});
var n = _(735250),
    t = _(481060),
    s = _(592125),
    a = _(305587);
function M(e) {
    let { channelId: E, location: M } = e,
        r = (0, a.Xs)(M),
        S = s.Z.getChannel(E);
    r &&
        null != S &&
        S.isDM() &&
        (0, t.openModalLazy)(async () => {
            let { default: e } = await _.e('10620').then(_.bind(_, 408561));
            return (E) =>
                (0, n.jsx)(e, {
                    ...E,
                    channel: S
                });
        });
}
