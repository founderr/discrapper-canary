"use strict";
t.d(s, {
  FT: function() {
    return w
  },
  L3: function() {
    return H
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(512722),
  o = t.n(r),
  c = t(392711),
  d = t.n(c),
  u = t(772848),
  E = t(442837),
  _ = t(481060),
  I = t(668781),
  T = t(80932),
  N = t(225433),
  m = t(327802),
  S = t(110924),
  h = t(200876),
  g = t(730089),
  C = t(372444),
  x = t(889564),
  R = t(372129),
  L = t(889161),
  O = t(210887),
  A = t(626135),
  p = t(768581),
  M = t(176354),
  f = t(267642),
  D = t(434404),
  v = t(471613),
  j = t(999382),
  Z = t(981631),
  U = t(185923),
  G = t(689938),
  P = t(138716),
  b = t(164149);
let B = d().throttle(T.OQ, 1e3),
  y = e => {
    let {
      currentTarget: s,
      which: t
    } = e;
    13 === t && s.blur()
  },
  F = e => {
    let {
      guildId: s,
      emoji: t,
      onEdit: l,
      editingDisabled: r = !1
    } = e, [o, c] = i.useState(t.name), d = p.ZP.getEmojiURL({
      id: t.id,
      animated: t.animated,
      size: 32
    });
    return (0, n.jsxs)("div", {
      className: a()(P.emojiRow, b.card),
      children: [(0, n.jsx)("div", {
        className: P.emojiColumn,
        children: (0, n.jsx)(_.Tooltip, {
          text: t.available ? null : G.Z.Messages.EMOJI_DISABLED_PREMIUM_TIER_LOST,
          children: e => (0, n.jsx)("div", {
            ...e,
            className: a()(P.emojiImage, {
              [P.emojiDisabled]: !t.available
            }),
            style: {
              backgroundImage: "url(".concat(d, ")")
            }
          })
        })
      }), (0, n.jsxs)("div", {
        className: P.column,
        children: [(0, n.jsx)(_.TextInput, {
          className: a()(P.emojiAliasInput, {
            [P.emojiAliasInputDisabled]: r
          }),
          inputClassName: P.emojiInput,
          placeholder: G.Z.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER,
          onKeyPress: y,
          onChange: c,
          onBlur: () => {
            o !== t.name && (0, T.dv)({
              guildId: s,
              emojiId: t.id,
              name: M.ZP.sanitizeEmojiName(o)
            })
          },
          size: _.TextInput.Sizes.MINI,
          value: o,
          maxLength: U.Yc,
          disabled: r
        }), (0, n.jsx)("div", {
          className: P.emojiAliasPlaceholder,
          children: (0, n.jsx)("div", {
            className: P.emojiAliasPlaceholderContent,
            children: o.length > 0 ? o : G.Z.Messages.GUILD_SETTINGS_EMOJI_ALIAS_PLACEHOLDER
          })
        })]
      }), (0, n.jsxs)("div", {
        className: P.column,
        children: [(0, n.jsx)(_.Avatar, {
          src: t.user.getAvatarURL(s, 24),
          "aria-label": t.user.username,
          size: _.AvatarSizes.SIZE_24,
          className: P.avatar
        }), (0, n.jsx)(_.FormText, {
          className: a()(P.emojiRowText),
          children: t.user.username
        })]
      }), null != l && !r && (0, n.jsx)(_.Clickable, {
        "aria-label": G.Z.Messages.EDIT,
        className: P.editEmojiRolesButton,
        onClick: () => l(t, s),
        children: (0, n.jsx)(_.PencilIcon, {
          size: "md",
          color: "currentColor",
          className: P.editEmojiRolesIcon
        })
      }), !r && (0, n.jsx)(N.Z, {
        className: P.emojiRemove,
        onClick: () => {
          (0, T.RE)(s, t.id).catch(e => {
            let {
              status: s
            } = e;
            429 === s && I.Z.show({
              title: G.Z.Messages.GENERIC_ERROR_TITLE,
              body: G.Z.Messages.RATE_LIMITED
            })
          })
        }
      })]
    })
  },
  k = e => {
    let {
      isLoading: s,
      staticEmojis: i,
      animatedEmojis: l,
      theme: a,
      guild: r
    } = e;
    return s ? (0, n.jsx)(_.Spinner, {
      className: P.spinner,
      type: _.Spinner.Type.SPINNING_CIRCLE
    }) : 0 === i.length && 0 === l.length ? (0, n.jsxs)(_.EmptyState, {
      theme: a,
      className: P.empty,
      children: [(0, n.jsx)(_.EmptyStateImage, {
        darkSrc: t(458601),
        lightSrc: t(673557),
        width: 272,
        height: 212
      }), (0, n.jsx)(_.EmptyStateText, {
        note: G.Z.Messages.NO_EMOJI,
        children: G.Z.Messages.NO_EMOJI_TITLE
      })]
    }) : (0, n.jsxs)("div", {
      children: [(0, n.jsx)(H, {
        title: G.Z.Messages.EMOJI,
        maxSlots: r.getMaxEmojiSlots(),
        emojiCount: i.length
      }), (0, n.jsx)(w, {
        emojis: i,
        guild: r
      }), (0, n.jsx)(H, {
        title: G.Z.Messages.ANIMATED_EMOJI,
        maxSlots: r.getMaxEmojiSlots(),
        emojiCount: l.length
      }), (0, n.jsx)(w, {
        emojis: l,
        guild: r
      })]
    })
  },
  H = e => {
    let {
      title: s,
      maxSlots: t,
      emojiCount: i
    } = e;
    return (0, n.jsxs)(_.FormTitle, {
      tag: _.FormTitleTags.H2,
      className: P.title,
      children: [s, (0, n.jsxs)("span", {
        children: [" — ", G.Z.Messages.EMOJI_SLOTS_AVAILABLE.format({
          count: t - i
        })]
      })]
    })
  },
  w = e => {
    let {
      emojis: s,
      guild: t,
      onEdit: l,
      editingDisabled: a = !1
    } = e, r = i.useMemo(() => [...s].reverse(), [s]), {
      canManageGuildExpression: o
    } = (0, L.Gw)(t);
    return 0 === s.length ? (0, n.jsx)(_.FormText, {
      type: _.FormTextTypes.DESCRIPTION,
      className: P.content,
      children: G.Z.Messages.NO_EMOJI_BODY
    }) : (0, n.jsxs)(_.FormSection, {
      className: P.content,
      children: [(0, n.jsxs)("div", {
        className: P.emojiTable,
        children: [(0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: P.emojiColumn,
          children: G.Z.Messages.GUILD_SETTINGS_EMOJI_IMAGE
        }), (0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: P.columnLabel,
          children: G.Z.Messages.GUILD_SETTINGS_EMOJI_NAME
        }), (0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          className: P.columnLabel,
          children: G.Z.Messages.UPLOADED_BY
        })]
      }), r.map(e => (0, n.jsx)(F, {
        guildId: t.id,
        emoji: e,
        onEdit: l,
        editingDisabled: a || !o(e)
      }, e.id))]
    })
  },
  V = e => {
    let s, t, i, {
        staticEmojiCount: l,
        animatedEmojiCount: a,
        guild: r
      } = e,
      o = r.getMaxEmojiSlots(),
      c = Math.min(o - l, o - a),
      d = r.premiumTier,
      u = (0, f.FZ)(d, r.id);
    return null == u || d === Z.Eu4.TIER_3 || c > 0 ? null : (c > o ? (s = G.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_HEADER.format({
      level: u
    }), t = G.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TOO_MANY_EMOJIS_TEXT.format({
      level: u
    }), i = Z.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL) : (s = G.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER, t = G.Z.Messages.GUILD_SETTINGS_EMOJIS_UPSELL_BANNER_TEXT.format({
      level: u
    }), i = Z.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL), (0, n.jsx)(C.Z, {
      header: s,
      text: t,
      guild: r,
      analyticsLocation: {
        page: Z.ZY5.GUILD_SETTINGS,
        section: Z.jXE.GUILD_SETTINGS_STICKERS,
        object: i,
        objectType: (0, f.ge)(u)
      }
    }))
  };
