let n = /^([\w-+]+(?:\.[\w-+]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,63}(?:\.[a-z]{2})?)$/i,
    r = /^((https:\/\/)?(discord\.gg\/)|(discord\.com\/)(invite\/)?)?[A-Za-z0-9]{8,8}$/,
    i = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
    a = /^(.*)#[0-9]{1,5}$/,
    o = /^(https:\/\/)?(discord\.com\/discovery\/game\/)([0-9-]+)\/?/,
    s = ['@', '#', ':', '```', 'discord', 'hypesquad', 'system message', 'system mesage', 'sustem message', 'sustem mesage'],
    l = ['discordtag', 'everyone', 'here', 'discord nitro', 'discord'];
function u(e) {
    return n.test(e);
}
function c(e) {
    return r.test(e);
}
function d(e) {
    return i.test(e);
}
function _(e) {
    let t = a.exec(e);
    if (null != t && t.length > 1) {
        let e = t[1],
            n = s.some((t) => e.includes(t)),
            r = l.includes(e);
        return !n && !r;
    }
    return !1;
}
function E(e) {
    return o.test(e);
}
t.Z = {
    isEmail: u,
    isInvite: c,
    isPhoneNumber: d,
    isUserTagLike: _,
    isDiscoveryLink: E
};
