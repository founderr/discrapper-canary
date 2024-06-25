n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(58642),
  o = n(695346),
  c = n(490983),
  u = n(285952),
  d = n(626135),
  E = n(630388),
  h = n(804739),
  _ = n(957657),
  I = n(34305),
  m = n(981631),
  T = n(689938),
  g = n(656505);

function p(e) {
  let {
    applicationViewItems: t,
    restoreApplication: n
  } = e;
  if (0 === t.length) return null;
  let i = t.map(e => {
    let t = e.libraryApplication.getDistributor();
    return (0, s.jsxs)("div", {
      className: g.hiddenLibraryApplication,
      children: [(0, s.jsxs)(u.Z, {
        direction: u.Z.Direction.VERTICAL,
        className: g.hiddenLibraryApplicationContent,
        children: [(0, s.jsx)("div", {
          className: g.applicationName,
          children: e.libraryApplication.getBranchedName(e.application)
        }), null != t ? (0, s.jsx)("div", {
          className: g.applicationSubText,
          children: m.EOG[t]
        }) : null]
      }), (0, s.jsx)(a.Clickable, {
        className: g.restoreButton,
        onClick: () => n(e.libraryApplication),
        children: (0, s.jsx)(a.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: g.restoreIcon
        })
      })]
    }, e.key)
  });
  return (0, s.jsxs)(a.FormSection, {
    className: g.hiddenLibraryApplications,
    children: [(0, s.jsx)(a.FormTitle, {
      className: g.hiddenLibraryApplicationsTitle,
      children: T.Z.Messages.SETTINGS_GAMES_HIDDEN_LIBRARY_APPLICATIONS_LABEL
    }), i]
  })
}
class N extends i.PureComponent {
  handleToggleShortcutDesktop(e) {
    o.Xc.updateSetting(e)
  }
  handleToggleShortcutStartMenu(e) {
    o.Pe.updateSetting(e)
  }
  trackRestoreApplication(e, t) {
    d.default.track(m.rMx.APPLICATION_SETTINGS_UPDATED, {
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
    return (0, s.jsxs)("div", {
      className: g.body,
      children: [(0, h.Q)() ? (0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsx)(a.FormSwitch, {
          value: t,
          onChange: this.handleToggleShortcutDesktop,
          note: T.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP_NOTE,
          children: T.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP
        }), (0, s.jsx)(a.FormSwitch, {
          value: n,
          onChange: this.handleToggleShortcutStartMenu,
          note: T.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU_NOTE,
          children: T.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU
        }), (0, s.jsx)(I.Z, {})]
      }) : null, (0, s.jsx)(p, {
        restoreApplication: this.handleRestoreHiddenLibraryApplication,
        applicationViewItems: e
      })]
    })
  }
  render() {
    return (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(_.Z, {
        currentRoute: m.Z5c.APPLICATION_LIBRARY_SETTINGS
      }), (0, s.jsx)(a.ScrollerAuto, {
        className: g.scroller,
        children: this.renderBody()
      })]
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "handleRestoreHiddenLibraryApplication", s = e => {
      let t = E.x9(e.getFlags(), m.eHb.HIDDEN);
      r.h(e.id, e.branchId, t), this.trackRestoreApplication(e, E.yE(t, m.eHb.HIDDEN))
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}

function S() {
  let e = {
    installShortcutDesktop: o.Xc.useSetting(),
    installShortcutStartMenu: o.Pe.useSetting(),
    hiddenLibraryApplicationViewItems: (0, l.e7)([c.Z], () => c.Z.hiddenLibraryApplicationViewItems)
  };
  return (0, s.jsx)(N, {
    ...e
  })
}