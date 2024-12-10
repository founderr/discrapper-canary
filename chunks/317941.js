n(47120), n(411104);
var i = n(200651),
    s = n(192379),
    r = n(913527),
    l = n.n(r),
    a = n(442837),
    o = n(846519),
    c = n(481060),
    d = n(533307),
    u = n(189907),
    m = n(812206),
    h = n(600164),
    g = n(925329),
    p = n(981632),
    x = n(314897),
    S = n(82142),
    T = n(246946),
    E = n(509545),
    C = n(55563),
    _ = n(259580),
    f = n(572004),
    I = n(669079),
    N = n(296848),
    A = n(474936),
    b = n(388032),
    v = n(531822);
function j(e, t, n) {
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
class O extends s.PureComponent {
    componentWillUnmount() {
        this._copyModeTimeout.stop();
    }
    get copyButtonText() {
        switch (this.state.copyMode) {
            case c.CopyInputModes.SUCCESS:
                return b.intl.string(b.t.XVvPjY);
            case c.CopyInputModes.ERROR:
                return b.intl.string(b.t.i4GM3N);
            default:
                return b.intl.string(b.t.OpuAlJ);
        }
    }
    handleRevoke(e) {
        d.Z.revokeGiftCode(e);
    }
    render() {
        let { hideCode: e, giftCode: t } = this.props,
            { copyMode: n } = this.state;
        return (0, i.jsxs)(h.Z, {
            direction: h.Z.Direction.VERTICAL,
            className: v.giftCodeRow,
            children: [
                (0, i.jsx)(c.CopyInput, {
                    className: v.codeText,
                    value: (0, I.Nz)(t.code),
                    text: this.copyButtonText,
                    mode: n,
                    supportsCopy: f.wS,
                    hideMessage: e ? b.intl.string(b.t['0RLn4+']) : null,
                    onCopy: this.handleCopy,
                    buttonColor: c.ButtonColors.BRAND,
                    buttonLook: c.ButtonLooks.FILLED
                }),
                (0, i.jsxs)('div', {
                    className: v.subTextRow,
                    children: [
                        null != t.expiresAt
                            ? (0, i.jsxs)(s.Fragment, {
                                  children: [b.intl.format(b.t.ltVZcH, { hours: t.expiresAt.diff(l()(), 'h') }), ' \u2014\xA0']
                              })
                            : null,
                        (0, i.jsx)(c.Clickable, {
                            tag: 'a',
                            onClick: () => this.handleRevoke(t.code),
                            children: b.intl.string(b.t.v6Yaz8)
                        })
                    ]
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            j(this, '_copyModeTimeout', new o.V7()),
            j(this, 'state', { copyMode: c.CopyInputModes.DEFAULT }),
            j(this, 'handleCopy', (e) => {
                let { giftCode: t, sku: n } = this.props;
                (0, I.dM)(t, n);
                try {
                    (0, f.JG)(e), this.setState({ copyMode: c.CopyInputModes.SUCCESS });
                } catch (e) {
                    this.setState({ copyMode: c.CopyInputModes.ERROR });
                }
                this._copyModeTimeout.start(1000, () => {
                    this.setState({ copyMode: c.CopyInputModes.DEFAULT });
                });
            });
    }
}
class R extends s.PureComponent {
    componentDidMount() {
        this._loadedAt = Date.now();
    }
    renderTitle() {
        let e;
        let { sku: t, subscriptionPlan: n, giftCodeBatchId: s } = this.props;
        return (
            (e =
                s === A.m8
                    ? b.intl.string(b.t.odsU6e)
                    : s === A.rX && null != n
                      ? b.intl.formatToPlainString(n.interval === A.rV.MONTH ? b.t.uZjpiI : b.t.bJW1EB, {
                            skuName: t.name,
                            intervalCount: n.intervalCount
                        })
                      : null == n
                        ? t.name
                        : b.intl.formatToPlainString(n.interval === A.rV.MONTH ? b.t.rCJvqq : b.t.Vd3Iu7, {
                              skuName: t.name,
                              intervalCount: n.intervalCount
                          })),
            (0, i.jsx)('div', {
                className: v.gameName,
                children: e
            })
        );
    }
    renderGenerateGiftCodeRow() {
        return (0, i.jsxs)(h.Z, {
            justify: h.Z.Justify.BETWEEN,
            align: h.Z.Align.CENTER,
            className: v.generateCodeRow,
            children: [
                (0, i.jsx)('div', {
                    className: v.codeText,
                    children: b.intl.string(b.t.lELyPj)
                }),
                (0, i.jsx)(c.Button, {
                    submitting: this.state.isCreating,
                    size: c.Button.Sizes.SMALL,
                    color: c.Button.Colors.BRAND,
                    onClick: this.handleGenerateGiftCode,
                    children: b.intl.string(b.t.Q3Qgur)
                })
            ]
        });
    }
    setIsHovered(e) {
        this.setState({ isHovered: e });
    }
    render() {
        let { entitlements: e, application: t, giftCodes: n, className: r, sku: l, isFetching: a, hideCodes: o, giftStyle: d } = this.props,
            { isOpen: m } = this.state;
        return (0, i.jsxs)(u.Z, {
            className: r,
            children: [
                (0, i.jsx)(c.Clickable, {
                    onClick: this.handleToggleOpen,
                    className: v.card,
                    onMouseEnter: () => this.setIsHovered(!0),
                    onMouseLeave: () => this.setIsHovered(!1),
                    children: (0, i.jsx)(u.Z.Header, {
                        splashArtURL: t.getSplashURL(512),
                        children: (0, i.jsxs)('div', {
                            className: v.cardHeader,
                            children: [
                                (0, i.jsxs)(h.Z, {
                                    align: h.Z.Align.CENTER,
                                    children: [
                                        null != d
                                            ? (0, i.jsx)(p.Z, {
                                                  giftStyle: d,
                                                  className: v.seasonalGiftBox,
                                                  shouldAnimate: this.state.isHovered
                                              })
                                            : (0, i.jsx)(g.Z, {
                                                  game: t,
                                                  size: g.Z.Sizes.MEDIUM,
                                                  skuId: l.id
                                              }),
                                        (0, i.jsxs)('div', {
                                            className: v.headerText,
                                            children: [
                                                this.renderTitle(),
                                                (0, i.jsx)('div', {
                                                    className: v.subTextHeader,
                                                    children: b.intl.format(b.t.zMcvcH, { copies: e.length })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(_.Z, {
                                    direction: m ? _.Z.Directions.UP : _.Z.Directions.DOWN,
                                    className: v.expandIcon
                                })
                            ]
                        })
                    })
                }),
                m
                    ? (0, i.jsx)(u.Z.Body, {
                          children: a
                              ? (0, i.jsx)(c.Spinner, { className: v.spinner })
                              : (0, i.jsxs)(s.Fragment, {
                                    children: [
                                        n.length < e.length ? this.renderGenerateGiftCodeRow() : null,
                                        n.map((e) =>
                                            (0, i.jsx)(
                                                O,
                                                {
                                                    giftCode: e,
                                                    sku: l,
                                                    hideCode: o
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
            j(this, '_loadedAt', null),
            j(this, 'state', {
                isOpen: !1,
                isCreating: !1,
                isHovered: !1
            }),
            j(this, 'handleGenerateGiftCode', async (e) => {
                e.stopPropagation();
                let { skuId: t, subscriptionPlanId: n, giftStyle: i } = this.props;
                this.setState({ isCreating: !0 }),
                    await d.Z.createGiftCode(t, n, i),
                    this.setState({
                        isCreating: !1,
                        isOpen: !0
                    });
            }),
            j(this, 'handleToggleOpen', () => {
                let { skuId: e, subscriptionPlanId: t, loadedAt: n } = this.props,
                    i = !this.state.isOpen;
                (null == n || null == this._loadedAt || n < this._loadedAt) && i && d.Z.fetchUserGiftCodesForSKU(e, t), this.setState({ isOpen: !this.state.isOpen });
            });
    }
}
t.Z = a.ZP.connectStores([C.Z, T.Z, S.Z, m.Z, E.Z, x.default], (e) => {
    let { skuId: t, subscriptionPlanId: n, giftStyle: i } = e,
        s = C.Z.get(t);
    if (null == s) throw Error('SKU was unavailable while rendering gift.');
    let r = S.Z.getForGifterSKUAndPlan(x.default.getId(), t, n)
        .filter((e) => !e.isClaimed)
        .filter((e) => e.giftStyle === i);
    return {
        sku: s,
        hideCodes: T.Z.enabled,
        isFetching: S.Z.getUserGiftCodesFetchingForSKUAndPlan(t, n),
        loadedAt: S.Z.getUserGiftCodesLoadedAtForSKUAndPlan(t, n),
        application: m.Z.getApplication(s.applicationId),
        subscriptionPlan: null != n ? (0, N.oE)(n) : null,
        giftCodes: r
    };
})(R);
