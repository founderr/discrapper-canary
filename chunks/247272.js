i.d(t, {
    C: function () {
        return s;
    },
    x: function () {
        return l;
    }
}),
    i(47120);
var n = i(570140),
    a = i(93127);
function l(e) {
    let { omitUserIds: t, guild: i, channel: l, applicationId: s, inviteTargetType: r } = e;
    return (0, a.W)().then(() => {
        n.Z.dispatch({
            type: 'LOAD_INVITE_SUGGESTIONS',
            omitUserIds: null != t ? t : new Set(),
            guild: i,
            channel: l,
            applicationId: s,
            inviteTargetType: r
        });
    });
}
function s(e) {
    n.Z.dispatch({
        type: 'INVITE_SUGGESTIONS_SEARCH',
        query: e
    });
}
