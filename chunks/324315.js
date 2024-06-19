n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(481060),
  o = n(873596),
  u = n(72416),
  c = n(476221),
  d = n(981631),
  h = n(457789);
let g = {
    [d.IE4.UNKNOWN]: a.Tooltip.Colors.BLACK,
    [d.IE4.BAD]: a.Tooltip.Colors.RED,
    [d.IE4.AVERAGE]: a.Tooltip.Colors.YELLOW,
    [d.IE4.FINE]: a.Tooltip.Colors.GREEN
  },
  p = {
    [d.QKv.CONNECTED]: h.rtcConnectionStatusConnected,
    [d.QKv.CONNECTING]: h.rtcConnectionStatusConnecting,
    [d.QKv.ERROR]: h.rtcConnectionStatusError
  },
  m = {
    [d.IE4.FINE]: h.rtcConnectionQualityFine,
    [d.IE4.AVERAGE]: h.rtcConnectionQualityAverage,
    [d.IE4.BAD]: h.rtcConnectionQualityBad,
    [d.IE4.UNKNOWN]: null
  };
class C extends i.PureComponent {
  renderPopoutTarget(e) {
    return (0, l.jsx)(a.Popout, {
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
      connectionStatus: i,
      connectionStatusText: s
    } = c.Z.getStatus(n, t);
    return this.renderPopoutTarget(t => {
      let {
        onClick: n
      } = t;
      return (0, l.jsx)(a.Button, {
        look: a.Button.Looks.BLANK,
        size: a.Button.Sizes.NONE,
        className: r()(e, p[i]),
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
      lastPing: i,
      state: s,
      className: o,
      children: u
    } = this.props;
    return s === d.hes.RTC_CONNECTED && (e = (0, l.jsx)(a.Tooltip, {
      text: t !== d.IE4.UNKNOWN && null != i ? "".concat(i.toFixed(0), " ms") : null,
      color: g[t],
      children: e => (0, l.jsx)(E, {
        quality: t,
        smallPing: n,
        ...e
      })
    })), (0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: r()(h.rtcConnectionStatus, m[t], o),
        children: [e, (0, l.jsx)("div", {
          className: h.labelWrapper,
          children: this.renderStatus()
        })]
      }), u]
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "renderPopout", i = e => (0, l.jsx)(o.Z, {
      channelId: this.props.channelId,
      ...e
    }), n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}

function E(e) {
  let {
    quality: t,
    smallPing: n,
    ...i
  } = e;
  if (!(0, a.useRedesignIconContext)().enabled) return (0, l.jsx)(u.Z, {
    className: r()(h.ping, {
      [h.smallPing]: n
    }),
    foreground: h.pingForeground
  });
  {
    let e = {
      [d.IE4.FINE]: a.ConnectionFineIcon,
      [d.IE4.AVERAGE]: a.ConnectionAverageIcon,
      [d.IE4.BAD]: a.ConnectionBadIcon,
      [d.IE4.UNKNOWN]: a.ConnectionUnknownIcon
    } [t];
    return (0, l.jsx)(e, {
      className: r()(h.ping, {
        [h.smallPing]: n
      }),
      ...i
    })
  }
}
t.Z = C