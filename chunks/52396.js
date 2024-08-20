l.d(n, {
    B: function () {
        return C;
    },
    r: function () {
        return _;
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
    E = l(301419),
    f = l(397035);
let p = r.createContext(void 0);
function C() {
    let e = r.useContext(p);
    return a()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function N(e) {
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
            return (0, t.jsx)(T, {
                entry: n,
                ...r
            });
        case s.s.TOP_GAME:
            return (0, t.jsx)(h, {
                entry: n,
                ...r
            });
        case s.s.PLAYED_GAME:
            return (0, t.jsx)(I, {
                entry: n,
                ...r
            });
        case s.s.WATCHED_MEDIA:
            return (0, t.jsx)(x, {
                entry: n,
                ...r
            });
        case s.s.LISTENED_SESSION:
            return (0, t.jsx)(O, {
                entry: n,
                ...r
            });
        case s.s.LAUNCHED_ACTIVITY:
            return (0, t.jsx)(v, {
                entry: n,
                ...r
            });
        default:
            throw Error('Unsupported content type: '.concat(n.content_type));
    }
}
function _(e) {
    let { errorFallback: n, ...l } = e;
    return (0, t.jsx)(u.S, {
        fallback: n,
        children: (0, t.jsx)(N, { ...l })
    });
}
function v(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, o.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function T(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, E.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function h(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, d.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function I(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, d.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function x(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, f.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
function O(e) {
    let { entry: n, children: l, ...r } = e,
        i = (0, m.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...r
        },
        children: l
    });
}
