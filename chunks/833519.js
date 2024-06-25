n.d(t, {
  Z: function() {
    return B
  },
  _: function() {
    return G
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(475179),
  u = n(872810),
  d = n(763520),
  h = n(710845),
  m = n(590293),
  E = n(863908),
  p = n(871118),
  g = n(517525),
  f = n(590076),
  C = n(507675),
  _ = n(199902),
  I = n(314897),
  x = n(592125),
  T = n(131951),
  N = n(451478),
  Z = n(40300),
  S = n(368666),
  v = n(685203),
  A = n(112560),
  M = n(442168),
  R = n(822296),
  j = n(916771),
  L = n(792517),
  O = n(979425),
  P = n(651183),
  y = n(623825),
  b = n(981631),
  D = n(354459),
  U = n(65154),
  k = n(689938),
  w = n(372453);
let H = new h.Z("StreamTile");

function G(e) {
  let {
    participant: t,
    selected: n,
    focused: i,
    idle: s,
    width: a,
    premiumIndicator: o
  } = e, c = (0, r.e7)([_.Z], () => _.Z.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, y.K)(a);
  return (0, l.jsxs)(l.Fragment, {
    children: [n ? null : (0, l.jsx)(P.Z, {
      participant: t
    }), i || null == c || c.state === b.jm8.ENDED || c.state === b.jm8.FAILED ? null : (0, l.jsx)(g.Z, {
      size: S.ZP.Sizes.SMALL,
      className: w.liveIndicator,
      participant: t,
      showQuality: !u && !s,
      isUpsellEnabled: !1,
      premiumIndicator: o
    })]
  })
}

function B(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: s,
    paused: h,
    fit: g,
    inPopout: S,
    width: P,
    focused: y
  } = e, G = T.Z.getVideoComponent(), B = (0, r.e7)([I.default], () => I.default.getId()), V = (0, m.Z)(), {
    stream: F,
    user: z,
    streamId: W
  } = t, Y = (0, r.e7)([x.Z], () => x.Z.getChannel(F.channelId)), K = (0, r.e7)([_.Z], () => _.Z.getActiveStreamForUser(z.id, F.guildId), [z.id, F.guildId]), q = (0, r.e7)([_.Z], () => _.Z.getAllActiveStreams().length > 0), X = (0, r.e7)([N.Z], () => N.Z.isFocused()), Q = (null == K ? void 0 : K.ownerId) === B, J = Q && !X && !S, $ = null != K ? (0, E.Z)(K, z, z.id === B, J) : null, ee = P < 195;
  if (i.useEffect(() => {
      !q && (null == Y ? void 0 : Y.isGuildStageVoice()) && !Q && ((0, u.rn)(F), c.Z.updateStageStreamSize(F.channelId, !1))
    }, []), i.useEffect(() => {
      H.info("Stream Tile State - activeStream: ".concat(null != K, " | selected: ").concat(n, " | Video: ").concat(null != G, " | MediaEngine: ").concat(T.Z.supports(U.AN.VIDEO)))
    }, [G, K, n]), V) return (0, l.jsx)(O.Z, {
    stream: t.stream,
    isSmall: ee,
    selected: n,
    isSelfStream: z.id === B
  });
  if ((null == K ? void 0 : K.state) === b.jm8.ENDED) return (0, l.jsx)(R.Z, {
    selected: n,
    stream: K,
    width: P
  });
  if ((null == K ? void 0 : K.state) === b.jm8.FAILED) return (0, l.jsx)(j.Z, {
    selected: n,
    stream: K,
    width: P
  });
  else if (t.type === D.fO.HIDDEN_STREAM) return (0, l.jsx)(L.Z, {
    selected: n,
    participant: t,
    width: P
  });
  else if (null != K && !n && null != G && T.Z.supports(U.AN.VIDEO)) return (0, l.jsxs)(l.Fragment, {
    children: [null != Y ? (0, l.jsx)(f.Z, {
      focused: y,
      channelId: Y.id,
      guildId: Y.guild_id,
      streamerId: z.id,
      hasScreenMessage: null != $,
      stream: F
    }) : null, (0, l.jsx)(Z.Z, {
      onResize: s,
      wrapperClassName: w.videoWrapper,
      className: w.content,
      streamId: W,
      videoComponent: G,
      fit: g,
      paused: h || J,
      videoSpinnerContext: Q ? d.m.SELF_STREAM : d.m.REMOTE_STREAM,
      userId: z.id
    }, W), null != $ ? (0, l.jsx)(C.Z, {
      size: (0, A.L)(P),
      ...$
    }) : null, (0, l.jsx)(M.Z, {
      stream: F,
      inPopout: S
    })]
  });
  else return (0, l.jsxs)("div", {
    className: a()(w.content, w.streamPreview, {
      [w.small]: ee
    }),
    children: [(0, l.jsx)(p.Z, {
      noText: !0,
      className: a()(w.absoluteFill, {
        [w.streamPreviewOpacity]: null == K
      }),
      stream: t.stream
    }), n ? null : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(v.a, {
        isSmall: ee,
        children: (0, l.jsx)(o.Text, {
          variant: ee ? "text-sm/semibold" : "text-md/semibold",
          color: "none",
          children: P < 175 ? k.Z.Messages.WATCH : k.Z.Messages.WATCH_STREAM
        })
      }), q ? (0, l.jsx)(v.a, {
        className: w.addCTA,
        tooltip: k.Z.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
        onClick: e => {
          e.stopPropagation(), (0, u.rn)(F, {
            forceMultiple: !0
          })
        },
        isSmall: ee,
        children: (0, l.jsx)(o.EyePlusIcon, {
          size: "xs",
          color: "currentColor",
          className: w.addStreamIcon
        })
      }) : null]
    })]
  })
}