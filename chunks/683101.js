n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n.n(s),
  r = n(374470),
  o = n(481060),
  c = n(239091),
  u = n(294218),
  d = n(592125),
  h = n(689938),
  m = n(932688);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends i.PureComponent {
  render() {
    let {
      result: e,
      listItemProps: t,
      searchOffset: n,
      index: i,
      totalResults: s
    } = this.props, r = a().find(e, e => e.isSearchHit);
    if (null == r) return null;
    let c = d.Z.getChannel(r.channel_id);
    if (null == c) return null;
    let p = "search-result-".concat(r.id);
    return (0, l.jsx)(o.FocusRing, {
      ringTarget: this.hitRef,
      ringClassName: m.__invalid_searchResultFocusRing,
      offset: 4,
      children: (0, l.jsxs)("li", {
        className: m.container,
        ...t,
        "aria-posinset": 1 + n + i,
        "aria-setsize": s,
        "aria-labelledby": p,
        children: [(0, l.jsx)(o.Clickable, {
          tabIndex: -1,
          onClick: this.handleMessageClick,
          innerRef: this.containerRef,
          className: m.searchResult,
          focusProps: {
            enabled: !1
          },
          children: (0, l.jsx)("div", {
            ref: this.hitRef,
            className: m.message,
            children: (0, l.jsx)(u.Z, {
              id: p,
              message: r,
              channel: c,
              onContextMenu: e => this.handleContextMenu(e, r),
              animateAvatar: !1,
              subscribeToComponentDispatch: !1,
              trackAnnouncementViews: !0
            })
          }, r.id)
        }), (0, l.jsx)("div", {
          className: m.buttonsContainer,
          "aria-hidden": !0,
          children: (0, l.jsx)(o.Clickable, {
            className: m.button,
            onClick: this.jumpTo,
            children: h.Z.Messages.JUMP
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "containerRef", i.createRef()), p(this, "hitRef", i.createRef()), p(this, "handleContextMenu", (e, t) => {
      let i = d.Z.getChannel(t.channel_id);
      if (null != i) e.stopPropagation(), (0, c.jW)(e, async () => {
        let {
          default: e
        } = await n.e("53809").then(n.bind(n, 858341));
        return n => (0, l.jsx)(e, {
          ...n,
          message: t,
          channel: i
        })
      })
    }), p(this, "jumpTo", e => {
      null != e && (e.preventDefault(), e.stopPropagation());
      let {
        onJump: t,
        result: n
      } = this.props, l = n.find(e => e.isSearchHit);
      null != l && t(l)
    }), p(this, "handleMessageClick", e => {
      if (function(e, t) {
          var n;
          let l = null === (n = window) || void 0 === n ? void 0 : n.getSelection();
          if (null != l && !l.isCollapsed) return !0;
          if (null == e || null == t) return !1;
          for (;
            (0, r.k)(e) && e !== t;) {
            ;
            let {
              tagName: t
            } = e;
            if ("A" === t || "IMG" === t || "BUTTON" === t) return !0;
            e = e.parentNode
          }
          return !1
        }(e.target, this.containerRef.current)) {
        e.stopPropagation();
        return
      }
      this.jumpTo(e)
    })
  }
}