n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(876215),
    u = n(442837),
    d = n(433517),
    h = n(481060),
    m = n(570140),
    x = n(812206),
    f = n(835473),
    g = n(681619),
    p = n(810568),
    b = n(168524),
    v = n(77498),
    _ = n(823379),
    C = n(71585),
    j = n(146282),
    T = n(650613),
    N = n(789086),
    S = n(206583),
    y = n(787524),
    w = n(535271);
let I = [
    {
        key: 'type',
        cellClassName: i()(y.cell, y.cellType),
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(h.Text, {
                variant: 'text-md/semibold',
                children: c.s[t]
            });
        }
    },
    {
        key: 'count',
        cellClassName: i()(y.cell, y.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, r.jsx)('div', {
                children: (0, r.jsx)(h.Text, {
                    variant: 'text-md/normal',
                    children: t.length
                })
            });
        }
    },
    {
        key: 'only?',
        cellClassName: y.cell,
        render(e) {
            let { type: t } = e;
            return (0, r.jsx)(k, { type: t });
        }
    }
];
function k(e) {
    var t, n;
    let { type: a } = e,
        l = (0, u.e7)([j.Z], () => j.Z.getFilters()),
        i = null !== (n = null == l ? void 0 : null === (t = l.types) || void 0 === t ? void 0 : t.has(a)) && void 0 !== n && n;
    return (0, r.jsx)(h.Checkbox, {
        value: i,
        onClick: function () {
            i
                ? m.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: void 0
                  })
                : m.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: { types: new Set([a]) }
                  });
        }
    });
}
function E() {
    var e, t;
    let n = (0, u.e7)([j.Z], () => j.Z.getFeed(S.YN.GLOBAL_FEED)),
        l = (0, u.e7)([j.Z], () => j.Z.getDebugImpressionCappingDisabled()),
        o = (0, u.e7)([C.Z], () => C.Z.getDebugFastImpressionCappingEnabled()),
        c = (function (e) {
            let t = s().groupBy(e, (e) => e.content_type);
            return Object.keys(t).map((e) => {
                let n = t[e];
                return {
                    key: ''.concat(e),
                    type: n[0].content_type,
                    entries: n
                };
            });
        })(null == n ? void 0 : null === (e = n.entries) || void 0 === e ? void 0 : e.map((e) => e.content)),
        k = (0, u.e7)([j.Z], () => {
            var e;
            return (null === (e = j.Z.getFeedState(S.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
        }),
        [E, Z] = a.useState(''),
        O = (0, u.e7)(
            [v.Z, x.Z],
            () => {
                var e, t, n;
                return parseInt(E) > 0 ? E : null !== (n = null === (e = v.Z.getGameByName(E)) || void 0 === e ? void 0 : e.id) && void 0 !== n ? n : null === (t = x.Z.getApplicationByName(E)) || void 0 === t ? void 0 : t.id;
            },
            [E]
        ),
        A = (0, b.Z)({
            applicationId: O,
            location: 'DevToolsContentInventory',
            source: p.m1.DevTools
        }),
        L = Object.entries(null !== (t = d.K.get('GameProfileModal')) && void 0 !== t ? t : {})
            .filter((e) => {
                let [t, n] = e;
                return n;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        P = (0, f.Z)(L).filter(_.lm);
    return (0, r.jsx)('div', {
        className: i()(w.panel),
        children: (0, r.jsxs)(h.ScrollerThin, {
            className: y.content,
            children: [
                (0, r.jsxs)(h.FormSection, {
                    children: [
                        (0, r.jsx)(h.FormTitle, { children: 'Inventory' }),
                        c.length > 0 &&
                            (0, r.jsx)(g.Z, {
                                columns: I,
                                data: c
                            }),
                        (0, r.jsx)(h.Spacer, { size: 8 }),
                        (0, r.jsx)(N.Z, {}),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: S.YN.GLOBAL_FEED
                                });
                            },
                            submitting: k,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, r.jsxs)(h.FormSection, {
                    children: [
                        (0, r.jsx)(h.FormTitle, { children: 'Impression Capping' }),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, r.jsx)(h.Spacer, { size: 8 }),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, r.jsx)(h.Spacer, { size: 8 }),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: l ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, r.jsx)(h.Spacer, { size: 8 }),
                        (0, r.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: o ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                false,
                (0, r.jsx)(T.Z, {}),
                (0, r.jsxs)(h.FormSection, {
                    children: [
                        (0, r.jsx)(h.FormTitle, { children: 'Game Profile' }),
                        (0, r.jsx)(h.TextInput, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && Z(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (E === e.currentTarget.value ? null == A || A() : Z(e.currentTarget.value));
                            },
                            error: E.length > 0 && null == A ? 'No game profile for '.concat(null != O ? O : E + ' - try by id', '.') : void 0,
                            style: null != A ? { border: '1px solid green' } : {}
                        }),
                        (0, r.jsx)('ul', { children: P.map((e) => (0, r.jsx)('li', { children: (0, r.jsx)(R, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                })
            ]
        })
    });
}
let R = (e) => {
    let { application: t } = e,
        n = (0, b.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: p.m1.DevTools
        });
    return (0, r.jsx)(h.Clickable, {
        onClick: n,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, r.jsx)(h.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
