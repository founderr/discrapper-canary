var n = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    r = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        arguments: !0,
        arity: !0
    },
    i = 'function' == typeof Object.getOwnPropertySymbols;
e.exports = function (e, a, s) {
    if ('string' != typeof a) {
        var o = Object.getOwnPropertyNames(a);
        i && (o = o.concat(Object.getOwnPropertySymbols(a)));
        for (var l = 0; l < o.length; ++l)
            if (!n[o[l]] && !r[o[l]] && (!s || !s[o[l]]))
                try {
                    e[o[l]] = a[o[l]];
                } catch (e) {}
    }
    return e;
};
