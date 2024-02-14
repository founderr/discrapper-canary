"use strict";
n.r(t), n.d(t, {
  StreamTileIndicators: function() {
    return H
  },
  default: function() {
    return G
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  o = n("77078"),
  u = n("255397"),
  d = n("990766"),
  c = n("103723"),
  f = n("605250"),
  h = n("889014"),
  m = n("430951"),
  p = n("673527"),
  E = n("336804"),
  S = n("952221"),
  g = n("600123"),
  C = n("373469"),
  _ = n("271938"),
  I = n("42203"),
  T = n("42887"),
  v = n("471671"),
  x = n("512264"),
  N = n("30672"),
  A = n("980423"),
  M = n("100844"),
  R = n("607391"),
  j = n("466211"),
  L = n("683245"),
  y = n("772442"),
  O = n("211019"),
  P = n("810640"),
  b = n("170643"),
  D = n("144565"),
  U = n("49111"),
  w = n("99795"),
  F = n("353927"),
  k = n("782340"),
  V = n("532351");
let B = new f.default("StreamTile");

function H(e) {
  let {
    participant: t,
    selected: n,
    focused: l,
    idle: s,
    width: i
  } = e, o = (0, r.useStateFromStores)([C.default], () => C.default.getActiveStreamForUser(t.user.id, t.stream.guildId)), u = (0, D.isVideoCompact)(i);
  return (0, a.jsxs)(a.Fragment, {
    children: [n ? null : (0, a.jsx)(b.default, {
      participant: t
    }), l || null == o || o.state === U.ApplicationStreamStates.ENDED || o.state === U.ApplicationStreamStates.FAILED ? null : (0, a.jsx)(E.default, {
      size: A.default.Sizes.SMALL,
      className: V.liveIndicator,
      participant: t,
      showQuality: !u && !s,
      isUpsellEnabled: !1
    })]
  })
}

function G(e) {
  let {
    participant: t,
    selected: n,
    onVideoResize: s,
    paused: f,
    fit: E,
    inPopout: A,
    width: b,
    focused: D
  } = e, H = T.default.getVideoComponent(), G = (0, r.useStateFromStores)([_.default], () => _.default.getId()), W = (0, h.default)(), {
    stream: Y,
    user: z,
    streamId: K
  } = t, Z = (0, r.useStateFromStores)([I.default], () => I.default.getChannel(Y.channelId)), X = (0, r.useStateFromStores)([C.default], () => C.default.getActiveStreamForUser(z.id, Y.guildId), [z.id, Y.guildId]), Q = (0, r.useStateFromStores)([C.default], () => C.default.getAllActiveStreams().length > 0), q = (0, r.useStateFromStores)([v.default], () => v.default.isFocused()), J = (null == X ? void 0 : X.ownerId) === G, $ = J && !q && !A, ee = null != X ? (0, m.default)(X, z, z.id === G, $) : null, et = b < 195;
  if (l.useEffect(() => {
      !Q && (null == Z ? void 0 : Z.isGuildStageVoice()) && !J && ((0, d.watchStream)(Y), u.default.updateStageStreamSize(Y.channelId, !1))
    }, []), l.useEffect(() => {
      B.info("Stream Tile State - activeStream: ".concat(null != X, " | selected: ").concat(n, " | Video: ").concat(null != H, " | MediaEngine: ").concat(T.default.supports(F.Features.VIDEO)))
    }, [H, X, n]), W) return (0, a.jsx)(P.default, {
    stream: t.stream,
    isSmall: et,
    selected: n,
    isSelfStream: z.id === G
  });
  if ((null == X ? void 0 : X.state) === U.ApplicationStreamStates.ENDED) return (0, a.jsx)(L.default, {
    selected: n,
    stream: X,
    width: b
  });
  if ((null == X ? void 0 : X.state) === U.ApplicationStreamStates.FAILED) return (0, a.jsx)(y.default, {
    selected: n,
    stream: X,
    width: b
  });
  else if (t.type === w.ParticipantTypes.HIDDEN_STREAM) return (0, a.jsx)(O.default, {
    selected: n,
    participant: t,
    width: b
  });
  else if (null != X && !n && null != H && T.default.supports(F.Features.VIDEO)) return (0, a.jsxs)(a.Fragment, {
    children: [null != Z ? (0, a.jsx)(S.default, {
      focused: D,
      channelId: Z.id,
      guildId: Z.guild_id,
      streamerId: z.id,
      hasScreenMessage: null != ee,
      stream: Y
    }) : null, (0, a.jsx)(x.default, {
      onResize: s,
      wrapperClassName: V.videoWrapper,
      className: V.content,
      streamId: K,
      videoComponent: H,
      fit: E,
      paused: f || $,
      videoSpinnerContext: J ? c.VideoSpinnerContext.SELF_STREAM : c.VideoSpinnerContext.REMOTE_STREAM,
      userId: z.id
    }, K), null != ee ? (0, a.jsx)(g.default, {
      size: (0, R.getSizeForWidth)(b),
      ...ee
    }) : null, (0, a.jsx)(j.default, {
      stream: Y,
      inPopout: A
    })]
  });
  else return (0, a.jsxs)("div", {
    className: i(V.content, V.streamPreview, {
      [V.small]: et
    }),
    children: [(0, a.jsx)(p.default, {
      noText: !0,
      className: i(V.absoluteFill, {
        [V.streamPreviewOpacity]: null == X
      }),
      stream: t.stream
    }), n ? null : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(M.CallTileCTA, {
        isSmall: et,
        children: (0, a.jsx)(o.Text, {
          variant: et ? "text-sm/semibold" : "text-md/semibold",
          color: "none",
          children: b < 175 ? k.default.Messages.WATCH : k.default.Messages.WATCH_STREAM
        })
      }), Q ? (0, a.jsx)(M.CallTileCTA, {
        className: V.addCTA,
        tooltip: k.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
        onClick: e => {
          e.stopPropagation(), (0, d.watchStream)(Y, {
            forceMultiple: !0
          })
        },
        isSmall: et,
        children: (0, a.jsx)(N.default, {
          className: V.addStreamIcon
        })
      }) : null]
    })]
  })
}