"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("424973");
var i = n("37983"),
  r = n("884691"),
  s = n("446674"),
  l = n("95410"),
  a = n("77078"),
  o = n("430568"),
  u = n("901582"),
  c = n("679653"),
  d = n("419830"),
  f = n("86678"),
  h = n("145106"),
  E = n("385976"),
  _ = n("42203"),
  v = n("923959"),
  p = n("27618"),
  m = n("697218"),
  C = n("882641"),
  g = n("145131"),
  S = n("476765"),
  I = n("593195"),
  A = n("991170"),
  N = n("59811"),
  T = n("310457"),
  L = n("805828"),
  w = n("49111"),
  M = n("958706"),
  R = n("782340"),
  b = n("977611"),
  O = e => {
    var t, n;
    let {
      guildId: O,
      welcomeChannel: x,
      transitionState: P,
      onSave: y,
      onClose: D
    } = e, U = (0, S.useUID)(), [F, j] = r.useState(null != x ? x.channel_id : null), [V, H] = r.useState(null != x ? x.description : ""), [G, W] = r.useState(null != x ? {
      id: x.emoji_id,
      name: x.emoji_name
    } : null), [B, k] = r.useState(!1), z = (0, s.useStateFromStores)([E.default], () => (null == G ? void 0 : G.id) != null ? E.default.getUsableCustomEmojiById(G.id) : null), Z = (0, s.useStateFromStores)([v.default], () => v.default.getChannels(O)[v.GUILD_SELECTABLE_CHANNELS_KEY], [O]), Y = (0, s.useStateFromStores)([N.default], () => N.default.get(O)), K = null !== (n = null == Y ? void 0 : null === (t = Y.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [q, X] = r.useState(!1);
    r.useEffect(() => {
      !l.default.get(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => X(!0), 300)
    }, []);
    let J = [];
    Z.forEach(e => {
      let {
        channel: t
      } = e;
      A.default.canEveryoneRole(w.Permissions.VIEW_CHANNEL, t) && ((null == x ? void 0 : x.channel_id) === t.id || !K.includes(t.id)) && J.push({
        value: t.id,
        label: (0, c.computeChannelName)(t, m.default, p.default)
      })
    });
    let Q = () => {
        X(!1), D()
      },
      $ = r.useCallback(e => H(e), []),
      ee = e => {
        var t, n, i;
        if (null == e) {
          W(null);
          return
        }
        W(null != e.id ? {
          id: null !== (t = e.id) && void 0 !== t ? t : null,
          name: null !== (n = e.name) && void 0 !== n ? n : null
        } : {
          id: null,
          name: null !== (i = e.optionallyDiverseSequence) && void 0 !== i ? i : null
        })
      },
      et = r.useCallback(() => {
        l.default.set(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), X(!1)
      }, []);
    return (0, i.jsx)(u.default, {
      page: w.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
      children: (0, i.jsxs)(a.ModalRoot, {
        transitionState: P,
        "aria-labelledby": U,
        children: [(0, i.jsxs)("div", {
          className: b.modalContents,
          children: [(0, i.jsx)(a.ModalCloseButton, {
            onClick: Q,
            className: b.closeButton
          }), (0, i.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            className: b.headerText,
            id: U,
            children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
          }), (0, i.jsxs)(a.FormSection, {
            className: b.formGroup,
            children: [(0, i.jsx)(a.SearchableSelect, {
              options: J,
              onChange: e => j(e),
              value: F,
              renderOptionPrefix: e => {
                var t;
                if (null === e) return null;
                let n = e.value,
                  r = _.default.getChannel(n),
                  s = null !== (t = (0, d.getChannelIconComponent)(r)) && void 0 !== t ? t : I.default;
                return (0, i.jsx)(s, {
                  className: b.channelTitleIcon,
                  width: 16,
                  height: 16
                })
              }
            }), (0, i.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: b.formDescription,
              children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
            })]
          }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.Heading, {
            variant: "heading-md/semibold",
            className: b.headerText,
            children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
          }), (0, i.jsx)(a.FormSection, {
            className: b.formGroup,
            children: (0, i.jsx)(a.TextInput, {
              maxLength: 42,
              value: V,
              inputClassName: b.input,
              placeholder: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
              onChange: $
            })
          }), (0, i.jsx)(a.FormDivider, {}), (0, i.jsx)(a.FormSection, {
            className: b.formGroup,
            children: (0, i.jsxs)("div", {
              className: b.emojiSectionContainer,
              children: [(0, i.jsxs)("div", {
                className: b.emojiTitleContainer,
                children: [(0, i.jsx)(a.Heading, {
                  variant: "heading-md/semibold",
                  children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                }), (0, i.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: R.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                })]
              }), (0, i.jsx)(h.default, {
                hasSetEmoji: null != G,
                onClick: ee,
                children: (0, i.jsx)(a.Popout, {
                  renderPopout: e => {
                    let {
                      closePopout: t
                    } = e, n = v.default.getDefaultChannel(O);
                    return (0, i.jsx)(f.default, {
                      guildId: O,
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
                      tooltipClassName: b.tooltip,
                      position: "left",
                      text: q ? R.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                      forceOpen: q,
                      children: (0, i.jsx)(C.default, {
                        ...e,
                        onClick: t => {
                          var n;
                          et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                        },
                        active: n,
                        className: b.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: null != G && (null != G.id || null != G.name) ? () => (0, i.jsx)(o.default, {
                          className: b.emoji,
                          emojiId: G.id,
                          emojiName: G.name,
                          animated: !!(null == z ? void 0 : z.animated)
                        }) : null
                      })
                    })
                  }
                })
              })]
            })
          })]
        }), (0, i.jsxs)(a.ModalFooter, {
          className: b.footer,
          justify: g.default.Justify.BETWEEN,
          children: [(0, i.jsxs)(g.default, {
            grow: 0,
            align: g.default.Align.CENTER,
            children: [(0, i.jsx)(a.Button, {
              onClick: Q,
              size: a.Button.Sizes.SMALL,
              look: a.Button.Looks.LINK,
              color: a.Button.Colors.PRIMARY,
              children: R.default.Messages.CANCEL
            }), (0, i.jsx)(a.Button, {
              onClick: () => {
                null != F && V.length > 0 && y({
                  channel_id: F,
                  description: V,
                  emoji_id: null == G ? void 0 : G.id,
                  emoji_name: null == G ? void 0 : G.name
                }), Q()
              },
              disabled: null == F || 0 === V.length,
              children: R.default.Messages.SAVE
            })]
          }), null != x && (0, i.jsx)(a.Button, {
            onClick: () => {
              k(!0)
            },
            size: a.Button.Sizes.MIN,
            look: a.Button.Looks.LINK,
            color: a.Button.Colors.RED,
            children: R.default.Messages.REMOVE
          })]
        }), B && (0, i.jsx)(T.default, {
          onConfirm: () => {
            y(), Q()
          },
          onCancel: () => k(!1),
          channelId: F
        })]
      })
    })
  }