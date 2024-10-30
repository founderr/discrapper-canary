n.d(t, {
    AT: function () {
        return m;
    },
    fC: function () {
        return h;
    },
    gr: function () {
        return f;
    },
    hQ: function () {
        return a;
    }
});
var i,
    a,
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    o = n(442837),
    c = n(493683),
    u = n(336197),
    d = n(131704),
    _ = n(592125),
    E = n(981631),
    I = n(689938);
function m(e) {
    let { dueAt: t, now: n, type: i } = e;
    if (null == t)
        return {
            string: '',
            isOverdue: !1
        };
    let a = 0 === i ? I.Z.Messages.MESSAGE_REMINDERS_REMINDER_DUE_IN : I.Z.Messages.MESSAGE_REMINDERS_DUE_IN,
        s = 0 === i ? I.Z.Messages.MESSAGE_REMINDERS_REMINDER_OVERDUE : I.Z.Messages.MESSAGE_REMINDERS_OVERDUE,
        r = n > t;
    return {
        dueInText: (r ? s : a).format({
            duration: l()
                .duration(t.getTime() - n.getTime(), 'millisecond')
                .humanize()
        }),
        isOverdue: r
    };
}
function f(e) {
    let t = (0, o.e7)([_.Z], () => _.Z.getChannel(e.saveData.channelId));
    return s.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new d.nl({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: E.d4z.UNKNOWN,
                        name: I.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
                    })
                  : void 0,
        [t, e]
    );
}
async function h(e, t) {
    if ((null == t ? void 0 : t.type) === E.d4z.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await c.Z.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await c.Z.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, u.Z)(E.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId));
}
((i = a || (a = {}))[(i.LONG = 0)] = 'LONG'), (i[(i.SHORT = 1)] = 'SHORT');
