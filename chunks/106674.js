"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("692547"),
  r = n("481060"),
  o = n("287734"),
  u = n("872810"),
  d = n("367907"),
  c = n("835473"),
  f = n("871118"),
  E = n("543882"),
  h = n("314897"),
  _ = n("944486"),
  C = n("594174"),
  m = n("366695"),
  S = n("372662"),
  p = n("632184"),
  I = n("602623"),
  g = n("51144"),
  T = n("498058"),
  A = n("158631"),
  N = n("143614"),
  v = n("981631"),
  R = n("70722"),
  O = n("689938"),
  L = n("267071");

function M(e) {
  let {
    users: t
  } = e;
  return (0, a.jsxs)("div", {
    className: L.viewers,
    children: [(0, a.jsx)(p.default, {
      width: 16,
      height: 16,
      color: i.default.colors.HEADER_PRIMARY.css
    }), (0, a.jsx)(I.default, {
      showUserPopout: !0,
      useFallbackUserForPopout: !0,
      users: t,
      max: 6,
      size: I.Sizes.SIZE_24
    })]
  })
}

function x(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: i,
    applicationId: p,
    channelId: I,
    streamKey: x
  } = n, [P, y] = s.useState(!1), D = (0, l.useStateFromStores)([C.default], () => C.default.getUser(i)), [b] = (0, c.default)([p]), U = null !== (t = g.default.getGlobalName(D)) && void 0 !== t ? t : g.default.getUserTag(D), j = (0, N.default)(), G = (0, l.useStateFromStores)([E.default], () => E.default.getPreviewURL(null, I, i)), w = (0, l.useStateFromStores)([_.default], () => _.default.getVoiceChannelId()), k = (0, A.default)(), B = (0, T.default)(I);
  if (s.useEffect(() => {
      P && w === I && y(!1)
    }, [w, P, I]), null == D || null == U) return null;
  let {
    buttonColor: F,
    buttonCTA: H,
    disabled: V
  } = function(e, t) {
    let n = h.default.getId(),
      a = t.some(e => e.id === n) || e === n,
      s = t.length >= v.MAX_GROUP_DM_BROADCAST_PARTICIPANTS;
    return {
      buttonColor: s ? r.ButtonColors.RED : r.ButtonColors.GREEN,
      buttonCTA: s ? O.default.Messages.BROADCAST_FULL : a ? O.default.Messages.VIEW_BROADCAST : O.default.Messages.JOIN_BROADCAST,
      disabled: s
    }
  }(i, B);
  return (0, a.jsxs)("div", {
    className: L.container,
    children: [(0, a.jsx)(r.Avatar, {
      size: r.AvatarSizes.SIZE_32,
      src: D.getAvatarURL(null, 32),
      "aria-label": U
    }), (0, a.jsxs)("div", {
      className: L.details,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: U
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: null != b ? O.default.Messages.STREAMING.format({
          name: b.name
        }) : O.default.Messages.STREAMING_A_GAME
      }), (0, a.jsxs)("div", {
        className: L.activity,
        children: [B.length > 0 && (0, a.jsx)(M, {
          users: B
        }), (0, a.jsxs)(r.Button, {
          onClick: () => {
            if (w === I) {
              o.default.selectPrivateChannel(I);
              return
            }
            y(!0), (0, u.joinPrivateChannelAndWatchStream)(I, x), d.default.trackWithMetadata(v.AnalyticEvents.BROADCAST_VIEWED, {
              num_active_broadcasts: j.length,
              broadcast_position: j.findIndex(e => e.userId === i) + 1,
              is_broadcasting: k,
              broadcast_channel_id: I
            })
          },
          color: F,
          size: r.ButtonSizes.SMALL,
          className: L.button,
          disabled: V,
          innerClassName: L.innerButton,
          children: [(0, a.jsx)(S.default, {
            width: 16,
            height: 16
          }), H]
        })]
      })]
    }), null != G ? (0, a.jsx)(f.default, {
      className: L.stream,
      stream: {
        streamType: R.StreamTypes.CALL,
        ownerId: i,
        channelId: I
      }
    }) : (0, a.jsx)(m.default, {
      game: b,
      size: m.default.Sizes.LARGE,
      className: L.gameIcon
    })]
  })
}