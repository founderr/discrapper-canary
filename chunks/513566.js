    "use strict";
    t.r(a), t("47120");
    var d = t("348327"),
      c = t.n(d),
      n = t("392711"),
      i = t.n(n),
      f = t("570140"),
      o = t("846027"),
      r = t("287734"),
      l = t("317770"),
      s = t("829750"),
      b = t("189771"),
      u = t("67844"),
      p = t("173507"),
      h = t("592125"),
      m = t("131951"),
      _ = t("944486"),
      E = t("358085"),
      I = t("998502"),
      g = t("981631"),
      O = t("689938");

    function T(e, a, t) {
      return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[a] = t, e
    }
    class S extends l.default {
      _initialize() {
        this.isSupported && (f.default.subscribe("AUDIO_SET_MODE", this.handleViewUpdate), f.default.subscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), f.default.subscribe("START_SESSION", this.handleViewUpdate), f.default.subscribe("CONNECTION_OPEN", this.handleViewUpdate), f.default.subscribe("CONNECTION_CLOSED", this.handleViewUpdate), f.default.subscribe("CALL_CREATE", this.handleViewUpdate), f.default.subscribe("CALL_UPDATE", this.handleViewUpdate), f.default.subscribe("CALL_DELETE", this.handleViewUpdate), f.default.subscribe("CHANNEL_DELETE", this.handleViewUpdate), f.default.subscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), f.default.subscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), f.default.subscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), f.default.subscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), f.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate), I.default.on("THUMBAR_BUTTONS_CLICKED", (e, a) => this.buttonClicked(a)))
      }
      _terminate() {
        this.isSupported && (f.default.unsubscribe("AUDIO_SET_MODE", this.handleViewUpdate), f.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleViewUpdate), f.default.unsubscribe("START_SESSION", this.handleViewUpdate), f.default.unsubscribe("CONNECTION_OPEN", this.handleViewUpdate), f.default.unsubscribe("CONNECTION_CLOSED", this.handleViewUpdate), f.default.unsubscribe("CALL_CREATE", this.handleViewUpdate), f.default.unsubscribe("CALL_UPDATE", this.handleViewUpdate), f.default.unsubscribe("CALL_DELETE", this.handleViewUpdate), f.default.unsubscribe("CHANNEL_DELETE", this.handleViewUpdate), f.default.unsubscribe("VOICE_STATE_UPDATES", this.handleViewUpdate), f.default.unsubscribe("AUDIO_TOGGLE_SELF_MUTE", this.handleViewUpdate), f.default.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this.handleViewUpdate), f.default.unsubscribe("AUDIO_TOGGLE_LOCAL_MUTE", this.handleViewUpdate), f.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleViewUpdate))
      }
      setThumbarButtons(e) {
        !c()(this.prevButtons, e) && (this.prevButtons = e, I.default.setThumbarButtons(e))
      }
      constructor(...e) {
        super(...e), T(this, "callbackActions", {
          [I.ThumbarButtonName.VIDEO]: () => {
            m.default.isVideoEnabled() ? o.default.setVideoEnabled(!1) : (0, p.default)(() => o.default.setVideoEnabled(!0), g.AppContext.APP)
          },
          [I.ThumbarButtonName.MUTE]: () => o.default.toggleSelfMute(),
          [I.ThumbarButtonName.DEAFEN]: () => o.default.toggleSelfDeaf(),
          [I.ThumbarButtonName.DISCONNECT]: () => r.default.disconnect()
        }), T(this, "isSupported", (0, E.isMac)() || (0, E.isWindows)()), T(this, "prevButtons", []), T(this, "buttonClicked", e => {
          if (!(e.buttonName in this.callbackActions)) {
            console.error('ThumbarButtonsManager: Unknown callback eventName: "'.concat(e.buttonName, '"'), e);
            return
          }
          this.callbackActions[e.buttonName]()
        }), T(this, "handleViewUpdate", i().debounce(() => {
          let e = _.default.getVoiceChannelId();
          if (null == e) {
            this.setThumbarButtons([]);
            return
          }
          let a = m.default.isSelfMute(),
            t = m.default.isSelfDeaf(),
            d = m.default.isVideoEnabled(),
            c = m.default.isVideoAvailable(),
            n = h.default.getChannel(e),
            i = null == n || (0, b.getVideoPermission)(n),
            {
              reachedLimit: f,
              limit: o
            } = null != n ? (0, s.getChannelVideoLimit)(n) : {
              reachedLimit: void 0,
              limit: void 0
            },
            r = (0, u.getVideoButtonLabel)({
              enabled: d,
              join: !1,
              channel: n,
              cameraUnavailable: !c,
              hasPermission: i,
              channelLimit: o,
              channelLimitReached: f
            });
          this.setThumbarButtons([{
            name: I.ThumbarButtonName.VIDEO,
            active: !d,
            tooltip: r,
            flags: c ? [] : ["disabled"]
          }, {
            name: I.ThumbarButtonName.MUTE,
            active: a,
            tooltip: a ? O.default.Messages.UNMUTE : O.default.Messages.MUTE
          }, {
            name: I.ThumbarButtonName.DEAFEN,
            active: t,
            tooltip: t ? O.default.Messages.UNDEAFEN : O.default.Messages.DEAFEN
          }, {
            name: I.ThumbarButtonName.DISCONNECT,
            active: !0,
            tooltip: O.default.Messages.DISCONNECT_SELF
          }])
        }, 100))
      }
    }
    a.default = new S