"use strict";
l.r(t), l.d(t, {
  default: function() {
    return en
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("392711"),
  d = l.n(r),
  o = l("920906"),
  u = l("866442"),
  c = l("442837"),
  h = l("692547"),
  f = l("780384"),
  m = l("481060"),
  C = l("45114"),
  N = l("131388"),
  x = l("410030"),
  g = l("1585"),
  p = l("125988"),
  S = l("44315"),
  E = l("160404"),
  I = l("240991"),
  _ = l("703656"),
  T = l("484459"),
  v = l("318661"),
  A = l("252532"),
  O = l("271383"),
  R = l("430824"),
  j = l("306680"),
  b = l("594174"),
  L = l("823379"),
  M = l("51144"),
  D = l("998502"),
  B = l("549817"),
  y = l("745752"),
  w = l("45966"),
  F = l("637853"),
  H = l("905204"),
  U = l("968644"),
  k = l("521941"),
  P = l("614328"),
  G = l("104265"),
  W = l("588632"),
  z = l("290511"),
  Y = l("981631"),
  V = l("176505"),
  Z = l("490897"),
  X = l("689938"),
  q = l("116454"),
  K = l("19340"),
  Q = l("946278");
let J = m.AvatarSizes.SIZE_80,
  $ = "required";

function ee(e) {
  var t;
  let {
    guild: l,
    user: s
  } = e, {
    avatarSrc: r,
    eventHandlers: o,
    isAvatarAnimating: h
  } = (0, A.useAnimatedAvatarSrc)({
    user: s,
    guildId: l.id,
    size: 120
  }), {
    avatarDecorationSrc: f
  } = (0, p.default)({
    user: s,
    size: (0, g.getDecorationSizeForAvatarSize)(J),
    animateOnHover: !h
  }), C = (0, c.useStateFromStores)([O.default], () => O.default.getSelfMember(l.id)), N = (0, c.useStateFromStoresArray)([O.default], () => O.default.getMemberRoleWithPendingUpdates(l.id, s.id)), x = (0, c.useStateFromStores)([R.default], () => R.default.getRoles(l.id)), S = d()(N).filter(e => x.hasOwnProperty(e)).map(e => x[e]).orderBy("position", "desc").value(), E = (0, v.default)(s.id, l.id);
  a.useEffect(() => {
    (0, T.default)(s.id, s.getAvatarURL(l.id, (0, m.getAvatarSize)(J)), {
      guildId: l.id
    })
  }, []);
  let _ = (0, I.parseBioReact)(null == E ? void 0 : E.bio),
    j = D.default.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar;
  return (0, n.jsxs)("div", {
    className: q.profile,
    children: [(0, n.jsx)(m.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: X.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE
    }), (0, n.jsx)(m.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: X.default.Messages.CUSTOMIZE_COMMUNITY_PROFILE_DESCRIPTION
    }), (0, n.jsxs)("div", {
      className: q.profileCard,
      children: [(0, n.jsx)("div", {
        ...o,
        children: (0, n.jsx)(j, {
          src: r,
          avatarDecoration: f,
          size: J,
          "aria-label": s.username
        })
      }), (0, n.jsx)(m.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        className: q.username,
        children: null !== (t = null == C ? void 0 : C.nick) && void 0 !== t ? t : M.default.getName(s)
      }), (0, n.jsx)(m.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: i()(Q.markup, q.bio),
        children: _
      }), null != S && S.length > 0 && (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("hr", {
          className: q.separator
        }), (0, n.jsx)(m.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          className: q.title,
          children: X.default.Messages.ROLES
        }), (0, n.jsx)("div", {
          className: q.roles,
          children: null == S ? void 0 : S.map(e => {
            var t;
            return (0, n.jsxs)("div", {
              className: q.role,
              children: [(0, n.jsx)(m.RoleCircle, {
                color: null !== (t = e.colorString) && void 0 !== t ? t : (0, u.int2hex)(Y.DEFAULT_ROLE_COLOR),
                className: q.roleDot
              }), (0, n.jsx)(m.Text, {
                variant: "text-xs/medium",
                color: "header-primary",
                children: e.name
              })]
            }, e.id)
          })
        })]
      })]
    })]
  })
}

