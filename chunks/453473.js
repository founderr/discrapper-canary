n.d(t, {
    K: function () {
        return F;
    },
    P: function () {
        return G;
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
    T = n(494404),
    N = n(724757),
    h = n(213609),
    C = n(336197),
    f = n(294218),
    p = n(373662),
    g = n(695346),
    S = n(131704),
    A = n(592125),
    R = n(626135),
    O = n(585483),
    x = n(70956),
    M = n(324701),
    v = n(768943),
    L = n(686478),
    Z = n(175006),
    P = n(767893),
    D = n(206697),
    b = n(74551),
    j = n(981631),
    U = n(689938),
    y = n(982138);
let B = {
    offset: {
        left: 4,
        right: -12
    }
};
function k(e) {
    let { closePopout: t, throttledNow: n } = e,
        s = (0, E.e7)([v.Z], () => v.Z.getSavedMessages()),
        a = (0, E.e7)([v.Z], () => v.Z.getOverdueMessageReminderCount());
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
            'aria-label': U.Z.Messages.FOR_LATER,
            children: (0, i.jsxs)('div', {
                className: y.popoutContainer,
                children: [
                    (0, i.jsx)(T.h4, {
                        icon: I.BookmarkIcon,
                        title: U.Z.Messages.FOR_LATER
                    }),
                    (0, i.jsx)(F, {
                        savedMessages: s,
                        closePopout: t,
                        throttledNow: n
                    })
                ]
            })
        })
    );
}
function F(e) {
    let { savedMessages: t, closePopout: n, throttledNow: s } = e;
    return 0 !== t.length && (0, Z.Z)()
        ? (0, i.jsx)(w, {
              savedMessages: t,
              closePopout: n,
              throttledNow: s
          })
        : (0, i.jsx)(D.w, {});
}
function G(e) {
    let { onOpen: t, onClose: n, children: a, popoutPosition: r, popoutAlign: l } = e,
        [o, c] = s.useState(!1),
        u = s.useCallback(() => {
            c(!1), o && (null == n || n());
        }, [n, o]),
        d = s.useCallback(() => {
            c(!o), o ? null == n || n() : null == t || t();
        }, [n, t, o]);
    s.useEffect(() => (O.S.subscribe(j.CkL.TOGGLE_FOR_LATER, d), () => void O.S.unsubscribe(j.CkL.TOGGLE_FOR_LATER, d)), [d]);
    let [_, m] = s.useState(new Date());
    s.useEffect(() => {
        let e = setInterval(() => m(new Date()), x.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let T = (0, E.e7)([v.Z], () => v.Z.hasOverdueReminder(_), [_]);
    return (0, i.jsx)(I.Popout, {
        animation: I.Popout.Animation.NONE,
        position: r,
        align: l,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: u,
        renderPopout: function () {
            return (0, i.jsx)(k, {
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
function w(e) {
    let { savedMessages: t, closePopout: n, throttledNow: a } = e,
        r = s.useRef(null),
        l = (0, N.Z)('for-later', r);
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
                    className: y.messagesScroller,
                    ...l,
                    children: t.map((e) =>
                        (0, i.jsx)(
                            V,
                            {
                                savedMessage: e,
                                closePopout: n,
                                throttledNow: a
                            },
                            e.saveData.messageId
                        )
                    )
                });
            }
        })
    });
}
function V(e) {
    let { savedMessage: t, closePopout: n, throttledNow: a } = e,
        l = (0, E.e7)([A.Z], () => A.Z.getChannel(t.saveData.channelId)),
        o = s.useMemo(
            () =>
                null == l && null != t.message
                    ? new S.mn({
                          id: t.saveData.channelId,
                          guild_id: null,
                          type: j.d4z.UNKNOWN,
                          name: U.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
                      })
                    : l,
            [l, t]
        ),
        c = s.useCallback(
            (e) => {
                var i;
                !e.shiftKey && n(),
                    (0, C.Z)(j.Z5c.CHANNEL(null == o ? void 0 : o.getGuildId(), t.saveData.channelId, t.saveData.messageId)),
                    R.default.track(j.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null === (i = t.message) || void 0 === i ? void 0 : i.author.id,
                        type: null != t.saveData.dueAt ? L._l.REMINDER : L._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, o]
        );
    return null == o || null == t.message
        ? (0, i.jsxs)('div', {
              className: r()(y.messageContainer, y.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: y.deleteIcon,
                      children: (0, i.jsx)(I.CircleWarningIcon, {
                          size: 'xxs',
                          color: I.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(I.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? U.Z.Messages.FOR_LATER_REMINDER_DELETED : U.Z.Messages.FOR_LATER_BOOKMARK_DELETED
                  }),
                  (0, i.jsx)(p.ZP, {
                      className: y.hoverBar,
                      children: (0, i.jsx)(
                          p.sF,
                          {
                              label: U.Z.Messages.FOR_LATER_REMOVE,
                              icon: I.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, M.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: y.messageContainer,
              children: [
                  (0, i.jsx)(I.Clickable, {
                      className: y.clickableMessageBackground,
                      onClick: c,
                      'aria-label': U.Z.Messages.JUMP_TO_MESSAGE
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(b.Z, {
                            reminder: t,
                            throttledNow: a
                        })
                      : null,
                  (0, i.jsx)(P.Z, { channel: o }),
                  (0, i.jsx)(
                      f.Z,
                      {
                          message: t.message,
                          channel: o,
                          className: y.message,
                          compact: g.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: B,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(p.ZP, {
                      className: y.hoverBar,
                      children: (0, i.jsx)(H, {
                          savedMessage: t,
                          jumpToMessage: c
                      })
                  })
              ]
          });
}
function H(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: U.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: I.CheckmarkLargeIcon,
                          onClick: () =>
                              (0, M.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: U.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: I.PencilIcon,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: U.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(p.fO, {}),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: U.Z.Messages.JUMP_TO_MESSAGE,
                          icon: I.ArrowLargeRightIcon,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: U.Z.Messages.FOR_LATER_REMOVE,
                          icon: I.BookmarkOutlineIcon,
                          onClick: () => (0, M.x)(t.saveData),
                          dangerous: !0
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: U.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: I.ClockIcon,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: U.Z.Messages.MESSAGE_REMINDERS_CREATE,
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: U.Z.Messages.JUMP_TO_MESSAGE,
                          icon: I.ArrowLargeRightIcon,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: U.Z.Messages.FOR_LATER_REMOVE,
                          icon: I.BookmarkOutlineIcon,
                          onClick: () => (0, M.x)(t.saveData),
                          dangerous: !0
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
