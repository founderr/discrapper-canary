n.d(t, {
    P: function () {
        return B;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
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
    f = n(675478),
    C = n(581883),
    p = n(592125),
    g = n(594174),
    S = n(585483),
    A = n(70956),
    R = n(111361),
    O = n(324701),
    x = n(768943),
    M = n(767893),
    v = n(206697),
    L = n(74551),
    Z = n(981631),
    P = n(474936),
    b = n(689938),
    D = n(80706);
let j = {
        offset: {
            left: 4,
            right: -12
        }
    },
    U = (e) => {
        f.hW.updateAsync(
            'forLater',
            (t) => {
                if (t.currentTab === e) return !1;
                t.currentTab = e;
            },
            f.fy.FREQUENT_USER_ACTION
        );
    };
function y(e) {
    let { closePopout: t, throttledNow: n } = e,
        a = (0, u.e7)([C.Z], () => {
            var e, t;
            return null !== (t = null === (e = C.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : d.Pr.ALL;
        }),
        s = (0, u.e7)([x.Z, C.Z], () => {
            var e, t;
            let n = null !== (t = null === (e = C.Z.settings.forLater) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : d.Pr.ALL;
            return n === d.Pr.ALL ? x.Z.getSavedMessages() : n === d.Pr.BOOKMARKS ? x.Z.getMessageBookmarks() : x.Z.getMessageReminders();
        }),
        r = (0, u.e7)([x.Z], () => x.Z.getOverdueMessageReminderCount());
    return (0, i.jsx)(_.Dialog, {
        'aria-label': b.Z.Messages.FOR_LATER,
        children: (0, i.jsxs)('div', {
            className: D.popoutContainer,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)('div', {
                            className: D.headerTitle,
                            children: [
                                (0, i.jsx)(_.BookmarkIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: D.headerTitleIcon
                                }),
                                (0, i.jsx)(_.Heading, {
                                    variant: 'heading-lg/semibold',
                                    children: b.Z.Messages.FOR_LATER
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsxs)(_.TabBar, {
                                type: 'top',
                                look: 'brand',
                                selectedItem: a,
                                onItemSelect: U,
                                className: D.tabBar,
                                children: [
                                    (0, i.jsx)(_.TabBar.Item, {
                                        id: d.Pr.ALL,
                                        className: D.tabBarItem,
                                        children: b.Z.Messages.FOR_LATER_TAB_ALL
                                    }),
                                    (0, i.jsx)(_.TabBar.Item, {
                                        id: d.Pr.BOOKMARKS,
                                        className: D.tabBarItem,
                                        children: b.Z.Messages.FOR_LATER_TAB_SAVED
                                    }),
                                    (0, i.jsx)(_.TabBar.Item, {
                                        id: d.Pr.REMINDERS,
                                        className: D.tabBarItem,
                                        children: 0 === r ? b.Z.Messages.FOR_LATER_TAB_REMINDERS : b.Z.Messages.FOR_LATER_TAB_REMINDERS_COUNT.format({ count: r })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                (0, i.jsx)(k, {
                    savedMessages: s,
                    closePopout: t,
                    throttledNow: n
                })
            ]
        })
    });
}
function B(e) {
    let { onOpen: t, onClose: n, children: s, popoutPosition: r, popoutAlign: l } = e,
        [o, c] = a.useState(!1),
        d = a.useCallback(() => {
            c(!1), o && (null == n || n());
        }, [n, o]),
        E = a.useCallback(() => {
            c(!o), o ? null == n || n() : null == t || t();
        }, [n, t, o]);
    a.useEffect(() => (S.S.subscribe(Z.CkL.TOGGLE_FOR_LATER, E), () => void S.S.unsubscribe(Z.CkL.TOGGLE_FOR_LATER, E)), [E]);
    let [I, m] = a.useState(new Date());
    a.useEffect(() => {
        let e = setInterval(() => m(new Date()), A.Z.Millis.MINUTE);
        return () => {
            clearInterval(e);
        };
    }, []);
    let T = (0, u.e7)([x.Z], () => x.Z.hasOverdueReminder(I), [I]);
    return (0, i.jsx)(_.Popout, {
        animation: _.Popout.Animation.NONE,
        position: r,
        align: l,
        autoInvert: !1,
        shouldShow: o,
        onRequestClose: d,
        renderPopout: function () {
            return (0, i.jsx)(y, {
                closePopout: d,
                throttledNow: I
            });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return s(E, n, e, T);
        }
    });
}
function k(e) {
    let { savedMessages: t, closePopout: n, throttledNow: s } = e,
        r = a.useRef(null),
        l = (0, I.Z)('for-later', r),
        o = (0, u.e7)([g.default], () => g.default.getCurrentUser());
    return (0, R.I5)(o, P.p9.TIER_2) && 0 !== t.length
        ? (0, i.jsx)(c.bG, {
              navigator: l,
              children: (0, i.jsx)(c.SJ, {
                  children: (e) => {
                      let { ref: a, ...l } = e;
                      return (0, i.jsx)(_.AdvancedScrollerThin, {
                          ref: (e) => {
                              var t;
                              (r.current = e), (a.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                          },
                          className: D.messagesScroller,
                          ...l,
                          children: t.map((e) =>
                              (0, i.jsx)(
                                  G,
                                  {
                                      savedMessage: e,
                                      closePopout: n,
                                      throttledNow: s
                                  },
                                  ''.concat(e.saveData.messageId)
                              )
                          )
                      });
                  }
              })
          })
        : (0, i.jsx)(v.w, {});
}
function G(e) {
    let { savedMessage: t, closePopout: n, throttledNow: s } = e,
        l = (0, u.e7)([p.Z], () => p.Z.getChannel(t.saveData.channelId)),
        o = a.useCallback(
            (e) => {
                !e.shiftKey && n(), (0, h.uL)(Z.Z5c.CHANNEL(null == l ? void 0 : l.getGuildId(), t.saveData.channelId, t.saveData.messageId));
            },
            [n, t, l]
        );
    return null == l || null == t.message
        ? (0, i.jsxs)('div', {
              className: r()(D.messageContainer, D.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: D.deleteIcon,
                      children: (0, i.jsx)(_.CircleWarningIcon, {
                          size: 'xxs',
                          color: _.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(_.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? b.Z.Messages.FOR_LATER_REMINDER_DELETED : b.Z.Messages.FOR_LATER_BOOKMARK_DELETED
                  }),
                  (0, i.jsx)(T.ZP, {
                      className: D.hoverBar,
                      children: (0, i.jsx)(
                          T.sF,
                          {
                              label: b.Z.Messages.FOR_LATER_REMOVE,
                              icon: _.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, O.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: D.messageContainer,
              children: [
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(L.Z, {
                            reminder: t,
                            throttledNow: s
                        })
                      : null,
                  (0, i.jsx)(M.Z, {
                      channel: l,
                      jumpToMessage: o
                  }),
                  (0, i.jsx)(
                      m.Z,
                      {
                          message: t.message,
                          channel: l,
                          className: D.message,
                          compact: N.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: j,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(T.ZP, {
                      className: D.hoverBar,
                      children: (0, i.jsx)(F, {
                          savedMessage: t,
                          jumpToMessage: o
                      })
                  })
              ]
          });
}
function F(e) {
    let { savedMessage: t, jumpToMessage: a } = e;
    return (o()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: b.Z.Messages.MESSAGE_BOOKMARKS_CREATE,
                          icon: _.BookmarkOutlineIcon,
                          onClick: () =>
                              (0, O.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'create-bookmark'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: b.Z.Messages.JUMP_TO_MESSAGE,
                          icon: _.ArrowLargeRightIcon,
                          onClick: (e) => a(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(T.fO, {}),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: b.Z.Messages.MESSAGE_REMINDERS_EDIT,
                          icon: _.PencilIcon,
                          onClick: (e) =>
                              (0, E.jW)(e, async () => {
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
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: b.Z.Messages.MESSAGE_REMINDERS_MARK_COMPLETE,
                          icon: _.CheckmarkLargeIcon,
                          onClick: () => (0, O.x)(t.saveData)
                      },
                      'mark-complete'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: b.Z.Messages.MESSAGE_REMINDERS_CREATE,
                          icon: _.ClockIcon,
                          onClick: (e) =>
                              (0, E.jW)(e, async () => {
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
                      T.sF,
                      {
                          label: b.Z.Messages.JUMP_TO_MESSAGE,
                          icon: _.ArrowLargeRightIcon,
                          onClick: (e) => a(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      T.sF,
                      {
                          label: b.Z.Messages.MESSAGE_BOOKMARKS_REMOVE,
                          icon: _.BookmarkIcon,
                          onClick: () => (0, O.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
