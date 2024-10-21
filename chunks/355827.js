n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(481060),
    l = n(207055),
    r = n(938475),
    o = n(981631),
    c = n(689938),
    u = n(868610);
function d(e) {
    let { channel: t } = e,
        n = (0, s.e7)([r.ZP], () => r.ZP.getVoiceStatesForChannel(t));
    return (0, i.jsxs)('div', {
        className: u.root,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/bold',
                className: u.header,
                children: c.Z.Messages.CHANNEL_CALL_MEMBERS_POPOUT_HEADER.format({ count: n.length })
            }),
            (0, i.jsx)(a.Scroller, {
                className: u.scroller,
                children: (0, i.jsx)(l.Z, {
                    allowDragging: !1,
                    allowPreviews: !1,
                    className: u.voiceUsers,
                    channel: t,
                    voiceStates: n,
                    collapsed: !1,
                    location: o.Sbl.CHANNEL_CALL
                })
            })
        ]
    });
}
