"use strict";
s.r(t), s.d(t, {
  EmojiTable: function() {
    return Y
  },
  EmojiTableTitle: function() {
    return V
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("512722"),
  o = s.n(r),
  d = s("392711"),
  u = s.n(d),
  c = s("153832"),
  E = s("442837"),
  _ = s("481060"),
  I = s("668781"),
  T = s("80932"),
  S = s("225433"),
  f = s("327802"),
  m = s("110924"),
  N = s("200876"),
  g = s("730089"),
  h = s("372444"),
  C = s("889564"),
  R = s("372129"),
  x = s("889161"),
  L = s("210887"),
  O = s("185403"),
  p = s("626135"),
  A = s("768581"),
  M = s("176354"),
  D = s("267642"),
  v = s("434404"),
  j = s("471613"),
  G = s("999382"),
  U = s("981631"),
  P = s("185923"),
  b = s("689938"),
  y = s("138716"),
  B = s("164149");
let F = u().throttle(T.fetchEmoji, 1e3),
  H = e => {
    let {
      currentTarget: t,
      which: s
    } = e;
    13 === s && t.blur()
  },
  k = e => {
    let {
      guildId: t,
      emoji: s,
      onEdit: n,
      editingDisabled: r = !1
    } = e, [o, d] = l.useState(s.name), u = A.default.getEmojiURL({
      id: s.id,
      animated: s.animated,
      size: 32
    });
    return (0, a.jsxs)("div", {
      className: i()(y.emojiRow, B.card),
      children: [(0, a.jsx)("div", {
        className: y.emojiColumn,
        children: (0, a.jsx)(_.Tooltip, {
          text: s.available ? null : b.default.Messages.EMOJI_DISABLED_PREMIUM_TIER_LOST,
          children: e => (0, a.jsx)("div", {
            ...e,
            className: i()(y.emojiImage, {
              [y.emojiDisabled]: !s.available
            }),
            style: {
              backgroundImage: "url(".concat(u, ")")
            }
          })
        })
      }), (0, a.jsxs)("div", {
        className: y.column,
        children: [(0, a.jsx)(_.TextInput, {
          className: i()(y.emojiAliasInput, {
            [y.emojiAliasInputDisabled]: r
          }),
          inputClassName: y.emojiInput,
          placeholder: b.default.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER,
          onKeyPress: H,
          onChange: d,
          onBlur: () => {
            o !== s.name && (0, T.updateEmoji)({
              guildId: t,
              emojiId: s.id,
              name: M.default.sanitizeEmojiName(o)
            })
          },
          size: _.TextInput.Sizes.MINI,
          value: o,
          maxLength: P.EMOJI_MAX_LENGTH,
          disabled: r
        }), (0, a.jsx)("div", {
          className: y.emojiAliasPlaceholder,
          children: (0, a.jsx)("div", {
            className: y.emojiAliasPlaceholderContent,
            children: o.length > 0 ? o : b.default.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER
          })
        })]
      }), (0, a.jsxs)("div", {
        className: y.column,
        children: [(0, a.jsx)(_.Avatar, {
          src: s.user.getAvatarURL(t, 24),
          "aria-label": s.user.username,
          size: _.AvatarSizes.SIZE_24,
          className: y.avatar
        }), (0, a.jsx)(_.FormText, {
          className: i()(y.emojiRowText),
          children: s.user.username
        })]
      }), null != n && !r && (0, a.jsx)(_.Clickable, {
        "aria-label": b.default.Messages.EDIT,
        className: y.editEmojiRolesButton,
        onClick: () => n(s, t),
        children: (0, a.jsx)(O.default, {
          width: 24,
          height: 24,
          className: y.editEmojiRolesIcon
        })
      }), !r && (0, a.jsx)(S.default, {
        className: y.emojiRemove,
        onClick: () => {
          (0, T.deleteEmoji)(t, s.id).catch(e => {
            let {
              status: t
            } = e;
            429 === t && I.default.show({
              title: b.default.Messages.GENERIC_ERROR_TITLE,
              body: b.default.Messages.RATE_LIMITED
            })
          })
        }
      })]
    })
  },
  w = e => {
    let {
      isLoading: t,
      staticEmojis: l,
      animatedEmojis: n,
      theme: i,
      guild: r
    } = e;
    return t ? (0, a.jsx)(_.Spinner, {
      className: y.spinner,
      type: _.Spinner.Type.SPINNING_CIRCLE
    }) : 0 === l.length && 0 === n.length ? (0, a.jsxs)(_.EmptyState, {
      theme: i,
      className: y.empty,
      children: [(0, a.jsx)(_.EmptyStateImage, {
        darkSrc: s("458601"),
        lightSrc: s("673557"),
        width: 272,
        height: 212
      }), (0, a.jsx)(_.EmptyStateText, {
        note: b.default.Messages.NO_EMOJI,
        children: b.default.Messages.NO_EMOJI_TITLE
      })]
    }) : (0, a.jsxs)("div", {
      children: [(0, a.jsx)(V, {
        title: b.default.Messages.EMOJI,
        maxSlots: r.getMaxEmojiSlots(),
        emojiCount: l.length
      }), (0, a.jsx)(Y, {
        emojis: l,
        guild: r
      }), (0, a.jsx)(V, {
        title: b.default.Messages.ANIMATED_EMOJI,
        maxSlots: r.getMaxEmojiSlots(),
        emojiCount: n.length
      }), (0, a.jsx)(Y, {
        emojis: n,
        guild: r
      })]
    })
  },
  V = e => {
    let {
      title: t,
      maxSlots: s,
      emojiCount: l
    } = e;
    return (0, a.jsxs)(_.FormTitle, {
      tag: _.FormTitleTags.H2,
      className: y.title,
      children: [t, (0, a.jsxs)("span", {
        children: [" — ", b.default.Messages.EMOJI_SLOTS_AVAILABLE.format({
          count: s - l
        })]
      })]
    })
  },
  Y = e => {
    let {
      emojis: t,
      guild: s,
      onEdit: n,
      editingDisabled: i = !1
    } = e, r = l.useMemo(() => [...t].reverse(), [t]), {
      canManageGuildExpression: o
    } = (0, x.getManageResourcePermissions)(s);
    return 0 === t.length ? (0, a.jsx)(_.FormText, {
      type: _.FormTextTypes.DESCRIPTION,
      className: y.content,
      children: b.default.Messages.NO_EMOJI_BODY
    }) : (0, a.jsxs)(_.FormSection, {
      className: y.content,
      children: [(0, a.jsxs)("div", {
        className: y.emojiTable,
        children: [(0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: y.emojiColumn,
          children: b.default.Messages.GUILD_SETTINGS_EMOJI_IMAGE
        }), (0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: y.columnLabel,
          children: b.default.Messages.GUILD_SETTINGS_EMOJI_NAME
        }), (0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: y.columnLabel,
          children: b.default.Messages.UPLOADED_BY
        })]
      }), r.map(e => (0, a.jsx)(k, {
        guildId: s.id,
        emoji: e,
        onEdit: n,
        editingDisabled: i || !o(e)
      }, e.id))]
    })
  },
  W = e => {
    let t, s, l, {
        staticEmojiCount: n,
        animatedEmojiCount: i,
        guild: r
      } = e,
      o = r.getMaxEmojiSlots(),
      d = Math.min(o - n, o - i),
      u = r.premiumTier,
      c = (0, D.getNextTier)(u, r.id);
    return null == c || u === U.BoostedGuildTiers.TIER_3 || d > 0 ? null : (d > o ? (t = b.default.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_HEADER.format({
      level: c
    }), s = b.default.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_TEXT.format({
      level: c
    }), l = U.AnalyticsObjects.BOOST_UPSELL_BANNER_LOST_LEVEL) : (t = b.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER, s = b.default.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TEXT.format({
      level: c
    }), l = U.AnalyticsObjects.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, a.jsx)(h.default, {
      header: t,
      text: s,
      guild: r,
      analyticsLocation: {
        page: U.AnalyticsPages.GUILD_SETTINGS,
        section: U.AnalyticsSections.GUILD_SETTINGS_STICKERS,
        object: l,
        objectType: (0, D.boostedGuildTierToAnalyticsObjectType)(c)
      }
    }))
  };
