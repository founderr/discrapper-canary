var i = n(570140),
    r = n(703656),
    l = n(998502),
    a = n(852926),
    o = n(186901),
    s = n(981631);
t.Z = {
    [s.Etm.OPEN_MESSAGE]: {
        scope: o.lH,
        handler(e) {
            let {
                args: { guild_id: t, channel_id: n, message_id: o, pid: c }
            } = e;
            if ((0, a.jU)(c).context === s.IlC.OVERLAY) {
                i.Z.dispatch({
                    type: 'OVERLAY_OPEN_MESSAGE',
                    guildId: t,
                    channelId: n,
                    messageId: o
                });
                return;
            }
            (0, r.dL)({ pathname: s.Z5c.CHANNEL(t, n, o) }), l.ZP.focus();
        }
    }
};
