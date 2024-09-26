n.d(t, {
    AT: function () {
        return f;
    },
    fC: function () {
        return p;
    },
    gr: function () {
        return h;
    },
    hQ: function () {
        return r;
    }
});
var r,
    i = n(470079),
    a = n(913527),
    o = n.n(a),
    s = n(442837),
    l = n(493683),
    u = n(336197),
    c = n(131704),
    d = n(592125),
    _ = n(981631),
    E = n(689938);
function f(e) {
    let { dueAt: t, now: n, type: r } = e;
    if (null == t)
        return {
            string: '',
            isOverdue: !1
        };
    let i = 0 === r ? E.Z.Messages.MESSAGE_REMINDERS_REMINDER_DUE_IN : E.Z.Messages.MESSAGE_REMINDERS_DUE_IN,
        a = 0 === r ? E.Z.Messages.MESSAGE_REMINDERS_REMINDER_OVERDUE : E.Z.Messages.MESSAGE_REMINDERS_OVERDUE,
        s = n > t;
    return {
        dueInText: (s ? a : i).format({
            duration: o()
                .duration(t.getTime() - n.getTime(), 'millisecond')
                .humanize()
        }),
        isOverdue: s
    };
}
function h(e) {
    let t = (0, s.e7)([d.Z], () => d.Z.getChannel(e.saveData.channelId));
    return i.useMemo(
        () =>
            null != t
                ? t
                : null != e.message
                  ? new c.nl({
                        id: e.saveData.channelId,
                        guild_id: e.saveData.guildId,
                        type: _.d4z.UNKNOWN,
                        name: E.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
                    })
                  : void 0,
        [t, e]
    );
}
async function p(e, t) {
    if ((null == t ? void 0 : t.type) === _.d4z.UNKNOWN && null == e.saveData.guildId)
        try {
            let t = await l.Z.fetchChannel(e.saveData.channelId);
            if (null == t.recipients || t.recipients.length > 1) return;
            await l.Z.ensurePrivateChannel(t.recipients.map((e) => e.id));
        } catch (e) {}
    (0, u.Z)(_.Z5c.CHANNEL(null == t ? void 0 : t.getGuildId(), e.saveData.channelId, e.saveData.messageId));
}
!(function (e) {
    (e[(e.LONG = 0)] = 'LONG'), (e[(e.SHORT = 1)] = 'SHORT');
})(r || (r = {}));
