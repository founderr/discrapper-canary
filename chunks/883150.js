n.r(t),
    n.d(t, {
        default: function () {
            return l;
        }
    });
var a = n(200651);
n(192379);
var r = n(481060),
    i = n(239091),
    s = n(324701),
    u = n(898150),
    d = n(388032);
function l(e) {
    let { message: t } = e,
        n = (0, u.useMessageReminderDurationSuggestions)({
            createReminder: (e) =>
                (0, s.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, a.jsx)(r.Menu, {
        navId: 'message-reminder-snooze',
        onClose: i.Zy,
        'aria-label': d.intl.string(d.t.Xm41aW),
        onSelect: () => {},
        children: n
    });
}
