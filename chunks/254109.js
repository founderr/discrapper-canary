o.d(n, {
    VO: function () {
        return s;
    },
    f0: function () {
        return u;
    },
    fS: function () {
        return d;
    }
});
var t = o(652874),
    i = o(731965),
    a = o(626135),
    r = o(981631);
let l = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        viewerSwipes: 0,
        thumbnailSwipes: 0,
        selectedItemChanges: 0,
        numMediaItems: 0
    },
    c = (0, t.Z)(() => l);
function d(e, n, o, t) {
    (0, i.j)(() =>
        c.setState({
            ...l,
            guildId: e,
            channelId: n,
            channelType: o,
            numMediaItems: t
        })
    );
}
function s() {
    let e = c.getState();
    a.default.track(r.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
        guild_id: e.guildId,
        channel_id: e.channelId,
        channel_type: e.channelType,
        number_viewer_swipes: e.viewerSwipes,
        number_thumbnail_swipes: e.thumbnailSwipes,
        number_selected_item_changes: e.selectedItemChanges,
        number_media_items: e.numMediaItems
    }),
        (0, i.j)(() => c.setState({ ...l }));
}
function u() {
    (0, i.j)(() => c.setState((e) => ({ selectedItemChanges: e.selectedItemChanges + 1 })));
}
