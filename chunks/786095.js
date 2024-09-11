t.d(n, {
    Z: function () {
        return S;
    }
}),
    t(47120),
    t(724458);
var a = t(735250),
    i = t(470079),
    l = t(481060),
    r = t(239091),
    s = t(236413),
    o = t(727072),
    u = t(85960),
    d = t(676317),
    c = t(65912),
    E = t(556012),
    M = t(572456),
    I = t(434404),
    m = t(981631),
    g = t(273504),
    _ = t(689938),
    f = t(561240);
let Z = g.fX.KEYWORD;
function S(e, n) {
    let { perGuildMaxCount: t } = u.I6[Z],
        { isLoading: S, saveRule: A, errorMessage: T } = (0, c.w)(),
        { createNewEditingRule: v } = (0, c.V)(),
        [R, h] = i.useState(!1),
        [O, N] = (0, o.I2)(n),
        { rulesByTriggerType: p, updateRule: x } = (0, o.pH)(n),
        j = i.useMemo(() => {
            var e;
            return null !== (e = p[Z]) && void 0 !== e ? e : [];
        }, [p]),
        b = 0 === j.length,
        C = t > j.length && !b;
    if (!i.useMemo(() => (0, d.ze)(n), [n]) || null == e || 0 === e.length || null == n) return null;
    let D = e.split(' '),
        L = D.length;
    try {
        (0, s.km)(D, g.RH);
    } catch (e) {
        return null;
    }
    let P = () => {
            if (null != n)
                (0, r.Zy)(),
                    I.Z.open(n, m.pNK.GUILD_AUTOMOD),
                    setTimeout(() => {
                        v(n, Z, {
                            triggerMetadata: {
                                keywordFilter: [e],
                                regexPatterns: [],
                                allowList: []
                            }
                        });
                    }, 400);
        },
        G = async (n) => {
            var t, a;
            if (((0, r.Zy)(), !(await (0, M.XN)(n.name, e)))) return;
            let i = {
                ...n,
                triggerMetadata: {
                    ...n.triggerMetadata,
                    keywordFilter: [...(null !== (a = null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter) && void 0 !== a ? a : []), e]
                }
            };
            await A(i, j), x(i), null != T ? (0, l.showToast)((0, l.createToast)(_.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR, l.ToastType.FAILURE)) : (0, l.showToast)((0, l.createToast)(_.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS, l.ToastType.SUCCESS));
        },
        y = (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(l.MenuItem, {
                id: 'automod-rules-loading',
                label: _.Z.Messages.LOADING
            })
        });
    return (
        !O &&
            (y = (0, a.jsxs)(a.Fragment, {
                children: [
                    b &&
                        (0, a.jsx)(l.MenuItem, {
                            id: 'add-first-rule',
                            label: _.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                            action: P,
                            disabled: S
                        }),
                    j.map((e) => {
                        let n = (0, u.V9)(Z).reduce((n, t) => {
                            let a = e.actions.find((e) => {
                                let { type: n } = e;
                                return t === n;
                            });
                            if (null == a) return n;
                            let i = (0, E.c)(t, a);
                            return (n += ', '.concat(null == i ? void 0 : i.headerText));
                        }, '');
                        return (0, a.jsx)(
                            l.MenuRadioItem,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, a.jsx)(l.Text, {
                                    color: 'text-muted',
                                    className: f.actionTextHeader,
                                    variant: 'text-xs/normal',
                                    children: n.slice(2)
                                }),
                                group: 'automod-rule-selection',
                                checked: !1,
                                disabled: S,
                                action: () => G(e)
                            },
                            e.id
                        );
                    }),
                    C &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(l.MenuSeparator, {}),
                                (0, a.jsx)(l.MenuItem, {
                                    id: 'add-another-rule',
                                    label: _.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                                    action: P,
                                    disabled: S
                                })
                            ]
                        })
                ]
            })),
        (0, a.jsx)(l.MenuItem, {
            id: 'guild-automod-add-selection',
            label: _.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({ keywordCount: L }),
            onFocus: () => {
                if (!R) h(!0), N();
            },
            children: y
        })
    );
}
