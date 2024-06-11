"use strict";
s.r(t), s.d(t, {
  GuildSettingsHomeSettingsNotice: function() {
    return ec
  },
  default: function() {
    return ed
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("399606"),
  o = s("780384"),
  d = s("481060"),
  u = s("852860"),
  c = s("367907"),
  E = s("471445"),
  _ = s("603211"),
  I = s("710344"),
  T = s("807582"),
  S = s("26323"),
  f = s("307707"),
  m = s("734893"),
  N = s("305762"),
  g = s("150512"),
  h = s("516129"),
  C = s("813197"),
  R = s("210887"),
  x = s("314897"),
  L = s("592125"),
  O = s("984933"),
  p = s("430824"),
  A = s("93879"),
  M = s("263704"),
  D = s("465670"),
  v = s("548343"),
  j = s("586791"),
  G = s("709586"),
  U = s("151785"),
  P = s("931468"),
  b = s("768581"),
  y = s("700785"),
  B = s("434404"),
  F = s("999382"),
  H = s("8426"),
  k = s("969632"),
  w = s("981631"),
  V = s("30513"),
  Y = s("486324"),
  W = s("200299"),
  z = s("689938"),
  K = s("94078"),
  Z = s("91716"),
  X = s("470264"),
  Q = s("710043"),
  J = s("847950");

function q(e) {
  let {
    guildId: t,
    welcomeMessage: n
  } = e, o = l.useCallback(() => {
    if (null != t) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("36371")]).then(s.bind(s, "893626"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        welcomeMessage: n,
        onSave: e => (0, H.updateWelcomeMessage)(e)
      })
    })
  }, [t, n]), u = (0, r.useStateFromStores)([x.default], () => x.default.getId());
  return (0, m.isWelcomeMessageEmpty)(n) ? (0, a.jsx)(d.Button, {
    size: d.Button.Sizes.SMALL,
    onClick: o,
    children: (0, a.jsx)(d.Text, {
      variant: "text-sm/medium",
      children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_SETUP_WELCOME
    })
  }) : (0, a.jsxs)(d.Clickable, {
    className: K.editWelcomeSection,
    onClick: o,
    children: [(0, a.jsx)(g.default, {
      guildId: t,
      welcomeMessage: {
        authorIds: n.authorIds.length > 0 ? n.authorIds : [u],
        message: n.message
      }
    }), (0, a.jsx)(d.Tooltip, {
      text: z.default.Messages.EDIT,
      children: e => (0, a.jsxs)("div", {
        ...e,
        className: i()(K.actionItemEditButton, K.editWelcomeButton),
        children: [(0, a.jsx)(j.default, {
          className: K.__invalid_editIcon
        }), (0, a.jsx)(d.HiddenVisually, {
          children: z.default.Messages.EDIT
        })]
      })
    })]
  })
}

