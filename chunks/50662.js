n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(913527),
    a = n.n(r),
    l = n(442837),
    o = n(692547),
    c = n(481060),
    s = n(239091),
    d = n(171368),
    u = n(650774),
    m = n(271383),
    f = n(594174),
    b = n(709054),
    x = n(246364),
    h = n(360328),
    p = n(981631),
    g = n(388032),
    C = n(364068);
function _(e) {
    var t;
    let { guildJoinRequest: r, guild: _, guildJoinRequestUser: v } = e,
        { createdAt: j, actionedAt: I, guildId: T, userId: R } = r,
        { approveRequest: E, rejectRequest: S, submitting: w } = (0, h.s)(T, R, r.joinRequestId),
        A = null === (t = r.actionedByUser) || void 0 === t ? void 0 : t.id,
        N = (0, l.e7)([f.default], () => f.default.getUser(A)),
        B = (0, l.e7)([m.ZP], () => (null != A ? m.ZP.getMember(T, A) : null), [A, T]),
        Z = (0, l.e7)([u.Z], () => u.Z.getMemberCount(T)),
        P = (null != Z ? Z : 0) >= _.maxMembers,
        k = g.intl.string(g.t['4eQVBA']),
        M = (0, i.jsx)(c.ClockIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 24,
            height: 24,
            className: C.icon
        });
    r.applicationStatus === x.wB.APPROVED
        ? ((k = g.intl.string(g.t.aURgY2)),
          (M = (0, i.jsx)(c.CircleCheckIcon, {
              size: 'md',
              className: C.iconApproved,
              color: o.Z.colors.WHITE.css,
              secondaryColor: 'currentColor'
          })))
        : r.applicationStatus === x.wB.REJECTED &&
          ((k = g.intl.string(g.t.bSZklZ)),
          (M = (0, i.jsx)(c.CircleXIcon, {
              size: 'md',
              color: o.Z.colors.WHITE.css,
              secondaryColor: o.Z.colors.STATUS_DANGER.css
          })));
    let y =
        null != N && null != I
            ? g.intl.format(g.t.pRpZCQ, {
                  date: a()(b.default.extractTimestamp(I)).format('ll'),
                  usernameHook: function () {
                      var e;
                      return (0, i.jsx)(
                          c.Clickable,
                          {
                              className: C.actionedByUser,
                              onClick: () =>
                                  (0, d.openUserProfileModal)({
                                      userId: N.id,
                                      guildId: T,
                                      analyticsLocation: {
                                          section: p.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                          object: p.qAy.ACTIONED_BY_USER
                                      }
                                  }),
                              tag: 'div',
                              role: 'link',
                              children: (0, i.jsx)(c.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-primary',
                                  children: null !== (e = null == B ? void 0 : B.nick) && void 0 !== e ? e : N.username
                              })
                          },
                          'username-hook'
                      );
                  }
              })
            : a()(j).format('lll');
    return (0, i.jsxs)('div', {
        className: C.container,
        children: [
            (0, i.jsxs)('div', {
                className: C.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: C.inline,
                        children: [
                            M,
                            (0, i.jsxs)('div', {
                                children: [
                                    (0, i.jsx)(c.Heading, {
                                        variant: 'heading-sm/semibold',
                                        children: k
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        className: C.headerSubtext,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: y
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: C.inline,
                        children: [
                            r.applicationStatus === x.wB.SUBMITTED &&
                                (0, i.jsxs)('div', {
                                    className: C.buttons,
                                    children: [
                                        (0, i.jsx)(c.Tooltip, {
                                            text: g.intl.string(g.t.RbIXi4),
                                            shouldShow: P,
                                            children: (e) =>
                                                (0, i.jsx)(c.Button, {
                                                    ...e,
                                                    color: c.Button.Colors.GREEN,
                                                    submitting: w,
                                                    disabled: P,
                                                    onClick: E,
                                                    children: g.intl.string(g.t.BzjDQE)
                                                })
                                        }),
                                        (0, i.jsx)(c.Button, {
                                            color: c.Button.Colors.RED,
                                            onClick: S,
                                            disabled: w,
                                            children: g.intl.string(g.t.hDtbs7)
                                        })
                                    ]
                                }),
                            (0, i.jsx)(c.Clickable, {
                                onClick: (e) => {
                                    (0, s.jW)(e, async () => {
                                        let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                guild: _,
                                                user: v
                                            });
                                    });
                                },
                                className: C.overflow,
                                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: C.iconInteractive
                                })
                            })
                        ]
                    })
                ]
            }),
            r.applicationStatus === x.wB.REJECTED &&
                null != r.rejectionReason &&
                (0, i.jsx)('div', {
                    className: C.rejectionReason,
                    children: (0, i.jsx)(c.Text, {
                        variant: 'text-sm/normal',
                        children: r.rejectionReason
                    })
                })
        ]
    });
}
