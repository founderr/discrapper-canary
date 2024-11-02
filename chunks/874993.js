n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(47120),
    n(536091);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(692547),
    a = n(481060),
    o = n(999382),
    c = n(279542),
    d = n(823379),
    u = n(63063),
    m = n(426563),
    h = n(727072),
    g = n(85960),
    x = n(577330),
    p = n(65912),
    f = n(51248),
    C = n(546513),
    I = n(572456),
    _ = n(273504),
    N = n(981631),
    v = n(388032),
    T = n(603211);
function j(e) {
    var t, n;
    let { guildId: j, setPreventNavigation: E = () => {} } = e,
        { editingRule: S, setEditingRule: b } = (0, p.V)(),
        { guild: R, subsection: Z } = (0, l.cj)([o.Z], () => o.Z.getProps()),
        A = null !== (n = null !== (t = null == R ? void 0 : R.id) && void 0 !== t ? t : j) && void 0 !== n ? n : N.lds,
        L = null != S,
        [y] = (0, h.RD)(A),
        { rulesByTriggerType: D } = (0, h.pH)(A),
        O = {
            [g.vh.MEMBERS]: v.intl.string(v.t.sx4E5u),
            [g.vh.CONTENT]: v.intl.string(v.t.fphZb2)
        },
        M = r.useMemo(
            () =>
                Object.values(null != D ? D : {})
                    .flat()
                    .filter(d.lm),
            [D]
        );
    r.useEffect(() => {
        L && b(null);
    }, [A]);
    let P = r.useCallback(
            (e, t) => {
                if (null != e) {
                    var n, i;
                    return null !==
                        (i =
                            null ===
                                (n = M.find((t) => {
                                    let { id: n } = t;
                                    return n === e;
                                })) || void 0 === n
                                ? void 0
                                : n.name) && void 0 !== i
                        ? i
                        : null;
                }
                return null != t ? g.I6[t].getDefaultRuleName() : null;
            },
            [M]
        ),
        k = r.useMemo(() => {
            var e, t;
            return P(null !== (e = null == S ? void 0 : S.id) && void 0 !== e ? e : null, null !== (t = null == S ? void 0 : S.triggerType) && void 0 !== t ? t : null);
        }, [P, S]);
    r.useEffect(() => {
        E(L, (0, I.af)(k));
    }, [E, L, k]);
    let w = (0, g.Z6)(A),
        B = (e) =>
            (0, i.jsx)(i.Fragment, {
                children: e.map((e) => {
                    var t;
                    return (0, i.jsx)(
                        C.Z,
                        {
                            guildId: A,
                            triggerType: e,
                            rules: null !== (t = D[e]) && void 0 !== t ? t : [],
                            initWithEdit: Z === N.KsC.AUTOMOD_MENTION_SPAM && e === _.fX.MENTION_SPAM
                        },
                        e
                    );
                })
            });
    return (0, i.jsxs)(a.FormSection, {
        title: v.intl.string(v.t.uRelg4),
        tag: 'h1',
        children: [
            (0, i.jsxs)('div', {
                className: T.descriptionContainer,
                children: [
                    (0, i.jsxs)(a.FormSection, {
                        tag: 'h3',
                        className: T.description,
                        titleClassName: T.descriptionHeader,
                        children: [
                            (0, i.jsx)(a.Text, {
                                variant: 'text-md/medium',
                                color: 'header-secondary',
                                children: v.intl.string(v.t.EwuSCQ)
                            }),
                            (0, i.jsx)(a.Text, {
                                variant: 'text-sm/medium',
                                className: T.helpUrl,
                                children: v.intl.format(v.t['B+sgGh'], { helpUrl: u.Z.getArticleURL(N.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE) })
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: T.descriptionAvatarContainer,
                        children: [
                            (0, i.jsx)(a.Avatar, {
                                src: (0, m.j)(),
                                size: a.AvatarSizes.SIZE_80,
                                'aria-label': v.intl.string(v.t.hG1StL)
                            }),
                            (0, i.jsx)(a.TextBadge, {
                                text: (0, i.jsxs)('div', {
                                    className: T.automodBadgeText,
                                    children: [
                                        (0, i.jsx)(a.CheckmarkLargeBoldIcon, {
                                            size: 'xxs',
                                            color: 'currentColor',
                                            className: T.checkmarkIcon
                                        }),
                                        (0, i.jsx)(a.Text, {
                                            variant: 'text-xs/bold',
                                            className: T.automodText,
                                            children: v.intl.string(v.t.hG1StL)
                                        })
                                    ]
                                }),
                                color: s.Z.unsafe_rawColors.BRAND_500.css,
                                className: T.textBadge
                            })
                        ]
                    })
                ]
            }),
            y
                ? (0, i.jsx)(x.Z, {})
                : Object.entries(w).map((e) => {
                      let [t, n] = e;
                      if (0 === n.length) return (0, i.jsx)(r.Fragment, {}, t);
                      let l =
                          null != O[t]
                              ? (0, i.jsx)(a.FormSection, {
                                    tag: 'h3',
                                    className: T.categoryHeader,
                                    children: (0, i.jsx)(a.Text, {
                                        variant: 'text-lg/normal',
                                        color: 'header-primary',
                                        children: O[t]
                                    })
                                })
                              : null;
                      return (0, i.jsxs)(
                          'div',
                          {
                              className: T.categoryContainer,
                              children: [l, B(n)]
                          },
                          t
                      );
                  }),
            null != R &&
                (0, i.jsx)(c.k0, {
                    guild: R,
                    withDivider: !1,
                    className: T.explicitContentFilterSection
                }),
            (0, i.jsx)(f.Z, {
                guildId: A,
                existingRules: M
            }),
            L && (0, i.jsx)('div', { className: T.endSpacer })
        ]
    });
}