function $(e) {
  var t, n, o, u, c;
  let {
    guildId: I,
    action: T,
    actionIndex: S,
    onChange: g,
    onDelete: h,
    onDragStart: C,
    onDragComplete: R,
    onDragReset: x
  } = e, O = (0, r.useStateFromStores)([L.default], () => L.default.getChannel(T.channelId)), M = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(I)), {
    customEmoji: D,
    unicodeEmoji: G
  } = (0, f.default)(null === (t = T.emoji) || void 0 === t ? void 0 : t.id, null === (n = T.emoji) || void 0 === n ? void 0 : n.name), U = null == T.emoji || null != D || null != G, P = b.default.getNewMemberActionIconURL({
    channelId: T.channelId,
    icon: T.icon
  }), y = null;
  null != O && (0, m.isChannelValidForNewMemberAction)(O) ? !U && (y = z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL_EMOJI) : y = z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL;
  let {
    drag: B,
    dragSourcePosition: F,
    drop: k,
    setIsDraggable: w
  } = (0, _.default)({
    type: "NEW_MEMBER_ACTION",
    index: S,
    optionId: T.channelId,
    onDragStart: C,
    onDragComplete: R,
    onDragReset: x
  }), V = l.useCallback((e, t) => {
    (0, H.updateNewMemberActionIconData)(e.channelId, t)
  }, []), Y = l.useCallback(() => {
    if (null != I) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("14653")]).then(s.bind(s, "380716"));
      return t => (0, a.jsx)(e, {
        ...t,
        guildId: I,
        action: T,
        onSave: (e, t) => g(S, e, t),
        onDelete: () => h(S),
        onIconUpload: V
      })
    })
  }, [I, T, S, g, h, V]);
  if (null == O || null == M) return null;
  let W = null !== (c = (0, E.getChannelIconComponent)(O)) && void 0 !== c ? c : A.default;
  return (0, a.jsxs)("div", {
    className: i()(K.actionItemContainer),
    children: [(0, a.jsxs)("div", {
      className: i()(K.actionItem, {
        [K.dropIndicatorBefore]: null != F && S < F,
        [K.dropIndicatorAfter]: null != F && S > F,
        [K.actionItemError]: null != y
      }),
      ref: e => B(k(e)),
      children: [(0, a.jsx)("div", {
        className: K.dragContainer,
        onMouseEnter: () => w(!0),
        onMouseLeave: () => w(!1),
        children: (0, a.jsx)(v.default, {
          className: K.dragIcon
        })
      }), null != P ? (0, a.jsx)("div", {
        className: K.iconWrapper,
        children: (0, a.jsx)("img", {
          src: P,
          className: K.icon,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": !0
        })
      }) : (0, a.jsx)("div", {
        className: K.actionItemEmojiWrapper,
        children: (0, a.jsx)(N.default, {
          emojiId: null === (o = T.emoji) || void 0 === o ? void 0 : o.id,
          emojiName: null === (u = T.emoji) || void 0 === u ? void 0 : u.name,
          size: N.CTAEmojiSize.MEDIUM,
          defaultComponent: (0, a.jsx)(W, {})
        })
      }), (0, a.jsxs)("div", {
        className: K.actionItemText,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: T.title
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: z.default.Messages.NEW_MEMBER_ACTION_CHANNEL.format({
            channelName: O.name
          })
        })]
      }), (0, a.jsx)(d.Tooltip, {
        text: z.default.Messages.EDIT,
        children: e => (0, a.jsxs)(d.Button, {
          ...e,
          className: K.actionItemEditButton,
          innerClassName: K.actionItemEditButtonInner,
          size: d.Button.Sizes.MIN,
          onClick: Y,
          children: [(0, a.jsx)(j.default, {
            className: K.__invalid_editIcon
          }), (0, a.jsx)(d.HiddenVisually, {
            children: z.default.Messages.EDIT
          })]
        })
      })]
    }), null != y && (0, a.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: y
    })]
  })
}

function ee(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStoresArray)([k.default], () => {
    var e;
    return null !== (e = k.default.getSettings().newMemberActions) && void 0 !== e ? e : []
  }), n = l.useCallback((e, s) => {
    if (null == t) return;
    (0, H.addNewMemberAction)(e);
    let a = k.default.getSettings();
    if (null == a) return;
    let {
      channelId: l
    } = e;
    (0, H.saveHomeSettings)(t, a, !0).then(() => {
      null != s && (0, H.updateNewMemberActionIcon)(t, l, s, !0)
    })
  }, [t]), i = l.useCallback((e, a, l) => {
    var n;
    if (null == t) return;
    let i = null === (n = s[e]) || void 0 === n ? void 0 : n.channelId;
    if (null == i) return;
    let r = k.default.getSettings();
    if (null == r) return;
    let o = k.default.hasActionIconChanged(i);
    (0, H.updateNewMemberAction)(i, a), (0, H.saveHomeSettings)(t, r, !0).then(() => {
      (0, H.updateNewMemberActionIcon)(t, i, l, o)
    })
  }, [s, t]), o = l.useCallback(e => {
    var t;
    let a = null === (t = s[e]) || void 0 === t ? void 0 : t.channelId;
    null != a && (0, H.deleteNewMemberAction)(a)
  }, [s]), d = s.map(e => ({
    ...e,
    id: e.channelId
  })), {
    handleDragStart: u,
    handleDragReset: c,
    handleDragComplete: E
  } = (0, I.default)(d, H.reorderNewMemberActions);
  return null == t ? null : (0, a.jsxs)("div", {
    className: K.section,
    children: [s.map((e, s) => (0, a.jsx)($, {
      guildId: t,
      action: e,
      actionIndex: s,
      onChange: i,
      onDelete: o,
      onDragStart: u,
      onDragReset: c,
      onDragComplete: E
    }, e.channelId)), (0, a.jsx)(et, {}), s.length < m.NEW_MEMBER_ACTION_MAX && (0, a.jsx)(es, {
      guildId: t,
      onAddAction: n
    })]
  })
}

