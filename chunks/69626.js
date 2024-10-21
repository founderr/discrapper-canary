n.d(t, {
    ZP: function () {
        return v;
    },
    wz: function () {
        return O;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(555573),
    l = n(10718),
    u = n(895924),
    c = n(124072),
    d = n(665906),
    _ = n(695346),
    E = n(592125),
    f = n(703558),
    h = n(496675),
    p = n(944486),
    I = n(585483),
    m = n(981631),
    T = n(689079),
    S = n(665692),
    g = n(689938),
    A = n(634996);
function N(e, t, n, i, a) {
    if (null == e) return;
    let c = () => {
        let r = E.Z.getChannel(e);
        if (null == r) return;
        let { command: s, application: c } = l.Xq(r, n, a);
        if (null != s && s.untranslatedName === t) {
            var d, _;
            I.S.dispatch(m.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
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
            o.Po({
                channelId: e,
                command: null,
                section: null
            }),
                o.Po({
                    channelId: e,
                    command: s,
                    section: t,
                    location: i
                });
        }
    };
    '' !== f.Z.getDraft(e, f.d.ChannelMessage)
        ? (0, s.openModal)((t) =>
              (0, r.jsx)(s.ConfirmModal, {
                  header: g.Z.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
                  confirmText: g.Z.Messages.CLEAR,
                  cancelText: g.Z.Messages.CANCEL,
                  onConfirm: () => c(),
                  confirmButtonColor: s.Button.Colors.BRAND,
                  onCloseCallback: () => {
                      I.S.dispatch(m.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
                  ...t,
                  children: (0, r.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      children: g.Z.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
                  })
              })
          )
        : c();
}
function R(e) {
    var t;
    let { node: n, output: o, state: f } = e,
        I = (0, a.e7)(
            [E.Z, p.Z],
            () => {
                var e;
                return E.Z.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : p.Z.getChannelId());
            },
            [n.channelId]
        ),
        { hasSendMessagePerm: g, hasUseAppCommandsPerm: A } = (0, a.cj)([h.Z], () => {
            let e = h.Z.can(m.Plq.SEND_MESSAGES, I);
            return {
                hasSendMessagePerm: e,
                hasUseAppCommandsPerm: h.Z.can(m.Plq.USE_APPLICATION_COMMANDS, I)
            };
        }),
        { command: R } = l.YZ(I, null !== (t = n.commandKey) && void 0 !== t ? t : ''),
        O = _.dN.useSetting(),
        v = i.useMemo(() => {
            if (null == R || null == I || R.untranslatedName !== n.commandName || O) return !1;
            let e = I.isPrivate();
            if ((0, d.xl)(I) || (!e && !g)) return !1;
            let t = (null == R ? void 0 : R.applicationId) === T.bi.BUILT_IN;
            return !!e || !!t || !!A || !1;
        }, [I, R, g, A, n.commandName, O]),
        C = i.useCallback(
            (e) => {
                null == e || e.stopPropagation(), null != I && null != n.commandName && null != n.commandKey && N(I.id, n.commandName, n.commandKey, u.Vh.MENTION);
            },
            [I, n.commandKey, n.commandName]
        );
    return v
        ? (0, r.jsx)(
              s.Tooltip,
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
                              children: [S.GI, o(n.content, f)]
                          },
                          f.key
                      );
                  }
              },
              f.key
          )
        : (0, r.jsxs)('span', {
              children: [S.GI, o(n.content, f)]
          });
}
function O(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: o, onClick: l } = e,
        c = (0, a.e7)([p.Z], () => p.Z.getChannelId()),
        d = (e) => {
            null == e || e.stopPropagation(), N(c, n, t, u.Vh.POPULAR_COMMANDS, o), null == l || l(t);
        };
    return (0, r.jsx)(s.Tooltip, {
        text: i,
        position: 'top',
        tooltipContentClassName: A.tooltip,
        children: (e) => {
            let { onMouseEnter: t, onMouseLeave: i } = e;
            return (0, r.jsxs)(s.Button, {
                color: s.ButtonColors.PRIMARY,
                size: s.ButtonSizes.ICON,
                onClick: d,
                onMouseEnter: t,
                onMouseLeave: i,
                children: ['/', n]
            });
        }
    });
}
function v(e) {
    return {
        react: (e, t, n) =>
            (0, r.jsx)(R, {
                node: e,
                output: t,
                state: n
            })
    };
}
