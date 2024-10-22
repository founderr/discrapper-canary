n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(278074),
    a = n(788307),
    r = n(26033),
    s = n(689938);
function o(e) {
    let { entry: t, className: n, textClassName: o } = e,
        c = (0, l.EQ)(t)
            .when(r.dX, (e) => {
                let { extra: t } = e;
                return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({ gameName: t.game_name });
            })
            .when(r.dU, (e) => {
                let { extra: t } = e;
                return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_LISTENED_TO_MEDIA.format({ media: t.entries[0].media.title });
            })
            .when(r.KF, (e) => {
                let { extra: t } = e;
                return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_LISTENED_TO_MEDIA.format({ media: t.media.title });
            })
            .when(r.y0, (e) => {
                let { extra: t } = e;
                return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCHED_MEDIA.format({ mediaTitle: t.media_title });
            })
            .when(r.Mq, (e) => {
                let { extra: t } = e;
                return s.Z.Messages.MEMBER_LIST_CONTENT_FEED_PLAYED_GAME.format({ gameName: t.activity_name });
            })
            .exhaustive();
    return (0, i.jsx)('div', {
        className: n,
        children: (0, i.jsx)(a.DD, {
            text: c,
            className: o
        })
    });
}
