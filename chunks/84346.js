var i = n(200651),
    l = n(239091),
    o = n(603618),
    r = n(926086),
    s = n(353038),
    a = n(761374),
    u = n(2923),
    d = n(586742),
    c = n(243487),
    h = n(430561),
    f = n(134849),
    p = n(501787),
    m = n(981631),
    v = n(388032);
let g = {
    [m.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: l, padding: o, borderWidth: r } = e;
            return (0, i.jsx)(d.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === l.height ? 0 : l.height - 2 * o - 2 * r,
                width: 'auto' === l.width ? 0 : l.width - 2 * o - 2 * r
            });
        },
        renderTitle: () => (0, i.jsx)(h.PI, { children: v.intl.string(v.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(h.ls, {
                        onClick: (o) => {
                            var r, s, a;
                            return (
                                (r = o),
                                (s = e),
                                (a = t),
                                void (0, l.jW)(r, async () => {
                                    let { default: e } = await n.e('26775').then(n.bind(n, 740579));
                                    return (
                                        a(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                widget: s,
                                                onClose: () => a(!1)
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
            let { widget: t, computedSize: n, borderWidth: i, padding: l } = e;
            return 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                ? {
                      width: Math.max(n.width, p.OVERLAY_TILE_WIDTH),
                      height: Math.min(n.height, 2 * p.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l)
                  }
                : {
                      height: Math.max(n.height, p.OVERLAY_TILE_WIDTH),
                      width: Math.min(n.width, 2 * p.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * l)
                  };
        }
    },
    [m.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: l } = e;
            return (0, i.jsx)(c.Z, {
                anchorLeft: n,
                id: t.id,
                locked: l,
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
                            var o, r;
                            return (
                                (o = e),
                                (r = t),
                                void (0, l.jW)(o, async () => {
                                    let { default: e } = await n.e('32382').then(n.bind(n, 955280));
                                    return (
                                        r(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => r(!1)
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
            return (0, i.jsx)(r.Z, {
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
                            var o, r;
                            return (
                                (o = e),
                                (r = t),
                                void (0, l.jW)(o, async () => {
                                    let { default: e } = await n.e('38813').then(n.bind(n, 541501));
                                    return (
                                        r(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => r(!1)
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
            let { widget: t, locked: n, size: l, dragStart: o } = e;
            return (0, i.jsx)(a.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned,
                opacity: t.opacity,
                size: l,
                widget: m.Odu.GO_LIVE,
                isPreviewingInGame: !1,
                dragStart: o,
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
                        onClick: (o) => {
                            var r, s, a;
                            return (
                                (r = o),
                                (s = e),
                                (a = t),
                                void (0, l.jW)(r, async () => {
                                    let { default: e } = await n.e('34684').then(n.bind(n, 68738));
                                    return (
                                        a(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                widget: s,
                                                onClose: () => a(!1)
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
            let { operation: t, computedSize: n, originSize: i, borderWidth: l, padding: o, containerSpecs: r } = e,
                a = 2 * l + 2 * o,
                u = i.width - a,
                d = i.height - a,
                c = u / d,
                h = d / u,
                f = (() => {
                    switch (t) {
                        case s.B.RESIZE_NORTH:
                        case s.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - a) * c + a)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - a) * h + a)
                            };
                    }
                })();
            return f.width > r.maxX && ((f.width = r.maxX), (f.height = (r.maxX - a) * h + a)), f.height > r.maxY && ((f.height = r.maxY), (f.width = (r.maxY - a) * c + a)), f;
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
                            var o, r;
                            return (
                                (o = e),
                                (r = t),
                                void (0, l.jW)(o, async () => {
                                    let { default: e } = await n.e('94706').then(n.bind(n, 168133));
                                    return (
                                        r(!0),
                                        (t) =>
                                            (0, i.jsx)(e, {
                                                ...t,
                                                onClose: () => r(!1)
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
        renderWidget: () => (0, i.jsx)(o.Z, {}),
        renderTitle: () => (0, i.jsx)(h.PI, { children: v.intl.string(v.t['6gwSFR']) }),
        renderButtons: () => null
    }
};
t.Z = g;
