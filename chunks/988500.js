t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(203143),
    a = t(615669),
    o = t(388032);
let s = {
    [a.z.END_EARLY]: (e) =>
        (0, i.jsx)(l.MenuItem, {
            id: 'end-poll-early',
            label: o.intl.string(o.t.grdwws),
            icon: l.ClockXIcon,
            action: () => {
                r.Z.endPollEarly({
                    channelId: e.channel_id,
                    messageId: e.id
                });
            },
            iconProps: { color: 'currentColor' }
        })
};
function u(e) {
    let n = (0, a.Z)(e);
    return 0 === n.length ? null : (0, i.jsx)(i.Fragment, { children: n.map((n) => s[n](e)) });
}
