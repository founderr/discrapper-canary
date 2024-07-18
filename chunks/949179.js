var n = r(599295),
  a = r(470079),
  o = r(639519),
  s = r.n(o),
  i = function(e) {
var t = e.styling,
  r = e.arrowStyle,
  o = e.expanded,
  s = e.nodeType,
  i = e.onClick;
return a.createElement('div', (0, n.Z)({}, t('arrowContainer', r), {
  onClick: i
}), a.createElement('div', t([
  'arrow',
  'arrowSign'
], s, o, r), '\u25B6', 'double' === r && a.createElement('div', t([
  'arrowSign',
  'arrowSignInner'
]), '\u25B6')));
  };
i.propTypes = {
  styling: s().func.isRequired,
  arrowStyle: s().oneOf([
'single',
'double'
  ]),
  expanded: s().bool.isRequired,
  nodeType: s().string.isRequired,
  onClick: s().func.isRequired
}, i.defaultProps = {
  arrowStyle: 'single'
}, t.Z = i;