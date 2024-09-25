n.d(t, {
    ZP: function () {
        return R;
    },
    wz: function () {
        return O;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(442837),
    o = n(481060),
    s = n(555573),
    l = n(10718),
    u = n(895924),
    c = n(124072),
    d = n(665906),
    _ = n(695346),
    E = n(592125),
    f = n(703558),
    h = n(496675),
    p = n(944486),
    m = n(585483),
    I = n(981631),
    T = n(689079),
    g = n(665692),
    S = n(689938),
    A = n(634996);
function v(e, t, n, i, a) {
    if (null == e) return;
    let c = () => {
        let r = E.Z.getChannel(e);
        if (null == r) return;
        let { command: o, application: c } = l.Xq(r, n, a);
        if (null != o && o.untranslatedName === t) {
            var d, _;
            m.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != c
                    ? {
                          type: u.Qi.APPLICATION,
                          id: c.id,
                          icon: c.icon,
                          name: null !== (_ = null == c ? void 0 : null === (d = c.bot) || void 0 === d ? void 0 : d.username) && void 0 !== _ ? _ : c.name,
                          application: c
                      }
                    : null;
            s.Po({
                channelId: e,
                command: null,
                section: null
            }),
                s.Po({
                    channelId: e,
                    command: o,
                    section: t,
                    location: i
                });
        }
    };
    '' !== f.Z.getDraft(e, f.d.ChannelMessage)
        ? (0, o.openModal)((t) =>
              (0, r.jsx)(o.ConfirmModal, {
                  header: S.Z.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
                  confirmText: S.Z.Messages.CLEAR,
                  cancelText: S.Z.Messages.CANCEL,
                  onConfirm: () => c(),
                  confirmButtonColor: o.Button.Colors.BRAND,
                  onCloseCallback: () => {
                      m.S.dispatch(I.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
                  ...t,
                  children: (0, r.jsx)(o.Text, {
                      variant: 'text-md/normal',
                      children: S.Z.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
                  })
              })
          )
        : c();
}
function N(e) {
    var t;
    let { node: n, output: s, state: f } = e,
        m = (0, a.e7)(
            [E.Z, p.Z],
            () => {
                var e;
                return E.Z.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : p.Z.getChannelId());
            },
            [n.channelId]
        ),
        { hasSendMessagePerm: S, hasUseAppCommandsPerm: A } = (0, a.cj)([h.Z], () => {
            let e = h.Z.can(I.Plq.SEND_MESSAGES, m);
            return {
                hasSendMessagePerm: e,
                hasUseAppCommandsPerm: h.Z.can(I.Plq.USE_APPLICATION_COMMANDS, m)
            };
        }),
        { command: N } = l.YZ(m, null !== (t = n.commandKey) && void 0 !== t ? t : ''),
        O = _.dN.useSetting(),
        R = i.useMemo(() => {
            if (null == N || null == m || N.untranslatedName !== n.commandName || O) return !1;
            let e = m.isPrivate();
            if ((0, d.xl)(m) || (!e && !S)) return !1;
            let t = (null == N ? void 0 : N.applicationId) === T.bi.BUILT_IN;
            return !!e || !!t || !!A || !1;
        }, [m, N, S, A, n.commandName, O]),
        C = i.useCallback(
            (e) => {
                null == e || e.stopPropagation(), null != m && null != n.commandName && null != n.commandKey && v(m.id, n.commandName, n.commandKey, u.Vh.MENTION);
            },
            [m, n.commandKey, n.commandName]
        );
    return R
        ? (0, r.jsx)(
              o.Tooltip,
              {
                  text: n.output,
                  position: 'top',
                  children: (e) => {
                      let { onMouseEnter: t, onMouseLeave: i } = e;
                      return (0, r.jsxs)(
                          c.Z,
                          {
                              role: 'link',
                              onClick: C,
                              onMouseEnter: t,
                              onMouseLeave: i,
                              children: [g.GI, s(n.content, f)]
                          },
                          f.key
                      );
                  }
              },
              f.key
          )
        : (0, r.jsxs)('span', {
              children: [g.GI, s(n.content, f)]
          });
}
function O(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: s, onClick: l } = e,
        c = (0, a.e7)([p.Z], () => p.Z.getChannelId()),
        d = (e) => {
            null == e || e.stopPropagation(), v(c, n, t, u.Vh.POPULAR_COMMANDS, s), null == l || l(t);
        };
    return (0, r.jsx)(o.Tooltip, {
        text: i,
        position: 'top',
        tooltipContentClassName: A.tooltip,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: i } = e;
            return (0, r.jsxs)(o.Button, {
                color: o.ButtonColors.PRIMARY,
                size: o.ButtonSizes.ICON,
                onClick: d,
                onMouseEnter: t,
                onMouseLeave: i,
                children: ['/', n]
            });
        }
    });
}
function R(e) {
    return {
        react: (e, t, n) =>
            (0, r.jsx)(N, {
                node: e,
                output: t,
                state: n
            })
    };
}
