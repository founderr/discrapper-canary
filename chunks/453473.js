n.d(t, {
    K: function () {
        return k;
    },
    P: function () {
        return G;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(512722),
    o = n.n(l),
    c = n(913527),
    u = n.n(c),
    d = n(990547),
    _ = n(91192),
    E = n(442837),
    I = n(481060),
    m = n(239091),
    f = n(494404),
    T = n(724757),
    h = n(213609),
    N = n(294218),
    p = n(373662),
    C = n(695346),
    g = n(496675),
    S = n(626135),
    A = n(585483),
    x = n(70956),
    R = n(324701),
    v = n(575016),
    M = n(768943),
    O = n(686478),
    L = n(664559),
    Z = n(767893),
    b = n(206697),
    P = n(74551),
    D = n(981631),
    j = n(689938),
    U = n(982138);
let y = {
    offset: {
        left: 4,
        right: -12
    }
};
function B(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(I.Dialog, {
        'aria-label': j.Z.Messages.FOR_LATER,
        children: (0, i.jsxs)('div', {
            className: U.popoutContainer,
            children: [
                (0, i.jsx)(f.h4, {
                    icon: I.BookmarkIcon,
                    title: j.Z.Messages.FOR_LATER
                }),
                (0, i.jsx)(k, { closePopout: t })
            ]
        })
    });
}
function k(e) {
    let { closePopout: t } = e,
        n = (0, L.Z)();
    return ((0, h.Z)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: M.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [n.length]
    ),
    0 === n.length)
        ? (0, i.jsx)(b.w, {})
        : (0, i.jsx)(F, {
              savedMessageKeys: n,
              closePopout: t
          });
}
function G(e) {
    let { onOpen: t, onClose: n, children: s, popoutPosition: r, popoutAlign: l } = e,
        [o, c] = a.useState(!1),
        u = a.useCallback(() => {
            c(!1), o && (null == n || n());
        }, [n, o]),
        d = a.useCallback(() => {
            c(!o), o ? null == n || n() : null == t || t();
        }, [n, t, o]);
    a.useEffect(() => (A.S.subscribe(D.CkL.TOGGLE_FOR_LATER, d), () => void A.S.unsubscribe(D.CkL.TOGGLE_FOR_LATER, d)), [d]);
    let _ = (0, E.e7)([M.Z], () => M.Z.hasOverdueReminder(), []);
    return (0, i.jsx)(I.Popout, {
        animation: I.Popout.Animation.NONE,
        position: r,
        align: l,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: u,
        renderPopout: function () {
            return (0, i.jsx)(B, { closePopout: u });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return s(d, n, e, _);
        }
    });
}
function F(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        s = a.useRef(null),
        r = (0, T.Z)('for-later', s),
        [l, o] = a.useState(new Date());
    return (
        a.useEffect(() => {
            let e = setInterval(() => o(new Date()), x.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, i.jsx)(_.bG, {
            navigator: r,
            children: (0, i.jsx)(_.SJ, {
                children: (e) => {
                    let { ref: a, ...r } = e;
                    return (0, i.jsx)(I.AdvancedScrollerThin, {
                        ref: (e) => {
                            var t;
                            (s.current = e), (a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                        },
                        className: U.messagesScroller,
                        ...r,
                        children: t.map((e) =>
                            (0, i.jsx)(
                                V,
                                {
                                    savedMessageKey: e,
                                    closePopout: n,
                                    throttledNow: l
                                },
                                e.messageId
                            )
                        )
                    });
                }
            })
        })
    );
}
function w(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        l = (0, v.gr)(t),
        o = a.useCallback(
            async (e) => {
                var i;
                await (0, v.fC)(t, l),
                    !e.shiftKey && n(),
                    S.default.track(D.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null === (i = t.message) || void 0 === i ? void 0 : i.author.id,
                        type: null != t.saveData.dueAt ? O._l.REMINDER : O._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, l]
        ),
        c = (0, E.e7)([g.Z], () => !!((null == l ? void 0 : l.type) === D.d4z.UNKNOWN || (null == l ? void 0 : l.isPrivate())) || g.Z.can(D.Plq.VIEW_CHANNEL, l));
    return null != l && null != t.message && c
        ? (0, i.jsxs)('div', {
              className: U.messageContainer,
              children: [
                  (0, i.jsx)(I.Clickable, {
                      className: U.clickableMessageBackground,
                      onClick: o,
                      'aria-label': j.Z.Messages.JUMP_TO_MESSAGE
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(P.Z, {
                            reminder: t,
                            throttledNow: s
                        })
                      : null,
                  (0, i.jsx)(Z.Z, { channel: l }),
                  (0, i.jsx)(
                      N.Z,
                      {
                          message: t.message,
                          channel: l,
                          className: U.message,
                          compact: C.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: y,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(p.ZP, {
                      className: U.hoverBar,
                      children: (0, i.jsx)(H, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: r()(U.messageContainer, U.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: U.deleteIcon,
                      children: (0, i.jsx)(I.CircleWarningIcon, {
                          size: 'xxs',
                          color: I.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(I.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? j.Z.Messages.FOR_LATER_REMINDER_DELETED : j.Z.Messages.FOR_LATER_BOOKMARK_DELETED
                  }),
                  (0, i.jsx)(p.ZP, {
                      className: U.hoverBar,
                      children: (0, i.jsx)(
                          p.sF,
                          {
                              label: j.Z.Messages.FOR_LATER_REMOVE,
                              icon: I.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, R.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          });
}
function V(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: a } = e,
        s = (0, E.e7)([M.Z], () => M.Z.getSavedMessage(t.channelId, t.messageId));
    return null == s
        ? null
        : (0, i.jsx)(w, {
              savedMessage: s,
              closePopout: n,
              throttledNow: a
          });
}
function H(e) {
    let { savedMessage: t, jumpToMessage: a } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: I.CheckmarkLargeIcon,
                          onClick: () =>
                              (0, R.z)({
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
                          label: j.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: I.PencilIcon,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: j.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
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
                          label: j.Z.Messages.JUMP_TO_MESSAGE,
                          icon: I.ArrowLargeRightIcon,
                          onClick: (e) => a(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.FOR_LATER_REMOVE,
                          icon: I.BookmarkIcon,
                          onClick: () => (0, R.x)(t.saveData)
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
                          label: j.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: I.ClockIcon,
                          onClick: (e) =>
                              (0, m.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: j.Z.Messages.MESSAGE_REMINDERS_CREATE,
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.JUMP_TO_MESSAGE,
                          icon: I.ArrowLargeRightIcon,
                          onClick: (e) => a(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      p.sF,
                      {
                          label: j.Z.Messages.FOR_LATER_REMOVE,
                          icon: I.BookmarkIcon,
                          onClick: () => (0, R.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