t.default = () => {
  let e = (0, E.useStateFromStores)([G.default], () => G.default.getGuild()),
    [t, n] = l.useState("");
  o()(null != e, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
  let i = (0, E.useStateFromStores)([L.default], () => L.default.theme),
    {
      canCreateExpressions: r
    } = (0, x.useManageResourcePermissions)(e),
    {
      revision: d,
      emojis: I
    } = (0, E.useStateFromStoresObject)([j.default], () => ({
      revision: j.default.getEmojiRevision(e.id),
      emojis: j.default.getEmojis(e.id)
    })),
    T = (0, m.default)(d),
    [S, h] = l.useState(!1),
    [O, A] = l.useState(!1),
    M = l.useRef(null);
  l.useEffect(() => {
    S && z()
  }, [S]), l.useEffect(() => {
    F(e.id)
  }, [e.id]), l.useEffect(() => {
    null != T && T < d && F(e.id)
  }, [d, T, e.id]);
  let [D, B] = l.useMemo(() => {
    let t = null == I ? void 0 : I.filter(t => !(0, C.isRoleSubscriptionEmoji)(t, e.id)),
      [s, a] = u().partition(t, e => !e.animated);
    return [s, a]
  }, [I, e.id]), H = e.getMaxEmojiSlots(), k = Math.max(H - D.length, H - B.length), V = (s, a, l) => (0, g.uploadEmojiFile)({
    data: s,
    file: a,
    image: l,
    guildId: e.id,
    uploadId: t,
    hideErrorModal: !0
  }), Y = async s => {
    n((0, c.v4)()), p.default.track(U.AnalyticEvents.EMOJI_UPLOAD_STARTED, {
      guild_id: e.id,
      upload_id: t
    }), await (0, R.processImages)(s, V), h(!0)
  }, z = () => {
    null !== M.current && ((0, _.closeModal)(M.current), M.current = null)
  }, K = async e => {
    M.current = await (0, _.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([s.e("99387"), s.e("16169")]).then(s.bind(s, "935333"));
      return s => (0, a.jsx)(t, {
        processFiles: () => Y(e),
        ...s
      })
    })
  }, Z = (0, N.isCreatorMonetizationEnabledGuild)(e);
  return (0, a.jsxs)("div", {
    className: y.emojiSettings,
    children: [0 === k ? null : (0, a.jsx)(f.default, {
      className: y.emojiUploadContainer,
      onDrop: K
    }), (0, a.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: b.default.Messages.EMOJI,
      children: [(0, a.jsx)(W, {
        guild: e,
        staticEmojiCount: D.length,
        animatedEmojiCount: B.length
      }), (0, a.jsxs)(_.FormSection, {
        className: y.uploader,
        children: [(0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          children: b.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_TO_SERVER_DESCRIPTION.format({
            count: H
          })
        }), Z && (0, a.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          children: b.default.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_SETTINGS_MANAGE_PREMIUM_TEXT.format({
            onClick: () => v.default.open(e.id, U.GuildSettingsSections.ROLE_SUBSCRIPTIONS, void 0, U.GuildSettingsSubsections.ROLE_SUBSCRIPTION_EMOJI)
          })
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(_.FormTitle, {
            tag: _.FormTitleTags.H2,
            className: y.emojiUploadUploadRequirementsHeading,
            children: b.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_HEADING
          }), (0, a.jsxs)("ul", {
            className: y.emojiUploadUploadRequirementsList,
            children: [(0, a.jsx)("li", {
              children: (0, a.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: b.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_1
              })
            }), (0, a.jsx)("li", {
              children: (0, a.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: b.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_2.format({
                  maxSize: P.EMOJI_MAX_FILESIZE_KB
                })
              })
            }), (0, a.jsx)("li", {
              children: (0, a.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: b.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_3
              })
            }), (0, a.jsx)("li", {
              children: (0, a.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: b.default.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_4
              })
            })]
          })]
        }), (0, a.jsxs)(_.Button, {
          tabIndex: -1,
          size: _.Button.Sizes.MEDIUM,
          onClick: () => {
            let t = (0, c.v4)();
            n(t), p.default.track(U.AnalyticEvents.EMOJI_UPLOAD_STARTED, {
              guild_id: e.id,
              upload_id: t
            })
          },
          disabled: O || 0 === k || !r,
          submitting: O,
          focusProps: {
            within: !0
          },
          children: [b.default.Messages.UPLOAD_EMOJI, k > 0 ? (0, a.jsx)(R.default, {
            disabled: O || 0 === k || !r,
            tabIndex: 0,
            onChange: V,
            setLoading: A,
            multiple: !0
          }) : null]
        })]
      }), (0, a.jsx)(w, {
        isLoading: null == I,
        staticEmojis: D,
        animatedEmojis: B,
        guild: e,
        theme: i
      })]
    })]
  })
}