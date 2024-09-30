n.d(t, {
    Z: function () {
        return Z;
    }
}),
    n(47120),
    n(653041);
var i = n(735250),
    l = n(470079),
    r = n(442837),
    a = n(481060),
    s = n(58540),
    o = n(619915),
    c = n(620662),
    u = n(841784),
    d = n(471445),
    h = n(430824),
    p = n(496675),
    f = n(158776),
    _ = n(979651),
    m = n(823379),
    g = n(355363),
    C = n(737592),
    I = n(561788),
    E = n(135724),
    N = n(543432),
    x = n(981631),
    S = n(689938),
    v = n(289223);
function Z(e) {
    var t, d;
    let { channel: h, guild: p, onAction: _, voiceStates: g, isChannelSelected: I, shouldShowSettingNudge: E } = e;
    !(function (e, t) {
        let n = l.useMemo(() => {
            var n;
            return null == t || t.length > 50
                ? {}
                : {
                      [e.getGuildId()]:
                          null !==
                              (n = t.map((e) => {
                                  let { user: t } = e;
                                  return t.id;
                              })) && void 0 !== n
                              ? n
                              : []
                  };
        }, [e, t]);
        (0, s.$)(n);
    })(h, g);
    let N = (0, o.ZP)(h),
        Z = Array.from((0, o.uF)(N).values()),
        b = null !== (t = null == g ? void 0 : g.filter(m.lm)) && void 0 !== t ? t : [],
        A = (e) => (t) => ([x.IIU.PLAYING, x.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId)) || t.type === x.IIU.LISTENING,
        M = (0, r.e7)(
            [f.Z],
            () => {
                let e = {};
                return (
                    b.forEach((t) => {
                        let n = f.Z.findActivity(t.user.id, A(t));
                        if (null != n && !(0, u.Z)(n)) {
                            var i, l, r, a;
                            let s = ''.concat(null !== (l = n.application_id) && void 0 !== l ? l : '', ':').concat(null !== (r = null === (i = n.party) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : t.user.id),
                                o =
                                    null !== (a = e[s]) && void 0 !== a
                                        ? a
                                        : {
                                              members: [],
                                              activity: n
                                          };
                            o.members.push(t), !(0, c.Z)(o.activity, x.xjy.JOIN) && (o.activity = n), (e[s] = o);
                        }
                    }),
                    Object.values(e)
                );
            },
            [b],
            r.pF
        );
    return M.length + Z.length === 0
        ? null
        : (0, i.jsxs)(a.Scroller, {
              className: v.container,
              children: [
                  (0, i.jsx)(T, {
                      channel: h,
                      isChannelSelected: I,
                      voiceStatesCount: null !== (d = null == g ? void 0 : g.length) && void 0 !== d ? d : 0
                  }),
                  (0, i.jsx)('div', { className: v.headerDivider }),
                  Z.map((e, t) => {
                      var n;
                      return (0, i.jsx)(
                          C.Z,
                          {
                              embeddedApp: e,
                              presenceActivity: null !== (n = e.presenceActivity) && void 0 !== n ? n : void 0,
                              channel: h,
                              onAction: _
                          },
                          t
                      );
                  }),
                  M.map((e, t) => {
                      let { members: n, activity: l } = e;
                      return (0, i.jsx)(
                          C.Z,
                          {
                              presenceActivity: l,
                              channel: h,
                              members: n,
                              onAction: _
                          },
                          t
                      );
                  }),
                  E &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', { className: v.headerDivider }),
                              (0, i.jsx)('div', {
                                  className: v.settingNudgeText,
                                  children: (0, i.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      tag: 'span',
                                      children: S.Z.Messages.VOICE_CHANNEL_ACTIVITY_STATUS_REDIRECT.format({
                                          onClick: () => {
                                              (0, a.openModalLazy)(async () => {
                                                  let { default: e } = await Promise.all([n.e('96427'), n.e('51514'), n.e('81039'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('72652'), n.e('32776'), n.e('79915'), n.e('33053'), n.e('8016'), n.e('37581'), n.e('68136'), n.e('76540'), n.e('87624'), n.e('22646'), n.e('25183'), n.e('5528'), n.e('18146'), n.e('57674'), n.e('30419'), n.e('48923'), n.e('18824'), n.e('37229'), n.e('52619'), n.e('18815'), n.e('28044'), n.e('74925'), n.e('6294')]).then(n.bind(n, 241420));
                                                  return (t) =>
                                                      (0, i.jsx)(e, {
                                                          ...t,
                                                          guild: p
                                                      });
                                              });
                                          }
                                      })
                                  })
                              })
                          ]
                      })
              ]
          });
}
function T(e) {
    let { channel: t, isChannelSelected: n, voiceStatesCount: l } = e,
        a = (0, r.e7)([p.Z], () => !p.Z.can(x.Plq.CONNECT, t)),
        s = (0, r.e7)([_.Z], () => _.Z.hasVideo(t.id)),
        o = (0, g.ZP)({
            channel: t,
            locked: a,
            video: s,
            selected: n
        }),
        c = (0, r.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
    return null == (0, d.KS)(t, c)
        ? null
        : (0, i.jsxs)('div', {
              className: v.popoutHeaderContainer,
              children: [
                  (0, i.jsx)(I.Z, { channel: t }),
                  o
                      ? (0, i.jsx)(E.Z, {
                            userCount: l,
                            video: s,
                            channel: t
                        })
                      : (0, i.jsx)(N.Z, { userCount: l })
              ]
          });
}
