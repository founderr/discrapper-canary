"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionBenefits: function() {
    return B
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  s = n("120356"),
  r = n.n(s),
  l = n("442837"),
  u = n("481060"),
  o = n("131388"),
  d = n("160404"),
  c = n("351402"),
  f = n("153124"),
  E = n("86813"),
  _ = n("826026"),
  T = n("41542"),
  I = n("768581"),
  S = n("817460"),
  m = n("584825"),
  C = n("290348"),
  N = n("934826"),
  R = n("768318"),
  p = n("570533"),
  g = n("971792"),
  v = n("629262"),
  h = n("761966"),
  L = n("893729"),
  A = n("838940"),
  M = n("882101"),
  O = n("11705"),
  x = n("81273"),
  U = n("293810"),
  P = n("981631"),
  D = n("689938"),
  y = n("89267");
let j = e => {
    let {
      benefits: t,
      header: n,
      guildId: s
    } = e, [r, l] = a.useState(!1), o = r ? t : t.slice(0, 5), d = t.length > 5, c = t.length - 5, E = D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
      numTruncated: c
    }), _ = (0, f.useUID)();
    return 0 === t.length ? null : (0, i.jsxs)("div", {
      className: y.benefitsSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: y.sectionHeader,
        id: _,
        children: n
      }), (0, i.jsx)(u.Spacer, {
        size: 12
      }), (0, i.jsx)("ul", {
        className: y.benefitsList,
        "aria-labelledby": _,
        children: o.map((e, t) => (0, i.jsx)("li", {
          children: (0, i.jsx)(A.default, {
            guildId: s,
            benefit: e
          }, (0, S.getBenefitKey)(e))
        }, t))
      }), d && (0, i.jsx)(G, {
        isViewAll: r,
        onToggle: () => l(e => !e),
        showMoreText: E
      })]
    })
  },
  b = e => {
    let {
      guildId: t,
      listingId: n
    } = e, a = (0, p.default)(t), [s] = C.useTierEmojiIds(n, t), r = a.filter(e => s.has(e.id));
    return 0 === r.length ? null : (0, i.jsxs)("div", {
      className: y.benefitsSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: y.sectionHeader,
        children: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
          count: r.length
        })
      }), (0, i.jsx)(u.Spacer, {
        size: 12
      }), (0, i.jsx)("div", {
        className: y.emojiList,
        children: r.map((e, t) => {
          var n;
          return (0, i.jsx)(u.Tooltip, {
            text: e.name,
            "aria-label": !1,
            children: t => {
              var n;
              return (0, i.jsx)("img", {
                ...t,
                className: y.emojiListEmoji,
                src: (n = e, I.default.getEmojiURL({
                  id: n.id,
                  animated: n.animated,
                  size: 24
                })),
                width: 24,
                height: 24,
                alt: e.name
              })
            }
          }, null !== (n = e.id) && void 0 !== n ? n : t)
        })
      })]
    })
  },
  B = e => {
    let {
      listingId: t,
      guildId: n,
      className: a
    } = e, s = (0, g.default)(n, t), [l] = C.useChannelBenefits(t), o = (0, v.default)(l), [d] = C.useIntangibleBenefits(t), c = C.useRole(t, n), [f] = C.useTierEmojiIds(t, n);
    return null == s && 0 === o.length && 0 === d.length && 0 === f.size ? null : (0, i.jsxs)("div", {
      className: r()(y.subscriptionPerks, a),
      children: [null != s && (0, i.jsxs)(u.HeadingLevel, {
        component: (0, i.jsx)(u.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: y.sectionHeader,
          children: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
        }),
        children: [(0, i.jsx)(u.Spacer, {
          size: 8
        }), (0, i.jsx)(L.default, {
          role: c,
          guildId: n,
          className: y.roleMessagePreview
        })]
      }), (0, i.jsx)(j, {
        header: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
        benefits: o,
        guildId: n
      }), (0, i.jsx)(j, {
        header: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
        benefits: d,
        guildId: n
      }), (0, i.jsx)(b, {
        guildId: n,
        listingId: t
      })]
    })
  },
  G = e => {
    let t, {
      onToggle: n,
      isViewAll: a,
      showMoreText: s
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION, (0, i.jsx)(_.default, {
        className: y.toggleTruncationButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [s, (0, i.jsx)(E.default, {
        className: y.toggleTruncationButtonIcon
      })]
    }), (0, i.jsx)(u.Button, {
      look: u.Button.Looks.BLANK,
      size: u.Button.Sizes.NONE,
      className: y.toggleTruncationButton,
      innerClassName: y.toggleTruncationButtonInner,
      onClick: n,
      children: t
    })
  };
t.default = e => {
  var t;
  let {
    listingId: n,
    guildId: s,
    groupListingId: f,
    analyticsLocation: E
  } = e, _ = (0, m.useSubscriptionListing)(n), {
    openModal: I,
    canOpenModal: p,
    cannotOpenReason: g,
    isCheckingTrialEligibility: v
  } = (0, x.default)(_, s, f, E), L = (0, l.useStateFromStores)([c.default], () => c.default.isSyncing), {
    activeSubscription: A,
    activeSubscriptionListing: j
  } = (0, N.default)(f), b = (null == j ? void 0 : j.id) === n, F = (null == A ? void 0 : A.status) === P.SubscriptionStatusTypes.CANCELED, [H, w] = a.useState(!1), [k, Q] = a.useState(!1), V = a.useCallback(e => {
    let t = !1;
    null != e && (t = e.scrollHeight - e.clientHeight > 1), Q(t)
  }, []), [W] = C.useName(n), [Y] = C.useDescription(n), [q] = C.useTrialInterval(n), [K] = C.useTrialLimit(n), Z = (0, R.default)(s, n), z = null != q && null == A && Z, J = (0, o.default)(U.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), [X, $] = a.useState(!1), ee = X || !J, et = (0, l.useStateFromStores)([d.default], () => d.default.isViewingServerShop(s)), en = (null == _ ? void 0 : _.published) === !0, ei = (null == _ ? void 0 : _.soft_deleted) === !0, ea = D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (en || et) && !ei ? (0, i.jsxs)("article", {
    className: y.container,
    "aria-label": W,
    children: [z && (0, i.jsxs)("div", {
      className: r()(y.tierTrialIndicator, y.tierTopIndicator),
      children: [D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, S.formatPlanIntervalDuration)({
          interval: q.interval,
          interval_count: q.interval_count
        })
      }), (0, i.jsx)(u.Tooltip, {
        clickableOnMobile: !0,
        text: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != K ? K : 0
        }),
        children: e => (0, i.jsx)(T.default, {
          className: y.tierTrialIndicatorIcon,
          ...e
        })
      })]
    }), (0, i.jsxs)("div", {
      className: z ? void 0 : y.cardContainerWithoutTopIndicator,
      children: [(0, i.jsxs)("div", {
        className: y.tierInfoContainer,
        children: [J ? (0, i.jsx)(O.GuildRoleSubscriptionCollapsibleCardBasicInfo, {
          listingId: n,
          isListingPublished: en,
          expanded: ee,
          onToggleExpanded: () => $(e => !e)
        }) : (0, i.jsx)(M.GuildRoleSubscriptionCardBasicInfo, {
          listingId: n,
          isListingPublished: en
        }), ee && (0, i.jsxs)(i.Fragment, {
          children: [J && (0, i.jsx)("div", {
            className: y.divider
          }), b ? (0, i.jsx)(u.Button, {
            fullWidth: !0,
            look: u.Button.Looks.OUTLINED,
            color: u.Button.Colors.PRIMARY,
            disabled: !0,
            children: F ? D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
          }) : (0, i.jsx)(u.Tooltip, {
            text: p ? null : g,
            "aria-label": null !== (t = p && g) && void 0 !== t && t,
            children: e => (0, i.jsx)(h.default, {
              ...e,
              fullWidth: !0,
              disabled: !p || L,
              submitting: v,
              onClick: I,
              onlyShineOnHover: !0,
              children: D.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          }), (0, i.jsx)(u.Spacer, {
            size: 16
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            className: r()((!k || !H) && y.tierDescriptionTruncate),
            children: (0, i.jsx)("div", {
              ref: V,
              children: Y
            })
          }), k && (0, i.jsx)(G, {
            isViewAll: H,
            onToggle: () => w(e => !e),
            showMoreText: ea
          })]
        })]
      }), ee && (0, i.jsx)(u.HeadingLevel, {
        children: (0, i.jsx)(B, {
          listingId: n,
          guildId: s
        })
      })]
    })]
  }) : null
}