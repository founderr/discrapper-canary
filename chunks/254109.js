t.d(l, {
    VO: function () {
        return u;
    },
    f0: function () {
        return m;
    },
    fS: function () {
        return d;
    }
});
var n = t(652874),
    i = t(731965),
    r = t(626135),
    a = t(981631);
let s = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        viewerSwipes: 0,
        thumbnailSwipes: 0,
        selectedItemChanges: 0,
        numMediaItems: 0
    },
    o = (0, n.Z)(() => s);
function d(e, l, t, n) {
    (0, i.j)(() =>
        o.setState({
            ...s,
            guildId: e,
            channelId: l,
            channelType: t,
            numMediaItems: n
        })
    );
}
function u() {
    let e = o.getState();
    r.default.track(a.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
        guild_id: e.guildId,
        channel_id: e.channelId,
        channel_type: e.channelType,
        number_viewer_swipes: e.viewerSwipes,
        number_thumbnail_swipes: e.thumbnailSwipes,
        number_selected_item_changes: e.selectedItemChanges,
        number_media_items: e.numMediaItems
    }),
        (0, i.j)(() => o.setState({ ...s }));
}
function m() {
    (0, i.j)(() => o.setState((e) => ({ selectedItemChanges: e.selectedItemChanges + 1 })));
}