function et() {
  return (0, a.jsx)("div", {
    className: K.actionItemContainer,
    children: (0, a.jsxs)("div", {
      className: K.actionItem,
      children: [(0, a.jsx)("div", {
        className: K.actionItemEmojiWrapper,
        children: (0, a.jsx)(P.default, {
          height: 20,
          width: 22
        })
      }), (0, a.jsx)("div", {
        className: K.actionItemText,
        children: (0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })
  })
}

function es(e) {
  let {
    guildId: t,
    onAddAction: n
  } = e, i = l.useCallback(() => {
    if (null != t) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("14653")]).then(s.bind(s, "380716"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        onSave: n
      })
    })
  }, [t, n]);
  return (0, a.jsxs)(d.Clickable, {
    className: K.addActionItem,
    onClick: i,
    children: [(0, a.jsx)(U.default, {}), (0, a.jsx)(d.Text, {
      variant: "text-md/normal",
      color: "none",
      children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_TASK
    })]
  })
}

function ea() {
  return (0, a.jsxs)("div", {
    className: K.badExample,
    children: [(0, a.jsx)(d.Text, {
      variant: "eyebrow",
      color: "header-secondary",
      children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_REASON
    }), (0, a.jsxs)("div", {
      className: K.example,
      children: [(0, a.jsx)("div", {
        className: K.badExampleIcon,
        children: (0, a.jsx)(D.default, {})
      }), (0, a.jsxs)("div", {
        className: K.__invalid_exampleText,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_TITLE
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_CHANNEL
        })]
      })]
    })]
  })
}

