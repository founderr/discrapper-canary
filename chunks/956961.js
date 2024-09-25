n.d(t, {
    Z: function () {
        return y;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(913527),
    u = n.n(l),
    c = n(442837),
    d = n(524437),
    _ = n(481060),
    E = n(239091),
    f = n(294218),
    h = n(703656),
    p = n(324701),
    m = n(768943),
    I = n(695346),
    T = n(592125),
    g = n(655354),
    S = n(324081),
    A = n(791914),
    v = n(981631),
    N = n(689938),
    O = n(816396),
    R = n(42967);
let C = {
    offset: {
        left: 4,
        right: -12
    }
};
function y(e) {
    let { setTab: t, closePopout: n } = e,
        r = (0, c.e7)([m.Z], () => m.Z.getMessageReminders()),
        [o, s] = a.useState(!1),
        l = a.useMemo(() => r.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [r]),
        u = o ? r : l;
    return (0, i.jsxs)('div', {
        className: O.container,
        children: [
            (0, i.jsx)(A.Z, {
                tab: d.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, i.jsxs)('div', {
                className: O.headerText,
                children: [
                    (0, i.jsx)(_.Heading, {
                        variant: 'heading-lg/bold',
                        children: o ? N.Z.Messages.MESSAGE_REMINDERS_HEADER_ALL : N.Z.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
                    }),
                    (0, i.jsx)(_.Anchor, {
                        onClick: () => s(!o),
                        children: (0, i.jsx)(_.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-link',
                            children: o ? N.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({ count: l.length }) : N.Z.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({ count: r.length })
                        })
                    })
                ]
            }),
            0 === u.length ? (0, i.jsx)(L, {}) : (0, i.jsx)(_.AdvancedScrollerThin, { children: u.map((e) => (0, i.jsx)(b, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function b(e) {
    let t,
        { messageReminder: r } = e,
        a = r.saveData,
        o = r.message,
        l = (0, c.e7)([T.Z], () => T.Z.getChannel(a.channelId)),
        d = () => {
            (0, h.uL)(v.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), a.channelId, a.messageId));
        },
        m = null;
    return (null != a.dueAt &&
        (a.dueAt > new Date()
            ? ((t = 'text-muted'),
              (m = N.Z.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                  duration: u()
                      .duration(a.dueAt.getTime() - Date.now(), 'millisecond')
                      .humanize()
              })))
            : ((t = 'text-danger'),
              (m = N.Z.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                  duration: u()
                      .duration(Date.now() - a.dueAt.getTime(), 'millisecond')
                      .humanize()
              })))),
    null == o || null == l)
        ? null
        : (0, i.jsxs)('div', {
              className: R.container,
              children: [
                  (0, i.jsx)(S.Z, {
                      channel: l,
                      gotoChannel: d,
                      children: (0, i.jsxs)('div', {
                          className: O.reminderActions,
                          children: [
                              null != r.saveData.notes && r.saveData.notes.length > 0
                                  ? (0, i.jsxs)(_.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: O.notes,
                                        selectable: !0,
                                        children: [
                                            (0, i.jsx)(_.FileIcon, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            r.saveData.notes
                                        ]
                                    })
                                  : null,
                              null != m
                                  ? (0, i.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        color: t,
                                        children: m
                                    })
                                  : null,
                              (0, i.jsx)(_.TooltipContainer, {
                                  text: N.Z.Messages.MESSAGE_REMINDERS_SNOOZE,
                                  children: (0, i.jsx)(_.Clickable, {
                                      onClick: (e) =>
                                          (0, E.jW)(e, async () => {
                                              let { default: e } = await n.e('6045').then(n.bind(n, 883150));
                                              return (t) =>
                                                  (0, i.jsx)(e, {
                                                      ...t,
                                                      message: o
                                                  });
                                          }),
                                      className: O.clock,
                                      children: (0, i.jsx)(_.ClockIcon, {
                                          size: 'custom',
                                          width: 20,
                                          height: 20,
                                          color: 'currentColor'
                                      })
                                  })
                              }),
                              (0, i.jsx)(_.TooltipContainer, {
                                  text: N.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE,
                                  children: (0, i.jsx)(_.Clickable, {
                                      onClick: () => (0, p.x)(a),
                                      className: O.delete,
                                      children: (0, i.jsx)(_.TrashIcon, {
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
                      className: s()(R.messageContainer, O.unloadedMessage),
                      children: [
                          (0, i.jsx)(g.Z, {
                              className: R.jumpMessageButton,
                              onJump: d
                          }),
                          (0, i.jsx)(
                              f.Z,
                              {
                                  message: o,
                                  channel: l,
                                  className: R.message,
                                  compact: I.jU.getSetting(),
                                  animateAvatar: !1,
                                  focusProps: C,
                                  trackAnnouncementViews: !0
                              },
                              o.id
                          )
                      ]
                  })
              ]
          });
}
function L() {
    return null;
}
