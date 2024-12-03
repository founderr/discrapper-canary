t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651),
    r = t(963614),
    a = t(208156),
    l = t(701488),
    o = t(864096);
function d(e) {
    var n, t, d;
    let { channelId: c, guildId: u, embeddedActivity: s, application: p } = e,
        v = {
            instance_id: null !== (d = null !== (t = s.compositeInstanceId) && void 0 !== t ? t : s.launchId) && void 0 !== d ? d : '',
            location_id: null === (n = s.location) || void 0 === n ? void 0 : n.id,
            launch_id: s.launchId
        };
    return (
        null != u && '' !== u && (v.guild_id = u),
        null != c && '' !== c && (v.channel_id = c),
        (0, i.jsx)(a.J, {
            allowPopups: (0, r.h)(p),
            referrerPolicy: l.um.has(s.applicationId) ? 'no-referrer' : 'origin',
            url: s.url,
            queryParams: v,
            className: o.iframe,
            shouldRefocus: !1
        })
    );
}
