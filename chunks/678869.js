"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("627494"), n("757143");
var a = n("735250"),
  l = n("470079"),
  s = n("423875"),
  i = n("885668"),
  r = n("442837"),
  o = n("481060"),
  u = n("952164"),
  d = n("768419"),
  c = n("456190"),
  f = n("239470"),
  h = n("894344"),
  m = n("314897"),
  p = n("936195"),
  E = n("5192"),
  C = n("22211"),
  g = n("561308"),
  S = n("256726"),
  _ = n("206295"),
  T = n("551228"),
  I = n("591853"),
  A = n("371991"),
  v = n("410441"),
  x = n("981631"),
  N = n("616922"),
  M = n("689938"),
  R = n("417094"),
  y = n("936183");

function L(e, t) {
  return M.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
    username: t.username,
    activity: e
  })
}
let O = (e, t, n) => {
  let {
    artist: a,
    media: l
  } = e, s = M.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, i = E.default.getName(t.guild_id, t.id, n);
  return s.plainFormat({
    artist: a,
    userName: i,
    media: l
  }).replaceAll("*", "")
};

function j(e) {
  let {
    activity: t
  } = e, n = t.timestamps, s = (0, A.useTimestampTickedNow)(n), {
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
      durationTimestamp: (0, g.formatActiveTimestamp)({
        start: a
      }, n)
    }
  }, [t, s]);
  return null == r ? null : (0, a.jsxs)("div", {
    className: R.listeningTimeline,
    children: [(0, a.jsx)(A.ActiveTimestamp, {
      entry: n
    }), (0, a.jsx)("div", {
      className: R.seekBarContainer,
      children: (0, a.jsx)("div", {
        className: R.seekBarFill,
        style: r
      })
    }), (0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      tabularNumbers: !0,
      color: void 0,
      children: i
    })]
  })
}

function P(e) {
  var t;
  let n, o, A, R, {
      channel: P,
      entry: D,
      requestId: b,
      closePopout: U
    } = e,
    {
      activity: F,
      currentEntry: w,
      artist: k,
      imageUrl: H,
      title: G,
      user: B
    } = (0, T.useListenedSessionData)(D),
    {
      primaryColor: V,
      secondaryColor: W
    } = (0, _.default)(H),
    {
      streamPreviewUrl: Y,
      channel: z
    } = (0, C.default)(D),
    K = (0, r.useStateFromStores)([d.default, m.default], () => (null == F ? void 0 : F.type) === x.ActivityTypes.LISTENING && null != B ? (0, f.default)(d.default, m.default, B, F) : void 0, [F, B]),
    Z = l.useCallback(() => {
      var e;
      if (null == P || null == B) return;
      let t = null === (e = F.timestamps) || void 0 === e ? void 0 : e.start,
        n = (0, g.formatActiveTimestamp)(null != t ? {
          start: t
        } : D, Date.now());
      return (0, S.generateListenContentImage)({
        user: B,
        channel: P,
        mediaImageSrc: H,
        artist: k,
        description: O({
          artist: k,
          media: G
        }, P, B),
        colors: [V, W],
        badges: (0, S.getListenSessionImageBadges)({
          timestamp: n
        })
      })
    }, [F, k, P, D, H, V, W, G, B]);
  if (null == F || null == w) return null;
  let X = k;
  if (w.media.provider === s.ContentInventoryListenedMediaProvider.SPOTIFY && (null == K ? void 0 : K.syncDisabled) === !1) {
    R = {
      handleClick: n = () => {
        (0, h.default)(K, N.SpotifyActionTypes.USER_ACTIVITY_SYNC), U()
      },
      label: M.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG,
      icon: i.UserPlayIcon
    };
    X = (0, a.jsx)(p.default, {
      artists: k,
      canOpen: null != F.sync_id,
      linkClassName: y.popoutTextSecondary,
      onOpenSpotifyArtist: e => {
        (0, u.openArtist)(F, B.id, e)
      }
    }), o = () => {
      (0, u.openTrack)(F)
    }, A = (0, c.default)(K, N.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != P ? E.default.getNickname(P.guild_id, P.id, B) : void 0)
  }
  let q = (0, a.jsx)(I.PopoutContent, {
    thumbnailSrc: H,
    channel: P,
    entry: D,
    headerIcons: (0, a.jsx)(v.default, {
      onClick: n,
      "aria-label": A,
      provider: w.media.provider
    }),
    userDescription: (0, g.isEntryActive)(D) ? M.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : M.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: G,
    onClickTitle: o,
    subtitle: X,
    badges: null,
    children: (null === (t = F.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, a.jsx)(j, {
      activity: F
    })
  });
  return (0, a.jsxs)(I.Popout, {
    children: [q, (0, a.jsx)(I.PopoutInteractionsContainer, {
      children: null != z ? (0, a.jsx)(I.VoiceChannelPopoutReactor, {
        closePopout: U,
        user: B,
        channel: P,
        generateReactionImage: Z,
        reactionImageAltText: L(k, B),
        entry: D,
        requestId: b,
        voiceChannel: z,
        isStreaming: null != Y
      }) : null != R ? (0, a.jsx)(I.PrimaryActionPopoutReactor, {
        closePopout: U,
        user: B,
        channel: P,
        header: null,
        generateReactionImage: Z,
        reactionImageAltText: L(k, B),
        entry: D,
        requestId: b,
        children: (0, a.jsx)(I.PrimaryActionButton, {
          onClick: R.handleClick,
          IconComponent: R.icon,
          label: R.label
        })
      }) : (0, a.jsx)(I.PopoutReactor, {
        closePopout: U,
        user: B,
        channel: P,
        generateReactionImage: Z,
        reactionImageAltText: L(k, B),
        entry: D,
        requestId: b
      })
    })]
  })
}