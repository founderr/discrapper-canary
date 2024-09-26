n.d(t, {
    K: function () {
        return V;
    },
    P: function () {
        return H;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(512722),
    u = n.n(l),
    c = n(913527),
    d = n.n(c),
    _ = n(990547),
    E = n(91192),
    f = n(442837),
    h = n(481060),
    p = n(239091),
    m = n(494404),
    I = n(724757),
    T = n(213609),
    g = n(336197),
    S = n(294218),
    A = n(373662),
    v = n(695346),
    N = n(131704),
    O = n(592125),
    R = n(496675),
    C = n(626135),
    y = n(585483),
    b = n(70956),
    L = n(324701),
    D = n(768943),
    M = n(686478),
    P = n(664559),
    U = n(767893),
    w = n(206697),
    x = n(74551),
    G = n(981631),
    k = n(689938),
    B = n(982138);
let F = {
    offset: {
        left: 4,
        right: -12
    }
};
function Z(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(h.Dialog, {
        'aria-label': k.Z.Messages.FOR_LATER,
        children: (0, i.jsxs)('div', {
            className: B.popoutContainer,
            children: [
                (0, i.jsx)(m.h4, {
                    icon: h.BookmarkIcon,
                    title: k.Z.Messages.FOR_LATER
                }),
                (0, i.jsx)(V, { closePopout: t })
            ]
        })
    });
}
function V(e) {
    let { closePopout: t } = e,
        n = (0, P.Z)();
    return ((0, T.Z)(
        {
            type: _.ImpressionTypes.POPOUT,
            name: _.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: D.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [n.length]
    ),
    0 === n.length)
        ? (0, i.jsx)(w.w, {})
        : (0, i.jsx)(Y, {
              savedMessageKeys: n,
              closePopout: t
          });
}
function H(e) {
    let { onOpen: t, onClose: n, children: r, popoutPosition: o, popoutAlign: s } = e,
        [l, u] = a.useState(!1),
        c = a.useCallback(() => {
            u(!1), l && (null == n || n());
        }, [n, l]),
        d = a.useCallback(() => {
            u(!l), l ? null == n || n() : null == t || t();
        }, [n, t, l]);
    a.useEffect(() => (y.S.subscribe(G.CkL.TOGGLE_FOR_LATER, d), () => void y.S.unsubscribe(G.CkL.TOGGLE_FOR_LATER, d)), [d]);
    let _ = (0, f.e7)([D.Z], () => D.Z.hasOverdueReminder(), []);
    function E() {
        return (0, i.jsx)(Z, { closePopout: c });
    }
    return (0, i.jsx)(h.Popout, {
        animation: h.Popout.Animation.NONE,
        position: o,
        align: s,
        autoInvert: !1,
        shouldShow: l,
        onRequestClose: c,
        renderPopout: E,
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return r(d, n, e, _);
        }
    });
}
function Y(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        r = a.useRef(null),
        o = (0, I.Z)('for-later', r),
        [s, l] = a.useState(new Date());
    return (
        a.useEffect(() => {
            let e = setInterval(() => l(new Date()), b.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, i.jsx)(E.bG, {
            navigator: o,
            children: (0, i.jsx)(E.SJ, {
                children: (e) => {
                    let { ref: a, ...o } = e;
                    return (0, i.jsx)(h.AdvancedScrollerThin, {
                        ref: (e) => {
                            var t;
                            (r.current = e), (a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                        },
                        className: B.messagesScroller,
                        ...o,
                        children: t.map((e) =>
                            (0, i.jsx)(
                                W,
                                {
                                    savedMessageKey: e,
                                    closePopout: n,
                                    throttledNow: s
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
function j(e) {
    let { savedMessage: t, closePopout: n, throttledNow: r } = e,
        o = (0, f.e7)([O.Z], () => O.Z.getChannel(t.saveData.channelId)),
        l = a.useMemo(
            () =>
                null == o && null != t.message
                    ? new N.mn({
                          id: t.saveData.channelId,
                          guild_id: null,
                          type: G.d4z.UNKNOWN,
                          name: k.Z.Messages.UNKNOWN_CHANNEL_PLACEHOLDER
                      })
                    : o,
            [o, t]
        ),
        u = a.useCallback(
            (e) => {
                var r;
                !e.shiftKey && n(),
                    (0, g.Z)(G.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), t.saveData.channelId, t.saveData.messageId)),
                    C.default.track(G.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null === (r = t.message) || void 0 === r ? void 0 : r.author.id,
                        type: null != t.saveData.dueAt ? M._l.REMINDER : M._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? d()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, l]
        ),
        c = (0, f.e7)([R.Z], () => (null == l ? !!void 0 : !!l.isPrivate()) || R.Z.can(G.Plq.VIEW_CHANNEL, l));
    return null != l && null != t.message && c
        ? (0, i.jsxs)('div', {
              className: B.messageContainer,
              children: [
                  (0, i.jsx)(h.Clickable, {
                      className: B.clickableMessageBackground,
                      onClick: u,
                      'aria-label': k.Z.Messages.JUMP_TO_MESSAGE
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(x.Z, {
                            reminder: t,
                            throttledNow: r
                        })
                      : null,
                  (0, i.jsx)(U.Z, { channel: l }),
                  (0, i.jsx)(
                      S.Z,
                      {
                          message: t.message,
                          channel: l,
                          className: B.message,
                          compact: v.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: F,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(A.ZP, {
                      className: B.hoverBar,
                      children: (0, i.jsx)(K, {
                          savedMessage: t,
                          jumpToMessage: u
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: s()(B.messageContainer, B.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: B.deleteIcon,
                      children: (0, i.jsx)(h.CircleWarningIcon, {
                          size: 'xxs',
                          color: h.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(h.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? k.Z.Messages.FOR_LATER_REMINDER_DELETED : k.Z.Messages.FOR_LATER_BOOKMARK_DELETED
                  }),
                  (0, i.jsx)(A.ZP, {
                      className: B.hoverBar,
                      children: (0, i.jsx)(
                          A.sF,
                          {
                              label: k.Z.Messages.FOR_LATER_REMOVE,
                              icon: h.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, L.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          });
}
function W(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: r } = e,
        a = (0, f.e7)([D.Z], () => D.Z.getSavedMessage(t.channelId, t.messageId));
    return null == a
        ? null
        : (0, i.jsx)(j, {
              savedMessage: a,
              closePopout: n,
              throttledNow: r
          });
}
function K(e) {
    let { savedMessage: t, jumpToMessage: r } = e;
    return (u()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      A.sF,
                      {
                          label: k.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: h.CheckmarkLargeIcon,
                          onClick: () =>
                              (0, L.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      A.sF,
                      {
                          label: k.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: h.PencilIcon,
                          onClick: (e) =>
                              (0, p.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: k.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(A.fO, {}),
                  (0, i.jsx)(
                      A.sF,
                      {
                          label: k.Z.Messages.JUMP_TO_MESSAGE,
                          icon: h.ArrowLargeRightIcon,
                          onClick: (e) => r(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      A.sF,
                      {
                          label: k.Z.Messages.FOR_LATER_REMOVE,
                          icon: h.BookmarkIcon,
                          onClick: () => (0, L.x)(t.saveData)
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      A.sF,
                      {
                          label: k.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: h.ClockIcon,
                          onClick: (e) =>
                              (0, p.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: k.Z.Messages.MESSAGE_REMINDERS_CREATE,
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      A.sF,
                      {
                          label: k.Z.Messages.JUMP_TO_MESSAGE,
                          icon: h.ArrowLargeRightIcon,
                          onClick: (e) => r(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      A.sF,
                      {
                          label: k.Z.Messages.FOR_LATER_REMOVE,
                          icon: h.BookmarkIcon,
                          onClick: () => (0, L.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
