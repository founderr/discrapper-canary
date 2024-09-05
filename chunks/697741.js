n.d(t, {
    $: function () {
        return w;
    }
});
let i = {
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
    o = {
        icate: 'ic',
        ative: '',
        alize: 'al',
        iciti: 'ic',
        ical: 'ic',
        ful: '',
        ness: ''
    },
    r = '[aeiouy]',
    a = '([^aeiou][^aeiouy]*)',
    c = '(' + r + '[aeiou]*)',
    l = RegExp('^' + a + '?' + c + a),
    s = RegExp('^' + a + '?' + c + a + c + '?$'),
    u = RegExp('^' + a + '?(' + c + a + '){2,}'),
    d = RegExp('^' + a + '?' + r),
    g = RegExp('^' + a + r + '[^aeiouwxy]$'),
    h = /ll$/,
    f = /^(.+?)e$/,
    _ = /^(.+?)y$/,
    m = /^(.+?(s|t))(ion)$/,
    p = /^(.+?)(ed|ing)$/,
    b = /(at|bl|iz)$/,
    C = /^(.+?)eed$/,
    I = /^.+?[^s]s$/,
    S = /^.+?(ss|i)es$/,
    v = /([^aeiouylsz])\1$/,
    R = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,
    E = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
    T = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
function w(e) {
    let t,
        n = String(e).toLowerCase();
    if (n.length < 3) return n;
    let r = !1;
    return 121 === n.codePointAt(0) && ((r = !0), (n = 'Y' + n.slice(1))), S.test(n) ? (n = n.slice(0, -2)) : I.test(n) && (n = n.slice(0, -1)), (t = C.exec(n)) ? l.test(t[1]) && (n = n.slice(0, -1)) : (t = p.exec(n)) && d.test(t[1]) && ((n = t[1]), b.test(n) ? (n += 'e') : v.test(n) ? (n = n.slice(0, -1)) : g.test(n) && (n += 'e')), (t = _.exec(n)) && d.test(t[1]) && (n = t[1] + 'i'), (t = R.exec(n)) && l.test(t[1]) && (n = t[1] + i[t[2]]), (t = E.exec(n)) && l.test(t[1]) && (n = t[1] + o[t[2]]), (t = T.exec(n)) ? u.test(t[1]) && (n = t[1]) : (t = m.exec(n)) && u.test(t[1]) && (n = t[1]), (t = f.exec(n)) && (u.test(t[1]) || (s.test(t[1]) && !g.test(t[1]))) && (n = t[1]), h.test(n) && u.test(n) && (n = n.slice(0, -1)), r && (n = 'y' + n.slice(1)), n;
}
