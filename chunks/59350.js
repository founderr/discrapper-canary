l.d(n, {
  Z: function() {
    return et
  }
}), l(47120);
var t = l(735250),
  i = l(470079),
  s = l(120356),
  a = l.n(s),
  r = l(392711),
  d = l.n(r),
  o = l(920906),
  c = l(866442),
  u = l(442837),
  h = l(692547),
  m = l(780384),
  x = l(481060),
  N = l(45114),
  C = l(131388),
  g = l(410030),
  E = l(1585),
  p = l(125988),
  f = l(44315),
  Z = l(160404),
  _ = l(240991),
  I = l(703656),
  v = l(484459),
  j = l(318661),
  S = l(252532),
  R = l(271383),
  T = l(430824),
  O = l(306680),
  A = l(594174),
  L = l(823379),
  M = l(51144),
  B = l(998502),
  P = l(549817),
  b = l(745752),
  D = l(45966),
  w = l(637853),
  H = l(905204),
  y = l(968644),
  U = l(521941),
  k = l(614328),
  W = l(104265),
  G = l(588632),
  F = l(290511),
  z = l(981631),
  Y = l(176505),
  V = l(490897),
  q = l(689938),
  X = l(948855),
  K = l(175803),
  Q = l(25450);
let J = x.AvatarSizes.SIZE_80,
  $ = "required";

