n.d(t, {
  $x: function() {
    return j
  },
  d7: function() {
    return T
  },
  w6: function() {
    return C
  }
}), n(653041), n(390547), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(990547),
  r = n(692547),
  o = n(481060),
  a = n(213609),
  c = n(252618),
  d = n(243778),
  u = n(495065),
  h = n(126848),
  m = n(585483),
  p = n(960048),
  b = n(410575),
  f = n(493544),
  S = n(981631),
  x = n(689938),
  v = n(44812);

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = Object.freeze({
    shouldPreventNavigation: !1,
    onPreventNavigation: null,
    sidebarOpen: !0
  }),
  j = 1.4,
  C = 15,
  T = 2;

function E(e) {
  var t, n;
  let {
    section: s,
    setPreventNavigation: r,
    scrollerRef: o
  } = e;
  (0, a.Z)({
    type: l.ImpressionTypes.PANE,
    name: null == s ? void 0 : s.impressionName,
    properties: null == s ? void 0 : s.impressionProperties
  });
  let c = null !== (t = null == s ? void 0 : s.element) && void 0 !== t ? t : S.VqG,
    d = null !== (n = null == s ? void 0 : s.elementProps) && void 0 !== n ? n : {};
  return (0, i.jsx)(b.Z, {
    section: s.section,
    children: (0, i.jsx)(c, {
      ...d,
      setPreventNavigation: r,
      refToScroller: o
    })
  })
}
class I extends s.PureComponent {
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
    t !== this.props.section && (this._intensity = j)
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
    } = this.props, {
      notice: n
    } = null !== (e = this.getPredicateSections().find(e => t === e.section)) && void 0 !== e ? e : {};
    return null != n && n.stores.some(e => e.showNotice() && !(null != e.canCloseEarly && e.canCloseEarly())) ? (m.S.dispatch(S.CkL.SHAKE_APP, {
      duration: 300,
      intensity: this._intensity
    }), this._intensity = Math.min(this._intensity + T, C), m.S.dispatch(S.CkL.EMPHASIZE_NOTICE), !1) : (this._intensity = j, !0)
  }
  renderSidebar(e) {
    let {
      section: t,
      title: n
    } = this.props, s = e.flatMap(e => e.newIndicatorDismissibleContentTypes).filter(e => null != e), l = null != t ? t : e[0].section;
    return (0, i.jsx)(d.Z, {
      contentTypes: s,
      children: t => {
        let {
          visibleContent: s
        } = t;
        return (0, i.jsx)(o.TabBar, {
          selectedItem: l,
          onItemSelect: this.handleSetSection,
          orientation: "vertical",
          "aria-label": n,
          children: e.map((e, t) => {
            if (null != e.tabPredicate && !e.tabPredicate()) return null;
            switch (e.section) {
              case f.ID.HEADER:
                return (0, i.jsx)(o.TabBar.Header, {
                  children: e.label
                }, t);
              case f.ID.DIVIDER:
                return (0, i.jsx)(o.TabBar.Separator, {}, t);
              case f.ID.CUSTOM:
                var n;
                let r = null !== (n = e.element) && void 0 !== n ? n : S.VqG;
                return (0, i.jsx)(r, {}, t);
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
      hideSidebar: r
    } = this.props, o = this.getPredicateSections(), a = o.find(e => e.section === n);
    if (null == a || null == n) return null;
    let d = null !== (e = "string" == typeof a.label ? a.label : a.ariaLabel) && void 0 !== e ? e : s;
    return (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(c.yY, {
        location: s,
        subsection: d
      }), (0, i.jsx)(f.ZP, {
        sidebarTheme: t,
        scrollerRef: this.scrollerRef,
        section: n,
        sidebar: this.renderSidebar(o),
        content: (0, i.jsx)(E, {
          section: a,
          setPreventNavigation: this.setPreventNavigation,
          scrollerRef: this.scrollerRef
        }),
        mobileSidebarOpen: this.state.sidebarOpen,
        hideSidebar: r,
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
    super(...e), g(this, "_unmounted", !1), g(this, "_intensity", j), g(this, "_subscribedStores", []), g(this, "scrollerRef", s.createRef()), g(this, "state", {
      ...N,
      sidebarOpen: this.props.section !== S.oAB.SUBSCRIPTIONS && this.props.section !== S.oAB.PROFILE_CUSTOMIZATION
    }), g(this, "setPreventNavigation", (e, t) => {
      this.setState({
        shouldPreventNavigation: e,
        onPreventNavigation: t
      })
    }), g(this, "handleSetSection", e => {
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
      this.validNavigation() && !i && (l(), p.Z.addBreadcrumb({
        category: "settings",
        message: "Set section: ".concat(e)
      })), i && null != s && s(l)
    }), g(this, "handleClose", () => {
      if (this.validNavigation()) {
        let {
          onClose: e
        } = this.props;
        null == e || e()
      }
    }), g(this, "handleNoticeStoreUpdate", () => {
      if (!this._unmounted) this._intensity = j, this.forceUpdate()
    }), g(this, "renderSettingsSectionTabBarItem", (e, t, n) => {
      let {
        section: s,
        label: l = null,
        ariaLabel: a,
        onClick: c,
        color: d,
        icon: m,
        className: p,
        newIndicator: b,
        newIndicatorDismissibleContentTypes: f,
        badgeCount: g,
        searchFilterCount: N
      } = e, j = null;
      null != N && N > 0 ? j = (0, i.jsx)(o.NumberBadge, {
        count: N,
        disableColor: !0,
        className: v.searchFilterCount
      }) : s === S.oAB.ACCOUNT && this.props.isEligibleForPomelo ? j = (0, i.jsx)(o.CircleExclamationPointIcon, {
        size: "custom",
        width: 20,
        height: 20,
        color: r.Z.colors.STATUS_WARNING.css
      }) : s === S.oAB.INVENTORY && null != this.props.questsForBadge && this.props.questsForBadge.length > 0 ? j = (0, i.jsx)(u.R, {
        quests: this.props.questsForBadge
      }) : null != e.decoration ? j = (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: e.decoration
      }) : null != n && (null == f ? void 0 : f.includes(n)) && !t ? j = null != b ? b : (0, i.jsx)(o.TextBadge, {
        text: x.Z.Messages.NEW
      }) : null != m ? j = m : null != g && g > 0 && (j = (0, i.jsx)(o.NumberBadge, {
        count: g
      }));
      let C = s === S.oAB.PREMIUM ? (0, i.jsx)(h.Z, {
        label: l,
        isSelected: t,
        decoration: j
      }) : null == j ? l : (0, i.jsxs)("div", {
        className: v.tabBarItemContainer,
        children: [l, j]
      });
      return (0, i.jsx)(o.TabBar.Item, {
        color: d,
        id: s,
        onClick: c,
        className: p,
        "aria-label": a,
        children: C
      }, s)
    })
  }
}
t.ZP = I