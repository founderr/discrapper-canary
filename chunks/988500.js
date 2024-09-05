t.d(n, {
    Z: function () {
        return u;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(203143),
    r = t(615669),
    s = t(689938);
let o = {
    [r.z.END_EARLY]: (e) =>
        (0, a.jsx)(i.MenuItem, {
            id: 'end-poll-early',
            label: s.Z.Messages.POLL_END_EARLY,
            icon: i.ClockXIcon,
            action: () => {
                l.Z.endPollEarly({
                    channelId: e.channel_id,
                    messageId: e.id
                });
            },
            iconProps: { color: 'currentColor' }
        })
};
function u(e) {
    let n = (0, r.Z)(e);
    return 0 === n.length ? null : (0, a.jsx)(a.Fragment, { children: n.map((n) => o[n](e)) });
}
