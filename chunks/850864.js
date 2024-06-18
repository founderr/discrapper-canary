"use strict";
t.d(s, {
  T: function() {
    return el
  },
  Z: function() {
    return en
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(399606),
  o = t(780384),
  c = t(481060),
  d = t(852860),
  u = t(367907),
  E = t(471445),
  _ = t(603211),
  I = t(710344),
  T = t(807582),
  N = t(26323),
  m = t(307707),
  S = t(734893),
  h = t(305762),
  g = t(150512),
  C = t(516129),
  x = t(813197),
  R = t(210887),
  L = t(314897),
  O = t(592125),
  A = t(984933),
  p = t(430824),
  M = t(709586),
  f = t(768581),
  D = t(700785),
  v = t(434404),
  j = t(999382),
  Z = t(8426),
  U = t(969632),
  G = t(535907),
  P = t(981631),
  b = t(30513),
  B = t(486324),
  y = t(200299),
  F = t(689938),
  k = t(116697),
  H = t(91716),
  w = t(470264),
  V = t(710043),
  Y = t(847950);

function W(e) {
  let {
    guildId: s,
    welcomeMessage: l
  } = e, o = i.useCallback(() => {
    if (null != s) return (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("36371")]).then(t.bind(t, 893626));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s,
        welcomeMessage: l,
        onSave: e => (0, Z._N)(e)
      })
    })
  }, [s, l]), d = (0, r.e7)([L.default], () => L.default.getId());
  return (0, S.pw)(l) ? (0, n.jsx)(c.Button, {
    size: c.Button.Sizes.SMALL,
    onClick: o,
    children: (0, n.jsx)(c.Text, {
      variant: "text-sm/medium",
      children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_SETUP_WELCOME
    })
  }) : (0, n.jsxs)(c.Clickable, {
    className: k.editWelcomeSection,
    onClick: o,
    children: [(0, n.jsx)(g.Z, {
      guildId: s,
      welcomeMessage: {
        authorIds: l.authorIds.length > 0 ? l.authorIds : [d],
        message: l.message
      }
    }), (0, n.jsx)(c.Tooltip, {
      text: F.Z.Messages.EDIT,
      children: e => (0, n.jsxs)("div", {
        ...e,
        className: a()(k.actionItemEditButton, k.editWelcomeButton),
        children: [(0, n.jsx)(c.PencilIcon, {
          size: "md",
          color: "currentColor"
        }), (0, n.jsx)(c.HiddenVisually, {
          children: F.Z.Messages.EDIT
        })]
      })
    })]
  })
}

