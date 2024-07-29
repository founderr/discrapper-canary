n.d(t, {
  Z: function() {
return A;
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
  d = n(699516),
  _ = n(823379),
  E = n(5192),
  f = n(51144),
  h = n(785717),
  p = n(485216),
  m = n(228168),
  I = n(689938),
  T = n(628372);
let g = (0, c.kt)({
id: '1',
type: a.d.DM
  }),
  S = e => {
let {
  input: t,
  username: n,
  sourceType: r,
  sourceDetails: i
} = e;
switch (r) {
  case m.N9.ACTIVITY:
    let a = I.Z.Messages.USER_PROFILE_REPLIED_TO_ACTIVITY.format({
      username: n
    });
    return '> -# *'.concat(a, '*\n').concat(t);
  case m.N9.AVATAR:
    let s = I.Z.Messages.USER_PROFILE_REPLIED_TO_AVATAR.format({
      username: n
    });
    return '> -# *'.concat(s, '*\n').concat(t);
  case m.N9.STATUS:
    let o = I.Z.Messages.USER_PROFILE_REPLIED_TO_STATUS.format({
      username: n
    });
    return null != i ? '> -# *'.concat(o, '*').concat('\n > '.concat(i), '\n').concat(t) : '> -# *'.concat(o, '*\n').concat(t);
  default:
    (0, _.vE)(r);
}
  };

function A(e) {
  let {
user: t,
guildId: n,
channelId: a,
sourceType: c,
sourceDetails: _,
onReply: m,
setPopoutRef: A,
modalKey: N,
onClose: v
  } = e, {
trackUserProfileAction: O
  } = (0, h.KZ)(), [R, C] = i.useState(''), [y, D] = i.useState((0, l.JM)(R)), L = i.useRef(!1), b = i.useRef(null);
  i.useEffect(() => {
null == A || A(null == b ? void 0 : b.current);
  }, [
b,
A
  ]);
  let M = async e => {
var n;
if (null == e)
  return;
O({
  action: 'PRESS_REPLY'
});
let r = S({
  input: e,
  username: null !== (n = d.Z.getNickname(t.id)) && void 0 !== n ? n : f.ZP.getName(t),
  sourceType: c,
  sourceDetails: _
});
await (0, p.Z)({
  userId: t.id,
  content: r,
  location: 'UserProfileReplyPopout'
});
  };
  return (0, r.jsx)(s.V, {
ref: b,
children: (0, r.jsx)('div', {
  className: T.container,
  children: (0, r.jsx)(u.Z, {
    parentModalKey: N,
    emojiPickerCloseOnModalOuterClick: !0,
    innerClassName: T.inner,
    editorClassName: T.editor,
    type: o.I.USER_PROFILE,
    placeholder: I.Z.Messages.QUICK_DM_USER.format({
      name: E.ZP.getName(n, a, t)
    }),
    channel: g,
    textValue: R,
    richValue: y,
    onChange: (e, t, n) => {
      if (t !== R)
        C(t), D(n);
    },
    focused: L.current,
    onFocus: () => {
      L.current = !0;
    },
    onBlur: e => {
      var t;
      if (null === (t = b.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) {
        L.current = !1;
        return;
      }
      null !== b.current && (L.current = !1, null == m || m(!1));
    },
    onSubmit: async e => {
      let {
        value: t
      } = e;
      try {
        return O({
          action: 'SEND_STATUS_REPLY'
        }), await M(t.trim()), null == m || m(!1), null == v || v(), {
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