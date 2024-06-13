"use strict";
s.r(t), s.d(t, {
  GuildRoleSubscriptionBenefits: function() {
    return y
  }
}), s("47120");
var n = s("735250"),
  i = s("470079"),
  l = s("120356"),
  a = s.n(l),
  r = s("442837"),
  u = s("481060"),
  o = s("131388"),
  d = s("160404"),
  c = s("351402"),
  f = s("153124"),
  _ = s("86813"),
  I = s("826026"),
  C = s("41542"),
  m = s("768581"),
  E = s("817460"),
  S = s("584825"),
  T = s("290348"),
  N = s("934826"),
  g = s("768318"),
  L = s("570533"),
  R = s("971792"),
  h = s("629262"),
  p = s("761966"),
  v = s("893729"),
  x = s("838940"),
  O = s("882101"),
  A = s("11705"),
  M = s("81273"),
  U = s("293810"),
  j = s("981631"),
  P = s("689938"),
  D = s("89267");
let b = e => {
    let {
      benefits: t,
      header: s,
      guildId: l
    } = e, [a, r] = i.useState(!1), o = a ? t : t.slice(0, 5), d = t.length > 5, c = t.length - 5, _ = P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
      numTruncated: c
    }), I = (0, f.useUID)();
    return 0 === t.length ? null : (0, n.jsxs)("div", {
      className: D.benefitsSection,
      children: [(0, n.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: D.sectionHeader,
        id: I,
        children: s
      }), (0, n.jsx)(u.Spacer, {
        size: 12
      }), (0, n.jsx)("ul", {
        className: D.benefitsList,
        "aria-labelledby": I,
        children: o.map((e, t) => (0, n.jsx)("li", {
          children: (0, n.jsx)(x.default, {
            guildId: l,
            benefit: e
          }, (0, E.getBenefitKey)(e))
        }, t))
      }), d && (0, n.jsx)(H, {
        isViewAll: a,
        onToggle: () => r(e => !e),
        showMoreText: _
      })]
    })
  },
  B = e => {
    let {
      guildId: t,
      listingId: s
    } = e, i = (0, L.default)(t), [l] = T.useTierEmojiIds(s, t), a = i.filter(e => l.has(e.id));
    return 0 === a.length ? null : (0, n.jsxs)("div", {
      className: D.benefitsSection,
      children: [(0, n.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: D.sectionHeader,
        children: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
          count: a.length
        })
      }), (0, n.jsx)(u.Spacer, {
        size: 12
      }), (0, n.jsx)("div", {
        className: D.emojiList,
        children: a.map((e, t) => {
          var s;
          return (0, n.jsx)(u.Tooltip, {
            text: e.name,
            "aria-label": !1,
            children: t => {
              var s;
              return (0, n.jsx)("img", {
                ...t,
                className: D.emojiListEmoji,
                src: (s = e, m.default.getEmojiURL({
                  id: s.id,
                  animated: s.animated,
                  size: 24
                })),
                width: 24,
                height: 24,
                alt: e.name
              })
            }
          }, null !== (s = e.id) && void 0 !== s ? s : t)
        })
      })]
    })
  },
  y = e => {
    let {
      listingId: t,
      guildId: s,
      className: i
    } = e, l = (0, R.default)(s, t), [r] = T.useChannelBenefits(t), o = (0, h.default)(r), [d] = T.useIntangibleBenefits(t), c = T.useRole(t, s), [f] = T.useTierEmojiIds(t, s);
    return null == l && 0 === o.length && 0 === d.length && 0 === f.size ? null : (0, n.jsxs)("div", {
      className: a()(D.subscriptionPerks, i),
      children: [null != l && (0, n.jsxs)(u.HeadingLevel, {
        component: (0, n.jsx)(u.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: D.sectionHeader,
          children: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
        }),
        children: [(0, n.jsx)(u.Spacer, {
          size: 8
        }), (0, n.jsx)(v.default, {
          role: c,
          guildId: s,
          className: D.roleMessagePreview
        })]
      }), (0, n.jsx)(b, {
        header: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
        benefits: o,
        guildId: s
      }), (0, n.jsx)(b, {
        header: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
        benefits: d,
        guildId: s
      }), (0, n.jsx)(B, {
        guildId: s,
        listingId: t
      })]
    })
  },
  H = e => {
    let t, {
      onToggle: s,
      isViewAll: i,
      showMoreText: l
    } = e;
    return t = i ? (0, n.jsxs)(n.Fragment, {
      children: [P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION, (0, n.jsx)(I.default, {
        className: D.toggleTruncationButtonIcon
      })]
    }) : (0, n.jsxs)(n.Fragment, {
      children: [l, (0, n.jsx)(_.default, {
        className: D.toggleTruncationButtonIcon
      })]
    }), (0, n.jsx)(u.Button, {
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      className: D.toggleTruncationButton,
      innerClassName: D.toggleTruncationButtonInner,
      onClick: s,
      children: t
    })
  };
