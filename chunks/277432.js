"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("222007"), n("424973");
var i = n("37983"),
  r = n("884691"),
  l = n("446674"),
  s = n("95410"),
  a = n("77078"),
  u = n("430568"),
  o = n("901582"),
  c = n("679653"),
  d = n("419830"),
  f = n("86678"),
  E = n("145106"),
  _ = n("385976"),
  h = n("42203"),
  T = n("923959"),
  I = n("27618"),
  S = n("697218"),
  p = n("882641"),
  N = n("145131"),
  C = n("476765"),
  v = n("593195"),
  m = n("991170"),
  A = n("59811"),
  g = n("310457"),
  R = n("805828"),
  L = n("49111"),
  P = n("958706"),
  O = n("782340"),
  D = n("977611"),
  U = e => {
    var t, n;
    let {
      guildId: U,
      welcomeChannel: M,
      transitionState: y,
      onSave: w,
      onClose: G
    } = e, b = (0, C.useUID)(), [x, F] = r.useState(null != M ? M.channel_id : null), [V, B] = r.useState(null != M ? M.description : ""), [j, H] = r.useState(null != M ? {
      id: M.emoji_id,
      name: M.emoji_name
    } : null), [k, W] = r.useState(!1), Y = (0, l.useStateFromStores)([_.default], () => (null == j ? void 0 : j.id) != null ? _.default.getUsableCustomEmojiById(j.id) : null), z = (0, l.useStateFromStores)([T.default], () => T.default.getChannels(U)[T.GUILD_SELECTABLE_CHANNELS_KEY], [U]), Z = (0, l.useStateFromStores)([A.default], () => A.default.get(U)), K = null !== (n = null == Z ? void 0 : null === (t = Z.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [q, X] = r.useState(!1);
    r.useEffect(() => {
      !s.default.get(R.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => X(!0), 300)
    }, []);
    let J = [];
    z.forEach(e => {
      let {
        channel: t
      } = e;
      m.default.canEveryoneRole(L.Permissions.VIEW_CHANNEL, t) && ((null == M ? void 0 : M.channel_id) === t.id || !K.includes(t.id)) && J.push({
        value: t.id,
        label: (0, c.computeChannelName)(t, S.default, I.default)
      })
    });
    let Q = () => {
        X(!1), G()
      },
      $ = r.useCallback(e => B(e), []),
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
        s.default.set(R.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), X(!1)
      }, []);
    return (0, i.jsx)(o.default, {
      page: L.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
      children: (0, i.jsxs)(a.ModalRoot, {
        transitionState: y,
        "aria-labelledby": b,
        children: [(0, i.jsxs)("div", {
          className: D.modalContents,
          children: [(0, i.jsx)(a.ModalCloseButton, {
            onClick: Q,
            className: D.closeButton
          }), (0, i.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            className: D.headerText,
            id: b,
            children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
          }), (0, i.jsxs)(a.FormSection, {
            className: D.formGroup,
            children: [(0, i.jsx)(a.SearchableSelect, {
              options: J,
              onChange: e => F(e),
              value: x,
              renderOptionPrefix: e => {
                var t;
                if (null === e) return null;
                let n = e.value,
                  r = h.default.getChannel(n),
                  l = null !== (t = (0, d.getChannelIconComponent)(r)) && void 0 !== t ? t : v.default;
                return (0, i.jsx)(l, {
                  className: D.channelTitleIcon,
                  width: 16,
                  height: 16
                })
              }
            }), (0, i.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: D.formDescription,
              children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
            })]
          }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            className: D.headerText,
            children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
          }), (0, i.jsx)(a.FormSection, {
            className: D.formGroup,
            children: (0, i.jsx)(a.TextInput, {
              maxLength: 42,
              value: V,
              inputClassName: D.input,
              placeholder: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
              onChange: $
            })
          }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.FormSection, {
            className: D.formGroup,
            children: (0, i.jsxs)("div", {
              className: D.emojiSectionContainer,
              children: [(0, i.jsxs)("div", {
                className: D.emojiTitleContainer,
                children: [(0, i.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                }), (0, i.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: O.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                })]
              }), (0, i.jsx)(E.default, {
                hasSetEmoji: null != j,
                onClick: ee,
                children: (0, i.jsx)(a.Popout, {
                  renderPopout: e => {
                    let {
                      closePopout: t
                    } = e, n = T.default.getDefaultChannel(U);
                    return (0, i.jsx)(f.default, {
                      guildId: U,
                      closePopout: t,
                      onSelectEmoji: (e, n) => {
                        ee(e), n && (t(), null == e && Q())
                      },
                      pickerIntention: P.EmojiIntention.COMMUNITY_CONTENT,
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
                      tooltipClassName: D.tooltip,
                      position: "left",
                      text: q ? O.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                      forceOpen: q,
                      children: (0, i.jsx)(p.default, {
                        ...e,
                        onClick: t => {
                          var n;
                          et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                        },
                        active: n,
                        className: D.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: null != j && (null != j.id || null != j.name) ? () => (0, i.jsx)(u.default, {
                          className: D.emoji,
                          emojiId: j.id,
                          emojiName: j.name,
                          animated: !!(null == Y ? void 0 : Y.animated)
                        }) : null
                      })
                    })
                  }
                })
              })]
            })
          })]
        }), (0, i.jsxs)(a.ModalFooter, {
          className: D.footer,
          justify: N.default.Justify.BETWEEN,
          children: [(0, i.jsxs)(N.default, {
            grow: 0,
            align: N.default.Align.CENTER,
            children: [(0, i.jsx)(a.Button, {
              onClick: Q,
              size: a.Button.Sizes.SMALL,
              look: a.Button.Looks.LINK,
              color: a.Button.Colors.PRIMARY,
              children: O.default.Messages.CANCEL
            }), (0, i.jsx)(a.Button, {
              onClick: () => {
                null != x && V.length > 0 && w({
                  channel_id: x,
                  description: V,
                  emoji_id: null == j ? void 0 : j.id,
                  emoji_name: null == j ? void 0 : j.name
                }), Q()
              },
              disabled: null == x || 0 === V.length,
              children: O.default.Messages.SAVE
            })]
          }), null != M && (0, i.jsx)(a.Button, {
            onClick: () => {
              W(!0)
            },
            size: a.Button.Sizes.MIN,
            look: a.Button.Looks.LINK,
            color: a.Button.Colors.RED,
            children: O.default.Messages.REMOVE
          })]
        }), k && (0, i.jsx)(g.default, {
          onConfirm: () => {
            w(), Q()
          },
          onCancel: () => W(!1),
          channelId: x
        })]
      })
    })
  }