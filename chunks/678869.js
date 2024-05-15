"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("423875"),
  i = n("442837"),
  r = n("481060"),
  o = n("768419"),
  u = n("456190"),
  d = n("239470"),
  c = n("894344"),
  f = n("314897"),
  h = n("5192"),
  m = n("22211"),
  p = n("561308"),
  E = n("256726"),
  C = n("206295"),
  g = n("551228"),
  S = n("591853"),
  _ = n("371991"),
  T = n("410441"),
  I = n("981631"),
  A = n("616922"),
  N = n("689938"),
  v = n("417094");

function x(e, t) {
  return N.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
    username: t.username,
    activity: e
  })
}
let M = (e, t, n) => {
  let {
    artist: a,
    media: l
  } = e, s = N.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, i = h.default.getName(t.guild_id, t.id, n);
  return s.plainFormat({
    artist: a,
    userName: i,
    media: l
  }).replaceAll("*", "")
};

function R(e) {
  let {
    activity: t
  } = e, n = t.timestamps, s = (0, _.useTimestampTickedNow)(n), {
    durationTimestamp: i,
    seekBarStyles: o
  } = l.useMemo(() => {
    var e;
    let {
      start: n,
      end: a
    } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
    if (null == n || null == a) return {};
    let l = Math.min(a, s),
      i = a - n,
      r = l - n;
    return {
      seekBarStyles: {
        width: "".concat(Math.floor(r / i * 100), "%")
      },
      durationTimestamp: (0, p.formatActiveTimestamp)({
        start: a
      }, n)
    }
  }, [t, s]);
  return null == o ? null : (0, a.jsxs)("div", {
    className: v.listeningTimeline,
    children: [(0, a.jsx)(_.ActiveTimestamp, {
      entry: n
    }), (0, a.jsx)("div", {
      className: v.seekBarContainer,
      children: (0, a.jsx)("div", {
        className: v.seekBarFill,
        style: o
      })
    }), (0, a.jsx)(r.Text, {
      variant: "text-xs/normal",
      tabularNumbers: !0,
      color: void 0,
      children: i
    })]
  })
}

function L(e) {
  var t;
  let n, r, {
      channel: _,
      entry: v,
      requestId: L,
      closePopout: y
    } = e,
    {
      activity: O,
      currentEntry: j,
      artist: P,
      imageUrl: D,
      title: b,
      user: U
    } = (0, g.useListenedSessionData)(v),
    {
      primaryColor: F,
      secondaryColor: w
    } = (0, C.default)(D),
    {
      streamPreviewUrl: k,
      channel: H
    } = (0, m.default)(v),
    B = (0, i.useStateFromStores)([o.default, f.default], () => (null == O ? void 0 : O.type) === I.ActivityTypes.LISTENING && null != U ? (0, d.default)(o.default, f.default, U, O) : void 0, [O, U]),
    G = l.useCallback(e => {
      var t;
      if (null == _ || null == U) return;
      let n = null === (t = O.timestamps) || void 0 === t ? void 0 : t.start;
      return (0, E.generateListenContentImage)({
        entry: v,
        mediaImageSrc: D,
        artist: P,
        avatarSrc: U.getAvatarURL(_.guild_id, 128),
        description: M({
          artist: P,
          media: b
        }, _, U),
        timestamp: (0, p.formatActiveTimestamp)(null != n ? {
          start: n
        } : v, Date.now()),
        colors: [F, w],
        channelId: e
      })
    }, [O, P, _, v, D, F, w, b, U]);
  if (null == O || null == j) return null;
  j.media.provider === s.ContentInventoryListenedMediaProvider.SPOTIFY && (null == B ? void 0 : B.syncDisabled) === !1 && (n = () => {
    (0, c.default)(B, A.SpotifyActionTypes.USER_ACTIVITY_SYNC), y()
  }, r = (0, u.default)(B, A.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != _ ? h.default.getNickname(_.guild_id, _.id, U) : void 0));
  let V = (0, a.jsx)(S.PopoutContent, {
    thumbnailSrc: D,
    channel: _,
    entry: v,
    headerIcons: (0, a.jsx)(T.default, {
      onClick: n,
      "aria-label": r,
      provider: j.media.provider
    }),
    userDescription: (0, p.isEntryActive)(v) ? N.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : N.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: P,
    subtitle: b,
    badges: null,
    children: (null === (t = O.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, a.jsx)(R, {
      activity: O
    })
  });
  return (0, a.jsxs)(S.Popout, {
    children: [V, (0, a.jsx)(S.PopoutInteractionsContainer, {
      children: null != H ? (0, a.jsx)(S.VoiceChannelPopoutReactor, {
        closePopout: y,
        user: U,
        channel: _,
        generateReactionImage: G,
        reactionImageAltText: x(P, U),
        entry: v,
        requestId: L,
        voiceChannel: H,
        isStreaming: null != k
      }) : (0, a.jsx)(S.PopoutReactor, {
        closePopout: y,
        user: U,
        channel: _,
        generateReactionImage: G,
        reactionImageAltText: x(P, U),
        entry: v,
        requestId: L
      })
    })]
  })
}