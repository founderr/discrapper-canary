n.d(t, {
    Z: function () {
        return j;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(913527),
    o = n.n(a),
    c = n(399606),
    u = n(481060),
    d = n(480137),
    h = n(906732),
    m = n(376923),
    p = n(472596),
    f = n(987707),
    g = n(909746),
    C = n(501801),
    x = n(271383),
    v = n(430824),
    _ = n(5192),
    I = n(776767),
    E = n(981631),
    b = n(388032),
    S = n(759486),
    Z = n(722029),
    T = n(194898);
function N(e) {
    var t;
    let { log: n, member: r, guild: a } = e,
        { analyticsLocations: d } = (0, h.ZP)(),
        f = g.nm(n),
        v = g.QM(n),
        I = null === (t = g.V$(E.zUn.REASON, n)) || void 0 === t ? void 0 : t.newValue,
        T = g.J5(n),
        N = (0, m.LJ)(n.id),
        j = (0, c.e7)([x.ZP], () => (null != n.userId ? x.ZP.getMember(r.guildId, n.userId) : null), [r.guildId, n.userId]),
        A = l.useCallback(
            (e) => (t) => {
                t.preventDefault(), t.stopPropagation(), null != e && (0, p.RE)(e, d);
            },
            [d]
        ),
        y = l.useCallback(
            () =>
                null == n.user
                    ? null
                    : (0, i.jsx)(u.Tooltip, {
                          text: b.intl.string(b.t.mvsi9v),
                          children: (e) => {
                              var t;
                              let { onMouseEnter: l, onMouseLeave: s } = e;
                              return (0, i.jsx)(u.Clickable, {
                                  tag: 'span',
                                  className: S.username,
                                  onClick: A(j),
                                  onMouseEnter: l,
                                  onMouseLeave: s,
                                  children: (0, i.jsxs)(u.Text, {
                                      variant: 'text-sm/medium',
                                      tag: 'span',
                                      children: [
                                          '@',
                                          (0, i.jsx)(u.NameWithRole, {
                                              name: _.ZP.getName(r.guildId, null, n.user),
                                              color: null !== (t = null == j ? void 0 : j.colorString) && void 0 !== t ? t : void 0
                                          })
                                      ]
                                  })
                              });
                          }
                      }),
            [A, n.user, r.guildId, j]
        )();
    return (0, i.jsxs)('div', {
        className: s()(Z.modInfoItem, S.auditLogItem),
        children: [
            (0, i.jsxs)('div', {
                className: S.auditLogItemTitleContainer,
                children: [
                    (0, i.jsxs)('div', {
                        className: S.auditLogItemTitle,
                        children: [
                            null != f &&
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-sm/semibold',
                                    color: 'header-primary',
                                    children: f
                                }),
                            null != v &&
                                (0, i.jsxs)(u.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: ['(', 'string' == typeof v ? v : o()(v).fromNow(), ')']
                                })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: S.auditLogItemDate,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-primary',
                            children: N
                        })
                    })
                ]
            }),
            null != I &&
                (0, i.jsx)('div', {
                    className: S.auditLogSecondaryContainer,
                    children: (0, i.jsxs)('div', {
                        className: S.auditLogReason,
                        children: [
                            y,
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: I
                            })
                        ]
                    })
                }),
            null == I &&
                null != T &&
                (0, i.jsx)('div', {
                    className: S.auditLogSecondaryContainer,
                    children: (0, i.jsxs)('div', {
                        className: S.auditLogSecondary,
                        children: [
                            y,
                            (0, i.jsx)(u.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-muted',
                                tag: 'span',
                                children: T
                            })
                        ]
                    })
                }),
            null == I &&
                null == T &&
                (0, i.jsx)('div', {
                    className: S.auditLogSecondaryContainer,
                    children: (0, i.jsx)('div', {
                        className: S.auditLogSecondary,
                        children: (0, i.jsx)(u.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-muted',
                            tag: 'span',
                            children: (0, i.jsx)(C.tP, {
                                log: n,
                                guild: a,
                                onContentClick: () => {},
                                className: S.auditLogExpandedChangeDetails
                            })
                        })
                    })
                })
        ]
    });
}
function j(e) {
    let { member: t } = e,
        n = (0, c.e7)([v.Z], () => v.Z.getGuild(t.guildId), [t.guildId]),
        r = (0, c.e7)(
            [f.Z],
            () => {
                let e = f.Z.logs;
                return null == e || null == n ? [] : g._$(e, n);
            },
            [n]
        );
    return (l.useEffect(() => {
        (async function e(e, t) {
            await d.gV(t, e);
        })(t.guildId, t.userId);
    }, [t.guildId, t.userId]),
    null == n || 0 === r.length)
        ? null
        : (0, i.jsx)(u.FormItem, {
              title: b.intl.string(b.t.flCxLi),
              titleClassName: T.infoTitle,
              children:
                  r.length > 0
                      ? (0, i.jsx)(I.WM, {
                            children: r.map((e) =>
                                (0, i.jsx)(
                                    N,
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
