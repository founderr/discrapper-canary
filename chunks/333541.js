t.r(n), t.d(n, {
  default: function() {
    return N
  }
}), t(47120);
var l = t(735250),
  s = t(470079),
  o = t(442837),
  a = t(481060),
  i = t(596454),
  u = t(907040),
  d = t(339085),
  r = t(592125),
  c = t(944486),
  m = t(594174),
  S = t(401227),
  x = t(74538),
  j = t(906605),
  T = t(106301),
  v = t(505905),
  h = t(185923),
  C = t(689938),
  g = t(160427);

function p(e) {
  let {
    customStatusEmoji: n,
    setCustomStatusEmoji: t,
    onClose: s
  } = e, d = (0, o.e7)([c.Z, r.Z], () => r.Z.getChannel(c.Z.getVoiceChannelId())), m = e => {
    var n;
    if (null == e) {
      t(null);
      return
    }
    t(null != e.id ? {
      id: e.id,
      name: e.name,
      animated: e.animated
    } : {
      id: null,
      name: null !== (n = e.optionallyDiverseSequence) && void 0 !== n ? n : "",
      animated: !1
    })
  };
  return (0, l.jsx)(a.Popout, {
    renderPopout: e => {
      var n;
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(u.Z, {
        channel: d,
        guildId: null !== (n = null == d ? void 0 : d.guild_id) && void 0 !== n ? n : void 0,
        closePopout: t,
        onSelectEmoji: (e, n) => {
          m(e), n && t()
        },
        pickerIntention: h.Hz.STATUS,
        onNavigateAway: s
      })
    },
    position: "left",
    animation: a.Popout.Animation.NONE,
    align: "top",
    children: (e, t) => {
      let {
        isShown: s
      } = t;
      return (0, l.jsx)(S.Z, {
        ...e,
        active: s,
        className: g.emojiButton,
        tabIndex: 0,
        renderButtonContents: null == n ? null : () => (0, l.jsx)(i.Z, {
          className: g.emoji,
          emojiId: n.id,
          emojiName: n.name,
          animated: !!n.animated
        })
      })
    }
  })
}

function N(e) {
  var n, t;
  let {
    transitionState: o,
    onClose: i,
    startingText: u,
    startingEmoji: r
  } = e, c = T.Z.getCustomHangStatus(), S = null != u ? u : null !== (n = null == c ? void 0 : c.status) && void 0 !== n ? n : "", h = null !== (t = null == c ? void 0 : c.emoji) && void 0 !== t ? t : null;
  (null == r ? void 0 : r.id) != null ? h = x.ZP.canUseEmojisEverywhere(m.default.getCurrentUser()) && null != d.Z.getUsableCustomEmojiById(r.id) ? r : null : (null == r ? void 0 : r.name) != null && (h = r);
  let [N, _] = s.useState(S), [A, E] = s.useState(h);
  return (0, l.jsxs)(a.ModalRoot, {
    className: g.modal,
    transitionState: o,
    size: a.ModalSize.DYNAMIC,
    children: [(0, l.jsxs)(a.ModalContent, {
      className: g.modalContent,
      children: [(0, l.jsx)(a.Button, {
        "aria-label": C.Z.Messages.CLOSE,
        look: a.Button.Looks.BLANK,
        size: a.Button.Sizes.NONE,
        onClick: i,
        className: g.closeButton,
        children: (0, l.jsx)(a.CloseSmallIcon, {
          size: "xs",
          color: "currentColor",
          className: g.closeIcon
        })
      }), (0, l.jsx)(p, {
        customStatusEmoji: A,
        setCustomStatusEmoji: E,
        onClose: i
      }), (0, l.jsxs)("div", {
        className: g.customInputGroup,
        children: [(0, l.jsx)(a.Text, {
          className: g.leadInText,
          variant: "text-xs/semibold",
          color: "text-muted",
          children: C.Z.Messages.STATUS_LEAD_IN_JUST
        }), (0, l.jsx)(a.TextInput, {
          className: g.customInput,
          value: N,
          onChange: e => _(e.substring(0, v.s)),
          placeholder: C.Z.Messages.CUSTOM_HANG_STATUS_PLACEHOLDER
        })]
      })]
    }), (0, l.jsxs)(a.ModalFooter, {
      className: g.modalFooter,
      children: [(0, l.jsxs)("div", {
        children: [(0, l.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          children: C.Z.Messages.SET_STATUS_MODAL_TITLE
        }), (0, l.jsx)(a.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: C.Z.Messages.SET_STATUS_MODAL_SUBTITLE
        })]
      }), (0, l.jsx)(a.Button, {
        onClick: () => {
          let e = N.trim();
          "" !== e && null != A && ((0, j._s)(e, A, !0), i())
        },
        disabled: "" === N.trim() || null == A,
        children: C.Z.Messages.SET_STATUS_MODAL_CTA
      })]
    })]
  })
}