function et(e) {
  var t;
  let {
    prompt: l,
    guild: s
  } = e, [r, d] = a.useState(null), [u, f] = a.useState(new Set), C = null == l ? void 0 : null === (t = l.options) || void 0 === t ? void 0 : t.filter(e => u.has(e.id)), N = (0, F.getSelectedRoleIds)(C), x = (0, F.getSelectedChannelIds)(C), g = (0, c.useStateFromStoresArray)([w.default], () => w.default.getOnboardingResponsesForPrompt(s.id, l.id)), {
    helpText: p,
    helpTextAdditional: E
  } = (0, U.useCustomizeCommunityPromptHelpText)({
    guild: s,
    prompt: l,
    selectedRoleIds: N,
    selectedChannelIds: x,
    itemHook: (e, t) => (0, n.jsx)(m.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, t)
  }), {
    handleSelectOption: I
  } = (0, H.default)(s.id), _ = (0, m.useToken)(h.default.unsafe_rawColors.BRAND_500), T = (0, o.useSpring)({
    from: {
      color: l.isNew ? _.hex({
        opacity: 1
      }) : _.hex({
        opacity: 0
      })
    },
    color: _.hex({
      opacity: 0
    }),
    config: {
      duration: 300
    },
    delay: 500
  }), v = l.options.map(e => ({
    value: e.id,
    ...e
  })), A = l.options.filter(e => g.includes(e.id)).map(e => e.id);
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(o.animated.div, {
      className: q.prompt,
      style: {
        borderColor: T.color
      },
      children: [l.isNew && (0, n.jsx)(m.TextBadge, {
        color: (0, S.getColor)(Y.Color.BRAND_260),
        text: X.default.Messages.NEW,
        className: q.newBadge
      }), (0, n.jsxs)(m.Heading, {
        className: q.promptTitle,
        variant: "heading-md/semibold",
        color: "header-primary",
        children: [l.title, l.required ? (0, n.jsx)("span", {
          className: i()(q.required, {
            [q.error]: (null == r ? void 0 : r.type) === $
          }),
          children: "*"
        }) : null]
      }), (0, n.jsx)(W.default, {
        options: v,
        value: A,
        onChange: e => {
          let t = e.find(e => !g.includes(e.id)),
            n = e.map(e => e.id);
          if (null != t) I(l, t, !0), l.singleSelect && l.options.forEach(e => u.delete(e.id)), u.add(t.id);
          else {
            let e = g.filter(e => !n.includes(e)),
              t = l.options.filter(t => e.includes(t.id));
            if (g.length <= t.length && l.required) {
              d({
                type: $
              });
              return
            }
            t.forEach(e => {
              I(l, e, !1), u.delete(e.id)
            })
          }
          f(new Set(u)), d(null)
        },
        canBeNew: !l.isNew
      }), (0, n.jsxs)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: q.helpText,
        children: [p, " ", E]
      })]
    })
  })
}

function el(e) {
  var t;
  let {
    prompt: l,
    guild: s
  } = e, [r, d] = a.useState(null), [u, f] = a.useState(new Set), C = null == l ? void 0 : null === (t = l.options) || void 0 === t ? void 0 : t.filter(e => u.has(e.id)), N = (0, F.getSelectedRoleIds)(C), x = (0, F.getSelectedChannelIds)(C), g = (0, c.useStateFromStoresArray)([w.default], () => w.default.getOnboardingResponsesForPrompt(s.id, l.id)), {
    helpText: p,
    helpTextAdditional: E
  } = (0, U.useCustomizeCommunityPromptHelpText)({
    guild: s,
    prompt: l,
    selectedRoleIds: N,
    selectedChannelIds: x,
    itemHook: (e, t) => (0, n.jsx)(m.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, t)
  }), {
    handleSelectOption: I
  } = (0, H.default)(s.id), _ = (e, t) => {
    if (!t && 1 === g.length && l.required) {
      d({
        type: $
      });
      return
    }
    I(l, e, null != t && t), l.singleSelect && t && l.options.forEach(e => u.delete(e.id)), t ? u.add(e.id) : u.delete(e.id), f(new Set(u)), d(null)
  }, T = (0, m.useToken)(h.default.unsafe_rawColors.BRAND_500), v = (0, o.useSpring)({
    from: {
      color: l.isNew ? T.hex({
        opacity: 1
      }) : T.hex({
        opacity: 0
      })
    },
    color: T.hex({
      opacity: 0
    }),
    config: {
      duration: 300
    },
    delay: 500
  });
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(o.animated.div, {
      className: q.prompt,
      style: {
        borderColor: v.color
      },
      children: [l.isNew && (0, n.jsx)(m.TextBadge, {
        color: (0, S.getColor)(Y.Color.BRAND_260),
        text: X.default.Messages.NEW,
        className: q.newBadge
      }), (0, n.jsxs)(m.Heading, {
        className: q.promptTitle,
        variant: "heading-md/semibold",
        color: "header-primary",
        children: [l.title, l.required ? (0, n.jsx)("span", {
          className: i()(q.required, {
            [q.error]: (null == r ? void 0 : r.type) === $
          }),
          children: "*"
        }) : null]
      }), (0, n.jsx)("div", {
        className: q.promptOptions,
        children: l.options.map(e => (0, n.jsx)(G.default, {
          hideMemberCount: !0,
          guildId: s.id,
          option: e,
          onSelect: t => _(e, t),
          selected: g.includes(e.id),
          canBeNew: !l.isNew
        }, e.id))
      }), (0, n.jsxs)(m.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: q.helpText,
        children: [p, " ", E]
      })]
    })
  })
}

