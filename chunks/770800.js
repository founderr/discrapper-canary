r(571269), r(298267);
var n = r(735250),
  a = r(470079),
  i = r(392711),
  s = r.n(i),
  o = r(442837),
  l = r(481060),
  c = r(19780),
  d = r(226961),
  u = r(914010),
  m = r(959457),
  p = r(246946),
  h = r(594174),
  g = r(285952),
  f = r(5192),
  y = r(476221),
  v = r(481250),
  D = r(206314),
  C = r(513547),
  E = r(65154),
  R = r(689938),
  Z = r(16281),
  S = r(331651);
class F extends a.PureComponent {
  render() {
    let {
      transport: e,
      mediaSessionId: t,
      hidePersonalInformation: r,
      hostname: a
    } = this.props;
    if (null == e) return (0, n.jsx)(l.Spinner, {
      type: l.Spinner.Type.SPINNING_CIRCLE
    });
    let i = {
        ...e,
        hostname: a
      },
      o = s().map(i, (e, t) => {
        if ("receiverReports" !== t && (!r || "localAddress" !== t)) return (0, n.jsx)(C.ck, {
          label: t,
          value: e
        }, t)
      }),
      c = s().map(i.receiverReports, e => {
        let t = Array.isArray(e.bitrate) ? null === (s = e.bitrate.at(-1)) || void 0 === s ? void 0 : s.value : e,
          r = (0, n.jsxs)(g.Z, {
            id: "bitrate-".concat(e.id),
            justify: g.Z.Justify.BETWEEN,
            children: [(0, n.jsx)("span", {
              children: "Bitrate:"
            }), (0, n.jsxs)("span", {
              children: [(t / 1e3).toFixed(2), " Kbps"]
            })]
          }),
          a = (0, n.jsxs)(g.Z, {
            id: "lost-".concat(e.id),
            justify: g.Z.Justify.BETWEEN,
            children: [(0, n.jsx)("span", {
              children: "Packet Loss:"
            }), (0, n.jsxs)("span", {
              children: [(100 * e.fractionLost / 256).toFixed(0), "%"]
            })]
          }),
          i = h.default.getUser(e.id);
        var s, o = f.ZP.getNickname(u.Z.getGuildId(), void 0, i);
        return null == o && (o = null != i ? i.username : e.id), (0, n.jsx)(D.Z, {
          label: e.id,
          valueRendered: [r, a],
          children: o
        }, e.id)
      });
    return (0, n.jsxs)(l.FormSection, {
      tag: l.FormTitleTags.H2,
      title: R.Z.Messages.RTC_DEBUG_TRANSPORT + (null != t ? " - " + t : ""),
      className: Z.allowSelection,
      children: [(0, v.a)(o), 0 === c.length ? null : (0, n.jsx)(l.FormDivider, {
        className: S.marginBottom20
      }), (0, v.a)(c)]
    })
  }
}
t.Z = o.ZP.connectStores([d.ZP, c.Z, p.Z, m.Z], e => {
  let {
    context: t,
    index: r
  } = e, n = d.ZP.getAllStats(t)[r], a = t === E.Yn.STREAM ? m.Z.getHostname(m.Z.getActiveStreamKey()) : c.Z.getHostname();
  return {
    hidePersonalInformation: p.Z.hidePersonalInformation,
    transport: null != n ? n.transport : null,
    mediaSessionId: c.Z.getMediaSessionId(),
    hostname: y.Z.getShortHostname(a)
  }
})(F)