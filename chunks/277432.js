"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007"), n("424973");
var i = n("37983"),
  l = n("884691"),
  r = n("446674"),
  s = n("95410"),
  a = n("77078"),
  o = n("430568"),
  u = n("901582"),
  c = n("679653"),
  d = n("419830"),
  f = n("86678"),
  h = n("145106"),
  C = n("385976"),
  E = n("42203"),
  _ = n("923959"),
  p = n("27618"),
  v = n("697218"),
  m = n("882641"),
  I = n("145131"),
  g = n("476765"),
  S = n("593195"),
  N = n("991170"),
  A = n("59811"),
  T = n("310457"),
  L = n("805828"),
  w = n("49111"),
  M = n("958706"),
  R = n("782340"),
  x = n("306978"),
  y = e => {
    var t, n;
    let {
      guildId: y,
      welcomeChannel: O,
      transitionState: P,
      onSave: b,
      onClose: D
    } = e, j = (0, g.useUID)(), [U, F] = l.useState(null != O ? O.channel_id : null), [k, V] = l.useState(null != O ? O.description : ""), [B, H] = l.useState(null != O ? {
      id: O.emoji_id,
      name: O.emoji_name
    } : null), [W, G] = l.useState(!1), Z = (0, r.useStateFromStores)([C.default], () => (null == B ? void 0 : B.id) != null ? C.default.getUsableCustomEmojiById(B.id) : null), z = (0, r.useStateFromStores)([_.default], () => _.default.getChannels(y)[_.GUILD_SELECTABLE_CHANNELS_KEY], [y]), K = (0, r.useStateFromStores)([A.default], () => A.default.get(y)), Y = null !== (n = null == K ? void 0 : null === (t = K.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [q, X] = l.useState(!1);
    l.useEffect(() => {
      !s.default.get(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => X(!0), 300)
    }, []);
    let J = [];
    z.forEach(e => {
      let {
        channel: t
      } = e;
      N.default.canEveryoneRole(w.Permissions.VIEW_CHANNEL, t) && ((null == O ? void 0 : O.channel_id) === t.id || !Y.includes(t.id)) && J.push({
        value: t.id,
        label: (0, c.computeChannelName)(t, v.default, p.default)
      })
    });
    let Q = () => {
        X(!1), D()
      },
      $ = l.useCallback(e => V(e), []),
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
      et = l.useCallback(() => {
        s.default.set(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), X(!1)
      }, []);
    return (0, i.jsx)(u.default, {
      page: w.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
      children: (0, i.jsxs)(a.ModalRoot, {
        transitionState: P,
        "aria-labelledby": j,
        children: [(0, i.jsxs)("div", {
          className: x.modalContents,
          children: [(0, i.jsx)(a.ModalCloseButton, {
            onClick: Q,
            className: x.closeButton
          }), (0, i.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            className: x.headerText,
            id: j,
            children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
          }), (0, i.jsxs)(a.FormSection, {
            className: x.formGroup,
            children: [(0, i.jsx)(a.SearchableSelect, {
              options: J,
              onChange: e => F(e),
              value: U,
              renderOptionPrefix: e => {
                var t;
                if (null === e) return null;
                let n = e.value,
                  l = E.default.getChannel(n),
                  r = null !== (t = (0, d.getChannelIconComponent)(l)) && void 0 !== t ? t : S.default;
                return (0, i.jsx)(r, {
                  className: x.channelTitleIcon,
                  width: 16,
                  height: 16
                })
              }
            }), (0, i.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: x.formDescription,
              children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
            })]
          }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            className: x.headerText,
            children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
          }), (0, i.jsx)(a.FormSection, {
            className: x.formGroup,
            children: (0, i.jsx)(a.TextInput, {
              maxLength: 42,
              value: k,
              inputClassName: x.input,
              placeholder: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
              onChange: $
            })
          }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.FormSection, {
            className: x.formGroup,
            children: (0, i.jsxs)("div", {
              className: x.emojiSectionContainer,
              children: [(0, i.jsxs)("div", {
                className: x.emojiTitleContainer,
                children: [(0, i.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                }), (0, i.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                })]
              }), (0, i.jsx)(h.default, {
                hasSetEmoji: null != B,
                onClick: ee,
                children: (0, i.jsx)(a.Popout, {
                  renderPopout: e => {
                    let {
                      closePopout: t
                    } = e, n = _.default.getDefaultChannel(y);
                    return (0, i.jsx)(f.default, {
                      guildId: y,
                      closePopout: t,
                      onSelectEmoji: (e, n) => {
                        ee(e), n && (t(), null == e && Q())
                      },
                      pickerIntention: M.EmojiIntention.COMMUNITY_CONTENT,
                      onNavigateAway: Q,
                      channel: n
                    })
                  },
                  position: "left",
                  animation: a.Popout.Animation.NONE,
                  align: "bottom",
                  children: (e, t) => {
                    let {
                      isShown: n
                    } = t;
                    return (0, i.jsx)(a.TooltipContainer, {
                      color: a.TooltipColors.BRAND,
                      tooltipClassName: x.tooltip,
                      position: "left",
                      text: q ? R.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                      forceOpen: q,
                      children: (0, i.jsx)(m.default, {
                        ...e,
                        onClick: t => {
                          var n;
                          et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                        },
                        active: n,
                        className: x.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: null != B && (null != B.id || null != B.name) ? () => (0, i.jsx)(o.default, {
                          className: x.emoji,
                          emojiId: B.id,
                          emojiName: B.name,
                          animated: !!(null == Z ? void 0 : Z.animated)
                        }) : null
                      })
                    })
                  }
                })
              })]
            })
          })]
        }), (0, i.jsxs)(a.ModalFooter, {
          className: x.footer,
          justify: I.default.Justify.BETWEEN,
          children: [(0, i.jsxs)(I.default, {
            grow: 0,
            align: I.default.Align.CENTER,
            children: [(0, i.jsx)(a.Button, {
              onClick: Q,
              size: a.Button.Sizes.SMALL,
              look: a.Button.Looks.LINK,
              color: a.Button.Colors.PRIMARY,
              children: R.default.Messages.CANCEL
            }), (0, i.jsx)(a.Button, {
              onClick: () => {
                null != U && k.length > 0 && b({
                  channel_id: U,
                  description: k,
                  emoji_id: null == B ? void 0 : B.id,
                  emoji_name: null == B ? void 0 : B.name
                }), Q()
              },
              disabled: null == U || 0 === k.length,
              children: R.default.Messages.SAVE
            })]
          }), null != O && (0, i.jsx)(a.Button, {
            onClick: () => {
              G(!0)
            },
            size: a.Button.Sizes.MIN,
            look: a.Button.Looks.LINK,
            color: a.Button.Colors.RED,
            children: R.default.Messages.REMOVE
          })]
        }), W && (0, i.jsx)(T.default, {
          onConfirm: () => {
            b(), Q()
          },
          onCancel: () => G(!1),
          channelId: U
        })]
      })
    })
  }