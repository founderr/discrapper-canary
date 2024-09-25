let r, i, a;
n.d(t, {
    AS: function () {
        return T;
    },
    Dw: function () {
        return g;
    },
    KF: function () {
        return m;
    },
    OU: function () {
        return _;
    },
    li: function () {
        return I;
    }
});
var o = n(757143);
var s = n(47120);
var l = n(512722);
var u = n(911969),
    c = n(93725),
    d = n(226951);
function _(e) {
    return null == e ? [] : e.filter((t, n) => 'text' !== t.type || (n > 0 && n < e.length - 1 ? '' !== t.text : '' !== t.text.trim()));
}
function E(e, t) {
    var n;
    let r = _(e[t]);
    return invariant(1 === r.length, 'Contains multiple values'), invariant((null === (n = r[0]) || void 0 === n ? void 0 : n.type) === 'text', 'First value is not text'), r[0].text === TRUE_OPTION_NAME;
}
n(689079);
function f(e, t) {
    var n;
    let r = _(e[t]);
    return invariant(1 === r.length, 'Contains multiple values'), invariant((null === (n = r[0]) || void 0 === n ? void 0 : n.type) === 'channelMention', 'First value is not a channel mention'), r[0].channelId;
}
function h(e, t) {
    var n;
    let r = _(e[t]);
    return invariant(1 === r.length, 'Contains multiple values'), invariant((null === (n = r[0]) || void 0 === n ? void 0 : n.type) === 'userMention', 'First value is not a user mention'), r[0].userId;
}
function p(e, t) {
    var n;
    let r = _(e[t]);
    return invariant(1 === r.length, 'Contains multiple values'), invariant((null === (n = r[0]) || void 0 === n ? void 0 : n.type) === 'roleMention', 'First value is not a role mention'), r[0].roleId;
}
function m(e, t) {
    let n = e[t],
        r = '';
    for (let e of n)
        switch (e.type) {
            case 'text':
            case 'textMention':
                r += e.text;
                break;
            case 'userMention':
                r += '<@'.concat(e.userId, '>');
                break;
            case 'channelMention':
                r += '<#'.concat(e.channelId, '>');
                break;
            case 'roleMention':
                r += '<@&'.concat(e.roleId, '>');
                break;
            case 'emoji':
                r += e.surrogate;
                break;
            case 'customEmoji':
                r += '<'
                    .concat(e.animated ? 'a' : '', ':')
                    .concat(e.name.replace(/:/g, '').split('~')[0], ':')
                    .concat(e.emojiId, '>');
        }
    return r;
}
function I(e, t) {
    return null == e[t] ? null : m(e, t);
}
function T(e, t) {
    if (e !== a) {
        var n;
        a = e;
        let { group: t, decimal: o } = null !== (n = c.L[e]) && void 0 !== n ? n : c.L['en-US'];
        (r = RegExp(d.Z.escape(t), 'g')), (i = RegExp(d.Z.escape(o), 'g'));
    }
    return t.replace(r, '').replace(i, '.');
}
function g(e, t) {
    let n = {};
    for (let i of t) {
        var r;
        let t = null === (r = e.options) || void 0 === r ? void 0 : r.find((e) => e.name === i.name);
        if (i.type !== u.jw.ATTACHMENT && (null == t ? !void 0 : !t.autocomplete)) n[i.name] = i;
    }
    return n;
}
