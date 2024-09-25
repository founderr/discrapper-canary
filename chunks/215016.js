n.d(t, {
    PY: function () {
        return w;
    },
    iR: function () {
        return P;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(944611),
    d = n(377108),
    _ = n(692547),
    E = n(481060),
    f = n(68405),
    h = n(527429),
    p = n(788911),
    m = n(40851),
    I = n(29909),
    T = n(132748),
    g = n(981631),
    S = n(689938),
    A = n(877557);
function v(e, t, n) {
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
let N = [_.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, _.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'],
    O = 220,
    R = 1220,
    C = Array.from({ length: 16 }).map((e, t) => ({
        id: ''.concat(t),
        height: Math.floor(100 * Math.random()) + 120
    }));
function y(e) {
    var t;
    return null !== (t = e.id) && void 0 !== t ? t : e.src;
}
function b(e, t) {
    let n = C[t];
    return null == n ? 0 : n.height;
}
function L(e, t, n, r) {
    if (!(e > 0))
        return null == C[t]
            ? null
            : (0, i.jsx)(
                  'div',
                  {
                      className: A.placeholder,
                      style: {
                          animationDelay: ''.concat(75 * t, 'ms'),
                          ...n
                      }
                  },
                  r
              );
}
function D(e, t) {
    var n, r;
    return e > 0 ? '' : null !== (r = null === (n = C[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : '';
}
function M(e) {
    return e === d.EO.VIDEO;
}
class P extends a.PureComponent {
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
        if (e !== d.EO.VIDEO || null == a) return;
        let o = i.getElement();
        (o.oncanplay = this.handleCanPlay), (o.src = t), (o.width = n), (o.height = r), a.appendChild(o), (this._video = o);
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
            { loaded: r } = this.state;
        return r
            ? (0, i.jsx)('img', {
                  src: e,
                  width: t,
                  height: n,
                  className: A.gif,
                  alt: ''
              })
            : null;
    }
    render() {
        let { item: e, renderExtras: t, format: n, coords: r, focused: a } = this.props,
            { color: o, loaded: s } = this.state;
        return (0, i.jsxs)(E.Clickable, {
            tabIndex: -1,
            innerRef: (e) => {
                this.ref = e;
            },
            className: A.result,
            'data-focused': a,
            onClick: this.handleClick,
            style: {
                backgroundColor: s ? void 0 : o,
                ...r
            },
            children: [M(n) ? null : this.renderGIF(), null != t ? t(e) : null]
        });
    }
    constructor(e) {
        super(e),
            v(this, 'ref', null),
            v(this, '_video', null),
            v(this, '_image', null),
            v(this, '_mounted', !0),
            v(this, 'handleCanPlay', () => {
                this._mounted && this.setState({ loaded: !0 });
            }),
            v(this, 'handleClick', () => {
                let { onClick: e, item: t, index: n } = this.props;
                null != e && e(t, n);
            });
        let { format: t, color: n, imagePool: r } = this.props;
        (this.state = {
            color: null == n ? u().sample(N) : n,
            loaded: !1
        }),
            !M(t) && ((this._image = r.getElement()), (this._image.onload = () => this.setState({ loaded: !0 })), (this._image.src = e.src));
    }
}
class U extends a.PureComponent {
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === g.wI2.FAVORITES && ((0, f.t1)(g.wI2.FAVORITES), (0, f.hM)(t, g.wI2.FAVORITES, { limit: null }));
    }
    selectItem(e, t) {
        let { onSelectGIF: n, resultType: r, data: i, resultQuery: a } = this.props;
        null != n && n(e),
            (0, f.R7)({
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
        return 1 === e ? O : 0;
    }
    renderEmptyFavorite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.jsx)('div', {
            className: A.emptyHint,
            children:
                null != e
                    ? (0, i.jsxs)('div', {
                          className: A.emptyHintCard,
                          children: [
                              t
                                  ? (0, i.jsx)(E.StarIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: A.emptyHintFavorite
                                    })
                                  : null,
                              (0, i.jsx)('div', {
                                  className: A.emptyHintText,
                                  children: e
                              })
                          ]
                      })
                    : (0, i.jsx)('div', { className: A.emptyHintSpacer })
        });
    }
    renderEmptyFavorites() {
        return (0, i.jsx)(E.Scroller, {
            className: A.results,
            fade: !0,
            children: (0, i.jsxs)('div', {
                className: A.emptyHints,
                children: [this.renderEmptyFavorite(S.Z.Messages.NO_GIF_FAVORITES_HOW_TO_FAVORITE, !0), this.renderEmptyFavorite(S.Z.Messages.NO_GIF_FAVORITES_WHERE_TO_FAVORITE), this.renderEmptyFavorite(S.Z.Messages.NO_GIF_FAVORITES_GO_FAVORITE), Array.from({ length: 15 }).map((e, t) => (0, i.jsx)(a.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(S.Z.Messages.NO_GIF_FAVORITES_FLAVOR_FAVORITE_PLEASE), Array.from({ length: 16 }).map((e, t) => (0, i.jsx)(a.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(S.Z.Messages.NO_GIF_FAVORITES_FLAVOR_STILL_HERE)]
            })
        });
    }
    render() {
        let { data: e, resultQuery: t, query: n, resultType: r } = this.props;
        return 0 === e.length && t === n && r !== g.wI2.TRENDING_GIFS
            ? r === g.wI2.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, i.jsx)(p.Z, {
                      message: S.Z.Messages.NO_GIF_SEARCH_RESULTS,
                      className: A.noResults
                  })
            : (0, i.jsx)(
                  h.Z,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, i.jsx)(T.Z, {
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
            v(this, '_masonryRef', a.createRef()),
            v(this, 'prevResultQuery', null),
            v(this, 'state', { focusedId: null }),
            v(this, 'handleFocus', (e) => {
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
            v(this, 'handleSelect', (e) => {
                let t;
                let { data: n } = this.props,
                    r = n.findIndex((t) => y(t) === e);
                -1 !== r && (t = n[r]), null != t && this.selectItem(t, r);
            }),
            v(this, 'handleClickItem', (e, t) => {
                this.selectItem(e, t);
            }),
            v(this, 'handleScroll', () => {
                let { resultQuery: e } = this.props,
                    { current: t } = this._masonryRef;
                if (null == t) return;
                let { scrollTop: n, scrollHeight: r } = t.getScrollerState();
                r - n <= R && (e !== this.prevResultQuery && (0, f.mO)(e), (this.prevResultQuery = e));
            }),
            v(this, 'renderItem', (e, t, n, r) => {
                if (e > 0) return null;
                let { focusedId: a } = this.state,
                    o = this.props.data[t];
                return null == o
                    ? null
                    : (0, i.jsx)(
                          P,
                          {
                              item: o,
                              index: t,
                              format: o.format,
                              src: o.src,
                              coords: n,
                              onClick: this.handleClickItem,
                              renderExtras: () =>
                                  (0, i.jsx)(I.Z, {
                                      className: A.favButton,
                                      ...o
                                  }),
                              focused: y(o) === a,
                              imagePool: this.props.imagePool,
                              videoPool: this.props.videoPool
                          },
                          r
                      );
            }),
            v(this, 'getItemHeight', (e, t, n) => {
                if (e > 0) return 0;
                let r = this.props.data[t];
                return null == r ? 0 : n * (r.height / r.width);
            }),
            v(this, 'getItemKey', (e, t) => {
                var n;
                if (e > 0) return null;
                let r = this.props.data[t];
                return null != r ? (null !== (n = r.id) && void 0 !== n ? n : r.src) : null;
            }),
            v(this, 'renderSection', (e, t, n) => {
                let { onSelectSuggestion: r, suggestions: o } = this.props;
                return 1 === e
                    ? (0, i.jsx)(
                          'div',
                          {
                              className: A.endContainer,
                              style: t,
                              children:
                                  o.length > 0
                                      ? (0, i.jsxs)(a.Fragment, {
                                            children: [
                                                (0, i.jsx)('div', {
                                                    className: A.endText,
                                                    children: S.Z.Messages.GIF_PICKER_RELATED_SEARCH
                                                }),
                                                (0, i.jsx)('div', {
                                                    className: A.searchSuggestions,
                                                    children: o.map((e) =>
                                                        (0, i.jsx)(
                                                            E.Button,
                                                            {
                                                                look: E.Button.Looks.OUTLINED,
                                                                color: E.Button.Colors.PRIMARY,
                                                                size: E.Button.Sizes.SMALL,
                                                                className: A.searchSuggestion,
                                                                onClick: () => {
                                                                    r(e);
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
            v(this, 'renderContent', (e, t, n) => {
                let { className: r, data: a, resultQuery: o, query: l, resultType: u } = this.props;
                return 0 === a.length && (o !== l || u === g.wI2.TRENDING_GIFS)
                    ? (0, i.jsx)(
                          E.MasonryList,
                          {
                              fade: !0,
                              className: s()(A.results, r),
                              sections: [C.length],
                              columns: e,
                              itemGutter: 12,
                              getItemKey: D,
                              getItemHeight: b,
                              renderItem: L,
                              chunkSize: 128
                          },
                          o
                      )
                    : (0, i.jsx)(
                          E.MasonryList,
                          {
                              ref: this._masonryRef,
                              fade: !0,
                              itemGutter: 12,
                              className: s()(A.results, r),
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
            v(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            v(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function w() {
    let { renderWindow: e } = a.useContext(m.ZP),
        t = e.document,
        [n] = a.useState(
            () =>
                new c.w(
                    () => t.createElement('img'),
                    (e) => {
                        (e.onload = null), (e.src = '');
                    }
                )
        ),
        [r] = a.useState(
            () =>
                new c.w(
                    () => {
                        let e = t.createElement('video');
                        return (e.className = A.gif), (e.autoplay = !0), (e.loop = !0), (e.muted = !0), (e.preload = 'auto'), (e.controls = !1), e;
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
let x = function (e) {
    let t = w();
    return (0, i.jsx)(U, {
        ...e,
        ...t
    });
};
t.ZP = x;
