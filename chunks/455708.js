var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(570140),
    d = n(68405),
    _ = n(600164),
    E = n(28546),
    f = n(656733),
    h = n(985375),
    p = n(653235),
    m = n(215016),
    I = n(981631),
    T = n(149203),
    g = n(689938),
    S = n(175705);
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
let v = (e) => e.stopPropagation();
class N extends a.PureComponent {
    componentDidMount() {
        d.gK(), document.addEventListener('keydown', this.backToFrontPage), '' !== this.props.query && this.search(this.props.query, I.wI2.SEARCH);
    }
    componentWillUnmount() {
        c.Z.wait(() => d.v2()), document.removeEventListener('keydown', this.backToFrontPage);
    }
    search(e, t, n) {
        d.yC(e, t, n), '' === e ? this.setState({ resultType: null }) : this.state.resultType !== I.wI2.SEARCH && this.setState({ resultType: I.wI2.SEARCH });
    }
    renderHeaderContent() {
        let { query: e } = this.props,
            { resultType: t } = this.state;
        switch (t) {
            case I.wI2.FAVORITES:
                return (0, i.jsx)(u.FormTitle, {
                    tag: 'h5',
                    className: S.searchHeader,
                    children: g.Z.Messages.CATEGORY_FAVORITE
                });
            case I.wI2.TRENDING_GIFS:
                return (0, i.jsx)(u.FormTitle, {
                    tag: 'h5',
                    className: S.searchHeader,
                    children: g.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
                });
            default:
                return (0, i.jsx)(u.SearchBar, {
                    className: S.searchBar,
                    size: u.SearchBar.Sizes.MEDIUM,
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: g.Z.Messages.SEARCH_TENOR,
                    'aria-label': g.Z.Messages.SEARCH_TENOR,
                    ref: this.searchBarRef,
                    autoFocus: !0
                });
        }
    }
    renderHeader() {
        let { resultType: e } = this.state,
            t = null;
        return (
            null != e &&
                (t = (0, i.jsx)(u.Clickable, {
                    onClick: this.handleClearQuery,
                    className: S.backButton,
                    'aria-label': g.Z.Messages.BACK,
                    children: (0, i.jsx)(u.ArrowSmallLeftIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })),
            (0, i.jsxs)(_.Z, {
                align: _.Z.Align.CENTER,
                children: [t, this.renderHeaderContent()]
            })
        );
    }
    renderContent() {
        let { contentClassName: e, resultItems: t, resultQuery: n, query: r, favorites: a, searchOffset: o, searchLimit: s, searchTotalResults: l, suggestions: u, hideFavorites: c } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, i.jsx)(p.Z, {
                  className: e,
                  hideFavoritesTile: c,
                  onSelectItem: this.handleSelectItem
              })
            : (0, i.jsx)(m.ZP, {
                  className: e,
                  data: d === I.wI2.FAVORITES ? a : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: n,
                  query: r,
                  searchOffset: o,
                  searchLimit: s,
                  searchTotalResults: l,
                  suggestions: u,
                  onSelectSuggestion: this.handleSelectSuggestion
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, i.jsxs)('div', {
            id: T.vO,
            role: 'tabpanel',
            'aria-labelledby': T._3,
            className: s()(S.container, e),
            onClick: v,
            ref: t,
            children: [
                (0, i.jsx)('div', {
                    className: S.header,
                    children: this.renderHeader()
                }),
                (0, i.jsx)('div', {
                    className: S.content,
                    children: this.renderContent()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', { resultType: null }),
            A(this, 'searchBarRef', a.createRef()),
            A(this, 'backToFrontPage', (e) => {
                let { resultType: t } = this.state;
                e.keyCode === I.yXg.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery());
            }),
            A(this, 'handleChangeQuery', (e) => {
                (0, E.ql)(e), this.search(e, I.wI2.SEARCH);
            }),
            A(this, 'handleSelectSuggestion', (e) => {
                (0, E.ql)(''), d.v2(), this.search(e, I.wI2.SEARCH_SUGGESTION, !0);
            }),
            A(this, 'handleClearQuery', () => {
                let { current: e } = this.searchBarRef;
                (0, E.ql)(''), d.v2(), this.setState({ resultType: null }), null != e && e.focus();
            }),
            A(this, 'handleSelectGIF', (e) => {
                let { onSelectGIF: t } = this.props;
                null != t && t(e);
            }),
            A(this, 'handleSelectItem', (e, t) => {
                let { current: n } = this.searchBarRef;
                switch (e) {
                    case I.wI2.TRENDING_CATEGORY:
                        d.yC(t, I.wI2.TRENDING_CATEGORY, !0), null != n && n.focus();
                        break;
                    case I.wI2.TRENDING_GIFS:
                        d.UU();
                }
                this.setState({ resultType: e });
            });
    }
}
t.Z = a.forwardRef((e, t) => {
    !e.persistSearch && (0, E.ql)('');
    let {
            query: n,
            resultQuery: r,
            resultItems: a,
            suggestions: o
        } = (0, l.cj)([f.Z], () => ({
            query: f.Z.getQuery(),
            resultQuery: f.Z.getResultQuery(),
            resultItems: f.Z.getResultItems(),
            suggestions: f.Z.getSuggestions()
        })),
        s = (0, E.Iu)((e) => e.searchQuery),
        u = null != s && '' !== s ? s : n,
        c = (0, h.HI)();
    return (0, i.jsx)(N, {
        ...e,
        forwardedRef: t,
        query: u,
        resultQuery: r,
        resultItems: a,
        suggestions: o,
        favorites: c,
        searchOffset: 0,
        searchTotalResults: f.Z.getResultItems().length,
        searchLimit: null
    });
});
