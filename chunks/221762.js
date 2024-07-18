var n = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
default: e
  };
};
Object.defineProperty(t, '__esModule', {
  value: !0
});
let a = n(r(919565)),
  o = n(r(537978)),
  s = n(r(158965)),
  i = 'twhZNwxI1aFG3r4';

function c(e, ...t) {
  let r = '';
  for (let n = 0; n < e.length; n++)
if (r += e[n], n < t.length) {
  let e = t[n],
    a = !1;
  if (s.default(e).value && (e = s.default(e).value, a = !0), e && e[i] || a) {
    let t = r.split('\n'),
      n = t[t.length - 1].search(/\S/),
      o = n > 0 ? ' '.repeat(n) : '';
    (a ? JSON.stringify(e, null, 2) : e[i]).split('\n').forEach((e, t) => {
      t > 0 ? r += '\n' + o + e : r += e;
    });
  } else if ('string' == typeof e && e.includes('\n')) {
    let t = r.match(/(?:^|\n)( *)$/);
    if ('string' == typeof e) {
      let n = t ? t[1] : '';
      r += e.split('\n').map((e, t) => (e = i + e, 0 === t ? e : `${ n }${ e }`)).join('\n');
    } else
      r += e;
  } else
    r += e;
}
  return (r = a.default(r)).split(i).join('');
}
c.pretty = e => o.default(e) ? {
  [i]: JSON.stringify(e, null, 2)
} : e, t.default = c;