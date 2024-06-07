"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("481060"),
  o = s("378720"),
  u = s("285952"),
  d = s("424218"),
  c = s("823379"),
  _ = s("358085"),
  E = s("843445"),
  T = s("981631"),
  I = s("689938"),
  R = s("410427");
let f = {
  [T.OperatingSystems.WINDOWS]: _.PlatformTypes.WINDOWS,
  [T.OperatingSystems.MACOS]: _.PlatformTypes.OSX,
  [T.OperatingSystems.LINUX]: _.PlatformTypes.LINUX
};
class S extends r.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: s,
      onClick: r
    } = this.props, i = s === E.PageSizes.LARGE;
    return (0, a.jsx)(l.Button, {
      size: i ? l.Button.Sizes.MIN : l.Button.Sizes.LARGE,
      fullWidth: !i,
      color: e ? R.tabSelectedColor : R.tabNotSelectedColor,
      className: n()({
        [R.tabPageLarge]: i,
        [R.tabPageSmall]: !i,
        [R.tabSelected]: e,
        [R.tabNotSelected]: !e
      }),
      onClick: r,
      children: t
    })
  }
}
let m = e => [{
  key: I.default.Messages.APPLICATION_STORE_SPECS_OS,
  value: e.operating_system_version
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_CPU,
  value: e.cpu
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_MEMORY,
  value: null != e.ram ? I.default.Messages.APPLICATION_STORE_SPECS_MEMORY_VALUE.format({
    size: (0, d.formatSize)(1e3 * e.ram, {
      showDecimalForGB: !1
    })
  }) : null
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_VIDEO,
  value: e.gpu
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_STORAGE,
  value: null != e.disk ? (0, d.formatSize)(1e3 * e.disk, {
    showDecimalForGB: !1
  }) : null
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_SOUND,
  value: e.sound_card
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_NETWORK,
  value: e.network
}, {
  key: I.default.Messages.APPLICATION_STORE_SPECS_NOTES,
  value: e.notes
}];
class A extends r.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      systemRequirements: s
    } = e, {
      selectedOperatingSystem: a
    } = t, r = Object.keys(s);
    return r.includes(a) ? null : {
      selectedOperatingSystem: r[0]
    }
  }
  renderTabs() {
    let {
      pageSize: e,
      systemRequirements: t
    } = this.props, {
      selectedOperatingSystem: s
    } = this.state, r = Object.keys(t);
    return 1 === r.length ? null : (0, a.jsxs)(u.default, {
      className: R.tabs,
      children: [(0, a.jsx)("div", {
        className: R.separator
      }), r.map(t => (0, a.jsx)(S, {
        active: t === s,
        onClick: () => this.handleSelectOperatingSystem(t),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case T.OperatingSystems.WINDOWS:
              return I.default.Messages.WINDOWS;
            case T.OperatingSystems.MACOS:
              return I.default.Messages.MACOS;
            case T.OperatingSystems.LINUX:
              return I.default.Messages.LINUX
          }
        }(t)
      }, t))]
    })
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let s = m(e).map((e, t) => {
      let s = null != e.value ? e.value.trim() : null;
      return null == s || 0 === s.length ? null : (0, a.jsxs)("div", {
        className: R.requirement,
        children: [(0, a.jsxs)("span", {
          className: R.requirementKey,
          children: [e.key, ":"]
        }), s]
      }, t)
    }).filter(c.isNotNullish);
    return (0, a.jsxs)("div", {
      className: R.requirements,
      children: [(0, a.jsx)(o.default, {
        tag: "h4",
        children: t
      }), s]
    })
  }
  renderBody() {
    let {
      minimum: e,
      recommended: t
    } = this.props.systemRequirements[this.state.selectedOperatingSystem];
    return (0, a.jsxs)("div", {
      className: R.requirementsContainer,
      children: [this.renderRequirementsSection(e, I.default.Messages.APPLICATION_STORE_SPECS_MINIMUM), this.renderRequirementsSection(t, I.default.Messages.APPLICATION_STORE_SPECS_RECOMMENDED)]
    })
  }
  render() {
    return (0, a.jsxs)("div", {
      className: this.props.className,
      children: [(0, a.jsx)(o.default, {
        children: I.default.Messages.APPLICATION_STORE_SECTION_TITLE_SYSTEM_REQUIREMENTS
      }), this.renderTabs(), this.renderBody()]
    })
  }
  constructor(e) {
    var t, s, a;
    super(e), t = this, s = "handleSelectOperatingSystem", a = e => {
      this.setState({
        selectedOperatingSystem: e
      })
    }, s in t ? Object.defineProperty(t, s, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = a;
    let r = (0, _.getPlatform)(),
      i = Object.keys(e.systemRequirements),
      n = i[0];
    for (let e of i) f[e] === r && (n = e);
    this.state = {
      selectedOperatingSystem: n
    }
  }
}
t.default = A