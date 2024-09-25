n.d(t, {
    $: function () {
        return R;
    }
});
let r = {
        ational: 'ate',
        tional: 'tion',
        enci: 'ence',
        anci: 'ance',
        izer: 'ize',
        bli: 'ble',
        alli: 'al',
        entli: 'ent',
        eli: 'e',
        ousli: 'ous',
        ization: 'ize',
        ation: 'ate',
        ator: 'ate',
        alism: 'al',
        iveness: 'ive',
        fulness: 'ful',
        ousness: 'ous',
        aliti: 'al',
        iviti: 'ive',
        biliti: 'ble',
        logi: 'log'
    },
    i = {
        icate: 'ic',
        ative: '',
        alize: 'al',
        iciti: 'ic',
        ical: 'ic',
        ful: '',
        ness: ''
    },
    a = '[aeiouy]',
    o = '([^aeiou][^aeiouy]*)',
    s = '(' + a + '[aeiou]*)',
    l = RegExp('^' + o + '?' + s + o),
    u = RegExp('^' + o + '?' + s + o + s + '?$'),
    c = RegExp('^' + o + '?(' + s + o + '){2,}'),
    d = RegExp('^' + o + '?' + a),
    _ = RegExp('^' + o + a + '[^aeiouwxy]$'),
    E = /ll$/,
    f = /^(.+?)e$/,
    h = /^(.+?)y$/,
    p = /^(.+?(s|t))(ion)$/,
    m = /^(.+?)(ed|ing)$/,
    I = /(at|bl|iz)$/,
    T = /^(.+?)eed$/,
    g = /^.+?[^s]s$/,
    S = /^.+?(ss|i)es$/,
    A = /([^aeiouylsz])\1$/,
    v = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    N = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    O = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function R(e) {
    let t,
        n = String(e).toLowerCase();
    if (n.length < 3) return n;
    let a = !1;
    return 121 === n.codePointAt(0) && ((a = !0), (n = 'Y' + n.slice(1))), S.test(n) ? (n = n.slice(0, -2)) : g.test(n) && (n = n.slice(0, -1)), (t = T.exec(n)) ? l.test(t[1]) && (n = n.slice(0, -1)) : (t = m.exec(n)) && d.test(t[1]) && ((n = t[1]), I.test(n) ? (n += 'e') : A.test(n) ? (n = n.slice(0, -1)) : _.test(n) && (n += 'e')), (t = h.exec(n)) && d.test(t[1]) && (n = t[1] + 'i'), (t = v.exec(n)) && l.test(t[1]) && (n = t[1] + r[t[2]]), (t = N.exec(n)) && l.test(t[1]) && (n = t[1] + i[t[2]]), (t = O.exec(n)) ? c.test(t[1]) && (n = t[1]) : (t = p.exec(n)) && c.test(t[1]) && (n = t[1]), (t = f.exec(n)) && (c.test(t[1]) || (u.test(t[1]) && !_.test(t[1]))) && (n = t[1]), E.test(n) && c.test(n) && (n = n.slice(0, -1)), a && (n = 'y' + n.slice(1)), n;
}
