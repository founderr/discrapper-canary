n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(913527),
    o = n.n(r),
    c = n(399606),
    u = n(481060),
    d = n(480137),
    h = n(906732),
    m = n(884737),
    p = n(376923),
    _ = n(472596),
    f = n(987707),
    E = n(501801),
    g = n(271383),
    C = n(430824),
    I = n(274730),
    x = n(5192),
    T = n(776767),
    S = n(689938),
    v = n(577904),
    N = n(395193),
    A = n(446926);
function Z(e) {
    let { log: t, member: n, guild: a } = e,
        { analyticsLocations: r } = (0, h.ZP)(),
        d = m.nm(t),
        f = m.QM(t),
        C = m.of(t),
        I = m.J5(t),
        T = (0, p.LJ)(t.id),
        A = (0, c.e7)([g.ZP], () => (null != t.userId ? g.ZP.getMember(n.guildId, t.userId) : null), [n.guildId, t.userId]),
        Z = s.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, _.RE)(e, r);
            },
            [r]
        ),
        M = s.useCallback(
            () =>
                null == t.user
                    ? null
                    : (0, i.jsx)(u.Tooltip, {
                          text: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_AUDIT_LOG_SOURCE_USER,
                          children: (e) => {
                              var s;
                              let { onMouseEnter: a, onMouseLeave: l } = e;
                              return (0, i.jsx)(u.Clickable, {
                                  tag: 'span',
                                  className: v.username,
                                  onClick: Z(A),
                                  onMouseEnter: a,
                                  onMouseLeave: l,
                                  children: (0, i.jsxs)(u.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, i.jsx)(u.NameWithRole, {
                                              name: x.ZP.getName(n.guildId, null, t.user),
                                              color: null !== (s = null == A ? void 0 : A.colorString) && void 0 !== s ? s : void 0
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [Z, t.user, n.guildId, A]
        )();
    return (0, i.jsxs)('div', {
        className: l()(N.modInfoItem, v.auditLogItem),
        children: [
            (0, i.jsxs)('div', {
                className: v.auditLogItemTitleContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: v.auditLogItemTitle,
                        children: [
                            null != d &&
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: d
                                }),
                            null != f &&
                                (0, i.jsxs)(u.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof f ? f : o()(f).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: v.auditLogItemDate,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: T
                        })
                    })
                ]
            }),
            null != C &&
                (0, i.jsx)('div', {
                    className: v.auditLogSecondaryContainer,
                    children: (0, i.jsxs)('div', {
                        className: v.auditLogReason,
                        children: [
                            M,
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: C
                            })
                        ]
                    })
                }),
            null == C &&
                null != I &&
                (0, i.jsx)('div', {
                    className: v.auditLogSecondaryContainer,
                    children: (0, i.jsxs)('div', {
                        className: v.auditLogSecondary,
                        children: [
                            M,
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: I
                            })
                        ]
                    })
                }),
            null == C &&
                null == I &&
                (0, i.jsx)('div', {
                    className: v.auditLogSecondaryContainer,
                    children: (0, i.jsx)('div', {
                        className: v.auditLogSecondary,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, i.jsx)(E.tP, {
                                log: t,
                                guild: a,
                                onContentClick: () => {},
                                className: v.auditLogExpandedChangeDetails
                            })
                        })
                    })
                })
        ]
    });
}
function M(e) {
    let { member: t } = e,
        n = (0, c.e7)([C.Z], () => C.Z.getGuild(t.guildId), [t.guildId]),
        a = (0, c.e7)(
            [f.Z],
            () => {
                let e = f.Z.logs;
                return null == e || null == n ? [] : I._$(e, n);
            },
            [n]
        );
    return (s.useEffect(() => {
        (async function e(e, t) {
            await d.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === a.length)
        ? null
        : (0, i.jsx)(u.FormItem, {
              title: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_RECENT_AUDIT_LOG,
              titleClassName: A.infoTitle,
              children:
                  a.length > 0
                      ? (0, i.jsx)(T.WM, {
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    Z,
                                    {
                                        log: e,
                                        member: t,
                                        guild: n
                                    },
                                    e.id
                                )
                            )
                        })
                      : null
          });
}
