"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var l, a = n("37983"),
  s = n("884691"),
  i = n("917351"),
  r = n.n(i),
  o = n("118810"),
  u = n("77078"),
  d = n("272030"),
  c = n("699473"),
  f = n("42203"),
  h = n("782340"),
  m = n("139868");
l = class extends s.PureComponent {
  render() {
    let {
      result: e,
      listItemProps: t,
      searchOffset: n,
      index: l,
      totalResults: s
    } = this.props, i = r.find(e, e => e.isSearchHit);
    if (null == i) return null;
    let o = f.default.getChannel(i.channel_id);
    if (null == o) return null;
    let d = "search-result-".concat(i.id);
    return (0, a.jsx)(u.FocusRing, {
      ringTarget: this.hitRef,
      ringClassName: m.searchResultFocusRing,
      offset: 4,
      children: (0, a.jsxs)("li", {
        className: m.container,
        ...t,
        "aria-posinset": 1 + n + l,
        "aria-setsize": s,
        "aria-labelledby": d,
        children: [(0, a.jsx)(u.Clickable, {
          tabIndex: -1,
          onClick: this.handleMessageClick,
          innerRef: this.containerRef,
          className: m.searchResult,
          focusProps: {
            enabled: !1
          },
          children: (0, a.jsx)("div", {
            ref: this.hitRef,
            className: m.message,
            children: (0, a.jsx)(c.default, {
              id: d,
              message: i,
              channel: o,
              onContextMenu: e => this.handleContextMenu(e, i),
              animateAvatar: !1,
              subscribeToComponentDispatch: !1,
              trackAnnouncementViews: !0
            })
          }, i.id)
        }), (0, a.jsx)("div", {
          className: m.buttonsContainer,
          "aria-hidden": !0,
          children: (0, a.jsx)(u.Clickable, {
            className: m.button,
            onClick: this.jumpTo,
            children: h.default.Messages.JUMP
          })
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.containerRef = s.createRef(), this.hitRef = s.createRef(), this.handleContextMenu = (e, t) => {
      let l = f.default.getChannel(t.channel_id);
      null != l && (e.stopPropagation(), (0, d.openContextMenuLazy)(e, async () => {
        let {
          default: e
        } = await n.el("13406").then(n.bind(n, "13406"));
        return n => (0, a.jsx)(e, {
          ...n,
          message: t,
          channel: l
        })
      }))
    }, this.jumpTo = e => {
      null != e && (e.preventDefault(), e.stopPropagation());
      let {
        onJump: t,
        result: n
      } = this.props, l = n.find(e => e.isSearchHit);
      null != l && t(l)
    }, this.handleMessageClick = e => {
      if (function(e, t) {
          var n;
          let l = null === (n = window) || void 0 === n ? void 0 : n.getSelection();
          if (null != l && !l.isCollapsed) return !0;
          if (null == e || null == t) return !1;
          for (;
            (0, o.isElement)(e) && e !== t;) {
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
    }
  }
}