function z(e) {
  var s, l, o, d, u;
  let {
    guildId: I,
    action: T,
    actionIndex: N,
    onChange: g,
    onDelete: C,
    onDragStart: x,
    onDragComplete: R,
    onDragReset: L
  } = e, A = (0, r.e7)([O.Z], () => O.Z.getChannel(T.channelId)), M = (0, r.e7)([p.Z], () => p.Z.getGuild(I)), {
    customEmoji: D,
    unicodeEmoji: v
  } = (0, m.Z)(null === (s = T.emoji) || void 0 === s ? void 0 : s.id, null === (l = T.emoji) || void 0 === l ? void 0 : l.name), j = null == T.emoji || null != D || null != v, Z = f.ZP.getNewMemberActionIconURL({
    channelId: T.channelId,
    icon: T.icon
  }), U = null;
  null != A && (0, S.kb)(A) ? !j && (U = F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL_EMOJI) : U = F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_ACTION_CHANNEL;
  let {
    drag: G,
    dragSourcePosition: P,
    drop: b,
    setIsDraggable: B
  } = (0, _.Z)({
    type: "NEW_MEMBER_ACTION",
    index: N,
    optionId: T.channelId,
    onDragStart: x,
    onDragComplete: R,
    onDragReset: L
  }), y = i.useCallback(() => {
    if (null != I) return (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("14653")]).then(t.bind(t, 380716));
      return s => (0, n.jsx)(e, {
        ...s,
        guildId: I,
        action: T,
        onSave: (e, s, t) => g(N, e, s, t),
        onDelete: () => C(N)
      })
    })
  }, [I, T, N, g, C]);
  if (null == A || null == M) return null;
  let H = null !== (u = (0, E.KS)(A)) && void 0 !== u ? u : c.TextIcon;
  return (0, n.jsxs)("div", {
    className: a()(k.actionItemContainer),
    children: [(0, n.jsxs)("div", {
      className: a()(k.actionItem, {
        [k.dropIndicatorBefore]: null != P && N < P,
        [k.dropIndicatorAfter]: null != P && N > P,
        [k.actionItemError]: null != U
      }),
      ref: e => G(b(e)),
      children: [(0, n.jsx)("div", {
        className: k.dragContainer,
        onMouseEnter: () => B(!0),
        onMouseLeave: () => B(!1),
        children: (0, n.jsx)(c.DragIcon, {
          size: "xs",
          color: "currentColor",
          className: k.dragIcon
        })
      }), null != Z ? (0, n.jsx)("div", {
        className: k.iconWrapper,
        children: (0, n.jsx)("img", {
          src: Z,
          className: k.icon,
          width: 48,
          height: 48,
          alt: "",
          "aria-hidden": !0
        })
      }) : (0, n.jsx)("div", {
        className: k.actionItemEmojiWrapper,
        children: (0, n.jsx)(h.Z, {
          emojiId: null === (o = T.emoji) || void 0 === o ? void 0 : o.id,
          emojiName: null === (d = T.emoji) || void 0 === d ? void 0 : d.name,
          size: h.R.MEDIUM,
          defaultComponent: (0, n.jsx)(H, {})
        })
      }), (0, n.jsxs)("div", {
        className: k.actionItemText,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: T.title
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "header-secondary",
          children: F.Z.Messages.NEW_MEMBER_ACTION_CHANNEL.format({
            channelName: A.name
          })
        })]
      }), (0, n.jsx)(c.Tooltip, {
        text: F.Z.Messages.EDIT,
        children: e => (0, n.jsxs)(c.Button, {
          ...e,
          className: k.actionItemEditButton,
          innerClassName: k.actionItemEditButtonInner,
          size: c.Button.Sizes.MIN,
          onClick: y,
          children: [(0, n.jsx)(c.PencilIcon, {
            size: "md",
            color: "currentColor"
          }), (0, n.jsx)(c.HiddenVisually, {
            children: F.Z.Messages.EDIT
          })]
        })
      })]
    }), null != U && (0, n.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: U
    })]
  })
}

function K(e) {
  let {
    guildId: s
  } = e, t = (0, r.Wu)([U.Z], () => {
    var e;
    return null !== (e = U.Z.getSettings().newMemberActions) && void 0 !== e ? e : []
  }), l = i.useCallback((e, t) => {
    if (null == s) return;
    (0, Z.vR)(e);
    let n = U.Z.getSettings();
    if (null == n) return;
    let {
      channelId: i
    } = e;
    (0, Z.oo)(s, n, !0).then(() => {
      null != t && (0, Z.ad)(s, i, t, !0)
    })
  }, [s]), a = i.useCallback((e, n, i, l) => {
    var a;
    if (null == s) return;
    let r = null === (a = t[e]) || void 0 === a ? void 0 : a.channelId;
    if (null == r) return;
    let o = U.Z.getSettings();
    null != o && ((0, Z.el)(r, n), (0, Z.oo)(s, o, !0).then(() => {
      (0, Z.ad)(s, r, i, l)
    }))
  }, [t, s]), o = i.useCallback(e => {
    var s;
    let n = null === (s = t[e]) || void 0 === s ? void 0 : s.channelId;
    null != n && (0, Z.Hr)(n)
  }, [t]), c = t.map(e => ({
    ...e,
    id: e.channelId
  })), d = i.useCallback(e => {
    if (null == s) return;
    (0, Z.hS)(e);
    let t = U.Z.getSettings();
    null != t && (0, Z.oo)(s, t, !0)
  }, [s]), {
    handleDragStart: u,
    handleDragReset: E,
    handleDragComplete: _
  } = (0, I.Z)(c, d);
  return null == s ? null : (0, n.jsxs)("div", {
    className: k.section,
    children: [t.map((e, t) => (0, n.jsx)(z, {
      guildId: s,
      action: e,
      actionIndex: t,
      onChange: a,
      onDelete: o,
      onDragStart: u,
      onDragReset: E,
      onDragComplete: _
    }, e.channelId)), (0, n.jsx)(q, {}), t.length < S.O9 && (0, n.jsx)(X, {
      guildId: s,
      onAddAction: l
    })]
  })
}

