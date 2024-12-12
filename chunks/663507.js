r.d(n, {
    DP: function () {
        return f;
    },
    ZI: function () {
        return g;
    },
    ZP: function () {
        return m;
    },
    t$: function () {
        return _;
    }
});
var i = r(757143);
var a = r(724458);
var s = r(47120);
var o = r(653041);
var l = r(733860);
var u = r(411104);
function c(e, n, r) {
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
let d = (e) => '__section__'.concat(e),
    f = (e) => '__section_header__'.concat(e),
    _ = (e) => parseInt(e.replace(/^__section__/, ''), 10);
function h(e) {
    return e.reduce((e, n, r) => (n < e[0] ? [n, r] : e), [e[0], 0]);
}
let p = () => 0;
class m {
    getPadding(e) {
        var n;
        return null == this.padding ? this.itemGutter : 'number' == typeof this.padding ? this.padding : null !== (n = this.padding[e]) && void 0 !== n ? n : this.itemGutter;
    }
    getPaddingLeft() {
        return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding('left');
    }
    getPaddingRight() {
        return null != this.paddingHorizontal ? this.paddingHorizontal : this.getPadding('right');
    }
    getPaddingTop() {
        return null != this.paddingVertical ? this.paddingVertical : this.getPadding('top');
    }
    getPaddingBottom() {
        return null != this.paddingVertical ? this.paddingVertical : this.getPadding('bottom');
    }
    getSectionGutter() {
        return null != this.sectionGutter ? this.sectionGutter : this.itemGutter;
    }
    mergeProps(e) {
        let { sections: n = this.sections, columns: r = this.columns, itemGutter: i = this.itemGutter, removeEdgeItemGutters: a = this.removeEdgeItemGutters, getItemKey: s = this.getItemKey, getItemHeight: o = this.getItemHeight, getSectionHeight: l = this.getSectionHeight, bufferWidth: u = this.bufferWidth, padding: c = this.padding, paddingVertical: d = this.paddingVertical, paddingHorizontal: f = this.paddingHorizontal, marginLeft: _ = this.marginLeft, sectionGutter: h = this.sectionGutter, dir: p = this.dir } = e;
        if (this.sections !== n || this.columns !== r || this.itemGutter !== i || this.removeEdgeItemGutters !== a || this.getItemKey !== s || this.getSectionHeight !== l || this.getItemHeight !== o || this.bufferWidth !== u || this.padding !== c || this.paddingVertical !== d || this.paddingHorizontal !== f || this.marginLeft !== _ || this.sectionGutter !== h || this.dir !== p) (this.needsFullCompute = !0), (this.sections = n), (this.columns = r), (this.itemGutter = i), (this.getItemKey = s), (this.getSectionHeight = l), (this.getItemHeight = o), (this.bufferWidth = u), (this.padding = c), (this.paddingVertical = d), (this.paddingHorizontal = f), (this.marginLeft = _), (this.sectionGutter = h), (this.dir = p);
    }
    computeFullCoords() {
        var e, n;
        if (!this.needsFullCompute) return;
        let { columns: r, getItemKey: i, getItemHeight: a, itemGutter: s, getSectionHeight: o, bufferWidth: l, removeEdgeItemGutters: u } = this,
            c = 'rtl' === this.dir ? 'right' : 'left';
        (this.coordsMap = {}),
            (this.gridData = {
                boundaries: [],
                coordinates: {}
            }),
            (this.currentRow = 0),
            (this.lastColumnIndex = 0);
        let _ = this.getPaddingTop(),
            p = this.getPaddingBottom(),
            m = this.getPaddingLeft(),
            g = this.getPaddingRight(),
            E = null !== (e = this.marginLeft) && void 0 !== e ? e : 0;
        (this.columnHeights = Array(r).fill(_)), (this.columnWidth = (l - g - m - s * (r - 1) - (u ? s : 0)) / r), (this.itemGrid = []);
        let v = 0;
        for (; v < this.sections.length; ) {
            (this.gridData.boundaries[v] = this.currentRow), (this.currentRow = 0), (this.lastColumnIndex = 0);
            let e = this.sections[v],
                l = 0,
                u = o(v),
                _ = this.getMaxColumnHeight(this.columnHeights);
            v > 0 && (_ = _ - s + this.getSectionGutter());
            let p = u > 0 ? u + s : 0;
            for (let e = 0; e < this.columnHeights.length; e++) this.columnHeights[e] = _ + p;
            for (; l < e; ) {
                let e = i(v, l);
                if (null == e) {
                    l++;
                    continue;
                }
                let [r, o] = h(this.columnHeights);
                o < this.lastColumnIndex && this.currentRow++, (this.lastColumnIndex = o);
                let u = a(v, l, this.columnWidth),
                    d = {
                        position: 'absolute',
                        [c]: this.columnWidth * o + s * (o + 1) - s + m,
                        width: this.columnWidth,
                        top: r - _,
                        height: u
                    },
                    f = {
                        section: v,
                        row: this.currentRow,
                        column: o
                    };
                (this.coordsMap[e] = d), (this.gridData.coordinates[e] = f), (this.columnHeights[o] = r + u + s), (this.itemGrid[o] = null !== (n = this.itemGrid[o]) && void 0 !== n ? n : []), this.itemGrid[o].push(e), l++;
            }
            u > 0 &&
                (this.coordsMap[f(v)] = {
                    position: 'sticky',
                    [c]: m,
                    width: this.columnWidth * r + s * r,
                    top: 0,
                    height: u
                }),
                (this.coordsMap[d(v)] = {
                    position: 'absolute',
                    [c]: E,
                    width: this.columnWidth * r + s * (r - 1) + m + g,
                    top: _,
                    height: this.getMaxColumnHeight(this.columnHeights) - _
                }),
                v++;
        }
        (this.columnHeights = this.columnHeights.map((e) => e - s + p)), (this.totalHeight = this.getMaxColumnHeight()), (this.visibleSections = {}), (this.needsFullCompute = !1);
    }
    computeVisibleSections(e, n) {
        this.computeFullCoords();
        let { getItemKey: r, coordsMap: i } = this;
        this.visibleSections = {};
        let a = 0;
        for (; a < this.sections.length; ) {
            let s = this.sections[a],
                o = d(a),
                l = i[o];
            if (null == l) {
                a++;
                continue;
            }
            let { top: u } = l,
                c = u + l.height;
            if (u > n) break;
            if (c < e) {
                a++;
                continue;
            }
            let f = 0,
                _ = 1;
            for (c < n && c > e && ((f = s - 1), (_ = -1)), this.visibleSections[o] = []; f >= 0 && f < s; ) {
                let s = r(a, f),
                    l = null != s ? i[s] : null;
                if (null == s || null == l) {
                    f += _;
                    continue;
                }
                let { top: c, height: d } = l;
                c + u > e - d && c + u < n && (-1 === _ ? this.visibleSections[o].unshift([s, a, f]) : this.visibleSections[o].push([s, a, f])), (f += _);
            }
            if (u < e && c > n) break;
            a++;
        }
    }
    getMaxColumnHeight() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.columnHeights;
        return e.reduce((e, n) => Math.max(e, n), 0);
    }
    getState() {
        return {
            coordsMap: this.coordsMap,
            gridData: this.gridData,
            visibleSections: this.visibleSections,
            totalHeight: this.totalHeight
        };
    }
    constructor() {
        c(this, 'visibleSections', {}),
            c(this, 'gridData', {
                coordinates: {},
                boundaries: []
            }),
            c(this, 'coordsMap', {}),
            c(this, 'columnHeights', []),
            c(this, 'columnWidth', 0),
            c(this, 'totalHeight', 0),
            c(this, 'itemGrid', []),
            c(this, 'currentRow', 0),
            c(this, 'lastColumnIndex', 0),
            c(this, 'needsFullCompute', !0),
            c(this, 'bufferWidth', 0),
            c(this, 'sections', []),
            c(this, 'columns', 0),
            c(this, 'itemGutter', 0),
            c(this, 'removeEdgeItemGutters', !1),
            c(this, 'sectionGutter', null),
            c(this, 'padding', null),
            c(this, 'paddingVertical', null),
            c(this, 'paddingHorizontal', null),
            c(this, 'marginLeft', null),
            c(this, 'dir', 'ltr'),
            c(this, 'getItemKey', () => {
                throw Error('MasonryListComputer: getItemKey has not been implemented');
            }),
            c(this, 'getItemHeight', () => {
                throw Error('MasonryListComputer: getItemHeight has not been implemented');
            }),
            c(this, 'getSectionHeight', p);
    }
}
function g(e, n, r) {
    let i = {},
        a = {};
    for (let a in e)
        if (null == n[a]) i[a] = e[a];
        else {
            let i = e[a],
                s = n[a];
            for (let e = 0; e < i.length; e++) {
                let [n] = i[e];
                !s.some((e) => {
                    let [r] = e;
                    return n === r;
                }) && r(i[e][1], i[e][2], !0);
            }
        }
    for (let i in n)
        if (null == e[i]) a[i] = n[i];
        else {
            let a = e[i],
                s = n[i];
            for (let e = 0; e < s.length; e++) {
                let [n] = s[e];
                !a.some((e) => {
                    let [r] = e;
                    return r === n;
                }) && r(s[e][1], s[e][2], !1);
            }
        }
}
