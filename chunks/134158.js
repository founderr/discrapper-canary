r.d(n, {
    o: function () {
        return s;
    }
});
var i = r(653041);
function a(e, n, r) {
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
function s(e) {
    return 'row' === e.type;
}
class o {
    mergeProps(e) {
        let { sectionHeight: n, rowHeight: r, footerHeight: i, listHeaderHeight: a, paddingTop: s, paddingBottom: o, sections: l, getAnchorId: u } = e;
        (this.sections = l), (this.sectionHeight = n), (this.rowHeight = r), (this.footerHeight = i), (this.listHeaderHeight = a), (this.uniform = 'number' == typeof r), (this.paddingTop = s), (this.paddingBottom = o), (this.getAnchorId = null != u ? u : this.getAnchorId);
    }
    getHeight() {
        let e = this.paddingTop + this.getListHeaderHeight(),
            { length: n } = this.sections;
        for (let r = 0; r < n; r++) {
            if (((e += this.getHeightForSection(r)), this.uniform)) e += this.sections[r] * this.getHeightForRow(r, 0);
            else for (let n = 0; n < this.sections[r]; n++) e += this.getHeightForRow(r, n);
            e += this.getHeightForFooter(r);
        }
        return e + this.paddingBottom;
    }
    getHeightForSection(e) {
        let { sectionHeight: n } = this;
        return 'number' == typeof n ? n : n(e);
    }
    getHeightForRow(e, n) {
        let { rowHeight: r } = this;
        return 'number' == typeof r ? r : r(e, n);
    }
    getHeightForFooter(e) {
        let { footerHeight: n } = this;
        return null == n ? 0 : 'number' == typeof n ? n : n(e);
    }
    getListHeaderHeight() {
        let { listHeaderHeight: e } = this;
        return null == e ? 0 : 'number' == typeof e ? e : e();
    }
    compute(e, n) {
        let r = this.paddingTop,
            i = r,
            a = r,
            s = 0,
            o = 0,
            l = [],
            u = (s) => (((a = r), (r += s) < e) ? ((i += s), !1) : !(a > n) && !0);
        u(this.getListHeaderHeight()) &&
            l.push({
                type: 'header',
                section: -1,
                offsetTop: a
            });
        for (let e = 0; e < this.sections.length; e++) {
            let n = this.sections[e];
            if (0 !== n) {
                if (
                    (u(this.getHeightForSection(e)) &&
                        l.push({
                            type: 'section',
                            section: e,
                            listIndex: o,
                            offsetTop: a,
                            anchorId: this.getAnchorId(e)
                        }),
                    (o += 1),
                    this.uniform)
                ) {
                    let r = this.getHeightForRow(e, 0);
                    for (let i = 0; i < n; i++)
                        u(r) &&
                            l.push({
                                type: 'row',
                                section: e,
                                listIndex: o,
                                row: i,
                                rowIndex: s,
                                offsetTop: a,
                                anchorId: this.getAnchorId(e, i)
                            }),
                            (s += 1),
                            (o += 1);
                } else
                    for (let r = 0; r < n; r++)
                        u(this.getHeightForRow(e, r)) &&
                            l.push({
                                type: 'row',
                                section: e,
                                listIndex: o,
                                row: r,
                                rowIndex: s,
                                offsetTop: a,
                                anchorId: this.getAnchorId(e, r)
                            }),
                            (s += 1),
                            (o += 1);
                u(this.getHeightForFooter(e)) &&
                    l.push({
                        type: 'footer',
                        section: e,
                        offsetTop: a
                    });
            }
        }
        return {
            spacerTop: i,
            totalHeight: r + this.paddingBottom,
            items: l
        };
    }
    computeScrollPosition(e, n) {
        let { paddingTop: r } = this,
            i = r + this.getListHeaderHeight(),
            a = 0,
            s = !1;
        for (; a <= e; ) {
            let r = this.sections[a];
            if (a === e && null == n) {
                s = !0;
                break;
            }
            if (0 === r) {
                a += 1;
                continue;
            }
            if (((i += this.getHeightForSection(a)), this.uniform)) {
                let o = this.getHeightForRow(a, 0);
                a === e && null != n ? ((i += o * n), (s = !0)) : (i += o * r);
            } else
                for (let o = 0; o < r; o++)
                    if (a < e || (a === e && null != n && o < n)) i += this.getHeightForRow(a, o);
                    else if (a === e && null != n && o === n) {
                        s = !0;
                        break;
                    }
            !s && (i += this.getHeightForFooter(a)), (a += 1);
        }
        return [i, null != n ? this.getHeightForRow(e, n) : this.getHeightForSection(a)];
    }
    constructor() {
        a(this, 'sectionHeight', 0), a(this, 'rowHeight', 0), a(this, 'footerHeight', 0), a(this, 'listHeaderHeight', 0), a(this, 'uniform', !1), a(this, 'paddingBottom', 0), a(this, 'paddingTop', 0), a(this, 'sections', []), a(this, 'getAnchorId', () => void 0);
    }
}
n.Z = o;
