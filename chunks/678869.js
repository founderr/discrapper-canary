"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("481060"),
  i = n("5192"),
  r = n("22211"),
  o = n("561308"),
  u = n("256726"),
  d = n("206295"),
  c = n("551228"),
  f = n("591853"),
  h = n("371991"),
  m = n("689938"),
  p = n("417094");

function E(e, t) {
  return m.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
    username: t.username,
    activity: e
  })
}
let C = (e, t, n) => {
  let {
    artist: a,
    media: l
  } = e, s = m.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, r = i.default.getName(t.guild_id, t.id, n);
  return s.plainFormat({
    artist: a,
    userName: r,
    media: l
  }).replaceAll("*", "")
};

function g(e) {
  let {
    activity: t
  } = e, n = t.timestamps, i = (0, h.useTimestampTickedNow)(n), {
    durationTimestamp: r,
    seekBarStyles: u
  } = l.useMemo(() => {
    var e;
    let {
      start: n,
      end: a
    } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
    if (null == n || null == a) return {};
    let l = a - n,
      s = i - n;
    return {
      seekBarStyles: {
        width: "".concat(Math.floor(s / l * 100), "%")
      },
      durationTimestamp: (0, o.formatActiveTimestamp)({
        start: a
      }, n)
    }
  }, [t, i]);
  return null == u ? null : (0, a.jsxs)("div", {
    className: p.listeningTimeline,
    children: [(0, a.jsx)(h.ActiveTimestamp, {
      entry: n
    }), (0, a.jsx)("div", {
      className: p.seekBarContainer,
      children: (0, a.jsx)("div", {
        className: p.seekBarFill,
        style: u
      })
    }), (0, a.jsx)(s.Text, {
      variant: "text-xs/normal",
      tabularNumbers: !0,
      color: void 0,
      children: r
    })]
  })
}

function S(e) {
  var t;
  let {
    channel: n,
    entry: s,
    requestId: i,
    closePopout: h
  } = e, {
    activity: p,
    artist: S,
    imageUrl: _,
    title: T,
    user: I
  } = (0, c.useListenedSessionData)(s), {
    primaryColor: A,
    secondaryColor: N
  } = (0, d.default)(_), {
    streamPreviewUrl: v,
    channel: x
  } = (0, r.default)(s), M = l.useCallback(e => {
    var t;
    if (null == n || null == I) return;
    let a = null === (t = p.timestamps) || void 0 === t ? void 0 : t.start;
    return (0, u.generateListenContentImage)({
      entry: s,
      mediaImageSrc: _,
      artist: S,
      avatarSrc: I.getAvatarURL(n.guild_id, 128),
      description: C({
        artist: S,
        media: T
      }, n, I),
      timestamp: (0, o.formatActiveTimestamp)(null != a ? {
        start: a
      } : s, Date.now()),
      colors: [A, N],
      channelId: e
    })
  }, [p, S, n, s, _, A, N, T, I]);
  if (null == p) return null;
  let R = (0, a.jsx)(f.PopoutContent, {
    thumbnailSrc: _,
    channel: n,
    entry: s,
    userDescription: (0, o.isEntryActive)(s) ? m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : m.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: S,
    subtitle: T,
    badges: null,
    children: (null === (t = p.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, a.jsx)(g, {
      activity: p
    })
  });
  return (0, a.jsxs)(f.Popout, {
    children: [R, (0, a.jsx)(f.PopoutInteractionsContainer, {
      children: null != x ? (0, a.jsx)(f.VoiceChannelPopoutReactor, {
        closePopout: h,
        user: I,
        channel: n,
        generateReactionImage: M,
        reactionImageAltText: E(S, I),
        entry: s,
        requestId: i,
        voiceChannel: x,
        isStreaming: null != v
      }) : (0, a.jsx)(f.PopoutReactor, {
        closePopout: h,
        user: I,
        channel: n,
        generateReactionImage: M,
        reactionImageAltText: E(S, I),
        entry: s,
        requestId: i
      })
    })]
  })
}