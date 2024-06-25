n.d(t, {
  Z: function() {
    return v
  }
}), n(47120);
var s = n(735250),
  i = n(470079),
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
  T = n(366695),
  g = n(602623),
  p = n(51144),
  N = n(498058),
  S = n(158631),
  C = n(143614),
  A = n(981631),
  f = n(70722),
  Z = n(689938),
  L = n(938138);

function O(e) {
  let {
    users: t
  } = e;
  return (0, s.jsxs)("div", {
    className: L.viewers,
    children: [(0, s.jsx)(r.VoiceNormalIcon, {
      size: "custom",
      width: 16,
      height: 16,
      color: a.Z.colors.HEADER_PRIMARY.css
    }), (0, s.jsx)(g.Z, {
      showUserPopout: !0,
      useFallbackUserForPopout: !0,
      users: t,
      max: 6,
      size: g.u.SIZE_24
    })]
  })
}

function v(e) {
  var t;
  let {
    broadcast: n
  } = e, {
    userId: a,
    applicationId: g,
    channelId: v,
    streamKey: R
  } = n, [P, x] = i.useState(!1), M = (0, l.e7)([m.default], () => m.default.getUser(a)), [D] = (0, d.Z)([g]), b = null !== (t = p.ZP.getGlobalName(M)) && void 0 !== t ? t : p.ZP.getUserTag(M), y = (0, C.Z)(), j = (0, l.e7)([h.Z], () => h.Z.getPreviewURL(null, v, a)), U = (0, l.e7)([I.Z], () => I.Z.getVoiceChannelId()), G = (0, S.ZP)(), w = (0, N.Z)(v);
  if (i.useEffect(() => {
      P && U === v && x(!1)
    }, [U, P, v]), null == M || null == b) return null;
  let {
    buttonColor: k,
    buttonCTA: B,
    disabled: H
  } = function(e, t) {
    let n = _.default.getId(),
      s = t.some(e => e.id === n) || e === n,
      i = t.length >= A.keq;
    return {
      buttonColor: i ? r.ButtonColors.RED : r.ButtonColors.GREEN,
      buttonCTA: i ? Z.Z.Messages.BROADCAST_FULL : s ? Z.Z.Messages.VIEW_BROADCAST : Z.Z.Messages.JOIN_BROADCAST,
      disabled: i
    }
  }(a, w);
  return (0, s.jsxs)("div", {
    className: L.container,
    children: [(0, s.jsx)(r.Avatar, {
      size: r.AvatarSizes.SIZE_32,
      src: M.getAvatarURL(null, 32),
      "aria-label": b
    }), (0, s.jsxs)("div", {
      className: L.details,
      children: [(0, s.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: b
      }), (0, s.jsx)(r.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: null != D ? Z.Z.Messages.STREAMING.format({
          name: D.name
        }) : Z.Z.Messages.STREAMING_A_GAME
      }), (0, s.jsxs)("div", {
        className: L.activity,
        children: [w.length > 0 && (0, s.jsx)(O, {
          users: w
        }), (0, s.jsxs)(r.Button, {
          onClick: () => {
            if (U === v) {
              o.default.selectPrivateChannel(v);
              return
            }
            x(!0), (0, c.W1)(v, R), u.ZP.trackWithMetadata(A.rMx.BROADCAST_VIEWED, {
              num_active_broadcasts: y.length,
              broadcast_position: y.findIndex(e => e.userId === a) + 1,
              is_broadcasting: G,
              broadcast_channel_id: v
            })
          },
          color: k,
          size: r.ButtonSizes.SMALL,
          className: L.button,
          disabled: H,
          innerClassName: L.innerButton,
          children: [(0, s.jsx)(r.MicrophoneArrowRightIcon, {
            size: "custom",
            color: "currentColor",
            width: 16,
            height: 16
          }), B]
        })]
      })]
    }), null != j ? (0, s.jsx)(E.Z, {
      className: L.stream,
      stream: {
        streamType: f.lo.CALL,
        ownerId: a,
        channelId: v
      }
    }) : (0, s.jsx)(T.Z, {
      game: D,
      size: T.Z.Sizes.LARGE,
      className: L.gameIcon
    })]
  })
}