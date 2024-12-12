r.d(n, {
    Z: function () {
        return c;
    }
});
var i,
    a = r(47120);
var s = r(192379),
    o = r(981631);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function u(e) {
    switch (e) {
        case o.yXg.ARROW_DOWN:
            return 'ARROW_DOWN';
        case o.yXg.ARROW_UP:
            return 'ARROW_UP';
        case o.yXg.ARROW_LEFT:
            return 'ARROW_LEFT';
        case o.yXg.ARROW_RIGHT:
            return 'ARROW_RIGHT';
        default:
            return null;
    }
}
!(function (e) {
    (e.ARROW_UP = 'ARROW_UP'), (e.ARROW_DOWN = 'ARROW_DOWN'), (e.ARROW_LEFT = 'ARROW_LEFT'), (e.ARROW_RIGHT = 'ARROW_RIGHT');
})(i || (i = {}));
class c extends s.Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown, !0);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown, !0);
    }
    focusNext(e) {
        let { getItemGrid: n, onFocus: r } = this.props,
            { focusedColumn: i, focusedRow: a } = this.state;
        if (null == e) return;
        let s = n();
        if (null == s) return;
        let o = this.getNext(s, i, a, e);
        this.setState(
            {
                focusedColumn: o.column,
                focusedRow: o.row
            },
            () => {
                let e = this.calculateFocusedItem();
                null != e && null != r && r(e);
            }
        );
    }
    getNext(e, n, r, i) {
        let a, s, o, l;
        if (null == n || null == r)
            (s = 0),
                (o = 0),
                (a = {
                    column: 0,
                    row: 0
                });
        else
            switch (((s = n), (o = r), i)) {
                case 'ARROW_UP':
                    a = {
                        column: s,
                        row: Math.max(o - 1, 0)
                    };
                    break;
                case 'ARROW_DOWN':
                    a = {
                        column: s,
                        row: Math.min(o + 1, e[s].length - 1)
                    };
                    break;
                case 'ARROW_LEFT':
                    a = this.wrapPosition(e, s, o, -1);
                    break;
                case 'ARROW_RIGHT':
                    a = this.wrapPosition(e, s, o, 1);
            }
        return (
            null != a && (l = e[a.column][a.row]),
            (null == l || null == a) &&
                (l =
                    e[
                        (a = {
                            column: s,
                            row: o
                        }).column
                    ][a.row]),
            {
                column: a.column,
                row: a.row,
                id: l
            }
        );
    }
    calculateClosest(e, n) {
        let r;
        let i = this.props.getCoordsMap()[e];
        if (null == i) return;
        let a = Number.MAX_SAFE_INTEGER;
        for (let e = 0; e < n.length; e++) {
            let s = this.props.getCoordsMap()[n[e]];
            if (null == s) continue;
            let o = Math.abs(s.top - i.top);
            if (o < a) (a = o), (r = e);
            else break;
        }
        return r;
    }
    calculateFocusedItem() {
        let { getItemGrid: e } = this.props,
            { focusedRow: n, focusedColumn: r } = this.state,
            i = e();
        return null == i || null == r || null == n || null == i[r] || null == i[r][n] ? null : i[r][n];
    }
    render() {
        return this.props.children;
    }
    constructor(...e) {
        super(...e),
            l(this, 'state', {
                focusedColumn: null,
                focusedRow: null
            }),
            l(this, 'handleKeyDown', (e) => {
                let { onSelect: n } = this.props;
                switch (e.keyCode) {
                    case o.yXg.ARROW_DOWN:
                    case o.yXg.ARROW_UP:
                    case o.yXg.ARROW_LEFT:
                    case o.yXg.ARROW_RIGHT:
                        this.focusNext(u(e.keyCode));
                        break;
                    case o.yXg.ENTER:
                        let r = this.calculateFocusedItem();
                        null != r && null != n && (e.preventDefault(), e.stopPropagation(), n(r));
                }
            }),
            l(this, 'wrapPosition', (e, n, r, i) => {
                var a;
                let s = e.length,
                    o = Math.max(r * s + n + i, 0) % s,
                    l = null !== (a = this.calculateClosest(e[n][r], e[o])) && void 0 !== a ? a : r,
                    u = 0;
                return (
                    i < 0 && o > n && (u = -1),
                    i > 0 && o < n && (u = 1),
                    {
                        column: o,
                        row: l + u
                    }
                );
            });
    }
}
