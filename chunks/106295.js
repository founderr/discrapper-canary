var n,
    a,
    o = r(161581),
    i = r(626544),
    _ = o.process,
    E = o.Deno,
    s = (_ && _.versions) || (E && E.version),
    c = s && s.v8;
c && (a = (n = c.split('.'))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !a && i && (!(n = i.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = i.match(/Chrome\/(\d+)/)) && (a = +n[1]), (e.exports = a);
