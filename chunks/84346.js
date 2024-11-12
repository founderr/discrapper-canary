var i = n(200651),
    r = n(239091),
    l = n(603618),
    o = n(353038),
    a = n(761374),
    s = n(2923),
    u = n(586742),
    c = n(243487),
    d = n(430561),
    h = n(134849),
    f = n(501787),
    p = n(981631),
    m = n(388032);
let E = {
    [p.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, padding: l, borderWidth: o } = e;
            return (0, i.jsx)(u.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === r.height ? 0 : r.height - 2 * l - 2 * o,
                width: 'auto' === r.width ? 0 : r.width - 2 * l - 2 * o
            });
        },
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.ls, {
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
                    (0, i.jsx)(d.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: r } = e;
            return 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                ? {
                      width: Math.max(n.width, f.vZ),
                      height: Math.min(n.height, 2 * f.mo + 2 * i + 2 * r)
                  }
                : {
                      height: Math.max(n.height, f.vZ),
                      width: Math.min(n.width, 2 * f.mo + 2 * i + 2 * r)
                  };
        }
    },
    [p.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: r } = e;
            return (0, i.jsx)(c.Z, {
                anchorLeft: n,
                id: t.id,
                locked: r,
                pinned: t.pinned,
                widget: p.Odu.VOICE,
                isPreviewingInGame: !1
            });
        },
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.ls, {
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
                    (0, i.jsx)(d.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [p.Odu.GO_LIVE]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: r, dragStart: l } = e;
            return (0, i.jsx)(a.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
                opacity: t.opacity,
                size: r,
                widget: p.Odu.GO_LIVE,
                isPreviewingInGame: !1,
                dragStart: l,
                horizontal: 'boolean' == typeof t.meta.horizontal && t.meta.horizontal,
                padding: 8,
                borderWidth: 2
            });
        },
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t['386XRk']) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.ls, {
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
                    (0, i.jsx)(d.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { operation: t, computedSize: n, originSize: i, borderWidth: r, padding: l, containerSpecs: a } = e,
                s = 2 * r + 2 * l,
                u = i.width - s,
                c = i.height - s,
                d = u / c,
                h = c / u,
                f = (() => {
                    switch (t) {
                        case o.B.RESIZE_NORTH:
                        case o.B.RESIZE_SOUTH:
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
            return f.width > a.maxX && ((f.width = a.maxX), (f.height = (a.maxX - s) * h + s)), f.height > a.maxY && ((f.height = a.maxY), (f.width = (a.maxY - s) * d + s)), f;
        }
    },
    [p.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(s.Z, { locked: t });
        }
    },
    [p.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(h.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(d.ls, {
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
                    (0, i.jsx)(d.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [p.Odu.ACTIVITY]: {
        renderWidget: () => (0, i.jsx)(l.Z, {}),
        renderTitle: () => (0, i.jsx)(d.PI, { children: m.intl.string(m.t['6gwSFR']) }),
        renderButtons: () => null
    }
};
t.Z = E;
