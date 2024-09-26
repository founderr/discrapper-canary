n.d(t, {
    K: function () {
        return F;
    },
    P: function () {
        return Z;
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
    g = n(294218),
    S = n(373662),
    A = n(695346),
    v = n(496675),
    N = n(626135),
    O = n(585483),
    R = n(70956),
    C = n(324701),
    y = n(575016),
    L = n(768943),
    b = n(686478),
    D = n(664559),
    M = n(767893),
    P = n(206697),
    U = n(74551),
    w = n(981631),
    x = n(689938),
    G = n(982138);
let k = {
    offset: {
        left: 4,
        right: -12
    }
};
function B(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(h.Dialog, {
        'aria-label': x.Z.Messages.FOR_LATER,
        children: (0, i.jsxs)('div', {
            className: G.popoutContainer,
            children: [
                (0, i.jsx)(m.h4, {
                    icon: h.BookmarkIcon,
                    title: x.Z.Messages.FOR_LATER
                }),
                (0, i.jsx)(F, { closePopout: t })
            ]
        })
    });
}
function F(e) {
    let { closePopout: t } = e,
        n = (0, D.Z)();
    return ((0, T.Z)(
        {
            type: _.ImpressionTypes.POPOUT,
            name: _.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: L.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [n.length]
    ),
    0 === n.length)
        ? (0, i.jsx)(P.w, {})
        : (0, i.jsx)(V, {
              savedMessageKeys: n,
              closePopout: t
          });
}
function Z(e) {
    let { onOpen: t, onClose: n, children: r, popoutPosition: o, popoutAlign: s } = e,
        [l, u] = a.useState(!1),
        c = a.useCallback(() => {
            u(!1), l && (null == n || n());
        }, [n, l]),
        d = a.useCallback(() => {
            u(!l), l ? null == n || n() : null == t || t();
        }, [n, t, l]);
    a.useEffect(() => (O.S.subscribe(w.CkL.TOGGLE_FOR_LATER, d), () => void O.S.unsubscribe(w.CkL.TOGGLE_FOR_LATER, d)), [d]);
    let _ = (0, f.e7)([L.Z], () => L.Z.hasOverdueReminder(), []);
    function E() {
        return (0, i.jsx)(B, { closePopout: c });
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
function V(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        r = a.useRef(null),
        o = (0, I.Z)('for-later', r),
        [s, l] = a.useState(new Date());
    return (
        a.useEffect(() => {
            let e = setInterval(() => l(new Date()), R.Z.Millis.MINUTE);
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
                        className: G.messagesScroller,
                        ...o,
                        children: t.map((e) =>
                            (0, i.jsx)(
                                Y,
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
function H(e) {
    let { savedMessage: t, closePopout: n, throttledNow: r } = e,
        o = (0, y.gr)(t),
        l = a.useCallback(
            async (e) => {
                var r;
                await (0, y.fC)(t, o),
                    !e.shiftKey && n(),
                    N.default.track(w.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null === (r = t.message) || void 0 === r ? void 0 : r.author.id,
                        type: null != t.saveData.dueAt ? b._l.REMINDER : b._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? d()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, o]
        ),
        u = (0, f.e7)([v.Z], () => !!((null == o ? void 0 : o.type) === w.d4z.UNKNOWN || (null == o ? void 0 : o.isPrivate())) || v.Z.can(w.Plq.VIEW_CHANNEL, o));
    return null != o && null != t.message && u
        ? (0, i.jsxs)('div', {
              className: G.messageContainer,
              children: [
                  (0, i.jsx)(h.Clickable, {
                      className: G.clickableMessageBackground,
                      onClick: l,
                      'aria-label': x.Z.Messages.JUMP_TO_MESSAGE
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(U.Z, {
                            reminder: t,
                            throttledNow: r
                        })
                      : null,
                  (0, i.jsx)(M.Z, { channel: o }),
                  (0, i.jsx)(
                      g.Z,
                      {
                          message: t.message,
                          channel: o,
                          className: G.message,
                          compact: A.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: k,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(S.ZP, {
                      className: G.hoverBar,
                      children: (0, i.jsx)(j, {
                          savedMessage: t,
                          jumpToMessage: l
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: s()(G.messageContainer, G.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: G.deleteIcon,
                      children: (0, i.jsx)(h.CircleWarningIcon, {
                          size: 'xxs',
                          color: h.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(h.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? x.Z.Messages.FOR_LATER_REMINDER_DELETED : x.Z.Messages.FOR_LATER_BOOKMARK_DELETED
                  }),
                  (0, i.jsx)(S.ZP, {
                      className: G.hoverBar,
                      children: (0, i.jsx)(
                          S.sF,
                          {
                              label: x.Z.Messages.FOR_LATER_REMOVE,
                              icon: h.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, C.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          });
}
function Y(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: r } = e,
        a = (0, f.e7)([L.Z], () => L.Z.getSavedMessage(t.channelId, t.messageId));
    return null == a
        ? null
        : (0, i.jsx)(H, {
              savedMessage: a,
              closePopout: n,
              throttledNow: r
          });
}
function j(e) {
    let { savedMessage: t, jumpToMessage: r } = e;
    return (u()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      S.sF,
                      {
                          label: x.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: h.CheckmarkLargeIcon,
                          onClick: () =>
                              (0, C.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      S.sF,
                      {
                          label: x.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: h.PencilIcon,
                          onClick: (e) =>
                              (0, p.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: x.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(S.fO, {}),
                  (0, i.jsx)(
                      S.sF,
                      {
                          label: x.Z.Messages.JUMP_TO_MESSAGE,
                          icon: h.ArrowLargeRightIcon,
                          onClick: (e) => r(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      S.sF,
                      {
                          label: x.Z.Messages.FOR_LATER_REMOVE,
                          icon: h.BookmarkIcon,
                          onClick: () => (0, C.x)(t.saveData)
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      S.sF,
                      {
                          label: x.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: h.ClockIcon,
                          onClick: (e) =>
                              (0, p.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: x.Z.Messages.MESSAGE_REMINDERS_CREATE,
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      S.sF,
                      {
                          label: x.Z.Messages.JUMP_TO_MESSAGE,
                          icon: h.ArrowLargeRightIcon,
                          onClick: (e) => r(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      S.sF,
                      {
                          label: x.Z.Messages.FOR_LATER_REMOVE,
                          icon: h.BookmarkIcon,
                          onClick: () => (0, C.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
