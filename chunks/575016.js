n.d(t, {
    A: function () {
        return s;
    },
    h: function () {
        return r;
    }
});
var r,
    i = n(913527),
    a = n.n(i),
    o = n(689938);
function s(e) {
    let { dueAt: t, now: n, type: r } = e;
    if (null == t)
        return {
            string: '',
            isOverdue: !1
        };
    let i = 0 === r ? o.Z.Messages.MESSAGE_REMINDERS_REMINDER_DUE_IN : o.Z.Messages.MESSAGE_REMINDERS_DUE_IN,
        s = 0 === r ? o.Z.Messages.MESSAGE_REMINDERS_REMINDER_OVERDUE : o.Z.Messages.MESSAGE_REMINDERS_OVERDUE,
        l = n > t;
    return {
        dueInText: (l ? s : i).format({
            duration: a()
                .duration(t.getTime() - n.getTime(), 'millisecond')
                .humanize()
        }),
        isOverdue: l
    };
}
!(function (e) {
    (e[(e.LONG = 0)] = 'LONG'), (e[(e.SHORT = 1)] = 'SHORT');
})(r || (r = {}));
