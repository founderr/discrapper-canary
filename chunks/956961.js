n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(913527),
    o = n.n(l),
    c = n(442837),
    u = n(524437),
    d = n(481060),
    _ = n(239091),
    E = n(294218),
    I = n(703656),
    m = n(324701),
    T = n(768943),
    f = n(695346),
    h = n(592125),
    N = n(655354),
    p = n(324081),
    C = n(791914),
    g = n(981631),
    S = n(689938),
    A = n(816396),
    x = n(42967);
let R = {
    offset: {
        left: 4,
        right: -12
    }
};
function v(e) {
    let { setTab: t, closePopout: n } = e,
        s = (0, c.e7)([T.Z], () => T.Z.getMessageReminders()),
        [r, l] = a.useState(!1),
        o = a.useMemo(() => s.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [s]),
        _ = r ? s : o;
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsx)(C.Z, {
                tab: u.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, i.jsxs)('div', {
                className: A.headerText,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-lg/bold',
                        children: r ? S.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : S.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
                    }),
                    (0, i.jsx)(d.Anchor, {
                        onClick: () => l(!r),
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: r ? S.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({ count: o.length }) : S.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({ count: s.length })
                        })
                    })
                ]
            }),
            0 === _.length ? (0, i.jsx)(M, {}) : (0, i.jsx)(d.AdvancedScrollerThin, { children: _.map((e) => (0, i.jsx)(O, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function O(e) {
    let t,
        { messageReminder: a } = e,
        s = a.saveData,
        l = a.message,
        u = (0, c.e7)([h.Z], () => h.Z.getChannel(s.channelId)),
        T = () => {
            (0, I.uL)(g.Z5c.CHANNEL(null == u ? void 0 : u.getGuildId(), s.channelId, s.messageId));
        },
        C = null;
    return (null != s.dueAt &&
        (s.dueAt > new Date()
            ? ((t = 'text-muted'),
              (C = S.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                  duration: o()
                      .duration(s.dueAt.getTime() - Date.now(), 'millisecond')
                      .humanize()
              })))
            : ((t = 'text-danger'),
              (C = S.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                  duration: o()
                      .duration(Date.now() - s.dueAt.getTime(), 'millisecond')
                      .humanize()
              })))),
    null == l || null == u)
        ? null
        : (0, i.jsxs)('div', {
              className: x.container,
              children: [
                  (0, i.jsx)(p.Z, {
                      channel: u,
                      gotoChannel: T,
                      children: (0, i.jsxs)('div', {
                          className: A.reminderActions,
                          children: [
                              null != a.saveData.notes && a.saveData.notes.length > 0
                                  ? (0, i.jsxs)(d.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: A.notes,
                                        selectable: !0,
                                        children: [
                                            (0, i.jsx)(d.FileIcon, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            a.saveData.notes
                                        ]
                                    })
                                  : null,
                              null != C
                                  ? (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: t,
                                        children: C
                                    })
                                  : null,
                              (0, i.jsx)(d.TooltipContainer, {
                                  text: S.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
                                  children: (0, i.jsx)(d.Clickable, {
                                      onClick: (e) =>
                                          (0, _.jW)(e, async () => {
                                              let { default: e } = await n.e('6045').then(n.bind(n, 883150));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      message: l
                                                  });
                                          }),
                                      className: A.clock,
                                      children: (0, i.jsx)(d.ClockIcon, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              }),
                              (0, i.jsx)(d.TooltipContainer, {
                                  text: S.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
                                  children: (0, i.jsx)(d.Clickable, {
                                      onClick: () => (0, m.x)(s),
                                      className: A.delete,
                                      children: (0, i.jsx)(d.TrashIcon, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              })
                          ]
                      })
                  }),
                  (0, i.jsxs)('div', {
                      className: r()(x.messageContainer, A.unloadedMessage),
                      children: [
                          (0, i.jsx)(N.Z, {
                              className: x.jumpMessageButton,
                              onJump: T
                          }),
                          (0, i.jsx)(
                              E.Z,
                              {
                                  message: l,
                                  channel: u,
                                  className: x.message,
                                  compact: f.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: R,
                                  trackAnnouncementViews: !0
                              },
                              l.id
                          )
                      ]
                  })
              ]
          });
}
function M() {
    return null;
}
