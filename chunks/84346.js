var i = n(200651),
    r = n(239091),
    l = n(603618),
    o = n(926086),
    a = n(353038),
    s = n(761374),
    u = n(2923),
    c = n(586742),
    d = n(243487),
    h = n(430561),
    f = n(134849),
    p = n(501787),
    m = n(981631),
    v = n(388032);
let g = {
    [m.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: l, borderWidth: o } = e;
            return (0, i.jsx)(c.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === r.height ? 0 : r.height - 2 * l - 2 * o,
                width: 'auto' === r.width ? 0 : r.width - 2 * l - 2 * o
            });
        },
        renderTitle: () => (0, i.jsx)(h.PI, { children: v.intl.string(v.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.ls, {
                        onClick: (l) => {
                            var o, a, s;
                            return (
                                (o = l),
                                (a = e),
                                (s = t),
                                void (0, r.jW)(o, async () => {
                                    let { default: e } = await n.e('26775').then(n.bind(n, 740579));
                                    return (
                                        s(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                widget: a,
                                                onClose: () => s(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(h.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: r } = e;
            return 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                ? {
                      width: Math.max(n.width, p.vZ),
                      height: Math.min(n.height, 2 * p.mo + 2 * i + 2 * r)
                  }
                : {
                      height: Math.max(n.height, p.vZ),
                      width: Math.min(n.width, 2 * p.mo + 2 * i + 2 * r)
                  };
        }
    },
    [m.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: r } = e;
            return (0, i.jsx)(d.Z, {
                anchorLeft: n,
                id: t.id,
                locked: r,
                pinned: t.pinned,
                widget: m.Odu.VOICE,
                isPreviewingInGame: !1
            });
        },
        renderTitle: () => (0, i.jsx)(h.PI, { children: v.intl.string(v.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.ls, {
                        onClick: (e) => {
                            var l, o;
                            return (
                                (l = e),
                                (o = t),
                                void (0, r.jW)(l, async () => {
                                    let { default: e } = await n.e('32382').then(n.bind(n, 955280));
                                    return (
                                        o(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => o(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(h.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [m.Odu.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(o.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(h.PI, { children: 'Click Zone Debug' }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.ls, {
                        onClick: (e) => {
                            var l, o;
                            return (
                                (l = e),
                                (o = t),
                                void (0, r.jW)(l, async () => {
                                    let { default: e } = await n.e('38813').then(n.bind(n, 541501));
                                    return (
                                        o(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => o(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(h.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [m.Odu.GO_LIVE]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, dragStart: l } = e;
            return (0, i.jsx)(s.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
                opacity: t.opacity,
                size: r,
                widget: m.Odu.GO_LIVE,
                isPreviewingInGame: !1,
                dragStart: l,
                horizontal: 'boolean' == typeof t.meta.horizontal && t.meta.horizontal,
                padding: 8,
                borderWidth: 2
            });
        },
        renderTitle: () => (0, i.jsx)(h.PI, { children: v.intl.string(v.t['386XRk']) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.ls, {
                        onClick: (l) => {
                            var o, a, s;
                            return (
                                (o = l),
                                (a = e),
                                (s = t),
                                void (0, r.jW)(o, async () => {
                                    let { default: e } = await n.e('34684').then(n.bind(n, 68738));
                                    return (
                                        s(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                widget: a,
                                                onClose: () => s(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(h.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: l, containerSpecs: o } = e,
                s = 2 * r + 2 * l,
                u = i.width - s,
                c = i.height - s,
                d = u / c,
                h = c / u,
                f = (() => {
                    switch (t) {
                        case a.B.RESIZE_NORTH:
                        case a.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - s) * d + s)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - s) * h + s)
                            };
                    }
                })();
            return f.width > o.maxX && ((f.width = o.maxX), (f.height = (o.maxX - s) * h + s)), f.height > o.maxY && ((f.height = o.maxY), (f.width = (o.maxY - s) * d + s)), f;
        }
    },
    [m.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(u.Z, { locked: t });
        }
    },
    [m.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(f.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(h.PI, { children: v.intl.string(v.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.ls, {
                        onClick: (e) => {
                            var l, o;
                            return (
                                (l = e),
                                (o = t),
                                void (0, r.jW)(l, async () => {
                                    let { default: e } = await n.e('94706').then(n.bind(n, 168133));
                                    return (
                                        o(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => o(!1)
                                            })
                                    );
                                })
                            );
                        }
                    }),
                    (0, i.jsx)(h.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [m.Odu.ACTIVITY]: {
        renderWidget: () => (0, i.jsx)(l.Z, {}),
        renderTitle: () => (0, i.jsx)(h.PI, { children: v.intl.string(v.t['6gwSFR']) }),
        renderButtons: () => null
    }
};
t.Z = g;
