var i = r(818083),
    a = r(987338);
n.Z = (0, i.B)({
    kind: 'user',
    id: '2024-11_expression_suggestions_disabled',
    label: 'Expression Suggestions Disabled Experiment',
    defaultConfig: { disabled: !1 },
    commonTriggerPoint: a.$P.CONNECTION_OPEN,
    treatments: [
        {
            id: 1,
            label: 'Disable sticker expression suggestions',
            config: { disabled: !0 }
        }
    ]
});
