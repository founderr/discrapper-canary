"use strict";
n.d(t, {
  Z: function() {
    return L
  }
}), n(411104), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(493683),
  u = n(904245),
  _ = n(906732),
  c = n(541716),
  d = n(752305),
  E = n(893718),
  I = n(957730),
  T = n(131704),
  h = n(592125),
  f = n(5192),
  S = n(838440),
  N = n(332390),
  A = n(785717),
  m = n(993409),
  O = n(981631),
  p = n(689938),
  R = n(717633),
  g = n(682583);
let C = (0, T.kt)({
    id: "1",
    type: O.d4z.DM
  }),
  v = async e => {
    let {
      userId: t,
      content: n,
      location: i
    } = e, {
      valid: r,
      failureReason: s
    } = await (0, S.v)({
      type: c.I.NORMAL,
      content: n,
      channel: null
    });
    if (!r) throw Error(s);
    let o = await l.Z.openPrivateChannel(t, !1, !1, i),
      a = h.Z.getChannel(o);
    if (null == a) throw Error("Failed to open private channel");
    let _ = I.ZP.parse(a, n);
    return u.Z.sendMessage(a.id, _)
  };

function L(e) {
  let {
    user: t,
    guildId: n,
    channelId: s,
    onClose: u
  } = e, {
    newestAnalyticsLocation: I
  } = (0, _.ZP)(), {
    trackUserProfileAction: T
  } = (0, A.KZ)(), {
    messageCtaEnabled: h
  } = (0, N.l)({
    location: "BiteSizeProfileDirectMessageSection"
  }), [S, O] = r.useState(""), [L, D] = r.useState((0, d.JM)(S)), M = r.useRef(!1);
  return h ? (0, i.jsx)(m.Z, {
    fullWidth: !0,
    variant: "text",
    look: a.Button.Looks.BLANK,
    color: o()(a.Button.Colors.BRAND, R.color),
    onClick: () => {
      T({
        action: "SEND_MESSAGE"
      }), l.Z.openPrivateChannel(t.id, !1, !1, I), null == u || u()
    },
    icon: a.ChatIcon,
    text: p.Z.Messages.USER_PROFILE_MESSAGE
  }) : (0, i.jsx)(E.Z, {
    innerClassName: g.inner,
    editorClassName: g.editor,
    type: c.I.USER_PROFILE,
    placeholder: p.Z.Messages.QUICK_DM_USER.format({
      name: f.ZP.getName(n, s, t)
    }),
    channel: C,
    textValue: S,
    richValue: L,
    onChange: (e, t, n) => {
      if (t !== S) O(t), D(n)
    },
    focused: M.current,
    onFocus: () => {
      M.current = !0
    },
    onBlur: () => {
      M.current = !1
    },
    onSubmit: async e => {
      let {
        value: n
      } = e;
      try {
        return T({
          action: "SEND_DIRECT_MESSAGE"
        }), await v({
          userId: t.id,
          content: n.trim(),
          location: I
        }), null == u || u(), {
          shouldClear: !0,
          shouldRefocus: !1
        }
      } catch {
        return {
          shouldClear: !1,
          shouldRefocus: !1
        }
      }
    }
  })
}