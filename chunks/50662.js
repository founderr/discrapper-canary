n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(200651);
n(192379);
var s = n(913527),
    r = n.n(s),
    l = n(442837),
    a = n(692547),
    o = n(481060),
    c = n(239091),
    d = n(171368),
    u = n(650774),
    m = n(271383),
    h = n(594174),
    x = n(709054),
    j = n(246364),
    g = n(360328),
    v = n(981631),
    C = n(388032),
    f = n(364068);
function R(e) {
    var t;
    let { guildJoinRequest: s, guild: R, guildJoinRequestUser: E } = e,
        { createdAt: p, actionedAt: I, guildId: T, userId: N } = s,
        { approveRequest: b, rejectRequest: Z, submitting: w } = (0, g.s)(T, N, s.joinRequestId),
        S = null === (t = s.actionedByUser) || void 0 === t ? void 0 : t.id,
        k = (0, l.e7)([h.default], () => h.default.getUser(S)),
        A = (0, l.e7)([m.ZP], () => (null != S ? m.ZP.getMember(T, S) : null), [S, T]),
        B = (0, l.e7)([u.Z], () => u.Z.getMemberCount(T)),
        P = (null != B ? B : 0) >= R.maxMembers,
        y = C.intl.string(C.t['4eQVBA']),
        U = (0, i.jsx)(o.ClockIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 24,
            height: 24,
            className: f.icon
        });
    s.applicationStatus === j.wB.APPROVED
        ? ((y = C.intl.string(C.t.aURgY2)),
          (U = (0, i.jsx)(o.CircleCheckIcon, {
              size: 'md',
              className: f.iconApproved,
              color: a.Z.colors.WHITE.css,
              secondaryColor: 'currentColor'
          })))
        : s.applicationStatus === j.wB.REJECTED &&
          ((y = C.intl.string(C.t.bSZklZ)),
          (U = (0, i.jsx)(o.CircleXIcon, {
              size: 'md',
              color: a.Z.colors.WHITE.css,
              secondaryColor: a.Z.colors.STATUS_DANGER.css
          })));
    let M =
        null != k && null != I
            ? C.intl.format(C.t.pRpZCQ, {
                  date: r()(x.default.extractTimestamp(I)).format('ll'),
                  usernameHook: function () {
                      var e;
                      return (0, i.jsx)(
                          o.Clickable,
                          {
                              className: f.actionedByUser,
                              onClick: () =>
                                  (0, d.openUserProfileModal)({
                                      userId: k.id,
                                      guildId: T,
                                      analyticsLocation: {
                                          section: v.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                          object: v.qAy.ACTIONED_BY_USER
                                      }
                                  }),
                              tag: 'div',
                              role: 'link',
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-primary',
                                  children: null !== (e = null == A ? void 0 : A.nick) && void 0 !== e ? e : k.username
                              })
                          },
                          'username-hook'
                      );
                  }
              })
            : r()(p).format('lll');
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsxs)('div', {
                className: f.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.inline,
                        children: [
                            U,
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(o.Heading, {
                                        variant: 'heading-sm/semibold',
                                        children: y
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        className: f.headerSubtext,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: M
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: f.inline,
                        children: [
                            s.applicationStatus === j.wB.SUBMITTED &&
                                (0, i.jsxs)('div', {
                                    className: f.buttons,
                                    children: [
                                        (0, i.jsx)(o.Tooltip, {
                                            text: C.intl.string(C.t.RbIXi4),
                                            shouldShow: P,
                                            children: (e) =>
                                                (0, i.jsx)(o.Button, {
                                                    ...e,
                                                    color: o.Button.Colors.GREEN,
                                                    submitting: w,
                                                    disabled: P,
                                                    onClick: b,
                                                    children: C.intl.string(C.t.BzjDQE)
                                                })
                                        }),
                                        (0, i.jsx)(o.Button, {
                                            color: o.Button.Colors.RED,
                                            onClick: Z,
                                            disabled: w,
                                            children: C.intl.string(C.t.hDtbs7)
                                        })
                                    ]
                                }),
                            (0, i.jsx)(o.Clickable, {
                                onClick: (e) => {
                                    (0, c.jW)(e, async () => {
                                        let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                guild: R,
                                                user: E
                                            });
                                    });
                                },
                                className: f.overflow,
                                children: (0, i.jsx)(o.MoreHorizontalIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: f.iconInteractive
                                })
                            })
                        ]
                    })
                ]
            }),
            s.applicationStatus === j.wB.REJECTED &&
                null != s.rejectionReason &&
                (0, i.jsx)('div', {
                    className: f.rejectionReason,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: s.rejectionReason
                    })
                })
        ]
    });
}
