n.d(t, {
  $: function() {
    return Z
  }
}), n(47120), n(411104);
var s, i = n(735250),
  l = n(470079),
  a = n(613828),
  r = n(442837),
  o = n(481060),
  c = n(558381),
  u = n(410575),
  d = n(498179),
  E = n(86357),
  _ = n(914602),
  I = n(568836),
  T = n(730749),
  N = n(112724),
  m = n(812206),
  h = n(283595),
  C = n(558314),
  S = n(55563),
  A = n(551428),
  p = n(73346),
  g = n(981631),
  f = n(689938),
  O = n(14994);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class M extends(s = l.Component) {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      },
      analyticsSection: t
    } = this.props;
    return {
      ...e,
      section: null != t ? t : g.jXE.APPLICATION_EMBED,
      object: g.qAy.CARD
    }
  }
  componentDidMount() {
    let {
      sku: e,
      skuId: t,
      storeListing: n
    } = this.props;
    (null == e || null == n) && (0, c.km)(t)
  }
  renderViewInStoreButton() {
    return (0, i.jsx)(o.Button.Link, {
      to: this.getStoreListingLocation(),
      className: O.actionButton,
      color: o.Button.Colors.GREEN,
      size: o.Button.Sizes.SMALL,
      children: f.Z.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE
    })
  }
  render() {
    let {
      sku: e,
      storeListing: t,
      width: n,
      fetchFailed: s,
      renderFallback: l
    } = this.props, r = n > I.aL;
    if (null == e || null == t) return s ? l() : (0, i.jsx)(I.OR, {
      isHorizontal: r
    });
    return e.productLine === g.POd.COLLECTIBLES ? (0, i.jsx)(u.Z, {
      section: g.jXE.APPLICATION_EMBED,
      children: this.renderApplicationTile(e, t)
    }) : (0, i.jsx)(u.Z, {
      section: g.jXE.APPLICATION_EMBED,
      children: (0, i.jsx)(a.rU, {
        onClick: this.handleLinkClick,
        to: this.getStoreListingLocation(),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        children: this.renderApplicationTile(e, t)
      })
    })
  }
  constructor(...e) {
    super(...e), R(this, "state", {
      playing: !1,
      muted: !0
    }), R(this, "handleToggleMute", () => {
      this.setState({
        muted: !this.state.muted
      })
    }), R(this, "handleMouseEnter", () => {
      this.setState({
        playing: !0
      })
    }), R(this, "handleMouseLeave", () => {
      this.setState({
        playing: !1
      })
    }), R(this, "getStoreListingLocation", () => {
      let {
        sku: e
      } = this.props;
      if (null == e) throw Error("Should not be link to ApplicationStoreListing without SKU");
      return (0, p.ZI)(e.id, {
        slug: e.slug,
        analyticsSource: this.analyticsLocation
      })
    }), R(this, "handleActionButtonClick", e => e.preventDefault()), R(this, "handleBuyButtonClick", e => e.preventDefault()), R(this, "handleLinkClick", e => {
      let {
        onEmbedClick: t
      } = this.props;
      null != t && t(e)
    }), R(this, "renderApplicationTile", (e, t) => {
      let {
        inLibrary: n,
        width: s,
        renderCustomTitle: l,
        renderCustomTagline: a,
        renderCustomMedia: r
      } = this.props, {
        playing: o,
        muted: c
      } = this.state, u = s > I.aL;
      return (0, i.jsx)(_.Z, {
        sku: e,
        storeListing: t,
        playing: o,
        muted: c,
        inLibrary: n,
        onToggleMute: this.handleToggleMute,
        renderCustomActions: () => this.renderActions(e),
        renderCustomTitle: l,
        renderCustomTagline: a,
        renderCustomMedia: r,
        isHorizontal: u,
        isEmbed: !0
      })
    }), R(this, "renderActions", e => {
      let {
        inLibrary: t,
        application: n,
        skuId: s,
        libraryApplication: l,
        renderCustomActions: a
      } = this.props;
      if (null != a) return (0, i.jsx)("div", {
        className: O.tileActions,
        children: a()
      });
      if (null == n) return null;
      let r = null != n && n.primarySkuId === s,
        c = null != l && l.hasFlag(g.eHb.HIDDEN);
      return (0, i.jsxs)("div", {
        className: O.tileActions,
        children: [!r || c ? this.renderViewInStoreButton() : (0, i.jsx)(d.Z, {
          application: n,
          customDisabledColor: o.Button.Colors.PRIMARY,
          size: o.Button.Sizes.SMALL,
          className: O.actionButton,
          source: g.Sbl.MESSAGE_EMBED,
          onClick: this.handleActionButtonClick
        }), t && !c || e.premium ? null : (0, i.jsx)(E.Z, {
          type: E.Z.Types.EMBED,
          sku: e,
          inLibrary: !1
        })]
      })
    })
  }
}
R(M, "defaultProps", {
  renderFallback: g.dG4
});
let x = [S.Z, C.Z, h.Z, A.Z];

function v(e) {
  let {
    skuId: t
  } = e, n = S.Z.get(t), s = null != n ? m.Z.getApplication(n.applicationId) : null;
  return {
    sku: n,
    application: s,
    fetchFailed: S.Z.didFetchingSkuFail(t),
    inLibrary: null != n && h.Z.hasApplication(n.applicationId, n.applicationId, !0),
    storeListing: null != n ? A.Z.getForSKU(n.id) : null,
    libraryApplication: null != n ? h.Z.getLibraryApplication(n.applicationId, n.applicationId, !0) : null
  }
}
let L = (0, N.Z)((0, T.Z)(M));
t.Z = r.ZP.connectStores(x, v)(L);
let Z = (0, T.Z)(r.ZP.connectStores(x, v)(M))