function el(e) {
  var t;
  let {
    guildId: n
  } = e, i = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(n)), o = null !== (t = null == i ? void 0 : i.hasFeature(w.GuildFeatures.BANNER)) && void 0 !== t && t, u = l.useCallback((e, t) => {
    if (null != n) {
      if (null == e || void 0 === t) {
        B.default.updateGuild({
          homeHeader: null
        });
        return
      }(0, d.openModalLazy)(async () => {
        let {
          default: l
        } = await Promise.all([s.e("99387"), s.e("75409")]).then(s.bind(s, "850085"));
        return s => (0, a.jsx)(l, {
          imgURI: e,
          file: t,
          onCrop: e => B.default.saveGuild(n, {
            homeHeader: e
          }),
          uploadType: Y.UploadTypes.HOME_HEADER,
          ...s
        })
      })
    }
  }, [n]), E = l.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != i && ((0, c.trackWithMetadata)(w.AnalyticEvents.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: w.AnalyticsSections.GUILD_SETTINGS_ONBOARDING,
        object: w.AnalyticsObjects.LEARN_MORE
      },
      guild_id: null == i ? void 0 : i.id,
      location_stack: []
    }), (0, S.default)({
      analyticsLocations: [],
      analyticsSourceLocation: {
        section: w.AnalyticsSections.GUILD_SETTINGS_ONBOARDING,
        object: w.AnalyticsObjects.ONBOARDING_EDIT,
        page: w.AnalyticsPages.GUILD_SETTINGS
      },
      guild: i,
      perks: (0, V.guildBannerUpsellPerks)()
    }))
  }, [i]);
  if (null == i) return null;
  let _ = (0, a.jsx)(h.default, {
    image: i.homeHeader,
    makeURL: e => null != e ? b.default.getGuildHomeHeaderURL({
      id: i.id,
      homeHeader: e
    }) : null,
    disabled: !o,
    onChange: u,
    hint: z.default.Messages.CHANGE_HOME_HEADER,
    enabled: o,
    maxFileSizeBytes: W.MAX_IMAGE_UPLOAD_FILESIZE_BYTES
  });
  return o ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: K.sectionHeader,
      children: [(0, a.jsx)(d.Heading, {
        className: K.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, a.jsx)(T.default, {
        className: K.boostIndicator,
        guild: i,
        guildFeature: w.GuildFeatures.BANNER,
        onClick: E
      })]
    }), (0, a.jsxs)("div", {
      className: K.section,
      children: [(0, a.jsxs)("div", {
        className: K.homeBannerExplainer,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, a.jsxs)(d.Button, {
          color: d.ButtonColors.BRAND,
          className: K.uploadButton,
          children: [z.default.Messages.UPLOAD_BACKGROUND, (0, a.jsx)(C.default, {
            onChange: u,
            maxFileSizeBytes: W.MAX_IMAGE_UPLOAD_FILESIZE_BYTES
          })]
        })]
      }), (0, a.jsx)("div", {
        className: K.__invalid_homeBannerImage,
        children: _
      })]
    })]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: K.sectionHeader,
      children: [(0, a.jsx)(d.Heading, {
        className: K.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, a.jsx)(T.default, {
        className: K.boostIndicator,
        guild: i,
        guildFeature: w.GuildFeatures.BANNER,
        onClick: E
      })]
    }), (0, a.jsxs)("div", {
      className: K.section,
      children: [(0, a.jsxs)("div", {
        className: K.homeBannerExplainer,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, a.jsxs)(d.ShinyButton, {
          className: K.upsellButton,
          innerClassName: K.upsellButtonInner,
          color: d.Button.Colors.GREEN,
          onClick: E,
          children: [(0, a.jsx)(G.default, {
            height: 16,
            width: 16,
            className: K.__invalid_premiumUpsellBadge
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: z.default.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
          })]
        })]
      }), (0, a.jsx)("div", {
        className: K.__invalid_homeBannerImage,
        children: (0, a.jsx)(d.Clickable, {
          "aria-hidden": !0,
          tabIndex: -1,
          className: K.__invalid_upsell,
          onClick: E,
          children: _
        })
      })]
    })]
  })
}

