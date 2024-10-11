t(47120), t(411104);
var n = t(735250),
    a = t(470079),
    i = t(913527),
    r = t.n(i),
    o = t(442837),
    l = t(846519),
    c = t(481060),
    d = t(533307),
    _ = t(189907),
    u = t(812206),
    E = t(600164),
    T = t(925329),
    S = t(981632),
    I = t(314897),
    N = t(82142),
    m = t(246946),
    C = t(509545),
    A = t(55563),
    g = t(259580),
    h = t(572004),
    O = t(669079),
    p = t(296848),
    R = t(474936),
    x = t(689938),
    M = t(243680);
function f(e, s, t) {
    return (
        s in e
            ? Object.defineProperty(e, s, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[s] = t),
        e
    );
}
class D extends a.PureComponent {
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case c.CopyInputModes.SUCCESS:
                return x.Z.Messages.BILLING_GIFT_COPIED;
            case c.CopyInputModes.ERROR:
                return x.Z.Messages.FAILED;
            default:
                return x.Z.Messages.COPY;
        }
    }
    handleRevoke(e) {
        d.Z.revokeGiftCode(e);
    }
    render() {
        let { hideCode: e, giftCode: s } = this.props,
            { copyMode: t } = this.state;
        return (0, n.jsxs)(E.Z, {
            direction: E.Z.Direction.VERTICAL,
            className: M.giftCodeRow,
            children: [
                (0, n.jsx)(c.CopyInput, {
                    className: M.codeText,
                    value: (0, O.Nz)(s.code),
                    text: this.copyButtonText,
                    mode: t,
                    supportsCopy: h.wS,
                    hideMessage: e ? x.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.ButtonColors.BRAND,
                    buttonLook: c.ButtonLooks.FILLED
                }),
                (0, n.jsxs)('div', {
                    className: M.subTextRow,
                    children: [
                        null != s.expiresAt
                            ? (0, n.jsxs)(a.Fragment, {
                                  children: [x.Z.Messages.GIFT_INVENTORY_EXPIRES_IN.format({ hours: s.expiresAt.diff(r()(), 'h') }), ' ', '\u2014\xA0']
                              })
                            : null,
                        (0, n.jsx)(c.Clickable, {
                            tag: 'a',
                            onClick: () => this.handleRevoke(s.code),
                            children: x.Z.Messages.REVOKE
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, '_copyModeTimeout', new l.V7()),
            f(this, 'state', { copyMode: c.CopyInputModes.DEFAULT }),
            f(this, 'handleCopy', (e) => {
                let { giftCode: s, sku: t } = this.props;
                (0, O.dM)(s, t);
                try {
                    (0, h.JG)(e), this.setState({ copyMode: c.CopyInputModes.SUCCESS });
                } catch (e) {
                    this.setState({ copyMode: c.CopyInputModes.ERROR });
                }
                this._copyModeTimeout.start(1000, () => {
                    this.setState({ copyMode: c.CopyInputModes.DEFAULT });
                });
            });
    }
}
class L extends a.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderTitle() {
        let e;
        let { sku: s, subscriptionPlan: t, giftCodeBatchId: a } = this.props;
        return (
            (e =
                a === R.m8
                    ? x.Z.Messages.BLACK_FRIDAY_PROMOTION_GIFT_INVENTORY_TITLE
                    : a === R.rX && null != t
                      ? (t.interval === R.rV.MONTH ? x.Z.Messages.STICKERS_GIFT_INVENTORY_TITLE_MONTH : x.Z.Messages.STICKERS_GIFT_INVENTORY_TITLE_YEAR).format({
                            skuName: s.name,
                            intervalCount: t.intervalCount
                        })
                      : null == t
                        ? s.name
                        : (t.interval === R.rV.MONTH ? x.Z.Messages.GIFT_INVENTORY_SUBSCRIPTION_MONTHS : x.Z.Messages.GIFT_INVENTORY_SUBSCRIPTION_YEARS).format({
                              skuName: s.name,
                              intervalCount: t.intervalCount
                          })),
            (0, n.jsx)('div', {
                className: M.gameName,
                children: e
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, n.jsxs)(E.Z, {
            justify: E.Z.Justify.BETWEEN,
            align: E.Z.Align.CENTER,
            className: M.generateCodeRow,
            children: [
                (0, n.jsx)('div', {
                    className: M.codeText,
                    children: x.Z.Messages.GIFT_INVENTORY_GENERATE_HELP
                }),
                (0, n.jsx)(c.Button, {
                    submitting: this.state.isCreating,
                    size: c.Button.Sizes.SMALL,
                    color: c.Button.Colors.BRAND,
                    onClick: this.handleGenerateGiftCode,
                    children: x.Z.Messages.GIFT_INVENTORY_GENERATE_LINK
                })
            ]
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let { entitlements: e, application: s, giftCodes: t, className: i, sku: r, isFetching: o, hideCodes: l, giftStyle: d } = this.props,
            { isOpen: u } = this.state;
        return (0, n.jsxs)(_.Z, {
            className: i,
            children: [
                (0, n.jsx)(c.Clickable, {
                    onClick: this.handleToggleOpen,
                    className: M.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, n.jsx)(_.Z.Header, {
                        splashArtURL: s.getSplashURL(512),
                        children: (0, n.jsxs)('div', {
                            className: M.cardHeader,
                            children: [
                                (0, n.jsxs)(E.Z, {
                                    align: E.Z.Align.CENTER,
                                    children: [
                                        null != d
                                            ? (0, n.jsx)(S.Z, {
                                                  giftStyle: d,
                                                  className: M.seasonalGiftBox,
                                                  shouldAnimate: this.state.isHovered
                                              })
                                            : (0, n.jsx)(T.Z, {
                                                  game: s,
                                                  size: T.Z.Sizes.MEDIUM,
                                                  skuId: r.id
                                              }),
                                        (0, n.jsxs)('div', {
                                            className: M.headerText,
                                            children: [
                                                this.renderTitle(),
                                                (0, n.jsx)('div', {
                                                    className: M.subTextHeader,
                                                    children: x.Z.Messages.GIFT_INVENTORY_COPIES.format({ copies: e.length })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, n.jsx)(g.Z, {
                                    direction: u ? g.Z.Directions.UP : g.Z.Directions.DOWN,
                                    className: M.expandIcon
                                })
                            ]
                        })
                    })
                }),
                u
                    ? (0, n.jsx)(_.Z.Body, {
                          children: o
                              ? (0, n.jsx)(c.Spinner, { className: M.spinner })
                              : (0, n.jsxs)(a.Fragment, {
                                    children: [
                                        t.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        t.map((e) =>
                                            (0, n.jsx)(
                                                D,
                                                {
                                                    giftCode: e,
                                                    sku: r,
                                                    hideCode: l
                                                },
                                                e.code
                                            )
                                        )
                                    ]
                                })
                      })
                    : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            f(this, '_loadedAt', null),
            f(this, 'state', {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1
            }),
            f(this, 'handleGenerateGiftCode', async (e) => {
                e.stopPropagation();
                let { skuId: s, subscriptionPlanId: t, giftStyle: n } = this.props;
                this.setState({ isCreating: !0 }),
                    await d.Z.createGiftCode(s, t, n),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0
                    });
            }),
            f(this, 'handleToggleOpen', () => {
                let { skuId: e, subscriptionPlanId: s, loadedAt: t } = this.props,
                    n = !this.state.isOpen;
                (null == t || null == this._loadedAt || t < this._loadedAt) && n && d.Z.fetchUserGiftCodesForSKU(e, s), this.setState({ isOpen: !this.state.isOpen });
            });
    }
}
s.Z = o.ZP.connectStores([A.Z, m.Z, N.Z, u.Z, C.Z, I.default], (e) => {
    let { skuId: s, subscriptionPlanId: t, giftStyle: n } = e,
        a = A.Z.get(s);
    if (null == a) throw Error('SKU was unavailable while rendering gift.');
    let i = N.Z.getForGifterSKUAndPlan(I.default.getId(), s, t)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === n);
    return {
        sku: a,
        hideCodes: m.Z.enabled,
        isFetching: N.Z.getUserGiftCodesFetchingForSKUAndPlan(s, t),
        loadedAt: N.Z.getUserGiftCodesLoadedAtForSKUAndPlan(s, t),
        application: u.Z.getApplication(a.applicationId),
        subscriptionPlan: null != t ? (0, p.oE)(t) : null,
        giftCodes: i
    };
})(L);
