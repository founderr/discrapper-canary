t.d(n, {
    Z: function () {
        return E;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    l = t.n(a),
    o = t(481060),
    r = t(367907),
    s = t(895924),
    c = t(311819),
    d = t(299206),
    u = t(572004),
    m = t(135431),
    p = t(541099),
    _ = t(783097),
    C = t(314734),
    h = t(981631),
    f = t(689938),
    A = t(500257);
function E(e) {
    let { application: n, className: t, sectionName: a } = e,
        E = (0, _.L1)(n),
        N = (0, m.Eb)(E),
        v = {
            location: s.Vh.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU,
            application_id: n.id,
            section_name: a,
            source: p.Z.lastShownEntrypoint()
        },
        x = (0, d.Z)({
            id: n.id,
            label: f.Z.Messages.COPY_ID_APP
        });
    return (0, i.jsx)(o.Popout, {
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsxs)(o.Menu, {
                className: C.NN,
                navId: 'app-details-more-menu',
                onClose: t,
                'aria-label': f.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
                onSelect: void 0,
                children: [
                    (0, i.jsxs)(o.MenuGroup, {
                        children: [
                            N
                                ? (0, i.jsx)(o.MenuItem, {
                                      id: 'add-app',
                                      label: f.Z.Messages.APPLICATION_ADD_BUTTON,
                                      action: () => {
                                          null == E.customInstallUrl && (0, r.yw)(h.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, v),
                                              (0, m.LO)({
                                                  ...E,
                                                  oauth2Callback: (e) => {
                                                      let { location: n } = e;
                                                      null != n && (0, r.yw)(h.rMx.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, v);
                                                  },
                                                  source: 'app_launcher_app_details'
                                              });
                                      }
                                  })
                                : null,
                            (0, i.jsx)(o.MenuItem, {
                                id: 'copy',
                                label: f.Z.Messages.COPY_LINK,
                                action: () => {
                                    (0, u.JG)(
                                        (0, c.J)({
                                            id: n.id,
                                            ...E
                                        })
                                    );
                                }
                            })
                        ]
                    }),
                    (0, i.jsx)(o.MenuGroup, { children: x })
                ]
            });
        },
        align: 'right',
        position: 'bottom',
        children: (e) =>
            (0, i.jsx)(o.Clickable, {
                onClick: e.onClick,
                className: l()(A.clickable, t),
                'aria-label': f.Z.Messages.MORE,
                children: (0, i.jsx)(o.MoreHorizontalIcon, {
                    size: 'sm',
                    color: o.tokens.colors.INTERACTIVE_ACTIVE
                })
            })
    });
}
