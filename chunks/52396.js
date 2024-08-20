t.d(n, {
    B: function () {
        return h;
    },
    r: function () {
        return v;
    }
}),
    t(411104);
var l = t(735250),
    i = t(470079),
    r = t(512722),
    a = t.n(r),
    o = t(876215),
    s = t(775379),
    c = t(879046),
    u = t(214597),
    d = t(498187),
    m = t(482417),
    f = t(301419),
    _ = t(397035);
let p = i.createContext(void 0);
function h() {
    let e = i.useContext(p);
    return a()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function C(e) {
    let { entry: n, ...t } = e,
        i = {
            baseEntryData: (0, u.Z)({
                entry: n,
                channel: t.channel
            }),
            ...t
        };
    switch (n.content_type) {
        case o.s.TOP_ARTIST:
            return (0, l.jsx)(E, {
                entry: n,
                ...i
            });
        case o.s.TOP_GAME:
            return (0, l.jsx)(I, {
                entry: n,
                ...i
            });
        case o.s.PLAYED_GAME:
            return (0, l.jsx)(T, {
                entry: n,
                ...i
            });
        case o.s.WATCHED_MEDIA:
            return (0, l.jsx)(g, {
                entry: n,
                ...i
            });
        case o.s.LISTENED_SESSION:
            return (0, l.jsx)(N, {
                entry: n,
                ...i
            });
        case o.s.LAUNCHED_ACTIVITY:
            return (0, l.jsx)(x, {
                entry: n,
                ...i
            });
        default:
            throw Error('Unsupported content type: '.concat(n.content_type));
    }
}
function v(e) {
    let { errorFallback: n, ...t } = e;
    return (0, l.jsx)(s.S, {
        fallback: n,
        children: (0, l.jsx)(C, { ...t })
    });
}
function x(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, c.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function E(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, f.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function I(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, d.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function T(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, d.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function g(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, _.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
function N(e) {
    let { entry: n, children: t, ...i } = e,
        r = (0, m.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: r,
            ...i
        },
        children: t
    });
}
