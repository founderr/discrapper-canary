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
  o = n("77078"),
  a = n("430568"),
  u = n("901582"),
  c = n("679653"),
  d = n("419830"),
  f = n("86678"),
  E = n("145106"),
  _ = n("385976"),
  I = n("42203"),
  h = n("923959"),
  p = n("27618"),
  S = n("697218"),
  T = n("882641"),
  C = n("145131"),
  N = n("476765"),
  v = n("593195"),
  m = n("991170"),
  R = n("59811"),
  A = n("310457"),
  g = n("805828"),
  L = n("49111"),
  M = n("958706"),
  U = n("782340"),
  P = n("306978"),
  O = e => {
    var t, n;
    let {
      guildId: O,
      welcomeChannel: D,
      transitionState: x,
      onSave: y,
      onClose: w
    } = e, G = (0, N.useUID)(), [b, j] = r.useState(null != D ? D.channel_id : null), [F, V] = r.useState(null != D ? D.description : ""), [B, H] = r.useState(null != D ? {
      id: D.emoji_id,
      name: D.emoji_name
    } : null), [k, W] = r.useState(!1), Z = (0, s.useStateFromStores)([_.default], () => (null == B ? void 0 : B.id) != null ? _.default.getUsableCustomEmojiById(B.id) : null), Y = (0, s.useStateFromStores)([h.default], () => h.default.getChannels(O)[h.GUILD_SELECTABLE_CHANNELS_KEY], [O]), z = (0, s.useStateFromStores)([R.default], () => R.default.get(O)), K = null !== (n = null == z ? void 0 : null === (t = z.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [q, X] = r.useState(!1);
    r.useEffect(() => {
      !l.default.get(g.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => X(!0), 300)
    }, []);
    let J = [];
    Y.forEach(e => {
      let {
        channel: t
      } = e;
      m.default.canEveryoneRole(L.Permissions.VIEW_CHANNEL, t) && ((null == D ? void 0 : D.channel_id) === t.id || !K.includes(t.id)) && J.push({
        value: t.id,
        label: (0, c.computeChannelName)(t, S.default, p.default)
      })
    });
    let Q = () => {
        X(!1), w()
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
        l.default.set(g.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), X(!1)
      }, []);
    return (0, i.jsx)(u.default, {
      page: L.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
      children: (0, i.jsxs)(o.ModalRoot, {
        transitionState: x,
        "aria-labelledby": G,
        children: [(0, i.jsxs)("div", {
          className: P.modalContents,
          children: [(0, i.jsx)(o.ModalCloseButton, {
            onClick: Q,
            className: P.closeButton
          }), (0, i.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            className: P.headerText,
            id: G,
            children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
          }), (0, i.jsxs)(o.FormSection, {
            className: P.formGroup,
            children: [(0, i.jsx)(o.SearchableSelect, {
              options: J,
              onChange: e => j(e),
              value: b,
              renderOptionPrefix: e => {
                var t;
                if (null === e) return null;
                let n = e.value,
                  r = I.default.getChannel(n),
                  s = null !== (t = (0, d.getChannelIconComponent)(r)) && void 0 !== t ? t : v.default;
                return (0, i.jsx)(s, {
                  className: P.channelTitleIcon,
                  width: 16,
                  height: 16
                })
              }
            }), (0, i.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: P.formDescription,
              children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
            })]
          }), (0, i.jsx)(o.FormDivider, {}), (0, i.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            className: P.headerText,
            children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
          }), (0, i.jsx)(o.FormSection, {
            className: P.formGroup,
            children: (0, i.jsx)(o.TextInput, {
              maxLength: 42,
              value: F,
              inputClassName: P.input,
              placeholder: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
              onChange: $
            })
          }), (0, i.jsx)(o.FormDivider, {}), (0, i.jsx)(o.FormSection, {
            className: P.formGroup,
            children: (0, i.jsxs)("div", {
              className: P.emojiSectionContainer,
              children: [(0, i.jsxs)("div", {
                className: P.emojiTitleContainer,
                children: [(0, i.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                }), (0, i.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: U.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                })]
              }), (0, i.jsx)(E.default, {
                hasSetEmoji: null != B,
                onClick: ee,
                children: (0, i.jsx)(o.Popout, {
                  renderPopout: e => {
                    let {
                      closePopout: t
                    } = e, n = h.default.getDefaultChannel(O);
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
                  animation: o.Popout.Animation.NONE,
                  align: "bottom",
                  children: (e, t) => {
                    let {
                      isShown: n
                    } = t;
                    return (0, i.jsx)(o.TooltipContainer, {
                      color: o.TooltipColors.BRAND,
                      tooltipClassName: P.tooltip,
                      position: "left",
                      text: q ? U.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                      forceOpen: q,
                      children: (0, i.jsx)(T.default, {
                        ...e,
                        onClick: t => {
                          var n;
                          et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                        },
                        active: n,
                        className: P.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: null != B && (null != B.id || null != B.name) ? () => (0, i.jsx)(a.default, {
                          className: P.emoji,
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
        }), (0, i.jsxs)(o.ModalFooter, {
          className: P.footer,
          justify: C.default.Justify.BETWEEN,
          children: [(0, i.jsxs)(C.default, {
            grow: 0,
            align: C.default.Align.CENTER,
            children: [(0, i.jsx)(o.Button, {
              onClick: Q,
              size: o.Button.Sizes.SMALL,
              look: o.Button.Looks.LINK,
              color: o.Button.Colors.PRIMARY,
              children: U.default.Messages.CANCEL
            }), (0, i.jsx)(o.Button, {
              onClick: () => {
                null != b && F.length > 0 && y({
                  channel_id: b,
                  description: F,
                  emoji_id: null == B ? void 0 : B.id,
                  emoji_name: null == B ? void 0 : B.name
                }), Q()
              },
              disabled: null == b || 0 === F.length,
              children: U.default.Messages.SAVE
            })]
          }), null != D && (0, i.jsx)(o.Button, {
            onClick: () => {
              W(!0)
            },
            size: o.Button.Sizes.MIN,
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.RED,
            children: U.default.Messages.REMOVE
          })]
        }), k && (0, i.jsx)(A.default, {
          onConfirm: () => {
            y(), Q()
          },
          onCancel: () => W(!1),
          channelId: b
        })]
      })
    })
  }