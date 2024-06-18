"use strict";
n(47120);
var i, s = n(735250),
  l = n(470079),
  o = n(120356),
  a = n.n(o),
  r = n(442837),
  c = n(416568),
  d = n(914010),
  u = n(583883),
  h = n(547881),
  p = n(178528),
  f = n(669083),
  E = n(483962),
  g = n(711553),
  m = n(689938),
  Z = n(974285);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function S(e) {
  let {
    closePopout: t
  } = e;
  return (0, s.jsx)(f.Z, {
    onClose: t
  })
}
class _ extends(i = l.PureComponent) {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n
    } = this.props, i = null != e ? (0, s.jsx)(p.Z, {
      guildId: e,
      onDragStart: this.onDragStart
    }, e) : (0, s.jsx)(g.Z, {
      title: m.Z.Messages.DIRECT_MESSAGES,
      renderSettings: S,
      onDragStart: this.onDragStart,
      children: (0, s.jsx)(E.Z, {})
    }), l = n ? "div" : h.ZP;
    return (0, s.jsxs)(l, {
      className: a()(Z.base, {
        [Z.widget]: !n
      }),
      children: [(0, s.jsx)(c.Z, {
        isOverlay: !0,
        disableAppDownload: !0,
        isVisible: !t
      }), i]
    })
  }
  constructor(...e) {
    super(...e), I(this, "onDragStart", e => {
      let {
        dragStart: t
      } = this.props;
      t(u.B.MOVE, e.clientX, e.clientY)
    })
  }
}
I(_, "defaultProps", {
  contained: !1
}), t.Z = r.ZP.connectStores([d.Z], () => ({
  selectedGuildId: d.Z.getGuildId()
}))(_)