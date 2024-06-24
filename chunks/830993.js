n.d(t, {
  Z: function() {
    return T
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  r = n(481060),
  a = n(58540),
  o = n(619915),
  u = n(620662),
  c = n(841784),
  d = n(471445),
  h = n(430824),
  g = n(496675),
  p = n(158776),
  m = n(979651),
  C = n(823379),
  E = n(355363),
  f = n(737592),
  _ = n(561788),
  I = n(135724),
  N = n(543432),
  Z = n(981631),
  S = n(689938),
  x = n(854018);

function T(e) {
  var t, d;
  let {
    channel: h,
    guild: g,
    onAction: m,
    voiceStates: E,
    isChannelSelected: _,
    shouldShowSettingNudge: I
  } = e;
  ! function(e, t) {
    let n = i.useMemo(() => {
      var n;
      return null == t || t.length > 50 ? {} : {
        [e.getGuildId()]: null !== (n = t.map(e => {
          let {
            user: t
          } = e;
          return t.id
        })) && void 0 !== n ? n : []
      }
    }, [e, t]);
    (0, a.$)(n)
  }(h, E);
  let N = (0, o.ZP)(h),
    T = Array.from((0, o.uF)(N).values()),
    v = null !== (t = null == E ? void 0 : E.filter(C.lm)) && void 0 !== t ? t : [],
    A = e => t => [Z.IIU.PLAYING, Z.IIU.WATCHING].includes(t.type) && (null != t.assets || null != t.state || null != t.details || null != t.party) && (null == t.session_id || t.session_id === e.voiceState.sessionId) || t.type === Z.IIU.LISTENING,
    M = (0, s.e7)([p.Z], () => {
      let e = {};
      return v.forEach(t => {
        let n = p.Z.findActivity(t.user.id, A(t));
        if (null != n && !(0, c.Z)(n)) {
          var l, i, s, r;
          let a = "".concat(null !== (i = n.application_id) && void 0 !== i ? i : "", ":").concat(null !== (s = null === (l = n.party) || void 0 === l ? void 0 : l.id) && void 0 !== s ? s : t.user.id),
            o = null !== (r = e[a]) && void 0 !== r ? r : {
              members: [],
              activity: n
            };
          o.members.push(t), !(0, u.Z)(o.activity, Z.xjy.JOIN) && (o.activity = n), e[a] = o
        }
      }), Object.values(e)
    }, [v], s.pF);
  return M.length + T.length === 0 ? null : (0, l.jsxs)(r.Scroller, {
    className: x.container,
    children: [(0, l.jsx)(L, {
      channel: h,
      isChannelSelected: _,
      voiceStatesCount: null !== (d = null == E ? void 0 : E.length) && void 0 !== d ? d : 0
    }), (0, l.jsx)("div", {
      className: x.headerDivider
    }), T.map((e, t) => {
      var n;
      return (0, l.jsx)(f.Z, {
        embeddedApp: e,
        presenceActivity: null !== (n = e.presenceActivity) && void 0 !== n ? n : void 0,
        channel: h,
        onAction: m
      }, t)
    }), M.map((e, t) => {
      let {
        members: n,
        activity: i
      } = e;
      return (0, l.jsx)(f.Z, {
        presenceActivity: i,
        channel: h,
        members: n,
        onAction: m
      }, t)
    }), I && (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)("div", {
        className: x.headerDivider
      }), (0, l.jsx)("div", {
        className: x.settingNudgeText,
        children: (0, l.jsx)(r.Text, {
          variant: "text-xs/normal",
          tag: "span",
          children: S.Z.Messages.VOICE_CHANNEL_ACTIVITY_STATUS_REDIRECT.format({
            onClick: () => {
              (0, r.openModalLazy)(async () => {
                let {
                  default: e
                } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("19503"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("8016"), n.e("33053"), n.e("68136"), n.e("19464"), n.e("76540"), n.e("4934"), n.e("22646"), n.e("87624"), n.e("5528"), n.e("44517"), n.e("43331"), n.e("30419"), n.e("18824"), n.e("31649"), n.e("41662"), n.e("97403"), n.e("49508"), n.e("37269"), n.e("54535"), n.e("54443"), n.e("87249")]).then(n.bind(n, 241420));
                return t => (0, l.jsx)(e, {
                  ...t,
                  guild: g
                })
              })
            }
          })
        })
      })]
    })]
  })
}

function L(e) {
  let {
    channel: t,
    isChannelSelected: n,
    voiceStatesCount: i
  } = e, r = (0, s.e7)([g.Z], () => !g.Z.can(Z.Plq.CONNECT, t)), a = (0, s.e7)([m.Z], () => m.Z.hasVideo(t.id)), o = (0, E.ZP)({
    channel: t,
    locked: r,
    video: a,
    selected: n
  }), u = (0, s.e7)([h.Z], () => h.Z.getGuild(t.guild_id));
  return null == (0, d.KS)(t, u) ? null : (0, l.jsxs)("div", {
    className: x.popoutHeaderContainer,
    children: [(0, l.jsx)(_.Z, {
      channel: t
    }), o ? (0, l.jsx)(I.Z, {
      userCount: i,
      video: a,
      channel: t
    }) : (0, l.jsx)(N.Z, {
      userCount: i
    })]
  })
}