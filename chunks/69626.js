"use strict";
n.d(t, {
  ZP: function() {
    return C
  },
  wz: function() {
    return g
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(555573),
  l = n(10718),
  u = n(895924),
  _ = n(124072),
  c = n(665906),
  d = n(695346),
  E = n(592125),
  I = n(703558),
  T = n(496675),
  h = n(944486),
  S = n(585483),
  f = n(981631),
  N = n(689079),
  A = n(665692),
  m = n(689938),
  O = n(471898);

function R(e, t, n, r) {
  if (null == e) return;
  let s = () => {
    let i = E.Z.getChannel(e);
    if (null == i) return;
    let {
      command: s,
      application: o
    } = l.Xq(i, n);
    if (null != s && s.name === t) {
      var _, c;
      S.S.dispatch(f.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      });
      let t = null != o ? {
        type: u.Qi.APPLICATION,
        id: o.id,
        icon: null !== (c = null == o ? void 0 : null === (_ = o.bot) || void 0 === _ ? void 0 : _.username) && void 0 !== c ? c : o.icon,
        name: o.name,
        application: o
      } : null;
      a.Po({
        channelId: e,
        command: null,
        section: null
      }), a.Po({
        channelId: e,
        command: s,
        section: t,
        location: r
      })
    }
  };
  "" !== I.Z.getDraft(e, I.d.ChannelMessage) ? (0, o.openModal)(t => (0, i.jsx)(o.ConfirmModal, {
    header: m.Z.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
    confirmText: m.Z.Messages.CLEAR,
    cancelText: m.Z.Messages.CANCEL,
    onConfirm: () => s(),
    confirmButtonColor: o.Button.Colors.BRAND,
    onCloseCallback: () => {
      S.S.dispatch(f.CkL.FOCUS_CHANNEL_TEXT_AREA, {
        channelId: e
      })
    },
    ...t,
    children: (0, i.jsx)(o.Text, {
      variant: "text-md/normal",
      children: m.Z.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
    })
  })) : s()
}

function p(e) {
  var t;
  let {
    node: n,
    output: a,
    state: I
  } = e, S = (0, s.e7)([E.Z, h.Z], () => {
    var e;
    return E.Z.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : h.Z.getChannelId())
  }, [n.channelId]), {
    hasSendMessagePerm: m,
    hasUseAppCommandsPerm: O
  } = (0, s.cj)([T.Z], () => {
    let e = T.Z.can(f.Plq.SEND_MESSAGES, S);
    return {
      hasSendMessagePerm: e,
      hasUseAppCommandsPerm: T.Z.can(f.Plq.USE_APPLICATION_COMMANDS, S)
    }
  }), {
    command: p
  } = l.YZ(S, null !== (t = n.commandKey) && void 0 !== t ? t : ""), g = d.dN.useSetting(), C = r.useMemo(() => {
    if (null == p || null == S || p.name !== n.commandName || g) return !1;
    let e = S.isPrivate();
    if ((0, c.xl)(S) || !e && !m) return !1;
    let t = (null == p ? void 0 : p.applicationId) === N.bi.BUILT_IN;
    return !!e || !!t || !!O || !1
  }, [S, p, m, O, n.commandName, g]), v = r.useCallback(e => {
    null == e || e.stopPropagation(), null != S && null != n.commandName && null != n.commandKey && R(S.id, n.commandName, n.commandKey, u.Vh.MENTION)
  }, [S, n.commandKey, n.commandName]);
  return C ? (0, i.jsx)(o.Tooltip, {
    text: n.output,
    position: "top",
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: r
      } = e;
      return (0, i.jsxs)(_.Z, {
        role: "link",
        onClick: v,
        onMouseEnter: t,
        onMouseLeave: r,
        children: [A.GI, a(n.content, I)]
      }, I.key)
    }
  }, I.key) : (0, i.jsxs)("span", {
    children: [A.GI, a(n.content, I)]
  })
}

function g(e) {
  let {
    commandId: t,
    commandName: n,
    commandDescription: r,
    onClick: a
  } = e, l = (0, s.e7)([h.Z], () => h.Z.getChannelId()), _ = e => {
    null == e || e.stopPropagation(), R(l, n, t, u.Vh.POPULAR_COMMANDS), null == a || a(t)
  };
  return (0, i.jsx)(o.Tooltip, {
    text: r,
    position: "top",
    tooltipContentClassName: O.tooltip,
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: r
      } = e;
      return (0, i.jsxs)(o.Button, {
        color: o.ButtonColors.PRIMARY,
        size: o.ButtonSizes.ICON,
        onClick: _,
        onMouseEnter: t,
        onMouseLeave: r,
        children: ["/", n]
      })
    }
  })
}

function C(e) {
  return {
    react: (e, t, n) => (0, i.jsx)(p, {
      node: e,
      output: t,
      state: n
    })
  }
}