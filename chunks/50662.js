n.d(s, {
    Z: function () {
        return C;
    }
});
var t = n(200651);
n(192379);
var a = n(913527),
    l = n.n(a),
    r = n(442837),
    i = n(692547),
    o = n(481060),
    c = n(239091),
    d = n(171368),
    u = n(650774),
    I = n(271383),
    E = n(594174),
    _ = n(709054),
    T = n(246364),
    m = n(360328),
    R = n(981631),
    M = n(689938),
    N = n(866323);
function C(e) {
    var s;
    let { guildJoinRequest: a, guild: C, guildJoinRequestUser: x } = e,
        { createdAt: h, actionedAt: A, guildId: b, userId: S } = a,
        { approveRequest: j, rejectRequest: P, submitting: p } = (0, m.s)(b, S, a.joinRequestId),
        g = null === (s = a.actionedByUser) || void 0 === s ? void 0 : s.id,
        v = (0, r.e7)([E.default], () => E.default.getUser(g)),
        f = (0, r.e7)([I.ZP], () => (null != g ? I.ZP.getMember(b, g) : null), [g, b]),
        Z = (0, r.e7)([u.Z], () => u.Z.getMemberCount(b)),
        O = (null != Z ? Z : 0) >= C.maxMembers,
        B = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING,
        L = (0, t.jsx)(o.ClockIcon, {
            size: 'custom',
            color: 'currentColor',
            width: 24,
            height: 24,
            className: N.icon
        });
    a.applicationStatus === T.wB.APPROVED
        ? ((B = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED),
          (L = (0, t.jsx)(o.CircleCheckIcon, {
              size: 'md',
              className: N.iconApproved,
              color: i.Z.colors.WHITE.css,
              secondaryColor: 'currentColor'
          })))
        : a.applicationStatus === T.wB.REJECTED &&
          ((B = M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED),
          (L = (0, t.jsx)(o.CircleXIcon, {
              size: 'md',
              color: i.Z.colors.WHITE.css,
              secondaryColor: i.Z.colors.STATUS_DANGER.css
          })));
    let D =
        null != v && null != A
            ? M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_ACTIONED_BY_HOOK.format({
                  date: l()(_.default.extractTimestamp(A)).format('ll'),
                  usernameHook: function () {
                      var e;
                      return (0, t.jsx)(
                          o.Clickable,
                          {
                              className: N.actionedByUser,
                              onClick: () =>
                                  (0, d.openUserProfileModal)({
                                      userId: v.id,
                                      guildId: b,
                                      analyticsLocation: {
                                          section: R.jXE.GUILD_MEMBER_VERIFICATION_APPLICATION_REVIEW,
                                          object: R.qAy.ACTIONED_BY_USER
                                      }
                                  }),
                              tag: 'div',
                              role: 'link',
                              children: (0, t.jsx)(o.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-primary',
                                  children: null !== (e = null == f ? void 0 : f.nick) && void 0 !== e ? e : v.username
                              })
                          },
                          'username-hook'
                      );
                  }
              })
            : l()(h).format('lll');
    return (0, t.jsxs)('div', {
        className: N.container,
        children: [
            (0, t.jsxs)('div', {
                className: N.wrapper,
                children: [
                    (0, t.jsxs)('div', {
                        className: N.inline,
                        children: [
                            L,
                            (0, t.jsxs)('div', {
                                children: [
                                    (0, t.jsx)(o.Heading, {
                                        variant: 'heading-sm/semibold',
                                        children: B
                                    }),
                                    (0, t.jsx)(o.Text, {
                                        className: N.headerSubtext,
                                        variant: 'text-xs/normal',
                                        color: 'header-secondary',
                                        children: D
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, t.jsxs)('div', {
                        className: N.inline,
                        children: [
                            a.applicationStatus === T.wB.SUBMITTED &&
                                (0, t.jsxs)('div', {
                                    className: N.buttons,
                                    children: [
                                        (0, t.jsx)(o.Tooltip, {
                                            text: M.Z.Messages.CLAN_APPLICATION_MAX_MEMBER_LIMIT_TOOLTIP,
                                            shouldShow: O,
                                            children: (e) =>
                                                (0, t.jsx)(o.Button, {
                                                    ...e,
                                                    color: o.Button.Colors.GREEN,
                                                    submitting: p,
                                                    disabled: O,
                                                    onClick: j,
                                                    children: M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVE_APPLICATION
                                                })
                                        }),
                                        (0, t.jsx)(o.Button, {
                                            color: o.Button.Colors.RED,
                                            onClick: P,
                                            disabled: p,
                                            children: M.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION
                                        })
                                    ]
                                }),
                            (0, t.jsx)(o.Clickable, {
                                onClick: (e) => {
                                    (0, c.jW)(e, async () => {
                                        let { default: e } = await n.e('84259').then(n.bind(n, 597409));
                                        return (s) =>
                                            (0, t.jsx)(e, {
                                                ...s,
                                                guild: C,
                                                user: x
                                            });
                                    });
                                },
                                className: N.overflow,
                                children: (0, t.jsx)(o.MoreHorizontalIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 20,
                                    height: 20,
                                    className: N.iconInteractive
                                })
                            })
                        ]
                    })
                ]
            }),
            a.applicationStatus === T.wB.REJECTED &&
                null != a.rejectionReason &&
                (0, t.jsx)('div', {
                    className: N.rejectionReason,
                    children: (0, t.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        children: a.rejectionReason
                    })
                })
        ]
    });
}
