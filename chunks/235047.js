t.d(n, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(324701),
    s = t(768943),
    o = t(742989),
    u = t(898150),
    d = t(689938);
function c(e) {
    let { showReminders: n } = o.Z.useExperiment({ location: 'use_message_reminders_item' }, { autoTrackExposure: !1 }),
        t = (0, a.e7)([s.Z], () => s.Z.isMessageReminder(e.channel_id, e.id)),
        c = (0, u.useMessageReminderDurationSuggestions)({
            createReminder: (n) =>
                (0, r.z)({
                    channelId: e.channel_id,
                    messageId: e.id,
                    dueAt: n,
                    displayToast: !0
                })
        });
    return n
        ? (0, i.jsxs)(l.MenuItem, {
              id: 'mark-todo',
              label: t ? d.Z.Messages.MESSAGE_REMINDERS_EDIT : d.Z.Messages.MESSAGE_REMINDERS_CREATE,
              children: [
                  (0, i.jsx)(l.MenuGroup, {
                      label: d.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                      children: c
                  }),
                  t
                      ? (0, i.jsx)(l.MenuItem, {
                            id: 'remove-reminder',
                            label: d.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
                            action: () =>
                                (0, r.x)({
                                    channelId: e.channel_id,
                                    messageId: e.id,
                                    displayToast: !0
                                }),
                            color: 'danger'
                        })
                      : null
              ]
          })
        : null;
}
