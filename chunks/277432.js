"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("222007"), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("446674"),
  s = n("95410"),
  o = n("77078"),
  a = n("430568"),
  u = n("901582"),
  c = n("679653"),
  d = n("419830"),
  f = n("86678"),
  h = n("145106"),
  p = n("385976"),
  C = n("42203"),
  _ = n("923959"),
  E = n("27618"),
  v = n("697218"),
  m = n("882641"),
  g = n("145131"),
  I = n("476765"),
  S = n("593195"),
  A = n("991170"),
  N = n("59811"),
  T = n("310457"),
  w = n("805828"),
  L = n("49111"),
  x = n("958706"),
  M = n("782340"),
  y = n("306978"),
  b = e => {
    var t, n;
    let {
      guildId: b,
      welcomeChannel: R,
      transitionState: O,
      onSave: P,
      onClose: D
    } = e, j = (0, I.useUID)(), [U, F] = r.useState(null != R ? R.channel_id : null), [k, V] = r.useState(null != R ? R.description : ""), [B, H] = r.useState(null != R ? {
      id: R.emoji_id,
      name: R.emoji_name
    } : null), [W, G] = r.useState(!1), z = (0, l.useStateFromStores)([p.default], () => (null == B ? void 0 : B.id) != null ? p.default.getUsableCustomEmojiById(B.id) : null), Z = (0, l.useStateFromStores)([_.default], () => _.default.getChannels(b)[_.GUILD_SELECTABLE_CHANNELS_KEY], [b]), K = (0, l.useStateFromStores)([N.default], () => N.default.get(b)), Y = null !== (n = null == K ? void 0 : null === (t = K.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [q, X] = r.useState(!1);
    r.useEffect(() => {
      !s.default.get(w.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => X(!0), 300)
    }, []);
    let J = [];
    Z.forEach(e => {
      let {
        channel: t
      } = e;
      A.default.canEveryoneRole(L.Permissions.VIEW_CHANNEL, t) && ((null == R ? void 0 : R.channel_id) === t.id || !Y.includes(t.id)) && J.push({
        value: t.id,
        label: (0, c.computeChannelName)(t, v.default, E.default)
      })
    });
    let Q = () => {
        X(!1), D()
      },
      $ = r.useCallback(e => V(e), []),
      ee = e => {
        var t, n, i;
        if (null == e) {
          H(null);
          return
        }
        H(null != e.id ? {
          id: null !== (t = e.id) && void 0 !== t ? t : null,
          name: null !== (n = e.name) && void 0 !== n ? n : null
        } : {
          id: null,
          name: null !== (i = e.optionallyDiverseSequence) && void 0 !== i ? i : null
        })
      },
      et = r.useCallback(() => {
        s.default.set(w.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), X(!1)
      }, []);
    return (0, i.jsx)(u.default, {
      page: L.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
      children: (0, i.jsxs)(o.ModalRoot, {
        transitionState: O,
        "aria-labelledby": j,
        children: [(0, i.jsxs)("div", {
          className: y.modalContents,
          children: [(0, i.jsx)(o.ModalCloseButton, {
            onClick: Q,
            className: y.closeButton
          }), (0, i.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            className: y.headerText,
            id: j,
            children: M.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
          }), (0, i.jsxs)(o.FormSection, {
            className: y.formGroup,
            children: [(0, i.jsx)(o.SearchableSelect, {
              options: J,
              onChange: e => F(e),
              value: U,
              renderOptionPrefix: e => {
                var t;
                if (null === e) return null;
                let n = e.value,
                  r = C.default.getChannel(n),
                  l = null !== (t = (0, d.getChannelIconComponent)(r)) && void 0 !== t ? t : S.default;
                return (0, i.jsx)(l, {
                  className: y.channelTitleIcon,
                  width: 16,
                  height: 16
                })
              }
            }), (0, i.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: y.formDescription,
              children: M.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
            })]
          }), (0, i.jsx)(o.FormDivider, {}), (0, i.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            className: y.headerText,
            children: M.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
          }), (0, i.jsx)(o.FormSection, {
            className: y.formGroup,
            children: (0, i.jsx)(o.TextInput, {
              maxLength: 42,
              value: k,
              inputClassName: y.input,
              placeholder: M.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
              onChange: $
            })
          }), (0, i.jsx)(o.FormDivider, {}), (0, i.jsx)(o.FormSection, {
            className: y.formGroup,
            children: (0, i.jsxs)("div", {
              className: y.emojiSectionContainer,
              children: [(0, i.jsxs)("div", {
                className: y.emojiTitleContainer,
                children: [(0, i.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  children: M.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                }), (0, i.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: M.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                })]
              }), (0, i.jsx)(h.default, {
                hasSetEmoji: null != B,
                onClick: ee,
                children: (0, i.jsx)(o.Popout, {
                  renderPopout: e => {
                    let {
                      closePopout: t
                    } = e, n = _.default.getDefaultChannel(b);
                    return (0, i.jsx)(f.default, {
                      guildId: b,
                      closePopout: t,
                      onSelectEmoji: (e, n) => {
                        ee(e), n && (t(), null == e && Q())
                      },
                      pickerIntention: x.EmojiIntention.COMMUNITY_CONTENT,
                      onNavigateAway: Q,
                      channel: n
                    })
                  },
                  position: "left",
                  animation: o.Popout.Animation.NONE,
                  align: "bottom",
                  children: (e, t) => {
                    let {
                      isShown: n
                    } = t;
                    return (0, i.jsx)(o.TooltipContainer, {
                      color: o.TooltipColors.BRAND,
                      tooltipClassName: y.tooltip,
                      position: "left",
                      text: q ? M.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                      forceOpen: q,
                      children: (0, i.jsx)(m.default, {
                        ...e,
                        onClick: t => {
                          var n;
                          et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                        },
                        active: n,
                        className: y.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: null != B && (null != B.id || null != B.name) ? () => (0, i.jsx)(a.default, {
                          className: y.emoji,
                          emojiId: B.id,
                          emojiName: B.name,
                          animated: !!(null == z ? void 0 : z.animated)
                        }) : null
                      })
                    })
                  }
                })
              })]
            })
          })]
        }), (0, i.jsxs)(o.ModalFooter, {
          className: y.footer,
          justify: g.default.Justify.BETWEEN,
          children: [(0, i.jsxs)(g.default, {
            grow: 0,
            align: g.default.Align.CENTER,
            children: [(0, i.jsx)(o.Button, {
              onClick: Q,
              size: o.Button.Sizes.SMALL,
              look: o.Button.Looks.LINK,
              color: o.Button.Colors.PRIMARY,
              children: M.default.Messages.CANCEL
            }), (0, i.jsx)(o.Button, {
              onClick: () => {
                null != U && k.length > 0 && P({
                  channel_id: U,
                  description: k,
                  emoji_id: null == B ? void 0 : B.id,
                  emoji_name: null == B ? void 0 : B.name
                }), Q()
              },
              disabled: null == U || 0 === k.length,
              children: M.default.Messages.SAVE
            })]
          }), null != R && (0, i.jsx)(o.Button, {
            onClick: () => {
              G(!0)
            },
            size: o.Button.Sizes.MIN,
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.RED,
            children: M.default.Messages.REMOVE
          })]
        }), W && (0, i.jsx)(T.default, {
          onConfirm: () => {
            P(), Q()
          },
          onCancel: () => G(!1),
          channelId: U
        })]
      })
    })
  }