let i = (0, r(818083).B)({
    kind: 'user',
    id: '2023-10_dcf_holdout',
    label: 'DCF Holdout',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Users will only see DCs that bypass the holdout',
            config: { enabled: !0 }
        }
    ]
});
n.Z = i;
