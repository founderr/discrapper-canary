n.d(t, {
    P: function () {
        return U;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    r = n.n(a),
    l = n(512722),
    o = n.n(l),
    c = n(91192),
    u = n(442837),
    d = n(524437),
    _ = n(481060),
    E = n(239091),
    I = n(724757),
    m = n(294218),
    T = n(373662),
    h = n(703656),
    N = n(695346),
    C = n(675478),
    f = n(581883),
    p = n(592125),
    g = n(585483),
    S = n(70956),
    A = n(324701),
    R = n(768943),
    O = n(175006),
    x = n(767893),
    M = n(206697),
    v = n(74551),
    L = n(981631),
    Z = n(689938),
    P = n(80706);
let D = {
        offset: {
            left: 4,
            right: -12
        }
    },
    b = (e) => {
        C.hW.updateAsync(
            'forLater',
            (t) => {
                if (t.currentTab === e) return !1;
                t.currentTab = e;
            },
            C.fy.FREQUENT_USER_ACTION
        );
    };
function j(e) {
    let { closePopout: t, throttledNow: n } = e,
        s = (0, u.e7)([f.Z], () => {
            var e, t;
            return null !== (t = null === (e = f.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : d.Pr.ALL;
        }),
        a = (0, u.e7)([R.Z, f.Z], () => {
            var e, t;
            let n = null !== (t = null === (e = f.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : d.Pr.ALL;
            return n === d.Pr.ALL ? R.Z.getSavedMessages() : n === d.Pr.BOOKMARKS ? R.Z.getMessageBookmarks() : R.Z.getMessageReminders();
        }),
        r = (0, u.e7)([R.Z], () => R.Z.getOverdueMessageReminderCount());
    return (0, i.jsx)(_.Dialog, {
        'aria-label': Z.Z.Messages.FOR_LATER,
        children: (0, i.jsxs)('div', {
            className: P.popoutContainer,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: P.headerTitle,
                            children: [
                                (0, i.jsx)(_.BookmarkIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: P.headerTitleIcon
                                }),
                                (0, i.jsx)(_.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: Z.Z.Messages.FOR_LATER
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsxs)(_.TabBar, {
                                type: 'top',
                                look: 'brand',
                                selectedItem: s,
                                onItemSelect: b,
                                className: P.tabBar,
                                children: [
                                    (0, i.jsx)(_.TabBar.Item, {
                                        id: d.Pr.ALL,
                                        className: P.tabBarItem,
                                        children: Z.Z.Messages.FOR_LATER_TAB_ALL
                                    }),
                                    (0, i.jsx)(_.TabBar.Item, {
                                        id: d.Pr.BOOKMARKS,
                                        className: P.tabBarItem,
                                        children: Z.Z.Messages.FOR_LATER_TAB_SAVED
                                    }),
                                    (0, i.jsx)(_.TabBar.Item, {
                                        id: d.Pr.REMINDERS,
                                        className: P.tabBarItem,
                                        children: 0 === r ? Z.Z.Messages.FOR_LATER_TAB_REMINDERS : Z.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({ count: r })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                0 !== a.length && (0, O.Z)()
                    ? (0, i.jsx)(y, {
                          savedMessages: a,
                          closePopout: t,
                          throttledNow: n
                      })
                    : (0, i.jsx)(M.w, { tab: s })
            ]
        })
    });
}
function U(e) {
    let { onOpen: t, onClose: n, children: a, popoutPosition: r, popoutAlign: l } = e,
        [o, c] = s.useState(!1),
        d = s.useCallback(() => {
            c(!1), o && (null == n || n());
        }, [n, o]),
        E = s.useCallback(() => {
            c(!o), o ? null == n || n() : null == t || t();
        }, [n, t, o]);
    s.useEffect(() => (g.S.subscribe(L.CkL.TOGGLE_FOR_LATER, E), () => void g.S.unsubscribe(L.CkL.TOGGLE_FOR_LATER, E)), [E]);
    let [I, m] = s.useState(new Date());
    s.useEffect(() => {
        let e = setInterval(() => m(new Date()), S.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let T = (0, u.e7)([R.Z], () => R.Z.hasOverdueReminder(I), [I]);
    return (0, i.jsx)(_.Popout, {
        animation: _.Popout.Animation.NONE,
        position: r,
        align: l,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function () {
            return (0, i.jsx)(j, {
                closePopout: d,
                throttledNow: I
            });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return a(E, n, e, T);
        }
    });
}
function y(e) {
    let { savedMessages: t, closePopout: n, throttledNow: a } = e,
        r = s.useRef(null),
        l = (0, I.Z)('for-later', r);
    return (0, i.jsx)(c.bG, {
        navigator: l,
        children: (0, i.jsx)(c.SJ, {
            children: (e) => {
                let { ref: s, ...l } = e;
                return (0, i.jsx)(_.AdvancedScrollerThin, {
                    ref: (e) => {
                        var t;
                        (r.current = e), (s.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                    },
                    className: P.messagesScroller,
                    ...l,
                    children: t.map((e) =>
                        (0, i.jsx)(
                            B,
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
function B(e) {
    let { savedMessage: t, closePopout: n, throttledNow: a } = e,
        l = (0, u.e7)([p.Z], () => p.Z.getChannel(t.saveData.channelId)),
        o = s.useCallback(
            (e) => {
                !e.shiftKey && n(), (0, h.uL)(L.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), t.saveData.channelId, t.saveData.messageId));
            },
            [n, t, l]
        );
    return null == l || null == t.message
        ? (0, i.jsxs)('div', {
              className: r()(P.messageContainer, P.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: P.deleteIcon,
                      children: (0, i.jsx)(_.CircleWarningIcon, {
                          size: 'xxs',
                          color: _.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(_.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? Z.Z.Messages.FOR_LATER_REMINDER_DELETED : Z.Z.Messages.FOR_LATER_BOOKMARK_DELETED
                  }),
                  (0, i.jsx)(T.ZP, {
                      className: P.hoverBar,
                      children: (0, i.jsx)(
                          T.sF,
                          {
                              label: Z.Z.Messages.FOR_LATER_REMOVE,
                              icon: _.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, A.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: P.messageContainer,
              children: [
                  (0, i.jsx)(_.Clickable, {
                      className: P.clickableMessageBackground,
                      onClick: o,
                      'aria-label': Z.Z.Messages.JUMP_TO_MESSAGE
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(v.Z, {
                            reminder: t,
                            throttledNow: a
                        })
                      : null,
                  (0, i.jsx)(x.Z, { channel: l }),
                  (0, i.jsx)(
                      m.Z,
                      {
                          message: t.message,
                          channel: l,
                          className: P.message,
                          compact: N.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: D,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(T.ZP, {
                      className: P.hoverBar,
                      children: (0, i.jsx)(k, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          });
}
function k(e) {
    let { savedMessage: t, jumpToMessage: s } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: Z.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: _.CheckmarkLargeIcon,
                          onClick: () =>
                              (0, A.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: Z.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: _.PencilIcon,
                          onClick: (e) =>
                              (0, E.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: Z.Z.Messages.MESSAGE_REMINDERS_REMIND_ME,
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(T.fO, {}),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: Z.Z.Messages.JUMP_TO_MESSAGE,
                          icon: _.ArrowLargeRightIcon,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: Z.Z.Messages.FOR_LATER_REMOVE,
                          icon: _.BookmarkOutlineIcon,
                          onClick: () => (0, A.x)(t.saveData),
                          dangerous: !0
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: Z.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: _.ClockIcon,
                          onClick: (e) =>
                              (0, E.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: Z.Z.Messages.MESSAGE_REMINDERS_CREATE,
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: Z.Z.Messages.JUMP_TO_MESSAGE,
                          icon: _.ArrowLargeRightIcon,
                          onClick: (e) => s(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: Z.Z.Messages.FOR_LATER_REMOVE,
                          icon: _.BookmarkOutlineIcon,
                          onClick: () => (0, A.x)(t.saveData),
                          dangerous: !0
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
