n.d(t, {
  Z: function() {
    return I
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
  l = n(120356),
  a = n.n(l),
  r = n(748780),
  o = n(399606),
  c = n(607070),
  u = n(641051),
  d = n(329461),
  E = n(495295);
class _ extends i.PureComponent {
  componentDidUpdate(e) {
    e.count < this.props.count && !this.props.reducedMotion && r.Z.sequence([r.Z.timing(this.animationScale, {
      toValue: 1.8,
      duration: 300
    }), r.Z.timing(this.animationScale, {
      toValue: 1,
      duration: 200
    })]).start()
  }
  render() {
    let {
      count: e,
      className: t
    } = this.props;
    return 0 === e ? null : (0, s.jsx)(r.Z.div, {
      className: a()(E.badge, t),
      style: {
        transform: [{
          scale: this.animationScale
        }]
      },
      children: e
    })
  }
  constructor(...e) {
    var t, n, s;
    super(...e), t = this, n = "animationScale", s = new r.Z.Value(1), n in t ? Object.defineProperty(t, n, {
      value: s,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = s
  }
}

function I(e) {
  let {
    className: t
  } = e, {
    showReminders: n
  } = u.Z.useExperiment({
    location: "f79435_1"
  }, {
    autoTrackExposure: !1
  }), i = (0, o.e7)([d.Z], () => n ? d.Z.getOverdueMessageReminderCount() : 0, [n]), l = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
  return n ? (0, s.jsx)(_, {
    count: i,
    className: t,
    reducedMotion: l
  }) : null
}