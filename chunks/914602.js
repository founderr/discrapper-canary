"use strict";
n.r(t), n("47120");
var s, a = n("735250"),
  l = n("470079"),
  i = n("120356"),
  r = n.n(i),
  o = n("86357"),
  u = n("54936"),
  d = n("55008"),
  c = n("592771"),
  f = n("305177"),
  E = n("73346"),
  _ = n("568836"),
  m = n("345898"),
  T = n("981631"),
  I = n("838674");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class h extends(s = l.PureComponent) {
  render() {
    let {
      sku: e,
      storeListing: t,
      isHorizontal: n,
      className: s,
      renderCustomTagline: l,
      renderCustomTitle: i,
      renderCustomMedia: r,
      isEmbed: o
    } = this.props, u = o ? _.ResponsiveEmbedTile : m.default;
    return (0, a.jsx)(u, {
      className: s,
      renderMedia: null != r ? r : this.renderMedia,
      renderTitle: null != i ? i : () => e.name,
      renderTagline: null != l ? l : () => t.tagline,
      renderActions: this.renderActions,
      isHorizontal: n
    })
  }
  constructor(...e) {
    super(...e), p(this, "renderActions", () => {
      let {
        inLibrary: e,
        sku: t,
        renderCustomActions: n,
        isMouseOver: s,
        showBuyInline: l
      } = this.props, i = (l || !t.requiresPayment) && !e;
      return null != n ? n() : (0, a.jsxs)("div", {
        className: I.priceOs,
        children: [(0, a.jsx)(o.default, {
          type: o.default.Types.DIRECTORY_TILE,
          sku: t,
          inLibrary: e,
          className: i && s ? I.tilePriceWithVisibleBuyButton : I.tilePrice
        }), (0, a.jsx)(u.OperatingSystemSection, {
          systems: [T.OperatingSystems.WINDOWS],
          className: I.platform
        }), i ? (0, a.jsx)("div", {
          children: "deprecated!"
        }) : null]
      })
    }), p(this, "renderMedia", () => {
      let {
        playing: e,
        muted: t,
        showMediaPlaceholder: n,
        onToggleMute: s,
        sku: i,
        isHorizontal: o,
        storeListing: u
      } = this.props;
      return (0, a.jsxs)(l.Fragment, {
        children: [(0, a.jsx)(f.default, {
          className: r()(I.splashContainer, {
            [I.splashContainerHorizontal]: o
          }),
          video: null != u.previewVideo ? (0, E.getAssetURL)(i.applicationId, u.previewVideo) : void 0,
          image: null != u.thumbnail ? (0, E.getAssetURL)(i.applicationId, u.thumbnail, 600) : null,
          title: i.name,
          playing: e,
          muted: t,
          placeholder: n,
          onToggleMute: s,
          splashClassName: I.splashVideo,
          splashPlaceholderClassName: I.splashPlaceholder
        }), i.exclusive ? (0, a.jsx)(d.default, {
          className: r()(I.exclusiveRegular, {
            [I.exclusivePlaying]: e
          })
        }) : i.isTheGameAwardsWinner ? (0, a.jsx)(c.default, {
          className: r()(I.exclusiveRegular, {
            [I.exclusivePlaying]: e
          })
        }) : null]
      })
    })
  }
}
p(h, "defaultProps", {
  showMediaPlaceholder: !1,
  isMouseOver: !1,
  showBuyInline: !1,
  isHorizontal: !1,
  isEmbed: !1
}), t.default = h