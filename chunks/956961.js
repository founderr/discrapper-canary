n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
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
    N = n(695346),
    h = n(592125),
    C = n(655354),
    f = n(324081),
    p = n(240126),
    g = n(791914),
    S = n(981631),
    A = n(689938),
    R = n(72506),
    O = n(674069);
let x = {
    offset: {
        left: 4,
        right: -12
    }
};
function M(e) {
    let { setTab: t, closePopout: n } = e,
        a = (0, c.e7)([T.Z], () => T.Z.getMessageReminders()),
        [r, l] = s.useState(!1),
        o = s.useMemo(() => a.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [a]),
        _ = r ? a : o;
    return (0, i.jsxs)('div', {
        className: R.container,
        children: [
            (0, i.jsx)(g.Z, {
                tab: u.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, i.jsxs)('div', {
                className: R.headerText,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-lg/bold',
                        children: r ? A.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : A.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
                    }),
                    (0, i.jsx)(d.Anchor, {
                        onClick: () => l(!r),
                        children: (0, i.jsx)(d.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: r ? A.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({ count: o.length }) : A.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({ count: a.length })
                        })
                    })
                ]
            }),
            0 === _.length ? (0, i.jsx)(L, {}) : (0, i.jsx)(d.AdvancedScrollerThin, { children: _.map((e) => (0, i.jsx)(v, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function v(e) {
    let t,
        { messageReminder: s } = e,
        a = s.saveData,
        l = s.message,
        u = (0, c.e7)([h.Z], () => h.Z.getChannel(a.channelId)),
        T = () => {
            (0, I.uL)(S.Z5c.CHANNEL(null == u ? void 0 : u.getGuildId(), a.channelId, a.messageId));
        },
        p = null;
    return (null != a.dueAt &&
        (a.dueAt > new Date()
            ? ((t = 'text-muted'),
              (p = A.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                  duration: o()
                      .duration(a.dueAt.getTime() - Date.now(), 'millisecond')
                      .humanize()
              })))
            : ((t = 'text-danger'),
              (p = A.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                  duration: o()
                      .duration(Date.now() - a.dueAt.getTime(), 'millisecond')
                      .humanize()
              })))),
    null == l || null == u)
        ? null
        : (0, i.jsxs)('div', {
              className: O.container,
              children: [
                  (0, i.jsx)(f.Z, {
                      channel: u,
                      gotoChannel: T,
                      children: (0, i.jsxs)('div', {
                          className: R.reminderActions,
                          children: [
                              null != s.saveData.notes && s.saveData.notes.length > 0
                                  ? (0, i.jsxs)(d.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: R.notes,
                                        selectable: !0,
                                        children: [
                                            (0, i.jsx)(d.FileIcon, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            s.saveData.notes
                                        ]
                                    })
                                  : null,
                              null != p
                                  ? (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        color: t,
                                        children: p
                                    })
                                  : null,
                              (0, i.jsx)(d.TooltipContainer, {
                                  text: A.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
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
                                      className: R.clock,
                                      children: (0, i.jsx)(d.ClockIcon, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              }),
                              (0, i.jsx)(d.TooltipContainer, {
                                  text: A.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
                                  children: (0, i.jsx)(d.Clickable, {
                                      onClick: () => (0, m.x)(a),
                                      className: R.delete,
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
                      className: r()(O.messageContainer, R.unloadedMessage),
                      children: [
                          (0, i.jsx)(C.Z, {
                              className: O.jumpMessageButton,
                              onJump: T
                          }),
                          (0, i.jsx)(
                              E.Z,
                              {
                                  message: l,
                                  channel: u,
                                  className: O.message,
                                  compact: N.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: x,
                                  trackAnnouncementViews: !0
                              },
                              l.id
                          )
                      ]
                  })
              ]
          });
}
function L() {
    return (0, i.jsx)(p.Z, {
        Icon: d.DoubleCheckmarkIcon,
        header: A.Z.Messages.MESSAGE_REMINDERS_EMPTY,
        tip: A.Z.Messages.MESSAGE_REMINDERS_EMPTY_TIP
    });
}
