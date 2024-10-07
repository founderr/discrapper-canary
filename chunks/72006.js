n.d(t, {
    FZ: function () {
        return P;
    },
    Hl: function () {
        return B;
    },
    NJ: function () {
        return M;
    },
    R8: function () {
        return U;
    },
    Sq: function () {
        return b;
    },
    Wg: function () {
        return D;
    },
    Zn: function () {
        return L;
    },
    c2: function () {
        return Z;
    },
    eE: function () {
        return j;
    },
    iE: function () {
        return F;
    },
    iK: function () {
        return y;
    },
    lv: function () {
        return O;
    },
    nR: function () {
        return A;
    },
    q0: function () {
        return l.a;
    },
    x0: function () {
        return x;
    },
    xb: function () {
        return k;
    },
    yd: function () {
        return v;
    }
}),
    n(47120),
    n(653041);
var r = n(371917),
    i = n(421520),
    l = n.n(i),
    s = n(563751),
    a = n.n(s),
    o = n(608382),
    c = n.n(o),
    u = n(722661),
    d = n.n(u),
    h = n(225389),
    _ = n.n(h),
    f = n(71716),
    E = n.n(f),
    p = n(869045),
    m = n.n(p),
    I = n(110599),
    C = n.n(I),
    S = n(801539),
    g = n.n(S),
    R = n(887868),
    T = n.n(R);
function N(e, t, n, i) {
    let l = i.getCurrentContent(),
        s = null;
    null != e && (s = (l = l.createEntity(...e)).getLastCreatedEntityKey());
    let a = l.getFirstBlock(),
        o = new r.SelectionState({
            anchorKey: a.getKey(),
            anchorOffset: t,
            focusKey: a.getKey(),
            focusOffset: n
        });
    return (l = r.Modifier.applyEntity(l, o, s)), r.EditorState.set(i, { currentContent: l });
}
function x(e, t, n, i) {
    let l, s;
    let o = t.getCurrentContent(),
        c = o.getFirstBlock(),
        u = c.getText();
    'number' == typeof n
        ? (n > u.length && (n = u.length),
          null != i && i > u.length && (i = u.length),
          (l = new r.SelectionState({
              anchorKey: c.getKey(),
              anchorOffset: n,
              focusKey: c.getKey(),
              focusOffset: null != i && 0 !== i ? i : n
          })))
        : (l = t.getSelection());
    let d = t.getCurrentInlineStyle(),
        h = a()(o, l);
    return l.isCollapsed() ? ((o = r.Modifier.insertText(o, l, e, d, h)), (s = 'insert-characters')) : ((o = r.Modifier.replaceText(o, l, e, d, h)), (s = 'replace-characters')), r.EditorState.push(t, o, s);
}
function v(e, t) {
    switch (e) {
        case 'delete':
            return g()(t);
        case 'delete-word':
            return _()(t);
        case 'backspace':
            return C()(t);
        case 'backspace-word':
            return d()(t);
        case 'backspace-to-start-of-line':
            return c()(t);
        default:
            return t;
    }
}
function L(e, t) {
    switch (e) {
        case 'transpose-characters':
            return T()(t);
        case 'move-selection-to-start-of-block':
            return m()(t);
        case 'move-selection-to-end-of-block':
            return E()(t);
        default:
            return t;
    }
}
function b(e) {
    return e.getCurrentContent().getFirstBlock().getText();
}
function O(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = t.getCurrentContent(),
        i = r.getFirstBlock(),
        l = i.getText(),
        s = [];
    return (
        i.findEntityRanges(
            (e) => null !== e.getEntity(),
            (e, t) => {
                let n = r.getEntity(i.getEntityAt(e)).getType(),
                    a = l.substring(e, t);
                s.push({
                    processed: !1,
                    type: n,
                    start: e,
                    end: t,
                    text: a
                });
            }
        ),
        e.forEach((e) => {
            let r = !1;
            if (
                (s.forEach((n) => {
                    let { type: i, start: l, end: s } = e,
                        a = e.getFullMatch();
                    if (!n.processed) n.type === i && n.start === l && n.text === a ? ((n.processed = !0), (r = !0)) : ((l >= n.start && l < n.end) || (s > n.start && s <= n.end)) && ((n.processed = !0), (t = N(null, n.start, n.end, t)));
                }),
                r)
            )
                return;
            let i = n[e.type];
            t = N([e.type, null != i && i.mutable ? 'MUTABLE' : 'IMMUTABLE', { token: e }], e.start, e.end, t);
        }),
        s.forEach((e) => {
            !e.processed && (t = N(null, e.start, e.end, t));
        }),
        t
    );
}
function A(e) {
    return r.EditorState.createEmpty(new r.CompositeDecorator(e));
}
function P(e) {
    let t = r.EditorState.push(e, r.ContentState.createFromText('')),
        n = e.getSelection();
    return null != n && n.hasFocus && (t = r.EditorState.moveFocusToEnd(t)), t;
}
function Z(e, t) {
    let n = b(t);
    return x(e, t, 0, n.length);
}
function y(e, t) {
    let n = t.getSelection();
    return (n = (n = n.set('focusOffset', e)).set('anchorOffset', e)), r.EditorState.forceSelection(t, n);
}
function M(e) {
    return y(e.getCurrentContent().getFirstBlock().getText().length, e);
}
function j(e) {
    return y(0, e);
}
function U(e) {
    let t = e.getSelection();
    return (t = (t = t.set('focusOffset', 0)).set('isBackward', !0)), r.EditorState.forceSelection(e, t);
}
function D(e) {
    let t = b(e),
        n = e.getSelection();
    return (n = (n = n.set('focusOffset', t.length)).set('isBackward', !1)), r.EditorState.forceSelection(e, n);
}
function B(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 512,
        n = b(e);
    if (n.length > t) {
        let i = e.getSelection();
        (e = x('', e, t, n.length)), i.getAnchorOffset() > t && (i = i.set('anchorOffset', t)), i.getFocusOffset() > t && (i = i.set('focusOffset', t)), (e = r.EditorState.forceSelection(e, i));
    }
    return e;
}
function F(e) {
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
    let r = n.getClientRects()[0],
        i = e.getClientRects()[0];
    if (null == r || null == i) return;
    let l = r.left - i.left + e.scrollLeft;
    l < e.scrollLeft ? (e.scrollLeft = l - 10) : l > e.scrollLeft + e.offsetWidth && (e.scrollLeft = l - e.offsetWidth + 3);
}
function k(e) {
    return 0 === b(e).length;
}
