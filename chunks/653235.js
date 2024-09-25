n.d(t, {
    Z: function () {
        return b;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(442837),
    d = n(377108),
    _ = n(692547),
    E = n(481060),
    f = n(68405),
    h = n(527429),
    p = n(656733),
    m = n(251625),
    I = n(985375),
    T = n(132748),
    g = n(353903),
    S = n(215016),
    A = n(981631),
    v = n(689938),
    N = n(516534);
function O(e, t, n) {
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
let R = (e, t) => (0, i.jsx)(g.G0, { columns: e }, t);
function C(e) {
    var t;
    let n = u().sample(u().values(e));
    return {
        type: A.wI2.FAVORITES,
        name: v.Z.Messages.CATEGORY_FAVORITE,
        icon: E.StarIcon,
        src: null != n ? n.src : 'https://media.giphy.com/media/1TOSaJsWtnhe0/giphy.gif',
        format: null !== (t = null == n ? void 0 : n.format) && void 0 !== t ? t : d.EO.IMAGE
    };
}
class y extends a.PureComponent {
    componentDidMount() {
        0 === this.props.trendingCategories.length && (0, f.Tg)();
    }
    getData() {
        return this.memoizedData(this.state.favoritesTile, this.props.trendingCategories, this.props.hideFavoritesTile);
    }
    renderCategoryExtras(e) {
        let { name: t, icon: n, type: r } = e;
        return (0, i.jsxs)(a.Fragment, {
            children: [
                (0, i.jsx)('div', { className: r === A.wI2.FAVORITES ? N.categoryFadeBlurple : N.categoryFade }),
                (0, i.jsxs)('div', {
                    className: N.categoryText,
                    children: [
                        null != n
                            ? (0, i.jsx)(n, {
                                  className: N.categoryIcon,
                                  color: 'currentColor'
                              })
                            : null,
                        (0, i.jsx)('span', {
                            className: N.categoryName,
                            children: t
                        })
                    ]
                })
            ]
        });
    }
    render() {
        return (0, i.jsx)(h.Z, {
            getItemGrid: this.getItemGrid,
            getCoordsMap: this.getCoordsMap,
            onFocus: this.handleFocus,
            onSelect: this.handleSelect,
            children: (0, i.jsx)(T.Z, {
                desiredItemWidth: 200,
                maxColumns: 6,
                children: this.renderContent
            })
        });
    }
    constructor(...e) {
        super(...e),
            O(this, '_masonryRef', a.createRef()),
            O(this, 'state', {
                favoritesTile: C(this.props.favorites),
                selectedIndex: {
                    column: 0,
                    row: 0
                },
                focusedId: null
            }),
            O(this, 'handleFocus', (e) => {
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
            O(this, 'handleSelect', (e) => {
                let { onSelectItem: t } = this.props,
                    n = this.getData().find((t) => t.name === e);
                null != n && null != t && t(n.type, n.name);
            }),
            O(this, 'getItemKey', (e, t) => {
                if (e > 0) return null;
                let n = this.getData()[t];
                return null != n ? n.name : null;
            }),
            O(
                this,
                'memoizedData',
                (0, m.oH)(function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return n ? [...t] : [e, ...t];
                })
            ),
            O(this, 'renderItem', (e, t, n, r) => {
                if (e > 0) return null;
                let a = this.getData()[t];
                if (null == a) return;
                let { onSelectItem: o, imagePool: s, videoPool: l } = this.props,
                    { focusedId: u } = this.state;
                return (0, i.jsx)(
                    S.iR,
                    {
                        format: a.format,
                        color: _.Z.unsafe_rawColors.PRIMARY_800.css,
                        src: a.src,
                        item: a,
                        index: t,
                        coords: n,
                        onClick: () => o(a.type, a.name),
                        renderExtras: this.renderCategoryExtras,
                        focused: a.name === u,
                        imagePool: s,
                        videoPool: l
                    },
                    r
                );
            }),
            O(this, 'renderContent', (e, t, n) => {
                let { className: r, trendingCategories: a } = this.props;
                return 0 === a.length
                    ? (0, i.jsx)(g.u$, {
                          columns: e,
                          width: t,
                          renderColumn: R
                      })
                    : (0, i.jsx)(E.MasonryList, {
                          ref: this._masonryRef,
                          fade: !0,
                          className: s()(N.container, r),
                          itemGutter: 12,
                          getItemKey: this.getItemKey,
                          columns: e,
                          getItemHeight: () => 110,
                          renderItem: this.renderItem,
                          sections: [this.getData().length],
                          chunkSize: 50
                      });
            }),
            O(this, 'getItemGrid', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getItemGrid() : [];
            }),
            O(this, 'getCoordsMap', () => {
                let { current: e } = this._masonryRef;
                return null != e ? e.getCoordsMap() : {};
            });
    }
}
function b(e) {
    let t = (0, c.e7)([p.Z], () => p.Z.getTrendingCategories()),
        n = (0, I.gG)(),
        r = (0, S.PY)();
    return (0, i.jsx)(y, {
        ...e,
        ...r,
        trendingCategories: t,
        favorites: n
    });
}
