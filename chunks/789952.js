r.r(n),
    r.d(n, {
        hasDomParent: function () {
            return l;
        },
        normalizeDOMPoint: function () {
            return u;
        }
    });
var i = r(411104);
var a = r(47120);
var s = r(270445);
let o = !1;
{
    s.F3.toSlateRange = (e, n, r) => {
        let i,
            a,
            o,
            l,
            u,
            { exactMatch: c, suppressThrow: d } = r;
        if ((_(n) ? ((i = n.anchorNode), (a = n.anchorOffset), (o = n.focusNode), (l = n.focusOffset), (u = n.isCollapsed)) : ((i = n.startContainer), (a = n.startOffset), (o = n.endContainer), (l = n.endOffset), (u = n.collapsed)), null == i || null == o || null == a || null == l)) {
            if (d) return null;
            throw Error('Cannot resolve a Slate range from DOM range');
        }
        let f = s.F3.toSlatePoint(e, [i, a], {
                exactMatch: c,
                suppressThrow: d
            }),
            h = u
                ? f
                : s.F3.toSlatePoint(e, [o, l], {
                      exactMatch: c,
                      suppressThrow: d
                  });
        return null != f && null != h
            ? {
                  anchor: f,
                  focus: h
              }
            : null;
    };
    let e = s.F3.toSlatePoint;
    (s.F3.toSlatePoint = (n, r, i) => {
        let { exactMatch: a, suppressThrow: s, direction: o = 'forward' } = i;
        !a && (r = u(r, o));
        try {
            return e(n, r, {
                exactMatch: !0,
                suppressThrow: s
            });
        } catch (e) {
            if (s) return null;
            throw e;
        }
    }),
        (o = !0);
}
function l(e, n) {
    if (null == n) return !1;
    for (; null != e; ) {
        if (e === n) return !0;
        e = e.parentNode;
    }
    return !1;
}
function u(e, n) {
    let r,
        [i, a] = e;
    if (!f(i) || 0 === i.childNodes.length) return e;
    for ('forward' === n && a === i.childNodes.length && (n = 'backward'), 'backward' === n && a--, [i, r] = c(i, a, n), 'forward' === n && r < a ? (n = 'backward') : 'backward' === n && r > a && (n = 'forward'), a = r; f(i) && i.childNodes.length > 0; ) {
        let e = 'backward' === n ? i.childNodes.length - 1 : 0;
        i = c(i, e, n)[0];
    }
    let s = 'backward' === n && null != i.textContent ? i.textContent.length : 0;
    return [i, s];
}
function c(e, n, r) {
    let { childNodes: i } = e,
        a = i[n],
        s = n,
        o = !1,
        l = !1;
    for (; (d(a) || (f(a) && 0 === a.childNodes.length) || (f(a) && 'false' === a.getAttribute('contenteditable'))) && (!o || !l); ) {
        if (s >= i.length) {
            (o = !0), (s = n - 1), (r = 'backward');
            continue;
        }
        if (s < 0) {
            (l = !0), (s = n + 1), (r = 'forward');
            continue;
        }
        (a = i[s]), (n = s), (s += 'forward' === r ? 1 : -1);
    }
    return [a, n];
}
function d(e) {
    return h(e) && 8 === e.nodeType;
}
function f(e) {
    return h(e) && 1 === e.nodeType;
}
function _(e) {
    let n = e && e.anchorNode && p(e.anchorNode);
    return null != n && e instanceof n.Selection;
}
function h(e) {
    let n = p(e);
    return null != n && e instanceof n.Node;
}
function p(e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || null;
}
