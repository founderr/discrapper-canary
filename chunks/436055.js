n.d(t, {
  E: function() {
return s;
  }
}), n(411104);
var o = n(470079),
  r = n(250683),
  a = n(253135);

function s(e) {
  let {
codeBase64: t,
chunkSize: n,
desiredLength: s
  } = e, i = o.useMemo(() => {
if (null == t)
  return null;
let e = r.toByteArray(t),
  o = (0, a.Dq)(e, s, n);
if (null == o)
  return null;
let i = RegExp('.{1,'.concat(n, '}'), 'g'),
  c = o.match(i);
return null == c ? null : Array.from(c);
  }, [
n,
t,
s
  ]);
  if (null != t && null == i)
throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
  return i;
}