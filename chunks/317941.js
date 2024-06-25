t(47120), t(411104);
var n = t(735250),
  a = t(470079),
  i = t(913527),
  r = t.n(i),
  o = t(442837),
  l = t(846519),
  c = t(481060),
  d = t(533307),
  _ = t(812206),
  E = t(981632),
  u = t(314897),
  T = t(82142),
  S = t(246946),
  I = t(509545),
  N = t(55563),
  C = t(15887),
  A = t(285952),
  m = t(366695),
  O = t(259580),
  g = t(572004),
  h = t(669079),
  R = t(296848),
  p = t(474936),
  x = t(689938),
  M = t(756369);

function D(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class f extends a.PureComponent {
  componentWillUnmount() {
    this._copyModeTimeout.stop()
  }
  get copyButtonText() {
    switch (this.state.copyMode) {
      case c.CopyInputModes.SUCCESS:
        return x.Z.Messages.BILLING_GIFT_COPIED;
      case c.CopyInputModes.ERROR:
        return x.Z.Messages.FAILED;
      default:
        return x.Z.Messages.COPY
    }
  }
  handleRevoke(e) {
    d.Z.revokeGiftCode(e)
  }
  render() {
    let {
      hideCode: e,
      giftCode: s
    } = this.props, {
      copyMode: t
    } = this.state;
    return (0, n.jsxs)(A.Z, {
      direction: A.Z.Direction.VERTICAL,
      className: M.giftCodeRow,
      children: [(0, n.jsx)(c.CopyInput, {
        className: M.codeText,
        value: (0, h.Nz)(s.code),
        text: this.copyButtonText,
        mode: t,
        supportsCopy: g.wS,
        hideMessage: e ? x.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
        onCopy: this.handleCopy,
        buttonColor: c.ButtonColors.BRAND,
        buttonLook: c.ButtonLooks.FILLED
      }), (0, n.jsxs)("div", {
        className: M.subTextRow,
        children: [null != s.expiresAt ? (0, n.jsxs)(a.Fragment, {
          children: [x.Z.Messages.GIFT_INVENTORY_EXPIRES_IN.format({
            hours: s.expiresAt.diff(r()(), "h")
          }), " ", "—\xa0"]
        }) : null, (0, n.jsx)(c.Clickable, {
          tag: "a",
          onClick: () => this.handleRevoke(s.code),
          children: x.Z.Messages.REVOKE
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), D(this, "_copyModeTimeout", new l.V7), D(this, "state", {
      copyMode: c.CopyInputModes.DEFAULT
    }), D(this, "handleCopy", e => {
      let {
        giftCode: s,
        sku: t
      } = this.props;
      (0, h.dM)(s, t);
      try {
        (0, g.JG)(e), this.setState({
          copyMode: c.CopyInputModes.SUCCESS
        })
      } catch (e) {
        this.setState({
          copyMode: c.CopyInputModes.ERROR
        })
      }
      this._copyModeTimeout.start(1e3, () => {
        this.setState({
          copyMode: c.CopyInputModes.DEFAULT
        })
      })
    })
  }
}
class L extends a.PureComponent {
  componentDidMount() {
    this._loadedAt = Date.now()
  }
  renderTitle() {
    let e;
    let {
      sku: s,
      subscriptionPlan: t,
      giftCodeBatchId: a
    } = this.props;
    return e = a === p.m8 ? x.Z.Messages.BLACK_FRIDAY_PROMOTION_GIFT_INVENTORY_TITLE : a === p.rX && null != t ? (t.interval === p.rV.MONTH ? x.Z.Messages.STICKERS_GIFT_INVENTORY_TITLE_MONTH : x.Z.Messages.STICKERS_GIFT_INVENTORY_TITLE_YEAR).format({
      skuName: s.name,
      intervalCount: t.intervalCount
    }) : null == t ? s.name : (t.interval === p.rV.MONTH ? x.Z.Messages.GIFT_INVENTORY_SUBSCRIPTION_MONTHS : x.Z.Messages.GIFT_INVENTORY_SUBSCRIPTION_YEARS).format({
      skuName: s.name,
      intervalCount: t.intervalCount
    }), (0, n.jsx)("div", {
      className: M.gameName,
      children: e
    })
  }
  renderGenerateGiftCodeRow() {
    return (0, n.jsxs)(A.Z, {
      justify: A.Z.Justify.BETWEEN,
      align: A.Z.Align.CENTER,
      className: M.generateCodeRow,
      children: [(0, n.jsx)("div", {
        className: M.codeText,
        children: x.Z.Messages.GIFT_INVENTORY_GENERATE_HELP
      }), (0, n.jsx)(c.Button, {
        submitting: this.state.isCreating,
        size: c.Button.Sizes.SMALL,
        color: c.Button.Colors.BRAND,
        onClick: this.handleGenerateGiftCode,
        children: x.Z.Messages.GIFT_INVENTORY_GENERATE_LINK
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
      application: s,
      giftCodes: t,
      className: i,
      sku: r,
      isFetching: o,
      hideCodes: l,
      giftStyle: d
    } = this.props, {
      isOpen: _
    } = this.state;
    return (0, n.jsxs)(C.Z, {
      className: i,
      children: [(0, n.jsx)(c.Clickable, {
        onClick: this.handleToggleOpen,
        className: M.card,
        onMouseEnter: () => this.setIsHovered(!0),
        onMouseLeave: () => this.setIsHovered(!1),
        children: (0, n.jsx)(C.Z.Header, {
          splashArtURL: s.getSplashURL(512),
          children: (0, n.jsxs)("div", {
            className: M.cardHeader,
            children: [(0, n.jsxs)(A.Z, {
              align: A.Z.Align.CENTER,
              children: [null != d ? (0, n.jsx)(E.Z, {
                giftStyle: d,
                className: M.seasonalGiftBox,
                shouldAnimate: this.state.isHovered
              }) : (0, n.jsx)(m.Z, {
                game: s,
                size: m.Z.Sizes.MEDIUM,
                skuId: r.id
              }), (0, n.jsxs)("div", {
                className: M.headerText,
                children: [this.renderTitle(), (0, n.jsx)("div", {
                  className: M.subTextHeader,
                  children: x.Z.Messages.GIFT_INVENTORY_COPIES.format({
                    copies: e.length
                  })
                })]
              })]
            }), (0, n.jsx)(O.Z, {
              direction: _ ? O.Z.Directions.UP : O.Z.Directions.DOWN,
              className: M.expandIcon
            })]
          })
        })
      }), _ ? (0, n.jsx)(C.Z.Body, {
        children: o ? (0, n.jsx)(c.Spinner, {
          className: M.spinner
        }) : (0, n.jsxs)(a.Fragment, {
          children: [t.length < e.length ? this.renderGenerateGiftCodeRow() : null, t.map(e => (0, n.jsx)(f, {
            giftCode: e,
            sku: r,
            hideCode: l
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
        skuId: s,
        subscriptionPlanId: t,
        giftStyle: n
      } = this.props;
      this.setState({
        isCreating: !0
      }), await d.Z.createGiftCode(s, t, n), this.setState({
        isCreating: !1,
        isOpen: !0
      })
    }), D(this, "handleToggleOpen", () => {
      let {
        skuId: e,
        subscriptionPlanId: s,
        loadedAt: t
      } = this.props, n = !this.state.isOpen;
      (null == t || null == this._loadedAt || t < this._loadedAt) && n && d.Z.fetchUserGiftCodesForSKU(e, s), this.setState({
        isOpen: !this.state.isOpen
      })
    })
  }
}
s.Z = o.ZP.connectStores([N.Z, S.Z, T.Z, _.Z, I.Z, u.default], e => {
  let {
    skuId: s,
    subscriptionPlanId: t,
    giftStyle: n
  } = e, a = N.Z.get(s);
  if (null == a) throw Error("SKU was unavailable while rendering gift.");
  let i = T.Z.getForGifterSKUAndPlan(u.default.getId(), s, t).filter(e => !e.isClaimed).filter(e => e.giftStyle === n);
  return {
    sku: a,
    hideCodes: S.Z.enabled,
    isFetching: T.Z.getUserGiftCodesFetchingForSKUAndPlan(s, t),
    loadedAt: T.Z.getUserGiftCodesLoadedAtForSKUAndPlan(s, t),
    application: _.Z.getApplication(a.applicationId),
    subscriptionPlan: null != t ? (0, R.oE)(t) : null,
    giftCodes: i
  }
})(L)