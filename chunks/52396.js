l.d(n, {
    B: function () {
        return f;
    },
    r: function () {
        return C;
    }
}),
    l(411104);
var t = l(735250),
    r = l(470079),
    a = l(512722),
    i = l.n(a),
    s = l(876215),
    u = l(775379),
    o = l(879046),
    c = l(214597),
    d = l(498187),
    m = l(482417),
    E = l(301419),
    p = l(397035);
let N = r.createContext(void 0);
function f() {
    let e = r.useContext(N);
    return i()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function _(e) {
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
            return (0, t.jsx)(v, {
                entry: n,
                ...r
            });
        case s.s.TOP_GAME:
            return (0, t.jsx)(h, {
                entry: n,
                ...r
            });
        case s.s.PLAYED_GAME:
            return (0, t.jsx)(x, {
                entry: n,
                ...r
            });
        case s.s.WATCHED_MEDIA:
            return (0, t.jsx)(I, {
                entry: n,
                ...r
            });
        case s.s.LISTENED_SESSION:
            return (0, t.jsx)(S, {
                entry: n,
                ...r
            });
        case s.s.LAUNCHED_ACTIVITY:
            return (0, t.jsx)(T, {
                entry: n,
                ...r
            });
        default:
            throw Error('Unsupported content type: '.concat(n.content_type));
    }
}
function C(e) {
    let { errorFallback: n, ...l } = e;
    return (0, t.jsx)(u.S, {
        fallback: n,
        children: (0, t.jsx)(_, { ...l })
    });
}
function T(e) {
    let { entry: n, children: l, ...r } = e,
        a = (0, o.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(N.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: l
    });
}
function v(e) {
    let { entry: n, children: l, ...r } = e,
        a = (0, E.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(N.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: l
    });
}
function h(e) {
    let { entry: n, children: l, ...r } = e,
        a = (0, d.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(N.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: l
    });
}
function x(e) {
    let { entry: n, children: l, ...r } = e,
        a = (0, d.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(N.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: l
    });
}
function I(e) {
    let { entry: n, children: l, ...r } = e,
        a = (0, p.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(N.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: l
    });
}
function S(e) {
    let { entry: n, children: l, ...r } = e,
        a = (0, m.Z)({
            entry: n,
            ...r
        });
    return (0, t.jsx)(N.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: l
    });
}
