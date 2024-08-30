l.d(n, {
    B: function () {
        return N;
    },
    r: function () {
        return v;
    }
}),
    l(411104);
var t = l(735250),
    r = l(470079),
    i = l(512722),
    a = l.n(i),
    s = l(876215),
    u = l(775379),
    o = l(879046),
    c = l(214597),
    d = l(498187),
    m = l(482417),
    p = l(301419),
    E = l(397035);
let f = r.createContext(void 0);
function N() {
    let e = r.useContext(f);
    return a()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function C(e) {
    let { entry: n, ...l } = e,
        r = {
            baseEntryData: (0, c.Z)({
                entry: n,
                channel: l.channel
            }),
            ...l
        };
    switch (n.content_type) {
        case s.s.TOP_ARTIST:
            return (0, t.jsx)(h, {
                entry: n,
                ...r
            });
        case s.s.TOP_GAME:
            return (0, t.jsx)(x, {
                entry: n,
                ...r
            });
        case s.s.PLAYED_GAME:
            return (0, t.jsx)(T, {
                entry: n,
                ...r
            });
        case s.s.WATCHED_MEDIA:
            return (0, t.jsx)(I, {
                entry: n,
                ...r
            });
        case s.s.LISTENED_SESSION:
            return (0, t.jsx)(g, {
                entry: n,
                ...r
            });
        case s.s.LAUNCHED_ACTIVITY:
            return (0, t.jsx)(_, {
                entry: n,
                ...r
            });
        default:
            throw Error('Unsupported content type: '.concat(n.content_type));
    }
}
function v(e) {
    let { errorFallback: n, ...l } = e;
    return (0, t.jsx)(u.S, {
        fallback: n,
        children: (0, t.jsx)(C, { ...l })
    });
}
function _(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, o.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(f.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function h(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, p.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(f.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function x(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, d.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(f.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function T(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, d.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(f.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function I(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, E.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(f.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function g(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, m.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(f.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
