"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var i, a = n("470079"),
  l = n("392711"),
  s = n.n(l),
  o = n("699581"),
  r = n("374470"),
  d = n("902704"),
  u = n("846519"),
  c = n("13245"),
  f = n("671999"),
  h = n("358085"),
  p = n("998502"),
  m = n("145597");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = {
    x: 0,
    y: 0
  },
  S = !1;

function v(e) {
  let {
    clientX: t,
    clientY: n
  } = e;
  S = !0, E.x = t, E.y = n
}
let T = new Map;

function y(e, t) {
  if (null == t) T.delete(e), 0 === T.size && (window.removeEventListener("mousemove", v), S = !1);
  else {
    let n = T.get(e);
    if (null != n && (0, d.default)(n.zone, t.zone)) return;
    0 === T.size && window.addEventListener("mousemove", v), T.set(e, t)
  }
  h.isPlatformEmbedded && ((0, m.isOutOfProcess)() ? c.default.setClickZones(Array.from(T.values()).map(e => {
    let {
      zone: t
    } = e;
    return {
      name: t.name,
      left: t.left / window.innerWidth,
      top: t.top / window.innerHeight,
      right: t.right / window.innerWidth,
      bottom: t.bottom / window.innerHeight
    }
  })) : (p.default.requireModule("discord_overlay2").broadcastCommand({
    message: "set_click_zones",
    zones: Array.from(T.values()).map(e => {
      let {
        zone: t
      } = e;
      return t
    })
  }), function() {
    if (!I) p.default.requireModule("discord_overlay2").setClickZoneCallback((e, t, n) => {
      let i = T.get(e);
      null != i && (!S && (E.x = t, E.y = n), i.instance.click())
    }), I = !0
  }()))
}
let I = !1;
class N extends(i = a.PureComponent) {
  componentDidMount() {
    this.props.observe ? this.observeZone() : this.updateZone()
  }
  componentWillUnmount() {
    this.interval.stop(), y(this.zone, null)
  }
  componentDidUpdate(e) {
    let {
      observe: t
    } = this.props;
    t !== e.observe && (t ? this.observeZone() : this.interval.stop())
  }
  render() {
    return a.Children.only(this.props.children)
  }
  observeZone() {
    this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
  }
  click() {
    let e = (0, f.createMouseEvent)("click", E.x, E.y);
    (0, f.dispatchEventToPoint)(e, E.x, E.y)
  }
  constructor(...e) {
    super(...e), g(this, "zone", s().uniqueId("ClickArea")), g(this, "interval", new u.Interval), g(this, "updateZone", () => {
      let e = (0, o.findDOMNode)(this);
      if ((0, r.isElement)(e)) {
        let {
          left: t,
          top: n,
          right: i,
          bottom: a
        } = e.getBoundingClientRect();
        y(this.zone, {
          instance: this,
          zone: {
            name: this.zone,
            left: Math.ceil(t),
            top: Math.ceil(n),
            right: Math.ceil(i),
            bottom: Math.ceil(a)
          }
        })
      }
    })
  }
}
g(N, "defaultProps", {
  observe: !0,
  observeInterval: 1e3
})