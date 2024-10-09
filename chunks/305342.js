n.d(t, {
    c: function () {
        return M;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(131388),
    u = n(313201),
    d = n(160404),
    h = n(351402),
    _ = n(768581),
    f = n(817460),
    E = n(584825),
    p = n(290348),
    m = n(934826),
    I = n(768318),
    C = n(570533),
    S = n(971792),
    g = n(629262),
    R = n(761966),
    T = n(893729),
    N = n(838940),
    x = n(882101),
    v = n(11705),
    b = n(81273),
    L = n(293810),
    O = n(981631),
    A = n(689938),
    P = n(367993);
let Z = (e) => {
        let { benefits: t, header: n, guildId: l } = e,
            [s, a] = i.useState(!1),
            c = s ? t : t.slice(0, 5),
            d = t.length > 5,
            h = t.length - 5,
            _ = A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({ numTruncated: h }),
            E = (0, u.Dt)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)('div', {
                  className: P.benefitsSection,
                  children: [
                      (0, r.jsx)(o.Heading, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: P.sectionHeader,
                          id: E,
                          children: n
                      }),
                      (0, r.jsx)(o.Spacer, { size: 12 }),
                      (0, r.jsx)('ul', {
                          className: P.benefitsList,
                          'aria-labelledby': E,
                          children: c.map((e, t) =>
                              (0, r.jsx)(
                                  'li',
                                  {
                                      children: (0, r.jsx)(
                                          N.Z,
                                          {
                                              guildId: l,
                                              benefit: e
                                          },
                                          (0, f.ab)(e)
                                      )
                                  },
                                  t
                              )
                          )
                      }),
                      d &&
                          (0, r.jsx)(j, {
                              isViewAll: s,
                              onToggle: () => a((e) => !e),
                              showMoreText: _
                          })
                  ]
              });
    },
    y = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, C.Z)(t),
            [l] = p.XZ(n, t),
            s = i.filter((e) => l.has(e.id));
        return 0 === s.length
            ? null
            : (0, r.jsxs)('div', {
                  className: P.benefitsSection,
                  children: [
                      (0, r.jsx)(o.Heading, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: P.sectionHeader,
                          children: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({ count: s.length })
                      }),
                      (0, r.jsx)(o.Spacer, { size: 12 }),
                      (0, r.jsx)('div', {
                          className: P.emojiList,
                          children: s.map((e, t) => {
                              var n;
                              return (0, r.jsx)(
                                  o.Tooltip,
                                  {
                                      text: e.name,
                                      'aria-label': !1,
                                      children: (t) => {
                                          var n;
                                          return (0, r.jsx)('img', {
                                              ...t,
                                              className: P.emojiListEmoji,
                                              src:
                                                  ((n = e),
                                                  _.ZP.getEmojiURL({
                                                      id: n.id,
                                                      animated: n.animated,
                                                      size: 24
                                                  })),
                                              width: 24,
                                              height: 24,
                                              alt: e.name
                                          });
                                      }
                                  },
                                  null !== (n = e.id) && void 0 !== n ? n : t
                              );
                          })
                      })
                  ]
              });
    },
    M = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            l = (0, S.Z)(n, t),
            [a] = p.UE(t),
            c = (0, g.Z)(a),
            [u] = p.R7(t),
            d = p.qs(t, n),
            [h] = p.XZ(t, n);
        return null == l && 0 === c.length && 0 === u.length && 0 === h.size
            ? null
            : (0, r.jsxs)('div', {
                  className: s()(P.subscriptionPerks, i),
                  children: [
                      null != l &&
                          (0, r.jsxs)(o.HeadingLevel, {
                              component: (0, r.jsx)(o.Heading, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: P.sectionHeader,
                                  children: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
                              }),
                              children: [
                                  (0, r.jsx)(o.Spacer, { size: 8 }),
                                  (0, r.jsx)(T.Z, {
                                      role: d,
                                      guildId: n,
                                      className: P.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, r.jsx)(Z, {
                          header: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
                          benefits: c,
                          guildId: n
                      }),
                      (0, r.jsx)(Z, {
                          header: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
                          benefits: u,
                          guildId: n
                      }),
                      (0, r.jsx)(y, {
                          guildId: n,
                          listingId: t
                      })
                  ]
              });
    },
    j = (e) => {
        let t,
            { onToggle: n, isViewAll: i, showMoreText: l } = e;
        return (
            (t = i
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION,
                          (0, r.jsx)(o.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: P.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          l,
                          (0, r.jsx)(o.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: P.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, r.jsx)(o.Button, {
                look: o.Button.Looks.BLANK,
                size: o.Button.Sizes.NONE,
                className: P.toggleTruncationButton,
                innerClassName: P.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    };
t.Z = (e) => {
    var t;
    let { listingId: n, guildId: l, groupListingId: u, analyticsLocation: _ } = e,
        C = (0, E.jO)(n),
        { openModal: S, canOpenModal: g, cannotOpenReason: T, isCheckingTrialEligibility: N } = (0, b.Z)(C, l, u, _),
        Z = (0, a.e7)([h.Z], () => h.Z.isSyncing),
        { activeSubscription: y, activeSubscriptionListing: U } = (0, m.Z)(u),
        D = (null == U ? void 0 : U.id) === n,
        B = (null == y ? void 0 : y.status) === O.O0b.CANCELED,
        [F, k] = i.useState(!1),
        [H, w] = i.useState(!1),
        G = i.useCallback((e) => {
            let t = !1;
            null != e && (t = e.scrollHeight - e.clientHeight > 1), w(t);
        }, []),
        [z] = p._T(n),
        [W] = p.PK(n),
        [V] = p.TT(n),
        [Y] = p.F2(n),
        K = (0, I.Z)(l, n),
        Q = null != V && null == y && K,
        q = (0, c.Z)(L.iP),
        [X, J] = i.useState(!1),
        $ = X || !q,
        ee = (0, a.e7)([d.Z], () => d.Z.isViewingServerShop(l)),
        et = (null == C ? void 0 : C.published) === !0,
        en = (null == C ? void 0 : C.soft_deleted) === !0,
        er = A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
    return (et || ee) && !en
        ? (0, r.jsxs)('article', {
              className: P.container,
              'aria-label': z,
              children: [
                  Q &&
                      (0, r.jsxs)('div', {
                          className: s()(P.tierTrialIndicator, P.tierTopIndicator),
                          children: [
                              A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
                                  trialPeriodDuration: (0, f.iG)({
                                      interval: V.interval,
                                      interval_count: V.interval_count
                                  })
                              }),
                              (0, r.jsx)(o.Tooltip, {
                                  clickableOnMobile: !0,
                                  text: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({ activeTrialUserLimit: null != Y ? Y : 0 }),
                                  children: (e) =>
                                      (0, r.jsx)(o.CircleInformationIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: P.tierTrialIndicatorIcon,
                                          ...e
                                      })
                              })
                          ]
                      }),
                  (0, r.jsxs)('div', {
                      className: Q ? void 0 : P.cardContainerWithoutTopIndicator,
                      children: [
                          (0, r.jsxs)('div', {
                              className: P.tierInfoContainer,
                              children: [
                                  q
                                      ? (0, r.jsx)(v.e, {
                                            listingId: n,
                                            isListingPublished: et,
                                            expanded: $,
                                            onToggleExpanded: () => J((e) => !e)
                                        })
                                      : (0, r.jsx)(x.xv, {
                                            listingId: n,
                                            isListingPublished: et
                                        }),
                                  $ &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              q && (0, r.jsx)('div', { className: P.divider }),
                                              D
                                                  ? (0, r.jsx)(o.Button, {
                                                        fullWidth: !0,
                                                        look: o.Button.Looks.OUTLINED,
                                                        color: o.Button.Colors.PRIMARY,
                                                        disabled: !0,
                                                        children: B ? A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
                                                    })
                                                  : (0, r.jsx)(o.Tooltip, {
                                                        text: g ? null : T,
                                                        'aria-label': null !== (t = g && T) && void 0 !== t && t,
                                                        children: (e) =>
                                                            (0, r.jsx)(R.Z, {
                                                                ...e,
                                                                fullWidth: !0,
                                                                disabled: !g || Z,
                                                                submitting: N,
                                                                onClick: S,
                                                                onlyShineOnHover: !0,
                                                                children: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                                            })
                                                    }),
                                              (0, r.jsx)(o.Spacer, { size: 16 }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-normal',
                                                  className: s()((!H || !F) && P.tierDescriptionTruncate),
                                                  children: (0, r.jsx)('div', {
                                                      ref: G,
                                                      children: W
                                                  })
                                              }),
                                              H &&
                                                  (0, r.jsx)(j, {
                                                      isViewAll: F,
                                                      onToggle: () => k((e) => !e),
                                                      showMoreText: er
                                                  })
                                          ]
                                      })
                              ]
                          }),
                          $ &&
                              (0, r.jsx)(o.HeadingLevel, {
                                  children: (0, r.jsx)(M, {
                                      listingId: n,
                                      guildId: l
                                  })
                              })
                      ]
                  })
              ]
          })
        : null;
};
