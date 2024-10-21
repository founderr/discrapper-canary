t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    s = t(203143),
    l = t(615669),
    r = t(689938);
let o = {
    [l.z.END_EARLY]: (e) =>
        (0, i.jsx)(a.MenuItem, {
            id: 'end-poll-early',
            label: r.Z.Messages.POLL_END_EARLY,
            icon: a.ClockXIcon,
            action: () => {
                s.Z.endPollEarly({
                    channelId: e.channel_id,
                    messageId: e.id
                });
            },
            iconProps: { color: 'currentColor' }
        })
};
function u(e) {
    let n = (0, l.Z)(e);
    return 0 === n.length ? null : (0, i.jsx)(i.Fragment, { children: n.map((n) => o[n](e)) });
}
