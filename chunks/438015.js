"use strict";
n(47120);
var i = n(735250),
  s = n(470079),
  l = n(748780),
  o = n(13245),
  a = n(454902),
  r = n(692546),
  c = n(981631),
  d = n(233460);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends s.Component {
  componentWillAppear(e) {
    let {
      index: t
    } = this.props;
    e(), this.animateTo(t)
  }
  componentWillEnter(e) {
    let {
      index: t
    } = this.props;
    e(), this.animateTo(t)
  }
  componentWillLeave(e) {
    let {
      index: t
    } = this.props;
    this.animateTo(t, e)
  }
  componentDidUpdate(e) {
    let {
      index: t
    } = this.props;
    e.index !== t && this.animateTo(t)
  }
  animateTo(e, t) {
    let n, i, s, l;
    let {
      opacity: o,
      scale: a,
      translateX: r,
      translateY: c
    } = this;
    switch (e) {
      case 0:
        i = 0, s = 1, l = 1;
        break;
      case 1:
        i = .3, s = .6, l = .98;
        break;
      case 2:
        i = .6, s = .3, l = .95;
        break;
      default:
        i = .6, s = 0, l = .93
    }
    null != t ? (0 === e ? l = 1.1 : i = 1.3, s = 0, n = t) : n = this.handleAnimationEnd, r.setValue(1), c.setValue(i), a.setValue(l), o.setValue(s), n()
  }
  getStyle() {
    let e, t, n, i, s;
    let {
      opacity: l,
      scale: o,
      translateX: a,
      translateY: r,
      props: {
        position: d,
        zIndex: u
      }
    } = this;
    switch (d) {
      case c._vf.TOP_LEFT:
      case c._vf.BOTTOM_LEFT:
        e = "-100%", t = 0;
        break;
      default:
        n = 0, e = "100%"
    }
    switch (d) {
      case c._vf.BOTTOM_LEFT:
      case c._vf.BOTTOM_RIGHT:
        i = 0;
        break;
      default:
        s = 0
    }
    return {
      left: t,
      right: n,
      bottom: i,
      top: s,
      zIndex: u,
      opacity: l,
      transform: [{
        translateX: a.interpolate({
          inputRange: [0, 1],
          outputRange: [e, "0%"]
        })
      }, {
        translateY: r.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "20px"]
        })
      }, {
        scale: o
      }]
    }
  }
  render() {
    let {
      props: {
        locked: e,
        index: t,
        notification: {
          props: {
            onNotificationShow: n,
            onDismissClick: s,
            onNotificationClick: o,
            onConfirmClick: c,
            onCancelClick: u,
            ...h
          }
        }
      },
      state: {
        animatedIn: p
      }
    } = this, f = (0, i.jsx)(l.Z.div, {
      className: d.animationContainer,
      style: this.getStyle(),
      children: (0, i.jsx)(a.ZP, {
        ...h,
        onNotificationShow: p && 0 === t ? this.handleNotificationShow : null,
        onDismissClick: this.handleDismissClick,
        onNotificationClick: null != o ? this.handleNotificationClick : null,
        onConfirmClick: null != c ? this.handleConfirmClick : null,
        onCancelClick: null != u ? this.handleCancelClick : null,
        expand: !e && 0 === t,
        disabled: 0 !== t
      })
    });
    return 0 === t ? (0, i.jsx)(r.Z, {
      observeInterval: 200,
      children: f
    }) : f
  }
  constructor(...e) {
    super(...e), u(this, "translateX", new l.Z.Value(0)), u(this, "translateY", new l.Z.Value(0)), u(this, "scale", new l.Z.Value(1)), u(this, "opacity", new l.Z.Value(1)), u(this, "state", {
      animatedIn: !1
    }), u(this, "handleNotificationShow", () => {
      let {
        id: e,
        props: {
          onNotificationShow: t
        }
      } = this.props.notification;
      t(e)
    }), u(this, "handleDismissClick", e => {
      let {
        id: t,
        props: {
          onDismissClick: n
        }
      } = this.props.notification;
      o.Z.updateNotificationStatus(t), null != n && n(e, t)
    }), u(this, "handleNotificationClick", e => {
      let {
        id: t,
        props: {
          onNotificationClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), u(this, "handleConfirmClick", e => {
      let {
        id: t,
        props: {
          onConfirmClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), u(this, "handleCancelClick", e => {
      let {
        id: t,
        props: {
          onCancelClick: n
        }
      } = this.props.notification;
      null != n && n(e, t)
    }), u(this, "handleAnimationEnd", () => {
      let {
        animatedIn: e
      } = this.state;
      !e && this.setState({
        animatedIn: !0
      })
    })
  }
}
t.Z = h