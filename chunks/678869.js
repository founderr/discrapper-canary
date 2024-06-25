n.d(t, {
  Z: function() {
    return j
  }
}), n(627494), n(757143), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(423875),
  s = n(442837),
  r = n(902704),
  o = n(481060),
  c = n(952164),
  u = n(768419),
  d = n(456190),
  h = n(239470),
  p = n(894344),
  m = n(314897),
  _ = n(936195),
  f = n(5192),
  E = n(561308),
  g = n(256726),
  C = n(206295),
  I = n(551228),
  x = n(591853),
  T = n(371991),
  N = n(410441),
  v = n(981631),
  S = n(616922),
  Z = n(689938),
  A = n(861666),
  M = n(208899);
let b = (e, t, n) => {
  let {
    artist: i,
    media: a
  } = e, l = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, s = f.ZP.getName(t.guild_id, t.id, n);
  return l.plainFormat({
    artist: i,
    userName: s,
    media: a
  }).replaceAll("*", "")
};

function R(e) {
  let {
    activity: t
  } = e, n = t.timestamps, l = (0, T.tS)(n), {
    durationTimestamp: s,
    seekBarStyles: r
  } = a.useMemo(() => {
    var e;
    let {
      start: n,
      end: i
    } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
    if (null == n || null == i) return {};
    let a = Math.min(i, l),
      s = i - n,
      r = Math.floor((a - n) / s * 100);
    return {
      seekBarStyles: {
        width: "".concat(r, "%")
      },
      durationTimestamp: (0, E.T_)({
        start: i
      }, n)
    }
  }, [t, l]);
  return null == r ? null : (0, i.jsxs)("div", {
    className: A.listeningTimeline,
    children: [(0, i.jsx)(T.x3, {
      entry: n
    }), (0, i.jsx)("div", {
      className: A.seekBarContainer,
      children: (0, i.jsx)("div", {
        className: A.seekBarFill,
        style: r
      })
    }), (0, i.jsx)(o.Text, {
      variant: "text-xs/normal",
      tabularNumbers: !0,
      color: void 0,
      children: s
    })]
  })
}

function j(e) {
  var t, n, T;
  let A, j, L, {
      channel: P,
      entry: O,
      requestId: y,
      closePopout: D
    } = e,
    {
      activity: k,
      currentEntry: U,
      artist: w,
      imageUrl: B,
      title: H,
      user: G
    } = (0, I.pi)(O),
    {
      primaryColor: V,
      secondaryColor: F
    } = (0, C.Z)(B),
    W = (0, s.e7)([u.Z, m.default], () => (null == k ? void 0 : k.type) === v.IIU.LISTENING && null != G ? (0, h.Z)(u.Z, m.default, G, k) : void 0, [k, G], r.Z),
    z = a.useCallback(() => {
      var e;
      if (null == P || null == G) return;
      let t = null === (e = k.timestamps) || void 0 === e ? void 0 : e.start,
        n = (0, E.T_)(null != t ? {
          start: t
        } : O, Date.now());
      return (0, g.CR)({
        user: G,
        channel: P,
        mediaImageSrc: B,
        artist: w,
        description: b({
          artist: w,
          media: H
        }, P, G),
        colors: [V, F],
        badges: (0, g.jE)({
          timestamp: n
        })
      })
    }, [k, w, P, O, B, V, F, H, G]);
  if (null == k || null == U) return null;
  let Y = w,
    K = [];
  if (U.media.provider === l.p.SPOTIFY && (null == W ? void 0 : W.syncDisabled) === !1) {
    A = () => {
      (0, p.Z)(W, S.kG.USER_ACTIVITY_SYNC), D()
    }, K.push((0, i.jsx)(x.Ll, {
      onClick: A,
      IconComponent: o.UserPlayIcon,
      children: Z.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
    }, "listen-along"));
    Y = (0, i.jsx)(_.Z, {
      artists: w,
      canOpen: null != k.sync_id,
      linkClassName: M.popoutTextSecondary,
      onOpenSpotifyArtist: e => {
        (0, c.d$)(k, G.id, e)
      }
    }), j = () => {
      (0, c.aG)(k)
    }, L = (0, d.Z)(W, S.kG.USER_ACTIVITY_SYNC, null != P ? f.ZP.getNickname(P.guild_id, P.id, G) : void 0)
  }
  let q = (0, i.jsx)(x.wG, {
    thumbnailSrc: B,
    channel: P,
    entry: O,
    headerIcons: (0, i.jsx)(N.Z, {
      onClick: A,
      "aria-label": L,
      provider: U.media.provider
    }),
    userDescription: (0, E.kr)(O) ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: H,
    onClickTitle: j,
    subtitle: Y,
    badges: null,
    children: (null === (t = k.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, i.jsx)(R, {
      activity: k
    })
  });
  return (0, i.jsxs)(x.yR, {
    children: [q, (0, i.jsx)(x.St, {
      children: (0, i.jsx)(x.WT, {
        closePopout: D,
        user: G,
        channel: P,
        generateReactionImage: z,
        reactionImageAltText: (n = w, T = G, Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
          username: T.username,
          activity: n
        })),
        entry: O,
        requestId: y,
        buttons: K
      })
    })]
  })
}