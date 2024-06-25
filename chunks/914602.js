n(47120);
var s, i = n(735250),
  l = n(470079),
  a = n(120356),
  r = n.n(a),
  o = n(86357),
  c = n(54936),
  u = n(55008),
  d = n(592771),
  E = n(305177),
  _ = n(73346),
  I = n(568836),
  T = n(345898),
  m = n(981631),
  N = n(624179);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class C extends(s = l.PureComponent) {
  render() {
    let {
      sku: e,
      storeListing: t,
      isHorizontal: n,
      className: s,
      renderCustomTagline: l,
      renderCustomTitle: a,
      renderCustomMedia: r,
      isEmbed: o
    } = this.props, c = o ? I.$G : T.Z;
    return (0, i.jsx)(c, {
      className: s,
      renderMedia: null != r ? r : this.renderMedia,
      renderTitle: null != a ? a : () => e.name,
      renderTagline: null != l ? l : () => t.tagline,
      renderActions: this.renderActions,
      isHorizontal: n
    })
  }
  constructor(...e) {
    super(...e), h(this, "renderActions", () => {
      let {
        inLibrary: e,
        sku: t,
        renderCustomActions: n,
        isMouseOver: s,
        showBuyInline: l
      } = this.props, a = (l || !t.requiresPayment) && !e;
      return null != n ? n() : (0, i.jsxs)("div", {
        className: N.priceOs,
        children: [(0, i.jsx)(o.Z, {
          type: o.Z.Types.DIRECTORY_TILE,
          sku: t,
          inLibrary: e,
          className: a && s ? N.tilePriceWithVisibleBuyButton : N.tilePrice
        }), (0, i.jsx)(c.n, {
          systems: [m.TaA.WINDOWS],
          className: N.platform
        }), a ? (0, i.jsx)("div", {
          children: "deprecated!"
        }) : null]
      })
    }), h(this, "renderMedia", () => {
      let {
        playing: e,
        muted: t,
        showMediaPlaceholder: n,
        onToggleMute: s,
        sku: a,
        isHorizontal: o,
        storeListing: c
      } = this.props;
      return (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(E.Z, {
          className: r()(N.splashContainer, {
            [N.splashContainerHorizontal]: o
          }),
          video: null != c.previewVideo ? (0, _._W)(a.applicationId, c.previewVideo) : void 0,
          image: null != c.thumbnail ? (0, _._W)(a.applicationId, c.thumbnail, 600) : null,
          title: a.name,
          playing: e,
          muted: t,
          placeholder: n,
          onToggleMute: s,
          splashClassName: N.splashVideo,
          splashPlaceholderClassName: N.splashPlaceholder
        }), a.exclusive ? (0, i.jsx)(u.Z, {
          className: r()(N.exclusiveRegular, {
            [N.exclusivePlaying]: e
          })
        }) : a.isTheGameAwardsWinner ? (0, i.jsx)(d.Z, {
          className: r()(N.exclusiveRegular, {
            [N.exclusivePlaying]: e
          })
        }) : null]
      })
    })
  }
}
h(C, "defaultProps", {
  showMediaPlaceholder: !1,
  isMouseOver: !1,
  showBuyInline: !1,
  isHorizontal: !1,
  isEmbed: !1
}), t.Z = C