n.d(e, {
    VO: function () {
        return u;
    },
    f0: function () {
        return d;
    },
    fS: function () {
        return c;
    }
});
var i = n(652874),
    s = n(731965),
    o = n(626135),
    r = n(981631);
let l = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        viewerSwipes: 0,
        thumbnailSwipes: 0,
        selectedItemChanges: 0,
        numMediaItems: 0
    },
    a = (0, i.Z)(() => l);
function c(t, e, n, i) {
    (0, s.j)(() =>
        a.setState({
            ...l,
            guildId: t,
            channelId: e,
            channelType: n,
            numMediaItems: i
        })
    );
}
function u() {
    let t = a.getState();
    o.default.track(r.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
        guild_id: t.guildId,
        channel_id: t.channelId,
        channel_type: t.channelType,
        number_viewer_swipes: t.viewerSwipes,
        number_thumbnail_swipes: t.thumbnailSwipes,
        number_selected_item_changes: t.selectedItemChanges,
        number_media_items: t.numMediaItems
    }),
        (0, s.j)(() => a.setState({ ...l }));
}
function d() {
    (0, s.j)(() => a.setState((t) => ({ selectedItemChanges: t.selectedItemChanges + 1 })));
}