function en(e) {
  let {
    guildId: t,
    resourceChannel: n,
    index: o,
    onDragComplete: u,
    onDragStart: c,
    onDragReset: E
  } = e, I = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(t)), {
    title: T,
    channelId: S,
    description: f
  } = n, N = L.default.getChannel(S), g = null;
  (null == N || !(0, m.isChannelValidForResourceChannel)(N)) && (g = z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_RESOURCE_CHANNEL);
  let h = null == f || 0 === f.length,
    C = b.default.getResourceChannelIconURL({
      channelId: n.channelId,
      icon: n.icon
    }),
    {
      drag: R,
      dragSourcePosition: x,
      drop: O,
      setIsDraggable: A
    } = (0, _.default)({
      type: "RESOURCE_CHANNEL",
      optionId: n.channelId,
      index: o,
      onDragStart: c,
      onDragComplete: u,
      onDragReset: E
    }),
    M = l.useCallback(e => {
      (0, H.updateResourceChannel)(n.channelId, e)
    }, [n.channelId]),
    D = l.useCallback((e, s) => {
      if (null == t) return;
      let a = k.default.getSettings();
      null != a && ((0, H.updateResourceChannel)(n.channelId, e), (0, H.saveHomeSettings)(t, a).then(() => {
        (0, H.updateResourceChannelIcon)(t, e.channelId, s)
      }))
    }, [t, n]),
    G = l.useCallback(() => {
      if (null != t) return (0, d.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("84725")]).then(s.bind(s, "462499"));
        return s => (0, a.jsx)(e, {
          ...s,
          guildId: t,
          resourceChannel: n,
          onSave: M,
          onDelete: () => (0, H.deleteResourceChannel)(n.channelId),
          onIconUpload: D
        })
      })
    }, [t, n, M, D]);
  return null == I || null == N ? null : (0, a.jsxs)("div", {
    className: i()(K.resourceChannelContainer),
    children: [(0, a.jsxs)("div", {
      className: i()(K.resourceChannel, {
        [K.dropIndicatorBefore]: null != x && o < x,
        [K.dropIndicatorAfter]: null != x && o > x,
        [K.resourceChannelError]: null != g
      }),
      ref: e => R(O(e)),
      children: [(0, a.jsx)("div", {
        className: K.dragContainer,
        onMouseEnter: () => A(!0),
        onMouseLeave: () => A(!1),
        children: (0, a.jsx)(v.default, {
          className: K.dragIcon
        })
      }), null != C && (0, a.jsx)("div", {
        className: K.iconWrapper,
        children: (0, a.jsx)("img", {
          src: C,
          className: K.icon,
          width: 32,
          height: 32,
          alt: "",
          "aria-hidden": !0
        })
      }), (0, a.jsxs)("div", {
        className: K.resourceChannelContent,
        children: [(0, a.jsx)(d.Text, {
          className: K.resourceChannelTitle,
          variant: "text-md/semibold",
          color: "header-primary",
          children: T
        }), !h && (0, a.jsx)(d.Text, {
          className: K.resourceChannelDescription,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: f
        })]
      }), (0, a.jsx)(d.Tooltip, {
        text: z.default.Messages.EDIT,
        children: e => (0, a.jsxs)(d.Button, {
          ...e,
          className: K.resourceChannelEditButton,
          innerClassName: K.resourceChannelEditButtonInner,
          size: d.Button.Sizes.MIN,
          onClick: G,
          children: [(0, a.jsx)(j.default, {}), (0, a.jsx)(d.HiddenVisually, {
            children: z.default.Messages.EDIT
          })]
        })
      })]
    }), null != g && (0, a.jsx)(d.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: g
    })]
  })
}

function ei(e) {
  var t;
  let {
    channel: s,
    isLast: n
  } = e, i = l.useCallback(() => {
    (0, H.addResourceChannel)({
      channelId: s.id,
      title: s.name,
      description: "",
      emoji: null,
      icon: null
    })
  }, [s]), r = null !== (t = (0, E.getChannelIconComponent)(s)) && void 0 !== t ? t : A.default;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: K.suggestedChannel,
      children: [(0, a.jsx)(r, {
        className: K.suggestedChannelIcon
      }), (0, a.jsx)(d.Text, {
        className: K.suggestedChannelText,
        variant: "text-sm/normal",
        children: s.name
      }), (0, a.jsx)(d.Button, {
        className: K.suggestedChannelButton,
        size: d.Button.Sizes.MIN,
        onClick: i,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "always-white",
          children: z.default.Messages.ADD
        })
      })]
    }), n && (0, a.jsx)("div", {
      className: K.suggestedSeparator
    })]
  })
}

