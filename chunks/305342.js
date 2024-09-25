n.d(t, {
    c: function () {
        return y;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    u = n(131388),
    c = n(313201),
    d = n(160404),
    h = n(351402),
    _ = n(768581),
    f = n(817460),
    E = n(584825),
    p = n(290348),
    m = n(934826),
    C = n(768318),
    S = n(570533),
    I = n(971792),
    g = n(629262),
    T = n(761966),
    R = n(893729),
    N = n(838940),
    v = n(882101),
    x = n(11705),
    A = n(81273),
    L = n(293810),
    b = n(981631),
    O = n(689938),
    Z = n(367993);
let P = (e) => {
        let { benefits: t, header: n, guildId: l } = e,
            [s, a] = i.useState(!1),
            u = s ? t : t.slice(0, 5),
            d = t.length > 5,
            h = t.length - 5,
            _ = O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION_WITH_ITEMS.format({ numTruncated: h }),
            E = (0, c.Dt)();
        return 0 === t.length
            ? null
            : (0, r.jsxs)('div', {
                  className: Z.benefitsSection,
                  children: [
                      (0, r.jsx)(o.Heading, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: Z.sectionHeader,
                          id: E,
                          children: n
                      }),
                      (0, r.jsx)(o.Spacer, { size: 12 }),
                      (0, r.jsx)('ul', {
                          className: Z.benefitsList,
                          'aria-labelledby': E,
                          children: u.map((e, t) =>
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
    M = (e) => {
        let { guildId: t, listingId: n } = e,
            i = (0, S.Z)(t),
            [l] = p.XZ(n, t),
            s = i.filter((e) => l.has(e.id));
        return 0 === s.length
            ? null
            : (0, r.jsxs)('div', {
                  className: Z.benefitsSection,
                  children: [
                      (0, r.jsx)(o.Heading, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: Z.sectionHeader,
                          children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EMOJI_SECTION_TITLE.format({ count: s.length })
                      }),
                      (0, r.jsx)(o.Spacer, { size: 12 }),
                      (0, r.jsx)('div', {
                          className: Z.emojiList,
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
                                              className: Z.emojiListEmoji,
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
    y = (e) => {
        let { listingId: t, guildId: n, className: i } = e,
            l = (0, I.Z)(n, t),
            [a] = p.UE(t),
            u = (0, g.Z)(a),
            [c] = p.R7(t),
            d = p.qs(t, n),
            [h] = p.XZ(t, n);
        return null == l && 0 === u.length && 0 === c.length && 0 === h.size
            ? null
            : (0, r.jsxs)('div', {
                  className: s()(Z.subscriptionPerks, i),
                  children: [
                      null != l &&
                          (0, r.jsxs)(o.HeadingLevel, {
                              component: (0, r.jsx)(o.Heading, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: Z.sectionHeader,
                                  children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_MEMBER_PREVIEW
                              }),
                              children: [
                                  (0, r.jsx)(o.Spacer, { size: 8 }),
                                  (0, r.jsx)(R.Z, {
                                      role: d,
                                      guildId: n,
                                      className: Z.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, r.jsx)(P, {
                          header: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_EXCLUSIVE_CHANNELS_SECTION_TITLE,
                          benefits: u,
                          guildId: n
                      }),
                      (0, r.jsx)(P, {
                          header: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_ADDITIONAL_BENEFITS_SECTION_TITLE,
                          benefits: c,
                          guildId: n
                      }),
                      (0, r.jsx)(M, {
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
                          O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_LESS_DESCRIPTION,
                          (0, r.jsx)(o.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: Z.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          l,
                          (0, r.jsx)(o.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: Z.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, r.jsx)(o.Button, {
                look: o.Button.Looks.BLANK,
                size: o.Button.Sizes.NONE,
                className: Z.toggleTruncationButton,
                innerClassName: Z.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    };
t.Z = (e) => {
    var t;
    let { listingId: n, guildId: l, groupListingId: c, analyticsLocation: _ } = e,
        S = (0, E.jO)(n),
        { openModal: I, canOpenModal: g, cannotOpenReason: R, isCheckingTrialEligibility: N } = (0, A.Z)(S, l, c, _),
        P = (0, a.e7)([h.Z], () => h.Z.isSyncing),
        { activeSubscription: M, activeSubscriptionListing: U } = (0, m.Z)(c),
        D = (null == U ? void 0 : U.id) === n,
        B = (null == M ? void 0 : M.status) === b.O0b.CANCELED,
        [k, F] = i.useState(!1),
        [H, w] = i.useState(!1),
        G = i.useCallback((e) => {
            let t = !1;
            null != e && (t = e.scrollHeight - e.clientHeight > 1), w(t);
        }, []),
        [z] = p._T(n),
        [Q] = p.PK(n),
        [V] = p.TT(n),
        [q] = p.F2(n),
        W = (0, C.Z)(l, n),
        K = null != V && null == M && W,
        Y = (0, u.Z)(L.iP),
        [J, X] = i.useState(!1),
        $ = J || !Y,
        ee = (0, a.e7)([d.Z], () => d.Z.isViewingServerShop(l)),
        et = (null == S ? void 0 : S.published) === !0,
        en = (null == S ? void 0 : S.soft_deleted) === !0,
        er = O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_SHOW_MORE_DESCRIPTION;
    return (et || ee) && !en
        ? (0, r.jsxs)('article', {
              className: Z.container,
              'aria-label': z,
              children: [
                  K &&
                      (0, r.jsxs)('div', {
                          className: s()(Z.tierTrialIndicator, Z.tierTopIndicator),
                          children: [
                              O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_PERIOD.format({
                                  trialPeriodDuration: (0, f.iG)({
                                      interval: V.interval,
                                      interval_count: V.interval_count
                                  })
                              }),
                              (0, r.jsx)(o.Tooltip, {
                                  clickableOnMobile: !0,
                                  text: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TRIAL_DISCLAIMER.format({ activeTrialUserLimit: null != q ? q : 0 }),
                                  children: (e) =>
                                      (0, r.jsx)(o.CircleInformationIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: Z.tierTrialIndicatorIcon,
                                          ...e
                                      })
                              })
                          ]
                      }),
                  (0, r.jsxs)('div', {
                      className: K ? void 0 : Z.cardContainerWithoutTopIndicator,
                      children: [
                          (0, r.jsxs)('div', {
                              className: Z.tierInfoContainer,
                              children: [
                                  Y
                                      ? (0, r.jsx)(x.e, {
                                            listingId: n,
                                            isListingPublished: et,
                                            expanded: $,
                                            onToggleExpanded: () => X((e) => !e)
                                        })
                                      : (0, r.jsx)(v.xv, {
                                            listingId: n,
                                            isListingPublished: et
                                        }),
                                  $ &&
                                      (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              Y && (0, r.jsx)('div', { className: Z.divider }),
                                              D
                                                  ? (0, r.jsx)(o.Button, {
                                                        fullWidth: !0,
                                                        look: o.Button.Looks.OUTLINED,
                                                        color: o.Button.Colors.PRIMARY,
                                                        disabled: !0,
                                                        children: B ? O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBED_LABEL
                                                    })
                                                  : (0, r.jsx)(o.Tooltip, {
                                                        text: g ? null : R,
                                                        'aria-label': null !== (t = g && R) && void 0 !== t && t,
                                                        children: (e) =>
                                                            (0, r.jsx)(T.Z, {
                                                                ...e,
                                                                fullWidth: !0,
                                                                disabled: !g || P,
                                                                submitting: N,
                                                                onClick: I,
                                                                onlyShineOnHover: !0,
                                                                children: O.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
                                                            })
                                                    }),
                                              (0, r.jsx)(o.Spacer, { size: 16 }),
                                              (0, r.jsx)(o.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-normal',
                                                  className: s()((!H || !k) && Z.tierDescriptionTruncate),
                                                  children: (0, r.jsx)('div', {
                                                      ref: G,
                                                      children: Q
                                                  })
                                              }),
                                              H &&
                                                  (0, r.jsx)(j, {
                                                      isViewAll: k,
                                                      onToggle: () => F((e) => !e),
                                                      showMoreText: er
                                                  })
                                          ]
                                      })
                              ]
                          }),
                          $ &&
                              (0, r.jsx)(o.HeadingLevel, {
                                  children: (0, r.jsx)(y, {
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
