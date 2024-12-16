n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(536982),
    s = n(456677),
    a = n(951665),
    o = n(428760),
    c = n(55889),
    d = n(300453),
    u = n(620436),
    m = n(273504),
    h = n(388032),
    g = n(318668);
function x(e) {
    var t, n, x, p, f, C;
    let { rule: I, onChangeRule: _ } = e,
        v = r.useCallback(
            (e) => {
                _({
                    ...I,
                    triggerMetadata: {
                        ...I.triggerMetadata,
                        keywordFilter: e
                    }
                });
            },
            [_, I]
        ),
        N = r.useCallback(
            (e) => {
                _({
                    ...I,
                    triggerMetadata: {
                        ...I.triggerMetadata,
                        allowList: e
                    }
                });
            },
            [_, I]
        );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: g.cardContentsContainer,
            children: [
                (0, i.jsxs)(d.Z, {
                    step: 1,
                    header: h.intl.string(h.t['ue+tnZ']),
                    children: [
                        (0, i.jsx)(o.Z, {
                            onChangeText: v,
                            maxWordCount: m.RH,
                            initialValue: null === (t = I.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter
                        }),
                        (0, i.jsx)(a.Z, {
                            rule: I,
                            onChangeRule: _,
                            collapsed: (null == I ? void 0 : null === (n = I.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) == null || (null == I ? void 0 : null === (x = I.triggerMetadata) || void 0 === x ? void 0 : x.regexPatterns.length) === 0
                        }),
                        (0, i.jsx)(l.Z, {
                            onChange: N,
                            initialValue: null === (p = I.triggerMetadata) || void 0 === p ? void 0 : p.allowList,
                            maxWordCount: m.n4,
                            collapsed: (null === (f = I.triggerMetadata) || void 0 === f ? void 0 : f.allowList) == null || (null === (C = I.triggerMetadata) || void 0 === C ? void 0 : C.allowList.length) === 0
                        })
                    ]
                }),
                (0, i.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
                (0, i.jsx)(d.Z, {
                    step: 2,
                    header: h.intl.string(h.t['18TOiY']),
                    children: (0, i.jsx)(s.Z, {
                        rule: I,
                        onChangeRule: _
                    })
                }),
                (0, i.jsx)(u.Z, { type: u.Z.Type.CROSS }),
                (0, i.jsx)(d.Z, {
                    step: 3,
                    header: h.intl.string(h.t.u5xPPT),
                    children: (0, i.jsx)(c.Z, {
                        rule: I,
                        onChangeRule: _,
                        onlyRoles: !0
                    })
                })
            ]
        })
    });
}
