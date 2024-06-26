"use strict";
n.d(t, {
  Z: function() {
    return D
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
  T = n(24311),
  h = n(131704),
  f = n(592125),
  S = n(5192),
  N = n(838440),
  A = n(332390),
  m = n(785717),
  O = n(993409),
  p = n(981631),
  R = n(689938),
  g = n(717633),
  C = n(682583);
let v = (0, h.kt)({
    id: "1",
    type: p.d4z.DM
  }),
  L = async e => {
    let {
      userId: t,
      content: n,
      location: i
    } = e, {
      valid: r,
      failureReason: s
    } = await (0, N.v)({
      type: c.I.NORMAL,
      content: n,
      channel: null
    });
    if (!r) throw Error(s);
    let o = await l.Z.openPrivateChannel(t, !1, !1, i),
      a = f.Z.getChannel(o);
    if (null == a) throw Error("Failed to open private channel");
    let _ = I.ZP.parse(a, n);
    return u.Z.sendMessage(a.id, _)
  };

function D(e) {
  let {
    user: t,
    guildId: n,
    channelId: s,
    onClose: u
  } = e, {
    analyticsLocations: I,
    newestAnalyticsLocation: h
  } = (0, _.ZP)(), {
    trackUserProfileAction: f
  } = (0, m.KZ)(), {
    messageCtaEnabled: N,
    persistentCallCtaEnabled: p
  } = (0, A.l)({
    location: "BiteSizeProfileDirectMessageSection"
  }), [D, M] = r.useState(""), [P, y] = r.useState((0, d.JM)(D)), U = r.useRef(!1), b = () => {
    f({
      action: "SEND_MESSAGE"
    }), l.Z.openPrivateChannel(t.id, !1, !1, h), null == u || u()
  }, G = (0, i.jsxs)("div", {
    className: C.menuItemLabel,
    children: [(0, i.jsx)(a.PhoneCallIcon, {
      size: "xs"
    }), " ", R.Z.Messages.START_VOICE_CALL]
  }), w = (0, T.Z)({
    user: t,
    label: G,
    id: "voice-call",
    onCall: () => {
      f({
        action: "VOICE_CALL"
      }), null == u || u()
    }
  }), x = (0, i.jsxs)("div", {
    className: C.menuItemLabel,
    children: [(0, i.jsx)(a.VideoIcon, {
      size: "xs"
    }), " ", R.Z.Messages.START_VIDEO_CALL]
  }), B = (0, T.Z)({
    user: t,
    label: x,
    joinCallVideo: !0,
    id: "video-call",
    onCall: () => {
      f({
        action: "VIDEO_CALL"
      }), null == u || u()
    }
  }), k = (0, i.jsx)(_.Gt, {
    value: I,
    children: (0, i.jsx)(a.Popout, {
      position: "bottom",
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, i.jsx)(a.Menu, {
          navId: "user-profile-action-call-button",
          onSelect: void 0,
          onClose: t,
          "aria-label": R.Z.Messages.PROFILE_ACTIONS_MENU_LABEL,
          children: (0, i.jsxs)(a.MenuGroup, {
            children: [w, B]
          })
        })
      },
      children: e => {
        let {
          onClick: t,
          ...n
        } = e;
        return (0, i.jsx)(a.Button, {
          fullWidth: !0,
          size: a.Button.Sizes.SMALL,
          onClick: e => {
            f({
              action: "PRESS_CALL"
            }), t(e)
          },
          look: a.Button.Looks.BLANK,
          className: C.engagementExpButton,
          ...n,
          children: (0, i.jsxs)("div", {
            className: C.engagementExpButtonInner,
            children: [(0, i.jsx)(a.PhoneCallIcon, {
              size: "xs",
              color: "currentColor"
            }), R.Z.Messages.CALL]
          })
        })
      }
    })
  });
  if (N) return p ? (0, i.jsxs)("div", {
    className: C.ctaRow,
    children: [k, (0, i.jsx)(O.Z, {
      fullWidth: !0,
      variant: "text",
      color: o()(a.Button.Colors.BRAND, g.color),
      onClick: b,
      icon: a.ChatIcon,
      text: R.Z.Messages.USER_PROFILE_MESSAGE,
      tooltipContainerClassName: C.ctaTooltipContainer
    })]
  }) : (0, i.jsx)(O.Z, {
    fullWidth: !0,
    variant: "text",
    color: o()(a.Button.Colors.BRAND, g.color),
    onClick: b,
    icon: a.ChatIcon,
    text: R.Z.Messages.USER_PROFILE_MESSAGE
  });
  return (0, i.jsx)(E.Z, {
    innerClassName: C.inner,
    editorClassName: C.editor,
    type: c.I.USER_PROFILE,
    placeholder: R.Z.Messages.QUICK_DM_USER.format({
      name: S.ZP.getName(n, s, t)
    }),
    channel: v,
    textValue: D,
    richValue: P,
    onChange: (e, t, n) => {
      if (t !== D) M(t), y(n)
    },
    focused: U.current,
    onFocus: () => {
      U.current = !0
    },
    onBlur: () => {
      U.current = !1
    },
    onSubmit: async e => {
      let {
        value: n
      } = e;
      try {
        return f({
          action: "SEND_DIRECT_MESSAGE"
        }), await L({
          userId: t.id,
          content: n.trim(),
          location: h
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