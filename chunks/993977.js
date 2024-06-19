n.d(t, {
  Z: function() {
    return S
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
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
  g = n(689938),
  p = n(656505);

function T(e) {
  let {
    applicationViewItems: t,
    restoreApplication: n
  } = e;
  if (0 === t.length) return null;
  let s = t.map(e => {
    let t = e.libraryApplication.getDistributor();
    return (0, i.jsxs)("div", {
      className: p.hiddenLibraryApplication,
      children: [(0, i.jsxs)(u.Z, {
        direction: u.Z.Direction.VERTICAL,
        className: p.hiddenLibraryApplicationContent,
        children: [(0, i.jsx)("div", {
          className: p.applicationName,
          children: e.libraryApplication.getBranchedName(e.application)
        }), null != t ? (0, i.jsx)("div", {
          className: p.applicationSubText,
          children: m.EOG[t]
        }) : null]
      }), (0, i.jsx)(a.Clickable, {
        className: p.restoreButton,
        onClick: () => n(e.libraryApplication),
        children: (0, i.jsx)(a.CloseSmallIcon, {
          size: "md",
          color: "currentColor",
          className: p.restoreIcon
        })
      })]
    }, e.key)
  });
  return (0, i.jsxs)(a.FormSection, {
    className: p.hiddenLibraryApplications,
    children: [(0, i.jsx)(a.FormTitle, {
      className: p.hiddenLibraryApplicationsTitle,
      children: g.Z.Messages.SETTINGS_GAMES_HIDDEN_LIBRARY_APPLICATIONS_LABEL
    }), s]
  })
}
class N extends s.PureComponent {
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
    return (0, i.jsxs)("div", {
      className: p.body,
      children: [(0, h.Q)() ? (0, i.jsxs)(s.Fragment, {
        children: [(0, i.jsx)(a.FormSwitch, {
          value: t,
          onChange: this.handleToggleShortcutDesktop,
          note: g.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP_NOTE,
          children: g.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_DESKTOP
        }), (0, i.jsx)(a.FormSwitch, {
          value: n,
          onChange: this.handleToggleShortcutStartMenu,
          note: g.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU_NOTE,
          children: g.Z.Messages.USER_SETTINGS_GAMES_SHORTCUTS_START_MENU
        }), (0, i.jsx)(I.Z, {})]
      }) : null, (0, i.jsx)(T, {
        restoreApplication: this.handleRestoreHiddenLibraryApplication,
        applicationViewItems: e
      })]
    })
  }
  render() {
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(_.Z, {
        currentRoute: m.Z5c.APPLICATION_LIBRARY_SETTINGS
      }), (0, i.jsx)(a.ScrollerAuto, {
        className: p.scroller,
        children: this.renderBody()
      })]
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "handleRestoreHiddenLibraryApplication", i = e => {
      let t = E.x9(e.getFlags(), m.eHb.HIDDEN);
      r.h(e.id, e.branchId, t), this.trackRestoreApplication(e, E.yE(t, m.eHb.HIDDEN))
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}

function S() {
  let e = {
    installShortcutDesktop: o.Xc.useSetting(),
    installShortcutStartMenu: o.Pe.useSetting(),
    hiddenLibraryApplicationViewItems: (0, l.e7)([c.Z], () => c.Z.hiddenLibraryApplicationViewItems)
  };
  return (0, i.jsx)(N, {
    ...e
  })
}