var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  l = n(289823),
  r = n(594174);
t.Z = function(e) {
  let {
recipients: t,
size: n,
status: o,
isTyping: c,
className: d,
...u
  } = e, h = s.AvatarSizeSpecs[n], p = (0, a.Wu)([r.default], () => t.slice(0, 2).map(e => {
let t = r.default.getUser(e);
if (null != t)
  return t.getAvatarURL(void 0, h.size, !1);
  }), [
t,
h.size
  ]);
  return (0, i.jsx)(l.Z, {
'aria-label': u['aria-label'],
'aria-hidden': u['aria-hidden'],
backSrc: p[0],
frontSrc: p[1],
size: n,
status: o,
isTyping: null != c && c,
className: d
  });
};