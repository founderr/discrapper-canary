n.d(t, {
    c: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(131388),
    u = n(313201),
    d = n(160404),
    m = n(351402),
    f = n(768581),
    h = n(817460),
    p = n(584825),
    g = n(290348),
    _ = n(934826),
    C = n(768318),
    E = n(570533),
    I = n(971792),
    x = n(629262),
    v = n(761966),
    N = n(893729),
    T = n(845970),
    S = n(882101),
    b = n(11705),
    A = n(81273),
    j = n(293810),
    Z = n(981631),
    R = n(388032),
    P = n(367993);
let y = (e) => {
        let { benefits: t, header: n, guildId: l } = e,
            [a, o] = r.useState(!1),
            c = a ? t : t.slice(0, 5),
            d = t.length > 5,
            m = t.length - 5,
            f = R.intl.formatToPlainString(R.t['XSdy7+'], { numTruncated: m }),
            p = (0, u.Dt)();
        return 0 === t.length
            ? null
            : (0, i.jsxs)('div', {
                  className: P.benefitsSection,
                  children: [
                      (0, i.jsx)(s.Heading, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: P.sectionHeader,
                          id: p,
                          children: n
                      }),
                      (0, i.jsx)(s.Spacer, { size: 12 }),
                      (0, i.jsx)('ul', {
                          className: P.benefitsList,
                          'aria-labelledby': p,
                          children: c.map((e, t) =>
                              (0, i.jsx)(
                                  'li',
                                  {
                                      children: (0, i.jsx)(
                                          T.Z,
                                          {
                                              guildId: l,
                                              benefit: e
                                          },
                                          (0, h.ab)(e)
                                      )
                                  },
                                  t
                              )
                          )
                      }),
                      d &&
                          (0, i.jsx)(M, {
                              isViewAll: a,
                              onToggle: () => o((e) => !e),
                              showMoreText: f
                          })
                  ]
              });
    },
    L = (e) => {
        let { guildId: t, listingId: n } = e,
            r = (0, E.Z)(t),
            [l] = g.XZ(n, t),
            a = r.filter((e) => l.has(e.id));
        return 0 === a.length
            ? null
            : (0, i.jsxs)('div', {
                  className: P.benefitsSection,
                  children: [
                      (0, i.jsx)(s.Heading, {
                          variant: 'text-xs/bold',
                          color: 'header-secondary',
                          className: P.sectionHeader,
                          children: R.intl.format(R.t.NAnXEh, { count: a.length })
                      }),
                      (0, i.jsx)(s.Spacer, { size: 12 }),
                      (0, i.jsx)('div', {
                          className: P.emojiList,
                          children: a.map((e, t) => {
                              var n;
                              return (0, i.jsx)(
                                  s.Tooltip,
                                  {
                                      text: e.name,
                                      'aria-label': !1,
                                      children: (t) => {
                                          var n;
                                          return (0, i.jsx)('img', {
                                              ...t,
                                              className: P.emojiListEmoji,
                                              src:
                                                  ((n = e),
                                                  f.ZP.getEmojiURL({
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
    O = (e) => {
        let { listingId: t, guildId: n, className: r } = e,
            l = (0, I.Z)(n, t),
            [o] = g.UE(t),
            c = (0, x.Z)(o),
            [u] = g.R7(t),
            d = g.qs(t, n),
            [m] = g.XZ(t, n);
        return null == l && 0 === c.length && 0 === u.length && 0 === m.size
            ? null
            : (0, i.jsxs)('div', {
                  className: a()(P.subscriptionPerks, r),
                  children: [
                      null != l &&
                          (0, i.jsxs)(s.HeadingLevel, {
                              component: (0, i.jsx)(s.Heading, {
                                  variant: 'text-xs/bold',
                                  color: 'header-secondary',
                                  className: P.sectionHeader,
                                  children: R.intl.string(R.t.FJZmY2)
                              }),
                              children: [
                                  (0, i.jsx)(s.Spacer, { size: 8 }),
                                  (0, i.jsx)(N.Z, {
                                      role: d,
                                      guildId: n,
                                      className: P.roleMessagePreview
                                  })
                              ]
                          }),
                      (0, i.jsx)(y, {
                          header: R.intl.string(R.t.LtfhAg),
                          benefits: c,
                          guildId: n
                      }),
                      (0, i.jsx)(y, {
                          header: R.intl.string(R.t['8oxWpK']),
                          benefits: u,
                          guildId: n
                      }),
                      (0, i.jsx)(L, {
                          guildId: n,
                          listingId: t
                      })
                  ]
              });
    },
    M = (e) => {
        let t,
            { onToggle: n, isViewAll: r, showMoreText: l } = e;
        return (
            (t = r
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          R.intl.string(R.t['r/xxPT']),
                          (0, i.jsx)(s.ChevronSmallUpIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: P.toggleTruncationButtonIcon
                          })
                      ]
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          l,
                          (0, i.jsx)(s.ChevronSmallDownIcon, {
                              size: 'md',
                              color: 'currentColor',
                              className: P.toggleTruncationButtonIcon
                          })
                      ]
                  })),
            (0, i.jsx)(s.Button, {
                look: s.Button.Looks.BLANK,
                size: s.Button.Sizes.NONE,
                className: P.toggleTruncationButton,
                innerClassName: P.toggleTruncationButtonInner,
                onClick: n,
                children: t
            })
        );
    };
t.Z = (e) => {
    var t;
    let { listingId: n, guildId: l, groupListingId: u, analyticsLocation: f } = e,
        E = (0, p.jO)(n),
        { openModal: I, canOpenModal: x, cannotOpenReason: N, isCheckingTrialEligibility: T } = (0, A.Z)(E, l, u, f),
        y = (0, o.e7)([m.Z], () => m.Z.isSyncing),
        { activeSubscription: L, activeSubscriptionListing: k } = (0, _.Z)(u),
        D = (null == k ? void 0 : k.id) === n,
        B = (null == L ? void 0 : L.status) === Z.O0b.CANCELED,
        [w, U] = r.useState(!1),
        [F, G] = r.useState(!1),
        V = r.useCallback((e) => {
            let t = !1;
            null != e && (t = e.scrollHeight - e.clientHeight > 1), G(t);
        }, []),
        [H] = g._T(n),
        [z] = g.PK(n),
        [W] = g.TT(n),
        [K] = g.F2(n),
        Y = (0, C.Z)(l, n),
        X = null != W && null == L && Y,
        Q = (0, c.Z)(j.iP),
        [q, J] = r.useState(!1),
        $ = q || !Q,
        ee = (0, o.e7)([d.Z], () => d.Z.isViewingServerShop(l)),
        et = (null == E ? void 0 : E.published) === !0,
        en = (null == E ? void 0 : E.soft_deleted) === !0,
        ei = R.intl.string(R.t.KzmEAw);
    return (et || ee) && !en
        ? (0, i.jsxs)('article', {
              className: P.container,
              'aria-label': H,
              children: [
                  X &&
                      (0, i.jsxs)('div', {
                          className: a()(P.tierTrialIndicator, P.tierTopIndicator),
                          children: [
                              R.intl.format(R.t.L2ouio, {
                                  trialPeriodDuration: (0, h.iG)({
                                      interval: W.interval,
                                      interval_count: W.interval_count
                                  })
                              }),
                              (0, i.jsx)(s.Tooltip, {
                                  clickableOnMobile: !0,
                                  text: R.intl.formatToPlainString(R.t.FYyR4u, { activeTrialUserLimit: null != K ? K : 0 }),
                                  children: (e) =>
                                      (0, i.jsx)(s.CircleInformationIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: P.tierTrialIndicatorIcon,
                                          ...e
                                      })
                              })
                          ]
                      }),
                  (0, i.jsxs)('div', {
                      className: X ? void 0 : P.cardContainerWithoutTopIndicator,
                      children: [
                          (0, i.jsxs)('div', {
                              className: P.tierInfoContainer,
                              children: [
                                  Q
                                      ? (0, i.jsx)(b.e, {
                                            listingId: n,
                                            isListingPublished: et,
                                            expanded: $,
                                            onToggleExpanded: () => J((e) => !e)
                                        })
                                      : (0, i.jsx)(S.xv, {
                                            listingId: n,
                                            isListingPublished: et
                                        }),
                                  $ &&
                                      (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              Q && (0, i.jsx)('div', { className: P.divider }),
                                              D
                                                  ? (0, i.jsx)(s.Button, {
                                                        fullWidth: !0,
                                                        look: s.Button.Looks.OUTLINED,
                                                        color: s.Button.Colors.PRIMARY,
                                                        disabled: !0,
                                                        children: B ? R.intl.string(R.t.iKHmu7) : R.intl.string(R.t.XvAuMj)
                                                    })
                                                  : (0, i.jsx)(s.Tooltip, {
                                                        text: x ? null : N,
                                                        'aria-label': null !== (t = x && N) && void 0 !== t && t,
                                                        children: (e) =>
                                                            (0, i.jsx)(v.Z, {
                                                                ...e,
                                                                fullWidth: !0,
                                                                disabled: !x || y,
                                                                submitting: T,
                                                                onClick: I,
                                                                onlyShineOnHover: !0,
                                                                children: R.intl.string(R.t.fM5Zsb)
                                                            })
                                                    }),
                                              (0, i.jsx)(s.Spacer, { size: 16 }),
                                              (0, i.jsx)(s.Text, {
                                                  variant: 'text-sm/normal',
                                                  color: 'text-normal',
                                                  className: a()((!F || !w) && P.tierDescriptionTruncate),
                                                  children: (0, i.jsx)('div', {
                                                      ref: V,
                                                      children: z
                                                  })
                                              }),
                                              F &&
                                                  (0, i.jsx)(M, {
                                                      isViewAll: w,
                                                      onToggle: () => U((e) => !e),
                                                      showMoreText: ei
                                                  })
                                          ]
                                      })
                              ]
                          }),
                          $ &&
                              (0, i.jsx)(s.HeadingLevel, {
                                  children: (0, i.jsx)(O, {
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
