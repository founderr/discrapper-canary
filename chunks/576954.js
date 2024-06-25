n.d(t, {
  M: function() {
    return g
  }
});
var l = n(735250),
  i = n(470079),
  s = n(286379),
  a = n(481060),
  r = n(194359),
  o = n(797614),
  c = n(378298),
  u = n(359119),
  d = n(473092),
  h = n(177342),
  m = n(134612),
  E = n(981631),
  p = n(689938);

function g(e) {
  let {
    channelId: t,
    warningId: g,
    senderId: f
  } = e, C = i.useCallback(() => {
    (0, c.T)(t, [g])
  }, [t, g]), _ = i.useCallback(e => () => {
    r.Z.addRelationship({
      userId: f,
      context: {
        location: m.zr
      },
      type: E.OGo.BLOCKED
    }), C(), (0, a.showToast)((0, a.createToast)(p.Z.Messages.STRANGER_DANGER_BLOCK_CONFIRM, a.ToastType.SUCCESS)), (0, d.qc)({
      channelId: t,
      warningId: g,
      senderId: f,
      warningType: u.pj.STRANGER_DANGER,
      cta: e
    })
  }, [C, t, g, f]);
  i.useEffect(() => {
    (0, d.MC)(E.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: g,
      senderId: f,
      warningType: u.pj.STRANGER_DANGER
    }), o.Z.increment({
      name: s.V.SAFETY_WARNING_VIEW
    })
  }, [t, g, f]);
  let I = () => {
      (0, a.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("48092")]).then(n.bind(n, 816960));
        return n => {
          let {
            transitionState: i,
            onClose: s
          } = n;
          return (0, l.jsx)(e, {
            transitionState: i,
            onClose: s,
            channelId: t,
            warningId: g,
            senderId: f,
            handleBlock: () => {
              x(d.NM.USER_MODAL_BLOCK_CONFIRM, d.NM.USER_MODAL_BLOCK_CANCEL, I)
            }
          })
        }
      })
    },
    x = (e, i, s) => {
      (0, a.openModalLazy)(async () => {
        let {
          default: a
        } = await n.e("68747").then(n.bind(n, 744373));
        return n => (0, l.jsx)(a, {
          ...n,
          userId: f,
          confirmBlock: _(e),
          onCancel: () => {
            null == s || s(), (0, d.qc)({
              channelId: t,
              warningId: g,
              senderId: f,
              warningType: u.pj.STRANGER_DANGER,
              cta: i
            })
          }
        })
      })
    };
  return (0, l.jsx)(h.Q, {
    channelId: t,
    warningId: g,
    senderId: f,
    warningType: u.pj.STRANGER_DANGER,
    header: p.Z.Messages.STRANGER_DANGER_BANNER_HEADER,
    description: p.Z.Messages.STRANGER_DANGER_BANNER_DESCRIPTION,
    onDismiss: C,
    buttons: [{
      text: p.Z.Messages.STRANGER_DANGER_BANNER_MORE_TIPS,
      color: a.Button.Colors.BRAND,
      onclick: () => {
        I(), (0, d.qc)({
          channelId: t,
          warningId: g,
          senderId: f,
          warningType: u.pj.STRANGER_DANGER,
          cta: d.NM.OPEN_MORE_TIPS
        })
      }
    }, {
      text: p.Z.Messages.STRANGER_DANGER_BANNER_BLOCK,
      color: a.Button.Colors.RED,
      onclick: () => x(d.NM.USER_BANNER_BLOCK_CONFIRM, d.NM.USER_BANNER_BLOCK_CANCEL)
    }]
  })
}