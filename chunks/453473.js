n.d(t, {
    P: function () {
        return B;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(512722),
    o = n.n(l),
    c = n(913527),
    u = n.n(c),
    d = n(990547),
    _ = n(91192),
    E = n(442837),
    I = n(481060),
    m = n(239091),
    T = n(724757),
    h = n(213609),
    N = n(294218),
    C = n(373662),
    f = n(703656),
    p = n(695346),
    g = n(592125),
    S = n(626135),
    A = n(585483),
    R = n(70956),
    O = n(324701),
    x = n(768943),
    M = n(686478),
    v = n(175006),
    L = n(767893),
    Z = n(206697),
    P = n(74551),
    D = n(981631),
    b = n(689938),
    j = n(982138);
let U = {
    offset: {
        left: 4,
        right: -12
    }
};
function y(e) {
    let { closePopout: t, throttledNow: n } = e,
        s = (0, E.e7)([x.Z], () => x.Z.getSavedMessages()),
        a = (0, E.e7)([x.Z], () => x.Z.getOverdueMessageReminderCount());
    return (
        (0, h.Z)(
            {
                type: d.ImpressionTypes.POPOUT,
                name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
                properties: {
                    total_count: s.length,
                    overdue_count: a
                }
            },
            {},
            [s.length, a]
        ),
        (0, i.jsx)(I.Dialog, {
            'aria-label': b.Z.Messages.FOR_LATER,
            children: (0, i.jsxs)('div', {
                className: j.popoutContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsxs)('div', {
                            className: j.headerTitle,
                            children: [
                                (0, i.jsx)(I.BookmarkIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: j.headerTitleIcon
                                }),
                                (0, i.jsx)(I.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: b.Z.Messages.FOR_LATER
                                })
                            ]
                        })
                    }),
                    0 !== s.length && (0, v.Z)()
                        ? (0, i.jsx)(k, {
                              savedMessages: s,
                              closePopout: t,
                              throttledNow: n
                          })
                        : (0, i.jsx)(Z.w, {})
                ]
            })
        })
    );
}
function B(e) {
    let { onOpen: t, onClose: n, children: a, popoutPosition: r, popoutAlign: l } = e,
        [o, c] = s.useState(!1),
        u = s.useCallback(() => {
            c(!1), o && (null == n || n());
        }, [n, o]),
        d = s.useCallback(() => {
            c(!o), o ? null == n || n() : null == t || t();
        }, [n, t, o]);
    s.useEffect(() => (A.S.subscribe(D.CkL.TOGGLE_FOR_LATER, d), () => void A.S.unsubscribe(D.CkL.TOGGLE_FOR_LATER, d)), [d]);
    let [_, m] = s.useState(new Date());
    s.useEffect(() => {
        let e = setInterval(() => m(new Date()), R.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let T = (0, E.e7)([x.Z], () => x.Z.hasOverdueReminder(_), [_]);
    return (0, i.jsx)(I.Popout, {
        animation: I.Popout.Animation.NONE,
        position: r,
        align: l,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: u,
        renderPopout: function () {
            return (0, i.jsx)(y, {
                closePopout: u,
                throttledNow: _
            });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return a(d, n, e, T);
        }
    });
}
function k(e) {
    let { savedMessages: t, closePopout: n, throttledNow: a } = e,
        r = s.useRef(null),
        l = (0, T.Z)('for-later', r);
    return (0, i.jsx)(_.bG, {
        navigator: l,
        children: (0, i.jsx)(_.SJ, {
            children: (e) => {
                let { ref: s, ...l } = e;
                return (0, i.jsx)(I.AdvancedScrollerThin, {
                    ref: (e) => {
                        var t;
                        (r.current = e), (s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                    },
                    className: j.messagesScroller,
                    ...l,
                    children: t.map((e) =>
                        (0, i.jsx)(
                            G,
                            {
                                savedMessage: e,
                                closePopout: n,
                                throttledNow: a
                            },
                            ''.concat(e.saveData.messageId)
                        )
                    )
                });
            }
        })
    });
}
function G(e) {
    let { savedMessage: t, closePopout: n, throttledNow: a } = e,
        l = (0, E.e7)([g.Z], () => g.Z.getChannel(t.saveData.channelId)),
        o = s.useCallback(
            (e) => {
                var i;
                !e.shiftKey && n(),
                    (0, f.uL)(D.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), t.saveData.channelId, t.saveData.messageId)),
                    S.default.track(D.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null === (i = t.message) || void 0 === i ? void 0 : i.author.id,
                        type: null != t.saveData.dueAt ? M._l.REMINDER : M._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, l]
        );
    return null == l || null == t.message
        ? (0, i.jsxs)('div', {
              className: r()(j.messageContainer, j.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: j.deleteIcon,
                      children: (0, i.jsx)(I.CircleWarningIcon, {
                          size: 'xxs',
                          color: I.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(I.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? b.Z.Messages.FOR_LATER_REMINDER_DELETED : b.Z.Messages.FOR_LATER_BOOKMARK_DELETED
                  }),
                  (0, i.jsx)(C.ZP, {
                      className: j.hoverBar,
                      children: (0, i.jsx)(
                          C.sF,
                          {
                              label: b.Z.Messages.FOR_LATER_REMOVE,
                              icon: I.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, O.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: j.messageContainer,
              children: [
                  (0, i.jsx)(I.Clickable, {
                      className: j.clickableMessageBackground,
                      onClick: o,
                      'aria-label': b.Z.Messages.JUMP_TO_MESSAGE
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(P.Z, {
                            reminder: t,
                            throttledNow: a
                        })
                      : null,
                  (0, i.jsx)(L.Z, { channel: l }),
                  (0, i.jsx)(
                      N.Z,
                      {
                          message: t.message,
                          channel: l,
                          className: j.message,
                          compact: p.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: U,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(C.ZP, {
                      className: j.hoverBar,
                      children: (0, i.jsx)(F, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          });
}
function F(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      C.sF,
                      {
                          label: b.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: I.CheckmarkLargeIcon,
                          onClick: () =>
                              (0, O.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      C.sF,
                      {
                          label: b.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: I.PencilIcon,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: b.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(C.fO, {}),
                  (0, i.jsx)(
                      C.sF,
                      {
                          label: b.Z.Messages.JUMP_TO_MESSAGE,
                          icon: I.ArrowLargeRightIcon,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      C.sF,
                      {
                          label: b.Z.Messages.FOR_LATER_REMOVE,
                          icon: I.BookmarkOutlineIcon,
                          onClick: () => (0, O.x)(t.saveData),
                          dangerous: !0
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      C.sF,
                      {
                          label: b.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: I.ClockIcon,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: b.Z.Messages.MESSAGE_REMINDERS_CREATE,
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      C.sF,
                      {
                          label: b.Z.Messages.JUMP_TO_MESSAGE,
                          icon: I.ArrowLargeRightIcon,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      C.sF,
                      {
                          label: b.Z.Messages.FOR_LATER_REMOVE,
                          icon: I.BookmarkOutlineIcon,
                          onClick: () => (0, O.x)(t.saveData),
                          dangerous: !0
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
