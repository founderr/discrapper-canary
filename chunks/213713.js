r.d(t, {
    Z: function () {
        return I;
    }
}),
    r(47120);
var a = r(735250),
    n = r(470079),
    i = r(120356),
    o = r.n(i),
    l = r(392711),
    c = r.n(l),
    s = r(876215),
    d = r(442837),
    u = r(433517),
    h = r(481060),
    m = r(570140),
    g = r(812206),
    p = r(835473),
    b = r(681619),
    f = r(810568),
    x = r(168524),
    y = r(77498),
    k = r(823379),
    v = r(71585),
    _ = r(146282),
    j = r(650613),
    w = r(789086),
    C = r(206583),
    T = r(787524),
    S = r(535271);
let N = [
    {
        key: 'type',
        cellClassName: o()(T.cell, T.cellType),
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(h.Text, {
                variant: 'text-md/semibold',
                children: s.s[t]
            });
        }
    },
    {
        key: 'count',
        cellClassName: o()(T.cell, T.cellCount),
        render(e) {
            let { entries: t } = e;
            return (0, a.jsx)('div', {
                children: (0, a.jsx)(h.Text, {
                    variant: 'text-md/normal',
                    children: t.length
                })
            });
        }
    },
    {
        key: 'only?',
        cellClassName: T.cell,
        render(e) {
            let { type: t } = e;
            return (0, a.jsx)(E, { type: t });
        }
    }
];
function E(e) {
    var t, r;
    let { type: n } = e,
        i = (0, d.e7)([_.Z], () => _.Z.getFilters()),
        o = null !== (r = null == i ? void 0 : null === (t = i.types) || void 0 === t ? void 0 : t.has(n)) && void 0 !== r && r;
    return (0, a.jsx)(h.Checkbox, {
        value: o,
        onClick: function () {
            o
                ? m.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: void 0
                  })
                : m.Z.dispatch({
                      type: 'CONTENT_INVENTORY_SET_FILTERS',
                      filters: { types: new Set([n]) }
                  });
        }
    });
}
function I() {
    var e, t;
    let r = (0, d.e7)([_.Z], () => _.Z.getFeed(C.YN.GLOBAL_FEED)),
        i = (0, d.e7)([_.Z], () => _.Z.getDebugImpressionCappingDisabled()),
        l = (0, d.e7)([v.Z], () => v.Z.getDebugFastImpressionCappingEnabled()),
        s = (function (e) {
            let t = c().groupBy(e, (e) => e.content_type);
            return Object.keys(t).map((e) => {
                let r = t[e];
                return {
                    key: ''.concat(e),
                    type: r[0].content_type,
                    entries: r
                };
            });
        })(null == r ? void 0 : null === (e = r.entries) || void 0 === e ? void 0 : e.map((e) => e.content)),
        E = (0, d.e7)([_.Z], () => {
            var e;
            return (null === (e = _.Z.getFeedState(C.YN.GLOBAL_FEED)) || void 0 === e ? void 0 : e.loading) === !0;
        }),
        [I, R] = n.useState(''),
        O = (0, d.e7)(
            [y.Z, g.Z],
            () => {
                var e, t, r;
                return parseInt(I) > 0 ? I : null !== (r = null === (e = y.Z.getGameByName(I)) || void 0 === e ? void 0 : e.id) && void 0 !== r ? r : null === (t = g.Z.getApplicationByName(I)) || void 0 === t ? void 0 : t.id;
            },
            [I]
        ),
        L = (0, x.Z)({
            applicationId: O,
            location: 'DevToolsContentInventory',
            source: f.m1.DevTools
        }),
        A = Object.entries(null !== (t = u.K.get('GameProfileModal')) && void 0 !== t ? t : {})
            .filter((e) => {
                let [t, r] = e;
                return r;
            })
            .map((e) => {
                let [t] = e;
                return t;
            }),
        B = (0, p.Z)(A).filter(k.lm);
    return (0, a.jsx)('div', {
        className: o()(S.panel),
        children: (0, a.jsxs)(h.ScrollerThin, {
            className: T.content,
            children: [
                (0, a.jsxs)(h.FormSection, {
                    children: [
                        (0, a.jsx)(h.FormTitle, { children: 'Inventory' }),
                        s.length > 0 &&
                            (0, a.jsx)(b.Z, {
                                columns: N,
                                data: s
                            }),
                        (0, a.jsx)(h.Spacer, { size: 8 }),
                        (0, a.jsx)(w.Z, {}),
                        (0, a.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({
                                    type: 'CONTENT_INVENTORY_MANUAL_REFRESH',
                                    feedId: C.YN.GLOBAL_FEED
                                });
                            },
                            submitting: E,
                            children: 'Refresh Now'
                        })
                    ]
                }),
                (0, a.jsxs)(h.FormSection, {
                    children: [
                        (0, a.jsx)(h.FormTitle, { children: 'Impression Capping' }),
                        (0, a.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS' });
                            },
                            children: 'Clear Impressions'
                        }),
                        (0, a.jsx)(h.Spacer, { size: 8 }),
                        (0, a.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS' });
                            },
                            children: 'Log Impressions'
                        }),
                        (0, a.jsx)(h.Spacer, { size: 8 }),
                        (0, a.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_IMPRESSION_CAPPING' });
                            },
                            children: i ? 'Enable Impression Capping' : 'Disable Impression Capping'
                        }),
                        (0, a.jsx)(h.Spacer, { size: 8 }),
                        (0, a.jsx)(h.Button, {
                            fullWidth: !0,
                            onClick: function () {
                                m.Z.dispatch({ type: 'CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING' });
                            },
                            children: l ? 'Disable Fast Impression Capping' : 'Enable Fast Impression Capping'
                        })
                    ]
                }),
                false,
                (0, a.jsx)(j.Z, {}),
                (0, a.jsxs)(h.FormSection, {
                    children: [
                        (0, a.jsx)(h.FormTitle, { children: 'Game Profile' }),
                        (0, a.jsx)(h.TextInput, {
                            placeholder: 'App ID or full name',
                            onChange: (e) => (0 === e.length || e.length >= 18) && R(e),
                            onKeyDown: (e) => {
                                'Enter' === e.key && (I === e.currentTarget.value ? null == L || L() : R(e.currentTarget.value));
                            },
                            error: I.length > 0 && null == L ? 'No game profile for '.concat(null != O ? O : I + ' - try by id', '.') : void 0,
                            style: null != L ? { border: '1px solid green' } : {}
                        }),
                        (0, a.jsx)('ul', { children: B.map((e) => (0, a.jsx)('li', { children: (0, a.jsx)(Z, { application: e }) }, 'follow-game-'.concat(e.id))) })
                    ]
                })
            ]
        })
    });
}
let Z = (e) => {
    let { application: t } = e,
        r = (0, x.Z)({
            applicationId: t.id,
            location: 'DevToolsContentInventory',
            source: f.m1.DevTools
        });
    return (0, a.jsx)(h.Clickable, {
        onClick: r,
        style: {
            margin: '2px',
            cursor: 'pointer'
        },
        children: (0, a.jsx)(h.Text, {
            variant: 'text-xs/normal',
            color: 'text-muted',
            children: t.name
        })
    });
};
