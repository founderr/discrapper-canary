n.d(t, {
    FZ: function () {
        return Z;
    },
    Hl: function () {
        return B;
    },
    NJ: function () {
        return D;
    },
    R8: function () {
        return U;
    },
    Sq: function () {
        return O;
    },
    Wg: function () {
        return y;
    },
    Zn: function () {
        return v;
    },
    c2: function () {
        return b;
    },
    eE: function () {
        return j;
    },
    iE: function () {
        return k;
    },
    iK: function () {
        return P;
    },
    lv: function () {
        return M;
    },
    nR: function () {
        return L;
    },
    q0: function () {
        return s.a;
    },
    x0: function () {
        return x;
    },
    xb: function () {
        return G;
    },
    yd: function () {
        return R;
    }
}),
    n(47120),
    n(653041);
var i = n(5148),
    a = n(593121),
    s = n.n(a),
    r = n(668705),
    l = n.n(r),
    o = n(283852),
    c = n.n(o),
    u = n(115129),
    d = n.n(u),
    _ = n(357062),
    E = n.n(_),
    I = n(34399),
    m = n.n(I),
    T = n(157202),
    f = n.n(T),
    h = n(473552),
    N = n.n(h),
    p = n(634523),
    C = n.n(p),
    g = n(302648),
    S = n.n(g);
function A(e, t, n, a) {
    let s = a.getCurrentContent(),
        r = null;
    null != e && (r = (s = s.createEntity(...e)).getLastCreatedEntityKey());
    let l = s.getFirstBlock(),
        o = new i.SelectionState({
            anchorKey: l.getKey(),
            anchorOffset: t,
            focusKey: l.getKey(),
            focusOffset: n
        });
    return (s = i.Modifier.applyEntity(s, o, r)), i.EditorState.set(a, { currentContent: s });
}
function x(e, t, n, a) {
    let s, r;
    let o = t.getCurrentContent(),
        c = o.getFirstBlock(),
        u = c.getText();
    'number' == typeof n
        ? (n > u.length && (n = u.length),
          null != a && a > u.length && (a = u.length),
          (s = new i.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != a && 0 !== a ? a : n
          })))
        : (s = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        _ = l()(o, s);
    return s.isCollapsed() ? ((o = i.Modifier.insertText(o, s, e, d, _)), (r = 'insert-characters')) : ((o = i.Modifier.replaceText(o, s, e, d, _)), (r = 'replace-characters')), i.EditorState.push(t, o, r);
}
function R(e, t) {
    switch (e) {
        case 'delete':
            return C()(t);
        case 'delete-word':
            return E()(t);
        case 'backspace':
            return N()(t);
        case 'backspace-word':
            return d()(t);
        case 'backspace-to-start-of-line':
            return c()(t);
        default:
            return t;
    }
}
function v(e, t) {
    switch (e) {
        case 'transpose-characters':
            return S()(t);
        case 'move-selection-to-start-of-block':
            return f()(t);
        case 'move-selection-to-end-of-block':
            return m()(t);
        default:
            return t;
    }
}
function O(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = t.getCurrentContent(),
        a = i.getFirstBlock(),
        s = a.getText(),
        r = [];
    return (
        a.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = i.getEntity(a.getEntityAt(e)).getType(),
                    l = s.substring(e, t);
                r.push({
                    processed: !1,
                    type: n,
                    start: e,
                    end: t,
                    text: l
                });
            }
        ),
        e.forEach((e) => {
            let i = !1;
            if (
                (r.forEach((n) => {
                    let { type: a, start: s, end: r } = e,
                        l = e.getFullMatch();
                    if (!n.processed) n.type === a && n.start === s && n.text === l ? ((n.processed = !0), (i = !0)) : ((s >= n.start && s < n.end) || (r > n.start && r <= n.end)) && ((n.processed = !0), (t = A(null, n.start, n.end, t)));
                }),
                i)
            )
                return;
            let a = n[e.type];
            t = A([e.type, null != a && a.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        r.forEach((e) => {
            !e.processed && (t = A(null, e.start, e.end, t));
        }),
        t
    );
}
function L(e) {
    return i.EditorState.createEmpty(new i.CompositeDecorator(e));
}
function Z(e) {
    let t = i.EditorState.push(e, i.ContentState.createFromText('')),
        n = e.getSelection();
    return null != n && n.hasFocus && (t = i.EditorState.moveFocusToEnd(t)), t;
}
function b(e, t) {
    let n = O(t);
    return x(e, t, 0, n.length);
}
function P(e, t) {
    let n = t.getSelection();
    return (n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), i.EditorState.forceSelection(t, n);
}
function D(e) {
    return P(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function j(e) {
    return P(0, e);
}
function U(e) {
    let t = e.getSelection();
    return (t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), i.EditorState.forceSelection(e, t);
}
function y(e) {
    let t = O(e),
        n = e.getSelection();
    return (n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), i.EditorState.forceSelection(e, n);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = O(e);
    if (n.length > t) {
        let a = e.getSelection();
        (e = x('', e, t, n.length)), a.getAnchorOffset() > t && (a = a.set('anchorOffset', t)), a.getFocusOffset() > t && (a = a.set('focusOffset', t)), (e = i.EditorState.forceSelection(e, a));
    }
    return e;
}
function k(e) {
    let t = window.getSelection();
    if (null == t || 'Caret' !== t.type || null == e) return;
    let n = t.getRangeAt(0);
    if (
        !(function (e, t) {
            for (; null != e; ) {
                if (e === t) return !0;
                e = e.parentNode;
            }
            return !1;
        })(n.commonAncestorContainer, e)
    )
        return;
    let i = n.getClientRects()[0],
        a = e.getClientRects()[0];
    if (null == i || null == a) return;
    let s = i.left - a.left + e.scrollLeft;
    s < e.scrollLeft ? (e.scrollLeft = s - 10) : s > e.scrollLeft + e.offsetWidth && (e.scrollLeft = s - e.offsetWidth + 3);
}
function G(e) {
    return 0 === O(e).length;
}
