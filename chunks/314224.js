n.d(t, {
    Z: function () {
        return T;
    }
});
var s = n(200651),
    a = n(192379),
    i = n(536982),
    r = n(456677),
    l = n(951665),
    o = n(428760),
    c = n(55889),
    d = n(300453),
    u = n(620436),
    _ = n(273504),
    I = n(689938),
    E = n(739864);
function T(e) {
    var t, n, T, m, N, S;
    let { rule: g, onChangeRule: h } = e,
        C = a.useCallback(
            (e) => {
                h({
                    ...g,
                    triggerMetadata: {
                        ...g.triggerMetadata,
                        keywordFilter: e
                    }
                });
            },
            [h, g]
        ),
        x = a.useCallback(
            (e) => {
                h({
                    ...g,
                    triggerMetadata: {
                        ...g.triggerMetadata,
                        allowList: e
                    }
                });
            },
            [h, g]
        );
    return (0, s.jsx)(s.Fragment, {
        children: (0, s.jsxs)('div', {
            className: E.cardContentsContainer,
            children: [
                (0, s.jsxs)(d.Z, {
                    step: 1,
                    header: I.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_TRIGGER_HEADER,
                    children: [
                        (0, s.jsx)(o.Z, {
                            onChangeText: C,
                            maxWordCount: _.RH,
                            initialValue: null === (t = g.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter
                        }),
                        (0, s.jsx)(l.Z, {
                            rule: g,
                            onChangeRule: h,
                            collapsed: (null == g ? void 0 : null === (n = g.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) == null || (null == g ? void 0 : null === (T = g.triggerMetadata) || void 0 === T ? void 0 : T.regexPatterns.length) === 0
                        }),
                        (0, s.jsx)(i.Z, {
                            onChange: x,
                            initialValue: null === (m = g.triggerMetadata) || void 0 === m ? void 0 : m.allowList,
                            maxWordCount: _.n4,
                            collapsed: (null === (N = g.triggerMetadata) || void 0 === N ? void 0 : N.allowList) == null || (null === (S = g.triggerMetadata) || void 0 === S ? void 0 : S.allowList.length) === 0
                        })
                    ]
                }),
                (0, s.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
                (0, s.jsx)(d.Z, {
                    step: 2,
                    header: I.Z.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
                    children: (0, s.jsx)(r.Z, {
                        rule: g,
                        onChangeRule: h
                    })
                }),
                (0, s.jsx)(u.Z, { type: u.Z.Type.CROSS }),
                (0, s.jsx)(d.Z, {
                    step: 3,
                    header: I.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
                    children: (0, s.jsx)(c.Z, {
                        rule: g,
                        onChangeRule: h
                    })
                })
            ]
        })
    });
}
