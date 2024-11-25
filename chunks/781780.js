t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(200651),
    o = t(963614),
    a = t(208156),
    r = t(701488),
    c = t(864096);
function l(e) {
    var n, t, l;
    let { channelId: d, guildId: s, embeddedActivity: u, application: _ } = e,
        f = {
            instance_id: null !== (l = null !== (t = u.compositeInstanceId) && void 0 !== t ? t : u.launchId) && void 0 !== l ? l : '',
            location_id: null === (n = u.location) || void 0 === n ? void 0 : n.id,
            launch_id: u.launchId
        };
    return (
        null != s && '' !== s && (f.guild_id = s),
        null != d && '' !== d && (f.channel_id = d),
        (0, i.jsx)(a.J, {
            allowPopups: (0, o.h)(_),
            referrerPolicy: r.um.has(u.applicationId) ? 'no-referrer' : 'origin',
            url: u.url,
            queryParams: f,
            className: c.iframe,
            shouldRefocus: !1
        })
    );
}
