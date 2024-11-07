n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(392711),
    l = n.n(o),
    u = n(442837),
    c = n(377108),
    d = n(692547),
    f = n(481060),
    _ = n(68405),
    h = n(527429),
    p = n(656733),
    m = n(251625),
    g = n(985375),
    E = n(132748),
    v = n(353903),
    I = n(215016),
    S = n(981631),
    T = n(388032),
    b = n(736940);
function y(e, t, n) {
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
let A = (e, t) => (0, r.jsx)(v.G0, { columns: e }, t);
class N extends i.PureComponent {
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, _.Tg)();
    }
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, icon: n, type: a } = e;
        return (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)('div', { className: a === S.wI2.FAVORITES ? b.categoryFadeBlurple : b.categoryFade }),
                (0, r.jsxs)('div', {
                    className: b.categoryText,
                    children: [
                        null != n
                            ? (0, r.jsx)(n, {
                                  className: b.categoryIcon,
                                  color: 'currentColor'
                              })
                            : null,
                        (0, r.jsx)('span', {
                            className: b.categoryName,
                            children: t
                        })
                    ]
                })
            ]
        });
    }
    render() {
        return (0, r.jsx)(h.Z, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, r.jsx)(E.Z, {
                desiredItemWidth: 200,
                maxColumns: 6,
                children: this.renderContent
            })
        });
    }
    constructor(...e) {
        super(...e),
            y(this, '_masonryRef', i.createRef()),
            y(this, 'state', {
                favoritesTile: (function (e) {
                    var t;
                    let n = l().sample(l().values(e));
                    return {
                        type: S.wI2.FAVORITES,
                        name: T.intl.string(T.t.y3LQCA),
                        icon: f.StarIcon,
                        src: null != n ? n.src : 'https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif',
                        format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : c.EO.IMAGE
                    };
                })(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0
                },
                focusedId: null
            }),
            y(this, 'handleFocus', (e) => {
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
            y(this, 'handleSelect', (e) => {
                let { onSelectItem: t } = this.props,
                    n = this.getData().find((t) => t.name === e);
                null != n && null != t && t(n.type, n.name);
            }),
            y(this, 'getItemKey', (e, t) => {
                if (e > 0) return null;
                let n = this.getData()[t];
                return null != n ? n.name : null;
            }),
            y(
                this,
                'memoizedData',
                (0, m.oH)(function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? [...t] : [e, ...t];
                })
            ),
            y(this, 'renderItem', (e, t, n, i) => {
                if (e > 0) return null;
                let a = this.getData()[t];
                if (null == a) return;
                let { onSelectItem: s, imagePool: o, videoPool: l } = this.props,
                    { focusedId: u } = this.state;
                return (0, r.jsx)(
                    I.iR,
                    {
                        format: a.format,
                        color: d.Z.unsafe_rawColors.PRIMARY_800.css,
                        src: a.src,
                        item: a,
                        index: t,
                        coords: n,
                        onClick: () => s(a.type, a.name),
                        renderExtras: this.renderCategoryExtras,
                        focused: a.name === u,
                        imagePool: o,
                        videoPool: l
                    },
                    i
                );
            }),
            y(this, 'renderContent', (e, t, n) => {
                let { className: i, trendingCategories: a } = this.props;
                return 0 === a.length
                    ? (0, r.jsx)(v.u$, {
                          columns: e,
                          width: t,
                          renderColumn: A
                      })
                    : (0, r.jsx)(f.MasonryList, {
                          ref: this._masonryRef,
                          fade: !0,
                          className: s()(b.container, i),
                          itemGutter: 12,
                          getItemKey: this.getItemKey,
                          columns: e,
                          getItemHeight: () => 110,
                          renderItem: this.renderItem,
                          sections: [this.getData().length],
                          chunkSize: 50
                      });
            }),
            y(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            y(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function C(e) {
    let t = (0, u.e7)([p.Z], () => p.Z.getTrendingCategories()),
        n = (0, g.gG)(),
        i = (0, I.PY)();
    return (0, r.jsx)(N, {
        ...e,
        ...i,
        trendingCategories: t,
        favorites: n
    });
}
