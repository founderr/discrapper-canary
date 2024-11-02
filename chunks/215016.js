n.d(t, {
    PY: function () {
        return w;
    },
    iR: function () {
        return L;
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
    h = n(527429),
    p = n(788911),
    m = n(40851),
    g = n(29909),
    E = n(132748),
    v = n(981631),
    I = n(388032),
    S = n(877557);
function T(e, t, n) {
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
let b = [d.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, d.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, '#929AFA'],
    y = 1220,
    A = Array.from({ length: 16 }).map((e, t) => ({
        id: ''.concat(t),
        height: Math.floor(100 * Math.random()) + 120
    }));
function N(e) {
    var t;
    return null !== (t = e.id) && void 0 !== t ? t : e.src;
}
function C(e, t) {
    let n = A[t];
    return null == n ? 0 : n.height;
}
function R(e, t, n, i) {
    if (!(e > 0))
        return null == A[t]
            ? null
            : (0, r.jsx)(
                  'div',
                  {
                      className: S.placeholder,
                      style: {
                          animationDelay: ''.concat(75 * t, 'ms'),
                          ...n
                      }
                  },
                  i
              );
}
function O(e, t) {
    var n, r;
    return e > 0 ? '' : null !== (r = null === (n = A[t]) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : '';
}
function D(e) {
    return e === c.EO.VIDEO;
}
class L extends i.PureComponent {
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
                  src: e,
                  width: t,
                  height: n,
                  className: S.gif,
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
            className: S.result,
            'data-focused': a,
            onClick: this.handleClick,
            style: {
                backgroundColor: o ? void 0 : s,
                ...i
            },
            children: [D(n) ? null : this.renderGIF(), null != t ? t(e) : null]
        });
    }
    constructor(e) {
        super(e),
            T(this, 'ref', null),
            T(this, '_video', null),
            T(this, '_image', null),
            T(this, '_mounted', !0),
            T(this, 'handleCanPlay', () => {
                this._mounted && this.setState({ loaded: !0 });
            }),
            T(this, 'handleClick', () => {
                let { onClick: e, item: t, index: n } = this.props;
                null != e && e(t, n);
            });
        let { format: t, color: n, imagePool: r } = this.props;
        (this.state = {
            color: null == n ? l().sample(b) : n,
            loaded: !1
        }),
            !D(t) && ((this._image = r.getElement()), (this._image.onload = () => this.setState({ loaded: !0 })), (this._image.src = e.src));
    }
}
class x extends i.PureComponent {
    componentDidMount() {
        let { resultType: e, data: t } = this.props;
        e === v.wI2.FAVORITES && ((0, _.t1)(v.wI2.FAVORITES), (0, _.hM)(t, v.wI2.FAVORITES, { limit: null }));
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
            className: S.emptyHint,
            children:
                null != e
                    ? (0, r.jsxs)('div', {
                          className: S.emptyHintCard,
                          children: [
                              t
                                  ? (0, r.jsx)(f.StarIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: S.emptyHintFavorite
                                    })
                                  : null,
                              (0, r.jsx)('div', {
                                  className: S.emptyHintText,
                                  children: e
                              })
                          ]
                      })
                    : (0, r.jsx)('div', { className: S.emptyHintSpacer })
        });
    }
    renderEmptyFavorites() {
        return (0, r.jsx)(f.Scroller, {
            className: S.results,
            fade: !0,
            children: (0, r.jsxs)('div', {
                className: S.emptyHints,
                children: [this.renderEmptyFavorite(I.intl.string(I.t['3gyw4e']), !0), this.renderEmptyFavorite(I.intl.string(I.t.yThUi4)), this.renderEmptyFavorite(I.intl.string(I.t.MeP0SE)), Array.from({ length: 15 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(I.intl.string(I.t['5u99XV'])), Array.from({ length: 16 }).map((e, t) => (0, r.jsx)(i.Fragment, { children: this.renderEmptyFavorite() }, t)), this.renderEmptyFavorite(I.intl.string(I.t.o6CLLy))]
            })
        });
    }
    render() {
        let { data: e, resultQuery: t, query: n, resultType: i } = this.props;
        return 0 === e.length && t === n && i !== v.wI2.TRENDING_GIFS
            ? i === v.wI2.FAVORITES
                ? this.renderEmptyFavorites()
                : (0, r.jsx)(p.Z, {
                      message: I.intl.string(I.t['5dX4UF']),
                      className: S.noResults
                  })
            : (0, r.jsx)(
                  h.Z,
                  {
                      getItemGrid: this.getItemGrid,
                      getCoordsMap: this.getCoordsMap,
                      onFocus: this.handleFocus,
                      onSelect: this.handleSelect,
                      children: (0, r.jsx)(E.Z, {
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
            T(this, '_masonryRef', i.createRef()),
            T(this, 'prevResultQuery', null),
            T(this, 'state', { focusedId: null }),
            T(this, 'handleFocus', (e) => {
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
            T(this, 'handleSelect', (e) => {
                let t;
                let { data: n } = this.props,
                    r = n.findIndex((t) => N(t) === e);
                -1 !== r && (t = n[r]), null != t && this.selectItem(t, r);
            }),
            T(this, 'handleClickItem', (e, t) => {
                this.selectItem(e, t);
            }),
            T(this, 'handleScroll', () => {
                let { resultQuery: e } = this.props,
                    { current: t } = this._masonryRef;
                if (null == t) return;
                let { scrollTop: n, scrollHeight: r } = t.getScrollerState();
                r - n <= y && (e !== this.prevResultQuery && (0, _.mO)(e), (this.prevResultQuery = e));
            }),
            T(this, 'renderItem', (e, t, n, i) => {
                if (e > 0) return null;
                let { focusedId: a } = this.state,
                    s = this.props.data[t];
                return null == s
                    ? null
                    : (0, r.jsx)(
                          L,
                          {
                              item: s,
                              index: t,
                              format: s.format,
                              src: s.src,
                              coords: n,
                              onClick: this.handleClickItem,
                              renderExtras: () =>
                                  (0, r.jsx)(g.Z, {
                                      className: S.favButton,
                                      ...s
                                  }),
                              focused: N(s) === a,
                              imagePool: this.props.imagePool,
                              videoPool: this.props.videoPool
                          },
                          i
                      );
            }),
            T(this, 'getItemHeight', (e, t, n) => {
                if (e > 0) return 0;
                let r = this.props.data[t];
                return null == r ? 0 : n * (r.height / r.width);
            }),
            T(this, 'getItemKey', (e, t) => {
                var n;
                if (e > 0) return null;
                let r = this.props.data[t];
                return null != r ? (null !== (n = r.id) && void 0 !== n ? n : r.src) : null;
            }),
            T(this, 'renderSection', (e, t, n) => {
                let { onSelectSuggestion: a, suggestions: s } = this.props;
                return 1 === e
                    ? (0, r.jsx)(
                          'div',
                          {
                              className: S.endContainer,
                              style: t,
                              children:
                                  s.length > 0
                                      ? (0, r.jsxs)(i.Fragment, {
                                            children: [
                                                (0, r.jsx)('div', {
                                                    className: S.endText,
                                                    children: I.intl.string(I.t['3JGJo6'])
                                                }),
                                                (0, r.jsx)('div', {
                                                    className: S.searchSuggestions,
                                                    children: s.map((e) =>
                                                        (0, r.jsx)(
                                                            f.Button,
                                                            {
                                                                look: f.Button.Looks.OUTLINED,
                                                                color: f.Button.Colors.PRIMARY,
                                                                size: f.Button.Sizes.SMALL,
                                                                className: S.searchSuggestion,
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
            T(this, 'renderContent', (e, t, n) => {
                let { className: i, data: a, resultQuery: o, query: l, resultType: u } = this.props;
                return 0 === a.length && (o !== l || u === v.wI2.TRENDING_GIFS)
                    ? (0, r.jsx)(
                          f.MasonryList,
                          {
                              fade: !0,
                              className: s()(S.results, i),
                              sections: [A.length],
                              columns: e,
                              itemGutter: 12,
                              getItemKey: O,
                              getItemHeight: C,
                              renderItem: R,
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
                              className: s()(S.results, i),
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
            T(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            T(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function w() {
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
                        return (e.className = S.gif), (e.autoplay = !0), (e.loop = !0), (e.muted = !0), (e.preload = 'auto'), (e.controls = !1), e;
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
    let t = w();
    return (0, r.jsx)(x, {
        ...e,
        ...t
    });
};
