var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(913527),
    u = n.n(l),
    c = n(442837),
    d = n(481060),
    _ = n(230711),
    E = n(568836),
    f = n(730749),
    h = n(112724),
    p = n(607070),
    m = n(884697),
    I = n(600164),
    T = n(479446),
    g = n(930114),
    S = n(981632),
    A = n(108989),
    v = n(703656),
    N = n(314897),
    O = n(82142),
    R = n(283595),
    C = n(594174),
    y = n(509545),
    L = n(55563),
    b = n(199480),
    D = n(626135),
    M = n(669079),
    P = n(74538),
    U = n(296848),
    w = n(51144),
    x = n(626799),
    G = n(981631),
    k = n(474936),
    B = n(689938),
    F = n(216981);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function V(e) {
    let { onClick: t, libraryApplication: n } = e;
    return (0, i.jsxs)(d.Clickable, {
        className: F.libraryLink,
        onClick: t,
        children: [
            (0, i.jsx)(d.InventoryIcon, {
                size: 'md',
                color: 'currentColor',
                className: F.libraryIcon
            }),
            (0, i.jsx)('div', { children: n.isHidden() ? B.Z.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY_HIDDEN : B.Z.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY })
        ]
    });
}
class H extends a.PureComponent {
    get isHorizontal() {
        let { width: e } = this.props;
        return e >= E.aL;
    }
    handleViewInventory() {
        _.Z.open(G.oAB.INVENTORY);
    }
    render() {
        return (0, i.jsx)(E.$G, {
            isHorizontal: this.isHorizontal,
            renderTitle: this.renderTitle,
            renderTagline: this.renderTagline,
            renderMedia: this.renderMedia,
            renderActions: this.renderActions
        });
    }
    constructor(...e) {
        super(...e),
            Z(this, 'renderMedia', () => (0, i.jsx)('div', { className: s()(F.invalidPoop, { [F.invalidPoopHorizontal]: this.isHorizontal }) })),
            Z(this, 'renderTitle', () => (this.props.isSelfGift ? B.Z.Messages.GIFT_EMBED_INVALID_TITLE_SELF : B.Z.Messages.GIFT_EMBED_INVALID_TITLE_OTHER)),
            Z(this, 'renderActions', () =>
                this.props.isSelfGift
                    ? (0, i.jsx)(d.Button, {
                          size: d.Button.Sizes.SMALL,
                          onClick: this.handleViewInventory,
                          children: B.Z.Messages.GIFT_INVENTORY
                      })
                    : (0, i.jsx)(d.Button, {
                          disabled: !0,
                          size: d.Button.Sizes.SMALL,
                          children: B.Z.Messages.GIFT_EMBED_BUTTON_ACCEPT
                      })
            ),
            Z(this, 'renderTagline', () => (this.props.isSelfGift ? B.Z.Messages.GIFT_EMBED_INVALID_TAGLINE_SELF : B.Z.Messages.GIFT_EMBED_INVALID_TAGLINE_OTHER));
    }
}
class Y extends a.Component {
    get analyticsLocation() {
        let {
            analyticsContext: { location: e }
        } = this.props;
        return {
            ...e,
            section: G.jXE.GIFT_CODE_EMBED
        };
    }
    renderActions(e) {
        let { libraryApplication: t } = this.props;
        return (0, i.jsxs)(I.Z, {
            justify: I.Z.Justify.BETWEEN,
            children: [
                (0, i.jsxs)(I.Z, {
                    children: [
                        this.renderButton(e),
                        null == t || e.isSubscription
                            ? null
                            : (0, i.jsx)(V, {
                                  onClick: this.handleViewLibrary,
                                  libraryApplication: t
                              })
                    ]
                }),
                (0, i.jsxs)(I.Z, {
                    align: I.Z.Align.END,
                    justify: I.Z.Justify.END,
                    className: F.metadata,
                    direction: I.Z.Direction.VERTICAL,
                    children: [e.hasMultipleCopies ? (0, i.jsx)('div', { children: this.renderGiftCodeCopiesLeft(e) }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, i.jsx)('div', { children: B.Z.Messages.GIFT_EMBED_EXPIRATION.format({ hours: e.expiresAt.diff(u()(), 'h') }) })]
                })
            ]
        });
    }
    renderGiftCodeCopiesLeft(e) {
        return (e.isSubscription ? B.Z.Messages.GIFT_EMBED_SUBSCRIPTIONS_LEFT : B.Z.Messages.GIFT_EMBED_COPIES_LEFT).format({
            remaining: e.remainingUses,
            total: e.maxUses
        });
    }
    renderButton(e) {
        let { libraryApplication: t, currentUser: n, isSelfGift: r } = this.props,
            a = {
                onClick: this.handleAccept,
                color: d.Button.Colors.BRAND
            },
            o = (!e.isSubscription && null != t) || (!e.isSelfRedeemable && r) || (e.isExistingPremiumSubscriptionDisallowed && (0, P.I5)(n));
        return (
            (e.redeemed || o || e.isClaimed || !n.verified) && ((a.color = d.Button.Colors.BRAND), (a.disabled = !0)),
            (0, i.jsx)(d.Button, {
                ...a,
                className: (0, m.mO)(e) ? F.collectiblesAcceptButton : null,
                size: d.Button.Sizes.SMALL,
                children: e.redeemed ? B.Z.Messages.GIFT_EMBED_BUTTON_CLAIMED : null != e.giftStyle ? B.Z.Messages.SEASONAL_GIFTING_OPEN_GIFT : B.Z.Messages.GIFT_EMBED_BUTTON_ACCEPT
            })
        );
    }
    isCustomGiftMessage() {
        let { type: e } = this.props;
        return e === G.uaV.CUSTOM_GIFT;
    }
    renderTitle(e) {
        let { currentUser: t, isSelfGift: n, sku: r } = this.props;
        return this.isCustomGiftMessage() && !n ? B.Z.Messages.GIFT_RECIPIENT_NOTIFICATION.format({ recipientDisplayName: w.ZP.getName(t) }) : null == r ? null : e.isSubscription ? (n ? B.Z.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION_SELF : B.Z.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION) : n ? B.Z.Messages.GIFT_EMBED_TITLE_SELF : B.Z.Messages.GIFT_EMBED_TITLE;
    }
    renderBody(e) {
        let { libraryApplication: t, isSelfGift: n, sku: r, gifter: i, subscriptionPlan: a, currentUser: o } = this.props;
        if (null == r) return B.Z.Messages.LOADING;
        if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
        let s = r.isPreorder() ? B.Z.Messages.PREORDER_SKU_NAME.format({ name: r.name }) : r.name;
        if (e.redeemed)
            return e.isSubscription || (0, m.mO)(e)
                ? B.Z.Messages.GIFT_EMBED_BODY_CLAIMED_SELF_SUBSCRIPTION
                : B.Z.Messages.GIFT_EMBED_BODY_CLAIMED_SELF.format({
                      skuName: s,
                      onViewInLibrary: this.handleViewLibrary
                  });
        if (!e.isSubscription && null != t)
            return B.Z.Messages.GIFT_EMBED_BODY_OWNED.format({
                skuName: s,
                onViewInLibrary: this.handleViewLibrary
            });
        if (e.isClaimed) return B.Z.Messages.GIFT_EMBED_BODY_CLAIMED_OTHER;
        if (!o.verified) return B.Z.Messages.GIFT_EMBED_BODY_REQUIRES_VERIFICATION.format({ onClick: this.handleVerificationClick });
        if (n) return e.isSelfRedeemable ? B.Z.Messages.GIFT_EMBED_BODY_SELF : B.Z.Messages.GIFT_EMBED_BODY_SELF_NOT_REDEEMABLE.format({ skuName: s });
        if (e.isExistingPremiumSubscriptionDisallowed) return B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_ALREADY_ACTIVE;
        if (e.hasMultipleCopies)
            return null != i
                ? e.isSubscription
                    ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_GIVEAWAY.format({
                          username: w.ZP.getUserTag(i),
                          maxUses: e.maxUses,
                          skuName: s
                      })
                    : B.Z.Messages.GIFT_EMBED_BODY_GIVEAWAY.format({
                          username: w.ZP.getUserTag(i),
                          totalCopies: e.maxUses,
                          skuName: s
                      })
                : e.isSubscription
                  ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_GIVEAWAY.format({
                        maxUses: e.maxUses,
                        skuName: s
                    })
                  : B.Z.Messages.GIFT_EMBED_BODY_NO_USER_GIVEAWAY.format({
                        totalCopies: e.maxUses,
                        skuName: s
                    });
        if (e.isSubscription)
            return null == a
                ? B.Z.Messages.LOADING
                : null != i
                  ? (a.interval === k.rV.MONTH ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_MONTHS : B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_YEARS).format({
                        username: w.ZP.getUserTag(i),
                        skuName: s,
                        intervalCount: a.intervalCount
                    })
                  : (a.interval === k.rV.MONTH ? B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_MONTHS : B.Z.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_YEARS).format({
                        skuName: s,
                        intervalCount: a.intervalCount
                    });
        return null != i ? B.Z.Messages.GIFT_EMBED_BODY_DEFAULT.format({ username: w.ZP.getUserTag(i) }) : B.Z.Messages.GIFT_EMBED_BODY_NO_USER_DEFAULT;
    }
    renderPromotionActions() {
        return (0, i.jsx)(d.Button, {
            size: d.Button.Sizes.SMALL,
            onClick: this.handleClaimPromotion,
            children: B.Z.Messages.GIFT_EMBED_BUTTON_CLAIM
        });
    }
    renderEmbed() {
        let { giftCode: e, width: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(x.$, {
                  skuId: e.skuId,
                  onEmbedClick: this.handleEmbedClick,
                  analyticsSection: G.jXE.GIFT_CODE_EMBED,
                  renderCustomActions: () => this.renderActions(e),
                  renderCustomTitle: () => this.renderTitle(e),
                  renderCustomTagline: () => this.renderBody(e),
                  renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
                  width: t
              });
    }
    render() {
        let { giftCode: e, resolved: t, width: n, isSelfGift: r } = this.props;
        if (null != e && null != e.promotion)
            return (0, i.jsx)(x.$, {
                skuId: e.skuId,
                onEmbedClick: this.handleClaimPromotion,
                analyticsSection: G.jXE.GIFT_CODE_EMBED,
                renderCustomActions: () => this.renderPromotionActions(),
                renderCustomTitle: () => B.Z.Messages.GIFT_EMBED_TITLE_PROMOTION,
                renderCustomTagline: () => B.Z.Messages.GIFT_EMBED_TAGLINE_PROMOTION,
                width: n
            });
        if (null == e || e.revoked)
            return t
                ? (0, i.jsx)(H, {
                      isSelfGift: r,
                      width: n
                  })
                : (0, i.jsx)(E.OR, { isHorizontal: n >= E.aL });
        return (0, m.mO)(e)
            ? (0, i.jsx)('div', {
                  className: F.collectiblesEmbedWrapper,
                  children: this.renderEmbed()
              })
            : this.renderEmbed();
    }
    constructor(...e) {
        super(...e),
            Z(this, 'handleViewLibrary', (e) => {
                let { libraryApplication: t } = this.props;
                e.preventDefault(), null != t && t.isHidden() ? (0, v.uL)(G.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, v.uL)(G.Z5c.APPLICATION_LIBRARY, { state: { applicationId: null != t ? t.id : void 0 } });
            }),
            Z(this, 'handleVerificationClick', (e) => {
                e.stopPropagation(), e.preventDefault(), _.Z.open(G.oAB.ACCOUNT);
            }),
            Z(this, 'handleAccept', (e) => {
                let { channelId: t, code: n, content: r, type: i, giftInfo: a } = this.props;
                e.preventDefault(),
                    e.stopPropagation(),
                    D.default.track(G.rMx.OPEN_MODAL, {
                        type: 'gift_accept',
                        location: {
                            ...this.analyticsLocation,
                            object: G.qAy.BUTTON_CTA
                        }
                    });
                let o = i !== G.uaV.CUSTOM_GIFT ? void 0 : r;
                (0, g.V)({
                    processedCode: n,
                    channelContext: t,
                    customGiftMessage: o,
                    giftInfo: a
                });
            }),
            Z(this, 'handleEmbedClick', (e) => {
                let { giftCode: t } = this.props;
                null != t && t.isSubscription && (e.preventDefault(), _.Z.open(G.oAB.PREMIUM));
            }),
            Z(this, 'handleClaimPromotion', (e) => {
                var t;
                e.stopPropagation(), e.preventDefault();
                let n = null === (t = this.props.giftCode) || void 0 === t ? void 0 : t.code;
                if (null != n) window.open(G.Z5c.BILLING_PROMOTION_REDEMPTION(n));
            }),
            Z(this, 'renderCustomGiftBox', (e) => {
                let { useReducedMotion: t, width: n } = this.props;
                if (null == e || null == e.giftStyle) return null;
                let r = k.jy.includes(e.giftStyle),
                    a = s()(F.customGiftEmbedWrapper, {
                        [F.legacySeasonalGiftEmbedWrapper]: r,
                        [F.giftEmbedWrapperHorizontal]: n >= E.aL
                    }),
                    o = s()({
                        [F.legacySeasonalGiftEmbedBox]: r,
                        [F.legacySeasonalGiftEmbedBoxHorizontal]: r && n >= E.aL,
                        [F.customGiftEmbedBox]: !r,
                        [F.customGiftEmbedBoxHorizontal]: !r && n >= E.aL
                    });
                return (0, i.jsxs)('div', {
                    className: a,
                    children: [
                        !t &&
                            k.eZ.includes(e.giftStyle) &&
                            (0, i.jsx)(A.Z, {
                                className: F.snow,
                                wind: 5
                            }),
                        r && (0, i.jsx)(b.Z, { className: F.headerIcon }),
                        null != e.giftStyle &&
                            (0, i.jsx)(S.Z, {
                                defaultAnimationState: e.redeemed ? T.SR.LOOP : T.SR.IDLE,
                                giftStyle: e.giftStyle,
                                className: o
                            })
                    ]
                });
            });
    }
}
let j = (0, h.Z)((0, f.Z)(Y));
t.Z = c.ZP.connectStores([O.Z, L.Z, C.default, R.Z, y.Z, N.default, p.Z], (e) => {
    let { code: t, author: n, currentUser: r } = e,
        i = O.Z.get(t),
        a = null != i ? L.Z.get(i.skuId) : null,
        o = null != i && null != i.userId ? C.default.getUser(i.userId) : null,
        s = p.Z.useReducedMotion;
    return {
        sku: a,
        giftCode: i,
        gifter: o,
        currentUser: r,
        subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, U.oE)(i.subscriptionPlanId) : null,
        isSelfGift: null != i ? N.default.getId() === i.userId : N.default.getId() === n.id,
        resolved: O.Z.getIsResolved(t),
        libraryApplication: null != a && (null == i ? void 0 : i.entitlementBranches) != null ? M.z2(i.entitlementBranches, a, R.Z) : null,
        useReducedMotion: s
    };
})(j);
