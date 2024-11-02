var i = n(200651),
    l = n(192379),
    r = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    c = n(686546),
    u = n(333984),
    d = n(486622),
    h = n(922409),
    m = n(86203),
    p = n(6025),
    f = n(621853),
    g = n(171368),
    C = n(433355),
    x = n(699516),
    v = n(594174),
    _ = n(768581),
    I = n(525541),
    E = n(981631),
    b = n(377668),
    S = n(228168),
    Z = n(388032),
    T = n(995593);
let N = (e) => {
        let { userId: t, channelId: n } = e,
            r = (0, a.e7)([f.Z], () => f.Z.getMutualGuilds(t), [t]),
            o = l.useMemo(
                () =>
                    null != r
                        ? r
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      l =
                                          null != n
                                              ? _.ZP.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: 24
                                                })
                                              : null;
                                  if (null == l) return null;
                                  let a = t === (r.length > 3 ? 3 : r.length) - 1,
                                      s = (0, i.jsx)(
                                          'img',
                                          {
                                              src: l,
                                              alt: '',
                                              className: T.avatar
                                          },
                                          t
                                      );
                                  return a
                                      ? s
                                      : (0, i.jsx)(
                                            c.ZP,
                                            {
                                                className: T.avatarMask,
                                                mask: c.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                width: 24,
                                                height: 24,
                                                children: s
                                            },
                                            t
                                        );
                              })
                              .filter((e) => null != e)
                        : [],
                [r]
            );
        return null == r || 0 === r.length
            ? (0, i.jsx)(s.Text, {
                  color: 'header-secondary',
                  variant: 'text-sm/normal',
                  children: Z.intl.string(Z.t.zjVh8v)
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', {
                          className: T.avatarContainer,
                          children: o
                      }),
                      (0, i.jsx)(s.Clickable, {
                          onClick: () => {
                              (0, g.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: S.oh.MUTUAL_GUILDS,
                                  analyticsLocation: { section: E.jXE.DIRECT_MESSAGE }
                              });
                          },
                          children: (0, i.jsx)(s.Text, {
                              className: T.mutualGuilds,
                              variant: 'text-sm/normal',
                              children: Z.intl.format(Z.t.eE3oen, { count: r.length })
                          })
                      })
                  ]
              });
    },
    j = (e) => {
        var t;
        let { relationshipType: n, userId: l, showingBanner: r } = e,
            a = null === (t = v.default.getUser(l)) || void 0 === t ? void 0 : t.bot,
            c = () => {
                o.Z.addRelationship({
                    userId: l,
                    context: { location: E.ZY5.DM_CHANNEL }
                });
            },
            u = (0, i.jsx)(s.Button, {
                className: T.action,
                size: s.Button.Sizes.TINY,
                color: s.Button.Colors.PRIMARY,
                onClick: () => {
                    o.Z.addRelationship({
                        userId: l,
                        context: { location: E.ZY5.DM_CHANNEL },
                        type: E.OGo.BLOCKED
                    });
                },
                children: Z.intl.string(Z.t.l4EmaW)
            });
        switch (n) {
            case E.OGo.NONE:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !a &&
                            !r &&
                            (0, i.jsx)(s.Button, {
                                className: T.action,
                                size: s.Button.Sizes.TINY,
                                onClick: c,
                                children: Z.intl.string(Z.t.w5uwoK)
                            }),
                        u
                    ]
                });
            case E.OGo.FRIEND:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Button, {
                            className: T.action,
                            size: s.Button.Sizes.TINY,
                            onClick: () => {
                                o.Z.removeFriend(l, { location: E.ZY5.DM_CHANNEL });
                            },
                            color: s.Button.Colors.PRIMARY,
                            children: Z.intl.string(Z.t.cvSt1N)
                        }),
                        u
                    ]
                });
            case E.OGo.BLOCKED:
                return (0, i.jsx)(s.Button, {
                    className: T.action,
                    size: s.Button.Sizes.TINY,
                    onClick: () => {
                        o.Z.unblockUser(l, { location: E.ZY5.DM_CHANNEL });
                    },
                    color: s.Button.Colors.PRIMARY,
                    children: Z.intl.string(Z.t.XyHpKC)
                });
            case E.OGo.PENDING_INCOMING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Text, {
                            className: T.action,
                            color: 'header-secondary',
                            variant: 'text-sm/normal',
                            children: Z.intl.string(Z.t.c2v5nJ)
                        }),
                        (0, i.jsx)(s.Button, {
                            className: T.action,
                            size: s.Button.Sizes.TINY,
                            onClick: c,
                            children: Z.intl.string(Z.t.ZcibdX)
                        }),
                        (0, i.jsx)(s.Button, {
                            className: T.action,
                            size: s.Button.Sizes.TINY,
                            color: s.Button.Colors.PRIMARY,
                            onClick: () => {
                                o.Z.cancelFriendRequest(l, { location: E.ZY5.DM_CHANNEL });
                            },
                            children: Z.intl.string(Z.t.xuio0N)
                        }),
                        u
                    ]
                });
            case E.OGo.PENDING_OUTGOING:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Button, {
                            className: T.action,
                            size: s.Button.Sizes.TINY,
                            disabled: !0,
                            children: Z.intl.string(Z.t.xMH6vL)
                        }),
                        u
                    ]
                });
            default:
                return null;
        }
    },
    A = (e) => {
        let { channelId: t, otherUserId: n } = e,
            r = l.useCallback(() => {
                (0, s.showToast)((0, s.createToast)(Z.intl.string(Z.t.a2j0ho), s.ToastType.FAILURE));
            }, []),
            a = l.useCallback(() => {
                p.Z.closeChannelSidebar(C.uZ);
            }, []),
            o = l.useCallback(() => {
                p.Z.closeChannelSidebar(C.uZ);
            }, []),
            {
                acceptMessageRequest: c,
                rejectMessageRequest: u,
                isAcceptLoading: h,
                isRejectLoading: m,
                isOptimisticAccepted: f,
                isOptimisticRejected: g
            } = (0, d.m)({
                user: v.default.getUser(n),
                onError: r,
                onAcceptSuccess: o,
                onRejectSuccess: a
            }),
            x = h || m || f || g;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Button, {
                    className: T.action,
                    size: s.Button.Sizes.TINY,
                    onClick: () => c(t),
                    disabled: x,
                    submitting: h,
                    children: Z.intl.string(Z.t.Kz8Pws)
                }),
                (0, i.jsx)(s.Button, {
                    className: T.action,
                    size: s.Button.Sizes.TINY,
                    onClick: () => u(t),
                    color: s.Button.Colors.PRIMARY,
                    disabled: x,
                    submitting: m,
                    children: Z.intl.string(Z.t.B2nygY)
                })
            ]
        });
    };
