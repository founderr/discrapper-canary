n.d(t, {
    W: function () {
        return d;
    },
    s: function () {
        return r;
    }
});
var r,
    i,
    a = n(47120);
var o = n(653041);
var s = n(470079),
    l = n(392711),
    u = n.n(l);
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
!(function (e) {
    (e.PAGE = 'PAGE'), (e.GAP = 'GAP'), (e.BACK = 'BACK'), (e.NEXT = 'NEXT');
})(r || (r = {}));
class d extends (i = s.PureComponent) {
    getNeighborBounds() {
        let { totalPageCount: e, maxVisiblePages: t, selectedPage: n } = this.props,
            r = Math.ceil(t / 2),
            i = Math.floor(t / 2),
            a = [1, e],
            [o, s] = (a = n <= r ? [1, t] : n > e - i ? [e - t + 1, e] : [n - r + 1, n + i]);
        return [Math.max(o, 1), Math.min(s, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: t, hideMaxPage: n } = this.props,
            [r, i] = this.getNeighborBounds(),
            a = {
                type: 'BACK',
                key: 'back',
                disabled: 1 === t,
                selected: !1,
                navigateToPage: this.handleBackward
            },
            o = {
                type: 'NEXT',
                key: 'next',
                disabled: t === e,
                selected: !1,
                navigateToPage: this.handleForward
            },
            s = [],
            l = [];
        return (
            r > 1 &&
                ((s = [
                    {
                        type: 'PAGE',
                        key: 'page-1',
                        targetPage: 1,
                        navigateToPage: () => this.handleJump(1)
                    },
                    {
                        type: 'GAP',
                        key: 'left-gap'
                    }
                ]),
                (r += 2)),
            i < e &&
                ((l = [
                    {
                        type: 'GAP',
                        key: 'right-gap'
                    }
                ]),
                !n &&
                    l.push({
                        type: 'PAGE',
                        key: 'page-'.concat(e),
                        targetPage: e,
                        navigateToPage: () => this.handleJump(e)
                    }),
                (i -= 2)),
            [
                a,
                ...s,
                ...u()
                    .range(r, i + 1)
                    .map((e) => ({
                        type: 'PAGE',
                        key: 'page-'.concat(e),
                        targetPage: e,
                        selected: e === t,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e)
                    })),
                ...l,
                o
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: t } = this.props;
        return t({
            pages: this.getPageList(),
            hasMultiplePages: e > 1
        });
    }
    constructor(...e) {
        super(...e),
            c(this, 'changePageTo', (e) => {
                let { selectedPage: t, onPageChange: n } = this.props;
                t !== e && null != n && n(e);
            }),
            c(this, 'handleForward', () => {
                this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount));
            }),
            c(this, 'handleBackward', () => {
                this.changePageTo(Math.max(this.props.selectedPage - 1, 1));
            }),
            c(this, 'handleJump', (e) => {
                this.changePageTo(e);
            });
    }
}
c(d, 'defaultProps', {
    maxVisiblePages: 9,
    hideMaxPage: !1
});
