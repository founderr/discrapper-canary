t.d(n, {
    Z: function () {
        return g;
    }
}),
    t(47120);
var a = t(735250),
    i = t(470079),
    l = t(913527),
    r = t.n(l),
    s = t(442837),
    o = t(481060),
    u = t(324701),
    d = t(768943),
    c = t(121254),
    E = t(742989),
    M = t(898150),
    I = t(70956),
    m = t(689938);
function g(e) {
    let { showReminders: n } = E.Z.useExperiment({ location: 'useForLaterItem' }, { autoTrackExposure: !1 }),
        { enabled: t } = c.Z.useExperiment({ location: 'useForLaterItem' }, { autoTrackExposure: !1 }),
        l = (0, s.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)),
        g = (function (e) {
            let { message: n, savedMessage: t } = e,
                [l, s] = i.useState(new Date());
            i.useEffect(() => {
                let e = setInterval(() => s(new Date()), I.Z.Millis.MINUTE);
                return () => {
                    clearInterval(e);
                };
            }, []);
            let d = i.useCallback(
                    (e) =>
                        (0, u.z)({
                            channelId: n.channel_id,
                            messageId: n.id,
                            dueAt: e,
                            displayToast: !0
                        }),
                    [n.channel_id, n.id]
                ),
                c = (0, M.useMessageReminderDurationSuggestions)({ createReminder: d });
            if ((null == t ? void 0 : t.saveData.dueAt) == null)
                return (0, a.jsx)(o.MenuGroup, {
                    label: m.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                    children: c
                });
            let E = '';
            return (
                (E =
                    t.saveData.dueAt > l
                        ? m.Z.Messages.MESSAGE_REMINDERS_REMINDER_DUE_IN.format({
                              duration: r()
                                  .duration(t.saveData.dueAt.getTime() - l.getTime(), 'millisecond')
                                  .humanize()
                          })
                        : m.Z.Messages.MESSAGE_REMINDERS_REMINDER_OVERDUE.format({
                              duration: r()
                                  .duration(t.saveData.dueAt.getTime() - l.getTime(), 'millisecond')
                                  .humanize()
                          })),
                (0, a.jsxs)(o.MenuGroup, {
                    label: E,
                    children: [
                        (0, a.jsx)(o.MenuItem, {
                            id: 'mark-complete',
                            label: m.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                            icon: o.CheckmarkSmallIcon,
                            action: () =>
                                (0, u.z)({
                                    channelId: n.channel_id,
                                    messageId: n.id,
                                    dueAt: void 0
                                })
                        }),
                        (0, a.jsx)(o.MenuItem, {
                            id: 'edit-reminder',
                            label: m.Z.Messages.MESSAGE_REMINDERS_EDIT,
                            children: c
                        })
                    ]
                })
            );
        })({
            message: e,
            savedMessage: l
        });
    return n || t
        ? (0, a.jsxs)(o.MenuItem, {
              id: 'save-for-later',
              label: m.Z.Messages.FOR_LATER_SAVE,
              action: () =>
                  (0, u.z)({
                      channelId: e.channel_id,
                      messageId: e.id,
                      displayToast: !0
                  }),
              children: [
                  null != l
                      ? (0, a.jsx)(o.MenuItem, {
                            id: 'remove-from-for-later',
                            label: m.Z.Messages.FOR_LATER_REMOVE,
                            action: () =>
                                (0, u.x)({
                                    channelId: e.channel_id,
                                    messageId: e.id,
                                    dueAt: l.saveData.dueAt,
                                    displayToast: !0
                                }),
                            color: 'danger'
                        })
                      : (0, a.jsx)(o.MenuItem, {
                            id: 'create-bookmark',
                            label: m.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                            icon: o.BookmarkOutlineIcon,
                            action: () =>
                                (0, u.z)({
                                    channelId: e.channel_id,
                                    messageId: e.id,
                                    displayToast: !0
                                })
                        }),
                  (0, a.jsx)(o.MenuSeparator, {}),
                  g
              ]
          })
        : null;
}
