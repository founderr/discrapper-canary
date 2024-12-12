r.d(t, {
    R7: function () {
        return n;
    },
    eQ: function () {
        return o;
    },
    fe: function () {
        return _;
    }
});
var a = r(981631);
let n = [a.rMx.START_SPEAKING, a.rMx.START_LISTENING, a.rMx.APP_OPENED, a.rMx.NOTIFICATION_CLICKED, a.rMx.EXPERIMENT_USER_TRIGGERED, a.rMx.EXPERIMENT_DM_TRIGGERED, a.rMx.EXPERIMENT_GUILD_TRIGGERED];
function _(e) {
    let { maxBudgetMinute: t, maxBudgetHour: r } = e,
        a = {
            minute: {
                slot: 0,
                budgetUsed: 0
            },
            hour: {
                slot: 0,
                budgetUsed: 0
            }
        };
    return () => {
        let e = Date.now(),
            n = Math.round(e / 1000 / 60),
            _ = Math.round(e / 1000 / 60 / 60);
        return a.minute.slot !== n && ((a.minute.slot = n), (a.minute.budgetUsed = 0)), a.hour.slot !== _ && ((a.hour.slot = _), (a.hour.budgetUsed = 0)), !!(a.minute.budgetUsed < t) && (a.minute.budgetUsed++, !!(a.hour.budgetUsed < r)) && (a.hour.budgetUsed++, !0);
    };
}
function o() {
    let e = window;
    return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox;
}
