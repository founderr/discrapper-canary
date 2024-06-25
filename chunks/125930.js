n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(378720),
  c = n(285952),
  u = n(424218),
  d = n(823379),
  E = n(358085),
  h = n(843445),
  _ = n(981631),
  I = n(689938),
  m = n(723951);
let T = {
  [_.TaA.WINDOWS]: E.PlatformTypes.WINDOWS,
  [_.TaA.MACOS]: E.PlatformTypes.OSX,
  [_.TaA.LINUX]: E.PlatformTypes.LINUX
};
class g extends i.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: n,
      onClick: i
    } = this.props, l = n === h.b.LARGE;
    return (0, s.jsx)(r.Button, {
      size: l ? r.Button.Sizes.MIN : r.Button.Sizes.LARGE,
      fullWidth: !l,
      color: e ? m.tabSelectedColor : m.tabNotSelectedColor,
      className: a()({
        [m.tabPageLarge]: l,
        [m.tabPageSmall]: !l,
        [m.tabSelected]: e,
        [m.tabNotSelected]: !e
      }),
      onClick: i,
      children: t
    })
  }
}
let p = e => [{
  key: I.Z.Messages.APPLICATION_STORE_SPECS_OS,
  value: e.operating_system_version
}, {
  key: I.Z.Messages.APPLICATION_STORE_SPECS_CPU,
  value: e.cpu
}, {
  key: I.Z.Messages.APPLICATION_STORE_SPECS_MEMORY,
  value: null != e.ram ? I.Z.Messages.APPLICATION_STORE_SPECS_MEMORY_VALUE.format({
    size: (0, u.BU)(1e3 * e.ram, {
      showDecimalForGB: !1
    })
  }) : null
}, {
  key: I.Z.Messages.APPLICATION_STORE_SPECS_VIDEO,
  value: e.gpu
}, {
  key: I.Z.Messages.APPLICATION_STORE_SPECS_STORAGE,
  value: null != e.disk ? (0, u.BU)(1e3 * e.disk, {
    showDecimalForGB: !1
  }) : null
}, {
  key: I.Z.Messages.APPLICATION_STORE_SPECS_SOUND,
  value: e.sound_card
}, {
  key: I.Z.Messages.APPLICATION_STORE_SPECS_NETWORK,
  value: e.network
}, {
  key: I.Z.Messages.APPLICATION_STORE_SPECS_NOTES,
  value: e.notes
}];
class N extends i.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      systemRequirements: n
    } = e, {
      selectedOperatingSystem: s
    } = t, i = Object.keys(n);
    return i.includes(s) ? null : {
      selectedOperatingSystem: i[0]
    }
  }
  renderTabs() {
    let {
      pageSize: e,
      systemRequirements: t
    } = this.props, {
      selectedOperatingSystem: n
    } = this.state, i = Object.keys(t);
    return 1 === i.length ? null : (0, s.jsxs)(c.Z, {
      className: m.tabs,
      children: [(0, s.jsx)("div", {
        className: m.separator
      }), i.map(t => (0, s.jsx)(g, {
        active: t === n,
        onClick: () => this.handleSelectOperatingSystem(t),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case _.TaA.WINDOWS:
              return I.Z.Messages.WINDOWS;
            case _.TaA.MACOS:
              return I.Z.Messages.MACOS;
            case _.TaA.LINUX:
              return I.Z.Messages.LINUX
          }
        }(t)
      }, t))]
    })
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let n = p(e).map((e, t) => {
      let n = null != e.value ? e.value.trim() : null;
      return null == n || 0 === n.length ? null : (0, s.jsxs)("div", {
        className: m.requirement,
        children: [(0, s.jsxs)("span", {
          className: m.requirementKey,
          children: [e.key, ":"]
        }), n]
      }, t)
    }).filter(d.lm);
    return (0, s.jsxs)("div", {
      className: m.requirements,
      children: [(0, s.jsx)(o.Z, {
        tag: "h4",
        children: t
      }), n]
    })
  }
  renderBody() {
    let {
      minimum: e,
      recommended: t
    } = this.props.systemRequirements[this.state.selectedOperatingSystem];
    return (0, s.jsxs)("div", {
      className: m.requirementsContainer,
      children: [this.renderRequirementsSection(e, I.Z.Messages.APPLICATION_STORE_SPECS_MINIMUM), this.renderRequirementsSection(t, I.Z.Messages.APPLICATION_STORE_SPECS_RECOMMENDED)]
    })
  }
  render() {
    return (0, s.jsxs)("div", {
      className: this.props.className,
      children: [(0, s.jsx)(o.Z, {
        children: I.Z.Messages.APPLICATION_STORE_SECTION_TITLE_SYSTEM_REQUIREMENTS
      }), this.renderTabs(), this.renderBody()]
    })
  }
  constructor(e) {
    var t, n, s;
    super(e), t = this, n = "handleSelectOperatingSystem", s = e => {
      this.setState({
        selectedOperatingSystem: e
      })
    }, n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s;
    let i = (0, E.getPlatform)(),
      l = Object.keys(e.systemRequirements),
      a = l[0];
    for (let e of l) T[e] === i && (a = e);
    this.state = {
      selectedOperatingSystem: a
    }
  }
}
t.Z = N