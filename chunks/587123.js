n.d(t, {
    P: function () {
        return i;
    },
    W: function () {
        return o;
    }
}),
    n(411104);
var A = n(200651),
    r = n(192379),
    a = n(828762);
let l = r.createContext(void 0);
function i() {
    let e = r.useContext(l);
    if (null == e) throw Error('No GuildProductAttachmentManagerContextProvider found');
    return e;
}
function o(e) {
    let { children: t, guildId: n, ...r } = e,
        i = (0, a.Z)(n, r);
    return (0, A.jsx)(l.Provider, {
        value: i,
        children: t
    });
}
