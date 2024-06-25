n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(46973),
  o = n(481060),
  u = n(304680),
  c = n(706619),
  d = n(695346),
  h = n(131951),
  p = n(626135),
  g = n(572004),
  m = n(63063),
  C = n(476221),
  E = n(981631),
  f = n(65154),
  _ = n(689938),
  I = n(755672);
let N = () => {
  h.Z.getMediaEngine().once(a.aB.ConnectionStats, e => {
    let t = Object.values(f.Yn).map(t => {
      let n = e.filter(e => {
        let {
          connection: n
        } = e;
        return n.context === t
      }).map((e, n) => {
        let l = e.stats;
        return l.context = t, l.index = n, l
      });
      for (let e of n) {
        var l;
        (null == e ? void 0 : null === (l = e.transport) || void 0 === l ? void 0 : l.localAddress) != null && (e.transport.localAddress = "(redacted)")
      }
      return n
    }).filter(e => e.length > 0);
    (0, g.JG)(JSON.stringify(t, null, 2)), (0, o.showToast)((0, o.createToast)(_.Z.Messages.COPIED, o.ToastType.SUCCESS))
  })
};
t.Z = function(e) {
  (0, i.useEffect)(() => {
    p.default.track(E.rMx.OPEN_POPOUT, {
      type: "RTC Connection"
    })
  }, []);
  let t = (0, i.useCallback)(() => {
      let {
        closePopout: t
      } = e;
      null != t && t(), u.bA()
    }, [e]),
    n = (0, i.useCallback)(() => {
      let {
        hostname: t,
        averagePing: n,
        lastPing: s,
        outboundLossRate: a
      } = e, o = d.Sb.getSetting();
      return (0, l.jsxs)(i.Fragment, {
        children: [o && (0, l.jsxs)("div", {
          children: [(0, l.jsx)("div", {
            className: I.graphContainer,
            children: (0, l.jsx)(c.Z, {
              dataPoints: e.pings,
              width: 258,
              height: 80
            })
          }), (0, l.jsx)("div", {
            className: I.popoutText,
            children: (0, l.jsx)("strong", {
              children: C.Z.getShortHostname(t)
            })
          })]
        }), (0, l.jsx)("div", {
          className: I.popoutText,
          children: _.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_AVERAGE_PING.format({
            averagePing: n.toFixed(0)
          })
        }), null != s ? (0, l.jsx)("div", {
          className: I.popoutText,
          children: _.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LAST_PING.format({
            lastPing: s.toFixed(0)
          })
        }) : null, null != a ? (0, l.jsx)("div", {
          className: I.popoutText,
          children: _.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_LOSS_VALUE.format({
            outboundLossRate: a.toFixed(1)
          })
        }) : null, (0, l.jsxs)("div", {
          className: r()(I.popoutText, I.popoutTextDetails),
          children: [null == a ? _.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS.format({
            badPing: 250
          }) : null, null != a ? _.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTED_DETAILS_WITH_LOSS.format({
            badPing: 250,
            badLossRate: 10
          }) : null]
        })]
      })
    }, [e]),
    {
      connectionState: s,
      connectionTypeText: a
    } = e,
    g = d.Sb.getSetting(),
    Z = {
      [E.hes.AWAITING_ENDPOINT]: _.Z.Messages.RTC_CONNECTION_STATE_AWAITING_ENDPOINT.format({
        url: E.yXt.STATUS
      }),
      [E.hes.CONNECTING]: _.Z.Messages.RTC_CONNECTION_STATE_CONNECTING,
      [E.hes.AUTHENTICATING]: _.Z.Messages.RTC_CONNECTION_STATE_AUTHENTICATING,
      [E.hes.DISCONNECTED]: _.Z.Messages.RTC_CONNECTION_STATE_DISCONNECTED,
      [E.hes.RTC_CONNECTING]: _.Z.Messages.RTC_CONNECTION_STATE_RTC_CONNECTING,
      [E.hes.ICE_CHECKING]: _.Z.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
        url: m.Z.getArticleURL(E.BhN.VOICE_CONNECTION_ERRORS)
      }),
      [E.hes.DTLS_CONNECTING]: _.Z.Messages.RTC_CONNECTION_STATE_ICE_CHECKING.format({
        url: m.Z.getArticleURL(E.BhN.VOICE_CONNECTION_ERRORS)
      }),
      [E.hes.RTC_CONNECTED]: n,
      [E.hes.NO_ROUTE]: _.Z.Messages.RTC_CONNECTION_STATE_NO_ROUTE.format({
        url: m.Z.getArticleURL(E.BhN.VOICE_CONNECTION_ERRORS)
      }),
      [E.hes.RTC_DISCONNECTED]: _.Z.Messages.RTC_CONNECTION_STATE_DISCONNECTED
    } [s];
  return (0, l.jsxs)(l.Fragment, {
    children: ["function" == typeof Z ? Z() : (0, l.jsx)("p", {
      className: r()(I.popoutText, I.popoutTextDetails),
      children: Z
    }), (0, l.jsx)("hr", {
      className: I.separator
    }), (0, l.jsxs)("div", {
      className: I.popoutBottom,
      children: [(0, l.jsxs)("span", {
        className: r()(I.secured, I.textWithIcon),
        children: [(0, l.jsx)(o.LockIcon, {
          size: "xxs",
          color: o.tokens.colors.TEXT_POSITIVE.css,
          className: I.__invalid_icon
        }), a]
      }), g && h.Z.supports(f.AN.DIAGNOSTICS) && !__OVERLAY__ && (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsxs)(o.Anchor, {
          className: r()(I.debugButton, I.textWithIcon),
          onClick: t,
          children: [_.Z.Messages.DEBUG, (0, l.jsx)(o.WindowLaunchIcon, {
            size: "xxs",
            color: "currentColor",
            className: I.__invalid_icon
          })]
        }), (0, l.jsxs)(o.Anchor, {
          className: r()(I.copyStatsButton, I.textWithIcon),
          onClick: N,
          title: "Copy to clipboard",
          children: [_.Z.Messages.COPY_STATS, (0, l.jsx)(o.CopyIcon, {
            size: "xxs",
            color: "currentColor",
            className: I.__invalid_icon
          })]
        })]
      }), !g && !__OVERLAY__ && (0, l.jsx)(o.Anchor, {
        className: I.debugButton,
        href: m.Z.getArticleURL(E.BhN.VOICE_VIDEO_TROUBLESHOOTING),
        children: _.Z.Messages.LEARN_MORE
      })]
    })]
  })
}