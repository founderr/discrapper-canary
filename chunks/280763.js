"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("748780"),
  o = n("399606"),
  u = n("607070"),
  d = n("641051"),
  c = n("329461"),
  f = n("918373");
class h extends l.PureComponent {
  componentDidUpdate(e) {
    e.count < this.props.count && !this.props.reducedMotion && r.default.sequence([r.default.timing(this.animationScale, {
      toValue: 1.8,
      duration: 300
    }), r.default.timing(this.animationScale, {
      toValue: 1,
      duration: 200
    })]).start()
  }
  render() {
    let {
      count: e,
      className: t
    } = this.props;
    return 0 === e ? null : (0, a.jsx)(r.default.div, {
      className: i()(f.badge, t),
      style: {
        transform: [{
          scale: this.animationScale
        }]
      },
      children: e
    })
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "animationScale", a = new r.default.Value(1), n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}

function E(e) {
  let {
    className: t
  } = e, {
    showReminders: n
  } = d.default.useExperiment({
    location: "f79435_1"
  }, {
    autoTrackExposure: !1
  }), l = (0, o.useStateFromStores)([c.default], () => n ? c.default.getOverdueMessageReminderCount() : 0, [n]), s = (0, o.useStateFromStores)([u.default], () => u.default.useReducedMotion);
  return n ? (0, a.jsx)(h, {
    count: l,
    className: t,
    reducedMotion: s
  }) : null
}