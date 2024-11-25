n.d(t, {
    ZP: function () {
        return N;
    },
    wz: function () {
        return A;
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
    f = n(695346),
    _ = n(592125),
    p = n(703558),
    h = n(496675),
    m = n(944486),
    g = n(585483),
    E = n(981631),
    v = n(689079),
    I = n(665692),
    b = n(388032),
    T = n(170686);
function S(e, t, n, i, a) {
    if (null == e) return;
    let c = () => {
        let r = _.Z.getChannel(e);
        if (null == r) return;
        let { command: s, application: c } = l.Xq(r, n, a);
        if (null != s && s.untranslatedName === t) {
            var d, f;
            g.S.dispatch(E.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
            let t =
                null != c
                    ? {
                          type: u.Qi.APPLICATION,
                          id: c.id,
                          icon: c.icon,
                          name: null !== (f = null == c ? void 0 : null === (d = c.bot) || void 0 === d ? void 0 : d.username) && void 0 !== f ? f : c.name,
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
    '' !== p.Z.getDraft(e, p.d.ChannelMessage)
        ? (0, s.openModal)((t) =>
              (0, r.jsx)(s.ConfirmModal, {
                  header: b.intl.string(b.t.pe26Cg),
                  confirmText: b.intl.string(b.t.VkKicX),
                  cancelText: b.intl.string(b.t['ETE/oK']),
                  onConfirm: () => c(),
                  confirmButtonColor: s.Button.Colors.BRAND,
                  onCloseCallback: () => {
                      g.S.dispatch(E.CkL.FOCUS_CHANNEL_TEXT_AREA, { channelId: e });
                  },
                  ...t,
                  children: (0, r.jsx)(s.Text, {
                      variant: 'text-md/normal',
                      children: b.intl.string(b.t['+awCIy'])
                  })
              })
          )
        : c();
}
function y(e) {
    var t;
    let { node: n, output: o, state: p } = e,
        g = (0, a.e7)(
            [_.Z, m.Z],
            () => {
                var e;
                return _.Z.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : m.Z.getChannelId());
            },
            [n.channelId]
        ),
        { hasSendMessagePerm: b, hasUseAppCommandsPerm: T } = (0, a.cj)([h.Z], () => {
            let e = h.Z.can(E.Plq.SEND_MESSAGES, g);
            return {
                hasSendMessagePerm: e,
                hasUseAppCommandsPerm: h.Z.can(E.Plq.USE_APPLICATION_COMMANDS, g)
            };
        }),
        { command: y } = l.YZ(g, null !== (t = n.commandKey) && void 0 !== t ? t : ''),
        A = f.dN.useSetting(),
        N = i.useMemo(() => {
            if (null == y || null == g || y.untranslatedName !== n.commandName || A) return !1;
            let e = g.isPrivate();
            if ((0, d.xl)(g) || (!e && !b)) return !1;
            let t = (null == y ? void 0 : y.applicationId) === v.bi.BUILT_IN;
            return !!e || !!t || !!T || !1;
        }, [g, y, b, T, n.commandName, A]),
        C = i.useCallback(
            (e) => {
                null == e || e.stopPropagation(), null != g && null != n.commandName && null != n.commandKey && S(g.id, n.commandName, n.commandKey, u.Vh.MENTION);
            },
            [g, n.commandKey, n.commandName]
        );
    return N
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
                              children: [I.GI, o(n.content, p)]
                          },
                          p.key
                      );
                  }
              },
              p.key
          )
        : (0, r.jsxs)('span', {
              children: [I.GI, o(n.content, p)]
          });
}
function A(e) {
    let { commandId: t, commandName: n, commandDescription: i, applicationId: o, onClick: l } = e,
        c = (0, a.e7)([m.Z], () => m.Z.getChannelId()),
        d = (e) => {
            null == e || e.stopPropagation(), S(c, n, t, u.Vh.POPULAR_COMMANDS, o), null == l || l(t);
        };
    return (0, r.jsx)(s.Tooltip, {
        text: i,
        position: 'top',
        tooltipContentClassName: T.tooltip,
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
function N(e) {
    return {
        react: (e, t, n) =>
            (0, r.jsx)(y, {
                node: e,
                output: t,
                state: n
            })
    };
}
