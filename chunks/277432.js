"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("424973");
var r = n("37983"),
  i = n("884691"),
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
  C = n("882641"),
  T = n("145131"),
  N = n("476765"),
  v = n("593195"),
  m = n("991170"),
  R = n("59811"),
  g = n("310457"),
  L = n("805828"),
  A = n("49111"),
  U = n("958706"),
  P = n("782340"),
  M = n("306978"),
  O = e => {
    var t, n;
    let {
      guildId: O,
      welcomeChannel: D,
      transitionState: y,
      onSave: x,
      onClose: G
    } = e, b = (0, N.useUID)(), [w, j] = i.useState(null != D ? D.channel_id : null), [B, V] = i.useState(null != D ? D.description : ""), [F, H] = i.useState(null != D ? {
      id: D.emoji_id,
      name: D.emoji_name
    } : null), [k, Z] = i.useState(!1), Y = (0, s.useStateFromStores)([_.default], () => (null == F ? void 0 : F.id) != null ? _.default.getUsableCustomEmojiById(F.id) : null), K = (0, s.useStateFromStores)([h.default], () => h.default.getChannels(O)[h.GUILD_SELECTABLE_CHANNELS_KEY], [O]), W = (0, s.useStateFromStores)([R.default], () => R.default.get(O)), z = null !== (n = null == W ? void 0 : null === (t = W.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [J, q] = i.useState(!1);
    i.useEffect(() => {
      !l.default.get(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => q(!0), 300)
    }, []);
    let X = [];
    K.forEach(e => {
      let {
        channel: t
      } = e;
      m.default.canEveryoneRole(A.Permissions.VIEW_CHANNEL, t) && ((null == D ? void 0 : D.channel_id) === t.id || !z.includes(t.id)) && X.push({
        value: t.id,
        label: (0, c.computeChannelName)(t, S.default, p.default)
      })
    });
    let Q = () => {
        q(!1), G()
      },
      $ = i.useCallback(e => V(e), []),
      ee = e => {
        var t, n, r;
        if (null == e) {
          H(null);
          return
        }
        H(null != e.id ? {
          id: null !== (t = e.id) && void 0 !== t ? t : null,
          name: null !== (n = e.name) && void 0 !== n ? n : null
        } : {
          id: null,
          name: null !== (r = e.optionallyDiverseSequence) && void 0 !== r ? r : null
        })
      },
      et = i.useCallback(() => {
        l.default.set(L.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), q(!1)
      }, []);
    return (0, r.jsx)(u.default, {
      page: A.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
      children: (0, r.jsxs)(o.ModalRoot, {
        transitionState: y,
        "aria-labelledby": b,
        children: [(0, r.jsxs)("div", {
          className: M.modalContents,
          children: [(0, r.jsx)(o.ModalCloseButton, {
            onClick: Q,
            className: M.closeButton
          }), (0, r.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            className: M.headerText,
            id: b,
            children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
          }), (0, r.jsxs)(o.FormSection, {
            className: M.formGroup,
            children: [(0, r.jsx)(o.SearchableSelect, {
              options: X,
              onChange: e => j(e),
              value: w,
              renderOptionPrefix: e => {
                var t;
                if (null === e) return null;
                let n = e.value,
                  i = I.default.getChannel(n),
                  s = null !== (t = (0, d.getChannelIconComponent)(i)) && void 0 !== t ? t : v.default;
                return (0, r.jsx)(s, {
                  className: M.channelTitleIcon,
                  width: 16,
                  height: 16
                })
              }
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: M.formDescription,
              children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
            })]
          }), (0, r.jsx)(o.FormDivider, {}), (0, r.jsx)(o.Heading, {
            variant: "heading-md/semibold",
            className: M.headerText,
            children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
          }), (0, r.jsx)(o.FormSection, {
            className: M.formGroup,
            children: (0, r.jsx)(o.TextInput, {
              maxLength: 42,
              value: B,
              inputClassName: M.input,
              placeholder: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
              onChange: $
            })
          }), (0, r.jsx)(o.FormDivider, {}), (0, r.jsx)(o.FormSection, {
            className: M.formGroup,
            children: (0, r.jsxs)("div", {
              className: M.emojiSectionContainer,
              children: [(0, r.jsxs)("div", {
                className: M.emojiTitleContainer,
                children: [(0, r.jsx)(o.Heading, {
                  variant: "heading-md/semibold",
                  children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                }), (0, r.jsx)(o.Text, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                })]
              }), (0, r.jsx)(E.default, {
                hasSetEmoji: null != F,
                onClick: ee,
                children: (0, r.jsx)(o.Popout, {
                  renderPopout: e => {
                    let {
                      closePopout: t
                    } = e, n = h.default.getDefaultChannel(O);
                    return (0, r.jsx)(f.default, {
                      guildId: O,
                      closePopout: t,
                      onSelectEmoji: (e, n) => {
                        ee(e), n && (t(), null == e && Q())
                      },
                      pickerIntention: U.EmojiIntention.COMMUNITY_CONTENT,
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
                    return (0, r.jsx)(o.TooltipContainer, {
                      color: o.TooltipColors.BRAND,
                      tooltipClassName: M.tooltip,
                      position: "left",
                      text: J ? P.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                      forceOpen: J,
                      children: (0, r.jsx)(C.default, {
                        ...e,
                        onClick: t => {
                          var n;
                          et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                        },
                        active: n,
                        className: M.emojiButton,
                        tabIndex: 0,
                        renderButtonContents: null != F && (null != F.id || null != F.name) ? () => (0, r.jsx)(a.default, {
                          className: M.emoji,
                          emojiId: F.id,
                          emojiName: F.name,
                          animated: !!(null == Y ? void 0 : Y.animated)
                        }) : null
                      })
                    })
                  }
                })
              })]
            })
          })]
        }), (0, r.jsxs)(o.ModalFooter, {
          className: M.footer,
          justify: T.default.Justify.BETWEEN,
          children: [(0, r.jsxs)(T.default, {
            grow: 0,
            align: T.default.Align.CENTER,
            children: [(0, r.jsx)(o.Button, {
              onClick: Q,
              size: o.Button.Sizes.SMALL,
              look: o.Button.Looks.LINK,
              color: o.Button.Colors.PRIMARY,
              children: P.default.Messages.CANCEL
            }), (0, r.jsx)(o.Button, {
              onClick: () => {
                null != w && B.length > 0 && x({
                  channel_id: w,
                  description: B,
                  emoji_id: null == F ? void 0 : F.id,
                  emoji_name: null == F ? void 0 : F.name
                }), Q()
              },
              disabled: null == w || 0 === B.length,
              children: P.default.Messages.SAVE
            })]
          }), null != D && (0, r.jsx)(o.Button, {
            onClick: () => {
              Z(!0)
            },
            size: o.Button.Sizes.MIN,
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.RED,
            children: P.default.Messages.REMOVE
          })]
        }), k && (0, r.jsx)(g.default, {
          onConfirm: () => {
            x(), Q()
          },
          onCancel: () => Z(!1),
          channelId: w
        })]
      })
    })
  }