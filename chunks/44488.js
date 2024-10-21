n.d(t, {
    Pz: function () {
        return h;
    },
    am: function () {
        return f;
    }
}),
    n(47120);
var r,
    i = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(481060),
    u = n(768762),
    c = n(446174);
function d(e, t, n) {
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
let _ = {
    CENTER: c.alignCenter,
    LEFT: c.alignLeft
};
class E extends (r = a.PureComponent) {
    componentDidUpdate(e) {
        let { selectedIndex: t } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t);
    }
    render() {
        let { renderItem: e, items: t, vertical: n, paginationContainerClass: r, align: s } = this.props,
            u = n ? c.verticalPaginationItemContainer : c.horizontalPaginationItemContainer;
        return (0, i.jsx)(l.AdvancedScrollerAuto, {
            orientation: n ? 'vertical' : 'horizontal',
            className: o()(u, r, s),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) =>
                a.cloneElement(e(t, n), {
                    onClick: () => this.handlePageClick(n),
                    key: n,
                    ref: (e) => {
                        this._paginationItemRefs[n] = e;
                    }
                })
            )
        });
    }
    constructor(...e) {
        super(...e),
            d(this, '_scrollerRef', null),
            d(this, '_paginationItemRefs', []),
            d(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            d(this, 'handleSelectedIndexChange', (e) => {
                let t = this._scrollerRef;
                if (null == t) return;
                let n = this._paginationItemRefs[e];
                if (null != n)
                    t.scrollIntoViewNode({
                        node: n,
                        animate: !0,
                        padding: this.props.scrollToPadding
                    });
            }),
            d(this, 'handlePageClick', (e) => {
                let { onSetItem: t } = this.props;
                t(e);
            });
    }
}
d(E, 'Align', _),
    d(E, 'defaultProps', {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        align: _.CENTER
    });
class f extends a.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            className: o()(c.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(u.Z, {
                className: c.arrow,
                direction: u.Z.Directions.LEFT
            })
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'handlePrevClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
class h extends a.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(l.Button, {
            look: l.Button.Looks.BLANK,
            size: l.Button.Sizes.NONE,
            className: o()(c.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(u.Z, {
                className: c.arrow,
                direction: u.Z.Directions.RIGHT
            })
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'handleNextClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
t.ZP = E;
