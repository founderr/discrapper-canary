n.d(t, {
  Z: function() {
    return L
  }
}), n(627494), n(757143), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(423875),
  a = n(442837),
  r = n(902704),
  o = n(481060),
  c = n(952164),
  u = n(768419),
  d = n(456190),
  h = n(239470),
  m = n(894344),
  p = n(314897),
  E = n(936195),
  g = n(5192),
  f = n(561308),
  C = n(256726),
  _ = n(206295),
  I = n(551228),
  x = n(591853),
  T = n(371991),
  N = n(410441),
  Z = n(981631),
  S = n(616922),
  v = n(689938),
  A = n(861666),
  M = n(208899);
let R = (e, t, n) => {
  let {
    artist: l,
    media: i
  } = e, s = v.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, a = g.ZP.getName(t.guild_id, t.id, n);
  return s.plainFormat({
    artist: l,
    userName: a,
    media: i
  }).replaceAll("*", "")
};

function j(e) {
  let {
    activity: t
  } = e, n = t.timestamps, s = (0, T.tS)(n), {
    durationTimestamp: a,
    seekBarStyles: r
  } = i.useMemo(() => {
    var e;
    let {
      start: n,
      end: l
    } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
    if (null == n || null == l) return {};
    let i = Math.min(l, s),
      a = l - n,
      r = Math.floor((i - n) / a * 100);
    return {
      seekBarStyles: {
        width: "".concat(r, "%")
      },
      durationTimestamp: (0, f.T_)({
        start: l
      }, n)
    }
  }, [t, s]);
  return null == r ? null : (0, l.jsxs)("div", {
    className: A.listeningTimeline,
    children: [(0, l.jsx)(T.x3, {
      entry: n
    }), (0, l.jsx)("div", {
      className: A.seekBarContainer,
      children: (0, l.jsx)("div", {
        className: A.seekBarFill,
        style: r
      })
    }), (0, l.jsx)(o.Text, {
      variant: "text-xs/normal",
      tabularNumbers: !0,
      color: void 0,
      children: a
    })]
  })
}

function L(e) {
  var t, n, T;
  let A, L, O, {
      channel: P,
      entry: b,
      requestId: y,
      closePopout: D
    } = e,
    {
      activity: U,
      currentEntry: k,
      artist: w,
      imageUrl: H,
      title: B,
      user: G
    } = (0, I.pi)(b),
    {
      primaryColor: V,
      secondaryColor: F
    } = (0, _.Z)(H),
    z = (0, a.e7)([u.Z, p.default], () => (null == U ? void 0 : U.type) === Z.IIU.LISTENING && null != G ? (0, h.Z)(u.Z, p.default, G, U) : void 0, [U, G], r.Z),
    W = i.useCallback(() => {
      var e;
      if (null == P || null == G) return;
      let t = null === (e = U.timestamps) || void 0 === e ? void 0 : e.start,
        n = (0, f.T_)(null != t ? {
          start: t
        } : b, Date.now());
      return (0, C.CR)({
        user: G,
        channel: P,
        mediaImageSrc: H,
        artist: w,
        description: R({
          artist: w,
          media: B
        }, P, G),
        colors: [V, F],
        badges: (0, C.jE)({
          timestamp: n
        })
      })
    }, [U, w, P, b, H, V, F, B, G]);
  if (null == U || null == k) return null;
  let Y = w,
    K = [];
  if (k.media.provider === s.p.SPOTIFY && (null == z ? void 0 : z.syncDisabled) === !1) {
    A = () => {
      (0, m.Z)(z, S.kG.USER_ACTIVITY_SYNC), D()
    }, K.push((0, l.jsx)(x.Ll, {
      onClick: A,
      IconComponent: o.UserPlayIcon,
      children: v.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
    }, "listen-along"));
    Y = (0, l.jsx)(E.Z, {
      artists: w,
      canOpen: null != U.sync_id,
      linkClassName: M.popoutTextSecondary,
      onOpenSpotifyArtist: e => {
        (0, c.d$)(U, G.id, e)
      }
    }), L = () => {
      (0, c.aG)(U)
    }, O = (0, d.Z)(z, S.kG.USER_ACTIVITY_SYNC, null != P ? g.ZP.getNickname(P.guild_id, P.id, G) : void 0)
  }
  let q = (0, l.jsx)(x.wG, {
    thumbnailSrc: H,
    channel: P,
    entry: b,
    headerIcons: (0, l.jsx)(N.Z, {
      onClick: A,
      "aria-label": O,
      provider: k.media.provider
    }),
    userDescription: (0, f.kr)(b) ? v.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : v.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: B,
    onClickTitle: L,
    subtitle: Y,
    badges: null,
    children: (null === (t = U.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, l.jsx)(j, {
      activity: U
    })
  });
  return (0, l.jsxs)(x.yR, {
    children: [q, (0, l.jsx)(x.St, {
      children: (0, l.jsx)(x.WT, {
        closePopout: D,
        user: G,
        channel: P,
        generateReactionImage: W,
        reactionImageAltText: (n = w, T = G, v.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
          username: T.username,
          activity: n
        })),
        entry: b,
        requestId: y,
        buttons: K
      })
    })]
  })
}