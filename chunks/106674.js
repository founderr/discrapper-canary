"use strict";
a.r(t), a.d(t, {
  default: function() {
    return M
  }
}), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("692547"),
  r = a("481060"),
  o = a("287734"),
  u = a("872810"),
  d = a("367907"),
  c = a("835473"),
  f = a("871118"),
  E = a("543882"),
  h = a("314897"),
  _ = a("944486"),
  C = a("594174"),
  m = a("366695"),
  S = a("372662"),
  I = a("632184"),
  p = a("602623"),
  T = a("51144"),
  g = a("498058"),
  A = a("158631"),
  N = a("143614"),
  v = a("981631"),
  R = a("70722"),
  O = a("689938"),
  L = a("420869");

function P(e) {
  let {
    users: t
  } = e;
  return (0, n.jsxs)("div", {
    className: L.viewers,
    children: [(0, n.jsx)(I.default, {
      width: 16,
      height: 16,
      color: i.default.colors.HEADER_PRIMARY.css
    }), (0, n.jsx)(p.default, {
      showUserPopout: !0,
      useFallbackUserForPopout: !0,
      users: t,
      max: 6,
      size: p.Sizes.SIZE_24
    })]
  })
}

function M(e) {
  var t;
  let {
    broadcast: a
  } = e, {
    userId: i,
    applicationId: I,
    channelId: p,
    streamKey: M
  } = a, [x, y] = s.useState(!1), D = (0, l.useStateFromStores)([C.default], () => C.default.getUser(i)), [b] = (0, c.default)([I]), U = null !== (t = T.default.getGlobalName(D)) && void 0 !== t ? t : T.default.getUserTag(D), j = (0, N.default)(), G = (0, l.useStateFromStores)([E.default], () => E.default.getPreviewURL(null, p, i)), w = (0, l.useStateFromStores)([_.default], () => _.default.getVoiceChannelId()), k = (0, A.default)(), F = (0, g.default)(p);
  if (s.useEffect(() => {
      x && w === p && y(!1)
    }, [w, x, p]), null == D || null == U) return null;
  let {
    buttonColor: B,
    buttonCTA: H,
    disabled: V
  } = function(e, t) {
    let a = h.default.getId(),
      n = t.some(e => e.id === a) || e === a,
      s = t.length >= v.MAX_GROUP_DM_BROADCAST_PARTICIPANTS;
    return {
      buttonColor: s ? r.ButtonColors.RED : r.ButtonColors.GREEN,
      buttonCTA: s ? O.default.Messages.BROADCAST_FULL : n ? O.default.Messages.VIEW_BROADCAST : O.default.Messages.JOIN_BROADCAST,
      disabled: s
    }
  }(i, F);
  return (0, n.jsxs)("div", {
    className: L.container,
    children: [(0, n.jsx)(r.Avatar, {
      size: r.AvatarSizes.SIZE_32,
      src: D.getAvatarURL(null, 32),
      "aria-label": U
    }), (0, n.jsxs)("div", {
      className: L.details,
      children: [(0, n.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: U
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: null != b ? O.default.Messages.STREAMING.format({
          name: b.name
        }) : O.default.Messages.STREAMING_A_GAME
      }), (0, n.jsxs)("div", {
        className: L.activity,
        children: [F.length > 0 && (0, n.jsx)(P, {
          users: F
        }), (0, n.jsxs)(r.Button, {
          onClick: () => {
            if (w === p) {
              o.default.selectPrivateChannel(p);
              return
            }
            y(!0), (0, u.joinPrivateChannelAndWatchStream)(p, M), d.default.trackWithMetadata(v.AnalyticEvents.BROADCAST_VIEWED, {
              num_active_broadcasts: j.length,
              broadcast_position: j.findIndex(e => e.userId === i) + 1,
              is_broadcasting: k,
              broadcast_channel_id: p
            })
          },
          color: B,
          size: r.ButtonSizes.SMALL,
          className: L.button,
          disabled: V,
          innerClassName: L.innerButton,
          children: [(0, n.jsx)(S.default, {
            width: 16,
            height: 16
          }), H]
        })]
      })]
    }), null != G ? (0, n.jsx)(f.default, {
      className: L.stream,
      stream: {
        streamType: R.StreamTypes.CALL,
        ownerId: i,
        channelId: p
      }
    }) : (0, n.jsx)(m.default, {
      game: b,
      size: m.default.Sizes.LARGE,
      className: L.gameIcon
    })]
  })
}