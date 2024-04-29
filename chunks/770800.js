"use strict";
r.r(t), r("571269"), r("298267");
var a = r("735250"),
  n = r("470079"),
  i = r("392711"),
  s = r.n(i),
  l = r("442837"),
  o = r("481060"),
  d = r("19780"),
  u = r("226961"),
  c = r("914010"),
  m = r("959457"),
  f = r("246946"),
  p = r("594174"),
  h = r("285952"),
  g = r("5192"),
  y = r("476221"),
  C = r("481250"),
  S = r("206314"),
  D = r("513547"),
  E = r("65154"),
  v = r("689938"),
  R = r("746057"),
  T = r("611273");
class F extends n.PureComponent {
  render() {
    let {
      transport: e,
      mediaSessionId: t,
      hidePersonalInformation: r,
      hostname: n
    } = this.props;
    if (null == e) return (0, a.jsx)(o.Spinner, {
      type: o.Spinner.Type.SPINNING_CIRCLE
    });
    let i = {
        ...e,
        hostname: n
      },
      l = s().map(i, (e, t) => {
        if ("receiverReports" !== t && (!r || "localAddress" !== t)) return (0, a.jsx)(D.Item, {
          label: t,
          value: e
        }, t)
      }),
      d = s().map(i.receiverReports, e => {
        let t = Array.isArray(e.bitrate) ? null === (s = e.bitrate.at(-1)) || void 0 === s ? void 0 : s.value : e,
          r = (0, a.jsxs)(h.default, {
            id: "bitrate-".concat(e.id),
            justify: h.default.Justify.BETWEEN,
            children: [(0, a.jsx)("span", {
              children: "Bitrate:"
            }), (0, a.jsxs)("span", {
              children: [(t / 1e3).toFixed(2), " Kbps"]
            })]
          }),
          n = (0, a.jsxs)(h.default, {
            id: "lost-".concat(e.id),
            justify: h.default.Justify.BETWEEN,
            children: [(0, a.jsx)("span", {
              children: "Packet Loss:"
            }), (0, a.jsxs)("span", {
              children: [(100 * e.fractionLost / 256).toFixed(0), "%"]
            })]
          }),
          i = p.default.getUser(e.id);
        var s, l = g.default.getNickname(c.default.getGuildId(), void 0, i);
        return null == l && (l = null != i ? i.username : e.id), (0, a.jsx)(S.default, {
          label: e.id,
          valueRendered: [r, n],
          children: l
        }, e.id)
      });
    return (0, a.jsxs)(o.FormSection, {
      tag: o.FormTitleTags.H2,
      title: v.default.Messages.RTC_DEBUG_TRANSPORT + (null != t ? " - " + t : ""),
      className: R.allowSelection,
      children: [(0, C.renderTwoColumns)(l), 0 === d.length ? null : (0, a.jsx)(o.FormDivider, {
        className: T.marginBottom20
      }), (0, C.renderTwoColumns)(d)]
    })
  }
}
t.default = l.default.connectStores([u.default, d.default, f.default, m.default], e => {
  let {
    context: t,
    index: r
  } = e, a = u.default.getAllStats(t)[r], n = t === E.MediaEngineContextTypes.STREAM ? m.default.getHostname(m.default.getActiveStreamKey()) : d.default.getHostname();
  return {
    hidePersonalInformation: f.default.hidePersonalInformation,
    transport: null != a ? a.transport : null,
    mediaSessionId: d.default.getMediaSessionId(),
    hostname: y.default.getShortHostname(n)
  }
})(F)