function ee(e) {
  var n;
  let {
    guild: l,
    user: s
  } = e, {
    avatarSrc: r,
    eventHandlers: o,
    isAvatarAnimating: h
  } = (0, S.w)({
    user: s,
    guildId: l.id,
    size: 120
  }), {
    avatarDecorationSrc: m
  } = (0, p.Z)({
    user: s,
    size: (0, E.y9)(J),
    animateOnHover: !h
  }), N = (0, u.e7)([R.ZP], () => R.ZP.getSelfMember(l.id)), C = (0, u.Wu)([R.ZP], () => R.ZP.getMemberRoleWithPendingUpdates(l.id, s.id)), g = (0, u.e7)([T.Z], () => T.Z.getRoles(l.id)), f = d()(C).filter(e => g.hasOwnProperty(e)).map(e => g[e]).orderBy("position", "desc").value(), Z = (0, j.ZP)(s.id, l.id);
  i.useEffect(() => {
    (0, v.Z)(s.id, s.getAvatarURL(l.id, (0, x.getAvatarSize)(J)), {
      guildId: l.id
    })
  }, []);
  let I = (0, _.YP)(null == Z ? void 0 : Z.bio),
    O = B.ZP.getEnableHardwareAcceleration() ? x.AnimatedAvatar : x.Avatar;
  return (0, t.jsxs)("div", {
    className: X.profile,
    children: [(0, t.jsx)(x.Heading, {
      variant: "heading-md/semibold",
      color: "header-primary",
      children: q.Z.Messages.CUSTOMIZE_COMMUNITY_PROFILE
    }), (0, t.jsx)(x.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      children: q.Z.Messages.CUSTOMIZE_COMMUNITY_PROFILE_DESCRIPTION
    }), (0, t.jsxs)("div", {
      className: X.profileCard,
      children: [(0, t.jsx)("div", {
        ...o,
        children: (0, t.jsx)(O, {
          src: r,
          avatarDecoration: m,
          size: J,
          "aria-label": s.username
        })
      }), (0, t.jsx)(x.Text, {
        variant: "text-lg/medium",
        color: "header-primary",
        className: X.username,
        children: null !== (n = null == N ? void 0 : N.nick) && void 0 !== n ? n : M.ZP.getName(s)
      }), (0, t.jsx)(x.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        className: a()(Q.markup, X.bio),
        children: I
      }), null != f && f.length > 0 && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("hr", {
          className: X.separator
        }), (0, t.jsx)(x.Text, {
          variant: "text-xs/semibold",
          color: "text-muted",
          className: X.title,
          children: q.Z.Messages.ROLES
        }), (0, t.jsx)("div", {
          className: X.roles,
          children: null == f ? void 0 : f.map(e => {
            var n;
            return (0, t.jsxs)("div", {
              className: X.role,
              children: [(0, t.jsx)(x.RoleCircle, {
                color: null !== (n = e.colorString) && void 0 !== n ? n : (0, c.Rf)(z.p6O),
                className: X.roleDot
              }), (0, t.jsx)(x.Text, {
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

function en(e) {
  var n;
  let {
    prompt: l,
    guild: s
  } = e, [r, d] = i.useState(null), [c, m] = i.useState(new Set), N = null == l ? void 0 : null === (n = l.options) || void 0 === n ? void 0 : n.filter(e => c.has(e.id)), C = (0, w.L6)(N), g = (0, w.dX)(N), E = (0, u.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(s.id, l.id)), {
    helpText: p,
    helpTextAdditional: Z
  } = (0, y.p)({
    guild: s,
    prompt: l,
    selectedRoleIds: C,
    selectedChannelIds: g,
    itemHook: (e, n) => (0, t.jsx)(x.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, n)
  }), {
    handleSelectOption: _
  } = (0, H.Z)(s.id), I = (0, x.useToken)(h.Z.unsafe_rawColors.BRAND_500), v = (0, o.useSpring)({
    from: {
      color: l.isNew ? I.hex({
        opacity: 1
      }) : I.hex({
        opacity: 0
      })
    },
    color: I.hex({
      opacity: 0
    }),
    config: {
      duration: 300
    },
    delay: 500
  }), j = l.options.map(e => ({
    value: e.id,
    ...e
  })), S = l.options.filter(e => E.includes(e.id)).map(e => e.id);
  return (0, t.jsx)(t.Fragment, {
    children: (0, t.jsxs)(o.animated.div, {
      className: X.prompt,
      style: {
        borderColor: v.color
      },
      children: [l.isNew && (0, t.jsx)(x.TextBadge, {
        color: (0, f.Lq)(z.Ilk.BRAND_260),
        text: q.Z.Messages.NEW,
        className: X.newBadge
      }), (0, t.jsxs)(x.Heading, {
        className: X.promptTitle,
        variant: "heading-md/semibold",
        color: "header-primary",
        children: [l.title, l.required ? (0, t.jsx)("span", {
          className: a()(X.required, {
            [X.error]: (null == r ? void 0 : r.type) === $
          }),
          children: "*"
        }) : null]
      }), (0, t.jsx)(G.Z, {
        options: j,
        value: S,
        onChange: e => {
          let n = e.find(e => !E.includes(e.id)),
            t = e.map(e => e.id);
          if (null != n) _(l, n, !0), l.singleSelect && l.options.forEach(e => c.delete(e.id)), c.add(n.id);
          else {
            let e = E.filter(e => !t.includes(e)),
              n = l.options.filter(n => e.includes(n.id));
            if (E.length <= n.length && l.required) {
              d({
                type: $
              });
              return
            }
            n.forEach(e => {
              _(l, e, !1), c.delete(e.id)
            })
          }
          m(new Set(c)), d(null)
        },
        canBeNew: !l.isNew
      }), (0, t.jsxs)(x.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: X.helpText,
        children: [p, " ", Z]
      })]
    })
  })
}

function el(e) {
  var n;
  let {
    prompt: l,
    guild: s
  } = e, [r, d] = i.useState(null), [c, m] = i.useState(new Set), N = null == l ? void 0 : null === (n = l.options) || void 0 === n ? void 0 : n.filter(e => c.has(e.id)), C = (0, w.L6)(N), g = (0, w.dX)(N), E = (0, u.Wu)([D.Z], () => D.Z.getOnboardingResponsesForPrompt(s.id, l.id)), {
    helpText: p,
    helpTextAdditional: Z
  } = (0, y.p)({
    guild: s,
    prompt: l,
    selectedRoleIds: C,
    selectedChannelIds: g,
    itemHook: (e, n) => (0, t.jsx)(x.Text, {
      variant: "text-xs/medium",
      color: "header-primary",
      children: e
    }, n)
  }), {
    handleSelectOption: _
  } = (0, H.Z)(s.id), I = (e, n) => {
    if (!n && 1 === E.length && l.required) {
      d({
        type: $
      });
      return
    }
    _(l, e, null != n && n), l.singleSelect && n && l.options.forEach(e => c.delete(e.id)), n ? c.add(e.id) : c.delete(e.id), m(new Set(c)), d(null)
  }, v = (0, x.useToken)(h.Z.unsafe_rawColors.BRAND_500), j = (0, o.useSpring)({
    from: {
      color: l.isNew ? v.hex({
        opacity: 1
      }) : v.hex({
        opacity: 0
      })
    },
    color: v.hex({
      opacity: 0
    }),
    config: {
      duration: 300
    },
    delay: 500
  });
  return (0, t.jsx)(t.Fragment, {
    children: (0, t.jsxs)(o.animated.div, {
      className: X.prompt,
      style: {
        borderColor: j.color
      },
      children: [l.isNew && (0, t.jsx)(x.TextBadge, {
        color: (0, f.Lq)(z.Ilk.BRAND_260),
        text: q.Z.Messages.NEW,
        className: X.newBadge
      }), (0, t.jsxs)(x.Heading, {
        className: X.promptTitle,
        variant: "heading-md/semibold",
        color: "header-primary",
        children: [l.title, l.required ? (0, t.jsx)("span", {
          className: a()(X.required, {
            [X.error]: (null == r ? void 0 : r.type) === $
          }),
          children: "*"
        }) : null]
      }), (0, t.jsx)("div", {
        className: X.promptOptions,
        children: l.options.map(e => (0, t.jsx)(W.Z, {
          hideMemberCount: !0,
          guildId: s.id,
          option: e,
          onSelect: n => I(e, n),
          selected: E.includes(e.id),
          canBeNew: !l.isNew
        }, e.id))
      }), (0, t.jsxs)(x.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        className: X.helpText,
        children: [p, " ", Z]
      })]
    })
  })
}

function et(e) {
  let {
    guildId: n,
    onBrowseChannels: l
  } = e, s = (0, m.wj)((0, g.ZP)()), r = (0, u.e7)([T.Z], () => T.Z.getGuild(n)), d = (0, u.e7)([A.default], () => A.default.getCurrentUser()), o = (0, C.Z)("(min-width: 1344px)") && null != d, c = i.useCallback(() => {
    (0, I.uL)(z.Z5c.CHANNEL(n, Y.oC.CHANNEL_BROWSER)), null == l || l()
  }, [n, l]), h = (0, u.e7)([O.ZP], () => O.ZP.hasUnread(n, V.W.GUILD_ONBOARDING_QUESTION)), {
    onboardingPromptsRaw: E,
    newOnboardingPrompts: p,
    onboardingPromptsWithNewAnswers: _,
    newAnswersCount: v,
    onboardingPrompts: j
  } = (0, U.Z)(n);
  i.useEffect(() => {
    if ((null == r ? void 0 : r.id) != null) !Z.Z.isFullServerPreview(r.id) && (D.Z.shouldFetchPrompts(r.id) || h) && (0, b.eM)(r.id)
  }, [null == r ? void 0 : r.id, h]), i.useEffect(() => {
    if ((null == r ? void 0 : r.id) != null) {
      if (!Z.Z.isFullServerPreview(r.id)) return () => {
        (0, N.Ju)(r.id, V.W.GUILD_ONBOARDING_QUESTION, D.Z.ackIdForGuild(r.id)), P.Z.updateOnboardingResponses(r.id)
      }
    }
  }, [null == r ? void 0 : r.id]);
  let S = i.useCallback(e => {
    if (null == r) return null;
    switch (e.type) {
      case F.FN.MULTIPLE_CHOICE:
        return (0, t.jsx)(el, {
          prompt: e,
          guild: r
        }, e.id);
      case F.FN.DROPDOWN:
        return (0, t.jsx)(en, {
          prompt: e,
          guild: r
        }, e.id);
      default:
        (0, L.vE)(e.type)
    }
  }, [r]);
  if (null == r) return null;
  if (0 === E.length) {
    let e = (0, f.Lq)(s ? z.Ilk.PRIMARY_300 : z.Ilk.PRIMARY_500),
      n = (0, f.Lq)(s ? z.Ilk.PRIMARY_700 : z.Ilk.PRIMARY_230);
    return (0, t.jsx)("div", {
      className: K.chat,
      children: (0, t.jsx)("div", {
        className: a()(K.content, X.emptyPage),
        children: (0, t.jsxs)("div", {
          className: X.emptyContainer,
          children: [(0, t.jsx)(k.Z, {
            className: X.emptyIcon,
            foregroundColor: e,
            backgroundColor: n
          }), (0, t.jsx)(x.Heading, {
            className: X.emptyHeader,
            variant: "heading-md/semibold",
            children: q.Z.Messages.CUSTOMIZE_COMMUNITY_EMPTY_HEADER
          }), (0, t.jsx)(x.Text, {
            variant: "text-sm/medium",
            children: q.Z.Messages.CUSTOMIZE_COMMUNITY_EMPTY_SUBHEADER.format({
              onBrowseChannels: c
            })
          })]
        })
      })
    })
  }
  return (0, t.jsx)("div", {
    className: a()(K.chat, X.scrollerContainer),
    children: (0, t.jsxs)(x.AdvancedScroller, {
      className: X.scroller,
      fade: !0,
      children: [(0, t.jsxs)("div", {
        className: X.pageBody,
        children: [(p.length > 0 || _.length > 0) && (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("div", {
            children: (0, t.jsx)(x.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: q.Z.Messages.ONBOARDING_PROMPT_ANSWERS_NEW.format({
                count: p.length + v
              })
            })
          }), p.map(S), _.map(S), (0, t.jsx)("div", {
            className: X.sectionSeparator
          })]
        }), j.length > 0 && (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsxs)("div", {
            children: [(0, t.jsx)(x.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: q.Z.Messages.ONBOARDING_PROMPT_QUESTIONS_HEADER.format({
                count: j.length
              })
            }), (0, t.jsx)(x.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: q.Z.Messages.ONBOARDING_PROMPT_MEMBER_DESCRIPTION
            })]
          }), j.map(S)]
        })]
      }), o && (0, t.jsx)(ee, {
        guild: r,
        user: d
      })]
    })
  })
}