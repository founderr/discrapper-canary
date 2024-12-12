r.d(n, {
    T9: function () {
        return o;
    }
});
var i = r(302454),
    a = r.n(i);
let s = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/,
    o = (e) => new RegExp('^[\\s\\S]+?(?='.concat(e, '|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)')),
    l = {
        ...a().defaultRules.text,
        match: (0, i.anyScopeRegex)(s)
    };
n.ZP = l;
