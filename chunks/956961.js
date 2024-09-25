n.d(t, {
    Z: function () {
        return O;
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
    h = n(695346),
    N = n(592125),
    f = n(655354),
    C = n(324081),
    p = n(791914),
    g = n(981631),
    A = n(689938),
    S = n(816396),
    x = n(42967);
let R = {
    offset: {
        left: 4,
        right: -12
    }
};
function O(e) {
    let { setTab: t, closePopout: n } = e,
        a = (0, c.e7)([T.Z], () => T.Z.getMessageReminders()),
        [r, l] = s.useState(!1),
        o = s.useMemo(() => a.filter((e) => null == e.saveData.dueAt || e.saveData.dueAt < new Date()), [a]),
        _ = r ? a : o;
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsx)(p.Z, {
                tab: u.X.TODOS,
                setTab: t,
                closePopout: n
            }),
            (0, i.jsxs)('div', {
                className: S.headerText,
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
            0 === _.length ? (0, i.jsx)(v, {}) : (0, i.jsx)(d.AdvancedScrollerThin, { children: _.map((e) => (0, i.jsx)(M, { messageReminder: e }, e.saveData.messageId)) })
        ]
    });
}
function M(e) {
    let t,
        { messageReminder: s } = e,
        a = s.saveData,
        l = s.message,
        u = (0, c.e7)([N.Z], () => N.Z.getChannel(a.channelId)),
        T = () => {
            (0, I.uL)(g.Z5c.CHANNEL(null == u ? void 0 : u.getGuildId(), a.channelId, a.messageId));
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
              className: x.container,
              children: [
                  (0, i.jsx)(C.Z, {
                      channel: u,
                      gotoChannel: T,
                      children: (0, i.jsxs)('div', {
                          className: S.reminderActions,
                          children: [
                              null != s.saveData.notes && s.saveData.notes.length > 0
                                  ? (0, i.jsxs)(d.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-muted',
                                        className: S.notes,
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
                                      className: S.clock,
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
                                      className: S.delete,
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
                      className: r()(x.messageContainer, S.unloadedMessage),
                      children: [
                          (0, i.jsx)(f.Z, {
                              className: x.jumpMessageButton,
                              onJump: T
                          }),
                          (0, i.jsx)(
                              E.Z,
                              {
                                  message: l,
                                  channel: u,
                                  className: x.message,
                                  compact: h.jU.getSetting(),
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
function v() {
    return null;
}
