t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(200651),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    r = t(481060),
    s = t(367907),
    c = t(895924),
    d = t(311819),
    u = t(299206),
    m = t(726721),
    p = t(726521),
    h = t(973616),
    f = t(626135),
    C = t(572004),
    v = t(135431),
    x = t(541099),
    _ = t(783097),
    N = t(570949),
    g = t(314734),
    A = t(981631),
    b = t(388032),
    E = t(472033);
function I(e) {
    let { application: n, channel: t, className: l, sectionName: I } = e,
        P = (0, o.e7)([x.Z], () => x.Z.entrypoint()),
        j = (0, _.L1)(n),
        y = (0, v.Eb)(j),
        S = {
            location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: I,
            source: x.Z.lastShownEntrypoint()
        },
        T = m.Z.useExperiment({ location: c.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU }, { autoTrackExposure: !0 }).enabled,
        L = (0, u.Z)({
            id: n.id,
            label: b.intl.string(b.t['+NP/b2'])
        }),
        R = (0, N.P)({ application: n });
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsx)(r.Clickable, {
                onClick: () => {
                    f.default.track(A.rMx.APP_LAUNCHER_APPLICATION_LINK_COPIED, {
                        application_id: n.id,
                        source: P
                    }),
                        (0, C.JG)(
                            (0, d.J)({
                                id: n.id,
                                ...j
                            })
                        ),
                        (0, r.showToast)((0, r.createToast)(b.intl.string(b.t['L/PwZW']), r.ToastType.SUCCESS));
                },
                className: a()(E.clickable, l),
                'aria-label': b.intl.string(b.t.WqhZsr),
                children: (0, i.jsx)(r.LinkIcon, {
                    size: 'sm',
                    color: r.tokens.colors.INTERACTIVE_ACTIVE
                })
            }),
            (0, i.jsx)(r.Popout, {
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, i.jsxs)(r.Menu, {
                        className: g.NN,
                        navId: 'app-details-more-menu',
                        onClose: l,
                        'aria-label': b.intl.string(b.t.AXIHpa),
                        onSelect: void 0,
                        children: [
                            (0, i.jsxs)(r.MenuGroup, {
                                children: [
                                    y
                                        ? (0, i.jsx)(r.MenuItem, {
                                              id: 'add-app',
                                              label: b.intl.string(b.t.NgXl3N),
                                              action: () => {
                                                  null == j.customInstallUrl && (0, s.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, S),
                                                      (0, v.LO)({
                                                          ...j,
                                                          oauth2Callback: (e) => {
                                                              let { location: n } = e;
                                                              null != n && (0, s.yw)(A.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, S);
                                                          },
                                                          source: 'app_launcher_app_details'
                                                      });
                                              }
                                          })
                                        : null,
                                    T && n instanceof h.ZP
                                        ? (0, i.jsx)(r.MenuItem, {
                                              id: 'report-app',
                                              color: 'danger',
                                              label: b.intl.string(b.t.jhJze3),
                                              action: () => {
                                                  var e;
                                                  (0, p.uu)({
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
                            null != R && (0, i.jsxs)(r.MenuGroup, { children: [...R] }),
                            (0, i.jsx)(r.MenuGroup, { children: L })
                        ]
                    });
                },
                align: 'right',
                position: 'bottom',
                children: (e) =>
                    (0, i.jsx)(r.Clickable, {
                        onClick: e.onClick,
                        className: a()(E.clickable, l),
                        'aria-label': b.intl.string(b.t.UKOtz8),
                        children: (0, i.jsx)(r.MoreHorizontalIcon, {
                            size: 'sm',
                            color: r.tokens.colors.INTERACTIVE_ACTIVE
                        })
                    })
            })
        ]
    });
}
