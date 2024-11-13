i.d(n, {
    Z: function () {
        return o;
    }
});
var t = i(200651),
    a = i(963614),
    l = i(208156),
    r = i(701488),
    d = i(848556);
function o(e) {
    var n, i, o;
    let { channelId: c, guildId: u, embeddedActivity: s, application: v } = e,
        m = {
            instance_id: null !== (o = null !== (i = s.compositeInstanceId) && void 0 !== i ? i : s.launchId) && void 0 !== o ? o : '',
            location_id: null === (n = s.location) || void 0 === n ? void 0 : n.id,
            launch_id: s.launchId
        };
    return (
        null != u && '' !== u && (m.guild_id = u),
        null != c && '' !== c && (m.channel_id = c),
        (0, t.jsx)(l.J, {
            allowPopups: (0, a.h)(v),
            referrerPolicy: r.um.has(s.applicationId) ? 'no-referrer' : 'origin',
            url: s.url,
            queryParams: m,
            className: d.iframe,
            shouldRefocus: !1
        })
    );
}
