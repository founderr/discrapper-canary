n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(735250);
n(470079);
var l = n(278074),
    r = n(788307),
    a = n(6074),
    s = n(26033),
    o = n(689938),
    c = n(23952);
function u(e) {
    let { entry: t, className: n, textClassName: u } = e,
        d = (0, l.EQ)(t)
            .when(s.dX, (e) => {
                let { extra: t } = e;
                return o.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({ gameName: t.game_name });
            })
            .when(s.dU, (e) => {
                let { extra: t } = e;
                return o.Z.Messages.MEMBER_LIST_CONTENT_FEED_LISTENED_TO_MEDIA.format({ media: t.entries[0].media.title });
            })
            .when(s.KF, (e) => {
                let { extra: t } = e;
                return o.Z.Messages.MEMBER_LIST_CONTENT_FEED_LISTENED_TO_MEDIA.format({ media: t.media.title });
            })
            .when(s.y0, (e) => {
                let { extra: t } = e;
                return o.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCHED_MEDIA.format({ mediaTitle: t.media_title });
            })
            .when(s.Mq, (e) => {
                let { extra: t } = e;
                return o.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({ gameName: t.activity_name });
            })
            .exhaustive();
    return (0, i.jsxs)('div', {
        className: n,
        children: [
            (0, i.jsx)(r.DD, {
                text: d,
                className: u
            }),
            (0, i.jsx)(a.Z, {
                width: 16,
                height: 16,
                className: c.icon
            })
        ]
    });
}
