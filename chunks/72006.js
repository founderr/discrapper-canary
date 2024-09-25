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
        return M;
    },
    Wg: function () {
        return y;
    },
    Zn: function () {
        return O;
    },
    c2: function () {
        return P;
    },
    eE: function () {
        return j;
    },
    iE: function () {
        return k;
    },
    iK: function () {
        return b;
    },
    lv: function () {
        return v;
    },
    nR: function () {
        return L;
    },
    q0: function () {
        return a.a;
    },
    x0: function () {
        return x;
    },
    xb: function () {
        return F;
    },
    yd: function () {
        return R;
    }
}),
    n(47120),
    n(653041);
var i = n(371917),
    s = n(421520),
    a = n.n(s),
    r = n(563751),
    l = n.n(r),
    o = n(608382),
    c = n.n(o),
    u = n(722661),
    d = n.n(u),
    _ = n(225389),
    E = n.n(_),
    I = n(71716),
    m = n.n(I),
    T = n(869045),
    h = n.n(T),
    N = n(110599),
    f = n.n(N),
    C = n(801539),
    p = n.n(C),
    g = n(887868),
    A = n.n(g);
function S(e, t, n, s) {
    let a = s.getCurrentContent(),
        r = null;
    null != e && (r = (a = a.createEntity(...e)).getLastCreatedEntityKey());
    let l = a.getFirstBlock(),
        o = new i.SelectionState({
            anchorKey: l.getKey(),
            anchorOffset: t,
            focusKey: l.getKey(),
            focusOffset: n
        });
    return (a = i.Modifier.applyEntity(a, o, r)), i.EditorState.set(s, { currentContent: a });
}
function x(e, t, n, s) {
    let a, r;
    let o = t.getCurrentContent(),
        c = o.getFirstBlock(),
        u = c.getText();
    'number' == typeof n
        ? (n > u.length && (n = u.length),
          null != s && s > u.length && (s = u.length),
          (a = new i.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != s && 0 !== s ? s : n
          })))
        : (a = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        _ = l()(o, a);
    return a.isCollapsed() ? ((o = i.Modifier.insertText(o, a, e, d, _)), (r = 'insert-characters')) : ((o = i.Modifier.replaceText(o, a, e, d, _)), (r = 'replace-characters')), i.EditorState.push(t, o, r);
}
function R(e, t) {
    switch (e) {
        case 'delete':
            return p()(t);
        case 'delete-word':
            return E()(t);
        case 'backspace':
            return f()(t);
        case 'backspace-word':
            return d()(t);
        case 'backspace-to-start-of-line':
            return c()(t);
        default:
            return t;
    }
}
function O(e, t) {
    switch (e) {
        case 'transpose-characters':
            return A()(t);
        case 'move-selection-to-start-of-block':
            return h()(t);
        case 'move-selection-to-end-of-block':
            return m()(t);
        default:
            return t;
    }
}
function M(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = t.getCurrentContent(),
        s = i.getFirstBlock(),
        a = s.getText(),
        r = [];
    return (
        s.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = i.getEntity(s.getEntityAt(e)).getType(),
                    l = a.substring(e, t);
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
                    let { type: s, start: a, end: r } = e,
                        l = e.getFullMatch();
                    if (!n.processed) n.type === s && n.start === a && n.text === l ? ((n.processed = !0), (i = !0)) : ((a >= n.start && a < n.end) || (r > n.start && r <= n.end)) && ((n.processed = !0), (t = S(null, n.start, n.end, t)));
                }),
                i)
            )
                return;
            let s = n[e.type];
            t = S([e.type, null != s && s.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        r.forEach((e) => {
            !e.processed && (t = S(null, e.start, e.end, t));
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
function P(e, t) {
    let n = M(t);
    return x(e, t, 0, n.length);
}
function b(e, t) {
    let n = t.getSelection();
    return (n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), i.EditorState.forceSelection(t, n);
}
function D(e) {
    return b(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function j(e) {
    return b(0, e);
}
function U(e) {
    let t = e.getSelection();
    return (t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), i.EditorState.forceSelection(e, t);
}
function y(e) {
    let t = M(e),
        n = e.getSelection();
    return (n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), i.EditorState.forceSelection(e, n);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = M(e);
    if (n.length > t) {
        let s = e.getSelection();
        (e = x('', e, t, n.length)), s.getAnchorOffset() > t && (s = s.set('anchorOffset', t)), s.getFocusOffset() > t && (s = s.set('focusOffset', t)), (e = i.EditorState.forceSelection(e, s));
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
        s = e.getClientRects()[0];
    if (null == i || null == s) return;
    let a = i.left - s.left + e.scrollLeft;
    a < e.scrollLeft ? (e.scrollLeft = a - 10) : a > e.scrollLeft + e.offsetWidth && (e.scrollLeft = a - e.offsetWidth + 3);
}
function F(e) {
    return 0 === M(e).length;
}
