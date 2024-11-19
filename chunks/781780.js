t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(200651),
    a = t(963614),
    r = t(208156),
    o = t(701488),
    l = t(493762);
function c(e) {
    var n, t, c;
    let { channelId: d, guildId: u, embeddedActivity: s, application: p } = e,
        v = {
            instance_id: null !== (c = null !== (t = s.compositeInstanceId) && void 0 !== t ? t : s.launchId) && void 0 !== c ? c : '',
            location_id: null === (n = s.location) || void 0 === n ? void 0 : n.id,
            launch_id: s.launchId
        };
    return (
        null != u && '' !== u && (v.guild_id = u),
        null != d && '' !== d && (v.channel_id = d),
        (0, i.jsx)(r.J, {
            allowPopups: (0, a.h)(p),
            referrerPolicy: o.um.has(s.applicationId) ? 'no-referrer' : 'origin',
            url: s.url,
            queryParams: v,
            className: l.iframe,
            shouldRefocus: !1
        })
    );
}
