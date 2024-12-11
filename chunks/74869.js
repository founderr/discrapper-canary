t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var r = t(200651),
    o = t(192379),
    i = t(348327),
    a = t.n(i),
    l = t(658722),
    c = t.n(l),
    u = t(442837),
    s = t(481060),
    d = t(492435),
    g = t(353926),
    m = t(499533),
    b = t(388032);
function f(e) {
    let { id: n, experiment: t, currentBucket: o } = e;
    return (0, r.jsxs)(
        s.MenuItem,
        {
            id: n,
            label: t.title,
            action: () => (0, d.rX)(n, null),
            children: [
                t.buckets.map((e) =>
                    (0, r.jsx)(
                        s.MenuCheckboxItem,
                        {
                            id: ''.concat(e),
                            label: m.Z.getExperimentBucketName(e),
                            checked: e === o,
                            action: () => (0, d.rX)(n, e)
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
                            action: () => (0, d.rX)(n, null)
                        })
                })
            ]
        },
        n
    );
}
function p() {
    let e = (0, u.e7)(
            [g.Z, g.Z],
            () => {
                let e = g.Z.getRegisteredExperiments();
                return Object.keys(e).map((n) => {
                    let t = e[n],
                        r = g.Z.getExperimentOverrideDescriptor(n);
                    return {
                        id: n,
                        experiment: t,
                        currentBucket: null != r ? r.bucket : -1
                    };
                });
            },
            [],
            a()
        ),
        [n, t] = o.useState(''),
        [i, l] = o.useState([]);
    o.useEffect(() => {
        if (0 === n.trim().length) {
            l(e);
            return;
        }
        l(e.filter((e) => c()(n, e.experiment.title.toLowerCase())));
    }, [e, n]);
    let d = o.useMemo(
            () =>
                i.filter((e) => {
                    let { currentBucket: n } = e;
                    return -1 !== n;
                }),
            [i]
        ),
        m = o.useMemo(
            () =>
                i.filter((e) => {
                    let { currentBucket: n } = e;
                    return -1 === n;
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
                        query: n,
                        onChange: t,
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
