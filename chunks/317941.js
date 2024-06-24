t(47120), t(411104);
var n = t(735250),
  i = t(470079),
  a = t(913527),
  l = t.n(a),
  r = t(442837),
  o = t(846519),
  c = t(481060),
  E = t(533307),
  d = t(812206),
  _ = t(981632),
  T = t(314897),
  S = t(82142),
  u = t(246946),
  I = t(509545),
  N = t(55563),
  A = t(15887),
  C = t(285952),
  O = t(366695),
  m = t(259580),
  h = t(572004),
  g = t(669079),
  R = t(296848),
  M = t(474936),
  x = t(689938),
  p = t(756369);

function D(e, s, t) {
  return s in e ? Object.defineProperty(e, s, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[s] = t, e
}
class L extends i.PureComponent {
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
    E.Z.revokeGiftCode(e)
  }
  render() {
    let {
      hideCode: e,
      giftCode: s
    } = this.props, {
      copyMode: t
    } = this.state;
    return (0, n.jsxs)(C.Z, {
      direction: C.Z.Direction.VERTICAL,
      className: p.giftCodeRow,
      children: [(0, n.jsx)(c.CopyInput, {
        className: p.codeText,
        value: (0, g.Nz)(s.code),
        text: this.copyButtonText,
        mode: t,
        supportsCopy: h.wS,
        hideMessage: e ? x.Z.Messages.GIFT_INVENTORY_HIDDEN : null,
        onCopy: this.handleCopy,
        buttonColor: c.ButtonColors.BRAND,
        buttonLook: c.ButtonLooks.FILLED
      }), (0, n.jsxs)("div", {
        className: p.subTextRow,
        children: [null != s.expiresAt ? (0, n.jsxs)(i.Fragment, {
          children: [x.Z.Messages.GIFT_INVENTORY_EXPIRES_IN.format({
            hours: s.expiresAt.diff(l()(), "h")
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
    super(...e), D(this, "_copyModeTimeout", new o.V7), D(this, "state", {
      copyMode: c.CopyInputModes.DEFAULT
    }), D(this, "handleCopy", e => {
      let {
        giftCode: s,
        sku: t
      } = this.props;
      (0, g.dM)(s, t);
      try {
        (0, h.JG)(e), this.setState({
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
class P extends i.PureComponent {
  componentDidMount() {
    this._loadedAt = Date.now()
  }
  renderTitle() {
    let e;
    let {
      sku: s,
      subscriptionPlan: t,
      giftCodeBatchId: i
    } = this.props;
    return e = i === M.m8 ? x.Z.Messages.BLACK_FRIDAY_PROMOTION_GIFT_INVENTORY_TITLE : i === M.rX && null != t ? (t.interval === M.rV.MONTH ? x.Z.Messages.STICKERS_GIFT_INVENTORY_TITLE_MONTH : x.Z.Messages.STICKERS_GIFT_INVENTORY_TITLE_YEAR).format({
      skuName: s.name,
      intervalCount: t.intervalCount
    }) : null == t ? s.name : (t.interval === M.rV.MONTH ? x.Z.Messages.GIFT_INVENTORY_SUBSCRIPTION_MONTHS : x.Z.Messages.GIFT_INVENTORY_SUBSCRIPTION_YEARS).format({
      skuName: s.name,
      intervalCount: t.intervalCount
    }), (0, n.jsx)("div", {
      className: p.gameName,
      children: e
    })
  }
  renderGenerateGiftCodeRow() {
    return (0, n.jsxs)(C.Z, {
      justify: C.Z.Justify.BETWEEN,
      align: C.Z.Align.CENTER,
      className: p.generateCodeRow,
      children: [(0, n.jsx)("div", {
        className: p.codeText,
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
      className: a,
      sku: l,
      isFetching: r,
      hideCodes: o,
      giftStyle: E
    } = this.props, {
      isOpen: d
    } = this.state;
    return (0, n.jsxs)(A.Z, {
      className: a,
      children: [(0, n.jsx)(c.Clickable, {
        onClick: this.handleToggleOpen,
        className: p.card,
        onMouseEnter: () => this.setIsHovered(!0),
        onMouseLeave: () => this.setIsHovered(!1),
        children: (0, n.jsx)(A.Z.Header, {
          splashArtURL: s.getSplashURL(512),
          children: (0, n.jsxs)("div", {
            className: p.cardHeader,
            children: [(0, n.jsxs)(C.Z, {
              align: C.Z.Align.CENTER,
              children: [null != E ? (0, n.jsx)(_.Z, {
                giftStyle: E,
                className: p.seasonalGiftBox,
                shouldAnimate: this.state.isHovered
              }) : (0, n.jsx)(O.Z, {
                game: s,
                size: O.Z.Sizes.MEDIUM,
                skuId: l.id
              }), (0, n.jsxs)("div", {
                className: p.headerText,
                children: [this.renderTitle(), (0, n.jsx)("div", {
                  className: p.subTextHeader,
                  children: x.Z.Messages.GIFT_INVENTORY_COPIES.format({
                    copies: e.length
                  })
                })]
              })]
            }), (0, n.jsx)(m.Z, {
              direction: d ? m.Z.Directions.UP : m.Z.Directions.DOWN,
              className: p.expandIcon
            })]
          })
        })
      }), d ? (0, n.jsx)(A.Z.Body, {
        children: r ? (0, n.jsx)(c.Spinner, {
          className: p.spinner
        }) : (0, n.jsxs)(i.Fragment, {
          children: [t.length < e.length ? this.renderGenerateGiftCodeRow() : null, t.map(e => (0, n.jsx)(L, {
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
        skuId: s,
        subscriptionPlanId: t,
        giftStyle: n
      } = this.props;
      this.setState({
        isCreating: !0
      }), await E.Z.createGiftCode(s, t, n), this.setState({
        isCreating: !1,
        isOpen: !0
      })
    }), D(this, "handleToggleOpen", () => {
      let {
        skuId: e,
        subscriptionPlanId: s,
        loadedAt: t
      } = this.props, n = !this.state.isOpen;
      (null == t || null == this._loadedAt || t < this._loadedAt) && n && E.Z.fetchUserGiftCodesForSKU(e, s), this.setState({
        isOpen: !this.state.isOpen
      })
    })
  }
}
s.Z = r.ZP.connectStores([N.Z, u.Z, S.Z, d.Z, I.Z, T.default], e => {
  let {
    skuId: s,
    subscriptionPlanId: t,
    giftStyle: n
  } = e, i = N.Z.get(s);
  if (null == i) throw Error("SKU was unavailable while rendering gift.");
  let a = S.Z.getForGifterSKUAndPlan(T.default.getId(), s, t).filter(e => !e.isClaimed).filter(e => e.giftStyle === n);
  return {
    sku: i,
    hideCodes: u.Z.enabled,
    isFetching: S.Z.getUserGiftCodesFetchingForSKUAndPlan(s, t),
    loadedAt: S.Z.getUserGiftCodesLoadedAtForSKUAndPlan(s, t),
    application: d.Z.getApplication(i.applicationId),
    subscriptionPlan: null != t ? (0, R.oE)(t) : null,
    giftCodes: a
  }
})(P)