"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("423875"),
  i = n("885668"),
  r = n("442837"),
  o = n("902704"),
  u = n("481060"),
  d = n("952164"),
  c = n("768419"),
  f = n("456190"),
  h = n("239470"),
  m = n("894344"),
  p = n("314897"),
  E = n("936195"),
  C = n("5192"),
  g = n("22211"),
  S = n("561308"),
  _ = n("256726"),
  T = n("206295"),
  I = n("551228"),
  A = n("591853"),
  v = n("371991"),
  N = n("410441"),
  x = n("981631"),
  M = n("616922"),
  R = n("689938"),
  y = n("417094"),
  L = n("936183");

function O(e, t) {
  return R.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
    username: t.username,
    activity: e
  })
}
let j = (e, t, n) => {
  let {
    artist: a,
    media: l
  } = e, s = R.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, i = C.default.getName(t.guild_id, t.id, n);
  return s.plainFormat({
    artist: a,
    userName: i,
    media: l
  }).replaceAll("*", "")
};

function P(e) {
  let {
    activity: t
  } = e, n = t.timestamps, s = (0, v.useTimestampTickedNow)(n), {
    durationTimestamp: i,
    seekBarStyles: r
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
      durationTimestamp: (0, S.formatActiveTimestamp)({
        start: a
      }, n)
    }
  }, [t, s]);
  return null == r ? null : (0, a.jsxs)("div", {
    className: y.listeningTimeline,
    children: [(0, a.jsx)(v.ActiveTimestamp, {
      entry: n
    }), (0, a.jsx)("div", {
      className: y.seekBarContainer,
      children: (0, a.jsx)("div", {
        className: y.seekBarFill,
        style: r
      })
    }), (0, a.jsx)(u.Text, {
      variant: "text-xs/normal",
      tabularNumbers: !0,
      color: void 0,
      children: i
    })]
  })
}

function D(e) {
  var t;
  let n, u, v, y, {
      channel: D,
      entry: b,
      requestId: U,
      closePopout: F
    } = e,
    {
      activity: w,
      currentEntry: k,
      artist: H,
      imageUrl: B,
      title: G,
      user: V
    } = (0, I.useListenedSessionData)(b),
    {
      primaryColor: W,
      secondaryColor: Y
    } = (0, T.default)(B),
    {
      streamPreviewUrl: z,
      channel: K
    } = (0, g.default)(b),
    Z = (0, r.useStateFromStores)([c.default, p.default], () => (null == w ? void 0 : w.type) === x.ActivityTypes.LISTENING && null != V ? (0, h.default)(c.default, p.default, V, w) : void 0, [w, V], o.default),
    q = l.useCallback(() => {
      var e;
      if (null == D || null == V) return;
      let t = null === (e = w.timestamps) || void 0 === e ? void 0 : e.start,
        n = (0, S.formatActiveTimestamp)(null != t ? {
          start: t
        } : b, Date.now());
      return (0, _.generateListenContentImage)({
        user: V,
        channel: D,
        mediaImageSrc: B,
        artist: H,
        description: j({
          artist: H,
          media: G
        }, D, V),
        colors: [W, Y],
        badges: (0, _.getListenSessionImageBadges)({
          timestamp: n
        })
      })
    }, [w, H, D, b, B, W, Y, G, V]);
  if (null == w || null == k) return null;
  let X = H;
  if (k.media.provider === s.ContentInventoryListenedMediaProvider.SPOTIFY && (null == Z ? void 0 : Z.syncDisabled) === !1) {
    y = {
      handleClick: n = () => {
        (0, m.default)(Z, M.SpotifyActionTypes.USER_ACTIVITY_SYNC), F()
      },
      label: R.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
      icon: i.UserPlayIcon
    };
    X = (0, a.jsx)(E.default, {
      artists: H,
      canOpen: null != w.sync_id,
      linkClassName: L.popoutTextSecondary,
      onOpenSpotifyArtist: e => {
        (0, d.openArtist)(w, V.id, e)
      }
    }), u = () => {
      (0, d.openTrack)(w)
    }, v = (0, f.default)(Z, M.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != D ? C.default.getNickname(D.guild_id, D.id, V) : void 0)
  }
  let Q = (0, a.jsx)(A.PopoutContent, {
    thumbnailSrc: B,
    channel: D,
    entry: b,
    headerIcons: (0, a.jsx)(N.default, {
      onClick: n,
      "aria-label": v,
      provider: k.media.provider
    }),
    userDescription: (0, S.isEntryActive)(b) ? R.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : R.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: G,
    onClickTitle: u,
    subtitle: X,
    badges: null,
    children: (null === (t = w.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, a.jsx)(P, {
      activity: w
    })
  });
  return (0, a.jsxs)(A.Popout, {
    children: [Q, (0, a.jsx)(A.PopoutInteractionsContainer, {
      children: null != K ? (0, a.jsx)(A.VoiceChannelPopoutReactor, {
        closePopout: F,
        user: V,
        channel: D,
        generateReactionImage: q,
        reactionImageAltText: O(H, V),
        entry: b,
        requestId: U,
        voiceChannel: K,
        isStreaming: null != z
      }) : null != y ? (0, a.jsx)(A.PrimaryActionPopoutReactor, {
        closePopout: F,
        user: V,
        channel: D,
        header: null,
        generateReactionImage: q,
        reactionImageAltText: O(H, V),
        entry: b,
        requestId: U,
        children: (0, a.jsx)(A.PrimaryActionButton, {
          onClick: y.handleClick,
          IconComponent: y.icon,
          children: y.label
        })
      }) : (0, a.jsx)(A.PopoutReactor, {
        closePopout: F,
        user: V,
        channel: D,
        generateReactionImage: q,
        reactionImageAltText: O(H, V),
        entry: b,
        requestId: U
      })
    })]
  })
}