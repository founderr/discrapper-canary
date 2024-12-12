var i = r(690244),
    a = i('%TypeError%'),
    s = i('%SyntaxError%'),
    o = r(706165),
    l = r(73871),
    u = {
        'Property Descriptor': function (e) {
            var n = {
                '[[Configurable]]': !0,
                '[[Enumerable]]': !0,
                '[[Get]]': !0,
                '[[Set]]': !0,
                '[[Value]]': !0,
                '[[Writable]]': !0
            };
            if (!e) return !1;
            for (var r in e) if (o(e, r) && !n[r]) return !1;
            var i = o(e, '[[Value]]'),
                s = o(e, '[[Get]]') || o(e, '[[Set]]');
            if (i && s) throw new a('Property Descriptors may not be both accessor and data descriptors');
            return !0;
        },
        'Match Record': r(290951),
        'Iterator Record': function (e) {
            return o(e, '[[Iterator]]') && o(e, '[[NextMethod]]') && o(e, '[[Done]]');
        },
        'PromiseCapability Record': function (e) {
            return !!e && o(e, '[[Resolve]]') && 'function' == typeof e['[[Resolve]]'] && o(e, '[[Reject]]') && 'function' == typeof e['[[Reject]]'] && o(e, '[[Promise]]') && e['[[Promise]]'] && 'function' == typeof e['[[Promise]]'].then;
        },
        'AsyncGeneratorRequest Record': function (e) {
            return !!e && o(e, '[[Completion]]') && o(e, '[[Capability]]') && u['PromiseCapability Record'](e['[[Capability]]']);
        },
        'RegExp Record': function (e) {
            return e && o(e, '[[IgnoreCase]]') && 'boolean' == typeof e['[[IgnoreCase]]'] && o(e, '[[Multiline]]') && 'boolean' == typeof e['[[Multiline]]'] && o(e, '[[DotAll]]') && 'boolean' == typeof e['[[DotAll]]'] && o(e, '[[Unicode]]') && 'boolean' == typeof e['[[Unicode]]'] && o(e, '[[CapturingGroupsCount]]') && 'number' == typeof e['[[CapturingGroupsCount]]'] && l(e['[[CapturingGroupsCount]]']) && e['[[CapturingGroupsCount]]'] >= 0;
        }
    };
e.exports = function (e, n, r, i) {
    var o = u[n];
    if ('function' != typeof o) throw new s('unknown record type: ' + n);
    if ('Object' !== e(i) || !o(i)) throw new a(r + ' must be a ' + n);
};
