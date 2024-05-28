"use strict";
s.r(t), s("47120");
var n = s("735250"),
  a = s("470079"),
  r = s("120356"),
  l = s.n(r),
  i = s("481060"),
  u = s("378720"),
  o = s("285952"),
  d = s("424218"),
  c = s("823379"),
  I = s("358085"),
  T = s("843445"),
  E = s("981631"),
  f = s("689938"),
  _ = s("410427");
let S = {
  [E.OperatingSystems.WINDOWS]: I.PlatformTypes.WINDOWS,
  [E.OperatingSystems.MACOS]: I.PlatformTypes.OSX,
  [E.OperatingSystems.LINUX]: I.PlatformTypes.LINUX
};
class A extends a.PureComponent {
  render() {
    let {
      active: e,
      children: t,
      pageSize: s,
      onClick: a
    } = this.props, r = s === T.PageSizes.LARGE;
    return (0, n.jsx)(i.Button, {
      size: r ? i.Button.Sizes.MIN : i.Button.Sizes.LARGE,
      fullWidth: !r,
      color: e ? _.tabSelectedColor : _.tabNotSelectedColor,
      className: l()({
        [_.tabPageLarge]: r,
        [_.tabPageSmall]: !r,
        [_.tabSelected]: e,
        [_.tabNotSelected]: !e
      }),
      onClick: a,
      children: t
    })
  }
}
let R = e => [{
  key: f.default.Messages.APPLICATION_STORE_SPECS_OS,
  value: e.operating_system_version
}, {
  key: f.default.Messages.APPLICATION_STORE_SPECS_CPU,
  value: e.cpu
}, {
  key: f.default.Messages.APPLICATION_STORE_SPECS_MEMORY,
  value: null != e.ram ? f.default.Messages.APPLICATION_STORE_SPECS_MEMORY_VALUE.format({
    size: (0, d.formatSize)(1e3 * e.ram, {
      showDecimalForGB: !1
    })
  }) : null
}, {
  key: f.default.Messages.APPLICATION_STORE_SPECS_VIDEO,
  value: e.gpu
}, {
  key: f.default.Messages.APPLICATION_STORE_SPECS_STORAGE,
  value: null != e.disk ? (0, d.formatSize)(1e3 * e.disk, {
    showDecimalForGB: !1
  }) : null
}, {
  key: f.default.Messages.APPLICATION_STORE_SPECS_SOUND,
  value: e.sound_card
}, {
  key: f.default.Messages.APPLICATION_STORE_SPECS_NETWORK,
  value: e.network
}, {
  key: f.default.Messages.APPLICATION_STORE_SPECS_NOTES,
  value: e.notes
}];
class O extends a.PureComponent {
  static getDerivedStateFromProps(e, t) {
    let {
      systemRequirements: s
    } = e, {
      selectedOperatingSystem: n
    } = t, a = Object.keys(s);
    return a.includes(n) ? null : {
      selectedOperatingSystem: a[0]
    }
  }
  renderTabs() {
    let {
      pageSize: e,
      systemRequirements: t
    } = this.props, {
      selectedOperatingSystem: s
    } = this.state, a = Object.keys(t);
    return 1 === a.length ? null : (0, n.jsxs)(o.default, {
      className: _.tabs,
      children: [(0, n.jsx)("div", {
        className: _.separator
      }), a.map(t => (0, n.jsx)(A, {
        active: t === s,
        onClick: () => this.handleSelectOperatingSystem(t),
        pageSize: e,
        children: function(e) {
          switch (e) {
            case E.OperatingSystems.WINDOWS:
              return f.default.Messages.WINDOWS;
            case E.OperatingSystems.MACOS:
              return f.default.Messages.MACOS;
            case E.OperatingSystems.LINUX:
              return f.default.Messages.LINUX
          }
        }(t)
      }, t))]
    })
  }
  renderRequirementsSection(e, t) {
    if (null == e) return null;
    let s = R(e).map((e, t) => {
      let s = null != e.value ? e.value.trim() : null;
      return null == s || 0 === s.length ? null : (0, n.jsxs)("div", {
        className: _.requirement,
        children: [(0, n.jsxs)("span", {
          className: _.requirementKey,
          children: [e.key, ":"]
        }), s]
      }, t)
    }).filter(c.isNotNullish);
    return (0, n.jsxs)("div", {
      className: _.requirements,
      children: [(0, n.jsx)(u.default, {
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
    return (0, n.jsxs)("div", {
      className: _.requirementsContainer,
      children: [this.renderRequirementsSection(e, f.default.Messages.APPLICATION_STORE_SPECS_MINIMUM), this.renderRequirementsSection(t, f.default.Messages.APPLICATION_STORE_SPECS_RECOMMENDED)]
    })
  }
  render() {
    return (0, n.jsxs)("div", {
      className: this.props.className,
      children: [(0, n.jsx)(u.default, {
        children: f.default.Messages.APPLICATION_STORE_SECTION_TITLE_SYSTEM_REQUIREMENTS
      }), this.renderTabs(), this.renderBody()]
    })
  }
  constructor(e) {
    var t, s, n;
    super(e), t = this, s = "handleSelectOperatingSystem", n = e => {
      this.setState({
        selectedOperatingSystem: e
      })
    }, s in t ? Object.defineProperty(t, s, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[s] = n;
    let a = (0, I.getPlatform)(),
      r = Object.keys(e.systemRequirements),
      l = r[0];
    for (let e of r) S[e] === a && (l = e);
    this.state = {
      selectedOperatingSystem: l
    }
  }
}
t.default = O