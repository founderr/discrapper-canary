n.d(t, {
    Az: function () {
        return K;
    },
    Oe: function () {
        return z;
    },
    UA: function () {
        return Q;
    },
    n_: function () {
        return X;
    },
    vk: function () {
        return q;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(990547),
    l = n(442837),
    u = n(507274),
    c = n(481060),
    d = n(749210),
    f = n(596454),
    _ = n(100527),
    p = n(906732),
    h = n(213609),
    m = n(600164),
    g = n(686546),
    E = n(111028),
    v = n(738774),
    b = n(785896),
    I = n(231053),
    T = n(944386),
    S = n(565138),
    y = n(372769),
    A = n(889564),
    N = n(687476),
    C = n(761966),
    R = n(563927),
    O = n(98278),
    D = n(197115),
    L = n(703656),
    x = n(944486),
    w = n(914010),
    M = n(594174),
    P = n(626135),
    k = n(768581),
    U = n(900849),
    B = n(74538),
    G = n(886132),
    Z = n(524444),
    F = n(981631),
    V = n(176505),
    j = n(474936),
    H = n(388032),
    Y = n(507444);
let W = () => ({
        page: null != (0, l.e7)([w.Z], () => w.Z.getGuildId()) ? F.ZY5.GUILD_CHANNEL : F.ZY5.DM_CHANNEL,
        section: F.jXE.EMOJI_UPSELL_POPOUT
    }),
    K = (e) => {
        let { node: t } = e;
        (0, T.u)({
            emojiId: t.emojiId,
            currentGuildId: w.Z.getGuildId()
        });
        let n = (0, R.Z)(t.name);
        return (0, r.jsx)(u.V, {
            children: (0, r.jsx)(Z.W_, {
                children: (0, r.jsxs)(m.Z, {
                    className: Y.emojiSection,
                    children: [
                        (0, r.jsx)(f.Z, {
                            emojiName: t.name,
                            className: Y.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: 'jumbo'
                        }),
                        (0, r.jsxs)(m.Z, {
                            direction: m.Z.Direction.VERTICAL,
                            justify: m.Z.Justify.CENTER,
                            className: Y.truncatingText,
                            children: [
                                (0, r.jsx)(c.Text, {
                                    className: Y.__invalid_emojiName,
                                    variant: 'text-md/semibold',
                                    children: (0, r.jsx)(E.Z, { children: n })
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    children: H.intl.string(H.t.sXdH8f)
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    z = (e) => {
        let { expressionSourceGuild: t, hasJoinedExpressionSourceGuild: n, isDisplayingJoinGuildButtonInPopout: i } = e,
            { id: a, icon: o, name: l } = t,
            u = k.ZP.getGuildIconURL({
                id: a,
                icon: o,
                size: 32,
                canAnimate: !0
            }),
            d = (n = null == n || n) || t.isDiscoverable(),
            f = () => {
                t.isDiscoverable() ? (0, U.Ub)(a, {}) : n && (0, L.uL)(F.Z5c.CHANNEL(a, x.Z.getChannelId(a)));
            },
            _ = t.isDiscoverable() && null != t.presenceCount,
            p = () => {
                let e = !i && !n;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: H.intl.format(H.t['LC+S+v'], { membersOnline: t.presenceCount })
                        }),
                        (0, r.jsx)('div', { className: Y.dotSeparator }),
                        e
                            ? (0, r.jsx)(c.Clickable, {
                                  className: Y.joinGuildLink,
                                  onClick: f,
                                  children: (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-link',
                                      children: H.intl.string(H.t.riu2R0)
                                  })
                              })
                            : (0, r.jsx)(c.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: H.intl.string(H.t.inyJqK)
                              })
                    ]
                });
            };
        return (0, r.jsxs)(m.Z, {
            align: m.Z.Align.CENTER,
            children: [
                (0, r.jsx)(g.ZP, {
                    mask: g.ZP.Masks.SQUIRCLE,
                    width: 32,
                    height: 32,
                    className: Y.__invalid_guildIconContainer,
                    children:
                        null != u && d
                            ? (0, r.jsxs)(c.Clickable, {
                                  'aria-label': l,
                                  onClick: f,
                                  children: [
                                      (0, r.jsx)('img', {
                                          src: u,
                                          alt: '',
                                          className: Y.guildIcon
                                      }),
                                      ' :'
                                  ]
                              })
                            : (0, r.jsx)(S.Z, {
                                  size: S.Z.Sizes.SMALL,
                                  className: Y.guildIconNotClickable,
                                  guild: t
                              })
                }),
                (0, r.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    className: s()(Y.__invalid_guildInformation, Y.truncatingText),
                    children: [
                        (0, r.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, r.jsx)(y.Z, {
                                    guild: t,
                                    className: Y.guildBadge
                                }),
                                d
                                    ? (0, r.jsx)(c.Clickable, {
                                          onClick: f,
                                          className: Y.truncatingText,
                                          children: (0, r.jsx)(c.Heading, {
                                              className: Y.guildName,
                                              variant: 'heading-md/semibold',
                                              children: (0, r.jsx)(E.Z, { children: l })
                                          })
                                      })
                                    : (0, r.jsx)(c.Heading, {
                                          variant: 'heading-md/semibold',
                                          children: (0, r.jsx)(E.Z, { children: l })
                                      })
                            ]
                        }),
                        (0, r.jsx)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: _
                                ? p()
                                : (0, r.jsx)(c.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: H.intl.string(H.t.H29mx8)
                                  })
                        })
                    ]
                })
            ]
        });
    },
    q = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: i, nonce: a } = e,
            {
                expressionSourceGuild: s,
                expressionSourceApplication: o,
                sourceType: l,
                joinedEmojiSourceGuildRecord: c,
                emoji: d,
                isFetching: f
            } = (0, b.i)({
                emojiId: t.emojiId,
                refreshPositionKey: i
            });
        return f
            ? (0, r.jsx)(Z.SE, {})
            : (0, r.jsx)(u.V, {
                  'aria-label': t.name,
                  children: (0, r.jsx)(Q, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: o,
                      guildEmoji: null != d ? d : void 0,
                      expressionSourceGuild: s,
                      joinedEmojiSourceGuildRecord: c,
                      closePopout: n,
                      onToggleShowMoreEmojis: i,
                      demoMode: !1,
                      nonce: a
                  })
              });
    },
    Q = (e) => {
        var t, n, a;
        let { node: u, sourceType: g, expressionSourceApplication: b, expressionSourceGuild: S, joinedEmojiSourceGuildRecord: y, closePopout: R, onToggleShowMoreEmojis: L, guildEmoji: x, demoMode: k = !1, nonce: U } = e,
            K = (0, l.e7)([M.default], () => M.default.getCurrentUser()),
            q = (0, l.e7)([w.Z], () => w.Z.getGuildId()),
            Q = B.ZP.isPremium(K),
            J = null != q && (q === (null == S ? void 0 : S.id) || q === (null == y ? void 0 : y.id)),
            $ = null != y,
            ee = null !== (t = null == S ? void 0 : S.isDiscoverable()) && void 0 !== t && t;
        k && ((Q = !0), (ee = !0), ($ = !1), (J = !1));
        let et = W(),
            {
                isRoleSubscriptionEmoji: en,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ei
            } = i.useMemo(
                () =>
                    null == x
                        ? {
                              isRoleSubscriptionEmoji: !1,
                              isUnusableRoleSubscriptionEmoji: !1,
                              userIsRoleSubscriber: !1
                          }
                        : {
                              isRoleSubscriptionEmoji: A.yH(x),
                              isUnusableRoleSubscriptionEmoji: A.Fv(x, null != q ? q : void 0),
                              userIsRoleSubscriber: N.Z.getUserSubscriptionRoles(x.guildId).size > 0
                          },
                [x, q]
            ),
            ea = !!er && (0, v.Ol)(null == x ? void 0 : x.guildId),
            { analyticsLocations: es } = (0, p.ZP)(_.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, h.Z)(
            {
                type: o.ImpressionTypes.MODAL,
                name: o.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: es,
                    emoji_guild_id: null !== (n = null == x ? void 0 : x.guildId) && void 0 !== n ? n : null,
                    emoji_id: null !== (a = null == x ? void 0 : x.id) && void 0 !== a ? a : null
                }
            },
            { disableTrack: !en }
        );
        let eo = w.Z.getGuildId(),
            el = (0, G.a)({
                sourceType: g,
                expressionSourceApplication: b,
                isPremium: Q,
                hasJoinedEmojiSourceGuild: $,
                isRoleSubscriptionEmoji: en,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ei,
                emojiComesFromCurrentGuild: J,
                isDiscoverable: ee,
                shouldHideRoleSubscriptionCTA: ea,
                onOpenPremiumSettings: () => {
                    R(),
                        P.default.track(F.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_page: et.page,
                            location_section: et.section
                        }),
                        (0, O.z)();
                }
            }),
            eu = $ && er && !ea && ((Q && en) || !Q),
            ec = el.emojiDescription,
            ed = (0, T.u)({
                emojiId: u.emojiId,
                currentGuildId: eo,
                popoutData: el,
                emojiSourceGuildId: null == S ? void 0 : S.id,
                nonce: U,
                demoMode: k
            }),
            ef = el.type === G.$.JOIN_GUILD,
            e_ = el.type === G.$.GET_PREMIUM,
            [ep, eh] = i.useState(!1),
            em = ee || ($ && !J) || null != S;
        return (0, r.jsxs)(Z.W_, {
            className: Y.popoutContent,
            children: [
                (() => {
                    let e = async () => {
                            if (k || null == S || $) return;
                            R();
                            let e = S.id;
                            try {
                                await d.Z.joinGuild(e), d.Z.transitionToGuildSync(e);
                            } catch {}
                        },
                        t = !$ && ee;
                    return (0, r.jsxs)('div', {
                        className: Y.emojiSection,
                        children: [
                            (0, r.jsxs)(m.Z, {
                                children: [
                                    (0, r.jsx)(f.Z, {
                                        className: Y.primaryEmoji,
                                        emojiId: u.emojiId,
                                        emojiName: u.name,
                                        animated: u.animated,
                                        size: 'jumbo'
                                    }),
                                    (0, r.jsxs)(m.Z, {
                                        direction: m.Z.Direction.VERTICAL,
                                        justify: m.Z.Justify.CENTER,
                                        className: Y.truncatingText,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/semibold',
                                                children: (0, r.jsx)(E.Z, { children: u.name })
                                            }),
                                            null != ec &&
                                                (0, r.jsx)(c.Text, {
                                                    variant: 'text-sm/normal',
                                                    children: ec
                                                })
                                        ]
                                    })
                                ]
                            }),
                            e_
                                ? (0, r.jsx)(D.Z, {
                                      className: Y.ctaButton,
                                      subscriptionTier: j.Si.TIER_2,
                                      size: c.Button.Sizes.SMALL,
                                      fullWidth: !0,
                                      buttonText: el.text,
                                      onSubscribeModalClose: (t) => (t ? e() : R()),
                                      postSuccessGuild: t && null != S ? S : void 0,
                                      premiumModalAnalyticsLocation: et
                                  })
                                : ef
                                  ? (0, r.jsx)(c.Button, {
                                        size: c.Button.Sizes.SMALL,
                                        className: Y.ctaButton,
                                        color: c.ButtonColors.BRAND,
                                        fullWidth: !0,
                                        onClick: e,
                                        children: el.text
                                    })
                                  : void 0,
                            eu &&
                                (0, r.jsx)(C.Z, {
                                    className: Y.ctaButton,
                                    size: c.Button.Sizes.SMALL,
                                    fullWidth: !0,
                                    onClick: () => {
                                        R(), (null == y ? void 0 : y.id) != null && d.Z.transitionToGuildSync(y.id, { sourceLocationStack: [_.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] }, V.oC.ROLE_SUBSCRIPTIONS);
                                    },
                                    children: ei ? H.intl.string(H.t.yma8Vl) : H.intl.string(H.t.nN2DIi)
                                })
                        ]
                    });
                })(),
                em &&
                    (() => {
                        var e, t;
                        let n = null != S && !$ && ee && (null !== (t = null == S ? void 0 : null === (e = S.emojis) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) > 1,
                            i = () => {
                                if (!!n) null == L || L(), !ep && !k && P.default.track(F.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ed), eh(!ep);
                            };
                        return (0, r.jsxs)('div', {
                            className: Y.guildSection,
                            children: [
                                (0, r.jsx)(c.FormTitle, {
                                    className: Y.guildTitle,
                                    children: $ ? H.intl.string(H.t.ohTzZG) : H.intl.string(H.t['eLfh+f'])
                                }),
                                (0, r.jsx)(z, {
                                    expressionSourceGuild: null != S ? S : I.JO.createFromGuildRecord(y),
                                    hasJoinedExpressionSourceGuild: $,
                                    isDisplayingJoinGuildButtonInPopout: ef
                                }),
                                n &&
                                    (0, r.jsxs)(r.Fragment, {
                                        children: [
                                            (() => {
                                                let e = H.intl.string(H.t.pnsAS0);
                                                return (0, r.jsx)(c.Clickable, {
                                                    onClick: i,
                                                    className: Y.showMoreEmojis,
                                                    children: (0, r.jsxs)(m.Z, {
                                                        children: [
                                                            (0, r.jsx)(c.Text, {
                                                                className: Y.__invalid_showMoreEmojisLabel,
                                                                'aria-label': e,
                                                                variant: 'text-xs/normal',
                                                                color: 'none',
                                                                children: e
                                                            }),
                                                            (0, r.jsx)(c.ChevronSmallDownIcon, {
                                                                size: 'md',
                                                                color: 'currentColor',
                                                                className: s()(Y.showMoreEmojisArrow, { [Y.showMoreEmojisArrowCollapsed]: !ep })
                                                            })
                                                        ]
                                                    })
                                                });
                                            })(),
                                            null != u.emojiId &&
                                                ep &&
                                                (0, r.jsx)(X, {
                                                    emojiId: u.emojiId,
                                                    expressionSourceGuild: S,
                                                    popoutData: el,
                                                    onClose: R,
                                                    hasJoinedEmojiSourceGuild: $,
                                                    isDisplayingButtonInTopSection: ef || e_
                                                })
                                        ]
                                    })
                            ]
                        });
                    })()
            ]
        });
    },
    X = (e) => {
        var t;
        let { emojiId: n, expressionSourceGuild: i, hasJoinedEmojiSourceGuild: a, popoutData: s, onClose: o, isDisplayingButtonInTopSection: l } = e,
            u = (null !== (t = null == i ? void 0 : i.emojis) && void 0 !== t ? t : [])
                .slice(0, 13)
                .filter((e) => e.id !== n)
                .slice(0, 12),
            { type: d, description: _ } = s;
        return (0, r.jsxs)('div', {
            className: Y.otherEmojisContainer,
            children: [
                a
                    ? null
                    : u.map((e) =>
                          (0, r.jsx)(
                              c.Tooltip,
                              {
                                  text: e.require_colons ? ':'.concat(e.name, ':') : e.name,
                                  ...Z.b_,
                                  children: (t) =>
                                      (0, r.jsx)(f.Z, {
                                          className: Y.otherEmoji,
                                          emojiId: e.id,
                                          animated: e.animated,
                                          ...t
                                      })
                              },
                              e.id
                          )
                      ),
                !l &&
                    (d === G.$.GET_PREMIUM
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)(D.Z, {
                                      subscriptionTier: j.Si.TIER_2,
                                      buttonText: s.text,
                                      className: Y.ctaButton,
                                      fullWidth: !0,
                                      onClick: () => o()
                                  }),
                                  null != _ &&
                                      (0, r.jsx)('div', {
                                          className: Y.ctaDescription,
                                          children: (0, r.jsx)(c.Text, {
                                              variant: 'text-sm/medium',
                                              'aria-label': _,
                                              children: _
                                          })
                                      })
                              ]
                          })
                        : d === G.$.JOIN_GUILD
                          ? (0, r.jsx)(c.Button, {
                                size: c.Button.Sizes.SMALL,
                                className: Y.ctaButton,
                                color: c.ButtonColors.BRAND,
                                fullWidth: !0,
                                onClick: () => {
                                    (0, U.Ub)(i.id, {});
                                },
                                children: s.text
                            })
                          : null)
            ]
        });
    };
