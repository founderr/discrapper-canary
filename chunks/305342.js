"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionBenefits: function() {
    return G
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  s = n("120356"),
  l = n.n(s),
  r = n("442837"),
  u = n("481060"),
  o = n("131388"),
  d = n("160404"),
  c = n("351402"),
  f = n("682864"),
  E = n("153124"),
  _ = n("86813"),
  T = n("826026"),
  I = n("41542"),
  S = n("768581"),
  C = n("817460"),
  m = n("584825"),
  N = n("290348"),
  R = n("934826"),
  v = n("768318"),
  g = n("570533"),
  p = n("971792"),
  L = n("629262"),
  h = n("761966"),
  A = n("893729"),
  O = n("838940"),
  M = n("882101"),
  x = n("11705"),
  U = n("81273"),
  D = n("293810"),
  P = n("981631"),
  j = n("689938"),
  y = n("89267");
let B = e => {
    let {
      benefits: t,
      header: n,
      guildId: s
    } = e, [l, r] = a.useState(!1), o = l ? t : t.slice(0, 5), d = t.length > 5, c = t.length - 5, _ = j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
      numTruncated: c
    }), T = (0, E.useUID)();
    return 0 === t.length ? null : (0, i.jsxs)("div", {
      className: y.benefitsSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: y.sectionHeader,
        id: T,
        children: n
      }), (0, i.jsx)(f.default, {
        size: 12
      }), (0, i.jsx)("ul", {
        className: y.benefitsList,
        "aria-labelledby": T,
        children: o.map((e, t) => (0, i.jsx)("li", {
          children: (0, i.jsx)(O.default, {
            guildId: s,
            benefit: e
          }, (0, C.getBenefitKey)(e))
        }, t))
      }), d && (0, i.jsx)(F, {
        isViewAll: l,
        onToggle: () => r(e => !e),
        showMoreText: _
      })]
    })
  },
  b = e => {
    let {
      guildId: t,
      listingId: n
    } = e, a = (0, g.default)(t), [s] = N.useTierEmojiIds(n, t), l = a.filter(e => s.has(e.id));
    return 0 === l.length ? null : (0, i.jsxs)("div", {
      className: y.benefitsSection,
      children: [(0, i.jsx)(u.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: y.sectionHeader,
        children: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
          count: l.length
        })
      }), (0, i.jsx)(f.default, {
        size: 12
      }), (0, i.jsx)("div", {
        className: y.emojiList,
        children: l.map((e, t) => {
          var n;
          return (0, i.jsx)(u.Tooltip, {
            text: e.name,
            "aria-label": !1,
            children: t => {
              var n;
              return (0, i.jsx)("img", {
                ...t,
                className: y.emojiListEmoji,
                src: (n = e, S.default.getEmojiURL({
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
  G = e => {
    let {
      listingId: t,
      guildId: n,
      className: a
    } = e, s = (0, p.default)(n, t), [r] = N.useChannelBenefits(t), o = (0, L.default)(r), [d] = N.useIntangibleBenefits(t), c = N.useRole(t, n), [E] = N.useTierEmojiIds(t, n);
    return null == s && 0 === o.length && 0 === d.length && 0 === E.size ? null : (0, i.jsxs)("div", {
      className: l()(y.subscriptionPerks, a),
      children: [null != s && (0, i.jsxs)(u.HeadingLevel, {
        component: (0, i.jsx)(u.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: y.sectionHeader,
          children: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
        }),
        children: [(0, i.jsx)(f.default, {
          size: 8
        }), (0, i.jsx)(A.default, {
          role: c,
          guildId: n,
          className: y.roleMessagePreview
        })]
      }), (0, i.jsx)(B, {
        header: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
        benefits: o,
        guildId: n
      }), (0, i.jsx)(B, {
        header: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
        benefits: d,
        guildId: n
      }), (0, i.jsx)(b, {
        guildId: n,
        listingId: t
      })]
    })
  },
  F = e => {
    let t, {
      onToggle: n,
      isViewAll: a,
      showMoreText: s
    } = e;
    return t = a ? (0, i.jsxs)(i.Fragment, {
      children: [j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION, (0, i.jsx)(T.default, {
        className: y.toggleTruncationButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [s, (0, i.jsx)(_.default, {
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
    groupListingId: E,
    analyticsLocation: _
  } = e, T = (0, m.useSubscriptionListing)(n), {
    openModal: S,
    canOpenModal: g,
    cannotOpenReason: p,
    isCheckingTrialEligibility: L
  } = (0, U.default)(T, s, E, _), A = (0, r.useStateFromStores)([c.default], () => c.default.isSyncing), {
    activeSubscription: O,
    activeSubscriptionListing: B
  } = (0, R.default)(E), b = (null == B ? void 0 : B.id) === n, H = (null == O ? void 0 : O.status) === P.SubscriptionStatusTypes.CANCELED, [w, k] = a.useState(!1), [Q, V] = a.useState(!1), W = a.useCallback(e => {
    let t = !1;
    null != e && (t = e.scrollHeight - e.clientHeight > 1), V(t)
  }, []), [Y] = N.useName(n), [q] = N.useDescription(n), [Z] = N.useTrialInterval(n), [z] = N.useTrialLimit(n), K = (0, v.default)(s, n), J = null != Z && null == O && K, X = (0, o.default)(D.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), [$, ee] = a.useState(!1), et = $ || !X, en = (0, r.useStateFromStores)([d.default], () => d.default.isViewingServerShop(s)), ei = (null == T ? void 0 : T.published) === !0, ea = (null == T ? void 0 : T.soft_deleted) === !0, es = j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (ei || en) && !ea ? (0, i.jsxs)("article", {
    className: y.container,
    "aria-label": Y,
    children: [J && (0, i.jsxs)("div", {
      className: l()(y.tierTrialIndicator, y.tierTopIndicator),
      children: [j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, C.formatPlanIntervalDuration)({
          interval: Z.interval,
          interval_count: Z.interval_count
        })
      }), (0, i.jsx)(u.Tooltip, {
        clickableOnMobile: !0,
        text: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != z ? z : 0
        }),
        children: e => (0, i.jsx)(I.default, {
          className: y.tierTrialIndicatorIcon,
          ...e
        })
      })]
    }), (0, i.jsxs)("div", {
      className: J ? void 0 : y.cardContainerWithoutTopIndicator,
      children: [(0, i.jsxs)("div", {
        className: y.tierInfoContainer,
        children: [X ? (0, i.jsx)(x.GuildRoleSubscriptionCollapsibleCardBasicInfo, {
          listingId: n,
          isListingPublished: ei,
          expanded: et,
          onToggleExpanded: () => ee(e => !e)
        }) : (0, i.jsx)(M.GuildRoleSubscriptionCardBasicInfo, {
          listingId: n,
          isListingPublished: ei
        }), et && (0, i.jsxs)(i.Fragment, {
          children: [X && (0, i.jsx)("div", {
            className: y.divider
          }), b ? (0, i.jsx)(u.Button, {
            fullWidth: !0,
            look: u.Button.Looks.OUTLINED,
            color: u.Button.Colors.PRIMARY,
            disabled: !0,
            children: H ? j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
          }) : (0, i.jsx)(u.Tooltip, {
            text: g ? null : p,
            "aria-label": null !== (t = g && p) && void 0 !== t && t,
            children: e => (0, i.jsx)(h.default, {
              ...e,
              fullWidth: !0,
              disabled: !g || A,
              submitting: L,
              onClick: S,
              onlyShineOnHover: !0,
              children: j.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          }), (0, i.jsx)(f.default, {
            size: 16
          }), (0, i.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            className: l()((!Q || !w) && y.tierDescriptionTruncate),
            children: (0, i.jsx)("div", {
              ref: W,
              children: q
            })
          }), Q && (0, i.jsx)(F, {
            isViewAll: w,
            onToggle: () => k(e => !e),
            showMoreText: es
          })]
        })]
      }), et && (0, i.jsx)(u.HeadingLevel, {
        children: (0, i.jsx)(G, {
          listingId: n,
          guildId: s
        })
      })]
    })]
  }) : null
}