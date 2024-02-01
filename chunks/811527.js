n("781738"), n("424973");
var r = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
  i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
  o = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
  s = n("786561"),
  a = n("891044"),
  c = n("912065").Buffer;
e.exports = function(e, t) {
  var n, u = e.toString(),
    l = u.match(r);
  if (l) {
    var d = "aes" + l[1],
      f = c.from(l[2], "hex"),
      p = c.from(l[3].replace(/[\r\n]/g, ""), "base64"),
      h = s(t, f.slice(0, 8), parseInt(l[1], 10)).key,
      v = [],
      g = a.createDecipheriv(d, h, f);
    v.push(g.update(p)), v.push(g.final()), n = c.concat(v)
  } else {
    var b = u.match(o);
    n = c.from(b[2].replace(/[\r\n]/g, ""), "base64")
  }
  return {
    tag: u.match(i)[1],
    data: n
  }
}