n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    o = n(348327),
    l = n.n(o),
    a = n(658722),
    c = n.n(a),
    u = n(442837),
    s = n(481060),
    d = n(492435),
    g = n(353926),
    m = n(499533),
    b = n(388032);
function f(e) {
    let { id: t, experiment: n, currentBucket: r } = e;
    return (0, i.jsxs)(
        s.MenuItem,
        {
            id: t,
            label: n.title,
            action: () => (0, d.rX)(t, null),
            children: [
                n.buckets.map((e) =>
                    (0, i.jsx)(
                        s.MenuCheckboxItem,
                        {
                            id: ''.concat(e),
                            label: m.Z.getExperimentBucketName(e),
                            checked: e === r,
                            action: () => (0, d.rX)(t, e)
                        },
                        ''.concat(e)
                    )
                ),
                (0, i.jsx)(s.MenuGroup, {
                    children:
                        -1 !== r &&
                        (0, i.jsx)(s.MenuItem, {
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
                        i = g.Z.getExperimentOverrideDescriptor(t);
                    return {
                        id: t,
                        experiment: n,
                        currentBucket: null != i ? i.bucket : -1
                    };
                });
            },
            [],
            l()
        ),
        [t, n] = r.useState(''),
        [o, a] = r.useState([]);
    r.useEffect(() => {
        if (0 === t.trim().length) {
            a(e);
            return;
        }
        a(e.filter((e) => c()(t, e.experiment.title.toLowerCase())));
    }, [e, t]);
    let d = r.useMemo(
            () =>
                o.filter((e) => {
                    let { currentBucket: t } = e;
                    return -1 !== t;
                }),
            [o]
        ),
        m = r.useMemo(
            () =>
                o.filter((e) => {
                    let { currentBucket: t } = e;
                    return -1 === t;
                }),
            [o]
        ),
        p = r.useMemo(() => d.map(f), [d]),
        h = r.useMemo(() => m.map(f), [m]);
    return [
        (0, i.jsx)(
            s.MenuControlItem,
            {
                id: 'experiments-search',
                control: (e, r) =>
                    (0, i.jsx)(s.MenuSearchControl, {
                        ...e,
                        query: t,
                        onChange: n,
                        ref: r,
                        placeholder: b.intl.string(b.t['5h0QOD'])
                    })
            },
            'experiments-search'
        ),
        (0, i.jsx)(s.MenuSeparator, {}, 'separator'),
        ...p,
        p.length > 0 ? (0, i.jsx)(s.MenuSeparator, {}, 'separator-2') : null,
        ...h
    ];
}