t.default = e => {
  var t;
  let {
    listingId: s,
    guildId: l,
    groupListingId: f,
    analyticsLocation: _
  } = e, I = (0, S.useSubscriptionListing)(s), {
    openModal: m,
    canOpenModal: L,
    cannotOpenReason: R,
    isCheckingTrialEligibility: h
  } = (0, M.default)(I, l, f, _), v = (0, r.useStateFromStores)([c.default], () => c.default.isSyncing), {
    activeSubscription: x,
    activeSubscriptionListing: b
  } = (0, N.default)(f), B = (null == b ? void 0 : b.id) === s, F = (null == x ? void 0 : x.status) === j.SubscriptionStatusTypes.CANCELED, [G, k] = i.useState(!1), [w, Q] = i.useState(!1), V = i.useCallback(e => {
    let t = !1;
    null != e && (t = e.scrollHeight - e.clientHeight > 1), Q(t)
  }, []), [q] = T.useName(s), [W] = T.useDescription(s), [Z] = T.useTrialInterval(s), [z] = T.useTrialLimit(s), Y = (0, g.default)(l, s), K = null != Z && null == x && Y, J = (0, o.default)(U.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), [X, $] = i.useState(!1), ee = X || !J, et = (0, r.useStateFromStores)([d.default], () => d.default.isViewingServerShop(l)), es = (null == I ? void 0 : I.published) === !0, en = (null == I ? void 0 : I.soft_deleted) === !0, ei = P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (es || et) && !en ? (0, n.jsxs)("article", {
    className: D.container,
    "aria-label": q,
    children: [K && (0, n.jsxs)("div", {
      className: a()(D.tierTrialIndicator, D.tierTopIndicator),
      children: [P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, E.formatPlanIntervalDuration)({
          interval: Z.interval,
          interval_count: Z.interval_count
        })
      }), (0, n.jsx)(u.Tooltip, {
        clickableOnMobile: !0,
        text: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != z ? z : 0
        }),
        children: e => (0, n.jsx)(C.default, {
          className: D.tierTrialIndicatorIcon,
          ...e
        })
      })]
    }), (0, n.jsxs)("div", {
      className: K ? void 0 : D.cardContainerWithoutTopIndicator,
      children: [(0, n.jsxs)("div", {
        className: D.tierInfoContainer,
        children: [J ? (0, n.jsx)(A.GuildRoleSubscriptionCollapsibleCardBasicInfo, {
          listingId: s,
          isListingPublished: es,
          expanded: ee,
          onToggleExpanded: () => $(e => !e)
        }) : (0, n.jsx)(O.GuildRoleSubscriptionCardBasicInfo, {
          listingId: s,
          isListingPublished: es
        }), ee && (0, n.jsxs)(n.Fragment, {
          children: [J && (0, n.jsx)("div", {
            className: D.divider
          }), B ? (0, n.jsx)(u.Button, {
            fullWidth: !0,
            look: u.Button.Looks.OUTLINED,
            color: u.Button.Colors.PRIMARY,
            disabled: !0,
            children: F ? P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
          }) : (0, n.jsx)(u.Tooltip, {
            text: L ? null : R,
            "aria-label": null !== (t = L && R) && void 0 !== t && t,
            children: e => (0, n.jsx)(p.default, {
              ...e,
              fullWidth: !0,
              disabled: !L || v,
              submitting: h,
              onClick: m,
              onlyShineOnHover: !0,
              children: P.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          }), (0, n.jsx)(u.Spacer, {
            size: 16
          }), (0, n.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            className: a()((!w || !G) && D.tierDescriptionTruncate),
            children: (0, n.jsx)("div", {
              ref: V,
              children: W
            })
          }), w && (0, n.jsx)(H, {
            isViewAll: G,
            onToggle: () => k(e => !e),
            showMoreText: ei
          })]
        })]
      }), ee && (0, n.jsx)(u.HeadingLevel, {
        children: (0, n.jsx)(y, {
          listingId: s,
          guildId: l
        })
      })]
    })]
  }) : null
}