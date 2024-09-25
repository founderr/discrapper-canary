n.r(t),
    n.d(t, {
        hasDomParent: function () {
            return s;
        },
        normalizeDOMPoint: function () {
            return l;
        }
    });
var r = n(411104);
var i = n(47120);
var a = n(519953);
let o = !1;
{
    a.F3.toSlateRange = (e, t, n) => {
        let r,
            i,
            o,
            s,
            l,
            { exactMatch: u, suppressThrow: c } = n;
        if ((_(t) ? ((r = t.anchorNode), (i = t.anchorOffset), (o = t.focusNode), (s = t.focusOffset), (l = t.isCollapsed)) : ((r = t.startContainer), (i = t.startOffset), (o = t.endContainer), (s = t.endOffset), (l = t.collapsed)), null == r || null == o || null == i || null == s)) {
            if (c) return null;
            throw Error('Cannot resolve a Slate range from DOM range');
        }
        let d = a.F3.toSlatePoint(e, [r, i], {
                exactMatch: u,
                suppressThrow: c
            }),
            E = l
                ? d
                : a.F3.toSlatePoint(e, [o, s], {
                      exactMatch: u,
                      suppressThrow: c
                  });
        return null != d && null != E
            ? {
                  anchor: d,
                  focus: E
              }
            : null;
    };
    let e = a.F3.toSlatePoint;
    (a.F3.toSlatePoint = (t, n, r) => {
        let { exactMatch: i, suppressThrow: a, direction: o = 'forward' } = r;
        !i && (n = l(n, o));
        try {
            return e(t, n, {
                exactMatch: !0,
                suppressThrow: a
            });
        } catch (e) {
            if (a) return null;
            throw e;
        }
    }),
        (o = !0);
}
function s(e, t) {
    if (null == t) return !1;
    for (; null != e; ) {
        if (e === t) return !0;
        e = e.parentNode;
    }
    return !1;
}
function l(e, t) {
    let n,
        [r, i] = e;
    if (!d(r) || 0 === r.childNodes.length) return e;
    for ('forward' === t && i === r.childNodes.length && (t = 'backward'), 'backward' === t && i--, [r, n] = u(r, i, t), 'forward' === t && n < i ? (t = 'backward') : 'backward' === t && n > i && (t = 'forward'), i = n; d(r) && r.childNodes.length > 0; ) {
        let e = 'backward' === t ? r.childNodes.length - 1 : 0;
        r = u(r, e, t)[0];
    }
    let a = 'backward' === t && null != r.textContent ? r.textContent.length : 0;
    return [r, a];
}
function u(e, t, n) {
    let { childNodes: r } = e,
        i = r[t],
        a = t,
        o = !1,
        s = !1;
    for (; (c(i) || (d(i) && 0 === i.childNodes.length) || (d(i) && 'false' === i.getAttribute('contenteditable'))) && (!o || !s); ) {
        if (a >= r.length) {
            (o = !0), (a = t - 1), (n = 'backward');
            continue;
        }
        if (a < 0) {
            (s = !0), (a = t + 1), (n = 'forward');
            continue;
        }
        (i = r[a]), (t = a), (a += 'forward' === n ? 1 : -1);
    }
    return [i, t];
}
function c(e) {
    return E(e) && 8 === e.nodeType;
}
function d(e) {
    return E(e) && 1 === e.nodeType;
}
function _(e) {
    let t = e && e.anchorNode && f(e.anchorNode);
    return null != t && e instanceof t.Selection;
}
function E(e) {
    let t = f(e);
    return null != t && e instanceof t.Node;
}
function f(e) {
    return (e && e.ownerDocument && e.ownerDocument.defaultView) || null;
}
