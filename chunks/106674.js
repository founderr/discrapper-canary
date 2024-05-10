"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
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
  L = n("689938"),
  O = n("267071");

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

function y(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: i,
    applicationId: p,
    channelId: I,
    streamKey: y
  } = n, [P, x] = s.useState(!1), D = (0, l.useStateFromStores)([C.default], () => C.default.getUser(i)), [b] = (0, c.default)([p]), U = null !== (t = g.default.getGlobalName(D)) && void 0 !== t ? t : g.default.getUserTag(D), j = (0, N.default)(), G = (0, l.useStateFromStores)([E.default], () => E.default.getPreviewURL(null, I, i)), k = (0, l.useStateFromStores)([_.default], () => _.default.getVoiceChannelId()), w = (0, A.default)(), F = (0, T.default)(I);
  if (s.useEffect(() => {
      P && k === I && x(!1)
    }, [k, P, I]), null == D || null == U) return null;
  let {
    buttonColor: B,
    buttonCTA: H,
    disabled: V
  } = function(e, t) {
    let n = h.default.getId(),
      a = t.some(e => e.id === n) || e === n,
      s = t.length >= v.MAX_GROUP_DM_BROADCAST_PARTICIPANTS;
    return {
      buttonColor: s ? r.ButtonColors.RED : r.ButtonColors.GREEN,
      buttonCTA: s ? L.default.Messages.BROADCAST_FULL : a ? L.default.Messages.VIEW_BROADCAST : L.default.Messages.JOIN_BROADCAST,
      disabled: s
    }
  }(i, F);
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
        children: null != b ? L.default.Messages.STREAMING.format({
          name: b.name
        }) : L.default.Messages.STREAMING_A_GAME
      }), (0, a.jsxs)("div", {
        className: O.activity,
        children: [F.length > 0 && (0, a.jsx)(M, {
          users: F
        }), (0, a.jsxs)(r.Button, {
          onClick: () => {
            if (k === I) {
              o.default.selectPrivateChannel(I);
              return
            }
            x(!0), (0, u.joinPrivateChannelAndWatchStream)(I, y), d.default.trackWithMetadata(v.AnalyticEvents.BROADCAST_VIEWED, {
              num_active_broadcasts: j.length,
              broadcast_position: j.findIndex(e => e.userId === i) + 1,
              is_broadcasting: w,
              broadcast_channel_id: I
            })
          },
          color: B,
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
        streamType: R.StreamTypes.CALL,
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