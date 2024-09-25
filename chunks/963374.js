n.d(t, {
    nC: function () {
        return m;
    }
});
var r = n(47120);
var i = n(757143);
var a = n(653041);
var o = n(392711),
    s = n.n(o),
    l = n(697741);
let u = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);
function c(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, '');
}
function d(e) {
    return e.toLowerCase();
}
function _(e) {
    return u.has(e);
}
function E(e) {
    return 0 === e.length;
}
function f(e) {
    return s()(e.split(/\W+/)).map(c).reject(E).map(d).reject(_).map(l.$).value();
}
function h(e, t) {
    return !E((e = d(c(e)))) && !_(e) && t.has((0, l.$)(e));
}
function p(e, t) {
    if (Array.isArray(e)) e.forEach((e) => p(e, t));
    else if ('string' == typeof e.content && 'codeBlock' !== e.type) {
        let n = [],
            r = '';
        e.content.split(/(\W+)/g).forEach((e) => {
            h(e, t)
                ? (r.length > 0 &&
                      n.push({
                          type: 'text',
                          content: r
                      }),
                  n.push({
                      type: 'highlight',
                      content: e
                  }),
                  (r = ''))
                : (r += e);
        }),
            n.length > 0 &&
                (r.length > 0 &&
                    n.push({
                        type: 'text',
                        content: r
                    }),
                'text' === e.type
                    ? (e.content = n)
                    : (e.content = [
                          {
                              type: 'text',
                              content: n
                          }
                      ]));
    } else null != e.content && p(e.content, t);
    return e;
}
function m(e) {
    let t = new Set(f(e));
    return (e) => p(e, t);
}
