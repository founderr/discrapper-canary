n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(239091),
    l = n(962293),
    u = n(555573),
    c = n(665692),
    d = n(388032),
    f = n(870493);
function _(e) {
    var t;
    let a,
        _,
        p,
        { className: h, activeCommand: m, activeOption: g, optionStates: E, channelId: v } = e,
        I = i.useCallback(
            (e) => {
                var t;
                let i = null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id;
                if (null == i) {
                    e.preventDefault();
                    return;
                }
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e('5396').then(n.bind(n, 731646));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            id: i,
                            label: d.intl.string(d.t.oJ1Mu7)
                        });
                });
            },
            [null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id]
        ),
        b = i.useCallback(() => {
            u.Po({
                channelId: v,
                command: null,
                section: null
            });
        }, [v]);
    if (null == m) return null;
    if (null != g) {
        let e = E[g.name].lastValidationResult;
        (a = g.displayName), (_ = g.displayDescription), (p = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error);
    } else (a = ''.concat(c.GI).concat(m.displayName)), (_ = m.displayDescription), (p = null);
    return (0, r.jsxs)('div', {
        className: s()(h, f.bar),
        onContextMenu: I,
        children: [
            (0, r.jsxs)('div', {
                className: f.commandInfo,
                children: [
                    (0, r.jsx)('span', {
                        className: f.name,
                        children: a
                    }),
                    null != p
                        ? (0, r.jsx)('span', {
                              className: f.error,
                              children: p
                          })
                        : (0, r.jsx)('span', {
                              className: f.description,
                              children: _
                          })
                ]
            }),
            (0, r.jsx)('div', {
                className: f.actions,
                children: (0, r.jsx)(l.B, { onClick: b })
            })
        ]
    });
}
