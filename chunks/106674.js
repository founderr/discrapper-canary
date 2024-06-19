n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  l = n(442837),
  a = n(692547),
  r = n(481060),
  o = n(287734),
  c = n(872810),
  u = n(367907),
  d = n(835473),
  E = n(871118),
  h = n(543882),
  _ = n(314897),
  I = n(944486),
  m = n(594174),
  g = n(366695),
  p = n(602623),
  T = n(51144),
  N = n(498058),
  S = n(158631),
  C = n(143614),
  A = n(981631),
  f = n(70722),
  Z = n(689938),
  v = n(938138);

function L(e) {
  let {
    users: t
  } = e;
  return (0, i.jsxs)("div", {
    className: v.viewers,
    children: [(0, i.jsx)(r.VoiceNormalIcon, {
      size: "custom",
      width: 16,
      height: 16,
      color: a.Z.colors.HEADER_PRIMARY.css
    }), (0, i.jsx)(p.Z, {
      showUserPopout: !0,
      useFallbackUserForPopout: !0,
      users: t,
      max: 6,
      size: p.u.SIZE_24
    })]
  })
}

function O(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: a,
    applicationId: p,
    channelId: O,
    streamKey: R
  } = n, [x, M] = s.useState(!1), P = (0, l.e7)([m.default], () => m.default.getUser(a)), [D] = (0, d.Z)([p]), b = null !== (t = T.ZP.getGlobalName(P)) && void 0 !== t ? t : T.ZP.getUserTag(P), y = (0, C.Z)(), j = (0, l.e7)([h.Z], () => h.Z.getPreviewURL(null, O, a)), U = (0, l.e7)([I.Z], () => I.Z.getVoiceChannelId()), G = (0, S.ZP)(), w = (0, N.Z)(O);
  if (s.useEffect(() => {
      x && U === O && M(!1)
    }, [U, x, O]), null == P || null == b) return null;
  let {
    buttonColor: k,
    buttonCTA: B,
    disabled: H
  } = function(e, t) {
    let n = _.default.getId(),
      i = t.some(e => e.id === n) || e === n,
      s = t.length >= A.keq;
    return {
      buttonColor: s ? r.ButtonColors.RED : r.ButtonColors.GREEN,
      buttonCTA: s ? Z.Z.Messages.BROADCAST_FULL : i ? Z.Z.Messages.VIEW_BROADCAST : Z.Z.Messages.JOIN_BROADCAST,
      disabled: s
    }
  }(a, w);
  return (0, i.jsxs)("div", {
    className: v.container,
    children: [(0, i.jsx)(r.Avatar, {
      size: r.AvatarSizes.SIZE_32,
      src: P.getAvatarURL(null, 32),
      "aria-label": b
    }), (0, i.jsxs)("div", {
      className: v.details,
      children: [(0, i.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: b
      }), (0, i.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: null != D ? Z.Z.Messages.STREAMING.format({
          name: D.name
        }) : Z.Z.Messages.STREAMING_A_GAME
      }), (0, i.jsxs)("div", {
        className: v.activity,
        children: [w.length > 0 && (0, i.jsx)(L, {
          users: w
        }), (0, i.jsxs)(r.Button, {
          onClick: () => {
            if (U === O) {
              o.default.selectPrivateChannel(O);
              return
            }
            M(!0), (0, c.W1)(O, R), u.ZP.trackWithMetadata(A.rMx.BROADCAST_VIEWED, {
              num_active_broadcasts: y.length,
              broadcast_position: y.findIndex(e => e.userId === a) + 1,
              is_broadcasting: G,
              broadcast_channel_id: O
            })
          },
          color: k,
          size: r.ButtonSizes.SMALL,
          className: v.button,
          disabled: H,
          innerClassName: v.innerButton,
          children: [(0, i.jsx)(r.MicrophoneArrowRightIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16
          }), B]
        })]
      })]
    }), null != j ? (0, i.jsx)(E.Z, {
      className: v.stream,
      stream: {
        streamType: f.lo.CALL,
        ownerId: a,
        channelId: O
      }
    }) : (0, i.jsx)(g.Z, {
      game: D,
      size: g.Z.Sizes.LARGE,
      className: v.gameIcon
    })]
  })
}