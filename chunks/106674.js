"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
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
  T = n("51144"),
  g = n("498058"),
  A = n("158631"),
  N = n("143614"),
  v = n("981631"),
  L = n("70722"),
  R = n("689938"),
  O = n("564773");

function M(e) {
  let {
    users: t
  } = e;
  return (0, a.jsxs)("div", {
    className: O.viewers,
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

function P(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: i,
    applicationId: p,
    channelId: I,
    streamKey: P
  } = n, [y, x] = s.useState(!1), D = (0, l.useStateFromStores)([C.default], () => C.default.getUser(i)), [b] = (0, c.default)([p]), U = null !== (t = T.default.getGlobalName(D)) && void 0 !== t ? t : T.default.getUserTag(D), j = (0, N.default)(), G = (0, l.useStateFromStores)([E.default], () => E.default.getPreviewURL(null, I, i)), w = (0, l.useStateFromStores)([_.default], () => _.default.getVoiceChannelId()), k = (0, A.default)(), B = (0, g.default)(I);
  if (s.useEffect(() => {
      y && w === I && x(!1)
    }, [w, y, I]), null == D || null == U) return null;
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
      buttonCTA: s ? R.default.Messages.BROADCAST_FULL : a ? R.default.Messages.VIEW_BROADCAST : R.default.Messages.JOIN_BROADCAST,
      disabled: s
    }
  }(i, B);
  return (0, a.jsxs)("div", {
    className: O.container,
    children: [(0, a.jsx)(r.Avatar, {
      size: r.AvatarSizes.SIZE_32,
      src: D.getAvatarURL(null, 32),
      "aria-label": U
    }), (0, a.jsxs)("div", {
      className: O.details,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: U
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: null != b ? R.default.Messages.STREAMING.format({
          name: b.name
        }) : R.default.Messages.STREAMING_A_GAME
      }), (0, a.jsxs)("div", {
        className: O.activity,
        children: [B.length > 0 && (0, a.jsx)(M, {
          users: B
        }), (0, a.jsxs)(r.Button, {
          onClick: () => {
            if (w === I) {
              o.default.selectPrivateChannel(I);
              return
            }
            x(!0), (0, u.joinPrivateChannelAndWatchStream)(I, P), d.default.trackWithMetadata(v.AnalyticEvents.BROADCAST_VIEWED, {
              num_active_broadcasts: j.length,
              broadcast_position: j.findIndex(e => e.userId === i) + 1,
              is_broadcasting: k,
              broadcast_channel_id: I
            })
          },
          color: F,
          size: r.ButtonSizes.SMALL,
          className: O.button,
          disabled: V,
          innerClassName: O.innerButton,
          children: [(0, a.jsx)(S.default, {
            width: 16,
            height: 16
          }), H]
        })]
      })]
    }), null != G ? (0, a.jsx)(f.default, {
      className: O.stream,
      stream: {
        streamType: L.StreamTypes.CALL,
        ownerId: i,
        channelId: I
      }
    }) : (0, a.jsx)(m.default, {
      game: b,
      size: m.default.Sizes.LARGE,
      className: O.gameIcon
    })]
  })
}