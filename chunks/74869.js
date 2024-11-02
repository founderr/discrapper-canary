t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(47120);
var r = t(200651),
    o = t(192379),
    i = t(348327),
    l = t.n(i),
    a = t(658722),
    c = t.n(a),
    u = t(442837),
    d = t(481060),
    s = t(492435),
    g = t(353926),
    m = t(499533),
    b = t(388032);
function f(e) {
    let { id: n, experiment: t, currentBucket: o } = e;
    return (0, r.jsxs)(
        d.MenuItem,
        {
            id: n,
            label: t.title,
            action: () => (0, s.rX)(n, null),
            children: [
                t.buckets.map((e) =>
                    (0, r.jsx)(
                        d.MenuCheckboxItem,
                        {
                            id: ''.concat(e),
                            label: m.Z.getExperimentBucketName(e),
                            checked: e === o,
                            action: () => (0, s.rX)(n, e)
                        },
                        ''.concat(e)
                    )
                ),
                (0, r.jsx)(d.MenuGroup, {
                    children:
                        -1 !== o &&
                        (0, r.jsx)(d.MenuItem, {
                            id: 'clear-override',
                            label: 'Clear Override',
                            color: 'danger',
                            icon: d.TrashIcon,
                            action: () => (0, s.rX)(n, null)
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
            l()
        ),
        [n, t] = o.useState(''),
        [i, a] = o.useState([]);
    o.useEffect(() => {
        if (0 === n.trim().length) {
            a(e);
            return;
        }
        a(e.filter((e) => c()(n, e.experiment.title.toLowerCase())));
    }, [e, n]);
    let s = o.useMemo(
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
        p = o.useMemo(() => s.map(f), [s]),
        _ = o.useMemo(() => m.map(f), [m]);
    return [
        (0, r.jsx)(
            d.MenuControlItem,
            {
                id: 'experiments-search',
                control: (e, o) =>
                    (0, r.jsx)(d.MenuSearchControl, {
                        ...e,
                        query: n,
                        onChange: t,
                        ref: o,
                        placeholder: b.intl.string(b.t['5h0QOD'])
                    })
            },
            'experiments-search'
        ),
        (0, r.jsx)(d.MenuSeparator, {}, 'separator'),
        ...p,
        p.length > 0 ? (0, r.jsx)(d.MenuSeparator, {}, 'separator-2') : null,
        ..._
    ];
}
