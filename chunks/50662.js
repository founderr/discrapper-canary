n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(200651);
n(192379);
var l = n(913527),
    r = n.n(l),
    a = n(442837),
    s = n(692547),
    o = n(481060),
    c = n(239091),
    d = n(171368),
    u = n(650774),
    m = n(271383),
    h = n(594174),
    x = n(709054),
    b = n(246364),
    j = n(360328),
    p = n(981631),
    g = n(388032),
    v = n(866323);
function f(e) {
    var t;
    let { guildJoinRequest: l, guild: f, guildJoinRequestUser: C } = e,
        { createdAt: I, actionedAt: R, guildId: E, userId: T } = l,
        { approveRequest: S, rejectRequest: _, submitting: N } = (0, j.s)(E, T, l.joinRequestId),
        A = null === (t = l.actionedByUser) || void 0 === t ? void 0 : t.id,
        Z = (0, a.e7)([h.default], () => h.default.getUser(A)),
        w = (0, a.e7)([m.ZP], () => (null != A ? m.ZP.getMember(E, A) : null), [A, E]),
        P = (0, a.e7)([u.Z], () => u.Z.getMemberCount(E)),
        B = (null != P ? P : 0) >= f.maxMembers,
        M = g.intl.string(g.t['4eQVBA']),
        y = (0, i.jsx)(o.ClockIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 24,
            height: 24,
            className: v.icon
        });
    l.applicationStatus === b.wB.APPROVED
        ? ((M = g.intl.string(g.t.aURgY2)),
          (y = (0, i.jsx)(o.CircleCheckIcon, {
              size: 'md',
              className: v.iconApproved,
              color: s.Z.colors.WHITE.css,
              secondaryColor: 'currentColor'
          })))
        : l.applicationStatus === b.wB.REJECTED &&
          ((M = g.intl.string(g.t.bSZklZ)),
          (y = (0, i.jsx)(o.CircleXIcon, {
              size: 'md',
              color: s.Z.colors.WHITE.css,
              secondaryColor: s.Z.colors.STATUS_DANGER.css
          })));
    let k =
        null != Z && null != R
            ? g.intl.format(g.t.pRpZCQ, {
                  date: r()(x.default.extractTimestamp(R)).format('ll'),
                  usernameHook: function () {
                      var e;
                      return (0, i.jsx)(
                          o.Clickable,
                          {
                              className: v.actionedByUser,
                              onClick: () =>
                                  (0, d.openUserProfileModal)({
                                      userId: Z.id,
                                      guildId: E,
                                      analyticsLocation: {
                                          section: p.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                          object: p.qAy.ACTIONED_BY_USER
                                      }
                                  }),
                              tag: 'div',
                              role: 'link',
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-primary',
                                  children: null !== (e = null == w ? void 0 : w.nick) && void 0 !== e ? e : Z.username
                              })
                          },
                          'username-hook'
                      );
                  }
              })
            : r()(I).format('lll');
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsxs)('div', {
                className: v.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: v.inline,
                        children: [
                            y,
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(o.Heading, {
                                        variant: 'heading-sm/semibold',
                                        children: M
                                    }),
                                    (0, i.jsx)(o.Text, {
                                        className: v.headerSubtext,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: k
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: v.inline,
                        children: [
                            l.applicationStatus === b.wB.SUBMITTED &&
                                (0, i.jsxs)('div', {
                                    className: v.buttons,
                                    children: [
                                        (0, i.jsx)(o.Tooltip, {
                                            text: g.intl.string(g.t.RbIXi4),
                                            shouldShow: B,
                                            children: (e) =>
                                                (0, i.jsx)(o.Button, {
                                                    ...e,
                                                    color: o.Button.Colors.GREEN,
                                                    submitting: N,
                                                    disabled: B,
                                                    onClick: S,
                                                    children: g.intl.string(g.t.BzjDQE)
                                                })
                                        }),
                                        (0, i.jsx)(o.Button, {
                                            color: o.Button.Colors.RED,
                                            onClick: _,
                                            disabled: N,
                                            children: g.intl.string(g.t.hDtbs7)
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
                                                guild: f,
                                                user: C
                                            });
                                    });
                                },
                                className: v.overflow,
                                children: (0, i.jsx)(o.MoreHorizontalIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: v.iconInteractive
                                })
                            })
                        ]
                    })
                ]
            }),
            l.applicationStatus === b.wB.REJECTED &&
                null != l.rejectionReason &&
                (0, i.jsx)('div', {
                    className: v.rejectionReason,
                    children: (0, i.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: l.rejectionReason
                    })
                })
        ]
    });
}
