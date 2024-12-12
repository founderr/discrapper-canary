r.d(n, {
    O: function () {
        return u;
    },
    w: function () {
        return l;
    }
});
var i,
    a,
    s = r(367907),
    o = r(981631);
function l() {
    s.ZP.trackWithMetadata(o.rMx.NOTIFICATION_CTA_CLICKED, {
        notification_type: 'Reminder Notification',
        action: 'Guild Invite',
        dismissed: !1
    });
}
function u() {
    s.ZP.trackWithMetadata(o.rMx.NOTIFICATION_CTA_CLICKED, {
        notification_type: 'Reminder Notification',
        action: 'Guild Invite',
        dismissed: !0
    });
}
!(function (e) {
    e.REMINDER_NOTIFICATION = 'Reminder Notification';
})(i || (i = {})),
    !(function (e) {
        e.GUILD_INVITE = 'Guild Invite';
    })(a || (a = {}));
