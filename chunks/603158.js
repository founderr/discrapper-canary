r.d(n, {
    F: function () {
        return u;
    }
});
let i = { '|': ' ' },
    a = {
        '[': ' ',
        ']': ' ',
        '(': ' ',
        ')': ' ',
        '|': ' ',
        '~': ' '
    },
    s = {
        '-': '-',
        ' ': ' '
    },
    o = {
        '\u200B': '',
        '‌': '',
        '‍': '',
        '\u200E': '',
        '\uFEFF': ''
    },
    l = {
        ...s,
        ...a,
        ...o,
        ...i
    };
function u(e) {
    let n = '';
    for (let r = 0; r < e.length; r++) {
        let i = e[r];
        null != l[i] ? (n += l[i]) : /[\p{Pd}\p{Pc}\p{Po}]/gu.test(i) ? (n += ' ') : (n += i);
    }
    return n.toLowerCase();
}
