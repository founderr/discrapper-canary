n.d(t, {
  Z: function() {
return g;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(106351),
  s = n(507274),
  o = n(541716),
  l = n(752305),
  u = n(893718),
  c = n(131704),
  d = n(823379),
  _ = n(5192),
  E = n(785717),
  f = n(485216),
  h = n(228168),
  p = n(689938),
  m = n(628372);
let I = (0, c.kt)({
id: '1',
type: a.d.DM
  }),
  T = e => {
let {
  input: t,
  username: n,
  sourceType: r,
  sourceDetails: i
} = e;
switch (r) {
  case h.N9.ACTIVITY:
    let a = p.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({
      username: n
    });
    return '> -# *'.concat(a, '*\n').concat(t);
  case h.N9.AVATAR:
    let s = p.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({
      username: n
    });
    return '> -# *'.concat(s, '*\n').concat(t);
  case h.N9.STATUS:
    let o = p.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({
      username: n
    });
    return null != i ? '> -# *'.concat(o, '*').concat('\n > '.concat(i), '\n').concat(t) : '> -# *'.concat(o, '*\n').concat(t);
  default:
    (0, d.vE)(r);
}
  };

function g(e) {
  let {
user: t,
guildId: n,
channelId: a,
sourceType: c,
sourceDetails: d,
onReply: h,
setPopoutRef: g,
modalKey: S,
onClose: A
  } = e, {
trackUserProfileAction: N
  } = (0, E.KZ)(), [v, O] = i.useState(''), [R, C] = i.useState((0, l.JM)(v)), y = i.useRef(!1), D = i.useRef(null), L = _.ZP.getName(n, a, t);
  i.useEffect(() => {
null == g || g(null == D ? void 0 : D.current);
  }, [
D,
g
  ]);
  let b = async e => {
if (null == e)
  return;
N({
  action: 'PRESS_REPLY'
});
let n = T({
  input: e,
  username: L,
  sourceType: c,
  sourceDetails: d
});
await (0, f.Z)({
  userId: t.id,
  content: n,
  location: 'UserProfileReplyPopout'
});
  };
  return (0, r.jsx)(s.V, {
ref: D,
children: (0, r.jsx)('div', {
  className: m.container,
  children: (0, r.jsx)(u.Z, {
    parentModalKey: S,
    emojiPickerCloseOnModalOuterClick: !0,
    innerClassName: m.inner,
    editorClassName: m.editor,
    type: o.I.USER_PROFILE,
    placeholder: p.Z.Messages.QUICK_DM_USER.format({
      name: _.ZP.getName(n, a, t)
    }),
    channel: I,
    textValue: v,
    richValue: R,
    onChange: (e, t, n) => {
      if (t !== v)
        O(t), C(n);
    },
    focused: y.current,
    onFocus: () => {
      y.current = !0;
    },
    onBlur: e => {
      var t;
      if (null === (t = D.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
        y.current = !1;
        return;
      }
      null !== D.current && (y.current = !1, null == h || h(!1));
    },
    onSubmit: async e => {
      let {
        value: t
      } = e;
      try {
        return N({
          action: 'SEND_STATUS_REPLY'
        }), await b(t.trim()), null == h || h(!1), null == A || A(), {
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