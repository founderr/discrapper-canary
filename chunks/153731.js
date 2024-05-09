"use strict";
r.r(t), r.d(t, {
  default: function() {
    return A
  }
}), r("653041"), r("390547"), r("733860"), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("392711"),
  s = r.n(i),
  l = r("442837"),
  o = r("481060"),
  d = r("304680"),
  u = r("503089"),
  c = r("493544"),
  m = r("210887"),
  f = r("592125"),
  p = r("271383"),
  h = r("19780"),
  g = r("226961"),
  y = r("594174"),
  C = r("285952"),
  S = r("51144"),
  D = r("189648"),
  E = r("775194"),
  v = r("499848"),
  R = r("724392"),
  T = r("442580"),
  F = r("770800"),
  x = r("981631"),
  N = r("65154"),
  b = r("689938"),
  P = r("746057");
let j = (e, t, r) => (0, a.jsx)(C.default, {
    align: C.default.Align.CENTER,
    children: (0, a.jsx)(C.default.Child, {
      children: (0, a.jsxs)(C.default, {
        align: C.default.Align.CENTER,
        children: [(0, a.jsx)(o.Avatar, {
          size: o.AvatarSizes.SIZE_24,
          src: e.getAvatarURL(r, 24),
          "aria-label": e.username,
          className: P.avatar
        }), (0, a.jsx)("span", {
          className: P.username,
          children: null != t ? t : S.default.getName(e)
        })]
      })
    })
  }),
  I = e => (0, a.jsx)(C.default, {
    align: C.default.Align.CENTER,
    children: (0, a.jsx)(C.default.Child, {
      children: (0, a.jsx)(C.default, {
        align: C.default.Align.CENTER,
        children: (0, a.jsx)("span", {
          className: P.username,
          children: e
        })
      })
    })
  });

function B(e, t, r, a, n) {
  let i = [];
  if (null == t) return i;
  let {
    transport: l,
    rtp: {
      inbound: o,
      outbound: u
    },
    camera: m
  } = t;
  return i.push({
    section: c.SectionTypes.HEADER,
    label: b.default.Messages.RTC_DEBUG_CONTEXT.format({
      context: e
    })
  }), null != l && i.push({
    section: (0, g.keySection)(e, x.RTCDebugSections.TRANSPORT, r),
    label: b.default.Messages.RTC_DEBUG_TRANSPORT,
    element: F.default,
    elementProps: {
      context: e,
      index: r
    }
  }), null != u && i.push({
    section: (0, g.keySection)(e, x.RTCDebugSections.OUTBOUND, r),
    label: b.default.Messages.RTC_DEBUG_RTP_OUTBOUND,
    element: R.default,
    elementProps: {
      context: e,
      index: r
    }
  }), null != m && i.push({
    section: (0, g.keySection)(e, x.RTCDebugSections.CAMERA, r),
    label: b.default.Messages.RTC_DEBUG_CAMERA,
    element: D.default,
    elementProps: {
      context: e,
      index: r,
      camera: m
    }
  }), null != o && !s().isEmpty(o) && (i.push({
    section: c.SectionTypes.HEADER,
    label: b.default.Messages.RTC_DEBUG_RTP_INBOUND
  }), Object.keys(o).forEach(t => {
    let s = y.default.getUser(t),
      l = p.default.getNick(n, t),
      o = (0, g.keySection)(e, t, r);
    i.push({
      section: o,
      label: null != s ? j(s, l, n) : I(null != l ? l : t),
      ariaLabel: null != s ? s.tag : t,
      onClick: () => {
        d.setSection(o)
      },
      element: v.default,
      elementProps: {
        context: e,
        index: r,
        videoStreams: a
      }
    })
  })), i
}

function A() {
  var e, t;
  let {
    defaultStats: r,
    streamStats: i
  } = (0, l.useStateFromStores)([g.default], () => ({
    defaultStats: g.default.getAllStats(N.MediaEngineContextTypes.DEFAULT),
    streamStats: g.default.getAllStats(N.MediaEngineContextTypes.STREAM)
  }), [], l.statesWillNeverBeEqual), s = (0, l.useStateFromStores)([h.default, f.default], () => f.default.getChannel(h.default.getChannelId())), p = null === (e = r.concat(i).find(e => null != e.screenshare)) || void 0 === e ? void 0 : e.screenshare, y = null === (t = i.find(e => null != e.clips)) || void 0 === t ? void 0 : t.clips, C = (0, l.useStateFromStores)([m.default], () => m.default.theme), S = (0, l.useStateFromStores)([m.default], () => m.default.darkSidebar ? x.ThemeTypes.DARK : void 0), D = (0, l.useStateFromStores)([g.default], () => g.default.getSection()), v = (0, l.useStateFromStores)([g.default], () => g.default.getVideoStreams()), R = function(e) {
    let {
      defaultStats: t,
      streamStats: r,
      videoStreams: n,
      screenshare: i,
      clips: s,
      channel: l,
      connectionState: d
    } = e, u = t.flatMap((e, t) => B(N.MediaEngineContextTypes.DEFAULT, e, t, n, null == l ? void 0 : l.getGuildId())), m = r.flatMap((e, t) => B(N.MediaEngineContextTypes.STREAM, e, t, n, null == l ? void 0 : l.getGuildId())), f = [], p = [], h = {
      section: c.SectionTypes.DIVIDER
    };
    null != i && (f.push(h), f.push({
      section: x.RTCDebugSections.SCREENSHARE,
      label: b.default.Messages.RTC_DEBUG_SCREENSHARE,
      element: T.default,
      elementProps: {
        screenshare: i
      }
    })), null != s && (p.push(h), p.push({
      section: x.RTCDebugSections.CLIPS,
      label: b.default.Messages.RTC_DEBUG_CLIPS,
      element: E.default,
      elementProps: {
        clips: s
      }
    })), m.length > 0 && m.unshift(h);
    let g = null != l ? [{
      section: c.SectionTypes.CUSTOM,
      label: "Channel Name",
      element: () => (0, a.jsx)(o.Heading, {
        className: P.channelName,
        variant: "heading-lg/semibold",
        children: l.name
      })
    }] : [];
    return [...g, {
      section: c.SectionTypes.CUSTOM,
      label: "Connection State",
      element: () => (0, a.jsx)(o.Heading, {
        className: P.channelName,
        variant: "heading-md/normal",
        children: d === x.RTCConnectionStates.RTC_CONNECTED ? "Connected" : "Disconnected"
      })
    }, ...u, ...m, ...f, ...p]
  }({
    defaultStats: r,
    streamStats: i,
    videoStreams: v,
    screenshare: p,
    clips: y,
    channel: s,
    connectionState: (0, l.useStateFromStores)([h.default], () => h.default.getState())
  });
  return n.useEffect(() => () => {
    d.close()
  }, []), (0, a.jsx)(u.default, {
    theme: C,
    sidebarTheme: S,
    section: D,
    onSetSection: d.setSection,
    sections: R
  })
}