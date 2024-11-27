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
    let { application: n, channel: t, className: l, sectionName: b } = e,
        E = (0, v.L1)(n),
        I = (0, f.Eb)(E),
        j = {
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: b,
            source: C.Z.lastShownEntrypoint()
        },
        S = u.Z.useExperiment({ location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !1 }).enabled,
        y = (0, d.Z)({
            id: n.id,
            label: g.intl.string(g.t['+NP/b2'])
        }),
        P = (0, x.P)({ application: n });
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsx)(o.Clickable, {
                onClick: () => {
                    (0, h.JG)(
                        (0, c.J)({
                            id: n.id,
                            ...E
                        })
                    ),
                        (0, o.showToast)((0, o.createToast)(g.intl.string(g.t['L/PwZW']), o.ToastType.SUCCESS));
                },
                className: a()(A.clickable, l),
                'aria-label': g.intl.string(g.t.WqhZsr),
                children: (0, i.jsx)(o.LinkIcon, {
                    size: 'sm',
                    color: o.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(o.Popout, {
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, i.jsxs)(o.Menu, {
                        className: _.NN,
                        navId: 'app-details-more-menu',
                        onClose: l,
                        'aria-label': g.intl.string(g.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(o.MenuGroup, {
                                children: [
                                    I
                                        ? (0, i.jsx)(o.MenuItem, {
                                              id: 'add-app',
                                              label: g.intl.string(g.t.NgXl3N),
                                              action: () => {
                                                  null == E.customInstallUrl && (0, r.yw)(N.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, j),
                                                      (0, f.LO)({
                                                          ...E,
                                                          oauth2Callback: (e) => {
                                                              let { location: n } = e;
                                                              null != n && (0, r.yw)(N.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, j);
                                                          },
                                                          source: 'app_launcher_app_details'
                                                      });
                                              }
                                          })
                                        : null,
                                    S && n instanceof p.Z
                                        ? (0, i.jsx)(o.MenuItem, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: g.intl.string(g.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, m.uu)({
                                                      application: n,
                                                      entrypoint: 'app_launcher',
                                                      contextualGuildId: null !== (e = t.getGuildId()) && void 0 !== e ? e : void 0,
                                                      contextualChannelId: t.id
                                                  });
                                              }
                                          })
                                        : null
                                ]
                            }),
                            null != P && (0, i.jsxs)(o.MenuGroup, { children: [...P] }),
                            (0, i.jsx)(o.MenuGroup, { children: y })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(o.Clickable, {
                        onClick: e.onClick,
                        className: a()(A.clickable, l),
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
