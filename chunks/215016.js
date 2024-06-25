"use strict";
n.d(t, {
  PY: function() {
    return U
  },
  iR: function() {
    return P
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(392711),
  l = n.n(a),
  u = n(944611),
  _ = n(377108),
  c = n(692547),
  d = n(481060),
  E = n(68405),
  I = n(527429),
  T = n(788911),
  h = n(40851),
  f = n(29909),
  S = n(132748),
  A = n(981631),
  N = n(689938),
  m = n(13122);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = [c.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, c.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"],
  R = 1220,
  g = Array.from({
    length: 16
  }).map((e, t) => ({
    id: "".concat(t),
    height: Math.floor(100 * Math.random()) + 120
  }));

function C(e) {
  var t;
  return null !== (t = e.id) && void 0 !== t ? t : e.src
}

function v(e, t) {
  let n = g[t];
  return null == n ? 0 : n.height
}

function L(e, t, n, r) {
  if (!(e > 0)) return null == g[t] ? null : (0, i.jsx)("div", {
    className: m.placeholder,
    style: {
      animationDelay: "".concat(75 * t, "ms"),
      ...n
    }
  }, r)
}

function D(e, t) {
  var n, i;
  return e > 0 ? "" : null !== (i = null === (n = g[t]) || void 0 === n ? void 0 : n.id) && void 0 !== i ? i : ""
}

function M(e) {
  return e === _.EO.VIDEO
}
class P extends r.PureComponent {
  componentDidMount() {
    let {
      props: {
        format: e,
        src: t,
        coords: {
          width: n,
          height: i
        },
        videoPool: r
      },
      ref: s
    } = this;
    if (e !== _.EO.VIDEO || null == s) return;
    let o = r.getElement();
    o.oncanplay = this.handleCanPlay, o.src = t, o.width = n, o.height = i, s.appendChild(o), this._video = o
  }
  componentDidUpdate(e) {
    let {
      width: t,
      height: n
    } = this.props.coords;
    null != this._video && (e.coords.width !== t || e.coords.height !== n) && (this._video.width = t, this._video.height = n)
  }
  componentWillUnmount() {
    this._mounted = !1;
    let {
      _image: e,
      _video: t
    } = this, {
      imagePool: n,
      videoPool: i
    } = this.props;
    null != e && (this._image = null, n.poolElement(e)), null != t && (this._video = null, i.poolElement(t))
  }
  renderGIF() {
    let {
      src: e,
      coords: {
        width: t,
        height: n
      }
    } = this.props, {
      loaded: r
    } = this.state;
    return r ? (0, i.jsx)("img", {
      src: e,
      width: t,
      height: n,
      className: m.gif,
      alt: ""
    }) : null
  }
  render() {
    let {
      item: e,
      renderExtras: t,
      format: n,
      coords: r,
      focused: s
    } = this.props, {
      color: a,
      loaded: l
    } = this.state;
    return (0, i.jsxs)(d.Clickable, {
      tabIndex: -1,
      innerRef: e => {
        this.ref = e
      },
      className: o()(m.result, {
        [m.focused]: s
      }),
      onClick: this.handleClick,
      style: {
        backgroundColor: l ? void 0 : a,
        ...r
      },
      children: [M(n) ? null : this.renderGIF(), null != t ? t(e) : null]
    })
  }
  constructor(e) {
    super(e), O(this, "ref", null), O(this, "_video", null), O(this, "_image", null), O(this, "_mounted", !0), O(this, "handleCanPlay", () => {
      this._mounted && this.setState({
        loaded: !0
      })
    }), O(this, "handleClick", () => {
      let {
        onClick: e,
        item: t,
        index: n
      } = this.props;
      null != e && e(t, n)
    });
    let {
      format: t,
      color: n,
      imagePool: i
    } = this.props;
    this.state = {
      color: null == n ? l().sample(p) : n,
      loaded: !1
    }, !M(t) && (this._image = i.getElement(), this._image.onload = () => this.setState({
      loaded: !0
    }), this._image.src = e.src)
  }
}
class y extends r.PureComponent {
  componentDidMount() {
    let {
      resultType: e,
      data: t
    } = this.props;
    e === A.wI2.FAVORITES && ((0, E.t1)(A.wI2.FAVORITES), (0, E.hM)(t, A.wI2.FAVORITES, {
      limit: null
    }))
  }
  selectItem(e, t) {
    let {
      onSelectGIF: n,
      resultType: i,
      data: r,
      resultQuery: s
    } = this.props;
    null != n && n(e), (0, E.R7)({
      type: i,
      index: t,
      offset: this.props.searchOffset,
      limit: this.props.searchLimit,
      results: r,
      totalResults: this.props.searchTotalResults,
      query: s,
      gifId: e.id
    })
  }
  getSectionHeight(e) {
    return 1 === e ? 220 : 0
  }
  renderEmptyFavorite(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, i.jsx)("div", {
      className: m.emptyHint,
      children: null != e ? (0, i.jsxs)("div", {
        className: m.emptyHintCard,
        children: [t ? (0, i.jsx)(d.StarIcon, {
          size: "xs",
          color: "currentColor",
          className: m.emptyHintFavorite
        }) : null, (0, i.jsx)("div", {
          className: m.emptyHintText,
          children: e
        })]
      }) : (0, i.jsx)("div", {
        className: m.emptyHintSpacer
      })
    })
  }
  renderEmptyFavorites() {
    return (0, i.jsx)(d.Scroller, {
      className: m.results,
      fade: !0,
      children: (0, i.jsxs)("div", {
        className: m.emptyHints,
        children: [this.renderEmptyFavorite(N.Z.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(N.Z.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(N.Z.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({
          length: 15
        }).map((e, t) => (0, i.jsx)(r.Fragment, {
          children: this.renderEmptyFavorite()
        }, t)), this.renderEmptyFavorite(N.Z.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({
          length: 16
        }).map((e, t) => (0, i.jsx)(r.Fragment, {
          children: this.renderEmptyFavorite()
        }, t)), this.renderEmptyFavorite(N.Z.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
      })
    })
  }
  render() {
    let {
      data: e,
      resultQuery: t,
      query: n,
      resultType: r
    } = this.props;
    return 0 === e.length && t === n && r !== A.wI2.TRENDING_GIFS ? r === A.wI2.FAVORITES ? this.renderEmptyFavorites() : (0, i.jsx)(T.Z, {
      message: N.Z.Messages.NO_GIF_SEARCH_RESULTS,
      className: m.noResults
    }) : (0, i.jsx)(I.Z, {
      getItemGrid: this.getItemGrid,
      getCoordsMap: this.getCoordsMap,
      onFocus: this.handleFocus,
      onSelect: this.handleSelect,
      children: (0, i.jsx)(S.Z, {
        desiredItemWidth: 200,
        maxColumns: 8,
        children: this.renderContent
      })
    }, t)
  }
  constructor(...e) {
    super(...e), O(this, "_masonryRef", r.createRef()), O(this, "prevResultQuery", null), O(this, "state", {
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
      let t;
      let {
        data: n
      } = this.props, i = n.findIndex(t => C(t) === e); - 1 !== i && (t = n[i]), null != t && this.selectItem(t, i)
    }), O(this, "handleClickItem", (e, t) => {
      this.selectItem(e, t)
    }), O(this, "handleScroll", () => {
      let {
        resultQuery: e
      } = this.props, {
        current: t
      } = this._masonryRef;
      if (null == t) return;
      let {
        scrollTop: n,
        scrollHeight: i
      } = t.getScrollerState();
      i - n <= R && (e !== this.prevResultQuery && (0, E.mO)(e), this.prevResultQuery = e)
    }), O(this, "renderItem", (e, t, n, r) => {
      if (e > 0) return null;
      let {
        focusedId: s
      } = this.state, o = this.props.data[t];
      return null == o ? null : (0, i.jsx)(P, {
        item: o,
        index: t,
        format: o.format,
        src: o.src,
        coords: n,
        onClick: this.handleClickItem,
        renderExtras: () => (0, i.jsx)(f.Z, {
          className: m.favButton,
          ...o
        }),
        focused: C(o) === s,
        imagePool: this.props.imagePool,
        videoPool: this.props.videoPool
      }, r)
    }), O(this, "getItemHeight", (e, t, n) => {
      if (e > 0) return 0;
      let i = this.props.data[t];
      return null == i ? 0 : n * (i.height / i.width)
    }), O(this, "getItemKey", (e, t) => {
      var n;
      if (e > 0) return null;
      let i = this.props.data[t];
      return null != i ? null !== (n = i.id) && void 0 !== n ? n : i.src : null
    }), O(this, "renderSection", (e, t, n) => {
      let {
        onSelectSuggestion: s,
        suggestions: o
      } = this.props;
      return 1 === e ? (0, i.jsx)("div", {
        className: m.endContainer,
        style: t,
        children: o.length > 0 ? (0, i.jsxs)(r.Fragment, {
          children: [(0, i.jsx)("div", {
            className: m.endText,
            children: N.Z.Messages.GIF_PICKER_RELATED_SEARCH
          }), (0, i.jsx)("div", {
            className: m.searchSuggestions,
            children: o.map(e => (0, i.jsx)(d.Button, {
              look: d.Button.Looks.OUTLINED,
              color: d.Button.Colors.PRIMARY,
              size: d.Button.Sizes.SMALL,
              className: m.searchSuggestion,
              onClick: () => {
                s(e)
              },
              children: e
            }, e))
          })]
        }) : null
      }, n) : null
    }), O(this, "renderContent", (e, t, n) => {
      let {
        data: r,
        resultQuery: s,
        query: o,
        resultType: a
      } = this.props;
      return 0 === r.length && (s !== o || a === A.wI2.TRENDING_GIFS) ? (0, i.jsx)(d.MasonryList, {
        fade: !0,
        className: m.results,
        sections: [g.length],
        columns: e,
        itemGutter: 12,
        getItemKey: D,
        getItemHeight: v,
        renderItem: L,
        chunkSize: 128
      }, s) : (0, i.jsx)(d.MasonryList, {
        ref: this._masonryRef,
        fade: !0,
        itemGutter: 12,
        className: m.results,
        columns: e,
        sections: [r.length, 0],
        getItemKey: this.getItemKey,
        getItemHeight: this.getItemHeight,
        renderItem: this.renderItem,
        getSectionHeight: this.getSectionHeight,
        renderSection: this.renderSection,
        onScroll: this.handleScroll,
        chunkSize: 128
      }, "".concat(s, "-").concat(null != a ? a : ""))
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

function U() {
  let {
    renderWindow: e
  } = r.useContext(h.ZP), t = e.document, [n] = r.useState(() => new u.w(() => t.createElement("img"), e => {
    e.onload = null, e.src = ""
  })), [i] = r.useState(() => new u.w(() => {
    let e = t.createElement("video");
    return e.className = m.gif, e.autoplay = !0, e.loop = !0, e.muted = !0, e.preload = "auto", e.controls = !1, e
  }, e => {
    e.src = "", e.oncanplay = null;
    let {
      parentNode: t
    } = e;
    null != t && t.removeChild(e)
  }));
  return {
    imagePool: n,
    videoPool: i
  }
}
t.ZP = function(e) {
  let t = U();
  return (0, i.jsx)(y, {
    ...e,
    ...t
  })
}