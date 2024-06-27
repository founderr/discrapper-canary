"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
  }
}), n(47120);
var i = n(729594),
  r = n(873546),
  s = n(570140),
  o = n(447543),
  a = n(230711),
  l = n(581364),
  u = n(132871),
  _ = n(960904),
  c = n(830121),
  d = n(15274),
  E = n(924301),
  I = n(543842),
  T = n(754688),
  h = n(336197),
  f = n(540709),
  S = n(881706),
  A = n(701190),
  N = n(944486),
  m = n(914010),
  O = n(771845),
  R = n(626135),
  p = n(591759);
n(782568);
var g = n(981631);
async function C(e, t) {
  await s.Z.dispatch({
    type: "INVITE_MODAL_OPEN",
    invite: e,
    code: t,
    context: g.IlC.APP
  })
}
async function v(e) {
  var t;
  let n = A.Z.getInvite(e.code);
  if (null == n) {
    let {
      invite: t
    } = await o.Z.resolveInvite(e.code, "Markdown Link");
    n = t
  }
  if (null == n) return;
  if (n.state === g.r2o.EXPIRED || n.state === g.r2o.BANNED || n.state === g.r2o.ERROR) {
    await C(n, e.code);
    return
  }
  let i = O.ZP.getFlattenedGuildIds(),
    r = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id;
  null != r && i.includes(r) ? o.Z.transitionToInviteSync(n) : await C(n, e.code)
}
let L = {
  skipExtensionCheck: void 0,
  analyticsLocations: []
};

function D(e) {
  let {
    skipExtensionCheck: t,
    analyticsLocations: s
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L, o = (0, c.zO)(e);
  if (null != o && (o.type === _.g.INVITE || o.type === _.g.EMBEDDED_ACTIVITY_INVITE)) return e => (null == e || e.preventDefault(), v(o), !0);
  if (null != o && o.type === _.g.APP_DIRECTORY_PROFILE) return e => {
    var t;
    null == e || e.preventDefault();
    let {
      code: i
    } = o, s = null !== (t = m.Z.getGuildId()) && void 0 !== t ? t : void 0;
    return R.default.track(g.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
      application_id: i,
      device_platform: r.tq ? "mobile_web" : "desktop_web",
      guild_id: s,
      channel_id: N.Z.getChannelId()
    }), Promise.resolve().then(n.bind(n, 147890)).then(e => {
      let {
        goToAppDirectory: t
      } = e, {
        ApplicationDirectoryViews: r
      } = n(132871);
      t({
        view: r.APPLICATION,
        applicationId: i,
        guildId: s,
        entrypoint: {
          name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
        }
      })
    }), !0
  };
  if (null != o && o.type === _.g.GUILD_PRODUCT) return e => {
    null == e || e.preventDefault();
    let [t, i] = o.code.split("-");
    return n.e("84239").then(n.bind(n, 838433)).then(e => {
      let {
        openGuildProductLink: n
      } = e;
      n(t, i)
    }), !0
  };
  let {
    path: A,
    hostname: O = "",
    host: C,
    query: D,
    hash: M
  } = i.parse(e), P = p.Z.isDiscordHostname(O) || p.Z.isDiscordLocalhost(C, O);
  if (P && (null == A ? void 0 : A.startsWith("/application-directory"))) {
    let e;
    let t = A.split("/"),
      [, , i, s] = t;
    5 === t.length && (e = t[4]);
    let o = null != i && (0, l.BH)(i) ? i : void 0;
    return t => {
      var a;
      null == t || t.preventDefault();
      let {
        ApplicationDirectoryProfileSections: l
      } = n(272242), {
        ApplicationDirectoryViews: _
      } = n(132871), c = null !== (a = m.Z.getGuildId()) && void 0 !== a ? a : void 0, d = _.HOME;
      return "search" === i && (d = _.SEARCH), null != o && (d = _.APPLICATION, R.default.track(g.rMx.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
        application_id: o,
        device_platform: r.tq ? "mobile_web" : "desktop_web",
        guild_id: c,
        channel_id: N.Z.getChannelId()
      })), Promise.resolve().then(n.bind(n, 147890)).then(t => {
        let {
          goToAppDirectory: n
        } = t;
        n({
          view: d,
          applicationId: o,
          guildId: c,
          applicationSection: (0, I.Z)(l, s),
          entrypoint: {
            name: u.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
          },
          skuId: e
        })
      }), !0
    }
  }
  if (null != A && P && p.Z.isAppRoute(A)) {
    let e = {};
    return null != D && (e.search = D), null != M && (e.hash = M), t => (null == t || t.preventDefault(), (0, h.Z)(A, Object.keys(e).length > 0 ? e : null), !0)
  }
  if (null != A && P) {
    let {
      getOAuth2AuthorizeProps: t,
      openOAuth2ModalWithCreateGuildModal: i
    } = n(69580), r = t(e);
    if (null != r) return e => (null == e || e.preventDefault(), i(r), !0)
  }
  let y = (0, T.Ao)(A);
  if (null != A && P && null != y) return e => {
    null == e || e.preventDefault();
    let t = m.Z.getGuildId();
    null != y.guildId && "" !== y.guildId && y.guildId !== t && (0, h.Z)(g.Z5c.CHANNEL(y.guildId));
    let n = E.ZP.getGuildScheduledEvent(y.guildEventId);
    return null != n && (0, d.bO)({
      eventId: n.id
    }), !0
  };
  if (P && (null == A ? void 0 : A.startsWith("/settings/"))) {
    let {
      default: e
    } = n(357269), t = e(A);
    if (null != t) return e => (null == e || e.preventDefault(), a.Z.open(t.section, t.subsection, {
      openWithoutBackstack: !1,
      impressionSource: t.source,
      analyticsLocations: s
    }), !0)
  }
  if (!t && null != (0, S.v)(e)) return t => (null == t || t.preventDefault(), f.Z.show(e), !0)
}