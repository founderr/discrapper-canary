var i = n(200651),
    s = n(192379),
    a = n(873546),
    l = n(442837),
    r = n(481060),
    o = n(194359),
    c = n(686546),
    u = n(333984),
    d = n(486622),
    h = n(922409),
    p = n(86203),
    m = n(6025),
    _ = n(621853),
    f = n(171368),
    E = n(433355),
    g = n(699516),
    C = n(594174),
    I = n(768581),
    T = n(525541),
    x = n(981631),
    v = n(377668),
    S = n(228168),
    N = n(689938),
    A = n(995593);
let Z = (e) => {
        let { userId: t, channelId: n } = e,
            a = (0, l.e7)([_.Z], () => _.Z.getMutualGuilds(t), [t]),
            o = s.useMemo(
                () =>
                    null != a
                        ? a
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      s =
                                          null != n
                                              ? I.ZP.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: 24
                                                })
                                              : null;
                                  if (null == s) return null;
                                  let l = t === (a.length > 3 ? 3 : a.length) - 1,
                                      r = (0, i.jsx)(
                                          'img',
                                          {
                                              src: s,
                                              alt: '',
                                              className: A.avatar
                                          },
                                          t
                                      );
                                  return l
                                      ? r
                                      : (0, i.jsx)(
                                            c.ZP,
                                            {
                                                className: A.avatarMask,
                                                mask: c.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                width: 24,
                                                height: 24,
                                                children: r
                                            },
                                            t
                                        );
                              })
                              .filter((e) => null != e)
                        : [],
                [a]
            );
        return null == a || 0 === a.length
            ? (0, i.jsx)(r.Text, {
                  color: 'header-secondary',
                  variant: 'text-sm/normal',
                  children: N.Z.Messages.NO_MUTUAL_GUILDS
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', {
                          className: A.avatarContainer,
                          children: o
                      }),
                      (0, i.jsx)(r.Clickable, {
                          onClick: () => {
                              (0, f.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: S.oh.MUTUAL_GUILDS,
                                  analyticsLocation: { section: x.jXE.DIRECT_MESSAGE }
                              });
                          },
                          children: (0, i.jsx)(r.Text, {
                              className: A.mutualGuilds,
                              variant: 'text-sm/normal',
                              children: N.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: a.length })
                          })
                      })
                  ]
              });
    },
    M = (e) => {
        var t;
        let { relationshipType: n, userId: s, showingBanner: a } = e,
            l = null === (t = C.default.getUser(s)) || void 0 === t ? void 0 : t.bot,
            c = () => {
                o.Z.addRelationship({
                    userId: s,
                    context: { location: x.ZY5.DM_CHANNEL }
                });
            },
            u = (0, i.jsx)(r.Button, {
                className: A.action,
                size: r.Button.Sizes.TINY,
                color: r.Button.Colors.PRIMARY,
                onClick: () => {
                    o.Z.addRelationship({
                        userId: s,
                        context: { location: x.ZY5.DM_CHANNEL },
                        type: x.OGo.BLOCKED
                    });
                },
                children: N.Z.Messages.BLOCK
            });
        switch (n) {
            case x.OGo.NONE:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !l &&
                            !a &&
                            (0, i.jsx)(r.Button, {
                                className: A.action,
                                size: r.Button.Sizes.TINY,
                                onClick: c,
                                children: N.Z.Messages.ADD_FRIEND
                            }),
                        u
                    ]
                });
            case x.OGo.FRIEND:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(r.Button, {
                            className: A.action,
                            size: r.Button.Sizes.TINY,
                            onClick: () => {
                                o.Z.removeFriend(s, { location: x.ZY5.DM_CHANNEL });
                            },
                            color: r.Button.Colors.PRIMARY,
                            children: N.Z.Messages.REMOVE_FRIEND
                        }),
                        u
                    ]
                });
            case x.OGo.BLOCKED:
                return (0, i.jsx)(r.Button, {
                    className: A.action,
                    size: r.Button.Sizes.TINY,
                    onClick: () => {
                        o.Z.unblockUser(s, { location: x.ZY5.DM_CHANNEL });
                    },
                    color: r.Button.Colors.PRIMARY,
                    children: N.Z.Messages.UNBLOCK
                });
            case x.OGo.PENDING_INCOMING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(r.Text, {
                            className: A.action,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: N.Z.Messages.FRIEND_REQUEST_RECEIVED
                        }),
                        (0, i.jsx)(r.Button, {
                            className: A.action,
                            size: r.Button.Sizes.TINY,
                            onClick: c,
                            children: N.Z.Messages.FRIEND_REQUEST_ACCEPT
                        }),
                        (0, i.jsx)(r.Button, {
                            className: A.action,
                            size: r.Button.Sizes.TINY,
                            color: r.Button.Colors.PRIMARY,
                            onClick: () => {
                                o.Z.cancelFriendRequest(s, { location: x.ZY5.DM_CHANNEL });
                            },
                            children: N.Z.Messages.FRIEND_REQUEST_IGNORE
                        }),
                        u
                    ]
                });
            case x.OGo.PENDING_OUTGOING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(r.Button, {
                            className: A.action,
                            size: r.Button.Sizes.TINY,
                            disabled: !0,
                            children: N.Z.Messages.ADD_FRIEND_BUTTON_AFTER
                        }),
                        u
                    ]
                });
            default:
                return null;
        }
    },
    b = (e) => {
        let { channelId: t, otherUserId: n } = e,
            a = s.useCallback(() => {
                (0, r.showToast)((0, r.createToast)(N.Z.Messages.MESSAGE_REQUESTS_SPAM_REQUEST_ERROR_ALERT_TITLE, r.ToastType.FAILURE));
            }, []),
            l = s.useCallback(() => {
                m.Z.closeChannelSidebar(E.uZ);
            }, []),
            o = s.useCallback(() => {
                m.Z.closeChannelSidebar(E.uZ);
            }, []),
            {
                acceptMessageRequest: c,
                rejectMessageRequest: u,
                isAcceptLoading: h,
                isRejectLoading: p,
                isOptimisticAccepted: _,
                isOptimisticRejected: f
            } = (0, d.m)({
                user: C.default.getUser(n),
                onError: a,
                onAcceptSuccess: o,
                onRejectSuccess: l
            }),
            g = h || p || _ || f;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Button, {
                    className: A.action,
                    size: r.Button.Sizes.TINY,
                    onClick: () => c(t),
                    disabled: g,
                    submitting: h,
                    children: N.Z.Messages.MESSAGE_REQUEST_ACCEPT
                }),
                (0, i.jsx)(r.Button, {
                    className: A.action,
                    size: r.Button.Sizes.TINY,
                    onClick: () => u(t),
                    color: r.Button.Colors.PRIMARY,
                    disabled: g,
                    submitting: p,
                    children: N.Z.Messages.MESSAGE_REQUEST_IGNORE
                })
            ]
        });
    };
