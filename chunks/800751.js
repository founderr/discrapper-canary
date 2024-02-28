"use strict";
n.r(t), n.d(t, {
  SHAKE_INTENSITY_DEFAULT: function() {
    return T
  },
  SHAKE_INTENSITY_MAX: function() {
    return j
  },
  SHAKE_INTENSITY_INCREMENT: function() {
    return C
  },
  default: function() {
    return R
  }
}), n("424973"), n("881410"), n("222007");
var i = n("37983"),
  s = n("884691"),
  l = n("759843"),
  o = n("669491"),
  r = n("77078"),
  a = n("428958"),
  c = n("69927"),
  d = n("384997"),
  u = n("304386"),
  h = n("423487"),
  m = n("956089"),
  f = n("659500"),
  p = n("286235"),
  S = n("901582"),
  b = n("534291"),
  g = n("49111"),
  v = n("782340"),
  x = n("380640");
let N = Object.freeze({
    shouldPreventNavigation: !1,
    onPreventNavigation: null,
    sidebarOpen: !0
  }),
  T = 1.4,
  j = 15,
  C = 2;

function E(e) {
  var t, n;
  let {
    section: s,
    setPreventNavigation: o,
    scrollerRef: r
  } = e;
  (0, a.default)({
    type: l.ImpressionTypes.PANE,
    name: null == s ? void 0 : s.impressionName,
    properties: null == s ? void 0 : s.impressionProperties
  });
  let c = null !== (t = null == s ? void 0 : s.element) && void 0 !== t ? t : g.NOOP_NULL,
    d = null !== (n = null == s ? void 0 : s.elementProps) && void 0 !== n ? n : {};
  return (0, i.jsx)(S.default, {
    section: s.section,
    children: (0, i.jsx)(c, {
      ...d,
      setPreventNavigation: o,
      refToScroller: r
    })
  })
}
class P extends s.PureComponent {
  componentDidMount() {
    this.getPredicateSections().forEach(e => {
      let {
        notice: t
      } = e;
      if (null == t) return;
      let {
        stores: n
      } = t;
      null != n && n.forEach(e => {
        e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e)
      })
    })
  }
  componentDidUpdate(e) {
    let {
      section: t
    } = e;
    t !== this.props.section && (this._intensity = T)
  }
  componentWillUnmount() {
    this._unmounted = !0, this._subscribedStores.forEach(e => e.removeChangeListener(this.handleNoticeStoreUpdate)), this.props.sections.forEach(e => {
      var t;
      return null === (t = e.onSettingsClose) || void 0 === t ? void 0 : t.call(e)
    })
  }
  getPredicateSections() {
    return this.props.sections.filter(e => null == e.predicate || e.predicate())
  }
  validNavigation() {
    var e;
    let {
      section: t
    } = this.props, n = this.getPredicateSections(), {
      notice: i
    } = null !== (e = n.find(e => t === e.section)) && void 0 !== e ? e : {};
    return null != i && i.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (f.ComponentDispatch.dispatch(g.ComponentActions.SHAKE_APP, {
      duration: 300,
      intensity: this._intensity
    }), this._intensity = Math.min(this._intensity + C, j), f.ComponentDispatch.dispatch(g.ComponentActions.EMPHASIZE_NOTICE), !1) : (this._intensity = T, !0)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: n
    } = this.props, s = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), l = null != t ? t : e[0].section;
    return (0, i.jsx)(d.default, {
      contentTypes: s,
      children: t => {
        let {
          visibleContent: s
        } = t;
        return (0, i.jsx)(r.TabBar, {
          selectedItem: l,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": n,
          children: e.map((e, t) => {
            switch (e.section) {
              case b.SectionTypes.HEADER:
                return (0, i.jsx)(r.TabBar.Header, {
                  children: e.label
                }, t);
              case b.SectionTypes.DIVIDER:
                return (0, i.jsx)(r.TabBar.Separator, {}, t);
              case b.SectionTypes.CUSTOM:
                var n;
                let o = null !== (n = e.element) && void 0 !== n ? n : g.NOOP_NULL;
                return (0, i.jsx)(o, {}, t);
              default:
                return this.renderSettingsSectionTabBarItem(e, l === e.section, s)
            }
          })
        })
      }
    })
  }
  renderNotice(e) {
    let {
      theme: t
    } = this.props;
    if (null == e || null == e.notice) return null;
    let {
      stores: n,
      element: s
    } = e.notice;
    return null == n || n.some(e => e.showNotice()) ? (0, i.jsx)(s, {
      theme: t
    }) : null
  }
  render() {
    var e;
    let {
      sidebarTheme: t,
      section: n,
      title: s,
      onClose: l,
      hideSidebar: o
    } = this.props, r = this.getPredicateSections(), a = r.find(e => e.section === n);
    if (null == a || null == n) return null;
    let d = null !== (e = "string" == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : s;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.AppPageTitle, {
        location: s,
        subsection: d
      }), (0, i.jsx)(b.default, {
        sidebarTheme: t,
        scrollerRef: this.scrollerRef,
        section: n,
        sidebar: this.renderSidebar(r),
        content: (0, i.jsx)(E, {
          section: a,
          setPreventNavigation: this.setPreventNavigation,
          scrollerRef: this.scrollerRef
        }),
        mobileSidebarOpen: this.state.sidebarOpen,
        hideSidebar: o,
        toggleSidebar: () => this.setState({
          sidebarOpen: !0
        }),
        contentType: a.type,
        notice: this.renderNotice(a),
        closeAction: null != l ? this.handleClose : void 0
      })]
    })
  }
  constructor(...e) {
    super(...e), this._unmounted = !1, this._intensity = T, this._subscribedStores = [], this.scrollerRef = s.createRef(), this.state = {
      ...N,
      sidebarOpen: this.props.section !== g.UserSettingsSections.SUBSCRIPTIONS && this.props.section !== g.UserSettingsSections.PROFILE_CUSTOMIZATION
    }, this.setPreventNavigation = (e, t) => {
      this.setState({
        shouldPreventNavigation: e,
        onPreventNavigation: t
      })
    }, this.handleSetSection = e => {
      let {
        onSetSection: t,
        sections: n
      } = this.props, {
        shouldPreventNavigation: i,
        onPreventNavigation: s
      } = this.state, l = () => {
        var i;
        null == t || t(e);
        let {
          notice: s
        } = null !== (i = n.find(t => e === t.section)) && void 0 !== i ? i : {}, l = null != s ? s.stores : null;
        null != l && l.forEach(e => {
          !this._subscribedStores.includes(e) && (e.addChangeListener(this.handleNoticeStoreUpdate), this._subscribedStores.push(e))
        }), this.setState({
          ...N,
          sidebarOpen: !1
        })
      };
      this.validNavigation() && !i && (l(), p.default.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), i && null != s && s(l)
    }, this.handleClose = () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }, this.handleNoticeStoreUpdate = () => {
      !this._unmounted && (this._intensity = T, this.forceUpdate())
    }, this.renderSettingsSectionTabBarItem = (e, t, n) => {
      let {
        section: s,
        label: l = null,
        ariaLabel: a,
        onClick: c,
        color: d,
        icon: f,
        className: p,
        newIndicator: S,
        newIndicatorDismissibleContentTypes: b,
        badgeCount: N
      } = e, T = null;
      s === g.UserSettingsSections.ACCOUNT && this.props.isEligibleForPomelo ? T = (0, i.jsx)(h.default, {
        color: o.default.colors.STATUS_WARNING.css
      }) : s === g.UserSettingsSections.INVENTORY && this.props.hasNewQuests ? T = (0, i.jsx)(m.TextBadge, {
        text: v.default.Messages.NEW,
        color: o.default.colors.BG_BRAND.css
      }) : null != e.decoration ? T = (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: e.decoration
      }) : null != n && (null == b ? void 0 : b.includes(n)) && !t ? T = null != S ? S : (0, i.jsx)(m.TextBadge, {
        text: v.default.Messages.NEW
      }) : null != f ? T = f : null != N && N > 0 && (T = (0, i.jsx)(m.NumberBadge, {
        count: N
      }));
      let j = s === g.UserSettingsSections.PREMIUM ? (0, i.jsx)(u.default, {
        label: l,
        isSelected: t,
        decoration: T
      }) : null == T ? l : (0, i.jsxs)("div", {
        className: x.tabBarItemContainer,
        children: [l, T]
      });
      return (0, i.jsx)(r.TabBar.Item, {
        color: d,
        id: s,
        onClick: c,
        className: p,
        "aria-label": a,
        children: j
      }, s)
    }
  }
}
var R = P