function er(e) {
  let {
    guildId: t
  } = e, s = (0, r.useStateFromStores)([p.default], () => p.default.getGuild(t)), n = (0, r.useStateFromStoresArray)([k.default], () => {
    var e, t;
    return null !== (t = null === (e = k.default.getSettings().resourceChannels) || void 0 === e ? void 0 : e.map(e => e.channelId)) && void 0 !== t ? t : []
  }), i = (0, r.useStateFromStoresArray)([k.default], () => k.default.getDismissedSuggestedChannelIds(t)), o = (0, r.useStateFromStores)([O.default], () => null == t ? [] : O.default.getSelectableChannels(t)).filter(e => !i.includes(e.channel.id) && !n.includes(e.channel.id) && e.channel.type === w.ChannelTypes.GUILD_TEXT && y.canEveryoneRole(w.Permissions.VIEW_CHANNEL, e.channel) && !y.canEveryoneRole(w.Permissions.SEND_MESSAGES, e.channel) && e.channel.id !== (null == s ? void 0 : s.rulesChannelId)).slice(0, 5), u = l.useCallback(() => {
    let e = o.map(e => e.channel.id);
    (0, H.dismissSuggestedChannels)(t, e)
  }, [t, o]);
  return o.length <= 0 || n.length >= m.RESOURCE_CHANNEL_MAX ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: K.suggestedChannelsSection,
      children: [(0, a.jsx)(d.Text, {
        variant: "text-md/semibold",
        children: z.default.Messages.RECOMMENDED
      }), (0, a.jsxs)("div", {
        className: K.suggestedChannelsHeader,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_EXPLAINER
        }), (0, a.jsxs)(d.Clickable, {
          className: K.suggestedChannelsDismiss,
          onClick: u,
          children: [(0, a.jsx)(M.default, {
            className: K.suggestedChannelsDismissCheck
          }), (0, a.jsx)(d.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_DISMISS
          })]
        })]
      }), (0, a.jsx)("div", {
        className: K.suggestedChannels,
        children: o.map((e, t) => (0, a.jsx)(ei, {
          channel: e.channel,
          isLast: t < o.length - 1
        }, e.channel.id))
      })]
    }), (0, a.jsx)("div", {
      className: K.sectionSeparator
    })]
  })
}

function eo(e) {
  let {
    guildId: t
  } = e, n = (0, r.useStateFromStoresArray)([k.default], () => {
    var e;
    return null !== (e = k.default.getSettings().resourceChannels) && void 0 !== e ? e : []
  }), i = n.map(e => ({
    ...e,
    id: e.channelId
  })), {
    handleDragStart: o,
    handleDragReset: u,
    handleDragComplete: c
  } = (0, I.default)(i, H.reorderResourceChannels), E = l.useCallback((e, s) => {
    if (null == t) return;
    let a = k.default.getSettings();
    null != a && ((0, H.addResourceChannel)(e), (0, H.saveHomeSettings)(t, a).then(() => {
      (0, H.updateResourceChannelIcon)(t, e.channelId, s)
    }))
  }, [t]), _ = l.useCallback(() => {
    if (null != t) return (0, d.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("84725")]).then(s.bind(s, "462499"));
      return s => (0, a.jsx)(e, {
        ...s,
        guildId: t,
        onSave: H.addResourceChannel,
        onIconUpload: E
      })
    })
  }, [t, E]);
  return (0, a.jsxs)("div", {
    className: K.editResources,
    children: [n.map((e, s) => (0, a.jsx)(en, {
      guildId: t,
      resourceChannel: e,
      index: s,
      onDragStart: o,
      onDragReset: u,
      onDragComplete: c
    }, e.channelId)), n.length < m.RESOURCE_CHANNEL_MAX && (0, a.jsxs)(d.Clickable, {
      className: K.addActionItem,
      onClick: _,
      children: [(0, a.jsx)(U.default, {}), (0, a.jsx)(d.Text, {
        variant: "text-md/normal",
        color: "none",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_RESOURCE
      })]
    })]
  })
}

function ed(e) {
  let {
    saveOnClose: t
  } = e, s = (0, r.useStateFromStores)([F.default], () => F.default.getGuildId());
  return null == s ? null : (0, a.jsx)(eu, {
    guildId: s,
    saveOnClose: t
  })
}

