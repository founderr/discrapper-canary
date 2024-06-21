"use strict";
n.d(t, {
  Az: function() {
    return K
  },
  Oe: function() {
    return z
  },
  UA: function() {
    return X
  },
  n_: function() {
    return Q
  },
  vk: function() {
    return q
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(990547),
  l = n(442837),
  u = n(507274),
  _ = n(481060),
  c = n(749210),
  d = n(596454),
  E = n(100527),
  I = n(906732),
  T = n(213609),
  h = n(738774),
  S = n(29598),
  f = n(400106),
  N = n(944386),
  A = n(889564),
  m = n(687476),
  O = n(761966),
  R = n(563927),
  p = n(98278),
  g = n(197115),
  C = n(703656),
  v = n(944486),
  L = n(914010),
  D = n(594174),
  M = n(285952),
  P = n(940627),
  y = n(346656),
  U = n(514342),
  b = n(806519),
  G = n(626135),
  w = n(768581),
  B = n(900849),
  k = n(74538),
  x = n(886132),
  V = n(524444),
  Z = n(981631),
  H = n(176505),
  F = n(474936),
  Y = n(689938),
  j = n(423192);
let W = () => ({
    page: null != (0, l.e7)([L.Z], () => L.Z.getGuildId()) ? Z.ZY5.GUILD_CHANNEL : Z.ZY5.DM_CHANNEL,
    section: Z.jXE.EMOJI_UPSELL_POPOUT
  }),
  K = e => {
    let {
      node: t
    } = e;
    (0, N.u)({
      emojiId: t.emojiId,
      currentGuildId: L.Z.getGuildId()
    });
    let n = (0, R.Z)(t.name);
    return (0, i.jsx)(u.V, {
      children: (0, i.jsx)(V.W_, {
        children: (0, i.jsxs)(M.Z, {
          className: j.emojiSection,
          children: [(0, i.jsx)(d.Z, {
            emojiName: t.name,
            className: j.primaryEmoji,
            src: t.src,
            animated: !1,
            size: "jumbo"
          }), (0, i.jsxs)(M.Z, {
            direction: M.Z.Direction.VERTICAL,
            justify: M.Z.Justify.CENTER,
            className: j.truncatingText,
            children: [(0, i.jsx)(_.Text, {
              className: j.__invalid_emojiName,
              variant: "text-md/semibold",
              children: (0, i.jsx)(U.Z, {
                children: n
              })
            }), (0, i.jsx)(_.Text, {
              variant: "text-sm/normal",
              children: Y.Z.Messages.EMOJI_POPOUT_STANDARD_EMOJI_DESCRIPTION
            })]
          })]
        })
      })
    })
  },
  z = e => {
    let {
      expressionSourceGuild: t,
      hasJoinedExpressionSourceGuild: n,
      isDisplayingJoinGuildButtonInPopout: r
    } = e, {
      id: s,
      icon: a,
      name: l
    } = t, u = w.ZP.getGuildIconURL({
      id: s,
      icon: a,
      size: 32,
      canAnimate: !0
    }), c = (n = null == n || n) || t.isDiscoverable(), d = () => {
      t.isDiscoverable() ? (0, B.Ub)(s, {}) : n && (0, C.uL)(Z.Z5c.CHANNEL(s, v.Z.getChannelId(s)))
    }, E = t.isDiscoverable() && null != t.presenceCount, I = () => {
      let e = !r && !n;
      return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: Y.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
            membersOnline: t.presenceCount
          })
        }), (0, i.jsx)("div", {
          className: j.dotSeparator
        }), e ? (0, i.jsx)(_.Clickable, {
          className: j.joinGuildLink,
          onClick: d,
          children: (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "text-link",
            children: Y.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
          })
        }) : (0, i.jsx)(_.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: Y.Z.Messages.EMOJI_POPOUT_PUBLIC_SERVER
        })]
      })
    };
    return (0, i.jsxs)(M.Z, {
      align: M.Z.Align.CENTER,
      children: [(0, i.jsx)(b.ZP, {
        mask: b.ZP.Masks.SQUIRCLE,
        width: 32,
        height: 32,
        className: j.__invalid_guildIconContainer,
        children: null != u && c ? (0, i.jsxs)(_.Clickable, {
          "aria-label": l,
          onClick: d,
          children: [(0, i.jsx)("img", {
            src: u,
            alt: "",
            className: j.guildIcon
          }), " :"]
        }) : (0, i.jsx)(y.Z, {
          size: y.Z.Sizes.SMALL,
          className: j.guildIconNotClickable,
          guild: t
        })
      }), (0, i.jsxs)(M.Z, {
        direction: M.Z.Direction.VERTICAL,
        className: o()(j.__invalid_guildInformation, j.truncatingText),
        children: [(0, i.jsxs)(M.Z, {
          align: M.Z.Align.CENTER,
          children: [(0, i.jsx)(P.Z, {
            guild: t,
            className: j.guildBadge
          }), c ? (0, i.jsx)(_.Clickable, {
            onClick: d,
            className: j.truncatingText,
            children: (0, i.jsx)(_.Heading, {
              className: j.guildName,
              variant: "heading-md/semibold",
              children: (0, i.jsx)(U.Z, {
                children: l
              })
            })
          }) : (0, i.jsx)(_.Heading, {
            variant: "heading-md/semibold",
            children: (0, i.jsx)(U.Z, {
              children: l
            })
          })]
        }), (0, i.jsx)(M.Z, {
          align: M.Z.Align.CENTER,
          children: E ? I() : (0, i.jsx)(_.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            children: Y.Z.Messages.EMOJI_POPOUT_PRIVATE_SERVER
          })
        })]
      })]
    })
  },
  q = e => {
    let {
      node: t,
      closePopout: n,
      refreshPositionKey: r,
      nonce: s
    } = e, {
      expressionSourceGuild: o,
      joinedEmojiSourceGuildRecord: a,
      emoji: l,
      isFetching: _
    } = (0, S.U)({
      emojiId: t.emojiId,
      refreshPositionKey: r
    });
    return _ ? (0, i.jsx)(V.SE, {}) : (0, i.jsx)(u.V, {
      "aria-label": t.name,
      children: (0, i.jsx)(X, {
        node: t,
        guildEmoji: null != l ? l : void 0,
        expressionSourceGuild: o,
        joinedEmojiSourceGuildRecord: a,
        closePopout: n,
        onToggleShowMoreEmojis: r,
        demoMode: !1,
        nonce: s
      })
    })
  },
  X = e => {
    var t, n, s;
    let {
      node: u,
      expressionSourceGuild: S,
      joinedEmojiSourceGuildRecord: R,
      closePopout: C,
      onToggleShowMoreEmojis: v,
      guildEmoji: P,
      demoMode: y = !1,
      nonce: b
    } = e, w = (0, l.e7)([D.default], () => D.default.getCurrentUser()), B = (0, l.e7)([L.Z], () => L.Z.getGuildId()), K = k.ZP.isPremium(w), q = null != B && (B === (null == S ? void 0 : S.id) || B === (null == R ? void 0 : R.id)), X = null != R, J = null !== (t = null == S ? void 0 : S.isDiscoverable()) && void 0 !== t && t;
    y && (K = !0, J = !0, X = !1, q = !1);
    let $ = W(),
      {
        isRoleSubscriptionEmoji: ee,
        isUnusableRoleSubscriptionEmoji: et,
        userIsRoleSubscriber: en
      } = r.useMemo(() => null == P ? {
        isRoleSubscriptionEmoji: !1,
        isUnusableRoleSubscriptionEmoji: !1,
        userIsRoleSubscriber: !1
      } : {
        isRoleSubscriptionEmoji: A.yH(P),
        isUnusableRoleSubscriptionEmoji: A.Fv(P, null != B ? B : void 0),
        userIsRoleSubscriber: m.Z.getUserSubscriptionRoles(P.guildId).size > 0
      }, [P, B]),
      ei = !!et && (0, h.Ol)(null == P ? void 0 : P.guildId),
      {
        analyticsLocations: er
      } = (0, I.ZP)(E.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL);
    (0, T.Z)({
      type: a.ImpressionTypes.MODAL,
      name: a.ImpressionNames.ROLE_SUBSCRIPTION_EMOJI_UPSELL,
      properties: {
        location_stack: er,
        emoji_guild_id: null !== (n = null == P ? void 0 : P.guildId) && void 0 !== n ? n : null,
        emoji_id: null !== (s = null == P ? void 0 : P.id) && void 0 !== s ? s : null
      }
    }, {
      disableTrack: !ee
    });
    let es = L.Z.getGuildId(),
      eo = (0, x.a)({
        isPremium: K,
        hasJoinedEmojiSourceGuild: X,
        isRoleSubscriptionEmoji: ee,
        isUnusableRoleSubscriptionEmoji: et,
        userIsRoleSubscriber: en,
        emojiComesFromCurrentGuild: q,
        isDiscoverable: J,
        shouldHideRoleSubscriptionCTA: ei,
        onOpenPremiumSettings: () => {
          C(), G.default.track(Z.rMx.PREMIUM_PROMOTION_OPENED, {
            location_page: $.page,
            location_section: $.section
          }), (0, p.z)()
        }
      }),
      ea = X && et && !ei && (K && ee || !K),
      el = eo.emojiDescription,
      eu = (0, N.u)({
        emojiId: u.emojiId,
        currentGuildId: es,
        popoutData: eo,
        emojiSourceGuildId: null == S ? void 0 : S.id,
        nonce: b,
        demoMode: y
      }),
      e_ = eo.type === x.$.JOIN_GUILD,
      ec = eo.type === x.$.GET_PREMIUM,
      [ed, eE] = r.useState(!1),
      eI = J || X && !q || null != S;
    return (0, i.jsxs)(V.W_, {
      className: j.popoutContent,
      children: [(() => {
        let e = async () => {
          if (y || null == S || X) return;
          C();
          let e = S.id;
          try {
            await c.Z.joinGuild(e), c.Z.transitionToGuildSync(e)
          } catch {}
        }, t = !X && J;
        return (0, i.jsxs)("div", {
          className: j.emojiSection,
          children: [(0, i.jsxs)(M.Z, {
            children: [(0, i.jsx)(d.Z, {
              className: j.primaryEmoji,
              emojiId: u.emojiId,
              emojiName: u.name,
              animated: u.animated,
              size: "jumbo"
            }), (0, i.jsxs)(M.Z, {
              direction: M.Z.Direction.VERTICAL,
              justify: M.Z.Justify.CENTER,
              className: j.truncatingText,
              children: [(0, i.jsx)(_.Text, {
                variant: "text-md/semibold",
                children: (0, i.jsx)(U.Z, {
                  children: u.name
                })
              }), null != el && (0, i.jsx)(_.Text, {
                variant: "text-sm/normal",
                children: el
              })]
            })]
          }), ec ? (0, i.jsx)(g.Z, {
            className: j.ctaButton,
            subscriptionTier: F.Si.TIER_2,
            size: _.Button.Sizes.SMALL,
            fullWidth: !0,
            buttonText: eo.text,
            onSubscribeModalClose: t => t ? e() : C(),
            postSuccessGuild: t && null != S ? S : void 0,
            premiumModalAnalyticsLocation: $
          }) : e_ ? (0, i.jsx)(_.Button, {
            size: _.Button.Sizes.SMALL,
            className: j.ctaButton,
            color: _.ButtonColors.BRAND,
            fullWidth: !0,
            onClick: e,
            children: eo.text
          }) : void 0, ea && (0, i.jsx)(O.Z, {
            className: j.ctaButton,
            size: _.Button.Sizes.SMALL,
            fullWidth: !0,
            onClick: () => {
              C(), (null == R ? void 0 : R.id) != null && c.Z.transitionToGuildSync(R.id, void 0, H.oC.ROLE_SUBSCRIPTIONS, [E.Z.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL])
            },
            children: en ? Y.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_BUTTON : Y.Z.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_BUTTON
          })]
        })
      })(), eI && (() => {
        let e = null != S && !X && J,
          t = () => {
            if (!!e) null == v || v(), !ed && !y && G.default.track(Z.rMx.EMOJI_UPSELL_POPOUT_MORE_EMOJIS_OPENED, eu), eE(!ed)
          };
        return (0, i.jsxs)("div", {
          className: j.guildSection,
          children: [(0, i.jsx)(_.FormTitle, {
            className: j.guildTitle,
            children: X ? Y.Z.Messages.EMOJI_POPOUT_JOINED_GUILD_EMOJI_DESCRIPTION : Y.Z.Messages.EMOJI_POPOUT_UNJOINED_GUILD_EMOJI_DESCRIPTION
          }), (0, i.jsx)(z, {
            expressionSourceGuild: null != S ? S : f.Z.createFromGuildRecord(R),
            hasJoinedExpressionSourceGuild: X,
            isDisplayingJoinGuildButtonInPopout: e_
          }), e && (0, i.jsxs)(i.Fragment, {
            children: [(() => {
              let e = Y.Z.Messages.EMOJI_POPOUT_SHOW_MORE_EMOJIS;
              return (0, i.jsx)(_.Clickable, {
                onClick: t,
                className: j.showMoreEmojis,
                children: (0, i.jsxs)(M.Z, {
                  children: [(0, i.jsx)(_.Text, {
                    className: j.__invalid_showMoreEmojisLabel,
                    "aria-label": e,
                    variant: "text-xs/normal",
                    color: "none",
                    children: e
                  }), (0, i.jsx)(_.ChevronSmallDownIcon, {
                    size: "md",
                    color: "currentColor",
                    className: o()(j.showMoreEmojisArrow, {
                      [j.showMoreEmojisArrowCollapsed]: !ed
                    })
                  })]
                })
              })
            })(), null != u.emojiId && ed && (0, i.jsx)(Q, {
              emojiId: u.emojiId,
              expressionSourceGuild: S,
              popoutData: eo,
              onClose: C,
              hasJoinedEmojiSourceGuild: X,
              isDisplayingButtonInTopSection: e_ || ec
            })]
          })]
        })
      })()]
    })
  },
  Q = e => {
    var t;
    let {
      emojiId: n,
      expressionSourceGuild: r,
      hasJoinedEmojiSourceGuild: s,
      popoutData: o,
      onClose: a,
      isDisplayingButtonInTopSection: l
    } = e, u = (null !== (t = null == r ? void 0 : r.emojis) && void 0 !== t ? t : []).slice(0, 13).filter(e => e.id !== n).slice(0, 12), {
      type: c,
      description: E
    } = o;
    return (0, i.jsxs)(M.Z, {
      wrap: M.Z.Wrap.WRAP,
      align: M.Z.Align.CENTER,
      justify: M.Z.Justify.CENTER,
      className: j.otherEmojisContainer,
      children: [s ? null : u.map(e => (0, i.jsx)(_.Tooltip, {
        text: e.require_colons ? ":".concat(e.name, ":") : e.name,
        ...V.b_,
        children: t => (0, i.jsx)(d.Z, {
          className: j.otherEmoji,
          emojiId: e.id,
          animated: e.animated,
          ...t
        })
      }, e.id)), !l && (c === x.$.GET_PREMIUM ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(g.Z, {
          subscriptionTier: F.Si.TIER_2,
          buttonText: o.text,
          className: j.ctaButton,
          fullWidth: !0,
          onClick: () => a()
        }), null != E && (0, i.jsx)("div", {
          className: j.ctaDescription,
          children: (0, i.jsx)(_.Text, {
            variant: "text-sm/medium",
            "aria-label": E,
            children: E
          })
        })]
      }) : c === x.$.JOIN_GUILD ? (0, i.jsx)(_.Button, {
        size: _.Button.Sizes.SMALL,
        className: j.ctaButton,
        color: _.ButtonColors.BRAND,
        fullWidth: !0,
        onClick: () => {
          (0, B.Ub)(r.id, {})
        },
        children: o.text
      }) : null)]
    })
  }