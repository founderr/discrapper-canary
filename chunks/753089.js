"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("446674"),
  o = n("77078"),
  u = n("819689"),
  d = n("467094"),
  c = n("364685"),
  f = n("41170"),
  h = n("271938"),
  C = n("377253"),
  p = n("697218"),
  E = n("599110"),
  m = n("158998"),
  g = n("913491"),
  _ = n("49111"),
  S = n("782340"),
  T = n("508477");
let A = "749054660769218631";

function M(e) {
  var t;
  let {
    channel: n
  } = e, [l, M] = s.useState("");
  s.useEffect(() => {
    (0, d.fetchStickerPack)("847199849233514549", !0)
  }, []);
  let N = (0, r.useStateFromStores)([C.default, h.default], () => !!i(C.default.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== h.default.getId() && e.state === _.MessageStates.SENT && !(0, g.default)(e))),
    I = (0, r.useStateFromStores)([p.default], () => p.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    v = null !== (t = m.default.useName(I)) && void 0 !== t ? t : S.default.Messages.WAVE_DEFAULT_RECIPIENT,
    L = (0, r.useStateFromStores)([c.default], () => c.default.getStickerById(A)),
    R = s.useCallback(async () => {
      if (null == l || "" === l) try {
        await u.default.sendGreetMessage(n.id, A), E.default.track(_.AnalyticEvents.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        !e.ok && 429 === e.status && M(S.default.Messages.RATE_LIMITED)
      }
    }, [n.id, n.type, l]),
    y = S.default.Messages.WAVE_TO.format({
      username: v
    }),
    x = null != l && "" !== l ? (0, a.jsx)(o.Text, {
      className: T.error,
      color: "text-danger",
      variant: "text-sm/normal",
      children: l
    }) : null;
  return N ? (0, a.jsxs)("div", {
    className: T.containerCompact,
    children: [(0, a.jsxs)(o.Clickable, {
      className: null != l && "" !== l ? T.compactButtonDisabled : T.compactButton,
      "aria-label": S.default.Messages.SEND_WAVE,
      onClick: R,
      children: [(0, a.jsx)(f.default, {
        sticker: L,
        size: 24
      }), (0, a.jsx)(o.Text, {
        className: T.text,
        variant: "text-md/medium",
        children: y
      })]
    }), x]
  }) : (0, a.jsxs)("div", {
    className: T.containerExpanded,
    children: [(0, a.jsx)(f.default, {
      sticker: L,
      size: 160
    }), (0, a.jsx)(o.Button, {
      className: T.button,
      onClick: R,
      disabled: !!l,
      children: y
    }), x]
  })
}