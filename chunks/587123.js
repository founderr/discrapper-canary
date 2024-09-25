t.d(A, {
    P: function () {
        return o;
    },
    W: function () {
        return l;
    }
}),
    t(411104);
var n = t(735250),
    a = t(470079),
    s = t(828762);
let r = a.createContext(void 0);
function o() {
    let e = a.useContext(r);
    if (null == e) throw Error('No GuildProductAttachmentManagerContextProvider found');
    return e;
}
function l(e) {
    let { children: A, guildId: t, ...a } = e,
        o = (0, s.Z)(t, a);
    return (0, n.jsx)(r.Provider, {
        value: o,
        children: A
    });
}