function q() {
  return (0, n.jsx)("div", {
    className: k.actionItemContainer,
    children: (0, n.jsxs)("div", {
      className: k.actionItem,
      children: [(0, n.jsx)("div", {
        className: k.actionItemEmojiWrapper,
        children: (0, n.jsx)(c.BookCheckIcon, {
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 22
        })
      }), (0, n.jsx)("div", {
        className: k.actionItemText,
        children: (0, n.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_RULES_ACTION
        })
      })]
    })
  })
}

function X(e) {
  let {
    guildId: s,
    onAddAction: l
  } = e, a = i.useCallback(() => {
    if (null != s) return (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("14653")]).then(t.bind(t, 380716));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s,
        onSave: l
      })
    })
  }, [s, l]);
  return (0, n.jsxs)(c.Clickable, {
    className: k.addActionItem,
    onClick: a,
    children: [(0, n.jsx)(c.CirclePlusIcon, {
      size: "xs",
      color: "currentColor"
    }), (0, n.jsx)(c.Text, {
      variant: "text-md/normal",
      color: "none",
      children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_TASK
    })]
  })
}

function Q() {
  return (0, n.jsxs)("div", {
    className: k.badExample,
    children: [(0, n.jsx)(c.Text, {
      variant: "eyebrow",
      color: "header-secondary",
      children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_REASON
    }), (0, n.jsxs)("div", {
      className: k.example,
      children: [(0, n.jsx)("div", {
        className: k.badExampleIcon,
        children: (0, n.jsx)(c.CloseSmallIcon, {
          size: "md",
          color: "currentColor"
        })
      }), (0, n.jsxs)("div", {
        children: [(0, n.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_TITLE
        }), (0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_BAD_EXAMPLE_CHANNEL
        })]
      })]
    })]
  })
}

