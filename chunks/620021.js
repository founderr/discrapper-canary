n.r(l), n(47120);
var s = n(735250),
  a = n(470079),
  t = n(120356),
  i = n.n(t),
  o = n(442837),
  r = n(544891),
  d = n(481060),
  u = n(910693),
  c = n(314897),
  N = n(271383),
  E = n(430824),
  v = n(496675),
  C = n(594174),
  M = n(626135),
  A = n(51144),
  I = n(981631),
  _ = n(689938),
  g = n(217614);

function h(e) {
  let {
    disabled: l = !1,
    user: n,
    setNickname: t,
    nickname: o,
    error: r,
    hasNick: u
  } = e, N = a.useRef(null), E = a.useCallback(() => {
    var e;
    t(""), null === (e = N.current) || void 0 === e || e.focus()
  }, [t]);
  return (0, s.jsxs)(s.Fragment, {
    children: [l || null == n || n.id === c.default.getId() ? null : (0, s.jsx)(d.Card, {
      type: d.Card.Types.WARNING,
      className: g.card,
      children: (0, s.jsx)(d.Text, {
        className: g.warning,
        variant: "text-md/normal",
        children: _.Z.Messages.CHANGE_NICKNAME_WARNING
      })
    }), (0, s.jsx)(d.FormTitle, {
      className: i()(g.itemGroup, {
        [g.disabled]: l
      }),
      children: l ? _.Z.Messages.CHANGE_IDENTITY_MODAL_CHANGE_NICKNAME_DISABLED : _.Z.Messages.NICKNAME
    }), (0, s.jsx)(d.TextInput, {
      disabled: l,
      inputRef: N,
      maxLength: I.l$U,
      value: o,
      placeholder: A.ZP.getName(n),
      onChange: t,
      autoFocus: !0
    }), null != r ? (0, s.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-danger",
      className: g.nickError,
      children: r
    }) : null, u && !l ? (0, s.jsx)(d.Button, {
      look: d.Button.Looks.LINK,
      color: d.Button.Colors.LINK,
      size: d.Button.Sizes.NONE,
      onClick: E,
      className: g.reset,
      children: _.Z.Messages.RESET_NICKNAME
    }) : null]
  })
}
l.default = function(e) {
  var l;
  let {
    transitionState: n,
    user: t,
    guildId: i,
    onClose: c,
    analyticsSource: A,
    analyticsLocations: m
  } = e, x = (0, o.e7)([N.ZP], () => null != i ? N.ZP.getMember(i, t.id) : null), k = (0, o.e7)([v.Z, C.default, E.Z], () => {
    var e;
    let l = E.Z.getGuild(i);
    return null != l && ((null === (e = C.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t.id ? v.Z.can(I.Plq.CHANGE_NICKNAME, l) || v.Z.can(I.Plq.MANAGE_NICKNAMES, l) : v.Z.canManageUser(I.Plq.MANAGE_NICKNAMES, t.id, l))
  }), [Z, p] = a.useState(!1), [j, G] = a.useState(null !== (l = null == x ? void 0 : x.nick) && void 0 !== l ? l : ""), [f, L] = a.useState({});
  a.useEffect(() => {
    M.default.track(I.rMx.OPEN_MODAL, {
      type: "Change Server Identity",
      location: I.ZY5.GUILD_CHANNEL,
      source: A
    })
  }, []);
  let R = (0, u.sE)(i, {
      location: null == m ? void 0 : m[0],
      targetUserId: t.id
    }),
    b = a.useCallback(async e => {
      var l, n, s, a, o, d, N, E, v;
      e.preventDefault();
      let C = null;
      if (j !== (null !== (l = null == x ? void 0 : x.nick) && void 0 !== l ? l : "") && ((C = null != C ? C : {}).nick = j), null == C) {
        c();
        return
      }
      try {
        p(!0), await r.tn.patch({
          url: I.ANM.GUILD_MEMBER(i, t.id),
          body: C
        }), R(u.jQ.CHANGE_NICKNAME), c()
      } catch (t) {
        let e;
        p(!1);
        let l = null !== (s = null === (n = t.body) || void 0 === n ? void 0 : n.errors) && void 0 !== s ? s : null;
        (null == l ? void 0 : l.nick) != null ? e = (null === (d = l.nick) || void 0 === d ? void 0 : null === (o = d._errors) || void 0 === o ? void 0 : null === (a = o[0]) || void 0 === a ? void 0 : a.message) || _.Z.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR : (null == l ? void 0 : l.username) != null && (e = (null === (v = l.username) || void 0 === v ? void 0 : null === (E = v._errors) || void 0 === E ? void 0 : null === (N = E[0]) || void 0 === N ? void 0 : N.message) || _.Z.Messages.CHANGE_IDENTITY_MODAL_UNKNOWN_ERROR), L({
          nick: e
        })
      }
    }, [i, j, c, t, x, R]);
  return (0, s.jsx)(d.ModalRoot, {
    "aria-label": _.Z.Messages.CHANGE_IDENTITY,
    transitionState: n,
    children: (0, s.jsxs)("form", {
      onSubmit: b,
      children: [(0, s.jsx)(d.ModalHeader, {
        separator: !1,
        children: (0, s.jsx)(d.Heading, {
          variant: "heading-lg/semibold",
          children: _.Z.Messages.CHANGE_NICKNAME
        })
      }), (0, s.jsx)(d.ModalContent, {
        className: g.modalContent,
        children: (0, s.jsx)(h, {
          disabled: !k,
          user: t,
          error: f.nick,
          nickname: j,
          setNickname: G,
          hasNick: (null == x ? void 0 : x.nick) != null
        })
      }), (0, s.jsxs)(d.ModalFooter, {
        children: [(0, s.jsx)(d.Button, {
          type: "submit",
          disabled: Z,
          children: _.Z.Messages.SAVE
        }), (0, s.jsx)(d.Button, {
          onClick: c,
          look: d.Button.Looks.LINK,
          color: d.Button.Colors.PRIMARY,
          children: _.Z.Messages.CANCEL
        })]
      })]
    })
  })
}