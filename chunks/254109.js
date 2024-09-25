n.d(t, {
    VO: function () {
        return c;
    },
    f0: function () {
        return d;
    },
    fS: function () {
        return u;
    }
});
var r = n(652874),
    i = n(731965),
    a = n(626135),
    o = n(981631);
let s = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        viewerSwipes: 0,
        thumbnailSwipes: 0,
        selectedItemChanges: 0,
        numMediaItems: 0
    },
    l = (0, r.Z)(() => s);
function u(e, t, n, r) {
    (0, i.j)(() =>
        l.setState({
            ...s,
            guildId: e,
            channelId: t,
            channelType: n,
            numMediaItems: r
        })
    );
}
function c() {
    let e = l.getState();
    a.default.track(o.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
        guild_id: e.guildId,
        channel_id: e.channelId,
        channel_type: e.channelType,
        number_viewer_swipes: e.viewerSwipes,
        number_thumbnail_swipes: e.thumbnailSwipes,
        number_selected_item_changes: e.selectedItemChanges,
        number_media_items: e.numMediaItems
    }),
        (0, i.j)(() => l.setState({ ...s }));
}
function d() {
    (0, i.j)(() => l.setState((e) => ({ selectedItemChanges: e.selectedItemChanges + 1 })));
}
