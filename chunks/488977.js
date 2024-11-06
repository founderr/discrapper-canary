t.d(n, {
    Z: function () {
        return N;
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
    u = t(572004),
    m = t(135431),
    p = t(541099),
    h = t(783097),
    f = t(570949),
    C = t(314734),
    v = t(981631),
    x = t(388032),
    _ = t(500257);
function N(e) {
    let { application: n, className: t, sectionName: l } = e,
        N = (0, h.L1)(n),
        g = (0, m.Eb)(N),
        A = {
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: l,
            source: p.Z.lastShownEntrypoint()
        },
        b = (0, d.Z)({
            id: n.id,
            label: x.intl.string(x.t['+NP/b2'])
        }),
        E = (0, f.P)({ application: n });
    return (0, i.jsxs)('div', {
        className: _.container,
        children: [
            (0, i.jsx)(o.Clickable, {
                onClick: () => {
                    (0, u.JG)(
                        (0, c.J)({
                            id: n.id,
                            ...N
                        })
                    ),
                        (0, o.showToast)((0, o.createToast)(x.intl.string(x.t['L/PwZW']), o.ToastType.SUCCESS));
                },
                className: a()(_.clickable, t),
                'aria-label': x.intl.string(x.t.WqhZsr),
                children: (0, i.jsx)(o.LinkIcon, {
                    size: 'sm',
                    color: o.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, i.jsxs)(o.Menu, {
                        className: C.NN,
                        navId: 'app-details-more-menu',
                        onClose: n,
                        'aria-label': x.intl.string(x.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsx)(o.MenuGroup, {
                                children: g
                                    ? (0, i.jsx)(o.MenuItem, {
                                          id: 'add-app',
                                          label: x.intl.string(x.t.NgXl3N),
                                          action: () => {
                                              null == N.customInstallUrl && (0, r.yw)(v.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, A),
                                                  (0, m.LO)({
                                                      ...N,
                                                      oauth2Callback: (e) => {
                                                          let { location: n } = e;
                                                          null != n && (0, r.yw)(v.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, A);
                                                      },
                                                      source: 'app_launcher_app_details'
                                                  });
                                          }
                                      })
                                    : null
                            }),
                            null != E && (0, i.jsxs)(o.MenuGroup, { children: [...E] }),
                            (0, i.jsx)(o.MenuGroup, { children: b })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(o.Clickable, {
                        onClick: e.onClick,
                        className: a()(_.clickable, t),
                        'aria-label': x.intl.string(x.t.UKOtz8),
                        children: (0, i.jsx)(o.MoreHorizontalIcon, {
                            size: 'sm',
                            color: o.tokens.colors.INTERACTIVE_ACTIVE
                        })
                    })
            })
        ]
    });
}
