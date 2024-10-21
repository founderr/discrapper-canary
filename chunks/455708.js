n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(782690),
    l = n(442837),
    u = n(481060),
    c = n(570140),
    d = n(68405),
    _ = n(600164),
    E = n(28546),
    f = n(656733),
    h = n(985375),
    p = n(653235),
    I = n(215016),
    m = n(981631),
    T = n(149203),
    S = n(689938),
    g = n(175705);
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
let N = (e) => e.stopPropagation();
class R extends i.PureComponent {
    componentDidMount() {
        d.gK(), document.addEventListener('keydown', this.backToFrontPage), '' !== this.props.query && this.search(this.props.query, m.wI2.SEARCH);
    }
    componentWillUnmount() {
        c.Z.wait(() => d.v2()), document.removeEventListener('keydown', this.backToFrontPage);
    }
    componentDidUpdate() {
        this.state.resultType !== m.wI2.SEARCH && '' !== this.props.query && this.search(this.props.query, m.wI2.SEARCH);
    }
    search(e, t, n) {
        d.yC(e, t, n), '' === e ? this.setState({ resultType: null }) : this.state.resultType !== m.wI2.SEARCH && this.setState({ resultType: m.wI2.SEARCH });
    }
    renderHeaderContent() {
        let { query: e } = this.props,
            { resultType: t } = this.state;
        switch (t) {
            case m.wI2.FAVORITES:
                return (0, r.jsx)(u.FormTitle, {
                    tag: 'h5',
                    className: g.searchHeader,
                    children: S.Z.Messages.CATEGORY_FAVORITE
                });
            case m.wI2.TRENDING_GIFS:
                return (0, r.jsx)(u.FormTitle, {
                    tag: 'h5',
                    className: g.searchHeader,
                    children: S.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS
                });
            default:
                return (0, r.jsx)(u.SearchBar, {
                    className: g.searchBar,
                    size: u.SearchBar.Sizes.MEDIUM,
                    query: e,
                    onChange: this.handleChangeQuery,
                    onClear: this.handleClearQuery,
                    placeholder: S.Z.Messages.SEARCH_TENOR,
                    'aria-label': S.Z.Messages.SEARCH_TENOR,
                    ref: this.props.searchBarRef,
                    autoFocus: !0
                });
        }
    }
    renderHeader() {
        let { resultType: e } = this.state,
            t = null;
        return (
            null != e &&
                (t = (0, r.jsx)(u.Clickable, {
                    onClick: this.handleClearQuery,
                    className: g.backButton,
                    'aria-label': S.Z.Messages.BACK,
                    children: (0, r.jsx)(u.ArrowSmallLeftIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })),
            (0, r.jsxs)(_.Z, {
                align: _.Z.Align.CENTER,
                children: [t, this.renderHeaderContent()]
            })
        );
    }
    renderContent() {
        let { contentClassName: e, resultItems: t, resultQuery: n, query: i, favorites: a, searchOffset: s, searchLimit: o, searchTotalResults: l, suggestions: u, hideFavorites: c } = this.props,
            { resultType: d } = this.state;
        return null == d
            ? (0, r.jsx)(p.Z, {
                  className: e,
                  hideFavoritesTile: c,
                  onSelectItem: this.handleSelectItem
              })
            : (0, r.jsx)(I.ZP, {
                  className: e,
                  data: d === m.wI2.FAVORITES ? a : t,
                  onSelectGIF: this.handleSelectGIF,
                  resultType: d,
                  resultQuery: n,
                  query: i,
                  searchOffset: s,
                  searchLimit: o,
                  searchTotalResults: l,
                  suggestions: u,
                  onSelectSuggestion: this.handleSelectSuggestion
              });
    }
    render() {
        let { className: e, forwardedRef: t } = this.props;
        return (0, r.jsxs)('div', {
            id: T.vO,
            role: 'tabpanel',
            'aria-labelledby': T._3,
            className: s()(g.container, e),
            onClick: N,
            ref: t,
            children: [
                (0, r.jsx)('div', {
                    className: g.header,
                    children: this.renderHeader()
                }),
                (0, r.jsx)('div', {
                    className: g.content,
                    children: this.renderContent()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            A(this, 'state', { resultType: null }),
            A(this, 'backToFrontPage', (e) => {
                let { resultType: t } = this.state;
                e.keyCode === m.yXg.ESCAPE && null != t && (e.stopPropagation(), e.preventDefault(), this.handleClearQuery());
            }),
            A(this, 'handleChangeQuery', (e) => {
                (0, E.ql)(e), this.search(e, m.wI2.SEARCH);
            }),
            A(this, 'handleSelectSuggestion', (e) => {
                (0, E.ql)(''), d.v2(), this.search(e, m.wI2.SEARCH_SUGGESTION, !0);
            }),
            A(this, 'handleClearQuery', () => {
                let { current: e } = this.props.searchBarRef;
                (0, E.ql)(''), d.v2(), this.setState({ resultType: null }), null != e && e.focus();
            }),
            A(this, 'handleSelectGIF', (e) => {
                let { onSelectGIF: t } = this.props;
                null != t && t(e);
            }),
            A(this, 'handleSelectItem', (e, t) => {
                let { current: n } = this.props.searchBarRef;
                switch (e) {
                    case m.wI2.TRENDING_CATEGORY:
                        d.yC(t, m.wI2.TRENDING_CATEGORY, !0), null != n && n.focus();
                        break;
                    case m.wI2.TRENDING_GIFS:
                        d.UU();
                }
                this.setState({ resultType: e });
            });
    }
}
t.Z = i.forwardRef((e, t) => {
    !e.persistSearch && (0, E.ql)('');
    let {
            query: n,
            resultQuery: a,
            resultItems: s,
            suggestions: u
        } = (0, l.cj)([f.Z], () => ({
            query: f.Z.getQuery(),
            resultQuery: f.Z.getResultQuery(),
            resultItems: f.Z.getResultItems(),
            suggestions: f.Z.getSuggestions()
        })),
        { expressionPickerQuery: c, isSearchSuggestion: d } = (0, E.Iu)(
            (e) => ({
                expressionPickerQuery: e.searchQuery,
                isSearchSuggestion: e.isSearchSuggestion
            }),
            o.Z
        ),
        _ = (0, h.HI)(),
        p = i.createRef();
    return (
        i.useLayoutEffect(() => {
            if (d) {
                var e;
                null === (e = p.current) || void 0 === e || e.focus();
            }
        }, [d, p]),
        (0, r.jsx)(R, {
            ...e,
            forwardedRef: t,
            query: null != c && '' !== c ? c : n,
            resultQuery: a,
            resultItems: s,
            suggestions: u,
            favorites: _,
            searchOffset: 0,
            searchTotalResults: f.Z.getResultItems().length,
            searchLimit: null,
            searchBarRef: p
        })
    );
});
