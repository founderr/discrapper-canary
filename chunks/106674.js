"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  i = n("442837"),
  l = n("692547"),
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
  g = n("602623"),
  I = n("51144"),
  T = n("498058"),
  A = n("158631"),
  N = n("143614"),
  v = n("981631"),
  R = n("70722"),
  L = n("689938"),
  O = n("267071");

function y(e) {
  let {
    users: t
  } = e;
  return (0, a.jsxs)("div", {
    className: O.viewers,
    children: [(0, a.jsx)(p.default, {
      width: 16,
      height: 16,
      color: l.default.colors.HEADER_PRIMARY.css
    }), (0, a.jsx)(g.default, {
      showUserPopout: !0,
      useFallbackUserForPopout: !0,
      users: t,
      max: 6,
      size: g.Sizes.SIZE_24
    })]
  })
}

function M(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: l,
    applicationId: p,
    channelId: g,
    streamKey: M
  } = n, [P, x] = s.useState(!1), D = (0, i.useStateFromStores)([C.default], () => C.default.getUser(l)), [b] = (0, c.default)([p]), U = null !== (t = I.default.getGlobalName(D)) && void 0 !== t ? t : I.default.getUserTag(D), j = (0, N.default)(), G = (0, i.useStateFromStores)([E.default], () => E.default.getPreviewURL(null, g, l)), k = (0, i.useStateFromStores)([_.default], () => _.default.getVoiceChannelId()), w = (0, A.default)(), F = (0, T.default)(g);
  if (s.useEffect(() => {
      P && k === g && x(!1)
    }, [k, P, g]), null == D || null == U) return null;
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
  }(l, F);
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
        children: [F.length > 0 && (0, a.jsx)(y, {
          users: F
        }), (0, a.jsxs)(r.Button, {
          onClick: () => {
            if (k === g) {
              o.default.selectPrivateChannel(g);
              return
            }
            x(!0), (0, u.joinPrivateChannelAndWatchStream)(g, M), d.default.trackWithMetadata(v.AnalyticEvents.BROADCAST_VIEWED, {
              num_active_broadcasts: j.length,
              broadcast_position: j.findIndex(e => e.userId === l) + 1,
              is_broadcasting: w,
              broadcast_channel_id: g
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
        ownerId: l,
        channelId: g
      }
    }) : (0, a.jsx)(m.default, {
      game: b,
      size: m.default.Sizes.LARGE,
      className: O.gameIcon
    })]
  })
}