"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("669491"),
  r = n("77078"),
  o = n("987317"),
  u = n("990766"),
  d = n("716241"),
  c = n("442939"),
  f = n("673527"),
  E = n("410348"),
  _ = n("271938"),
  h = n("18494"),
  C = n("697218"),
  I = n("953109"),
  T = n("277174"),
  S = n("368121"),
  p = n("811305"),
  m = n("158998"),
  g = n("882278"),
  A = n("754493"),
  N = n("813531"),
  R = n("49111"),
  O = n("706530"),
  L = n("782340"),
  v = n("42845");

function M(e) {
  let {
    users: t
  } = e;
  return (0, a.jsxs)("div", {
    className: v.viewers,
    children: [(0, a.jsx)(S.default, {
      width: 16,
      height: 16,
      color: i.default.colors.HEADER_PRIMARY.css
    }), (0, a.jsx)(p.default, {
      showUserPopout: !0,
      useFallbackUserForPopout: !0,
      users: t,
      max: 6,
      size: p.Sizes.SIZE_24
    })]
  })
}

function P(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: i,
    applicationId: S,
    channelId: p,
    streamKey: P
  } = n, [D, y] = s.useState(!1), x = (0, l.useStateFromStores)([C.default], () => C.default.getUser(i)), [b] = (0, c.default)([S]), U = null !== (t = m.default.getGlobalName(x)) && void 0 !== t ? t : m.default.getUserTag(x), G = (0, N.default)(), j = (0, l.useStateFromStores)([E.default], () => E.default.getPreviewURL(null, p, i)), w = (0, l.useStateFromStores)([h.default], () => h.default.getVoiceChannelId()), k = (0, A.default)(), F = (0, g.default)(p);
  if (s.useEffect(() => {
      D && w === p && y(!1)
    }, [w, D, p]), null == x || null == U) return null;
  let {
    buttonColor: B,
    buttonCTA: H,
    disabled: V
  } = function(e, t) {
    let n = _.default.getId(),
      a = t.some(e => e.id === n) || e === n,
      s = t.length >= R.MAX_GROUP_DM_BROADCAST_PARTICIPANTS;
    return {
      buttonColor: s ? r.ButtonColors.RED : r.ButtonColors.GREEN,
      buttonCTA: s ? L.default.Messages.BROADCAST_FULL : a ? L.default.Messages.VIEW_BROADCAST : L.default.Messages.JOIN_BROADCAST,
      disabled: s
    }
  }(i, F);
  return (0, a.jsxs)("div", {
    className: v.container,
    children: [(0, a.jsx)(r.Avatar, {
      size: r.AvatarSizes.SIZE_32,
      src: x.getAvatarURL(null, 32),
      "aria-label": U
    }), (0, a.jsxs)("div", {
      className: v.details,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: U
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: null != b ? L.default.Messages.STREAMING.format({
          name: b.name
        }) : L.default.Messages.STREAMING_A_GAME
      }), (0, a.jsxs)("div", {
        className: v.activity,
        children: [F.length > 0 && (0, a.jsx)(M, {
          users: F
        }), (0, a.jsxs)(r.Button, {
          onClick: () => {
            if (w === p) {
              o.default.selectPrivateChannel(p);
              return
            }
            y(!0), (0, u.joinPrivateChannelAndWatchStream)(p, P), d.default.trackWithMetadata(R.AnalyticEvents.BROADCAST_VIEWED, {
              num_active_broadcasts: G.length,
              broadcast_position: G.findIndex(e => e.userId === i) + 1,
              is_broadcasting: k,
              broadcast_channel_id: p
            })
          },
          color: B,
          size: r.ButtonSizes.SMALL,
          className: v.button,
          disabled: V,
          innerClassName: v.innerButton,
          children: [(0, a.jsx)(T.default, {
            width: 16,
            height: 16
          }), H]
        })]
      })]
    }), null != j ? (0, a.jsx)(f.default, {
      className: v.stream,
      stream: {
        streamType: O.StreamTypes.CALL,
        ownerId: i,
        channelId: p
      }
    }) : (0, a.jsx)(I.default, {
      game: b,
      size: I.default.Sizes.LARGE,
      className: v.gameIcon
    })]
  })
}