s.ZP = () => {
  let e = (0, E.e7)([j.Z], () => j.Z.getGuild()),
    [s, l] = i.useState("");
  o()(null != e, "ConnectedGuildSettingsEmoji must be rendered within a guild context");
  let a = (0, E.e7)([O.Z], () => O.Z.theme),
    {
      canCreateExpressions: r
    } = (0, L.XJ)(e),
    {
      revision: c,
      emojis: I
    } = (0, E.cj)([v.Z], () => ({
      revision: v.Z.getEmojiRevision(e.id),
      emojis: v.Z.getEmojis(e.id)
    })),
    T = (0, S.Z)(c),
    [N, C] = i.useState(!1),
    [p, M] = i.useState(!1),
    f = i.useRef(null);
  i.useEffect(() => {
    N && W()
  }, [N]), i.useEffect(() => {
    B(e.id)
  }, [e.id]), i.useEffect(() => {
    null != T && T < c && B(e.id)
  }, [c, T, e.id]);
  let [b, y] = i.useMemo(() => {
    let s = null == I ? void 0 : I.filter(s => !(0, x.Kt)(s, e.id)),
      [t, n] = d().partition(s, e => !e.animated);
    return [t, n]
  }, [I, e.id]), F = e.getMaxEmojiSlots(), H = Math.max(F - b.length, F - y.length), w = (t, n, i) => (0, g.G)({
    data: t,
    file: n,
    image: i,
    guildId: e.id,
    uploadId: s,
    hideErrorModal: !0
  }), Y = async t => {
    l((0, u.Z)()), A.default.track(Z.rMx.EMOJI_UPLOAD_STARTED, {
      guild_id: e.id,
      upload_id: s
    }), await (0, R._)(t, w), C(!0)
  }, W = () => {
    null !== f.current && ((0, _.closeModal)(f.current), f.current = null)
  }, z = async e => {
    f.current = await (0, _.openModalLazy)(async () => {
      let {
        default: s
      } = await Promise.all([t.e("99387"), t.e("16169")]).then(t.bind(t, 935333));
      return t => (0, n.jsx)(s, {
        processFiles: () => Y(e),
        ...t
      })
    })
  }, K = (0, h.l)(e);
  return (0, n.jsxs)("div", {
    className: P.emojiSettings,
    children: [0 === H ? null : (0, n.jsx)(m.Z, {
      className: P.emojiUploadContainer,
      onDrop: z
    }), (0, n.jsxs)(_.FormSection, {
      tag: _.FormTitleTags.H1,
      title: G.Z.Messages.EMOJI,
      children: [(0, n.jsx)(V, {
        guild: e,
        staticEmojiCount: b.length,
        animatedEmojiCount: y.length
      }), (0, n.jsxs)(_.FormSection, {
        className: P.uploader,
        children: [(0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_TO_SERVER_DESCRIPTION.format({
            count: F
          })
        }), K && (0, n.jsx)(_.FormText, {
          type: _.FormTextTypes.DESCRIPTION,
          children: G.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EMOJI_SETTINGS_MANAGE_PREMIUM_TEXT.format({
            onClick: () => D.Z.open(e.id, Z.pNK.ROLE_SUBSCRIPTIONS, void 0, Z.KsC.ROLE_SUBSCRIPTION_EMOJI)
          })
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(_.FormTitle, {
            tag: _.FormTitleTags.H2,
            className: P.emojiUploadUploadRequirementsHeading,
            children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_HEADING
          }), (0, n.jsxs)("ul", {
            className: P.emojiUploadUploadRequirementsList,
            children: [(0, n.jsx)("li", {
              children: (0, n.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_1
              })
            }), (0, n.jsx)("li", {
              children: (0, n.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_2.format({
                  maxSize: U.xG
                })
              })
            }), (0, n.jsx)("li", {
              children: (0, n.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_3
              })
            }), (0, n.jsx)("li", {
              children: (0, n.jsx)(_.FormText, {
                type: _.FormTextTypes.DESCRIPTION,
                children: G.Z.Messages.GUILD_SETTINGS_EMOJI_UPLOAD_REQUIREMENTS_4
              })
            })]
          })]
        }), (0, n.jsxs)(_.Button, {
          tabIndex: -1,
          size: _.Button.Sizes.MEDIUM,
          onClick: () => {
            let s = (0, u.Z)();
            l(s), A.default.track(Z.rMx.EMOJI_UPLOAD_STARTED, {
              guild_id: e.id,
              upload_id: s
            })
          },
          disabled: p || 0 === H || !r,
          submitting: p,
          focusProps: {
            within: !0
          },
          children: [G.Z.Messages.UPLOAD_EMOJI, H > 0 ? (0, n.jsx)(R.Z, {
            disabled: p || 0 === H || !r,
            tabIndex: 0,
            onChange: w,
            setLoading: M,
            multiple: !0
          }) : null]
        })]
      }), (0, n.jsx)(k, {
        isLoading: null == I,
        staticEmojis: b,
        animatedEmojis: y,
        guild: e,
        theme: a
      })]
    })]
  })
}