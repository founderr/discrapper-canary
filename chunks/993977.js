"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("58642"),
  o = n("695346"),
  u = n("490983"),
  d = n("285952"),
  c = n("465670"),
  f = n("626135"),
  E = n("630388"),
  h = n("804739"),
  _ = n("957657"),
  C = n("34305"),
  m = n("981631"),
  p = n("689938"),
  S = n("365326");

function g(e) {
  let {
    applicationViewItems: t,
    restoreApplication: n
  } = e;
  if (0 === t.length) return null;
  let s = t.map(e => {
    let t = e.libraryApplication.getDistributor();
    return (0, a.jsxs)("div", {
      className: S.hiddenLibraryApplication,
      children: [(0, a.jsxs)(d.default, {
        direction: d.default.Direction.VERTICAL,
        className: S.hiddenLibraryApplicationContent,
        children: [(0, a.jsx)("div", {
          className: S.applicationName,
          children: e.libraryApplication.getBranchedName(e.application)
        }), null != t ? (0, a.jsx)("div", {
          className: S.applicationSubText,
          children: m.DistributorNames[t]
        }) : null]
      }), (0, a.jsx)(i.Clickable, {
        className: S.restoreButton,
        onClick: () => n(e.libraryApplication),
        children: (0, a.jsx)(c.default, {
          className: S.restoreIcon
        })
      })]
    }, e.key)
  });
  return (0, a.jsxs)(i.FormSection, {
    className: S.hiddenLibraryApplications,
    children: [(0, a.jsx)(i.FormTitle, {
      className: S.hiddenLibraryApplicationsTitle,
      children: p.default.Messages.SETTINGS_GAMES_HIDDEN_LIBRARY_APPLICATIONS_LABEL
    }), s]
  })
}
class I extends s.PureComponent {
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
      installShortcutStartMenu: n
    } = this.props;
    return (0, a.jsxs)("div", {
      className: S.body,
      children: [(0, h.isSupportedPlatform)() ? (0, a.jsxs)(s.Fragment, {
        children: [(0, a.jsx)(i.FormSwitch, {
          value: t,
          onChange: this.handleToggleShortcutDesktop,
          note: p.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP_NOTE,
          children: p.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP
        }), (0, a.jsx)(i.FormSwitch, {
          value: n,
          onChange: this.handleToggleShortcutStartMenu,
          note: p.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU_NOTE,
          children: p.default.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU
        }), (0, a.jsx)(C.default, {})]
      }) : null, (0, a.jsx)(g, {
        restoreApplication: this.handleRestoreHiddenLibraryApplication,
        applicationViewItems: e
      })]
    })
  }
  render() {
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(_.default, {
        currentRoute: m.Routes.APPLICATION_LIBRARY_SETTINGS
      }), (0, a.jsx)(i.ScrollerAuto, {
        className: S.scroller,
        children: this.renderBody()
      })]
    })
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "handleRestoreHiddenLibraryApplication", a = e => {
      let t = E.toggleFlag(e.getFlags(), m.LibraryApplicationFlags.HIDDEN);
      r.updateFlags(e.id, e.branchId, t), this.trackRestoreApplication(e, E.hasFlag(t, m.LibraryApplicationFlags.HIDDEN))
    }, n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}

function T() {
  let e = {
    installShortcutDesktop: o.InstallShortcutDesktop.useSetting(),
    installShortcutStartMenu: o.InstallShortcutStartMenu.useSetting(),
    hiddenLibraryApplicationViewItems: (0, l.useStateFromStores)([u.default], () => u.default.hiddenLibraryApplicationViewItems)
  };
  return (0, a.jsx)(I, {
    ...e
  })
}