t.Z = (e) => {
    let { userId: t, channel: n, showingBanner: l } = e,
        { channelId: s } = (0, h._)(),
        o = (0, a.e7)([u.Z], () => null != s && u.Z.isSpam(s), [s]),
        c = (0, a.e7)([x.Z], () => x.Z.getRelationshipType(t), [t]),
        d = n.id === s;
    return t === b.fL
        ? null
        : o || d
          ? (0, i.jsxs)('div', {
                className: T.mobileContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: T.mobileMutualGuilds,
                        children: (0, i.jsx)(N, {
                            userId: t,
                            channelId: n.id
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: T.mobileButtons,
                        children: [
                            (0, i.jsx)(A, {
                                channelId: n.id,
                                otherUserId: t
                            }),
                            (0, i.jsx)(m.Z, { channel: n })
                        ]
                    })
                ]
            })
          : !0 === r.tq || d
            ? (0, i.jsxs)('div', {
                  className: T.mobileContainer,
                  children: [
                      (0, i.jsx)('div', {
                          className: T.mobileMutualGuilds,
                          children: (0, i.jsx)(N, {
                              userId: t,
                              channelId: n.id
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: T.mobileButtons,
                          children: [
                              (0, i.jsx)(j, {
                                  relationshipType: c,
                                  userId: t,
                                  showingBanner: l
                              }),
                              !l &&
                                  (0, i.jsx)(I.Z, {
                                      otherUserId: t,
                                      channel: n,
                                      navigateAwayOnReportSuccess: !1
                                  })
                          ]
                      })
                  ]
              })
            : (0, i.jsxs)('div', {
                  className: T.container,
                  children: [
                      (0, i.jsx)(N, {
                          userId: t,
                          channelId: n.id
                      }),
                      (0, i.jsx)('div', { className: T.divider }),
                      (0, i.jsx)(j, {
                          relationshipType: c,
                          userId: t,
                          showingBanner: l
                      }),
                      !l &&
                          (0, i.jsx)(I.Z, {
                              otherUserId: t,
                              channel: n
                          })
                  ]
              });
};
