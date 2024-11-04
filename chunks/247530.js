n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(287734),
    l = n(872810),
    s = n(51144),
    o = n(388032);
function c(e) {
    let { applicationStreams: t } = e;
    return t.map((e) => {
        let { stream: t, streamUser: n } = e;
        return (0, i.jsx)(
            r.MenuItem,
            {
                id: 'spectate-'.concat(t.ownerId),
                action: () => {
                    a.default.selectVoiceChannel(t.channelId), (0, l.iV)(t);
                },
                label: o.intl.formatToPlainString(o.t.m09d0d, { streamerName: s.ZP.getName(n) })
            },
            'spectate-'.concat(t.ownerId)
        );
    });
}
