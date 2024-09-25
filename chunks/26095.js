var r = n(165566),
    i = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    a = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    o = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    s = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    l = {};
function u(e) {
    return r.isMemo(e) ? s : l[e.$$typeof] || i;
}
(l[r.ForwardRef] = o), (l[r.Memo] = s);
var c = Object.defineProperty,
    d = Object.getOwnPropertyNames,
    _ = Object.getOwnPropertySymbols,
    E = Object.getOwnPropertyDescriptor,
    f = Object.getPrototypeOf,
    h = Object.prototype;
function p(e, t, n) {
    if ('string' != typeof t) {
        if (h) {
            var r = f(t);
            r && r !== h && p(e, r, n);
        }
        var i = d(t);
        _ && (i = i.concat(_(t)));
        for (var o = u(e), s = u(t), l = 0; l < i.length; ++l) {
            var m = i[l];
            if (!a[m] && !(n && n[m]) && !(s && s[m]) && !(o && o[m])) {
                var I = E(t, m);
                try {
                    c(e, m, I);
                } catch (e) {}
            }
        }
    }
    return e;
}
e.exports = p;
