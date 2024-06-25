n.d(t, {
  Z: function() {
    return N
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n.n(s),
  r = n(442837),
  o = n(481060),
  c = n(904245),
  u = n(268350),
  d = n(926491),
  h = n(419922),
  m = n(314897),
  E = n(375954),
  p = n(594174),
  g = n(626135),
  f = n(51144),
  C = n(901461),
  _ = n(981631),
  I = n(689938),
  x = n(490020);
let T = "749054660769218631";

function N(e) {
  var t;
  let {
    channel: n
  } = e, [s, N] = i.useState("");
  i.useEffect(() => {
    (0, u.FQ)("847199849233514549", !0)
  }, []);
  let Z = (0, r.e7)([E.Z, m.default], () => !!a()(E.Z.getMessages(n.id).toArray()).reverse().find(e => e.author.id !== m.default.getId() && e.state === _.yb.SENT && !(0, C.Z)(e))),
    S = (0, r.e7)([p.default], () => p.default.getUser(n.isPrivate() ? n.getRecipientId() : null)),
    v = null !== (t = f.ZP.useName(S)) && void 0 !== t ? t : I.Z.Messages.WAVE_DEFAULT_RECIPIENT,
    A = (0, r.e7)([d.Z], () => d.Z.getStickerById(T)),
    M = i.useCallback(async () => {
      if (null == s || "" === s) try {
        await c.Z.sendGreetMessage(n.id, T), g.default.track(_.rMx.DM_EMPTY_ACTION, {
          channel_id: n.id,
          channel_type: n.type,
          source: "Wave",
          type: "Send wave"
        })
      } catch (e) {
        !e.ok && 429 === e.status && N(I.Z.Messages.RATE_LIMITED)
      }
    }, [n.id, n.type, s]),
    R = I.Z.Messages.WAVE_TO.format({
      username: v
    }),
    j = null != s && "" !== s ? (0, l.jsx)(o.Text, {
      className: x.error,
      color: "text-danger",
      variant: "text-sm/normal",
      children: s
    }) : null;
  return Z ? (0, l.jsxs)("div", {
    className: x.containerCompact,
    children: [(0, l.jsxs)(o.Clickable, {
      className: null != s && "" !== s ? x.compactButtonDisabled : x.compactButton,
      "aria-label": I.Z.Messages.SEND_WAVE,
      onClick: M,
      children: [(0, l.jsx)(h.ZP, {
        sticker: A,
        size: 24
      }), (0, l.jsx)(o.Text, {
        className: x.text,
        variant: "text-md/medium",
        children: R
      })]
    }), j]
  }) : (0, l.jsxs)("div", {
    className: x.containerExpanded,
    children: [(0, l.jsx)(h.ZP, {
      sticker: A,
      size: 160
    }), (0, l.jsx)(o.Button, {
      className: x.button,
      onClick: M,
      disabled: !!s,
      children: R
    }), j]
  })
}