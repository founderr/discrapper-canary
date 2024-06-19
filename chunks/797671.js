s.r(n), s.d(n, {
  default: function() {
    return f
  }
}), s(653041), s(47120), s(773603);
var a = s(735250),
  l = s(470079),
  t = s(990547),
  i = s(442837),
  o = s(283693),
  r = s(481060),
  d = s(218613),
  c = s(911969),
  u = s(456269),
  E = s(408987),
  _ = s(312146),
  N = s(60222),
  C = s(131704),
  p = s(324067),
  m = s(430824),
  I = s(285952),
  h = s(153124),
  A = s(259580),
  g = s(934415),
  v = s(700785),
  T = s(573261),
  b = s(981631),
  x = s(231338),
  M = s(689938),
  L = s(493094);

function f(e) {
  var n, s;
  let {
    guildId: f,
    transitionState: j,
    onSubmit: Z,
    onClose: D
  } = e, R = (0, h.Dt)(), H = (0, h.Dt)(), O = (0, h.Dt)(), S = (0, h.Dt)(), [y, G] = l.useState(b.Sc2), [P, k] = l.useState(b.d4z.GUILD_TEXT), [B, U] = l.useState(""), [F, V] = l.useState(!1), Y = (0, i.e7)([m.Z], () => m.Z.getGuild(f), [f]), w = (0, N.m)(f), z = (0, u.W3)(f), W = (0, _.Ui)(Y), X = l.useMemo(() => (function(e) {
    let {
      canCreateStageChannel: n,
      canCreateForumChannel: s,
      canCreateMediaChannel: l
    } = e, t = [{
      icon: r.TextIcon,
      label: M.Z.Messages.TEXT_CHANNEL_TYPE,
      value: b.d4z.GUILD_TEXT,
      description: M.Z.Messages.CREATE_TEXT_CHANNEL_DESCRIPTION
    }, {
      icon: r.VoiceNormalIcon,
      label: M.Z.Messages.VOICE_CHANNEL_TYPE,
      value: b.d4z.GUILD_VOICE,
      description: M.Z.Messages.CREATE_VOICE_CHANNEL_DESCRIPTION
    }];
    return n && t.push({
      icon: r.StageIcon,
      label: M.Z.Messages.STAGE_VOICE_CHANNEL_TYPE,
      value: b.d4z.GUILD_STAGE_VOICE,
      description: M.Z.Messages.CREATE_STAGE_CHANNEL_DESCRIPTION
    }), s && (t.push({
      icon: r.ForumIcon,
      label: M.Z.Messages.FORUM_CHANNEL_TYPE,
      value: b.d4z.GUILD_FORUM,
      description: M.Z.Messages.FORUM_CHANNEL_DESCRIPTION
    }), l && t.push({
      icon: r.ImageIcon,
      label: M.Z.Messages.MEDIA_CHANNEL_TYPE,
      value: b.d4z.GUILD_MEDIA,
      description: M.Z.Messages.CREATE_MEDIA_CHANNEL_DESCRIPTION,
      isBeta: !0
    })), t.map(e => {
      let {
        icon: n,
        label: s,
        value: l,
        description: t,
        isBeta: i
      } = e;
      return {
        name: (0, a.jsxs)("div", {
          className: L.channelOptionWrapper,
          children: [(0, a.jsx)(n, {
            className: L.icon
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsxs)(r.Text, {
              variant: "text-md/normal",
              color: "header-primary",
              children: [s, (0, a.jsx)(d.ChannelTypeBadge, {
                isBeta: i
              })]
            }), (0, a.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "header-secondary",
              children: t
            })]
          })]
        }),
        value: l,
        channelIcon: n
      }
    })
  })({
    canCreateStageChannel: w,
    canCreateForumChannel: z,
    canCreateMediaChannel: W
  }), [w, z, W]), q = (0, i.e7)([p.Z], () => p.Z.getCategories(f)._categories, [f]), K = l.useMemo(() => q.map(e => {
    let {
      channel: n
    } = e;
    return {
      value: n.id,
      label: n.name
    }
  }), [q]), J = null !== (s = null === (n = X.find(e => e.value === P)) || void 0 === n ? void 0 : n.channelIcon) && void 0 !== s ? s : x.Vq, $ = "" !== B;
  return (0, a.jsx)("form", {
    onSubmit: function(e) {
      if (e.preventDefault(), !$) return;
      V(!0);
      let n = {
        type: P,
        name: B,
        parent_id: "null" !== y ? y : void 0,
        permission_overwrites: [{
          id: f,
          type: c.BN.ROLE,
          allow: v.Hn,
          deny: b.Plq.VIEW_CHANNEL
        }]
      };
      T.Z.post({
        url: b.ANM.GUILD_CHANNELS(f),
        body: n,
        oldFormErrors: !0,
        trackedActionData: {
          event: t.NetworkActionNames.CHANNEL_CREATE,
          properties: e => {
            var n, s;
            return (0, o.iG)({
              is_private: !0,
              channel_id: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.id,
              channel_type: null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.type
            })
          }
        }
      }).then(e => {
        E.Z.checkGuildTemplateDirty(f), Z(e.body.id), D()
      }, e => {}).finally(() => {
        V(!1)
      })
    },
    children: (0, a.jsxs)(r.ModalRoot, {
      transitionState: j,
      "aria-labelledby": R,
      children: [(0, a.jsxs)(r.ModalHeader, {
        children: [(0, a.jsx)(r.Heading, {
          id: R,
          variant: "heading-md/semibold",
          children: M.Z.Messages.CREATE_CHANNEL
        }), (0, a.jsx)(r.ModalCloseButton, {
          className: L.closeButton,
          onClick: D
        })]
      }), (0, a.jsxs)(r.ModalContent, {
        className: L.modalContent,
        children: [(0, a.jsx)(r.FormItem, {
          title: M.Z.Messages.CATEGORY,
          titleId: H,
          children: (0, a.jsx)(r.SingleSelect, {
            placeholder: M.Z.Messages.CREATE_CHANNEL_MODAL_CATEGORY_PLACEHOLDER,
            value: y,
            options: K,
            onChange: e => G(e),
            "aria-labelledby": H
          })
        }), (0, a.jsx)("div", {
          className: L.spacer
        }), (0, a.jsx)(r.FormItem, {
          title: M.Z.Messages.CHANNEL_TYPE,
          titleId: O,
          children: (0, a.jsx)(r.RadioGroup, {
            options: X,
            value: P,
            onChange: e => {
              let {
                value: n
              } = e;
              return k(n)
            },
            "aria-labelledby": O
          })
        }), (0, a.jsx)("div", {
          className: L.spacer
        }), (0, a.jsx)(r.FormItem, {
          title: M.Z.Messages.FORM_LABEL_CHANNEL_NAME,
          titleId: S,
          children: (0, a.jsx)(r.TextInput, {
            value: B,
            onChange: function(e) {
              (0, C.zi)(P) && (e = (0, g.Nj)(e)), U(e)
            },
            maxLength: b.HN8,
            placeholder: M.Z.Messages.CHANNEL_NAME_PLACEHOLDER,
            className: L.inputWrapper,
            inputClassName: L.inputInner,
            prefixElement: (0, a.jsx)(J, {
              className: L.inputPrefix,
              color: "currentColor",
              "aria-hidden": !0
            }),
            "aria-labelledby": S,
            autoFocus: !0
          })
        })]
      }), (0, a.jsxs)(r.ModalFooter, {
        justify: I.Z.Justify.BETWEEN,
        children: [(0, a.jsx)(r.Button, {
          type: "submit",
          submitting: F,
          disabled: !$,
          children: M.Z.Messages.SAVE
        }), (0, a.jsxs)(r.Button, {
          look: r.Button.Looks.LINK,
          color: r.Button.Colors.PRIMARY,
          className: L.backButton,
          innerClassName: L.backButtonInner,
          onClick: D,
          children: [(0, a.jsx)(A.Z, {
            direction: A.Z.Directions.LEFT
          }), M.Z.Messages.BACK]
        })]
      })]
    })
  })
}