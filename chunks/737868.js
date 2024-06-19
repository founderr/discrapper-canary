l.r(n), l(47120), l(653041);
var o = l(735250),
  i = l(470079),
  t = l(442837),
  s = l(433517),
  a = l(481060),
  r = l(596454),
  u = l(410575),
  d = l(933557),
  c = l(471445),
  m = l(907040),
  C = l(273039),
  E = l(339085),
  _ = l(592125),
  h = l(984933),
  N = l(699516),
  x = l(594174),
  j = l(401227),
  I = l(285952),
  L = l(153124),
  v = l(700785),
  S = l(995532),
  p = l(514698),
  T = l(845606),
  g = l(981631),
  M = l(185923),
  Z = l(689938),
  f = l(345254);
n.default = e => {
  var n, l;
  let {
    guildId: P,
    welcomeChannel: B,
    transitionState: O,
    onSave: k,
    onClose: A
  } = e, D = (0, L.Dt)(), [G, U] = i.useState(null != B ? B.channel_id : null), [b, W] = i.useState(null != B ? B.description : ""), [H, R] = i.useState(null != B ? {
    id: B.emoji_id,
    name: B.emoji_name
  } : null), [K, F] = i.useState(!1), y = (0, t.e7)([E.Z], () => (null == H ? void 0 : H.id) != null ? E.Z.getUsableCustomEmojiById(H.id) : null), z = (0, t.e7)([h.ZP], () => h.ZP.getChannels(P)[h.sH], [P]), w = (0, t.e7)([S.Z], () => S.Z.get(P)), J = null !== (l = null == w ? void 0 : null === (n = w.welcome_channels) || void 0 === n ? void 0 : n.map(e => e.channel_id)) && void 0 !== l ? l : [], [V, Y] = i.useState(!1);
  i.useEffect(() => {
    !s.K.get(T.S) && setTimeout(() => Y(!0), 300)
  }, []);
  let q = [];
  z.forEach(e => {
    let {
      channel: n
    } = e;
    v.Uu(g.Plq.VIEW_CHANNEL, n) && ((null == B ? void 0 : B.channel_id) === n.id || !J.includes(n.id)) && q.push({
      value: n.id,
      label: (0, d.F6)(n, x.default, N.Z)
    })
  });
  let Q = () => {
      Y(!1), A()
    },
    X = i.useCallback(e => W(e), []),
    $ = e => {
      var n, l, o;
      if (null == e) {
        R(null);
        return
      }
      R(null != e.id ? {
        id: null !== (n = e.id) && void 0 !== n ? n : null,
        name: null !== (l = e.name) && void 0 !== l ? l : null
      } : {
        id: null,
        name: null !== (o = e.optionallyDiverseSequence) && void 0 !== o ? o : null
      })
    },
    ee = i.useCallback(() => {
      s.K.set(T.S, !0), Y(!1)
    }, []);
  return (0, o.jsx)(u.Z, {
    page: g.ZY5.CHANNEL_WELCOME_CREATE_MODAL,
    children: (0, o.jsxs)(a.ModalRoot, {
      transitionState: O,
      "aria-labelledby": D,
      children: [(0, o.jsxs)("div", {
        className: f.modalContents,
        children: [(0, o.jsx)(a.ModalCloseButton, {
          onClick: Q,
          className: f.closeButton
        }), (0, o.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          className: f.headerText,
          id: D,
          children: Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
        }), (0, o.jsxs)(a.FormSection, {
          className: f.__invalid_formGroup,
          children: [(0, o.jsx)(a.SearchableSelect, {
            options: q,
            onChange: e => U(e),
            value: G,
            renderOptionPrefix: e => {
              var n;
              if (null === e) return null;
              let l = e.value,
                i = _.Z.getChannel(l),
                t = null !== (n = (0, c.KS)(i)) && void 0 !== n ? n : a.TextIcon;
              return (0, o.jsx)(t, {
                className: f.channelTitleIcon,
                size: "xs",
                color: "currentColor"
              })
            }
          }), (0, o.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: f.formDescription,
            children: Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
          })]
        }), (0, o.jsx)(a.FormDivider, {}), (0, o.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          className: f.headerText,
          children: Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
        }), (0, o.jsx)(a.FormSection, {
          className: f.__invalid_formGroup,
          children: (0, o.jsx)(a.TextInput, {
            maxLength: 42,
            value: b,
            inputClassName: f.input,
            placeholder: Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
            onChange: X
          })
        }), (0, o.jsx)(a.FormDivider, {}), (0, o.jsx)(a.FormSection, {
          className: f.__invalid_formGroup,
          children: (0, o.jsxs)("div", {
            className: f.emojiSectionContainer,
            children: [(0, o.jsxs)("div", {
              className: f.emojiTitleContainer,
              children: [(0, o.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                children: Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
              }), (0, o.jsx)(a.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: Z.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
              })]
            }), (0, o.jsx)(C.Z, {
              hasSetEmoji: null != H,
              onClick: $,
              children: (0, o.jsx)(a.Popout, {
                renderPopout: e => {
                  let {
                    closePopout: n
                  } = e, l = h.ZP.getDefaultChannel(P);
                  return (0, o.jsx)(m.Z, {
                    guildId: P,
                    closePopout: n,
                    onSelectEmoji: (e, l) => {
                      $(e), l && (n(), null == e && Q())
                    },
                    pickerIntention: M.Hz.COMMUNITY_CONTENT,
                    onNavigateAway: Q,
                    channel: l
                  })
                },
                position: "left",
                animation: a.Popout.Animation.NONE,
                align: "bottom",
                children: (e, n) => {
                  let {
                    isShown: l
                  } = n;
                  return (0, o.jsx)(a.TooltipContainer, {
                    color: a.TooltipColors.BRAND,
                    tooltipClassName: f.tooltip,
                    position: "left",
                    text: V ? Z.Z.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                    forceOpen: V,
                    children: (0, o.jsx)(j.Z, {
                      ...e,
                      onClick: n => {
                        var l;
                        ee(), null === (l = e.onClick) || void 0 === l || l.call(e, n)
                      },
                      active: l,
                      className: f.emojiButton,
                      tabIndex: 0,
                      renderButtonContents: null != H && (null != H.id || null != H.name) ? () => (0, o.jsx)(r.Z, {
                        className: f.emoji,
                        emojiId: H.id,
                        emojiName: H.name,
                        animated: !!(null == y ? void 0 : y.animated)
                      }) : null
                    })
                  })
                }
              })
            })]
          })
        })]
      }), (0, o.jsxs)(a.ModalFooter, {
        className: f.footer,
        justify: I.Z.Justify.BETWEEN,
        children: [(0, o.jsxs)(I.Z, {
          grow: 0,
          align: I.Z.Align.CENTER,
          children: [(0, o.jsx)(a.Button, {
            onClick: Q,
            size: a.Button.Sizes.SMALL,
            look: a.Button.Looks.LINK,
            color: a.Button.Colors.PRIMARY,
            children: Z.Z.Messages.CANCEL
          }), (0, o.jsx)(a.Button, {
            onClick: () => {
              null != G && b.length > 0 && k({
                channel_id: G,
                description: b,
                emoji_id: null == H ? void 0 : H.id,
                emoji_name: null == H ? void 0 : H.name
              }), Q()
            },
            disabled: null == G || 0 === b.length,
            children: Z.Z.Messages.SAVE
          })]
        }), null != B && (0, o.jsx)(a.Button, {
          onClick: () => {
            F(!0)
          },
          size: a.Button.Sizes.MIN,
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.RED,
          children: Z.Z.Messages.REMOVE
        })]
      }), K && (0, o.jsx)(p.Z, {
        onConfirm: () => {
          k(), Q()
        },
        onCancel: () => F(!1),
        channelId: G
      })]
    })
  })
}