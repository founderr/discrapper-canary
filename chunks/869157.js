t.d(n, {
    Z: function () {
        return O;
    }
}),
    t(724458),
    t(47120);
var i = t(200651),
    l = t(192379),
    r = t(512722),
    a = t.n(r),
    o = t(392711),
    s = t.n(o),
    d = t(442837),
    c = t(481060),
    u = t(749210),
    m = t(367907),
    h = t(895924),
    p = t(581364),
    g = t(929507),
    f = t(997787),
    x = t(970731),
    b = t(314897),
    v = t(430824),
    C = t(594174),
    I = t(626135),
    N = t(5192),
    T = t(709054),
    _ = t(360606),
    j = t(905753),
    S = t(399860),
    E = t(335049),
    Z = t(617012),
    A = t(981631),
    y = t(388032),
    R = t(408795);
function O(e) {
    let { commandId: n, editPermissions: t, guildId: r, noneSelectedText: o, overwrites: m, hasAccessToMutatePermissions: g } = e,
        x = (0, d.e7)([v.Z], () => v.Z.getGuild(r));
    a()(null != x, '');
    let b = (0, d.e7)([v.Z], () => v.Z.getRoles(r)),
        [I, E] = l.useState(new Set()),
        Z = l.useMemo(() => {
            var e;
            let n = (0, p.bD)(r);
            let t =
                ((e = b),
                s()(e)
                    .sortBy((e) => e.position)
                    .reduce((e, n, t) => ((e[n.id] = t), e), {}));
            return Object.values(m)
                .filter((e) => e.canRead)
                .sort((e, i) => {
                    let l = e.type - i.type;
                    if (0 !== l) return l;
                    switch (e.type) {
                        case h.Kw.USER:
                            return (function (e, n, t) {
                                let i = Number(e.canWrite) - Number(n.canWrite);
                                if (0 !== i) return i;
                                let l = C.default.getUser(e.id),
                                    r = C.default.getUser(n.id);
                                if (null != l && null != r) {
                                    let e = N.ZP.getName(t, void 0, l),
                                        n = N.ZP.getName(t, void 0, r);
                                    return null == e ? void 0 : e.localeCompare(n);
                                }
                                return T.default.compare(e.id, n.id);
                            })(e, i, r);
                        case h.Kw.ROLE:
                            return (function (e, n, t, i) {
                                if (e.id === t) return -1;
                                if (n.id === t) return 1;
                                let l = i[e.id];
                                return l > i[n.id] ? -1 : 1;
                            })(e, i, r, t);
                        case h.Kw.CHANNEL:
                            return (function (e, n, t) {
                                if (e.id === t) return -1;
                                if (n.id === t) return 1;
                                let i = Number(e.canWrite) - Number(n.canWrite);
                                return 0 !== i ? i : T.default.compare(e.id, n.id);
                            })(e, i, n);
                    }
                });
        }, [r, m, b]),
        A = l.useCallback(
            (e, n) => {
                t({}, [(0, S.rE)(e, n)]);
            },
            [t]
        ),
        y = l.useCallback(
            (e, n, i) => {
                let l = (0, S.rE)(e, n);
                null != m[l] &&
                    t(
                        {
                            [l]: {
                                id: e,
                                permission: i,
                                type: n
                            }
                        },
                        []
                    );
            },
            [t, m]
        );
    l.useEffect(() => {
        let e = Object.values(m)
            .filter((e) => e.type === h.Kw.USER && !e.canRead && !I.has(e.id))
            .map((e) => e.id);
        if (0 !== e.length) u.Z.requestMembersById(r, e, !1), E((n) => new Set([...n, ...e]));
    }, [r, m, I, E]);
    let O = (0, d.e7)([j.Z], () => j.Z.getApplicationId()),
        k = (0, d.e7)([_.Z], () =>
            null == O
                ? void 0
                : _.Z.integrations.find((e) => {
                      var n;
                      return (null === (n = e.application) || void 0 === n ? void 0 : n.id) === O;
                  })
        ),
        w = (0, d.e7)([f.Z], () => void 0 !== k && f.Z.canShowToggleTooltip(k.id));
    return (0, i.jsx)(l.Fragment, {
        children:
            Z.length > 0
                ? Z.map((e) =>
                      (0, i.jsx)(
                          L,
                          {
                              guild: x,
                              commandId: n,
                              onChange: (n) => y(e.id, e.type, n),
                              onRemove: () => A(e.id, e.type),
                              overwrite: e,
                              integration: k,
                              canShowMigrationTooltip: w,
                              hasAccessToMutatePermissions: g
                          },
                          e.id
                      )
                  )
                : (0, i.jsx)('div', {
                      className: R.noItemsSelected,
                      children: (0, i.jsx)(c.Text, {
                          color: 'text-muted',
                          variant: 'text-sm/normal',
                          children: o
                      })
                  })
    });
}
function L(e) {
    var n, t, r;
    let a,
        { guild: o, commandId: s, onChange: d, onRemove: u, overwrite: f, integration: v, canShowMigrationTooltip: C, hasAccessToMutatePermissions: N } = e,
        T = f.id === o.id || f.id === (0, p.bD)(o.id),
        _ = null == v ? void 0 : null === (t = v.application) || void 0 === t ? void 0 : null === (n = t.bot) || void 0 === n ? void 0 : n.username,
        j = !f.canWrite || !N,
        S = b.default.getId();
    N ? !f.canWrite && (f.type === h.Kw.USER ? (a = f.id === S ? y.intl.string(y.t['1VF/09']) : y.intl.string(y.t.P1GnER)) : f.type === h.Kw.ROLE && (a = y.intl.string(y.t.mcAijY))) : (a = null != s ? y.intl.string(y.t.tybdam) : y.intl.string(y.t.z2hjk5));
    let O = C && null != v && f.id === o.id && void 0 !== _ && !f.permission;
    l.useEffect(() => {
        if (O) {
            var e;
            I.default.track(A.rMx.COMMANDS_MIGRATION_TOOLTIP_VIEWED, {
                ...(0, m.hH)(o.id),
                application_id: null == v ? void 0 : null === (e = v.application) || void 0 === e ? void 0 : e.id,
                location: 'toggle'
            });
        }
    }, [o.id, null == v ? void 0 : null === (r = v.application) || void 0 === r ? void 0 : r.id, O]);
    let L = (0, i.jsx)(c.Tooltip, {
            tooltipClassName: R.tooltip,
            text: a,
            shouldShow: j,
            position: 'left',
            hideOnClick: !1,
            children: (e) =>
                (0, i.jsx)('div', {
                    ...e,
                    children: (0, i.jsx)(Z.Z, {
                        isDisabled: j,
                        currentValue: f.permission,
                        onChange: O
                            ? (e) => {
                                  g.Z.dismissToggleTooltip(o.id, v), d(e);
                              }
                            : d
                    })
                })
        }),
        w = (0, i.jsx)(c.Popout, {
            renderPopout: () =>
                (0, i.jsx)(c.Clickable, {
                    onClick: (e) => {
                        e.stopPropagation(), g.Z.dismissToggleTooltip(o.id, v);
                    },
                    children: (0, i.jsx)(x.ZP, {
                        className: R.tooltip,
                        content: y.intl.format(y.t.pW4Cr6, {
                            botName: _,
                            link: 'https://discord.com/blog/welcome-to-the-new-era-of-discord-apps/'
                        }),
                        onClick: () => {}
                    })
                }),
            position: 'bottom',
            align: 'center',
            animation: c.Popout.Animation.TRANSLATE,
            onRequestClose: () => g.Z.dismissToggleTooltip(o.id, v),
            shouldShow: O,
            closeOnScroll: !0,
            children: () => L
        });
    return (0, i.jsxs)(
        'div',
        {
            className: R.entryItem,
            children: [
                (0, i.jsx)('div', {
                    className: R.entryName,
                    children: (0, i.jsx)(E.Z, {
                        guild: o,
                        id: f.id,
                        type: f.type,
                        isLocked: j,
                        lockTooltipText: a
                    })
                }),
                (0, i.jsxs)('div', {
                    className: R.entryActions,
                    children: [
                        (0, i.jsx)(k, {
                            commandId: s,
                            isSentinel: T,
                            isDisabled: !N,
                            onRemove: u
                        }),
                        w
                    ]
                })
            ]
        },
        f.id
    );
}
function k(e) {
    let { commandId: n, isSentinel: t, isDisabled: l, onRemove: r } = e;
    return l
        ? null
        : null != n || !t
          ? (0, i.jsx)('div', {
                className: R.removeActions,
                children: (0, i.jsx)(c.Clickable, {
                    className: R.removeContainer,
                    'aria-label': y.intl.string(y.t.mT0CQE),
                    onClick: r,
                    children: (0, i.jsx)(c.TrashIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: R.removeIcon
                    })
                })
            })
          : null;
}
