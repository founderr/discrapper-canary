a.r(n),
    a.d(n, {
        default: function () {
            return d;
        }
    });
var s = a(735250);
a(470079);
var t = a(481060),
    r = a(239091),
    i = a(324701),
    l = a(898150),
    u = a(689938);
function d(e) {
    let { message: n } = e,
        a = (0, l.useMessageReminderDurationSuggestions)({
            createReminder: (e) =>
                (0, i.z)({
                    channelId: n.channel_id,
                    messageId: n.id,
                    dueAt: e
                })
        });
    return (0, s.jsx)(t.Menu, {
        navId: 'message-reminder-snooze',
        onClose: r.Zy,
        'aria-label': u.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
        onSelect: () => {},
        children: a
    });
}
