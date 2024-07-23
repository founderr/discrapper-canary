var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(481060),
  l = n(207796),
  o = n(420212),
  c = n(689938),
  d = n(352385);
let u = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: !0
};
t.Z = function(e) {
  let {
children: t,
onClose: n
  } = e, _ = s.useCallback(() => {
(0, l.fH)(l.v0.DISCOVERY), null == n || n();
  }, [n]);
  s.useEffect(() => {
let e = e => {
  e.key === o.vn.ESCAPE && _();
};
return window.addEventListener('keydown', e), () => window.removeEventListener('keydown', e);
  }, [_]);
  let E = (0, r.useSpring)({
from: {
  opacity: 0
},
to: {
  opacity: 1
},
config: u,
delay: 500
  });
  return (0, i.jsxs)('div', {
className: d.container,
children: [
  (0, i.jsx)('div', {
    className: d.saveContainer,
    children: (0, i.jsx)(r.Button, {
      onClick: _,
      look: r.ButtonLooks.OUTLINED,
      color: r.ButtonColors.PRIMARY,
      children: c.Z.Messages.SAVE
    })
  }),
  (0, i.jsx)(a.animated.div, {
    style: {
      opacity: E.opacity,
      transform: E.opacity.to([
        0,
        1
      ], [
        40,
        0
      ]).to(e => 'translateY('.concat(e, 'px)'))
    },
    className: d.contentWrapper,
    children: (0, i.jsx)(r.Scroller, {
      fade: !0,
      className: d.content,
      children: t
    })
  })
]
  });
};