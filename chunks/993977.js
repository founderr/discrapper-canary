"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  r = a("58642"),
  o = a("695346"),
  u = a("490983"),
  d = a("285952"),
  c = a("465670"),
  f = a("626135"),
  E = a("630388"),
  h = a("804739"),
  _ = a("957657"),
  C = a("34305"),
  m = a("981631"),
  S = a("689938"),
  p = a("365326");

function I(e) {
  let {
    applicationViewItems: t,
    restoreApplication: a
  } = e;
  if (0 === t.length) return null;
  let s = t.map(e => {
    let t = e.libraryApplication.getDistributor();
    return (0, n.jsxs)("div", {
      className: p.hiddenLibraryApplication,
      children: [(0, n.jsxs)(d.default, {
        direction: d.default.Direction.VERTICAL,
        className: p.hiddenLibraryApplicationContent,
        children: [(0, n.jsx)("div", {
          className: p.applicationName,
          children: e.libraryApplication.getBranchedName(e.application)
        }), null != t ? (0, n.jsx)("div", {
          className: p.applicationSubText,
          children: m.DistributorNames[t]
        }) : null]
      }), (0, n.jsx)(i.Clickable, {
        className: p.restoreButton,
        onClick: () => a(e.libraryApplication),
        children: (0, n.jsx)(c.default, {
          className: p.restoreIcon
        })
      })]
    }, e.key)
  });
  return (0, n.jsxs)(i.FormSection, {
    className: p.hiddenLibraryApplications,
    children: [(0, n.jsx)(i.FormTitle, {
      className: p.hiddenLibraryApplicationsTitle,
      children: S.default.Messages.SETTINGS_GAMES_HIDDEN_LIBRARY_APPLICATIONS_LABEL
    }), s]
  })
}
class T extends s.PureComponent {
  handleToggleShortcutDesktop(e) {
    o.InstallShortcutDesktop.updateSetting(e)
  }
  handleToggleShortcutStartMenu(e) {
    o.InstallShortcutStartMenu.updateSetting(e)
  }
  trackRestoreApplication(e, t) {
    f.default.track(m.AnalyticEvents.APPLICATION_SETTINGS_UPDATED, {
      hidden_enabled: t,
      ...e.getAnalyticsData()
    })
  }
  renderBody() {
    let {
      hiddenLibraryApplicationViewItems: e,
      installShortcutDesktop: t,
      installShortcutStartMenu: a
    } = this.props;
    return (0, n.jsxs)("div", {
      className: p.body,
      children: [(0, h.isSupportedPlatform)() ? (0, n.jsxs)(s.Fragment, {
        children: [(0, n.jsx)(i.FormSwitch, {
          value: t,
          onChange: this.handleToggleShortcutDesktop,
          note: S.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP_NOTE,
          children: S.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP
        }), (0, n.jsx)(i.FormSwitch, {
          value: a,
          onChange: this.handleToggleShortcutStartMenu,
          note: S.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU_NOTE,
          children: S.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU
        }), (0, n.jsx)(C.default, {})]
      }) : null, (0, n.jsx)(I, {
        restoreApplication: this.handleRestoreHiddenLibraryApplication,
        applicationViewItems: e
      })]
    })
  }
  render() {
    return (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(_.default, {
        currentRoute: m.Routes.APPLICATION_LIBRARY_SETTINGS
      }), (0, n.jsx)(i.ScrollerAuto, {
        className: p.scroller,
        children: this.renderBody()
      })]
    })
  }
  constructor(...e) {
    var t, a, n;
    super(...e), t = this, a = "handleRestoreHiddenLibraryApplication", n = e => {
      let t = E.toggleFlag(e.getFlags(), m.LibraryApplicationFlags.HIDDEN);
      r.updateFlags(e.id, e.branchId, t), this.trackRestoreApplication(e, E.hasFlag(t, m.LibraryApplicationFlags.HIDDEN))
    }, a in t ? Object.defineProperty(t, a, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[a] = n
  }
}

function g() {
  let e = {
    installShortcutDesktop: o.InstallShortcutDesktop.useSetting(),
    installShortcutStartMenu: o.InstallShortcutStartMenu.useSetting(),
    hiddenLibraryApplicationViewItems: (0, l.useStateFromStores)([u.default], () => u.default.hiddenLibraryApplicationViewItems)
  };
  return (0, n.jsx)(T, {
    ...e
  })
}