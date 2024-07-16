var n = s(735250);
s(470079);
var r = s(780384),
  a = s(481060),
  o = s(410030),
  i = s(689938),
  l = s(411400),
  c = s(982240),
  d = s(533854);
t.Z = e => {
  let {
onRetry: t
  } = e, s = (0, o.ZP)();
  return (0, n.jsxs)('div', {
className: l.wrapper,
children: [
  (0, n.jsx)('img', {
    className: l.__invalid_loadIssueImg,
    src: (0, r.wj)(s) ? c : d,
    alt: ''
  }),
  (0, n.jsx)(a.Heading, {
    className: l.heading1,
    variant: 'heading-xl/semibold',
    children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_HEADING
  }),
  (0, n.jsx)(a.Text, {
    variant: 'text-md/normal',
    children: i.Z.Messages.COLLECTIBLES_SHOP_ERROR_SHOP_LOAD
  }),
  (0, n.jsx)(a.Button, {
    className: l.reload,
    size: a.Button.Sizes.MEDIUM,
    color: a.Button.Colors.BRAND,
    onClick: t,
    children: i.Z.Messages.ERRORS_RELOAD
  })
]
  });
};