t.d(n, {
    B: function () {
        return E;
    },
    r: function () {
        return C;
    }
}),
    t(411104);
var l = t(735250),
    a = t(470079),
    i = t(512722),
    r = t.n(i),
    o = t(876215),
    s = t(775379),
    c = t(879046),
    u = t(214597),
    d = t(498187),
    m = t(482417),
    _ = t(301419),
    f = t(397035);
let p = a.createContext(void 0);
function E() {
    let e = a.useContext(p);
    return r()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function I(e) {
    let { entry: n, ...t } = e,
        a = {
            baseEntryData: (0, u.Z)({
                entry: n,
                channel: t.channel
            }),
            ...t
        };
    switch (n.content_type) {
        case o.s.TOP_ARTIST:
            return (0, l.jsx)(N, {
                entry: n,
                ...a
            });
        case o.s.TOP_GAME:
            return (0, l.jsx)(T, {
                entry: n,
                ...a
            });
        case o.s.PLAYED_GAME:
            return (0, l.jsx)(x, {
                entry: n,
                ...a
            });
        case o.s.WATCHED_MEDIA:
            return (0, l.jsx)(v, {
                entry: n,
                ...a
            });
        case o.s.LISTENED_SESSION:
            return (0, l.jsx)(g, {
                entry: n,
                ...a
            });
        case o.s.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(h, {
                entry: n,
                ...a
            });
        default:
            throw Error('Unsupported content type: '.concat(n.content_type));
    }
}
function C(e) {
    let { errorFallback: n, ...t } = e;
    return (0, l.jsx)(s.S, {
        fallback: n,
        children: (0, l.jsx)(I, { ...t })
    });
}
function h(e) {
    let { entry: n, children: t, ...a } = e,
        i = (0, c.Z)({
            entry: n,
            ...a
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...a
        },
        children: t
    });
}
function N(e) {
    let { entry: n, children: t, ...a } = e,
        i = (0, _.Z)({
            entry: n,
            ...a
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...a
        },
        children: t
    });
}
function T(e) {
    let { entry: n, children: t, ...a } = e,
        i = (0, d.Z)({
            entry: n,
            ...a
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...a
        },
        children: t
    });
}
function x(e) {
    let { entry: n, children: t, ...a } = e,
        i = (0, d.Z)({
            entry: n,
            ...a
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...a
        },
        children: t
    });
}
function v(e) {
    let { entry: n, children: t, ...a } = e,
        i = (0, f.Z)({
            entry: n,
            ...a
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...a
        },
        children: t
    });
}
function g(e) {
    let { entry: n, children: t, ...a } = e,
        i = (0, m.Z)({
            entry: n,
            ...a
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: i,
            ...a
        },
        children: t
    });
}
