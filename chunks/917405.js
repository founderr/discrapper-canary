n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(481060),
  o = n(72416),
  u = n(476221),
  c = n(873596),
  d = n(423516),
  h = n(981631),
  g = n(202589);
let p = {
    [h.IE4.UNKNOWN]: a.Tooltip.Colors.BLACK,
    [h.IE4.BAD]: a.Tooltip.Colors.RED,
    [h.IE4.AVERAGE]: a.Tooltip.Colors.YELLOW,
    [h.IE4.FINE]: a.Tooltip.Colors.GREEN
  },
  m = {
    [h.QKv.CONNECTED]: g.rtcConnectionStatusConnected,
    [h.QKv.CONNECTING]: g.rtcConnectionStatusConnecting,
    [h.QKv.ERROR]: g.rtcConnectionStatusError
  },
  C = {
    [h.IE4.FINE]: g.rtcConnectionQualityFine,
    [h.IE4.AVERAGE]: g.rtcConnectionQualityAverage,
    [h.IE4.BAD]: g.rtcConnectionQualityBad,
    [h.IE4.UNKNOWN]: null
  };
class E extends i.PureComponent {
  renderPopoutTarget(e) {
    return (0, l.jsx)(a.Popout, {
      renderPopout: this.renderPopout,
      position: "top",
      children: e
    })
  }
  renderStatus() {
    let {
      hasVideo: e,
      state: t
    } = this.props, {
      connectionStatus: n,
      connectionStatusText: i
    } = u.Z.getStatus(t, e);
    return this.renderPopoutTarget(e => {
      let {
        onClick: t
      } = e;
      return (0, l.jsx)(a.Button, {
        look: a.Button.Looks.BLANK,
        size: a.Button.Sizes.NONE,
        onClick: t,
        children: (0, l.jsx)(d.Z, {
          text: i,
          className: m[n]
        })
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
    return s === h.hes.RTC_CONNECTED && (e = (0, l.jsx)(a.Tooltip, {
      text: t !== h.IE4.UNKNOWN && null != i ? "".concat(i.toFixed(0), " ms") : null,
      color: p[t],
      children: e => (0, l.jsx)(f, {
        quality: t,
        smallPing: n,
        ...e
      })
    })), (0, l.jsxs)("div", {
      children: [(0, l.jsxs)("div", {
        className: r()(g.rtcConnectionStatus, C[t], o),
        children: [e, (0, l.jsx)("div", {
          className: g.labelWrapper,
          children: this.renderStatus()
        })]
      }), u]
    })
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "renderPopout", i = e => (0, l.jsx)(c.Z, {
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

function f(e) {
  let {
    quality: t,
    smallPing: n,
    ...i
  } = e;
  if (!(0, a.useRedesignIconContext)().enabled) return (0, l.jsx)(o.Z, {
    className: r()(g.ping, {
      [g.smallPing]: n
    }),
    foreground: g.pingForeground
  });
  {
    let e = {
      [h.IE4.FINE]: a.ConnectionFineIcon,
      [h.IE4.AVERAGE]: a.ConnectionAverageIcon,
      [h.IE4.BAD]: a.ConnectionBadIcon,
      [h.IE4.UNKNOWN]: a.ConnectionUnknownIcon
    } [t];
    return (0, l.jsx)(e, {
      className: r()(g.ping, {
        [g.smallPing]: n
      }),
      ...i
    })
  }
}
t.Z = E