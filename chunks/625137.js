n.d(t, {
    C5: function () {
        return c;
    },
    CL: function () {
        return l;
    },
    cf: function () {
        return s;
    },
    iw: function () {
        return u;
    }
});
var r = n(789020);
var i = n(149765),
    a = n(866442),
    o = n(709054);
function s(e) {
    e.permissions = i.vB(e.permissions);
}
function l(e) {
    var t;
    return {
        id: e.id,
        name: e.name,
        permissions: i.vB(e.permissions),
        mentionable: e.mentionable,
        position: e.position,
        originalPosition: e.position,
        color: e.color,
        colorString: null != e.color && 0 !== e.color ? (0, a.Rf)(e.color) : null,
        hoist: e.hoist,
        managed: e.managed,
        tags: e.tags,
        icon: e.icon,
        unicodeEmoji: e.unicode_emoji,
        flags: null !== (t = e.flags) && void 0 !== t ? t : 0
    };
}
function u(e, t) {
    if (null == t) return {};
    let n = t.length - 1,
        r = {};
    return (
        t
            .sort((t, n) => {
                var r, i;
                let a = e === t.id ? 1 / 0 : -(null !== (r = t.originalPosition) && void 0 !== r ? r : t.position),
                    s = e === n.id ? 1 / 0 : -(null !== (i = n.originalPosition) && void 0 !== i ? i : n.position);
                return a === s ? o.default.compare(t.id, n.id) : a < s ? -1 : a === s ? 0 : 1;
            })
            .forEach((e, t) => {
                (e.position = n - t), (r[e.id] = e);
            }),
        r
    );
}
function c(e, t) {
    return null == t ? {} : u(e, t.map(l));
}
