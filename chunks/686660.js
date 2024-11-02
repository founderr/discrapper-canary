n.d(t, {
    gs: function () {
        return u;
    },
    p1: function () {
        return c;
    },
    s8: function () {
        return r;
    }
}),
    n(627341);
var r,
    i,
    a = n(278074),
    s = n(981631),
    o = n(490897),
    l = n(388032);
function u(e, t) {
    return (0, a.EQ)([t, e])
        .with([s.bL.ALL_MESSAGES, o.i.ALL_MESSAGES], () => 'all_messages')
        .with([s.bL.ONLY_MENTIONS, o.i.UNSET], () => 'mentions')
        .with([s.bL.ONLY_MENTIONS, o.i.ONLY_MENTIONS], () => 'mentions')
        .with([s.bL.NO_MESSAGES, o.i.UNSET], () => 'nothing')
        .with([s.bL.NO_MESSAGES, o.i.ONLY_MENTIONS], () => 'nothing')
        .otherwise(() => 'custom');
}
function c(e) {
    return (0, a.EQ)(e)
        .with('all_messages', () => l.intl.string(l.t.hZrr6u))
        .with('mentions', () => l.intl.string(l.t.y59NJi))
        .with('nothing', () => l.intl.string(l.t['pGn/bG']))
        .with('custom', () => l.intl.string(l.t['32yow8']))
        .exhaustive();
}
((i = r || (r = {})).ALL_MESSAGES = 'all_messages'), (i.MENTIONS = 'mentions'), (i.NOTHING = 'nothing'), (i.CUSTOM = 'custom');
