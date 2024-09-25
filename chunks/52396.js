n.d(t, {
    B: function () {
        return m;
    },
    r: function () {
        return T;
    }
});
var r = n(411104);
var i = n(735250),
    a = n(470079),
    o = n(512722),
    s = n.n(o),
    l = n(876215),
    u = n(775379),
    c = n(879046),
    d = n(214597),
    _ = n(498187),
    E = n(482417),
    f = n(301419),
    h = n(397035);
let p = a.createContext(void 0);
function m() {
    let e = a.useContext(p);
    return s()(null != e, 'useEntryDataContext must be used within a EntryDataContextProvider'), e;
}
function I(e) {
    let { entry: t, ...n } = e,
        r = {
            baseEntryData: (0, d.Z)({
                entry: t,
                channel: n.channel
            }),
            ...n
        };
    switch (t.content_type) {
        case l.s.TOP_ARTIST:
            return (0, i.jsx)(S, {
                entry: t,
                ...r
            });
        case l.s.TOP_GAME:
            return (0, i.jsx)(A, {
                entry: t,
                ...r
            });
        case l.s.PLAYED_GAME:
            return (0, i.jsx)(v, {
                entry: t,
                ...r
            });
        case l.s.WATCHED_MEDIA:
            return (0, i.jsx)(N, {
                entry: t,
                ...r
            });
        case l.s.LISTENED_SESSION:
            return (0, i.jsx)(O, {
                entry: t,
                ...r
            });
        case l.s.LAUNCHED_ACTIVITY:
            return (0, i.jsx)(g, {
                entry: t,
                ...r
            });
        default:
            throw Error('Unsupported content type: '.concat(t.content_type));
    }
}
function T(e) {
    let { errorFallback: t, ...n } = e;
    return (0, i.jsx)(u.S, {
        fallback: t,
        children: (0, i.jsx)(I, { ...n })
    });
}
function g(e) {
    let { entry: t, children: n, ...r } = e,
        a = (0, c.Z)({
            entry: t,
            ...r
        });
    return (0, i.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: n
    });
}
function S(e) {
    let { entry: t, children: n, ...r } = e,
        a = (0, f.Z)({
            entry: t,
            ...r
        });
    return (0, i.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: n
    });
}
function A(e) {
    let { entry: t, children: n, ...r } = e,
        a = (0, _.Z)({
            entry: t,
            ...r
        });
    return (0, i.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: n
    });
}
function v(e) {
    let { entry: t, children: n, ...r } = e,
        a = (0, _.Z)({
            entry: t,
            ...r
        });
    return (0, i.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: n
    });
}
function N(e) {
    let { entry: t, children: n, ...r } = e,
        a = (0, h.Z)({
            entry: t,
            ...r
        });
    return (0, i.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: n
    });
}
function O(e) {
    let { entry: t, children: n, ...r } = e,
        a = (0, E.Z)({
            entry: t,
            ...r
        });
    return (0, i.jsx)(p.Provider, {
        value: {
            parsedEntry: a,
            ...r
        },
        children: n
    });
}
