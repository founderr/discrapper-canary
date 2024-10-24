t.d(n, {
    B: function () {
        return C;
    },
    r: function () {
        return I;
    }
}),
    t(411104);
var l = t(200651),
    i = t(192379),
    a = t(512722),
    r = t.n(a),
    o = t(876215),
    s = t(775379),
    c = t(879046),
    u = t(214597),
    d = t(498187),
    m = t(482417),
    _ = t(301419),
    f = t(397035);
let p = i.createContext(void 0);
function C() {
    let e = i.useContext(p);
    return r()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function h(e) {
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
            return (0, l.jsx)(v, {
                entry: n,
                ...i
            });
        case o.s.PLAYED_GAME:
            return (0, l.jsx)(T, {
                entry: n,
                ...i
            });
        case o.s.WATCHED_MEDIA:
            return (0, l.jsx)(N, {
                entry: n,
                ...i
            });
        case o.s.LISTENED_SESSION:
            return (0, l.jsx)(b, {
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
function I(e) {
    let { errorFallback: n, ...t } = e;
    return (0, l.jsx)(s.S, {
        fallback: n,
        children: (0, l.jsx)(h, { ...t })
    });
}
function x(e) {
    let { entry: n, children: t, ...i } = e,
        a = (0, c.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...i
        },
        children: t
    });
}
function E(e) {
    let { entry: n, children: t, ...i } = e,
        a = (0, _.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...i
        },
        children: t
    });
}
function v(e) {
    let { entry: n, children: t, ...i } = e,
        a = (0, d.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...i
        },
        children: t
    });
}
function T(e) {
    let { entry: n, children: t, ...i } = e,
        a = (0, d.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...i
        },
        children: t
    });
}
function N(e) {
    let { entry: n, children: t, ...i } = e,
        a = (0, f.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...i
        },
        children: t
    });
}
function b(e) {
    let { entry: n, children: t, ...i } = e,
        a = (0, m.Z)({
            entry: n,
            ...i
        });
    return (0, l.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...i
        },
        children: t
    });
}
