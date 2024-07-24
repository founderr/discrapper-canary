n.d(t, {
  E: function() {
return s;
  }
}), n(411104);
var r = n(470079),
  a = n(250683),
  o = n(253135);

function s(e) {
  let {
codeBase64: t,
chunkSize: n,
desiredLength: s
  } = e, i = r.useMemo(() => {
if (null == t || '' === t)
  return null;
let e = a.toByteArray(t),
  r = (0, o.Dq)(e, s, n);
if (null == r)
  return null;
let i = RegExp('.{1,'.concat(n, '}'), 'g'),
  c = r.match(i);
return null == c ? null : Array.from(c);
  }, [
n,
t,
s
  ]);
  if (null != t && '' !== t && null == i)
throw Error('[useReadableSecureFramesCode] Failed to parse base 64 code.');
  return i;
}