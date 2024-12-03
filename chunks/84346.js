var i = n(200651),
    o = n(239091),
    l = n(603618),
    r = n(926086),
    s = n(353038),
    a = n(761374),
    u = n(340101),
    c = n(2923),
    d = n(586742),
    h = n(243487),
    f = n(430561),
    p = n(134849),
    m = n(501787),
    v = n(981631),
    g = n(388032);
let E = {
    [v.Odu.VIDEO]: {
        renderWidget(e) {
            let { widget: t, locked: n, size: o, padding: l, borderWidth: r } = e;
            return (0, i.jsx)(d.Z, {
                id: t.id,
                locked: n,
                widget: t,
                height: 'auto' === o.height ? 0 : o.height - 2 * l - 2 * r,
                width: 'auto' === o.width ? 0 : o.width - 2 * l - 2 * r
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t.UPvOiY) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (l) =>
                            (function (e, t, l) {
                                if (!!(0, u.js)(t))
                                    (0, o.jW)(e, async () => {
                                        let { default: e } = await n.e('26775').then(n.bind(n, 740579));
                                        return (
                                            l(!0),
                                            (n) =>
                                                (0, i.jsx)(e, {
                                                    ...n,
                                                    widget: t,
                                                    onClose: () => l(!1)
                                                })
                                        );
                                    });
                            })(l, e, t)
                    }),
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            }),
        resizeValidation(e) {
            let { widget: t, computedSize: n, borderWidth: i, padding: o } = e;
            return (0, u.js)(t)
                ? 'boolean' != typeof t.meta.horizontal || t.meta.horizontal
                    ? {
                          width: Math.max(n.width, m.OVERLAY_TILE_WIDTH),
                          height: Math.min(n.height, 2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * o)
                      }
                    : {
                          height: Math.max(n.height, m.OVERLAY_TILE_WIDTH),
                          width: Math.min(n.width, 2 * m.OVERLAY_TILE_MIN_WIDTH + 2 * i + 2 * o)
                      }
                : n;
        }
    },
    [v.Odu.VOICE_V3]: {
        renderWidget(e) {
            let { widget: t, anchorLeft: n, locked: o } = e;
            return (0, i.jsx)(h.Z, {
                anchorLeft: n,
                id: t.id,
                locked: o,
                pinned: t.pinned,
                widget: v.Odu.VOICE,
                isPreviewingInGame: !1
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t.nFv3GR) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (e) => {
                            var l, r;
                            return (
                                (l = e),
                                (r = t),
                                void (0, o.jW)(l, async () => {
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
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.CLICK_ZONE_DEBUG]: {
        renderWidget(e) {
            let { widget: t, locked: n } = e;
            return (0, i.jsx)(r.Z, {
                id: t.id,
                locked: n,
                pinned: t.pinned
            });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: 'Click Zone Debug' }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (e) => {
                            var l, r;
                            return (
                                (l = e),
                                (r = t),
                                void (0, o.jW)(l, async () => {
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
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.GO_LIVE]: {
        renderWidget(e) {
            var t;
            let { widget: n, locked: o, size: l, dragStart: r } = e;
            return (0, u.ZL)(n)
                ? (0, i.jsx)(a.Z, {
                      id: n.id,
                      locked: o,
                      pinned: n.pinned,
                      opacity: n.opacity,
                      size: l,
                      widget: v.Odu.GO_LIVE,
                      isPreviewingInGame: !1,
                      dragStart: r,
                      horizontal: null !== (t = n.meta.horizontal) && void 0 !== t && t,
                      padding: 8,
                      borderWidth: 2
                  })
                : null;
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t['386XRk']) }),
        renderButtons(e, t) {
            var l;
            return (0, u.ZL)(e)
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(f.ls, {
                              onClick: (l) =>
                                  (function (e, t, l) {
                                      if (!!(0, u.ZL)(t))
                                          (0, o.jW)(e, async () => {
                                              let { default: e } = await n.e('34684').then(n.bind(n, 68738));
                                              return (
                                                  l(!0),
                                                  (n) =>
                                                      (0, i.jsx)(e, {
                                                          ...n,
                                                          widget: t,
                                                          onClose: () => l(!1)
                                                      })
                                              );
                                          });
                                  })(l, e, t)
                          }),
                          (0, i.jsx)(f.GY, {
                              widgetId: e.id,
                              showAllStreams: null === (l = e.meta.showAllStreams) || void 0 === l || l
                          }),
                          (0, i.jsx)(f.RT, {
                              id: e.id,
                              pinned: e.pinned
                          })
                      ]
                  })
                : null;
        },
        resizeValidation(e) {
            let { operation: t, computedSize: n, originSize: i, borderWidth: o, padding: l, containerSpecs: r } = e,
                a = 2 * o + 2 * l,
                u = i.width - a,
                c = i.height - a,
                d = u / c,
                h = c / u,
                f = (() => {
                    switch (t) {
                        case s.B.RESIZE_NORTH:
                        case s.B.RESIZE_SOUTH:
                            return {
                                height: n.height,
                                width: Math.round((n.height - a) * d + a)
                            };
                        default:
                            return {
                                width: n.width,
                                height: Math.round((n.width - a) * h + a)
                            };
                    }
                })();
            return f.width > r.maxX && ((f.width = r.maxX), (f.height = (r.maxX - a) * h + a)), f.height > r.maxY && ((f.height = r.maxY), (f.width = (r.maxY - a) * d + a)), f;
        }
    },
    [v.Odu.QUICK_ACTIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(c.Z, { locked: t });
        }
    },
    [v.Odu.NOTIFICATIONS]: {
        renderWidget(e) {
            let { locked: t } = e;
            return (0, i.jsx)(p.Z, { locked: t });
        },
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t.gnKWdX) }),
        renderButtons: (e, t) =>
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.ls, {
                        onClick: (e) => {
                            var l, r;
                            return (
                                (l = e),
                                (r = t),
                                void (0, o.jW)(l, async () => {
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
                    (0, i.jsx)(f.RT, {
                        id: e.id,
                        pinned: e.pinned
                    })
                ]
            })
    },
    [v.Odu.ACTIVITY]: {
        renderWidget: () => (0, i.jsx)(l.Z, {}),
        renderTitle: () => (0, i.jsx)(f.PI, { children: g.intl.string(g.t['6gwSFR']) }),
        renderButtons: () => null
    }
};
t.Z = E;
