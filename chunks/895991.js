n.d(t, {
  Z: function() {
    return C
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(481060),
  o = n(570140),
  c = n(150063),
  u = n(274616),
  d = n(827837),
  E = n(410575),
  h = n(3570),
  _ = n(237919),
  I = n(957657),
  m = n(665307),
  T = n(530151),
  g = n(981631),
  p = n(186901),
  N = n(916518);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class C extends i.PureComponent {
  componentDidMount() {
    c.Y(g.Z5c.APPLICATION_LIBRARY), (0, h.T)(p.jE.LIBRARY), o.Z.wait(() => (0, u.o)()), (0, d.N)(), null != this._scrollToOnMount && null != this._scrollerRef.current && this.scrollToRow(this._scrollToOnMount, this._scrollToPadding)
  }
  renderToolbar() {
    return (0, s.jsx)(_.Z, {})
  }
  render() {
    let {
      includeUpdatesInScroller: e
    } = this.state, t = (0, s.jsx)("div", {
      children: (0, s.jsx)(E.Z, {
        section: g.jXE.LIBRARY_INSTALL_MODULE,
        children: (0, s.jsx)(T.Z, {
          onHeightTallerThanHalfViewportChange: this.handleHeightTallerThanHalfViewportChange
        })
      })
    });
    return (0, s.jsxs)(i.Fragment, {
      children: [(0, s.jsx)(I.Z, {
        currentRoute: g.Z5c.APPLICATION_LIBRARY,
        renderToolbar: this.renderToolbar
      }), e ? null : t, (0, s.jsxs)(r.AdvancedScrollerAuto, {
        className: a()(N.container, N.scroller),
        ref: this._scrollerRef,
        children: [e ? t : null, (0, s.jsx)(E.Z, {
          section: g.jXE.LIBRARY_APPLICATION_LIST,
          children: (0, s.jsx)(m.Z, {
            stickyHeader: !e,
            scrollToRow: this.scrollToRow
          })
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "_scrollerRef", i.createRef()), S(this, "_scrollToOnMount", void 0), S(this, "_scrollToPadding", 0), S(this, "state", {
      includeUpdatesInScroller: !1
    }), S(this, "handleHeightTallerThanHalfViewportChange", e => {
      this.setState({
        includeUpdatesInScroller: e
      })
    }), S(this, "scrollToRow", (e, t) => {
      let n = this._scrollerRef.current;
      null != n ? (e.focus(), n.scrollIntoViewRect({
        start: t,
        end: t
      }), this._scrollToOnMount = null) : (this._scrollToOnMount = e, this._scrollToPadding = t)
    })
  }
}