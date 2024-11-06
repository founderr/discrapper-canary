n.d(t, {
    Pz: function () {
        return g;
    },
    am: function () {
        return m;
    }
}),
    n(47120);
var a,
    i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(481060),
    d = n(768762),
    u = n(446174);
function c(e, t, n) {
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
let h = {
    CENTER: u.alignCenter,
    LEFT: u.alignLeft
};
class p extends (a = r.PureComponent) {
    componentDidUpdate(e) {
        let { selectedIndex: t } = this.props;
        e.selectedIndex !== t && this.handleSelectedIndexChange(t);
    }
    render() {
        let { renderItem: e, items: t, vertical: n, paginationContainerClass: a, align: s } = this.props,
            d = n ? u.verticalPaginationItemContainer : u.horizontalPaginationItemContainer;
        return (0, i.jsx)(o.AdvancedScrollerAuto, {
            orientation: n ? 'vertical' : 'horizontal',
            className: l()(d, a, s),
            ref: this.handleSetScrollerRef,
            children: t.map((t, n) =>
                r.cloneElement(e(t, n), {
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
            c(this, '_scrollerRef', null),
            c(this, '_paginationItemRefs', []),
            c(this, 'handleSetScrollerRef', (e) => {
                this._scrollerRef = e;
            }),
            c(this, 'handleSelectedIndexChange', (e) => {
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
            c(this, 'handlePageClick', (e) => {
                let { onSetItem: t } = this.props;
                t(e);
            });
    }
}
c(p, 'Align', h),
    c(p, 'defaultProps', {
        scrollToPadding: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        align: h.CENTER
    });
class m extends r.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            className: l()(u.prevButtonContainer, e),
            onClick: this.handlePrevClick,
            children: (0, i.jsx)(d.Z, {
                className: u.arrow,
                direction: d.Z.Directions.LEFT
            })
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'handlePrevClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
class g extends r.PureComponent {
    render() {
        let { className: e } = this.props;
        return (0, i.jsx)(o.Button, {
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.NONE,
            className: l()(u.nextButtonContainer, e),
            onClick: this.handleNextClick,
            children: (0, i.jsx)(d.Z, {
                className: u.arrow,
                direction: d.Z.Directions.RIGHT
            })
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'handleNextClick', (e) => {
                e.stopPropagation(), e.preventDefault();
                let { onClick: t } = this.props;
                null == t || t(e);
            });
    }
}
t.ZP = p;