function en(e) {
  let {
    guildId: t,
    onBrowseChannels: l
  } = e, s = (0, f.isThemeDark)((0, x.default)()), r = (0, c.useStateFromStores)([R.default], () => R.default.getGuild(t)), d = (0, c.useStateFromStores)([b.default], () => b.default.getCurrentUser()), o = (0, N.default)("(min-width: 1344px)") && null != d, u = a.useCallback(() => {
    (0, _.transitionTo)(Y.Routes.CHANNEL(t, V.StaticChannelRoute.CHANNEL_BROWSER)), null == l || l()
  }, [t, l]), h = (0, c.useStateFromStores)([j.default], () => j.default.hasUnread(t, Z.ReadStateTypes.GUILD_ONBOARDING_QUESTION)), {
    onboardingPromptsRaw: g,
    newOnboardingPrompts: p,
    onboardingPromptsWithNewAnswers: I,
    newAnswersCount: T,
    onboardingPrompts: v
  } = (0, k.default)(t);
  a.useEffect(() => {
    if ((null == r ? void 0 : r.id) != null) !E.default.isFullServerPreview(r.id) && (w.default.shouldFetchPrompts(r.id) || h) && (0, y.fetchOnboardingPrompts)(r.id)
  }, [null == r ? void 0 : r.id, h]), a.useEffect(() => {
    if ((null == r ? void 0 : r.id) != null) {
      if (!E.default.isFullServerPreview(r.id)) return () => {
        (0, C.ackGuildFeature)(r.id, Z.ReadStateTypes.GUILD_ONBOARDING_QUESTION, w.default.ackIdForGuild(r.id)), B.default.updateOnboardingResponses(r.id)
      }
    }
  }, [null == r ? void 0 : r.id]);
  let A = a.useCallback(e => {
    if (null == r) return null;
    switch (e.type) {
      case z.OnboardingPromptType.MULTIPLE_CHOICE:
        return (0, n.jsx)(el, {
          prompt: e,
          guild: r
        }, e.id);
      case z.OnboardingPromptType.DROPDOWN:
        return (0, n.jsx)(et, {
          prompt: e,
          guild: r
        }, e.id);
      default:
        (0, L.assertNever)(e.type)
    }
  }, [r]);
  if (null == r) return null;
  if (0 === g.length) {
    let e = (0, S.getColor)(s ? Y.Color.PRIMARY_300 : Y.Color.PRIMARY_500),
      t = (0, S.getColor)(s ? Y.Color.PRIMARY_700 : Y.Color.PRIMARY_230);
    return (0, n.jsx)("div", {
      className: K.chat,
      children: (0, n.jsx)("div", {
        className: i()(K.content, q.emptyPage),
        children: (0, n.jsxs)("div", {
          className: q.emptyContainer,
          children: [(0, n.jsx)(P.default, {
            className: q.emptyIcon,
            foregroundColor: e,
            backgroundColor: t
          }), (0, n.jsx)(m.Heading, {
            className: q.emptyHeader,
            variant: "heading-md/semibold",
            children: X.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_HEADER
          }), (0, n.jsx)(m.Text, {
            variant: "text-sm/medium",
            children: X.default.Messages.CUSTOMIZE_COMMUNITY_EMPTY_SUBHEADER.format({
              onBrowseChannels: u
            })
          })]
        })
      })
    })
  }
  return (0, n.jsx)("div", {
    className: i()(K.chat, q.scrollerContainer),
    children: (0, n.jsxs)(m.AdvancedScroller, {
      className: q.scroller,
      fade: !0,
      children: [(0, n.jsxs)("div", {
        className: q.pageBody,
        children: [(p.length > 0 || I.length > 0) && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            children: (0, n.jsx)(m.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: X.default.Messages.ONBOARDING_PROMPT_ANSWERS_NEW.format({
                count: p.length + T
              })
            })
          }), p.map(A), I.map(A), (0, n.jsx)("div", {
            className: q.sectionSeparator
          })]
        }), v.length > 0 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsxs)("div", {
            children: [(0, n.jsx)(m.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: X.default.Messages.ONBOARDING_PROMPT_QUESTIONS_HEADER.format({
                count: v.length
              })
            }), (0, n.jsx)(m.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: X.default.Messages.ONBOARDING_PROMPT_MEMBER_DESCRIPTION
            })]
          }), v.map(A)]
        })]
      }), o && (0, n.jsx)(ee, {
        guild: r,
        user: d
      })]
    })
  })
}