r.d(n, {
    gs: function () {
        return c;
    },
    p1: function () {
        return d;
    },
    s8: function () {
        return i;
    }
});
var i,
    a = r(627341);
var s = r(278074),
    o = r(981631),
    l = r(490897),
    u = r(388032);
function c(e, n) {
    return (0, s.EQ)([n, e])
        .with([o.bL.ALL_MESSAGES, l.i.ALL_MESSAGES], () => 'all_messages')
        .with([o.bL.ONLY_MENTIONS, l.i.UNSET], () => 'mentions')
        .with([o.bL.ONLY_MENTIONS, l.i.ONLY_MENTIONS], () => 'mentions')
        .with([o.bL.NO_MESSAGES, l.i.UNSET], () => 'nothing')
        .with([o.bL.NO_MESSAGES, l.i.ONLY_MENTIONS], () => 'nothing')
        .otherwise(() => 'custom');
}
function d(e) {
    return (0, s.EQ)(e)
        .with('all_messages', () => u.intl.string(u.t.hZrr6u))
        .with('mentions', () => u.intl.string(u.t.y59NJi))
        .with('nothing', () => u.intl.string(u.t['pGn/bG']))
        .with('custom', () => u.intl.string(u.t['32yow8']))
        .exhaustive();
}
!(function (e) {
    (e.ALL_MESSAGES = 'all_messages'), (e.MENTIONS = 'mentions'), (e.NOTHING = 'nothing'), (e.CUSTOM = 'custom');
})(i || (i = {}));
