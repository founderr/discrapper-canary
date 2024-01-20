n("781738"), n("424973");
var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
  i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
  o = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
  s = n("786561"),
  a = n("891044"),
  c = n("912065").Buffer;
e.exports = function(e, t) {
  var n, u = e.toString(),
    d = u.match(r);
  if (d) {
    var l = "aes" + d[1],
      f = c.from(d[2], "hex"),
      p = c.from(d[3].replace(/[\r\n]/g, ""), "base64"),
      h = s(t, f.slice(0, 8), parseInt(d[1], 10)).key,
      g = [],
      b = a.createDecipheriv(l, h, f);
    g.push(b.update(p)), g.push(b.final()), n = c.concat(g)
  } else {
    var v = u.match(o);
    n = c.from(v[2].replace(/[\r\n]/g, ""), "base64")
  }
  return {
    tag: u.match(i)[1],
    data: n
  }
}