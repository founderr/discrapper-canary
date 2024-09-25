var r,
    i,
    a = n(668530),
    o = n(204384),
    s = a.process,
    l = a.Deno,
    u = (s && s.versions) || (l && l.version),
    c = u && u.v8;
c && (i = (r = c.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !i && o && (!(r = o.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = o.match(/Chrome\/(\d+)/)) && (i = +r[1]), (e.exports = i);
