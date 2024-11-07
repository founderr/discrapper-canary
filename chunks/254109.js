t.d(n, {
    VO: function () {
        return s;
    },
    f0: function () {
        return u;
    },
    fS: function () {
        return l;
    }
});
var o = t(903797),
    i = t(731965),
    a = t(626135),
    r = t(981631);
let c = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        viewerSwipes: 0,
        thumbnailSwipes: 0,
        selectedItemChanges: 0,
        numMediaItems: 0
    },
    d = (0, o.Z)(() => c);
function l(e, n, t, o) {
    (0, i.j)(() =>
        d.setState({
            ...c,
            guildId: e,
            channelId: n,
            channelType: t,
            numMediaItems: o
        })
    );
}
function s() {
    let e = d.getState();
    a.default.track(r.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
        guild_id: e.guildId,
        channel_id: e.channelId,
        channel_type: e.channelType,
        number_viewer_swipes: e.viewerSwipes,
        number_thumbnail_swipes: e.thumbnailSwipes,
        number_selected_item_changes: e.selectedItemChanges,
        number_media_items: e.numMediaItems
    }),
        (0, i.j)(() => d.setState({ ...c }));
}
function u() {
    (0, i.j)(() => d.setState((e) => ({ selectedItemChanges: e.selectedItemChanges + 1 })));
}
