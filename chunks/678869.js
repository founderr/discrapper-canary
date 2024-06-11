"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("627494"), n("757143"), n("653041");
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
  y = n("417094"),
  R = n("936183");
let L = (e, t, n) => {
  let {
    artist: a,
    media: l
  } = e, s = M.default.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, i = C.default.getName(t.guild_id, t.id, n);
  return s.plainFormat({
    artist: a,
    userName: i,
    media: l
  }).replaceAll("*", "")
};

function O(e) {
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
    className: y.listeningTimeline,
    children: [(0, a.jsx)(A.ActiveTimestamp, {
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

function j(e) {
  var t, n, u;
  let A, y, j, {
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
    Y = (0, r.useStateFromStores)([c.default, p.default], () => (null == F ? void 0 : F.type) === x.ActivityTypes.LISTENING && null != B ? (0, h.default)(c.default, p.default, B, F) : void 0, [F, B], o.default),
    z = l.useCallback(() => {
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
        description: L({
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
  let K = k,
    Z = [];
  if (w.media.provider === s.ContentInventoryListenedMediaProvider.SPOTIFY && (null == Y ? void 0 : Y.syncDisabled) === !1) {
    A = () => {
      (0, m.default)(Y, N.SpotifyActionTypes.USER_ACTIVITY_SYNC), U()
    }, Z.push((0, a.jsx)(I.PrimaryActionButton, {
      onClick: A,
      IconComponent: i.UserPlayIcon,
      children: M.default.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
    }, "listen-along"));
    K = (0, a.jsx)(E.default, {
      artists: k,
      canOpen: null != F.sync_id,
      linkClassName: R.popoutTextSecondary,
      onOpenSpotifyArtist: e => {
        (0, d.openArtist)(F, B.id, e)
      }
    }), y = () => {
      (0, d.openTrack)(F)
    }, j = (0, f.default)(Y, N.SpotifyActionTypes.USER_ACTIVITY_SYNC, null != P ? C.default.getNickname(P.guild_id, P.id, B) : void 0)
  }
  let X = (0, a.jsx)(I.PopoutContent, {
    thumbnailSrc: H,
    channel: P,
    entry: D,
    headerIcons: (0, a.jsx)(v.default, {
      onClick: A,
      "aria-label": j,
      provider: w.media.provider
    }),
    userDescription: (0, g.isEntryActive)(D) ? M.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : M.default.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: G,
    onClickTitle: y,
    subtitle: K,
    badges: null,
    children: (null === (t = F.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, a.jsx)(O, {
      activity: F
    })
  });
  return (0, a.jsxs)(I.Popout, {
    children: [X, (0, a.jsx)(I.PopoutInteractionsContainer, {
      children: (0, a.jsx)(I.Reactor, {
        closePopout: U,
        user: B,
        channel: P,
        generateReactionImage: z,
        reactionImageAltText: (n = k, u = B, M.default.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
          username: u.username,
          activity: n
        })),
        entry: D,
        requestId: b,
        buttons: Z
      })
    })]
  })
}