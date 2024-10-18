t.d(n, {
    Z: function () {
        return S;
    }
}),
    t(47120),
    t(724458);
var i = t(735250),
    a = t(470079),
    s = t(481060),
    l = t(239091),
    r = t(236413),
    o = t(727072),
    u = t(85960),
    d = t(676317),
    c = t(65912),
    E = t(556012),
    M = t(572456),
    g = t(434404),
    f = t(981631),
    m = t(273504),
    I = t(689938),
    _ = t(561240);
let Z = m.fX.KEYWORD;
function S(e, n) {
    let { perGuildMaxCount: t } = u.I6[Z],
        { isLoading: S, saveRule: h, errorMessage: A } = (0, c.w)(),
        { createNewEditingRule: N } = (0, c.V)(),
        [v, T] = a.useState(!1),
        [p, O] = (0, o.I2)(n),
        { rulesByTriggerType: R, updateRule: x } = (0, o.pH)(n),
        C = a.useMemo(() => {
            var e;
            return null !== (e = R[Z]) && void 0 !== e ? e : [];
        }, [R]),
        D = 0 === C.length,
        P = t > C.length && !D;
    if (!a.useMemo(() => (0, d.ze)(n), [n]) || null == e || 0 === e.length || null == n) return null;
    let L = e.split(' '),
        b = L.length;
    try {
        (0, r.km)(L, m.RH);
    } catch (e) {
        return null;
    }
    let j = () => {
            if (null != n)
                (0, l.Zy)(),
                    g.Z.open(n, f.pNK.GUILD_AUTOMOD),
                    setTimeout(() => {
                        N(n, Z, {
                            triggerMetadata: {
                                keywordFilter: [e],
                                regexPatterns: [],
                                allowList: []
                            }
                        });
                    }, 400);
        },
        G = async (n) => {
            var t, i;
            if (((0, l.Zy)(), !(await (0, M.XN)(n.name, e)))) return;
            let a = {
                ...n,
                triggerMetadata: {
                    ...n.triggerMetadata,
                    keywordFilter: [...(null !== (i = null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter) && void 0 !== i ? i : []), e]
                }
            };
            await h(a, C), x(a), null != A ? (0, s.showToast)((0, s.createToast)(I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_ERROR, s.ToastType.FAILURE)) : (0, s.showToast)((0, s.createToast)(I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION_TOAST_SUCCESS, s.ToastType.SUCCESS));
        },
        y = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(s.MenuItem, {
                id: 'automod-rules-loading',
                label: I.Z.Messages.LOADING
            })
        });
    return (
        !p &&
            (y = (0, i.jsxs)(i.Fragment, {
                children: [
                    D &&
                        (0, i.jsx)(s.MenuItem, {
                            id: 'add-first-rule',
                            label: I.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE,
                            action: j,
                            disabled: S
                        }),
                    C.map((e) => {
                        let n = (0, u.V9)(Z).reduce((n, t) => {
                            let i = e.actions.find((e) => {
                                let { type: n } = e;
                                return t === n;
                            });
                            if (null == i) return n;
                            let a = (0, E.c)(t, i);
                            return (n += ', '.concat(null == a ? void 0 : a.headerText));
                        }, '');
                        return (0, i.jsx)(
                            s.MenuRadioItem,
                            {
                                id: e.id,
                                label: e.name,
                                subtext: (0, i.jsx)(s.Text, {
                                    color: 'text-muted',
                                    className: _.actionTextHeader,
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
                    P &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(s.MenuSeparator, {}),
                                (0, i.jsx)(s.MenuItem, {
                                    id: 'add-another-rule',
                                    label: I.Z.Messages.GUILD_AUTOMOD_ADD_NEW_RULE,
                                    action: j,
                                    disabled: S
                                })
                            ]
                        })
                ]
            })),
        (0, i.jsx)(s.MenuItem, {
            id: 'guild-automod-add-selection',
            label: I.Z.Messages.GUILD_AUTOMOD_ADD_SELECTION.format({ keywordCount: b }),
            onFocus: () => {
                if (!v) T(!0), O();
            },
            children: y
        })
    );
}
