n.d(t, {
  Z: function() {
return I;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(106351),
  s = n(507274),
  o = n(906732),
  l = n(541716),
  u = n(752305),
  c = n(893718),
  d = n(131704),
  _ = n(5192),
  E = n(785717),
  f = n(485216),
  h = n(689938),
  p = n(227795);
let m = (0, d.kt)({
  id: '1',
  type: a.d.DM
});

function I(e) {
  let {
user: t,
guildId: n,
channelId: a,
onReply: d,
setPopoutRef: I
  } = e, {
newestAnalyticsLocation: T
  } = (0, o.ZP)(), {
trackUserProfileAction: g
  } = (0, E.KZ)(), [S, A] = i.useState(''), [N, v] = i.useState((0, u.JM)(S)), O = i.useRef(!1), R = i.useRef(null);
  return i.useEffect(() => {
null == I || I(null == R ? void 0 : R.current);
  }, [
R,
I
  ]), (0, r.jsx)(s.V, {
ref: R,
children: (0, r.jsx)('div', {
  className: p.container,
  children: (0, r.jsx)(c.Z, {
    innerClassName: p.inner,
    editorClassName: p.editor,
    type: l.I.USER_PROFILE,
    placeholder: h.Z.Messages.QUICK_DM_USER.format({
      name: _.ZP.getName(n, a, t)
    }),
    channel: m,
    textValue: S,
    richValue: N,
    onChange: (e, t, n) => {
      if (t !== S)
        A(t), v(n);
    },
    focused: O.current,
    onFocus: () => {
      O.current = !0;
    },
    onBlur: () => {
      null !== R.current && (O.current = !1, null == d || d(!1));
    },
    onSubmit: async e => {
      let {
        value: n
      } = e;
      try {
        return g({
          action: 'SEND_STATUS_REPLY'
        }), await (0, f.Z)({
          userId: t.id,
          content: n.trim(),
          location: T
        }), null == d || d(!1), {
          shouldClear: !0,
          shouldRefocus: !1
        };
      } catch {
        return {
          shouldClear: !1,
          shouldRefocus: !1
        };
      }
    }
  })
})
  });
}