function J(e) {
  var s;
  let {
    guildId: l
  } = e, a = (0, r.e7)([p.Z], () => p.Z.getGuild(l)), o = null !== (s = null == a ? void 0 : a.hasFeature(P.oNc.BANNER)) && void 0 !== s && s, d = i.useCallback((e, s) => {
    if (null != l) {
      if (null == e || void 0 === s) {
        v.Z.saveGuild(l, {
          homeHeader: null
        });
        return
      }(0, c.openModalLazy)(async () => {
        let {
          default: i
        } = await Promise.all([t.e("99387"), t.e("75409")]).then(t.bind(t, 850085));
        return t => (0, n.jsx)(i, {
          imgURI: e,
          file: s,
          onCrop: e => v.Z.saveGuild(l, {
            homeHeader: e
          }),
          uploadType: B.pC.HOME_HEADER,
          ...t
        })
      })
    }
  }, [l]), E = i.useCallback(e => {
    e.preventDefault(), e.stopPropagation(), null != a && ((0, u.yw)(P.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
      location: {
        section: P.jXE.GUILD_SETTINGS_ONBOARDING,
        object: P.qAy.LEARN_MORE
      },
      guild_id: null == a ? void 0 : a.id,
      location_stack: []
    }), (0, N.Z)({
      analyticsLocations: [],
      analyticsSourceLocation: {
        section: P.jXE.GUILD_SETTINGS_ONBOARDING,
        object: P.qAy.ONBOARDING_EDIT,
        page: P.ZY5.GUILD_SETTINGS
      },
      guild: a,
      perks: (0, b.XO)()
    }))
  }, [a]);
  if (null == a) return null;
  let _ = (0, n.jsx)(C.Z, {
    image: a.homeHeader,
    makeURL: e => null != e ? f.ZP.getGuildHomeHeaderURL({
      id: a.id,
      homeHeader: e
    }) : null,
    disabled: !o,
    onChange: d,
    hint: F.Z.Messages.CHANGE_HOME_HEADER,
    enabled: o,
    maxFileSizeBytes: y.B
  });
  return o ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: k.sectionHeader,
      children: [(0, n.jsx)(c.Heading, {
        className: k.header,
        variant: "heading-lg/extrabold",
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, n.jsx)(T.Z, {
        className: k.boostIndicator,
        guild: a,
        guildFeature: P.oNc.BANNER,
        onClick: E
      })]
    }), (0, n.jsxs)("div", {
      className: k.section,
      children: [(0, n.jsxs)("div", {
        className: k.homeBannerExplainer,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: F.Z.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, n.jsxs)(c.Button, {
          color: c.ButtonColors.BRAND,
          className: k.uploadButton,
          children: [F.Z.Messages.UPLOAD_BACKGROUND, (0, n.jsx)(x.ZP, {
            onChange: d,
            maxFileSizeBytes: y.B
          })]
        })]
      }), (0, n.jsx)("div", {
        children: _
      })]
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: k.sectionHeader,
      children: [(0, n.jsx)(c.Heading, {
        className: k.header,
        variant: "heading-lg/extrabold",
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_BANNER
      }), (0, n.jsx)(T.Z, {
        className: k.boostIndicator,
        guild: a,
        guildFeature: P.oNc.BANNER,
        onClick: E
      })]
    }), (0, n.jsxs)("div", {
      className: k.section,
      children: [(0, n.jsxs)("div", {
        className: k.homeBannerExplainer,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: F.Z.Messages.GUILD_SETTINGS_HOME_HEADER_RECOMMEND
        }), (0, n.jsxs)(c.ShinyButton, {
          className: k.upsellButton,
          innerClassName: k.upsellButtonInner,
          color: c.Button.Colors.GREEN,
          onClick: E,
          children: [(0, n.jsx)(M.Z, {
            height: 16,
            width: 16
          }), (0, n.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-normal",
            children: F.Z.Messages.PREMIUM_GUILD_UNLOCK_WTH_BOOSTING_CTA
          })]
        })]
      }), (0, n.jsx)("div", {
        children: (0, n.jsx)(c.Clickable, {
          "aria-hidden": !0,
          tabIndex: -1,
          onClick: E,
          children: _
        })
      })]
    })]
  })
}

