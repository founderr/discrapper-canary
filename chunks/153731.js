r.d(t, {
  Z: function() {
    return B
  }
}), r(653041), r(390547), r(733860), r(47120);
var n = r(735250),
  a = r(470079),
  i = r(392711),
  s = r.n(i),
  o = r(442837),
  l = r(481060),
  c = r(304680),
  d = r(503089),
  u = r(493544),
  m = r(210887),
  p = r(592125),
  h = r(271383),
  g = r(19780),
  f = r(226961),
  y = r(594174),
  v = r(285952),
  D = r(51144),
  C = r(189648),
  E = r(775194),
  R = r(499848),
  Z = r(724392),
  S = r(442580),
  F = r(770800),
  P = r(981631),
  x = r(65154),
  T = r(689938),
  N = r(16281);
let b = (e, t, r) => (0, n.jsx)(v.Z, {
    align: v.Z.Align.CENTER,
    children: (0, n.jsx)(v.Z.Child, {
      children: (0, n.jsxs)(v.Z, {
        align: v.Z.Align.CENTER,
        children: [(0, n.jsx)(l.Avatar, {
          size: l.AvatarSizes.SIZE_24,
          src: e.getAvatarURL(r, 24),
          "aria-label": e.username,
          className: N.avatar
        }), (0, n.jsx)("span", {
          className: N.username,
          children: null != t ? t : D.ZP.getName(e)
        })]
      })
    })
  }),
  j = e => (0, n.jsx)(v.Z, {
    align: v.Z.Align.CENTER,
    children: (0, n.jsx)(v.Z.Child, {
      children: (0, n.jsx)(v.Z, {
        align: v.Z.Align.CENTER,
        children: (0, n.jsx)("span", {
          className: N.username,
          children: e
        })
      })
    })
  });

function I(e, t, r, n, a) {
  let i = [];
  if (null == t) return i;
  let {
    transport: o,
    rtp: {
      inbound: l,
      outbound: d
    },
    camera: m
  } = t;
  return i.push({
    section: u.ID.HEADER,
    label: T.Z.Messages.RTC_DEBUG_CONTEXT.format({
      context: e
    })
  }), null != o && i.push({
    section: (0, f.J$)(e, P._s_.TRANSPORT, r),
    label: T.Z.Messages.RTC_DEBUG_TRANSPORT,
    element: F.Z,
    elementProps: {
      context: e,
      index: r
    }
  }), null != d && i.push({
    section: (0, f.J$)(e, P._s_.OUTBOUND, r),
    label: T.Z.Messages.RTC_DEBUG_RTP_OUTBOUND,
    element: Z.Z,
    elementProps: {
      context: e,
      index: r
    }
  }), null != m && i.push({
    section: (0, f.J$)(e, P._s_.CAMERA, r),
    label: T.Z.Messages.RTC_DEBUG_CAMERA,
    element: C.Z,
    elementProps: {
      context: e,
      index: r,
      camera: m
    }
  }), null != l && !s().isEmpty(l) && (i.push({
    section: u.ID.HEADER,
    label: T.Z.Messages.RTC_DEBUG_RTP_INBOUND
  }), Object.keys(l).forEach(t => {
    let s = y.default.getUser(t),
      o = h.ZP.getNick(a, t),
      l = (0, f.J$)(e, t, r);
    i.push({
      section: l,
      label: null != s ? b(s, o, a) : j(null != o ? o : t),
      ariaLabel: null != s ? s.tag : t,
      onClick: () => {
        c.zc(l)
      },
      element: R.Z,
      elementProps: {
        context: e,
        index: r,
        videoStreams: n
      }
    })
  })), i
}

function B() {
  var e, t;
  let {
    defaultStats: r,
    streamStats: i
  } = (0, o.e7)([f.ZP], () => ({
    defaultStats: f.ZP.getAllStats(x.Yn.DEFAULT),
    streamStats: f.ZP.getAllStats(x.Yn.STREAM)
  }), [], o.pF), s = (0, o.e7)([g.Z, p.Z], () => p.Z.getChannel(g.Z.getChannelId())), h = null === (e = r.concat(i).find(e => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare, y = null === (t = i.find(e => null != e.clips)) || void 0 === t ? void 0 : t.clips, v = (0, o.e7)([m.Z], () => m.Z.theme), D = (0, o.e7)([m.Z], () => m.Z.darkSidebar ? P.BRd.DARK : void 0), C = (0, o.e7)([f.ZP], () => f.ZP.getSection()), R = (0, o.e7)([f.ZP], () => f.ZP.getVideoStreams()), Z = function(e) {
    let {
      defaultStats: t,
      streamStats: r,
      videoStreams: a,
      screenshare: i,
      clips: s,
      channel: o,
      connectionState: c
    } = e, d = t.flatMap((e, t) => I(x.Yn.DEFAULT, e, t, a, null == o ? void 0 : o.getGuildId())), m = r.flatMap((e, t) => I(x.Yn.STREAM, e, t, a, null == o ? void 0 : o.getGuildId())), p = [], h = [], g = {
      section: u.ID.DIVIDER
    };
    null != i && (p.push(g), p.push({
      section: P._s_.SCREENSHARE,
      label: T.Z.Messages.RTC_DEBUG_SCREENSHARE,
      element: S.Z,
      elementProps: {
        screenshare: i
      }
    })), null != s && (h.push(g), h.push({
      section: P._s_.CLIPS,
      label: T.Z.Messages.RTC_DEBUG_CLIPS,
      element: E.Z,
      elementProps: {
        clips: s
      }
    })), m.length > 0 && m.unshift(g);
    let f = null != o ? [{
      section: u.ID.CUSTOM,
      label: "Channel Name",
      element: () => (0, n.jsx)(l.Heading, {
        className: N.channelName,
        variant: "heading-lg/semibold",
        children: o.name
      })
    }] : [];
    return [...f, {
      section: u.ID.CUSTOM,
      label: "Connection State",
      element: () => (0, n.jsx)(l.Heading, {
        className: N.channelName,
        variant: "heading-md/normal",
        children: c === P.hes.RTC_CONNECTED ? "Connected" : "Disconnected"
      })
    }, ...d, ...m, ...p, ...h]
  }({
    defaultStats: r,
    streamStats: i,
    videoStreams: R,
    screenshare: h,
    clips: y,
    channel: s,
    connectionState: (0, o.e7)([g.Z], () => g.Z.getState())
  });
  return a.useEffect(() => () => {
    c.xv()
  }, []), (0, n.jsx)(d.ZP, {
    theme: v,
    sidebarTheme: D,
    section: C,
    onSetSection: c.zc,
    sections: Z
  })
}