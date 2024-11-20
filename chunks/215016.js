n.d(t, {
    PY: function () {
        return k;
    },
    iR: function () {
        return M;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(944611),
    c = n(377108),
    d = n(692547),
    f = n(481060),
    _ = n(68405),
    p = n(527429),
    h = n(788911),
    m = n(40851),
    g = n(849727),
    E = n(198620),
    v = n(29909),
    I = n(591759),
    b = n(132748),
    T = n(981631),
    S = n(388032),
    y = n(877557);
function A(e, t, n) {
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
let N = [d.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'],
    C = 1220,
    R = Array.from({ length: 16 }).map((e, t) => ({
        id: ''.concat(t),
        height: Math.floor(100 * Math.random()) + 120
    }));
function O(e) {
    var t;
    return null !== (t = e.id) && void 0 !== t ? t : e.src;
}
function D(e, t) {
    let n = R[t];
    return null == n ? 0 : n.height;
}
function L(e, t, n, i) {
    if (!(e > 0))
        return null == R[t]
            ? null
            : (0, r.jsx)(
                  'div',
                  {
                      className: y.placeholder,
                      style: {
                          animationDelay: ''.concat(75 * t, 'ms'),
                          ...n
                      }
                  },
                  i
              );
}
function x(e, t) {
    var n, r;
    return e > 0 ? '' : null !== (r = null === (n = R[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : '';
}
function w(e) {
    return e === c.EO.VIDEO;
}
class M extends i.PureComponent {
    componentDidMount() {
        let {
            props: {
                format: e,
                src: t,
                coords: { width: n, height: r },
                videoPool: i
            },
            ref: a
        } = this;
        if (e !== c.EO.VIDEO || null == a) return;
        let s = i.getElement();
        (s.oncanplay = this.handleCanPlay), (s.src = t), (s.width = n), (s.height = r), a.appendChild(s), (this._video = s);
    }
    componentDidUpdate(e) {
        let { width: t, height: n } = this.props.coords;
        null != this._video && (e.coords.width !== t || e.coords.height !== n) && ((this._video.width = t), (this._video.height = n));
    }
    componentWillUnmount() {
        this._mounted = !1;
        let { _image: e, _video: t } = this,
            { imagePool: n, videoPool: r } = this.props;
        null != e && ((this._image = null), n.poolElement(e)), null != t && ((this._video = null), r.poolElement(t));
    }
    renderGIF() {
        let {
                src: e,
                coords: { width: t, height: n }
            } = this.props,
            { loaded: i } = this.state;
        return i
            ? (0, r.jsx)('img', {
                  src: (function (e) {
                      var t;
                      if (!g.Z.getCurrentConfig({ location: 'gif_picker' }).enabled) return e;
                      let n = I.Z.toURLSafe(e);
                      return null != n && ((t = n), ((0, E._M)(t) || (0, E.MO)(t)) && t.pathname.toLowerCase().endsWith('.webp')) ? (n.searchParams.set('animated', 'true'), n.toString()) : e;
                  })(e),
                  width: t,
                  height: n,
                  className: y.gif,
                  alt: ''
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: n, coords: i, focused: a } = this.props,
            { color: s, loaded: o } = this.state;
        return (0, r.jsxs)(f.Clickable, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: y.result,
            'data-focused': a,
            onClick: this.handleClick,
            style: {
                backgroundColor: o ? void 0 : s,
                ...i
            },
            children: [w(n) ? null : this.renderGIF(), null != t ? t(e) : null]
        });
    }
    constructor(e) {
        super(e),
            A(this, 'ref', null),
            A(this, '_video', null),
            A(this, '_image', null),
            A(this, '_mounted', !0),
            A(this, 'handleCanPlay', () => {
                this._mounted && this.setState({ loaded: !0 });
            }),
            A(this, 'handleClick', () => {
                let { onClick: e, item: t, index: n } = this.props;
                null != e && e(t, n);
            });
        let { format: t, color: n, imagePool: r } = this.props;
        (this.state = {
            color: null == n ? l().sample(N) : n,
            loaded: !1
        }),
            !w(t) && ((this._image = r.getElement()), (this._image.onload = () => this.setState({ loaded: !0 })), (this._image.src = e.src));
    }
}
class P extends i.PureComponent {
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === T.wI2.FAVORITES && ((0, _.t1)(T.wI2.FAVORITES), (0, _.hM)(t, T.wI2.FAVORITES, { limit: null }));
    }
    selectItem(e, t) {
        let { onSelectGIF: n, resultType: r, data: i, resultQuery: a } = this.props;
        null != n && n(e),
            (0, _.R7)({
                type: r,
                index: t,
                offset: this.props.searchOffset,
                limit: this.props.searchLimit,
                results: i,
                totalResults: this.props.searchTotalResults,
                query: a,
                gifId: e.id
            });
    }
    getSectionHeight(e) {
        return 1 === e ? 220 : 0;
    }
    renderEmptyFavorite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, r.jsx)('div', {
            className: y.emptyHint,
            children:
                null != e
                    ? (0, r.jsxs)('div', {
                          className: y.emptyHintCard,
                          children: [
                              t
                                  ? (0, r.jsx)(f.StarIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: y.emptyHintFavorite
                                    })
                                  : null,
                              (0, r.jsx)('div', {
                                  className: y.emptyHintText,
                                  children: e
                              })
                          ]
                      })
                    : (0, r.jsx)('div', { className: y.emptyHintSpacer })
        });
    }
    renderEmptyFavorites() {
        return (0, r.jsx)(f.Scroller, {
            className: y.results,
            fade: !0,
            children: (0, r.jsxs)('div', {
                className: y.emptyHints,
                children: [this.renderEmptyFavorite(S.intl.string(S.t['3gyw4e']), !0), this.renderEmptyFavorite(S.intl.string(S.t.yThUi4)), this.renderEmptyFavorite(S.intl.string(S.t.MeP0SE)), Array.from({ length: 15 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(S.intl.string(S.t['5u99XV'])), Array.from({ length: 16 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(S.intl.string(S.t.o6CLLy))]
            })
        });
    }
    render() {
        let { data: e, resultQuery: t, query: n, resultType: i } = this.props;
        return 0 === e.length && t === n && i !== T.wI2.TRENDING_GIFS
            ? i === T.wI2.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, r.jsx)(h.Z, {
                      message: S.intl.string(S.t['5dX4UF']),
                      className: y.noResults
                  })
            : (0, r.jsx)(
                  p.Z,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, r.jsx)(b.Z, {
                          desiredItemWidth: 200,
                          maxColumns: 8,
                          children: this.renderContent
                      })
                  },
                  t
              );
    }
    constructor(...e) {
        super(...e),
            A(this, '_masonryRef', i.createRef()),
            A(this, 'prevResultQuery', null),
            A(this, 'state', { focusedId: null }),
            A(this, 'handleFocus', (e) => {
                let { current: t } = this._masonryRef;
                if (null == t) return;
                let n = t.getCoordsMap()[e];
                null != n &&
                    (t.scrollIntoViewRect({
                        start: n.top - 10,
                        end: n.top + n.height + 10
                    }),
                    this.setState({ focusedId: e }));
            }),
            A(this, 'handleSelect', (e) => {
                let t;
                let { data: n } = this.props,
                    r = n.findIndex((t) => O(t) === e);
                -1 !== r && (t = n[r]), null != t && this.selectItem(t, r);
            }),
            A(this, 'handleClickItem', (e, t) => {
                this.selectItem(e, t);
            }),
            A(this, 'handleScroll', () => {
                let { resultQuery: e } = this.props,
                    { current: t } = this._masonryRef;
                if (null == t) return;
                let { scrollTop: n, scrollHeight: r } = t.getScrollerState();
                r - n <= C && (e !== this.prevResultQuery && (0, _.mO)(e), (this.prevResultQuery = e));
            }),
            A(this, 'renderItem', (e, t, n, i) => {
                if (e > 0) return null;
                let { focusedId: a } = this.state,
                    s = this.props.data[t];
                return null == s
                    ? null
                    : (0, r.jsx)(
                          M,
                          {
                              item: s,
                              index: t,
                              format: s.format,
                              src: s.src,
                              coords: n,
                              onClick: this.handleClickItem,
                              renderExtras: () =>
                                  (0, r.jsx)(v.Z, {
                                      className: y.favButton,
                                      ...s
                                  }),
                              focused: O(s) === a,
                              imagePool: this.props.imagePool,
                              videoPool: this.props.videoPool
                          },
                          i
                      );
            }),
            A(this, 'getItemHeight', (e, t, n) => {
                if (e > 0) return 0;
                let r = this.props.data[t];
                return null == r ? 0 : n * (r.height / r.width);
            }),
            A(this, 'getItemKey', (e, t) => {
                var n;
                if (e > 0) return null;
                let r = this.props.data[t];
                return null != r ? (null !== (n = r.id) && void 0 !== n ? n : r.src) : null;
            }),
            A(this, 'renderSection', (e, t, n) => {
                let { onSelectSuggestion: a, suggestions: s } = this.props;
                return 1 === e
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: y.endContainer,
                              style: t,
                              children:
                                  s.length > 0
                                      ? (0, r.jsxs)(i.Fragment, {
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: y.endText,
                                                    children: S.intl.string(S.t['3JGJo6'])
                                                }),
                                                (0, r.jsx)('div', {
                                                    className: y.searchSuggestions,
                                                    children: s.map((e) =>
                                                        (0, r.jsx)(
                                                            f.Button,
                                                            {
                                                                look: f.Button.Looks.OUTLINED,
                                                                color: f.Button.Colors.PRIMARY,
                                                                size: f.Button.Sizes.SMALL,
                                                                className: y.searchSuggestion,
                                                                onClick: () => {
                                                                    a(e);
                                                                },
                                                                children: e
                                                            },
                                                            e
                                                        )
                                                    )
                                                })
                                            ]
                                        })
                                      : null
                          },
                          n
                      )
                    : null;
            }),
            A(this, 'renderContent', (e, t, n) => {
                let { className: i, data: a, resultQuery: o, query: l, resultType: u } = this.props;
                return 0 === a.length && (o !== l || u === T.wI2.TRENDING_GIFS)
                    ? (0, r.jsx)(
                          f.MasonryList,
                          {
                              fade: !0,
                              className: s()(y.results, i),
                              sections: [R.length],
                              columns: e,
                              itemGutter: 12,
                              getItemKey: x,
                              getItemHeight: D,
                              renderItem: L,
                              chunkSize: 128
                          },
                          o
                      )
                    : (0, r.jsx)(
                          f.MasonryList,
                          {
                              ref: this._masonryRef,
                              fade: !0,
                              itemGutter: 12,
                              className: s()(y.results, i),
                              columns: e,
                              sections: [a.length, 0],
                              getItemKey: this.getItemKey,
                              getItemHeight: this.getItemHeight,
                              renderItem: this.renderItem,
                              getSectionHeight: this.getSectionHeight,
                              renderSection: this.renderSection,
                              onScroll: this.handleScroll,
                              chunkSize: 128
                          },
                          ''.concat(o, '-').concat(null != u ? u : '')
                      );
            }),
            A(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            A(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function k() {
    let { renderWindow: e } = i.useContext(m.ZP),
        t = e.document,
        [n] = i.useState(
            () =>
                new u.w(
                    () => t.createElement('img'),
                    (e) => {
                        (e.onload = null), (e.src = '');
                    }
                )
        ),
        [r] = i.useState(
            () =>
                new u.w(
                    () => {
                        let e = t.createElement('video');
                        return (e.className = y.gif), (e.autoplay = !0), (e.loop = !0), (e.muted = !0), (e.preload = 'auto'), (e.controls = !1), e;
                    },
                    (e) => {
                        (e.src = ''), (e.oncanplay = null);
                        let { parentNode: t } = e;
                        null != t && t.removeChild(e);
                    }
                )
        );
    return {
        imagePool: n,
        videoPool: r
    };
}
t.ZP = function (e) {
    let t = k();
    return (0, r.jsx)(P, {
        ...e,
        ...t
    });
};
