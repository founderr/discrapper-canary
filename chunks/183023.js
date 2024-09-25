n.d(t, {
    Az: function () {
        return Q;
    },
    Oe: function () {
        return X;
    },
    UA: function () {
        return J;
    },
    n_: function () {
        return ee;
    },
    vk: function () {
        return $;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(990547),
    u = n(442837),
    c = n(507274),
    d = n(481060),
    _ = n(749210),
    E = n(596454),
    f = n(100527),
    h = n(906732),
    p = n(213609),
    m = n(600164),
    I = n(686546),
    T = n(111028),
    g = n(738774),
    S = n(785896),
    A = n(231053),
    v = n(944386),
    N = n(565138),
    O = n(372769),
    R = n(889564),
    C = n(687476),
    y = n(761966),
    b = n(563927),
    L = n(98278),
    D = n(197115),
    M = n(703656),
    P = n(944486),
    U = n(914010),
    w = n(594174),
    x = n(626135),
    G = n(768581),
    k = n(900849),
    B = n(74538),
    F = n(886132),
    Z = n(524444),
    V = n(981631),
    H = n(176505),
    Y = n(474936),
    j = n(689938),
    W = n(507444);
let K = 32,
    z = 12,
    q = () => ({
        page: null != (0, u.e7)([U.Z], () => U.Z.getGuildId()) ? V.ZY5.GUILD_CHANNEL : V.ZY5.DM_CHANNEL,
        section: V.jXE.EMOJI_UPSELL_POPOUT
    }),
    Q = (e) => {
        let { node: t } = e;
        (0, v.u)({
            emojiId: t.emojiId,
            currentGuildId: U.Z.getGuildId()
        });
        let n = (0, b.Z)(t.name);
        return (0, i.jsx)(c.V, {
            children: (0, i.jsx)(Z.W_, {
                children: (0, i.jsxs)(m.Z, {
                    className: W.emojiSection,
                    children: [
                        (0, i.jsx)(E.Z, {
                            emojiName: t.name,
                            className: W.primaryEmoji,
                            src: t.src,
                            animated: !1,
                            size: 'jumbo'
                        }),
                        (0, i.jsxs)(m.Z, {
                            direction: m.Z.Direction.VERTICAL,
                            justify: m.Z.Justify.CENTER,
                            className: W.truncatingText,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    className: W.__invalid_emojiName,
                                    variant: 'text-md/semibold',
                                    children: (0, i.jsx)(T.Z, { children: n })
                                }),
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-sm/normal',
                                    children: j.Z.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
                                })
                            ]
                        })
                    ]
                })
            })
        });
    },
    X = (e) => {
        let { expressionSourceGuild: t, hasJoinedExpressionSourceGuild: n, isDisplayingJoinGuildButtonInPopout: r } = e,
            { id: a, icon: o, name: l } = t,
            u = K,
            c = G.ZP.getGuildIconURL({
                id: a,
                icon: o,
                size: u,
                canAnimate: !0
            }),
            _ = (n = null == n || n) || t.isDiscoverable(),
            E = () => {
                t.isDiscoverable() ? (0, k.Ub)(a, {}) : n && (0, M.uL)(V.Z5c.CHANNEL(a, P.Z.getChannelId(a)));
            },
            f = () =>
                null != c && _
                    ? (0, i.jsxs)(d.Clickable, {
                          'aria-label': l,
                          onClick: E,
                          children: [
                              (0, i.jsx)('img', {
                                  src: c,
                                  alt: '',
                                  className: W.guildIcon
                              }),
                              ' :'
                          ]
                      })
                    : (0, i.jsx)(N.Z, {
                          size: N.Z.Sizes.SMALL,
                          className: W.guildIconNotClickable,
                          guild: t
                      }),
            h = () =>
                _
                    ? (0, i.jsx)(d.Clickable, {
                          onClick: E,
                          className: W.truncatingText,
                          children: (0, i.jsx)(d.Heading, {
                              className: W.guildName,
                              variant: 'heading-md/semibold',
                              children: (0, i.jsx)(T.Z, { children: l })
                          })
                      })
                    : (0, i.jsx)(d.Heading, {
                          variant: 'heading-md/semibold',
                          children: (0, i.jsx)(T.Z, { children: l })
                      }),
            p = t.isDiscoverable() && null != t.presenceCount,
            g = () => {
                let e = !r && !n;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: j.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t.presenceCount })
                        }),
                        (0, i.jsx)('div', { className: W.dotSeparator }),
                        e
                            ? (0, i.jsx)(d.Clickable, {
                                  className: W.joinGuildLink,
                                  onClick: E,
                                  children: (0, i.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'text-link',
                                      children: j.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
                                  })
                              })
                            : (0, i.jsx)(d.Text, {
                                  variant: 'text-xs/normal',
                                  color: 'header-secondary',
                                  children: j.Z.Messages.EMOJI_POPOUT_PUBLIC_SERVER
                              })
                    ]
                });
            },
            S = () =>
                p
                    ? g()
                    : (0, i.jsx)(d.Text, {
                          variant: 'text-xs/normal',
                          color: 'header-secondary',
                          children: j.Z.Messages.EMOJI_POPOUT_PRIVATE_SERVER
                      });
        return (0, i.jsxs)(m.Z, {
            align: m.Z.Align.CENTER,
            children: [
                (0, i.jsx)(I.ZP, {
                    mask: I.ZP.Masks.SQUIRCLE,
                    width: u,
                    height: u,
                    className: W.__invalid_guildIconContainer,
                    children: f()
                }),
                (0, i.jsxs)(m.Z, {
                    direction: m.Z.Direction.VERTICAL,
                    className: s()(W.__invalid_guildInformation, W.truncatingText),
                    children: [
                        (0, i.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(O.Z, {
                                    guild: t,
                                    className: W.guildBadge
                                }),
                                h()
                            ]
                        }),
                        (0, i.jsx)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: S()
                        })
                    ]
                })
            ]
        });
    },
    $ = (e) => {
        let { node: t, closePopout: n, refreshPositionKey: r, nonce: a } = e,
            {
                expressionSourceGuild: o,
                expressionSourceApplication: s,
                sourceType: l,
                joinedEmojiSourceGuildRecord: u,
                emoji: d,
                isFetching: _
            } = (0, S.i)({
                emojiId: t.emojiId,
                refreshPositionKey: r
            });
        return _
            ? (0, i.jsx)(Z.SE, {})
            : (0, i.jsx)(c.V, {
                  'aria-label': t.name,
                  children: (0, i.jsx)(J, {
                      node: t,
                      sourceType: l,
                      expressionSourceApplication: s,
                      guildEmoji: null != d ? d : void 0,
                      expressionSourceGuild: o,
                      joinedEmojiSourceGuildRecord: u,
                      closePopout: n,
                      onToggleShowMoreEmojis: r,
                      demoMode: !1,
                      nonce: a
                  })
              });
    },
    J = (e) => {
        var t, n, r;
        let { node: o, sourceType: c, expressionSourceApplication: I, expressionSourceGuild: S, joinedEmojiSourceGuildRecord: N, closePopout: O, onToggleShowMoreEmojis: b, guildEmoji: M, demoMode: P = !1, nonce: G } = e,
            k = (0, u.e7)([w.default], () => w.default.getCurrentUser()),
            K = (0, u.e7)([U.Z], () => U.Z.getGuildId()),
            z = B.ZP.isPremium(k),
            Q = null != K && (K === (null == S ? void 0 : S.id) || K === (null == N ? void 0 : N.id)),
            $ = null != N,
            J = null !== (t = null == S ? void 0 : S.isDiscoverable()) && void 0 !== t && t;
        P && ((z = !0), (J = !0), ($ = !1), (Q = !1));
        let et = q(),
            {
                isRoleSubscriptionEmoji: en,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ei
            } = a.useMemo(
                () =>
                    null == M
                        ? {
                              isRoleSubscriptionEmoji: !1,
                              isUnusableRoleSubscriptionEmoji: !1,
                              userIsRoleSubscriber: !1
                          }
                        : {
                              isRoleSubscriptionEmoji: R.yH(M),
                              isUnusableRoleSubscriptionEmoji: R.Fv(M, null != K ? K : void 0),
                              userIsRoleSubscriber: C.Z.getUserSubscriptionRoles(M.guildId).size > 0
                          },
                [M, K]
            ),
            ea = !!er && (0, g.Ol)(null == M ? void 0 : M.guildId),
            { analyticsLocations: eo } = (0, h.ZP)(f.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
        (0, p.Z)(
            {
                type: l.ImpressionTypes.MODAL,
                name: l.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
                properties: {
                    location_stack: eo,
                    emoji_guild_id: null !== (n = null == M ? void 0 : M.guildId) && void 0 !== n ? n : null,
                    emoji_id: null !== (r = null == M ? void 0 : M.id) && void 0 !== r ? r : null
                }
            },
            { disableTrack: !en }
        );
        let es = U.Z.getGuildId(),
            el = (0, F.a)({
                sourceType: c,
                expressionSourceApplication: I,
                isPremium: z,
                hasJoinedEmojiSourceGuild: $,
                isRoleSubscriptionEmoji: en,
                isUnusableRoleSubscriptionEmoji: er,
                userIsRoleSubscriber: ei,
                emojiComesFromCurrentGuild: Q,
                isDiscoverable: J,
                shouldHideRoleSubscriptionCTA: ea,
                onOpenPremiumSettings: () => {
                    O(),
                        x.default.track(V.rMx.PREMIUM_PROMOTION_OPENED, {
                            location_page: et.page,
                            location_section: et.section
                        }),
                        (0, L.z)();
                }
            }),
            eu = $ && er && !ea && ((z && en) || !z),
            ec = el.emojiDescription,
            ed = (0, v.u)({
                emojiId: o.emojiId,
                currentGuildId: es,
                popoutData: el,
                emojiSourceGuildId: null == S ? void 0 : S.id,
                nonce: G,
                demoMode: P
            }),
            e_ = el.type === F.$.JOIN_GUILD,
            eE = el.type === F.$.GET_PREMIUM,
            ef = () => {
                let e = async () => {
                        if (P || null == S || $) return;
                        O();
                        let e = S.id;
                        try {
                            await _.Z.joinGuild(e), _.Z.transitionToGuildSync(e);
                        } catch {}
                    },
                    t = () => {
                        O(), (null == N ? void 0 : N.id) != null && _.Z.transitionToGuildSync(N.id, { sourceLocationStack: [f.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL] }, H.oC.ROLE_SUBSCRIPTIONS);
                    },
                    n = !$ && J,
                    r = () =>
                        eE
                            ? (0, i.jsx)(D.Z, {
                                  className: W.ctaButton,
                                  subscriptionTier: Y.Si.TIER_2,
                                  size: d.Button.Sizes.SMALL,
                                  fullWidth: !0,
                                  buttonText: el.text,
                                  onSubscribeModalClose: (t) => (t ? e() : O()),
                                  postSuccessGuild: n && null != S ? S : void 0,
                                  premiumModalAnalyticsLocation: et
                              })
                            : e_
                              ? (0, i.jsx)(d.Button, {
                                    size: d.Button.Sizes.SMALL,
                                    className: W.ctaButton,
                                    color: d.ButtonColors.BRAND,
                                    fullWidth: !0,
                                    onClick: e,
                                    children: el.text
                                })
                              : void 0;
                return (0, i.jsxs)('div', {
                    className: W.emojiSection,
                    children: [
                        (0, i.jsxs)(m.Z, {
                            children: [
                                (0, i.jsx)(E.Z, {
                                    className: W.primaryEmoji,
                                    emojiId: o.emojiId,
                                    emojiName: o.name,
                                    animated: o.animated,
                                    size: 'jumbo'
                                }),
                                (0, i.jsxs)(m.Z, {
                                    direction: m.Z.Direction.VERTICAL,
                                    justify: m.Z.Justify.CENTER,
                                    className: W.truncatingText,
                                    children: [
                                        (0, i.jsx)(d.Text, {
                                            variant: 'text-md/semibold',
                                            children: (0, i.jsx)(T.Z, { children: o.name })
                                        }),
                                        null != ec &&
                                            (0, i.jsx)(d.Text, {
                                                variant: 'text-sm/normal',
                                                children: ec
                                            })
                                    ]
                                })
                            ]
                        }),
                        r(),
                        eu &&
                            (0, i.jsx)(y.Z, {
                                className: W.ctaButton,
                                size: d.Button.Sizes.SMALL,
                                fullWidth: !0,
                                onClick: t,
                                children: ei ? j.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : j.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
                            })
                    ]
                });
            },
            [eh, ep] = a.useState(!1),
            em = () => {
                var e, t;
                let n = null != S && !$ && J && (null !== (t = null == S ? void 0 : null === (e = S.emojis) || void 0 === e ? void 0 : e.length) && void 0 !== t ? t : 0) > 1,
                    r = () => {
                        if (!!n) null == b || b(), !eh && !P && x.default.track(V.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, ed), ep(!eh);
                    },
                    a = () => {
                        let e = j.Z.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
                        return (0, i.jsx)(d.Clickable, {
                            onClick: r,
                            className: W.showMoreEmojis,
                            children: (0, i.jsxs)(m.Z, {
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        className: W.__invalid_showMoreEmojisLabel,
                                        'aria-label': e,
                                        variant: 'text-xs/normal',
                                        color: 'none',
                                        children: e
                                    }),
                                    (0, i.jsx)(d.ChevronSmallDownIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: s()(W.showMoreEmojisArrow, { [W.showMoreEmojisArrowCollapsed]: !eh })
                                    })
                                ]
                            })
                        });
                    };
                return (0, i.jsxs)('div', {
                    className: W.guildSection,
                    children: [
                        (0, i.jsx)(d.FormTitle, {
                            className: W.guildTitle,
                            children: $ ? j.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : j.Z.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
                        }),
                        (0, i.jsx)(X, {
                            expressionSourceGuild: null != S ? S : A.JO.createFromGuildRecord(N),
                            hasJoinedExpressionSourceGuild: $,
                            isDisplayingJoinGuildButtonInPopout: e_
                        }),
                        n &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    a(),
                                    null != o.emojiId &&
                                        eh &&
                                        (0, i.jsx)(ee, {
                                            emojiId: o.emojiId,
                                            expressionSourceGuild: S,
                                            popoutData: el,
                                            onClose: O,
                                            hasJoinedEmojiSourceGuild: $,
                                            isDisplayingButtonInTopSection: e_ || eE
                                        })
                                ]
                            })
                    ]
                });
            },
            eI = J || ($ && !Q) || null != S;
        return (0, i.jsxs)(Z.W_, {
            className: W.popoutContent,
            children: [ef(), eI && em()]
        });
    },
    ee = (e) => {
        var t;
        let { emojiId: n, expressionSourceGuild: r, hasJoinedEmojiSourceGuild: a, popoutData: o, onClose: s, isDisplayingButtonInTopSection: l } = e,
            u = (null !== (t = null == r ? void 0 : r.emojis) && void 0 !== t ? t : [])
                .slice(0, z + 1)
                .filter((e) => e.id !== n)
                .slice(0, z),
            c = () =>
                a
                    ? null
                    : u.map((e) =>
                          (0, i.jsx)(
                              d.Tooltip,
                              {
                                  text: e.require_colons ? ':'.concat(e.name, ':') : e.name,
                                  ...Z.b_,
                                  children: (t) =>
                                      (0, i.jsx)(E.Z, {
                                          className: W.otherEmoji,
                                          emojiId: e.id,
                                          animated: e.animated,
                                          ...t
                                      })
                              },
                              e.id
                          )
                      ),
            { type: _, description: f } = o,
            h = () =>
                _ === F.$.GET_PREMIUM
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(D.Z, {
                                  subscriptionTier: Y.Si.TIER_2,
                                  buttonText: o.text,
                                  className: W.ctaButton,
                                  fullWidth: !0,
                                  onClick: () => s()
                              }),
                              null != f &&
                                  (0, i.jsx)('div', {
                                      className: W.ctaDescription,
                                      children: (0, i.jsx)(d.Text, {
                                          variant: 'text-sm/medium',
                                          'aria-label': f,
                                          children: f
                                      })
                                  })
                          ]
                      })
                    : _ === F.$.JOIN_GUILD
                      ? (0, i.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            className: W.ctaButton,
                            color: d.ButtonColors.BRAND,
                            fullWidth: !0,
                            onClick: () => {
                                (0, k.Ub)(r.id, {});
                            },
                            children: o.text
                        })
                      : null;
        return (0, i.jsxs)('div', {
            className: W.otherEmojisContainer,
            children: [c(), !l && h()]
        });
    };