function $(e) {
  let {
    guildId: s,
    resourceChannel: l,
    index: o,
    onDragComplete: d,
    onDragStart: u,
    onDragReset: E
  } = e, I = (0, r.e7)([p.Z], () => p.Z.getGuild(s)), {
    title: T,
    channelId: N,
    description: m
  } = l, h = O.Z.getChannel(N), g = null;
  (null == h || !(0, S.k3)(h)) && (g = F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_INVALID_RESOURCE_CHANNEL);
  let C = null == m || 0 === m.length,
    x = f.ZP.getResourceChannelIconURL({
      channelId: l.channelId,
      icon: l.icon
    }),
    {
      drag: R,
      dragSourcePosition: L,
      drop: A,
      setIsDraggable: M
    } = (0, _.Z)({
      type: "RESOURCE_CHANNEL",
      optionId: l.channelId,
      index: o,
      onDragStart: u,
      onDragComplete: d,
      onDragReset: E
    }),
    D = i.useCallback(e => {
      (0, Z.XG)(l.channelId, e)
    }, [l.channelId]),
    v = i.useCallback((e, t) => {
      if (null == s) return;
      let n = U.Z.getSettings();
      null != n && ((0, Z.XG)(l.channelId, e), (0, Z.oo)(s, n).then(() => {
        (0, Z.mM)(s, e.channelId, t)
      }))
    }, [s, l]),
    j = i.useCallback(() => {
      if (null != s) return (0, c.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([t.e("99387"), t.e("84725")]).then(t.bind(t, 462499));
        return t => (0, n.jsx)(e, {
          ...t,
          guildId: s,
          resourceChannel: l,
          onSave: D,
          onDelete: () => (0, Z.Hz)(l.channelId),
          onIconUpload: v
        })
      })
    }, [s, l, D, v]);
  return null == I || null == h ? null : (0, n.jsxs)("div", {
    className: a()(k.resourceChannelContainer),
    children: [(0, n.jsxs)("div", {
      className: a()(k.resourceChannel, {
        [k.dropIndicatorBefore]: null != L && o < L,
        [k.dropIndicatorAfter]: null != L && o > L,
        [k.resourceChannelError]: null != g
      }),
      ref: e => R(A(e)),
      children: [(0, n.jsx)("div", {
        className: k.dragContainer,
        onMouseEnter: () => M(!0),
        onMouseLeave: () => M(!1),
        children: (0, n.jsx)(c.DragIcon, {
          size: "xs",
          color: "currentColor",
          className: k.dragIcon
        })
      }), null != x && (0, n.jsx)("div", {
        className: k.iconWrapper,
        children: (0, n.jsx)("img", {
          src: x,
          className: k.icon,
          width: 32,
          height: 32,
          alt: "",
          "aria-hidden": !0
        })
      }), (0, n.jsxs)("div", {
        className: k.resourceChannelContent,
        children: [(0, n.jsx)(c.Text, {
          className: k.resourceChannelTitle,
          variant: "text-md/semibold",
          color: "header-primary",
          children: T
        }), !C && (0, n.jsx)(c.Text, {
          className: k.resourceChannelDescription,
          variant: "text-xs/medium",
          color: "text-muted",
          lineClamp: 1,
          children: m
        })]
      }), (0, n.jsx)(c.Tooltip, {
        text: F.Z.Messages.EDIT,
        children: e => (0, n.jsxs)(c.Button, {
          ...e,
          className: k.resourceChannelEditButton,
          innerClassName: k.resourceChannelEditButtonInner,
          size: c.Button.Sizes.MIN,
          onClick: j,
          children: [(0, n.jsx)(c.PencilIcon, {
            size: "md",
            color: "currentColor"
          }), (0, n.jsx)(c.HiddenVisually, {
            children: F.Z.Messages.EDIT
          })]
        })
      })]
    }), null != g && (0, n.jsx)(c.Text, {
      variant: "text-xs/medium",
      color: "text-danger",
      children: g
    })]
  })
}

function ee(e) {
  var s;
  let {
    channel: t,
    isLast: l
  } = e, a = i.useCallback(() => {
    (0, Z.r2)({
      channelId: t.id,
      title: t.name,
      description: "",
      emoji: null,
      icon: null
    })
  }, [t]), r = null !== (s = (0, E.KS)(t)) && void 0 !== s ? s : c.TextIcon;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: k.suggestedChannel,
      children: [(0, n.jsx)(r, {
        className: k.suggestedChannelIcon
      }), (0, n.jsx)(c.Text, {
        className: k.suggestedChannelText,
        variant: "text-sm/normal",
        children: t.name
      }), (0, n.jsx)(c.Button, {
        className: k.suggestedChannelButton,
        size: c.Button.Sizes.MIN,
        onClick: a,
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "always-white",
          children: F.Z.Messages.ADD
        })
      })]
    }), l && (0, n.jsx)("div", {
      className: k.suggestedSeparator
    })]
  })
}