function eu(e) {
  let {
    saveOnClose: t,
    guildId: s
  } = e, n = (0, r.useStateFromStoresObject)([k.default], () => {
    var e;
    return null !== (e = k.default.getSettings().welcomeMessage) && void 0 !== e ? e : {
      authorIds: [],
      message: ""
    }
  }), [i, u] = l.useState("new"), c = [{
    value: "new",
    name: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_NEW_MEMBER_EXAMPLE
  }, {
    value: "existing",
    name: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_EXISTING_MEMBER_EXAMPLE
  }], E = (0, r.useStateFromStores)([R.default], () => R.default.theme);
  return l.useEffect(() => () => {
    if (null == s) return;
    let e = k.default.getSettings();
    (0, H.saveHomeSettings)(s, e)
  }, [t, s]), (0, a.jsxs)("div", {
    className: K.page,
    children: [(0, a.jsxs)("div", {
      className: K.leftColumn,
      children: [(0, a.jsx)(d.Heading, {
        className: K.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_TITLE
      }), (0, a.jsx)("div", {
        className: K.descriptionSection,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION
        })
      }), (0, a.jsx)("div", {
        className: K.section,
        children: (0, a.jsx)(q, {
          guildId: s,
          welcomeMessage: n
        })
      }), (0, a.jsx)("div", {
        className: K.sectionSeparator
      }), (0, a.jsx)(d.Heading, {
        className: K.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_TITLE
      }), (0, a.jsx)("div", {
        className: K.descriptionSection,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_DESCRIPTION.format()
        })
      }), (0, a.jsx)("div", {
        className: K.section,
        children: (0, a.jsx)(ea, {})
      }), (0, a.jsx)(ee, {
        guildId: s
      }), (0, a.jsx)("div", {
        className: K.sectionSeparator
      }), (0, a.jsx)(d.Heading, {
        className: K.header,
        variant: "heading-lg/extrabold",
        children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_TITLE
      }), (0, a.jsxs)("div", {
        className: K.descriptionSection,
        children: [(0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_DESCRIPTION
        }), (0, a.jsxs)("ul", {
          className: K.bulletList,
          children: [(0, a.jsx)("li", {
            children: (0, a.jsx)(d.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_1
            })
          }), (0, a.jsx)("li", {
            children: (0, a.jsx)(d.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_2
            })
          }), (0, a.jsx)("li", {
            children: (0, a.jsx)(d.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_3
            })
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: K.section,
        children: [(0, a.jsx)(er, {
          guildId: s
        }), (0, a.jsx)(eo, {
          guildId: s
        })]
      }), (0, a.jsx)("div", {
        className: K.sectionSeparator
      }), (0, a.jsx)(el, {
        guildId: s
      })]
    }), (0, a.jsxs)("div", {
      className: K.rightColumn,
      children: [(0, a.jsx)("div", {
        className: K.centeredSection,
        children: (0, a.jsx)(d.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: z.default.Messages.EXAMPLE
        })
      }), (0, a.jsx)("img", {
        className: K.previewImage,
        src: (0, o.isThemeLight)(E) ? "existing" === i ? X : J : "existing" === i ? Z : Q,
        alt: z.default.Messages.GUILD_SETTINGS_ONBOARDING_HOME_GUIDE_EXAMPLE_ALT
      }), (0, a.jsx)(d.SegmentedControl, {
        options: c,
        value: i,
        onChange: e => {
          let {
            value: t
          } = e;
          return u(String(t))
        },
        look: "pill"
      })]
    })]
  })
}

function ec() {
  let e = (0, r.useStateFromStores)([F.default], () => F.default.getGuild()),
    t = (0, r.useStateFromStores)([k.default], () => k.default.getSettings()),
    s = (0, r.useStateFromStores)([k.default], () => k.default.getSubmitting());
  return null == e ? null : (0, a.jsx)(u.default, {
    onSave: () => {
      try {
        (0, H.saveHomeSettings)(e.id, t)
      } catch {}
    },
    onReset: H.resetHomeSettings,
    submitting: s,
    onSaveText: z.default.Messages.SAVE
  })
}