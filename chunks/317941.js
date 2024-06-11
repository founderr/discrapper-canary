"use strict";
s.r(t), s("47120"), s("411104");
var a = s("735250"),
  n = s("470079"),
  i = s("913527"),
  l = s.n(i),
  r = s("442837"),
  o = s("846519"),
  d = s("481060"),
  u = s("533307"),
  c = s("812206"),
  S = s("981632"),
  E = s("314897"),
  T = s("82142"),
  _ = s("246946"),
  I = s("509545"),
  N = s("55563"),
  g = s("15887"),
  f = s("285952"),
  m = s("366695"),
  A = s("259580"),
  C = s("572004"),
  O = s("669079"),
  h = s("296848"),
  R = s("474936"),
  p = s("689938"),
  M = s("449256");

function D(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class x extends n.PureComponent {
  componentWillUnmount() {
    this._copyModeTimeout.stop()
  }
  get copyButtonText() {
    switch (this.state.copyMode) {
      case d.CopyInputModes.SUCCESS:
        return p.default.Messages.BILLING_GIFT_COPIED;
      case d.CopyInputModes.ERROR:
        return p.default.Messages.FAILED;
      default:
        return p.default.Messages.COPY
    }
  }
  handleRevoke(e) {
    u.default.revokeGiftCode(e)
  }
  render() {
    let {
      hideCode: e,
      giftCode: t
    } = this.props, {
      copyMode: s
    } = this.state;
    return (0, a.jsxs)(f.default, {
      direction: f.default.Direction.VERTICAL,
      className: M.giftCodeRow,
      children: [(0, a.jsx)(d.CopyInput, {
        className: M.codeText,
        value: (0, O.getGiftCodeURL)(t.code),
        text: this.copyButtonText,
        mode: s,
        supportsCopy: C.SUPPORTS_COPY,
        hideMessage: e ? p.default.Messages.GIFT_INVENTORY_HIDDEN : null,
        onCopy: this.handleCopy,
        buttonColor: d.ButtonColors.BRAND,
        buttonLook: d.ButtonLooks.FILLED
      }), (0, a.jsxs)("div", {
        className: M.subTextRow,
        children: [null != t.expiresAt ? (0, a.jsxs)(n.Fragment, {
          children: [p.default.Messages.GIFT_INVENTORY_EXPIRES_IN.format({
            hours: t.expiresAt.diff(l()(), "h")
          }), " ", "—\xa0"]
        }) : null, (0, a.jsx)(d.Clickable, {
          tag: "a",
          onClick: () => this.handleRevoke(t.code),
          children: p.default.Messages.REVOKE
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), D(this, "_copyModeTimeout", new o.Timeout), D(this, "state", {
      copyMode: d.CopyInputModes.DEFAULT
    }), D(this, "handleCopy", e => {
      let {
        giftCode: t,
        sku: s
      } = this.props;
      (0, O.trackGiftCodeCopy)(t, s);
      try {
        (0, C.copy)(e), this.setState({
          copyMode: d.CopyInputModes.SUCCESS
        })
      } catch (e) {
        this.setState({
          copyMode: d.CopyInputModes.ERROR
        })
      }
      this._copyModeTimeout.start(1e3, () => {
        this.setState({
          copyMode: d.CopyInputModes.DEFAULT
        })
      })
    })
  }
}
class L extends n.PureComponent {
  componentDidMount() {
    this._loadedAt = Date.now()
  }
  renderTitle() {
    let e;
    let {
      sku: t,
      subscriptionPlan: s,
      giftCodeBatchId: n
    } = this.props;
    return e = n === R.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID ? p.default.Messages.BLACK_FRIDAY_PROMOTION_GIFT_INVENTORY_TITLE : n === R.STICKERS_GIFT_CODE_BATCH_ID && null != s ? (s.interval === R.SubscriptionIntervalTypes.MONTH ? p.default.Messages.STICKERS_GIFT_INVENTORY_TITLE_MONTH : p.default.Messages.STICKERS_GIFT_INVENTORY_TITLE_YEAR).format({
      skuName: t.name,
      intervalCount: s.intervalCount
    }) : null == s ? t.name : (s.interval === R.SubscriptionIntervalTypes.MONTH ? p.default.Messages.GIFT_INVENTORY_SUBSCRIPTION_MONTHS : p.default.Messages.GIFT_INVENTORY_SUBSCRIPTION_YEARS).format({
      skuName: t.name,
      intervalCount: s.intervalCount
    }), (0, a.jsx)("div", {
      className: M.gameName,
      children: e
    })
  }
  renderGenerateGiftCodeRow() {
    return (0, a.jsxs)(f.default, {
      justify: f.default.Justify.BETWEEN,
      align: f.default.Align.CENTER,
      className: M.generateCodeRow,
      children: [(0, a.jsx)("div", {
        className: M.codeText,
        children: p.default.Messages.GIFT_INVENTORY_GENERATE_HELP
      }), (0, a.jsx)(d.Button, {
        submitting: this.state.isCreating,
        size: d.Button.Sizes.SMALL,
        color: d.Button.Colors.BRAND,
        onClick: this.handleGenerateGiftCode,
        children: p.default.Messages.GIFT_INVENTORY_GENERATE_LINK
      })]
    })
  }
  setIsHovered(e) {
    this.setState({
      isHovered: e
    })
  }
  render() {
    let {
      entitlements: e,
      application: t,
      giftCodes: s,
      className: i,
      sku: l,
      isFetching: r,
      hideCodes: o,
      giftStyle: u
    } = this.props, {
      isOpen: c
    } = this.state;
    return (0, a.jsxs)(g.default, {
      className: i,
      children: [(0, a.jsx)(d.Clickable, {
        onClick: this.handleToggleOpen,
        className: M.card,
        onMouseEnter: () => this.setIsHovered(!0),
        onMouseLeave: () => this.setIsHovered(!1),
        children: (0, a.jsx)(g.default.Header, {
          splashArtURL: t.getSplashURL(512),
          children: (0, a.jsxs)("div", {
            className: M.cardHeader,
            children: [(0, a.jsxs)(f.default, {
              align: f.default.Align.CENTER,
              children: [null != u ? (0, a.jsx)(S.default, {
                giftStyle: u,
                className: M.seasonalGiftBox,
                shouldAnimate: this.state.isHovered
              }) : (0, a.jsx)(m.default, {
                game: t,
                size: m.default.Sizes.MEDIUM,
                skuId: l.id
              }), (0, a.jsxs)("div", {
                className: M.headerText,
                children: [this.renderTitle(), (0, a.jsx)("div", {
                  className: M.subTextHeader,
                  children: p.default.Messages.GIFT_INVENTORY_COPIES.format({
                    copies: e.length
                  })
                })]
              })]
            }), (0, a.jsx)(A.default, {
              direction: c ? A.default.Directions.UP : A.default.Directions.DOWN,
              className: M.expandIcon
            })]
          })
        })
      }), c ? (0, a.jsx)(g.default.Body, {
        children: r ? (0, a.jsx)(d.Spinner, {
          className: M.spinner
        }) : (0, a.jsxs)(n.Fragment, {
          children: [s.length < e.length ? this.renderGenerateGiftCodeRow() : null, s.map(e => (0, a.jsx)(x, {
            giftCode: e,
            sku: l,
            hideCode: o
          }, e.code))]
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), D(this, "_loadedAt", null), D(this, "state", {
      isOpen: !1,
      isCreating: !1,
      isHovered: !1
    }), D(this, "handleGenerateGiftCode", async e => {
      e.stopPropagation();
      let {
        skuId: t,
        subscriptionPlanId: s,
        giftStyle: a
      } = this.props;
      this.setState({
        isCreating: !0
      }), await u.default.createGiftCode(t, s, a), this.setState({
        isCreating: !1,
        isOpen: !0
      })
    }), D(this, "handleToggleOpen", () => {
      let {
        skuId: e,
        subscriptionPlanId: t,
        loadedAt: s
      } = this.props, a = !this.state.isOpen;
      (null == s || null == this._loadedAt || s < this._loadedAt) && a && u.default.fetchUserGiftCodesForSKU(e, t), this.setState({
        isOpen: !this.state.isOpen
      })
    })
  }
}
t.default = r.default.connectStores([N.default, _.default, T.default, c.default, I.default, E.default], e => {
  let {
    skuId: t,
    subscriptionPlanId: s,
    giftStyle: a
  } = e, n = N.default.get(t);
  if (null == n) throw Error("SKU was unavailable while rendering gift.");
  let i = T.default.getForGifterSKUAndPlan(E.default.getId(), t, s).filter(e => !e.isClaimed).filter(e => e.giftStyle === a);
  return {
    sku: n,
    hideCodes: _.default.enabled,
    isFetching: T.default.getUserGiftCodesFetchingForSKUAndPlan(t, s),
    loadedAt: T.default.getUserGiftCodesLoadedAtForSKUAndPlan(t, s),
    application: c.default.getApplication(n.applicationId),
    subscriptionPlan: null != s ? (0, h.getOrFetchSubscriptionPlan)(s) : null,
    giftCodes: i
  }
})(L)