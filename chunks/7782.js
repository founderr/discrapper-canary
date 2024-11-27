var i = n(200651),
    l = n(192379),
    r = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    c = n(686546),
    d = n(333984),
    u = n(486622),
    h = n(922409),
    p = n(86203),
    m = n(922611),
    f = n(6025),
    g = n(621853),
    C = n(171368),
    x = n(433355),
    _ = n(699516),
    v = n(594174),
    I = n(768581),
    E = n(525541),
    b = n(981631),
    N = n(377668),
    S = n(228168),
    Z = n(388032),
    T = n(108720);
let j = (e) => {
        let { userId: t, channelId: n } = e,
            r = (0, a.e7)([g.Z], () => g.Z.getMutualGuilds(t), [t]),
            o = l.useMemo(
                () =>
                    null != r
                        ? r
                              .slice(0, 3)
                              .map((e, t) => {
                                  let { guild: n } = e,
                                      l =
                                          null != n
                                              ? I.ZP.getGuildIconURL({
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
                              (0, C.openUserProfileModal)({
                                  userId: t,
                                  channelId: n,
                                  section: S.oh.MUTUAL_GUILDS,
                                  analyticsLocation: { section: b.jXE.DIRECT_MESSAGE }
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
    A = (e) => {
        var t;
        let { relationshipType: n, userId: l, showingBanner: r } = e,
            a = null === (t = v.default.getUser(l)) || void 0 === t ? void 0 : t.bot,
            c = (0, m.Do)({ location: 'RelationshipActions' }),
            d = () => {
                o.Z.addRelationship({
                    userId: l,
                    context: { location: b.ZY5.DM_CHANNEL }
                });
            },
            u = (0, i.jsx)(s.Button, {
                className: T.action,
                size: s.Button.Sizes.TINY,
                color: s.Button.Colors.PRIMARY,
                onClick: () => {
                    o.Z.addRelationship({
                        userId: l,
                        context: { location: b.ZY5.DM_CHANNEL },
                        type: b.OGo.BLOCKED
                    });
                },
                children: Z.intl.string(Z.t.l4EmaW)
            });
        switch (n) {
            case b.OGo.NONE:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !a &&
                            !r &&
                            (0, i.jsx)(s.Button, {
                                className: T.action,
                                size: s.Button.Sizes.TINY,
                                onClick: d,
                                children: Z.intl.string(Z.t.w5uwoK)
                            }),
                        u
                    ]
                });
            case b.OGo.FRIEND:
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Button, {
                            className: T.action,
                            size: s.Button.Sizes.TINY,
                            onClick: () => {
                                o.Z.removeFriend(l, { location: b.ZY5.DM_CHANNEL });
                            },
                            color: s.Button.Colors.PRIMARY,
                            children: Z.intl.string(Z.t.cvSt1N)
                        }),
                        u
                    ]
                });
            case b.OGo.BLOCKED:
                return (0, i.jsx)(s.Button, {
                    className: T.action,
                    size: s.Button.Sizes.TINY,
                    onClick: () => {
                        o.Z.unblockUser(l, { location: b.ZY5.DM_CHANNEL });
                    },
                    color: s.Button.Colors.PRIMARY,
                    children: Z.intl.string(Z.t.XyHpKC)
                });
            case b.OGo.PENDING_INCOMING:
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
                            onClick: d,
                            children: Z.intl.string(c ? Z.t['+WbSn5'] : Z.t.ZcibdX)
                        }),
                        (0, i.jsx)(s.Button, {
                            className: T.action,
                            size: s.Button.Sizes.TINY,
                            color: s.Button.Colors.PRIMARY,
                            onClick: () => {
                                o.Z.cancelFriendRequest(l, { location: b.ZY5.DM_CHANNEL });
                            },
                            children: Z.intl.string(c ? Z.t.rQSndn : Z.t.xuio0N)
                        }),
                        u
                    ]
                });
            case b.OGo.PENDING_OUTGOING:
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
    y = (e) => {
        let { channelId: t, otherUserId: n } = e,
            r = l.useCallback(() => {
                (0, s.showToast)((0, s.createToast)(Z.intl.string(Z.t.a2j0ho), s.ToastType.FAILURE));
            }, []),
            a = l.useCallback(() => {
                f.Z.closeChannelSidebar(x.uZ);
            }, []),
            o = l.useCallback(() => {
                f.Z.closeChannelSidebar(x.uZ);
            }, []),
            {
                acceptMessageRequest: c,
                rejectMessageRequest: d,
                isAcceptLoading: h,
                isRejectLoading: p,
                isOptimisticAccepted: m,
                isOptimisticRejected: g
            } = (0, u.m)({
                user: v.default.getUser(n),
                onError: r,
                onAcceptSuccess: o,
                onRejectSuccess: a
            }),
            C = h || p || m || g;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Button, {
                    className: T.action,
                    size: s.Button.Sizes.TINY,
                    onClick: () => c(t),
                    disabled: C,
                    submitting: h,
                    children: Z.intl.string(Z.t.Kz8Pws)
                }),
                (0, i.jsx)(s.Button, {
                    className: T.action,
                    size: s.Button.Sizes.TINY,
                    onClick: () => d(t),
                    color: s.Button.Colors.PRIMARY,
                    disabled: C,
                    submitting: p,
                    children: Z.intl.string(Z.t.B2nygY)
                })
            ]
        });
    };
t.Z = (e) => {
    let { userId: t, channel: n, showingBanner: l } = e,
        { channelId: s } = (0, h._)(),
        o = (0, a.e7)([d.Z], () => null != s && d.Z.isSpam(s), [s]),
        c = (0, a.e7)([_.Z], () => _.Z.getRelationshipType(t), [t]),
        u = n.id === s;
    return t === N.fL
        ? null
        : o || u
          ? (0, i.jsxs)('div', {
                className: T.mobileContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: T.mobileMutualGuilds,
                        children: (0, i.jsx)(j, {
                            userId: t,
                            channelId: n.id
                        })
                    }),
                    (0, i.jsxs)('div', {
                        className: T.mobileButtons,
                        children: [
                            (0, i.jsx)(y, {
                                channelId: n.id,
                                otherUserId: t
                            }),
                            (0, i.jsx)(p.Z, { channel: n })
                        ]
                    })
                ]
            })
          : !0 === r.tq || u
            ? (0, i.jsxs)('div', {
                  className: T.mobileContainer,
                  children: [
                      (0, i.jsx)('div', {
                          className: T.mobileMutualGuilds,
                          children: (0, i.jsx)(j, {
                              userId: t,
                              channelId: n.id
                          })
                      }),
                      (0, i.jsxs)('div', {
                          className: T.mobileButtons,
                          children: [
                              (0, i.jsx)(A, {
                                  relationshipType: c,
                                  userId: t,
                                  showingBanner: l
                              }),
                              !l &&
                                  (0, i.jsx)(E.Z, {
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
                      (0, i.jsx)(j, {
                          userId: t,
                          channelId: n.id
                      }),
                      (0, i.jsx)('div', { className: T.divider }),
                      (0, i.jsx)(A, {
                          relationshipType: c,
                          userId: t,
                          showingBanner: l
                      }),
                      !l &&
                          (0, i.jsx)(E.Z, {
                              otherUserId: t,
                              channel: n
                          })
                  ]
              });
};
