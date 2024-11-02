n.d(t, {
    K: function () {
        return w;
    },
    P: function () {
        return U;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(913527),
    u = n.n(c),
    d = n(990547),
    m = n(91192),
    f = n(442837),
    h = n(481060),
    p = n(239091),
    g = n(494404),
    _ = n(724757),
    C = n(213609),
    E = n(294218),
    I = n(373662),
    x = n(695346),
    v = n(496675),
    N = n(626135),
    T = n(585483),
    S = n(70956),
    b = n(324701),
    A = n(575016),
    j = n(768943),
    Z = n(686478),
    R = n(664559),
    P = n(767893),
    y = n(206697),
    L = n(74551),
    O = n(981631),
    M = n(388032),
    k = n(982138);
let D = {
    offset: {
        left: 4,
        right: -12
    }
};
function B(e) {
    let { closePopout: t } = e;
    return (0, i.jsx)(h.Dialog, {
        'aria-label': M.intl.string(M.t['2pAkDA']),
        children: (0, i.jsxs)('div', {
            className: k.popoutContainer,
            children: [
                (0, i.jsx)(g.h4, {
                    icon: h.BookmarkIcon,
                    title: M.intl.string(M.t['2pAkDA'])
                }),
                (0, i.jsx)(w, { closePopout: t })
            ]
        })
    });
}
function w(e) {
    let { closePopout: t } = e,
        n = (0, R.Z)();
    return ((0, C.Z)(
        {
            type: d.ImpressionTypes.POPOUT,
            name: d.ImpressionNames.FOR_LATER_LIST_VIEWED,
            properties: {
                total_count: n.length,
                overdue_count: j.Z.getOverdueMessageReminderCount()
            }
        },
        {},
        [n.length]
    ),
    0 === n.length)
        ? (0, i.jsx)(y.w, {})
        : (0, i.jsx)(F, {
              savedMessageKeys: n,
              closePopout: t
          });
}
function U(e) {
    let { onOpen: t, onClose: n, children: l, popoutPosition: a, popoutAlign: o } = e,
        [s, c] = r.useState(!1),
        u = r.useCallback(() => {
            c(!1), s && (null == n || n());
        }, [n, s]),
        d = r.useCallback(() => {
            c(!s), s ? null == n || n() : null == t || t();
        }, [n, t, s]);
    r.useEffect(() => (T.S.subscribe(O.CkL.TOGGLE_FOR_LATER, d), () => void T.S.unsubscribe(O.CkL.TOGGLE_FOR_LATER, d)), [d]);
    let m = (0, f.e7)([j.Z], () => j.Z.hasOverdueReminder(), []);
    return (0, i.jsx)(h.Popout, {
        animation: h.Popout.Animation.NONE,
        position: a,
        align: o,
        autoInvert: !1,
        shouldShow: s,
        onRequestClose: u,
        renderPopout: function () {
            return (0, i.jsx)(B, { closePopout: u });
        },
        ignoreModalClicks: !0,
        children: (e, t) => {
            let { isShown: n } = t;
            return l(d, n, e, m);
        }
    });
}
function F(e) {
    let { savedMessageKeys: t, closePopout: n } = e,
        l = r.useRef(null),
        a = (0, _.Z)('for-later', l),
        [o, s] = r.useState(new Date());
    return (
        r.useEffect(() => {
            let e = setInterval(() => s(new Date()), S.Z.Millis.MINUTE);
            return () => {
                clearInterval(e);
            };
        }, []),
        (0, i.jsx)(m.bG, {
            navigator: a,
            children: (0, i.jsx)(m.SJ, {
                children: (e) => {
                    let { ref: r, ...a } = e;
                    return (0, i.jsx)(h.AdvancedScrollerThin, {
                        ref: (e) => {
                            var t;
                            (l.current = e), (r.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
                        },
                        className: k.messagesScroller,
                        ...a,
                        children: t.map((e) =>
                            (0, i.jsx)(
                                V,
                                {
                                    savedMessageKey: e,
                                    closePopout: n,
                                    throttledNow: o
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
function G(e) {
    let { savedMessage: t, closePopout: n, throttledNow: l } = e,
        o = (0, A.gr)(t),
        s = r.useCallback(
            async (e) => {
                var i;
                await (0, A.fC)(t, o),
                    !e.shiftKey && n(),
                    N.default.track(O.rMx.FOR_LATER_SAVED_MESSAGE_JUMP, {
                        channel_id: t.saveData.channelId,
                        message_id: t.saveData.messageId,
                        message_author_id: null === (i = t.message) || void 0 === i ? void 0 : i.author.id,
                        type: null != t.saveData.dueAt ? Z._l.REMINDER : Z._l.BOOKMARK,
                        due_duration: null != t.saveData.dueAt ? u()().diff(t.saveData.dueAt) : void 0
                    });
            },
            [n, t, o]
        ),
        c = (0, f.e7)([v.Z], () => !!((null == o ? void 0 : o.type) === O.d4z.UNKNOWN || (null == o ? void 0 : o.isPrivate())) || v.Z.can(O.Plq.VIEW_CHANNEL, o));
    return null != o && null != t.message && c
        ? (0, i.jsxs)('div', {
              className: k.messageContainer,
              children: [
                  (0, i.jsx)(h.Clickable, {
                      className: k.clickableMessageBackground,
                      onClick: s,
                      'aria-label': M.intl.string(M.t['+TSRGB'])
                  }),
                  null != t.saveData.dueAt
                      ? (0, i.jsx)(L.Z, {
                            reminder: t,
                            throttledNow: l
                        })
                      : null,
                  (0, i.jsx)(P.Z, { channel: o }),
                  (0, i.jsx)(
                      E.Z,
                      {
                          message: t.message,
                          channel: o,
                          className: k.message,
                          compact: x.jU.getSetting(),
                          animateAvatar: !1,
                          focusProps: D,
                          trackAnnouncementViews: !0
                      },
                      t.message.id
                  ),
                  (0, i.jsx)(I.ZP, {
                      className: k.hoverBar,
                      children: (0, i.jsx)(H, {
                          savedMessage: t,
                          jumpToMessage: s
                      })
                  })
              ]
          })
        : (0, i.jsxs)('div', {
              className: a()(k.messageContainer, k.deletedMessage),
              children: [
                  (0, i.jsx)('div', {
                      className: k.deleteIcon,
                      children: (0, i.jsx)(h.CircleWarningIcon, {
                          size: 'xxs',
                          color: h.tokens.colors.INTERACTIVE_ACTIVE
                      })
                  }),
                  (0, i.jsx)(h.Heading, {
                      variant: 'text-md/semibold',
                      color: 'header-secondary',
                      children: null != t.saveData.dueAt ? M.intl.string(M.t['wuQm+v']) : M.intl.string(M.t.o572FR)
                  }),
                  (0, i.jsx)(I.ZP, {
                      className: k.hoverBar,
                      children: (0, i.jsx)(
                          I.sF,
                          {
                              label: M.intl.string(M.t.SvXS1d),
                              icon: h.TrashIcon,
                              dangerous: !0,
                              onClick: () => (0, b.x)(t.saveData)
                          },
                          'delete'
                      )
                  })
              ]
          });
}
function V(e) {
    let { savedMessageKey: t, closePopout: n, throttledNow: r } = e,
        l = (0, f.e7)([j.Z], () => j.Z.getSavedMessage(t.channelId, t.messageId));
    return null == l
        ? null
        : (0, i.jsx)(G, {
              savedMessage: l,
              closePopout: n,
              throttledNow: r
          });
}
function H(e) {
    let { savedMessage: t, jumpToMessage: r } = e;
    return (s()(null != t.message, 'Saved message must be cached for For Later action buttons'), null != t.saveData.dueAt)
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      I.sF,
                      {
                          label: M.intl.string(M.t.yjGtdH),
                          icon: h.CheckmarkLargeIcon,
                          onClick: () =>
                              (0, b.z)({
                                  channelId: t.saveData.channelId,
                                  messageId: t.saveData.messageId,
                                  dueAt: void 0
                              })
                      },
                      'mark-complete'
                  ),
                  (0, i.jsx)(
                      I.sF,
                      {
                          label: M.intl.string(M.t.vrbqs7),
                          icon: h.PencilIcon,
                          onClick: (e) =>
                              (0, p.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: M.intl.string(M.t.roMu1N),
                                          message: t.message
                                      });
                              })
                      },
                      'edit-reminder'
                  ),
                  (0, i.jsx)(I.fO, {}),
                  (0, i.jsx)(
                      I.sF,
                      {
                          label: M.intl.string(M.t['+TSRGB']),
                          icon: h.ArrowLargeRightIcon,
                          onClick: (e) => r(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      I.sF,
                      {
                          label: M.intl.string(M.t.SvXS1d),
                          icon: h.BookmarkIcon,
                          onClick: () => (0, b.x)(t.saveData)
                      },
                      'remove-reminder'
                  )
              ]
          })
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(
                      I.sF,
                      {
                          label: M.intl.string(M.t.mJ3P0N),
                          icon: h.ClockIcon,
                          onClick: (e) =>
                              (0, p.jW)(e, async () => {
                                  let { MessageReminderEditMenu: e } = await n.e('69818').then(n.bind(n, 898150));
                                  return (n) =>
                                      (0, i.jsx)(e, {
                                          ...n,
                                          label: M.intl.string(M.t.mJ3P0N),
                                          message: t.message
                                      });
                              })
                      },
                      'create-reminder'
                  ),
                  (0, i.jsx)(
                      I.sF,
                      {
                          label: M.intl.string(M.t['+TSRGB']),
                          icon: h.ArrowLargeRightIcon,
                          onClick: (e) => r(e)
                      },
                      'jump-to-message'
                  ),
                  (0, i.jsx)(
                      I.sF,
                      {
                          label: M.intl.string(M.t.SvXS1d),
                          icon: h.BookmarkIcon,
                          onClick: () => (0, b.x)(t.saveData)
                      },
                      'remove-bookmark'
                  )
              ]
          });
}
