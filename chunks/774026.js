n.d(t, {
    Z: function () {
        return h;
    }
});
var l = n(200651);
n(192379);
var i = n(913527),
    r = n.n(i),
    s = n(793030),
    a = n(739566),
    o = n(942951),
    c = n(63063),
    d = n(981631),
    u = n(388032),
    f = n(469054);
function h(e) {
    var t;
    let { streamingUntil: n, user: i, channel: h } = e,
        m = (0, a.JZ)(i, h),
        x = (0, o.l)({
            user: i,
            channelId: h.id,
            guildId: h.guild_id,
            messageId: void 0
        })(m),
        g = r()(n).diff(r()(), 'hours');
    return (0, l.jsxs)('div', {
        className: f.attribution,
        children: [
            (0, l.jsx)('div', {
                className: f.imgBlock,
                children: (0, l.jsx)('img', {
                    className: f.img,
                    src: 'https://cdn.discordapp.com/assets/content/7e38b58d2a2e6d5181a5c5fae84c68ec58208db194c63de0e7b7457a8db6b073.png',
                    alt: u.intl.string(u.t.DdigcX)
                })
            }),
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(s.X6, {
                        variant: 'heading-sm/bold',
                        children: u.intl.string(u.t.K04rOD)
                    }),
                    (0, l.jsx)(s.xv, {
                        color: 'text-muted',
                        variant: 'text-sm/medium',
                        children: u.intl.format(u.t.NZDuBg, {
                            actorName: null !== (t = i.globalName) && void 0 !== t ? t : i.username,
                            actorHook: x,
                            num: g,
                            helpCenterLink: c.Z.getArticleURL(d.BhN.HD_STREAMING_POTION)
                        })
                    })
                ]
            })
        ]
    });
}
