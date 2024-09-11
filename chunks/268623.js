t.d(n, {
    Z: function () {
        return _;
    }
}),
    t(47120);
var a = t(735250),
    i = t(470079),
    l = t(442837),
    r = t(481060),
    s = t(436774),
    o = t(324701),
    u = t(575016),
    d = t(768943),
    c = t(175006),
    E = t(121254),
    M = t(742989),
    I = t(898150),
    m = t(70956),
    g = t(689938);
function _(e) {
    let { showReminders: n } = M.Z.useExperiment({ location: 'useForLaterItem' }, { autoTrackExposure: !1 }),
        { enabled: t } = E.Z.useExperiment({ location: 'useForLaterItem' }, { autoTrackExposure: !1 }),
        _ = (0, l.e7)([d.Z], () => d.Z.getSavedMessage(e.channel_id, e.id)),
        f = (function (e) {
            let { message: n, savedMessage: t } = e,
                [l, s] = i.useState(new Date());
            i.useEffect(() => {
                let e = setInterval(() => s(new Date()), m.Z.Millis.MINUTE);
                return () => {
                    clearInterval(e);
                };
            }, []);
            let d = i.useCallback(
                    (e) =>
                        (0, o.z)({
                            channelId: n.channel_id,
                            messageId: n.id,
                            dueAt: e,
                            displayToast: !0
                        }),
                    [n.channel_id, n.id]
                ),
                c = (0, I.useMessageReminderDurationSuggestions)({ createReminder: d }),
                { dueInText: E } = (0, u.A)({
                    dueAt: null == t ? void 0 : t.saveData.dueAt,
                    now: l,
                    type: u.h.LONG
                });
            return (null == t ? void 0 : t.saveData.dueAt) == null
                ? (0, a.jsx)(r.MenuGroup, {
                      label: g.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                      children: c
                  })
                : (0, a.jsxs)(r.MenuGroup, {
                      label: E,
                      children: [
                          (0, a.jsx)(r.MenuItem, {
                              id: 'mark-complete',
                              label: g.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                              icon: r.CheckmarkSmallIcon,
                              action: () =>
                                  (0, o.z)({
                                      channelId: n.channel_id,
                                      messageId: n.id,
                                      dueAt: void 0
                                  })
                          }),
                          (0, a.jsx)(r.MenuItem, {
                              id: 'edit-reminder',
                              label: g.Z.Messages.MESSAGE_REMINDERS_EDIT,
                              children: c
                          })
                      ]
                  });
        })({
            message: e,
            savedMessage: _
        });
    return n || t
        ? (0, c.Z)()
            ? (0, a.jsxs)(r.MenuItem, {
                  id: 'save-for-later',
                  label: g.Z.Messages.FOR_LATER_SAVE,
                  action: () =>
                      (0, o.z)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0
                      }),
                  children: [
                      null != _
                          ? (0, a.jsx)(r.MenuItem, {
                                id: 'remove-from-for-later',
                                label: g.Z.Messages.FOR_LATER_REMOVE,
                                action: () =>
                                    (0, o.x)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        dueAt: _.saveData.dueAt,
                                        displayToast: !0
                                    }),
                                color: 'danger'
                            })
                          : (0, a.jsx)(r.MenuItem, {
                                id: 'create-bookmark',
                                label: g.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                                icon: r.BookmarkOutlineIcon,
                                action: () =>
                                    (0, o.z)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        displayToast: !0
                                    })
                            }),
                      (0, a.jsx)(r.MenuSeparator, {}),
                      f
                  ]
              })
            : (0, a.jsx)(r.MenuItem, {
                  id: 'save-for-later-upsell',
                  label: g.Z.Messages.FOR_LATER_SAVE,
                  icon: r.NitroWheelIcon,
                  iconProps: { color: s.JX.PREMIUM_TIER_2 },
                  action: () =>
                      (0, o.z)({
                          channelId: e.channel_id,
                          messageId: e.id,
                          displayToast: !0
                      })
              })
        : null;
}
