n.d(t, {
  Y: function() {
    return g
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(286379),
  a = n(442837),
  r = n(481060),
  o = n(797614),
  c = n(699516),
  u = n(378298),
  d = n(359119),
  h = n(473092),
  m = n(177342),
  E = n(134612),
  p = n(689938);

function g(e) {
  let {
    channelId: t,
    warningId: g,
    senderId: f
  } = e, C = i.useCallback(() => {
    (0, u.T)(t, [g])
  }, [t, g]), _ = (0, a.e7)([c.Z], () => c.Z.isBlocked(f)), I = i.useMemo(() => ({
    channelId: t,
    warningId: g,
    senderId: f,
    warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2
  }), [t, g, f]);
  i.useEffect(() => {
    (0, h.KQ)({
      ...I,
      viewName: h.pb.SAFETY_WARNING_BANNER
    }), o.Z.increment({
      name: s.V.SAFETY_WARNING_VIEW
    })
  }, [I]);
  let x = i.useCallback(e => {
      (0, h.qc)({
        ...I,
        cta: e
      })
    }, [I]),
    T = i.useCallback(() => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("49237"), n.e("49508"), n.e("9738")]).then(n.bind(n, 611446));
        return n => {
          let {
            transitionState: i,
            onClose: s
          } = n;
          return (0, l.jsx)(e, {
            otherUserId: f,
            channelId: t,
            warningId: g,
            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
            transitionState: i,
            onClose: s
          })
        }
      }, {
        modalKey: E.X_
      }), x(h.NM.USER_BANNER_OPEN_SAFETY_TOOLS)
    }, [t, f, g, x]),
    N = i.useCallback(() => {
      C(), x(h.NM.USER_BANNER_BLOCK_CONFIRM)
    }, [C, x]),
    Z = i.useCallback(() => {
      C(), x(h.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
    }, [C, x]),
    S = i.useCallback(() => {
      (0, r.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("19538")]).then(n.bind(n, 699783));
        return n => {
          let {
            transitionState: i,
            onClose: s
          } = n;
          return (0, l.jsx)(e, {
            transitionState: i,
            onBlock: N,
            onBlockAndReport: Z,
            onCancel: () => {
              null == s || s(), x(h.NM.USER_BANNER_BLOCK_CANCEL)
            },
            onClose: s,
            userId: f,
            channelId: t
          })
        }
      })
    }, [N, Z, f, t, x]);
  return (0, l.jsx)(m.Q, {
    channelId: t,
    warningId: g,
    senderId: f,
    warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: p.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_HEADER,
    description: p.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_DESCRIPTION,
    onDismiss: C,
    buttons: [{
      text: p.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_OPEN_SAFETY_TOOLS_BUTTON,
      color: r.Button.Colors.BRAND,
      onclick: T
    }, ..._ ? [] : [{
      text: p.Z.Messages.INAPPROPRIATE_CONVERSATION_BANNER_BLOCK_BUTTON,
      color: r.Button.Colors.PRIMARY,
      onclick: S
    }]]
  })
}