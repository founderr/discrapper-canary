l.d(t, {
    $: function () {
        return S;
    }
});
let n = {
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
    r = '(' + a + '[aeiou]*)',
    s = RegExp('^' + o + '?' + r + o),
    d = RegExp('^' + o + '?' + r + o + r + '?$'),
    u = RegExp('^' + o + '?(' + r + o + '){2,}'),
    c = RegExp('^' + o + '?' + a),
    m = RegExp('^' + o + a + '[^aeiouwxy]$'),
    f = /ll$/,
    h = /^(.+?)e$/,
    g = /^(.+?)y$/,
    p = /^(.+?(s|t))(ion)$/,
    x = /^(.+?)(ed|ing)$/,
    _ = /(at|bl|iz)$/,
    v = /^(.+?)eed$/,
    E = /^.+?[^s]s$/,
    b = /^.+?(ss|i)es$/,
    I = /([^aeiouylsz])\1$/,
    C = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    j = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    M = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function S(e) {
    let t,
        l = String(e).toLowerCase();
    if (l.length < 3) return l;
    let a = !1;
    return 121 === l.codePointAt(0) && ((a = !0), (l = 'Y' + l.slice(1))), b.test(l) ? (l = l.slice(0, -2)) : E.test(l) && (l = l.slice(0, -1)), (t = v.exec(l)) ? s.test(t[1]) && (l = l.slice(0, -1)) : (t = x.exec(l)) && c.test(t[1]) && ((l = t[1]), _.test(l) ? (l += 'e') : I.test(l) ? (l = l.slice(0, -1)) : m.test(l) && (l += 'e')), (t = g.exec(l)) && c.test(t[1]) && (l = t[1] + 'i'), (t = C.exec(l)) && s.test(t[1]) && (l = t[1] + n[t[2]]), (t = j.exec(l)) && s.test(t[1]) && (l = t[1] + i[t[2]]), (t = M.exec(l)) ? u.test(t[1]) && (l = t[1]) : (t = p.exec(l)) && u.test(t[1]) && (l = t[1]), (t = h.exec(l)) && (u.test(t[1]) || (d.test(t[1]) && !m.test(t[1]))) && (l = t[1]), f.test(l) && u.test(l) && (l = l.slice(0, -1)), a && (l = 'y' + l.slice(1)), l;
}
