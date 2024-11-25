t.d(n, {
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
var i = t(15729),
    o = t(731965),
    r = t(626135),
    a = t(981631);
let l = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        viewerSwipes: 0,
        thumbnailSwipes: 0,
        selectedItemChanges: 0,
        numMediaItems: 0
    },
    s = (0, i.U)(() => l);
function c(e, n, t, i) {
    (0, o.j)(() =>
        s.setState({
            ...l,
            guildId: e,
            channelId: n,
            channelType: t,
            numMediaItems: i
        })
    );
}
function u() {
    let e = s.getState();
    r.default.track(a.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
        guild_id: e.guildId,
        channel_id: e.channelId,
        channel_type: e.channelType,
        number_viewer_swipes: e.viewerSwipes,
        number_thumbnail_swipes: e.thumbnailSwipes,
        number_selected_item_changes: e.selectedItemChanges,
        number_media_items: e.numMediaItems
    }),
        (0, o.j)(() => s.setState({ ...l }));
}
function d() {
    (0, o.j)(() => s.setState((e) => ({ selectedItemChanges: e.selectedItemChanges + 1 })));
}