function es(e) {
  let {
    guildId: s
  } = e, t = (0, r.e7)([p.Z], () => p.Z.getGuild(s)), l = (0, r.Wu)([U.Z], () => {
    var e, s;
    return null !== (s = null === (e = U.Z.getSettings().resourceChannels) || void 0 === e ? void 0 : e.map(e => e.channelId)) && void 0 !== s ? s : []
  }), a = (0, r.Wu)([U.Z], () => U.Z.getDismissedSuggestedChannelIds(s)), o = (0, r.e7)([A.ZP], () => null == s ? [] : A.ZP.getSelectableChannels(s)).filter(e => !a.includes(e.channel.id) && !l.includes(e.channel.id) && e.channel.type === P.d4z.GUILD_TEXT && D.Uu(P.Plq.VIEW_CHANNEL, e.channel) && !D.Uu(P.Plq.SEND_MESSAGES, e.channel) && e.channel.id !== (null == t ? void 0 : t.rulesChannelId)).slice(0, 5), d = i.useCallback(() => {
    let e = o.map(e => e.channel.id);
    (0, Z.q6)(s, e)
  }, [s, o]);
  return o.length <= 0 || l.length >= S.x3 ? null : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: k.suggestedChannelsSection,
      children: [(0, n.jsx)(c.Text, {
        variant: "text-md/semibold",
        children: F.Z.Messages.RECOMMENDED
      }), (0, n.jsxs)("div", {
        className: k.suggestedChannelsHeader,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_EXPLAINER
        }), (0, n.jsxs)(c.Clickable, {
          className: k.suggestedChannelsDismiss,
          onClick: d,
          children: [(0, n.jsx)(c.CheckmarkLargeIcon, {
            size: "md",
            color: "currentColor",
            className: k.suggestedChannelsDismissCheck
          }), (0, n.jsx)(c.Text, {
            variant: "text-xs/semibold",
            color: "text-brand",
            children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_SUGGESTED_RESOURCES_DISMISS
          })]
        })]
      }), (0, n.jsx)("div", {
        className: k.suggestedChannels,
        children: o.map((e, s) => (0, n.jsx)(ee, {
          channel: e.channel,
          isLast: s < o.length - 1
        }, e.channel.id))
      })]
    }), (0, n.jsx)("div", {
      className: k.sectionSeparator
    })]
  })
}

function et(e) {
  let {
    guildId: s
  } = e, l = (0, r.Wu)([U.Z], () => {
    var e;
    return null !== (e = U.Z.getSettings().resourceChannels) && void 0 !== e ? e : []
  }), a = l.map(e => ({
    ...e,
    id: e.channelId
  })), {
    handleDragStart: o,
    handleDragReset: d,
    handleDragComplete: u
  } = (0, I.Z)(a, Z.lq), E = i.useCallback((e, t) => {
    if (null == s) return;
    let n = U.Z.getSettings();
    null != n && ((0, Z.r2)(e), (0, Z.oo)(s, n).then(() => {
      (0, Z.mM)(s, e.channelId, t)
    }))
  }, [s]), _ = i.useCallback(() => {
    if (null != s) return (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("84725")]).then(t.bind(t, 462499));
      return t => (0, n.jsx)(e, {
        ...t,
        guildId: s,
        onSave: Z.r2,
        onIconUpload: E
      })
    })
  }, [s, E]);
  return (0, n.jsxs)("div", {
    className: k.editResources,
    children: [l.map((e, t) => (0, n.jsx)($, {
      guildId: s,
      resourceChannel: e,
      index: t,
      onDragStart: o,
      onDragReset: d,
      onDragComplete: u
    }, e.channelId)), l.length < S.x3 && (0, n.jsxs)(c.Clickable, {
      className: k.addActionItem,
      onClick: _,
      children: [(0, n.jsx)(c.CirclePlusIcon, {
        size: "xs",
        color: "currentColor"
      }), (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "none",
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_ADD_A_RESOURCE
      })]
    })]
  })
}

function en(e) {
  let {
    saveOnClose: s
  } = e, t = (0, r.e7)([j.Z], () => j.Z.getGuildId());
  return null == t ? null : (0, n.jsx)(ei, {
    guildId: t,
    saveOnClose: s
  })
}

