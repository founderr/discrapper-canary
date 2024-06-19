t(47120);
var n = t(735250),
  r = t(470079),
  i = t(120356),
  a = t.n(i),
  l = t(481060),
  o = t(378720),
  c = t(285952),
  u = t(424218),
  I = t(823379),
  T = t(358085),
  d = t(843445),
  _ = t(981631),
  E = t(689938),
  S = t(723951);
let O = {
  [_.TaA.WINDOWS]: T.PlatformTypes.WINDOWS,
  [_.TaA.MACOS]: T.PlatformTypes.OSX,
  [_.TaA.LINUX]: T.PlatformTypes.LINUX
};
class A extends r.PureComponent {
  render() {
    let {
      active: e,
      children: s,
      pageSize: t,
      onClick: r
    } = this.props, i = t === d.b.LARGE;
    return (0, n.jsx)(l.Button, {
      size: i ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
      fullWidth: !i,
      color: e ? S.tabSelectedColor : S.tabNotSelectedColor,
      className: a()({
        [S.tabPageLarge]: i,
        [S.tabPageSmall]: !i,
        [S.tabSelected]: e,
        [S.tabNotSelected]: !e
      }),
      onClick: r,
      children: s
    })
  }
}
let N = e => [{
  key: E.Z.Messages.APPLICATION_STORE_SPECS_OS,
  value: e.operating_system_version
}, {
  key: E.Z.Messages.APPLICATION_STORE_SPECS_CPU,
  value: e.cpu
}, {
  key: E.Z.Messages.APPLICATION_STORE_SPECS_MEMORY,
  value: null != e.ram ? E.Z.Messages.APPLICATION_STORE_SPECS_MEMORY_VALUE.format({
    size: (0, u.BU)(1e3 * e.ram, {
      showDecimalForGB: !1
    })
  }) : null
}, {
  key: E.Z.Messages.APPLICATION_STORE_SPECS_VIDEO,
  value: e.gpu
}, {
  key: E.Z.Messages.APPLICATION_STORE_SPECS_STORAGE,
  value: null != e.disk ? (0, u.BU)(1e3 * e.disk, {
    showDecimalForGB: !1
  }) : null
}, {
  key: E.Z.Messages.APPLICATION_STORE_SPECS_SOUND,
  value: e.sound_card
}, {
  key: E.Z.Messages.APPLICATION_STORE_SPECS_NETWORK,
  value: e.network
}, {
  key: E.Z.Messages.APPLICATION_STORE_SPECS_NOTES,
  value: e.notes
}];
class R extends r.PureComponent {
  static getDerivedStateFromProps(e, s) {
    let {
      systemRequirements: t
    } = e, {
      selectedOperatingSystem: n
    } = s, r = Object.keys(t);
    return r.includes(n) ? null : {
      selectedOperatingSystem: r[0]
    }
  }
  renderTabs() {
    let {
      pageSize: e,
      systemRequirements: s
    } = this.props, {
      selectedOperatingSystem: t
    } = this.state, r = Object.keys(s);
    return 1 === r.length ? null : (0, n.jsxs)(c.Z, {
      className: S.tabs,
      children: [(0, n.jsx)("div", {
        className: S.separator
      }), r.map(s => (0, n.jsx)(A, {
        active: s === t,
        onClick: () => this.handleSelectOperatingSystem(s),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case _.TaA.WINDOWS:
              return E.Z.Messages.WINDOWS;
            case _.TaA.MACOS:
              return E.Z.Messages.MACOS;
            case _.TaA.LINUX:
              return E.Z.Messages.LINUX
          }
        }(s)
      }, s))]
    })
  }
  renderRequirementsSection(e, s) {
    if (null == e) return null;
    let t = N(e).map((e, s) => {
      let t = null != e.value ? e.value.trim() : null;
      return null == t || 0 === t.length ? null : (0, n.jsxs)("div", {
        className: S.requirement,
        children: [(0, n.jsxs)("span", {
          className: S.requirementKey,
          children: [e.key, ":"]
        }), t]
      }, s)
    }).filter(I.lm);
    return (0, n.jsxs)("div", {
      className: S.requirements,
      children: [(0, n.jsx)(o.Z, {
        tag: "h4",
        children: s
      }), t]
    })
  }
  renderBody() {
    let {
      minimum: e,
      recommended: s
    } = this.props.systemRequirements[this.state.selectedOperatingSystem];
    return (0, n.jsxs)("div", {
      className: S.requirementsContainer,
      children: [this.renderRequirementsSection(e, E.Z.Messages.APPLICATION_STORE_SPECS_MINIMUM), this.renderRequirementsSection(s, E.Z.Messages.APPLICATION_STORE_SPECS_RECOMMENDED)]
    })
  }
  render() {
    return (0, n.jsxs)("div", {
      className: this.props.className,
      children: [(0, n.jsx)(o.Z, {
        children: E.Z.Messages.APPLICATION_STORE_SECTION_TITLE_SYSTEM_REQUIREMENTS
      }), this.renderTabs(), this.renderBody()]
    })
  }
  constructor(e) {
    var s, t, n;
    super(e), s = this, t = "handleSelectOperatingSystem", n = e => {
      this.setState({
        selectedOperatingSystem: e
      })
    }, t in s ? Object.defineProperty(s, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : s[t] = n;
    let r = (0, T.getPlatform)(),
      i = Object.keys(e.systemRequirements),
      a = i[0];
    for (let e of i) O[e] === r && (a = e);
    this.state = {
      selectedOperatingSystem: a
    }
  }
}
s.Z = R