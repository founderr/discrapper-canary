"use strict";
n.r(t), n("47120");
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("761414"),
  o = n("590739"),
  u = n("792304"),
  d = n("319643"),
  c = n("481060"),
  f = n("873596"),
  h = n("72416"),
  m = n("476221"),
  C = n("981631"),
  p = n("854903");
let g = {
    [C.RTCConnectionQuality.UNKNOWN]: c.Tooltip.Colors.BLACK,
    [C.RTCConnectionQuality.BAD]: c.Tooltip.Colors.RED,
    [C.RTCConnectionQuality.AVERAGE]: c.Tooltip.Colors.YELLOW,
    [C.RTCConnectionQuality.FINE]: c.Tooltip.Colors.GREEN
  },
  E = {
    [C.ConnectionStatus.CONNECTED]: p.rtcConnectionStatusConnected,
    [C.ConnectionStatus.CONNECTING]: p.rtcConnectionStatusConnecting,
    [C.ConnectionStatus.ERROR]: p.rtcConnectionStatusError
  },
  S = {
    [C.RTCConnectionQuality.FINE]: p.rtcConnectionQualityFine,
    [C.RTCConnectionQuality.AVERAGE]: p.rtcConnectionQualityAverage,
    [C.RTCConnectionQuality.BAD]: p.rtcConnectionQualityBad,
    [C.RTCConnectionQuality.UNKNOWN]: null
  };
class _ extends a.PureComponent {
  renderPopoutTarget(e) {
    return (0, l.jsx)(c.Popout, {
      renderPopout: this.renderPopout,
      position: "top",
      children: e
    })
  }
  renderStatus() {
    let {
      statusTextClassName: e,
      hasVideo: t,
      state: n
    } = this.props, {
      connectionStatus: a,
      connectionStatusText: s
    } = m.default.getStatus(n, t);
    return this.renderPopoutTarget(t => {
      let {
        onClick: n
      } = t;
      return (0, l.jsx)(c.Button, {
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.NONE,
        className: i()(e, E[a]),
        onClick: n,
        children: s
      })
    })
  }
  render() {
    let e;
    let {
      quality: t,
      smallPing: n,
      lastPing: a,
      state: s,
      className: r,
      children: o
    } = this.props;
    return s === C.RTCConnectionStates.RTC_CONNECTED && (e = (0, l.jsx)(c.Tooltip, {
      text: t !== C.RTCConnectionQuality.UNKNOWN && null != a ? "".concat(a.toFixed(0), " ms") : null,
      color: g[t],
      children: e => (0, l.jsx)(I, {
        quality: t,
        smallPing: n,
        ...e
      })
    })), (0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: i()(p.rtcConnectionStatus, S[t], r),
        children: [e, (0, l.jsx)("div", {
          className: p.labelWrapper,
          children: this.renderStatus()
        })]
      }), o]
    })
  }
  constructor(...e) {
    var t, n, a;
    super(...e), t = this, n = "renderPopout", a = e => (0, l.jsx)(f.default, {
      channelId: this.props.channelId,
      ...e
    }), n in t ? Object.defineProperty(t, n, {
      value: a,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = a
  }
}

function I(e) {
  let {
    quality: t,
    smallPing: n,
    ...a
  } = e;
  if (!(0, c.useRedesignIconContext)().enabled) return (0, l.jsx)(h.default, {
    className: i()(p.ping, {
      [p.smallPing]: n
    }),
    foreground: p.pingForeground
  });
  {
    let e = {
      [C.RTCConnectionQuality.FINE]: u.ConnectionFineIcon,
      [C.RTCConnectionQuality.AVERAGE]: r.ConnectionAverageIcon,
      [C.RTCConnectionQuality.BAD]: o.ConnectionBadIcon,
      [C.RTCConnectionQuality.UNKNOWN]: d.ConnectionUnknownIcon
    } [t];
    return (0, l.jsx)(e, {
      className: i()(p.ping, {
        [p.smallPing]: n
      }),
      ...a
    })
  }
}
t.default = _