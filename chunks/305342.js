t.d(n, {
  c: function() {
    return P
  }
}), t(47120);
var i = t(735250),
  l = t(470079),
  s = t(120356),
  r = t.n(s),
  a = t(442837),
  o = t(481060),
  u = t(131388),
  c = t(160404),
  d = t(351402),
  _ = t(153124),
  I = t(768581),
  E = t(817460),
  C = t(584825),
  m = t(290348),
  S = t(934826),
  N = t(768318),
  T = t(570533),
  L = t(971792),
  h = t(629262),
  R = t(761966),
  g = t(893729),
  v = t(838940),
  f = t(882101),
  x = t(11705),
  O = t(81273),
  A = t(293810),
  M = t(981631),
  j = t(689938),
  Z = t(359158);
let p = e => {
    let {
      benefits: n,
      header: t,
      guildId: s
    } = e, [r, a] = l.useState(!1), u = r ? n : n.slice(0, 5), c = n.length > 5, d = n.length - 5, I = j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({
      numTruncated: d
    }), C = (0, _.Dt)();
    return 0 === n.length ? null : (0, i.jsxs)("div", {
      className: Z.benefitsSection,
      children: [(0, i.jsx)(o.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: Z.sectionHeader,
        id: C,
        children: t
      }), (0, i.jsx)(o.Spacer, {
        size: 12
      }), (0, i.jsx)("ul", {
        className: Z.benefitsList,
        "aria-labelledby": C,
        children: u.map((e, n) => (0, i.jsx)("li", {
          children: (0, i.jsx)(v.Z, {
            guildId: s,
            benefit: e
          }, (0, E.ab)(e))
        }, n))
      }), c && (0, i.jsx)(B, {
        isViewAll: r,
        onToggle: () => a(e => !e),
        showMoreText: I
      })]
    })
  },
  U = e => {
    let {
      guildId: n,
      listingId: t
    } = e, l = (0, T.Z)(n), [s] = m.XZ(t, n), r = l.filter(e => s.has(e.id));
    return 0 === r.length ? null : (0, i.jsxs)("div", {
      className: Z.benefitsSection,
      children: [(0, i.jsx)(o.Heading, {
        variant: "text-xs/bold",
        color: "header-secondary",
        className: Z.sectionHeader,
        children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({
          count: r.length
        })
      }), (0, i.jsx)(o.Spacer, {
        size: 12
      }), (0, i.jsx)("div", {
        className: Z.emojiList,
        children: r.map((e, n) => {
          var t;
          return (0, i.jsx)(o.Tooltip, {
            text: e.name,
            "aria-label": !1,
            children: n => {
              var t;
              return (0, i.jsx)("img", {
                ...n,
                className: Z.emojiListEmoji,
                src: (t = e, I.ZP.getEmojiURL({
                  id: t.id,
                  animated: t.animated,
                  size: 24
                })),
                width: 24,
                height: 24,
                alt: e.name
              })
            }
          }, null !== (t = e.id) && void 0 !== t ? t : n)
        })
      })]
    })
  },
  P = e => {
    let {
      listingId: n,
      guildId: t,
      className: l
    } = e, s = (0, L.Z)(t, n), [a] = m.UE(n), u = (0, h.Z)(a), [c] = m.R7(n), d = m.qs(n, t), [_] = m.XZ(n, t);
    return null == s && 0 === u.length && 0 === c.length && 0 === _.size ? null : (0, i.jsxs)("div", {
      className: r()(Z.subscriptionPerks, l),
      children: [null != s && (0, i.jsxs)(o.HeadingLevel, {
        component: (0, i.jsx)(o.Heading, {
          variant: "text-xs/bold",
          color: "header-secondary",
          className: Z.sectionHeader,
          children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
        }),
        children: [(0, i.jsx)(o.Spacer, {
          size: 8
        }), (0, i.jsx)(g.Z, {
          role: d,
          guildId: t,
          className: Z.roleMessagePreview
        })]
      }), (0, i.jsx)(p, {
        header: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
        benefits: u,
        guildId: t
      }), (0, i.jsx)(p, {
        header: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
        benefits: c,
        guildId: t
      }), (0, i.jsx)(U, {
        guildId: t,
        listingId: n
      })]
    })
  },
  B = e => {
    let n, {
      onToggle: t,
      isViewAll: l,
      showMoreText: s
    } = e;
    return n = l ? (0, i.jsxs)(i.Fragment, {
      children: [j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION, (0, i.jsx)(o.ChevronSmallUpIcon, {
        size: "md",
        color: "currentColor",
        className: Z.toggleTruncationButtonIcon
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [s, (0, i.jsx)(o.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: Z.toggleTruncationButtonIcon
      })]
    }), (0, i.jsx)(o.Button, {
      look: o.Button.Looks.BLANK,
      size: o.Button.Sizes.NONE,
      className: Z.toggleTruncationButton,
      innerClassName: Z.toggleTruncationButtonInner,
      onClick: t,
      children: n
    })
  };
n.Z = e => {
  var n;
  let {
    listingId: t,
    guildId: s,
    groupListingId: _,
    analyticsLocation: I
  } = e, T = (0, C.jO)(t), {
    openModal: L,
    canOpenModal: h,
    cannotOpenReason: g,
    isCheckingTrialEligibility: v
  } = (0, O.Z)(T, s, _, I), p = (0, a.e7)([d.Z], () => d.Z.isSyncing), {
    activeSubscription: U,
    activeSubscriptionListing: D
  } = (0, S.Z)(_), b = (null == D ? void 0 : D.id) === t, G = (null == U ? void 0 : U.status) === M.O0b.CANCELED, [H, y] = l.useState(!1), [k, F] = l.useState(!1), w = l.useCallback(e => {
    let n = !1;
    null != e && (n = e.scrollHeight - e.clientHeight > 1), F(n)
  }, []), [V] = m._T(t), [z] = m.PK(t), [W] = m.TT(t), [Q] = m.F2(t), q = (0, N.Z)(s, t), Y = null != W && null == U && q, K = (0, u.Z)(A.iP), [J, X] = l.useState(!1), $ = J || !K, ee = (0, a.e7)([c.Z], () => c.Z.isViewingServerShop(s)), en = (null == T ? void 0 : T.published) === !0, et = (null == T ? void 0 : T.soft_deleted) === !0, ei = j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
  return (en || ee) && !et ? (0, i.jsxs)("article", {
    className: Z.container,
    "aria-label": V,
    children: [Y && (0, i.jsxs)("div", {
      className: r()(Z.tierTrialIndicator, Z.tierTopIndicator),
      children: [j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
        trialPeriodDuration: (0, E.iG)({
          interval: W.interval,
          interval_count: W.interval_count
        })
      }), (0, i.jsx)(o.Tooltip, {
        clickableOnMobile: !0,
        text: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({
          activeTrialUserLimit: null != Q ? Q : 0
        }),
        children: e => (0, i.jsx)(o.CircleInformationIcon, {
          size: "xs",
          color: "currentColor",
          className: Z.tierTrialIndicatorIcon,
          ...e
        })
      })]
    }), (0, i.jsxs)("div", {
      className: Y ? void 0 : Z.cardContainerWithoutTopIndicator,
      children: [(0, i.jsxs)("div", {
        className: Z.tierInfoContainer,
        children: [K ? (0, i.jsx)(x.e, {
          listingId: t,
          isListingPublished: en,
          expanded: $,
          onToggleExpanded: () => X(e => !e)
        }) : (0, i.jsx)(f.xv, {
          listingId: t,
          isListingPublished: en
        }), $ && (0, i.jsxs)(i.Fragment, {
          children: [K && (0, i.jsx)("div", {
            className: Z.divider
          }), b ? (0, i.jsx)(o.Button, {
            fullWidth: !0,
            look: o.Button.Looks.OUTLINED,
            color: o.Button.Colors.PRIMARY,
            disabled: !0,
            children: G ? j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
          }) : (0, i.jsx)(o.Tooltip, {
            text: h ? null : g,
            "aria-label": null !== (n = h && g) && void 0 !== n && n,
            children: e => (0, i.jsx)(R.Z, {
              ...e,
              fullWidth: !0,
              disabled: !h || p,
              submitting: v,
              onClick: L,
              onlyShineOnHover: !0,
              children: j.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
            })
          }), (0, i.jsx)(o.Spacer, {
            size: 16
          }), (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-normal",
            className: r()((!k || !H) && Z.tierDescriptionTruncate),
            children: (0, i.jsx)("div", {
              ref: w,
              children: z
            })
          }), k && (0, i.jsx)(B, {
            isViewAll: H,
            onToggle: () => y(e => !e),
            showMoreText: ei
          })]
        })]
      }), $ && (0, i.jsx)(o.HeadingLevel, {
        children: (0, i.jsx)(P, {
          listingId: t,
          guildId: s
        })
      })]
    })]
  }) : null
}