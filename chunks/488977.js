t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(47120);
var i = t(200651),
    l = t(120356),
    a = t.n(l),
    o = t(481060),
    r = t(367907),
    s = t(895924),
    c = t(311819),
    d = t(299206),
    u = t(726721),
    m = t(726521),
    p = t(973616),
    h = t(572004),
    f = t(135431),
    C = t(541099),
    v = t(783097),
    x = t(570949),
    _ = t(314734),
    N = t(981631),
    g = t(388032),
    A = t(472033);
function b(e) {
    let { application: n, className: t, sectionName: l } = e,
        b = (0, v.L1)(n),
        E = (0, f.Eb)(b),
        I = {
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: l,
            source: C.Z.lastShownEntrypoint()
        },
        j = u.Z.useExperiment({ location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !1 }).enabled,
        S = (0, d.Z)({
            id: n.id,
            label: g.intl.string(g.t['+NP/b2'])
        }),
        y = (0, x.P)({ application: n });
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsx)(o.Clickable, {
                onClick: () => {
                    (0, h.JG)(
                        (0, c.J)({
                            id: n.id,
                            ...b
                        })
                    ),
                        (0, o.showToast)((0, o.createToast)(g.intl.string(g.t['L/PwZW']), o.ToastType.SUCCESS));
                },
                className: a()(A.clickable, t),
                'aria-label': g.intl.string(g.t.WqhZsr),
                children: (0, i.jsx)(o.LinkIcon, {
                    size: 'sm',
                    color: o.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, i.jsxs)(o.Menu, {
                        className: _.NN,
                        navId: 'app-details-more-menu',
                        onClose: t,
                        'aria-label': g.intl.string(g.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(o.MenuGroup, {
                                children: [
                                    E
                                        ? (0, i.jsx)(o.MenuItem, {
                                              id: 'add-app',
                                              label: g.intl.string(g.t.NgXl3N),
                                              action: () => {
                                                  null == b.customInstallUrl && (0, r.yw)(N.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, I),
                                                      (0, f.LO)({
                                                          ...b,
                                                          oauth2Callback: (e) => {
                                                              let { location: n } = e;
                                                              null != n && (0, r.yw)(N.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, I);
                                                          },
                                                          source: 'app_launcher_app_details'
                                                      });
                                              }
                                          })
                                        : null,
                                    j && n instanceof p.Z
                                        ? (0, i.jsx)(o.MenuItem, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: g.intl.string(g.t.jhJze3),
                                              action: () => {
                                                  (0, m.uu)(n);
                                              }
                                          })
                                        : null
                                ]
                            }),
                            null != y && (0, i.jsxs)(o.MenuGroup, { children: [...y] }),
                            (0, i.jsx)(o.MenuGroup, { children: S })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(o.Clickable, {
                        onClick: e.onClick,
                        className: a()(A.clickable, t),
                        'aria-label': g.intl.string(g.t.UKOtz8),
                        children: (0, i.jsx)(o.MoreHorizontalIcon, {
                            size: 'sm',
                            color: o.tokens.colors.INTERACTIVE_ACTIVE
                        })
                    })
            })
        ]
    });
}
