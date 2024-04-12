"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("481060"),
  o = a("570140"),
  u = a("150063"),
  d = a("274616"),
  c = a("827837"),
  f = a("410575"),
  E = a("3570"),
  h = a("237919"),
  _ = a("957657"),
  C = a("665307"),
  m = a("530151"),
  S = a("981631"),
  p = a("186901"),
  I = a("872592");

function T(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e
}
class g extends s.PureComponent {
  componentDidMount() {
    u.setHomeLink(S.Routes.APPLICATION_LIBRARY), (0, E.deepLinkRouteIfLanded)(p.RPCDeepLinks.LIBRARY), o.default.wait(() => (0, d.fetchBranches)()), (0, c.fetchActivityStatistics)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
  }
  renderToolbar() {
    return (0, n.jsx)(h.default, {})
  }
  render() {
    let {
      includeUpdatesInScroller: e
    } = this.state, t = (0, n.jsx)("div", {
      children: (0, n.jsx)(f.default, {
        section: S.AnalyticsSections.LIBRARY_INSTALL_MODULE,
        children: (0, n.jsx)(m.default, {
          onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
        })
      })
    });
    return (0, n.jsxs)(s.Fragment, {
      children: [(0, n.jsx)(_.default, {
        currentRoute: S.Routes.APPLICATION_LIBRARY,
        renderToolbar: this.renderToolbar
      }), e ? null : t, (0, n.jsxs)(r.AdvancedScrollerAuto, {
        className: i()(I.container, I.scroller),
        ref: this._scrollerRef,
        children: [e ? t : null, (0, n.jsx)(f.default, {
          section: S.AnalyticsSections.LIBRARY_APPLICATION_LIST,
          children: (0, n.jsx)(C.default, {
            stickyHeader: !e,
            scrollToRow: this.scrollToRow
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), T(this, "_scrollerRef", s.createRef()), T(this, "_scrollToOnMount", void 0), T(this, "_scrollToPadding", 0), T(this, "state", {
      includeUpdatesInScroller: !1
    }), T(this, "handleHeightTallerThanHalfViewportChange", e => {
      this.setState({
        includeUpdatesInScroller: e
      })
    }), T(this, "scrollToRow", (e, t) => {
      let a = this._scrollerRef.current;
      null != a ? (e.focus(), a.scrollIntoViewRect({
        start: t,
        end: t
      }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
    })
  }
}