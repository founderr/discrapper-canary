"use strict";
a.r(t), a("571269"), a("298267");
var r = a("735250"),
  n = a("470079"),
  i = a("392711"),
  l = a.n(i),
  s = a("442837"),
  o = a("481060"),
  u = a("19780"),
  d = a("226961"),
  c = a("914010"),
  m = a("959457"),
  f = a("246946"),
  p = a("594174"),
  h = a("285952"),
  g = a("5192"),
  y = a("476221"),
  S = a("481250"),
  C = a("206314"),
  v = a("513547"),
  D = a("65154"),
  E = a("689938"),
  R = a("746057"),
  T = a("611273");
class F extends n.PureComponent {
  render() {
    let {
      transport: e,
      mediaSessionId: t,
      hidePersonalInformation: a,
      hostname: n
    } = this.props;
    if (null == e) return (0, r.jsx)(o.Spinner, {
      type: o.Spinner.Type.SPINNING_CIRCLE
    });
    let i = {
        ...e,
        hostname: n
      },
      s = l().map(i, (e, t) => {
        if ("receiverReports" !== t && (!a || "localAddress" !== t)) return (0, r.jsx)(v.Item, {
          label: t,
          value: e
        }, t)
      }),
      u = l().map(i.receiverReports, e => {
        let t = Array.isArray(e.bitrate) ? null === (l = e.bitrate.at(-1)) || void 0 === l ? void 0 : l.value : e,
          a = (0, r.jsxs)(h.default, {
            id: "bitrate-".concat(e.id),
            justify: h.default.Justify.BETWEEN,
            children: [(0, r.jsx)("span", {
              children: "Bitrate:"
            }), (0, r.jsxs)("span", {
              children: [(t / 1e3).toFixed(2), " Kbps"]
            })]
          }),
          n = (0, r.jsxs)(h.default, {
            id: "lost-".concat(e.id),
            justify: h.default.Justify.BETWEEN,
            children: [(0, r.jsx)("span", {
              children: "Packet Loss:"
            }), (0, r.jsxs)("span", {
              children: [(100 * e.fractionLost / 256).toFixed(0), "%"]
            })]
          }),
          i = p.default.getUser(e.id);
        var l, s = g.default.getNickname(c.default.getGuildId(), void 0, i);
        return null == s && (s = null != i ? i.username : e.id), (0, r.jsx)(C.default, {
          label: e.id,
          valueRendered: [a, n],
          children: s
        }, e.id)
      });
    return (0, r.jsxs)(o.FormSection, {
      tag: o.FormTitleTags.H2,
      title: E.default.Messages.RTC_DEBUG_TRANSPORT + (null != t ? " - " + t : ""),
      className: R.allowSelection,
      children: [(0, S.renderTwoColumns)(s), 0 === u.length ? null : (0, r.jsx)(o.FormDivider, {
        className: T.marginBottom20
      }), (0, S.renderTwoColumns)(u)]
    })
  }
}
t.default = s.default.connectStores([d.default, u.default, f.default, m.default], e => {
  let {
    context: t,
    index: a
  } = e, r = d.default.getAllStats(t)[a], n = t === D.MediaEngineContextTypes.STREAM ? m.default.getHostname(m.default.getActiveStreamKey()) : u.default.getHostname();
  return {
    hidePersonalInformation: f.default.hidePersonalInformation,
    transport: null != r ? r.transport : null,
    mediaSessionId: u.default.getMediaSessionId(),
    hostname: y.default.getShortHostname(n)
  }
})(F)