t.Z = (e) => {
    let { userId: t, channel: n, showingBanner: s } = e,
        { channelId: r } = (0, h._)(),
        o = (0, l.e7)([u.Z], () => null != r && u.Z.isSpam(r), [r]),
        c = (0, l.e7)([g.Z], () => g.Z.getRelationshipType(t), [t]),
        d = n.id === r;
    return t === v.fL
        ? null
        : o || d
          ? (0, i.jsxs)('div', {
                className: A.mobileContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: A.mobileMutualGuilds,
                        children: (0, i.jsx)(Z, {
                            userId: t,
                            channelId: n.id
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: A.mobileButtons,
                        children: [
                            (0, i.jsx)(b, {
                                channelId: n.id,
                                otherUserId: t
                            }),
                            (0, i.jsx)(p.Z, { channel: n })
                        ]
                    })
                ]
            })
          : !0 === a.tq || d
            ? (0, i.jsxs)('div', {
                  className: A.mobileContainer,
                  children: [
                      (0, i.jsx)('div', {
                          className: A.mobileMutualGuilds,
                          children: (0, i.jsx)(Z, {
                              userId: t,
                              channelId: n.id
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: A.mobileButtons,
                          children: [
                              (0, i.jsx)(M, {
                                  relationshipType: c,
                                  userId: t,
                                  showingBanner: s
                              }),
                              !s &&
                                  (0, i.jsx)(T.Z, {
                                      otherUserId: t,
                                      channel: n,
                                      navigateAwayOnReportSuccess: !1
                                  })
                          ]
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: A.container,
                  children: [
                      (0, i.jsx)(Z, {
                          userId: t,
                          channelId: n.id
                      }),
                      (0, i.jsx)('div', { className: A.divider }),
                      (0, i.jsx)(M, {
                          relationshipType: c,
                          userId: t,
                          showingBanner: s
                      }),
                      !s &&
                          (0, i.jsx)(T.Z, {
                              otherUserId: t,
                              channel: n
                          })
                  ]
              });
};
