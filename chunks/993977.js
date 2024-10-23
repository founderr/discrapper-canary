n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(58642),
    o = n(600164),
    c = n(695346),
    d = n(490983),
    u = n(626135),
    _ = n(630388),
    E = n(804739),
    h = n(957657),
    m = n(34305),
    I = n(981631),
    p = n(689938),
    g = n(8347);
function T(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let a = t.map((e) => {
        let t = e.libraryApplication.getDistributor();
        return (0, i.jsxs)(
            'div',
            {
                className: g.hiddenLibraryApplication,
                children: [
                    (0, i.jsxs)(o.Z, {
                        direction: o.Z.Direction.VERTICAL,
                        className: g.hiddenLibraryApplicationContent,
                        children: [
                            (0, i.jsx)('div', {
                                className: g.applicationName,
                                children: e.libraryApplication.getBranchedName(e.application)
                            }),
                            null != t
                                ? (0, i.jsx)('div', {
                                      className: g.applicationSubText,
                                      children: I.EOG[t]
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(r.Clickable, {
                        className: g.restoreButton,
                        onClick: () => n(e.libraryApplication),
                        children: (0, i.jsx)(r.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: g.restoreIcon
                        })
                    })
                ]
            },
            e.key
        );
    });
    return (0, i.jsxs)(r.FormSection, {
        className: g.hiddenLibraryApplications,
        children: [
            (0, i.jsx)(r.FormTitle, {
                className: g.hiddenLibraryApplicationsTitle,
                children: p.Z.Messages.SETTINGS_GAMES_HIDDEN_LIBRARY_APPLICATIONS_LABEL
            }),
            a
        ]
    });
}
class f extends a.PureComponent {
    handleToggleShortcutDesktop(e) {
        c.Xc.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        c.Pe.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        u.default.track(I.rMx.APPLICATION_SETTINGS_UPDATED, {
            hidden_enabled: t,
            ...e.getAnalyticsData()
        });
    }
    renderBody() {
        let { hiddenLibraryApplicationViewItems: e, installShortcutDesktop: t, installShortcutStartMenu: n } = this.props;
        return (0, i.jsxs)('div', {
            className: g.body,
            children: [
                (0, E.Q)()
                    ? (0, i.jsxs)(a.Fragment, {
                          children: [
                              (0, i.jsx)(r.FormSwitch, {
                                  value: t,
                                  onChange: this.handleToggleShortcutDesktop,
                                  note: p.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP_NOTE,
                                  children: p.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP
                              }),
                              (0, i.jsx)(r.FormSwitch, {
                                  value: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                                  note: p.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU_NOTE,
                                  children: p.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU
                              }),
                              (0, i.jsx)(m.Z, {})
                          ]
                      })
                    : null,
                (0, i.jsx)(T, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e
                })
            ]
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(h.Z, { currentRoute: I.Z5c.APPLICATION_LIBRARY_SETTINGS }),
                (0, i.jsx)(r.ScrollerAuto, {
                    className: g.scroller,
                    children: this.renderBody()
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleRestoreHiddenLibraryApplication'),
            (i = (e) => {
                let t = _.x9(e.getFlags(), I.eHb.HIDDEN);
                l.h(e.id, e.branchId, t), this.trackRestoreApplication(e, _.yE(t, I.eHb.HIDDEN));
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
function C() {
    let e = {
        installShortcutDesktop: c.Xc.useSetting(),
        installShortcutStartMenu: c.Pe.useSetting(),
        hiddenLibraryApplicationViewItems: (0, s.e7)([d.Z], () => d.Z.hiddenLibraryApplicationViewItems)
    };
    return (0, i.jsx)(f, { ...e });
}
