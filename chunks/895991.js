"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("481060"),
  o = n("570140"),
  u = n("150063"),
  d = n("274616"),
  c = n("827837"),
  f = n("410575"),
  E = n("3570"),
  C = n("237919"),
  h = n("957657"),
  _ = n("665307"),
  S = n("530151"),
  m = n("981631"),
  p = n("186901"),
  I = n("47789");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class T extends s.PureComponent {
  componentDidMount() {
    u.setHomeLink(m.Routes.APPLICATION_LIBRARY), (0, E.deepLinkRouteIfLanded)(p.RPCDeepLinks.LIBRARY), o.default.wait(() => (0, d.fetchBranches)()), (0, c.fetchActivityStatistics)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
  }
  renderToolbar() {
    return (0, a.jsx)(C.default, {})
  }
  render() {
    let {
      includeUpdatesInScroller: e
    } = this.state, t = (0, a.jsx)("div", {
      children: (0, a.jsx)(f.default, {
        section: m.AnalyticsSections.LIBRARY_INSTALL_MODULE,
        children: (0, a.jsx)(S.default, {
          onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
        })
      })
    });
    return (0, a.jsxs)(s.Fragment, {
      children: [(0, a.jsx)(h.default, {
        currentRoute: m.Routes.APPLICATION_LIBRARY,
        renderToolbar: this.renderToolbar
      }), e ? null : t, (0, a.jsxs)(r.AdvancedScrollerAuto, {
        className: i()(I.container, I.scroller),
        ref: this._scrollerRef,
        children: [e ? t : null, (0, a.jsx)(f.default, {
          section: m.AnalyticsSections.LIBRARY_APPLICATION_LIST,
          children: (0, a.jsx)(_.default, {
            stickyHeader: !e,
            scrollToRow: this.scrollToRow
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), g(this, "_scrollerRef", s.createRef()), g(this, "_scrollToOnMount", void 0), g(this, "_scrollToPadding", 0), g(this, "state", {
      includeUpdatesInScroller: !1
    }), g(this, "handleHeightTallerThanHalfViewportChange", e => {
      this.setState({
        includeUpdatesInScroller: e
      })
    }), g(this, "scrollToRow", (e, t) => {
      let n = this._scrollerRef.current;
      null != n ? (e.focus(), n.scrollIntoViewRect({
        start: t,
        end: t
      }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
    })
  }
}