function ei(e) {
  let {
    saveOnClose: s,
    guildId: t
  } = e, l = (0, r.cj)([U.Z], () => {
    var e;
    return null !== (e = U.Z.getSettings().welcomeMessage) && void 0 !== e ? e : G.z
  }), [a, d] = i.useState("new"), u = [{
    value: "new",
    name: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_NEW_MEMBER_EXAMPLE
  }, {
    value: "existing",
    name: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_EXISTING_MEMBER_EXAMPLE
  }], E = (0, r.e7)([R.Z], () => R.Z.theme);
  return i.useEffect(() => () => {
    if (null == t) return;
    let e = U.Z.getSettings();
    (0, Z.oo)(t, e)
  }, [s, t]), (0, n.jsxs)("div", {
    className: k.page,
    children: [(0, n.jsxs)("div", {
      className: k.leftColumn,
      children: [(0, n.jsx)(c.Heading, {
        className: k.header,
        variant: "heading-lg/extrabold",
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_TITLE
      }), (0, n.jsx)("div", {
        className: k.descriptionSection,
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION
        })
      }), (0, n.jsx)("div", {
        className: k.section,
        children: (0, n.jsx)(W, {
          guildId: t,
          welcomeMessage: l
        })
      }), (0, n.jsx)("div", {
        className: k.sectionSeparator
      }), (0, n.jsx)(c.Heading, {
        className: k.header,
        variant: "heading-lg/extrabold",
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_TITLE
      }), (0, n.jsx)("div", {
        className: k.descriptionSection,
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_TODOS_DESCRIPTION.format()
        })
      }), (0, n.jsx)("div", {
        className: k.section,
        children: (0, n.jsx)(Q, {})
      }), (0, n.jsx)(K, {
        guildId: t
      }), (0, n.jsx)("div", {
        className: k.sectionSeparator
      }), (0, n.jsx)(c.Heading, {
        className: k.header,
        variant: "heading-lg/extrabold",
        children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_TITLE
      }), (0, n.jsxs)("div", {
        className: k.descriptionSection,
        children: [(0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCES_DESCRIPTION
        }), (0, n.jsxs)("ul", {
          className: k.bulletList,
          children: [(0, n.jsx)("li", {
            children: (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_1
            })
          }), (0, n.jsx)("li", {
            children: (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_2
            })
          }), (0, n.jsx)("li", {
            children: (0, n.jsx)(c.Text, {
              tag: "span",
              variant: "text-sm/medium",
              color: "header-secondary",
              children: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESOURCE_BULLET_3
            })
          })]
        })]
      }), (0, n.jsxs)("div", {
        className: k.section,
        children: [(0, n.jsx)(es, {
          guildId: t
        }), (0, n.jsx)(et, {
          guildId: t
        })]
      }), (0, n.jsx)("div", {
        className: k.sectionSeparator
      }), (0, n.jsx)(J, {
        guildId: t
      })]
    }), (0, n.jsxs)("div", {
      className: k.rightColumn,
      children: [(0, n.jsx)("div", {
        className: k.centeredSection,
        children: (0, n.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "header-secondary",
          children: F.Z.Messages.EXAMPLE
        })
      }), (0, n.jsx)("img", {
        className: k.previewImage,
        src: (0, o.ap)(E) ? "existing" === a ? w : Y : "existing" === a ? H : V,
        alt: F.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_GUIDE_EXAMPLE_ALT
      }), (0, n.jsx)(c.SegmentedControl, {
        options: u,
        value: a,
        onChange: e => {
          let {
            value: s
          } = e;
          return d(String(s))
        },
        look: "pill"
      })]
    })]
  })
}

function el() {
  let e = (0, r.e7)([j.Z], () => j.Z.getGuild()),
    s = (0, r.e7)([U.Z], () => U.Z.getSettings()),
    t = (0, r.e7)([U.Z], () => U.Z.getSubmitting());
  return null == e ? null : (0, n.jsx)(d.Z, {
    onSave: () => {
      try {
        (0, Z.oo)(e.id, s)
      } catch {}
    },
    onReset: Z.bj,
    submitting: t,
    onSaveText: F.Z.Messages.SAVE
  })
}