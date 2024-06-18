"use strict";
n.d(t, {
  Z: function() {
    return g
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(442837),
  l = n(377108),
  u = n(692547),
  _ = n(481060),
  c = n(68405),
  d = n(527429),
  E = n(656733),
  I = n(251625),
  T = n(985375),
  h = n(132748),
  S = n(353903),
  f = n(215016),
  N = n(981631),
  A = n(689938),
  m = n(53995);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = (e, t) => (0, i.jsx)(S.G0, {
  columns: e
}, t);
class p extends r.PureComponent {
  componentDidMount() {
    0 === this.props.trendingCategories.length && (0, c.Tg)()
  }
  getData() {
    return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile)
  }
  renderCategoryExtras(e) {
    let {
      name: t,
      icon: n,
      type: s
    } = e;
    return (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)("div", {
        className: s === N.wI2.FAVORITES ? m.categoryFadeBlurple : m.categoryFade
      }), (0, i.jsxs)("div", {
        className: m.categoryText,
        children: [null != n ? (0, i.jsx)(n, {
          className: m.categoryIcon,
          color: "currentColor"
        }) : null, (0, i.jsx)("span", {
          className: m.categoryName,
          children: t
        })]
      })]
    })
  }
  render() {
    return (0, i.jsx)(d.Z, {
      getItemGrid: this.getItemGrid,
      getCoordsMap: this.getCoordsMap,
      onFocus: this.handleFocus,
      onSelect: this.handleSelect,
      children: (0, i.jsx)(h.Z, {
        desiredItemWidth: 200,
        maxColumns: 6,
        children: this.renderContent
      })
    })
  }
  constructor(...e) {
    super(...e), O(this, "_masonryRef", r.createRef()), O(this, "state", {
      favoritesTile: function(e) {
        var t;
        let n = o().sample(o().values(e));
        return {
          type: N.wI2.FAVORITES,
          name: A.Z.Messages.CATEGORY_FAVORITE,
          icon: _.StarIcon,
          src: null != n ? n.src : "https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif",
          format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : l.EO.IMAGE
        }
      }(this.props.favorites),
      selectedIndex: {
        column: 0,
        row: 0
      },
      focusedId: null
    }), O(this, "handleFocus", e => {
      let {
        current: t
      } = this._masonryRef;
      if (null == t) return;
      let n = t.getCoordsMap()[e];
      null != n && (t.scrollIntoViewRect({
        start: n.top - 10,
        end: n.top + n.height + 10
      }), this.setState({
        focusedId: e
      }))
    }), O(this, "handleSelect", e => {
      let {
        onSelectItem: t
      } = this.props, n = this.getData().find(t => t.name === e);
      null != n && null != t && t(n.type, n.name)
    }), O(this, "getItemKey", (e, t) => {
      if (e > 0) return null;
      let n = this.getData()[t];
      return null != n ? n.name : null
    }), O(this, "memoizedData", (0, I.oH)(function(e, t) {
      let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return n ? [...t] : [e, ...t]
    })), O(this, "renderItem", (e, t, n, r) => {
      if (e > 0) return null;
      let s = this.getData()[t];
      if (null == s) return;
      let {
        onSelectItem: o,
        imagePool: a,
        videoPool: l
      } = this.props, {
        focusedId: _
      } = this.state;
      return (0, i.jsx)(f.iR, {
        format: s.format,
        color: u.Z.unsafe_rawColors.PRIMARY_800.css,
        src: s.src,
        item: s,
        index: t,
        coords: n,
        onClick: () => o(s.type, s.name),
        renderExtras: this.renderCategoryExtras,
        focused: s.name === _,
        imagePool: a,
        videoPool: l
      }, r)
    }), O(this, "renderContent", (e, t, n) => {
      let {
        trendingCategories: r
      } = this.props;
      return 0 === r.length ? (0, i.jsx)(S.u$, {
        columns: e,
        width: t,
        renderColumn: R
      }) : (0, i.jsx)(_.MasonryList, {
        ref: this._masonryRef,
        fade: !0,
        className: m.container,
        itemGutter: 12,
        getItemKey: this.getItemKey,
        columns: e,
        getItemHeight: () => 110,
        renderItem: this.renderItem,
        sections: [this.getData().length],
        chunkSize: 50
      })
    }), O(this, "getItemGrid", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getItemGrid() : []
    }), O(this, "getCoordsMap", () => {
      let {
        current: e
      } = this._masonryRef;
      return null != e ? e.getCoordsMap() : {}
    })
  }
}

function g(e) {
  let t = (0, a.e7)([E.Z], () => E.Z.getTrendingCategories()),
    n = (0, T.gG)(),
    r = (0, f.PY)();
  return (0, i.jsx)(p, {
    ...e,
    ...r,
    trendingCategories: t,
    favorites: n
  })
}