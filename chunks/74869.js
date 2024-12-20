n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    i = n(348327),
    a = n.n(i),
    l = n(658722),
    c = n.n(l),
    u = n(442837),
    s = n(481060),
    d = n(492435),
    g = n(353926),
    m = n(499533),
    b = n(388032);
function f(e) {
    let { id: t, experiment: n, currentBucket: o } = e;
    return (0, r.jsxs)(
        s.MenuItem,
        {
            id: t,
            label: n.title,
            action: () => (0, d.rX)(t, null),
            children: [
                n.buckets.map((e) =>
                    (0, r.jsx)(
                        s.MenuCheckboxItem,
                        {
                            id: ''.concat(e),
                            label: m.Z.getExperimentBucketName(e),
                            checked: e === o,
                            action: () => (0, d.rX)(t, e)
                        },
                        ''.concat(e)
                    )
                ),
                (0, r.jsx)(s.MenuGroup, {
                    children:
                        -1 !== o &&
                        (0, r.jsx)(s.MenuItem, {
                            id: 'clear-override',
                            label: 'Clear Override',
                            color: 'danger',
                            icon: s.TrashIcon,
                            action: () => (0, d.rX)(t, null)
                        })
                })
            ]
        },
        t
    );
}
function p() {
    let e = (0, u.e7)(
            [g.Z, g.Z],
            () => {
                let e = g.Z.getRegisteredExperiments();
                return Object.keys(e).map((t) => {
                    let n = e[t],
                        r = g.Z.getExperimentOverrideDescriptor(t);
                    return {
                        id: t,
                        experiment: n,
                        currentBucket: null != r ? r.bucket : -1
                    };
                });
            },
            [],
            a()
        ),
        [t, n] = o.useState(''),
        [i, l] = o.useState([]);
    o.useEffect(() => {
        if (0 === t.trim().length) {
            l(e);
            return;
        }
        l(e.filter((e) => c()(t, e.experiment.title.toLowerCase())));
    }, [e, t]);
    let d = o.useMemo(
            () =>
                i.filter((e) => {
                    let { currentBucket: t } = e;
                    return -1 !== t;
                }),
            [i]
        ),
        m = o.useMemo(
            () =>
                i.filter((e) => {
                    let { currentBucket: t } = e;
                    return -1 === t;
                }),
            [i]
        ),
        p = o.useMemo(() => d.map(f), [d]),
        h = o.useMemo(() => m.map(f), [m]);
    return [
        (0, r.jsx)(
            s.MenuControlItem,
            {
                id: 'experiments-search',
                control: (e, o) =>
                    (0, r.jsx)(s.MenuSearchControl, {
                        ...e,
                        query: t,
                        onChange: n,
                        ref: o,
                        placeholder: b.intl.string(b.t['5h0QOD'])
                    })
            },
            'experiments-search'
        ),
        (0, r.jsx)(s.MenuSeparator, {}, 'separator'),
        ...p,
        p.length > 0 ? (0, r.jsx)(s.MenuSeparator, {}, 'separator-2') : null,
        ...h
    ];
}
